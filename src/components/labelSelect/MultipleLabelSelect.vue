<template>
  <div ref="rootRef" class="jolie-multiple-label-select">
    <!-- <menu-button ref="menuButtonRef" class="label-list"> -->
    <!-- <button ref="selectButtonRef" class="label-list"> -->
    <div
      @focus="onTextareaFocus"
      tabindex="-1"
      class="label-list menu-anchor-el"
      ref="labelsList"
    >
      <span
        v-for="label in selectedList"
        :key="label.text"
        class="label-item"
        contenteditable="false"
      >
        <span class="label-text">{{ label.text }} </span>
        <button @click.stop="onRemoveLabel(label)" class="close-btn">
          <img
            src="@/assets/icons/close-4.svg"
            alt="close"
            class="close-icon"
          />
        </button>
      </span>
      <input
        ref="newLabelInput"
        type="text"
        name="new-label"
        id="new-label"
        class="new-label-input"
        @change="onAddNewLabel"
      />
    </div>
    <!-- </button> -->
    <!-- </menu-button> -->

    <menu-list :width="menuListWidth">
      <slot></slot>
    </menu-list>
  </div>
</template>

<script lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  Ref,
  // ComponentInstance,
  watch,
} from '@vue/composition-api';

import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import { useInjectStyle } from '@/composables/useInjectStyle';

import {
  menuOptionType,
  useMenuSelect,
  UseMenuSelectProps,
  menuOptionObjectType,
} from '@/composables/select/useMenuMultipleSelect';

// import { useResizeObserver } from '@/composables/useReszieObserver';

import MenuList from '../menu/MenuList.vue';
// import MenuButton from '../menu/MenuButton.vue';

export default {
  components: {
    MenuList,
    // MenuButton
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Array,
    },
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
    openOnHover: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: 'auto',
    },
    pl: {
      type: Number,
      default: 0,
    },
    pr: {
      type: Number,
      default: 0,
    },
    px: {
      type: Number,
      default: 20,
    },
    py: {
      type: Number,
      default: 15,
    },
    p: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    type widthType = number | string;

    const rootRef = ref<HTMLElement | null>(null);
    const newLabelInput = ref<HTMLElement | null>(null);
    const labelsList = ref<HTMLElement | null>(null);

    // const selectButtonRef = ref<HTMLElement | null>(null);
    // const menuButtonRef = ref<ComponentInstance | null>(null);
    const menuListWidth = ref<widthType>(props.width as widthType);

    const menuContext = useMenuSelect(props as unknown as UseMenuSelectProps);
    provide('menuContext', menuContext);

    const {
      onOpen,
      onClose,
      isOpen,
      selectedList,
      onSelectionChange,
      onRemoveFromSelection,
      onAddToSelection,
    } = menuContext;

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType,
    );

    useInjectStyle(labelsList as Ref<HTMLElement>, elementStyle);

    // const calcWidth = (entries) => {
    //   for (let entry of entries) {
    //     if (entry.borderBoxSize) {
    //       if (entry.borderBoxSize[0]) {
    //         const newSize = Math.round(entry.borderBoxSize[0].inlineSize);
    //         const oldSize =
    //           (selectButtonRef.value as HTMLElement).getBoundingClientRect()
    //             .width || 0;

    //         const threshold = Math.round(oldSize * 0.01);

    //         if (Math.abs(newSize - oldSize) > threshold) {
    //           menuListWidth.value = newSize;
    //         } else {
    //           menuListWidth.value = oldSize;
    //         }
    //       }
    //     }
    //   }
    // };

    const onRemoveLabel = (label) => {
      onRemoveFromSelection(label as menuOptionType);

      emit('change', selectedList.value);
      emit('input', selectedList.value);
    };

    const onTextareaFocus = () => {
      onOpen();
      newLabelInput.value?.focus();
    };

    const isLabelInList = (label) => {
      if (typeof (props.list as menuOptionType[])[0] === 'object') {
        return (props.list as menuOptionObjectType[]).find(
          (item) => item.text === label,
        );
      } else if (typeof (props.list as menuOptionType[])[0] === 'string') {
        return (props.list as string[]).find((item) => item === label);
      }
    };

    const isLabelSelected = (label) => {
      if (typeof (props.list as menuOptionType[])[0] === 'object') {
        return (selectedList.value as menuOptionObjectType[]).find(
          (item) => item.text === label,
        );
      } else if (typeof (props.list as menuOptionType[])[0] === 'string') {
        return (selectedList.value as string[]).find((item) => item === label);
      }
    };

    const onAddNewLabel = (ev) => {
      const value = ev.target.value;
      ev.target.value = '';

      // already on the label list?
      const foundLabel = isLabelInList(value);

      // already selected?
      const isSelected = isLabelSelected(value);

      if (foundLabel) {
        if (isSelected) return;

        onAddToSelection(foundLabel);
        return;
      }

      const newLabel = {
        text: value,
        value,
      };

      emit('add-new', newLabel);
      onAddToSelection(newLabel);
    };

    // useResizeObserver(menuButtonRef as Ref<ComponentInstance>, calcWidth);

    watch(
      () => props.value,
      (newValue) => {
        if (newValue) {
          console.log('props value changed === ', newValue);
          onSelectionChange(newValue as menuOptionType[]);
        } else {
          console.log('props value changed !== ', newValue);
        }
      },
    );

    onMounted(() => {
      if (props.openOnHover) {
        (rootRef.value as HTMLElement).addEventListener('mouseover', onOpen);
        (rootRef.value as HTMLElement).addEventListener('mouseleave', onClose);
      }

      if (!props.value) {
        // set selected to the first item in the list or to the placeholder
        const firstItem = (rootRef.value as HTMLElement).querySelector(
          '.jolie-select-option',
        ) as HTMLElement;

        firstItem.dataset['selected'] = '1';

        onSelectionChange(JSON.parse(firstItem.dataset['value'] as string));
      } else {
        onSelectionChange(props.value as menuOptionType[]);
      }
    });

    onBeforeUnmount(() => {
      if (props.openOnHover) {
        (rootRef.value as HTMLElement).removeEventListener('mouseover', onOpen);
        (rootRef.value as HTMLElement).removeEventListener(
          'mouseleave',
          onClose,
        );
      }
    });

    return {
      rootRef,
      // selectButtonRef,
      // menuButtonRef,
      isOpen,
      menuListWidth,
      selectedList,
      onRemoveLabel,
      onTextareaFocus,
      newLabelInput,
      labelsList,
      onAddNewLabel,
    };
  },
};
</script>

<style lang="scss" scoped>
.jolie-multiple-label-select {
  position: relative;
  display: flex;
  flex-direction: column;
  // width: fit-content;

  .label-list {
    padding: 10px;

    display: flex;
    gap: 10px;

    align-items: center;
    background-color: white;
    color: #a5a5a5;
    font-size: 18px;
    border-radius: 6px;
    border: 1px solid #e1dcdc;
    min-height: 60px;
    flex-wrap: wrap;
  }

  .label-item {
    background: rgb(189, 192, 201);
    border-radius: 20px;
    padding: 0.3rem 0.8rem;
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;

    .label-text {
      user-select: none;
      pointer-events: none;
      font-size: 14px;
    }

    .close-btn {
      cursor: pointer;
    }

    .close-icon {
      width: 22px;
    }
  }

  .new-label-input {
    outline: 0;
    border: 0;
    flex: 1;
    width: 10px;
    color: black;
    font-weight: 500;
  }
}
</style>
