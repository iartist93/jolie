<template>
  <div ref="rootRef" class="jolie-multiple-label-select">
    <menu-button ref="menuButtonRef">
      <button ref="selectButtonRef" class="label-list">
        <span
          v-for="label in selectedList"
          :key="label.text"
          class="label-item"
        >
          <span>{{ label.text }} </span>
          <button @click.stop="onRemoveLabel(label)">
            <img
              src="@/assets/icons/close-4.svg"
              alt="close"
              class="close-icon"
            />
          </button>
        </span>
      </button>
    </menu-button>

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
  ComponentInstance,
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
} from '@/composables/select/useMenuMultipleSelect';
import { useResizeObserver } from '@/composables/useReszieObserver';
import MenuList from '../menu/MenuList.vue';
import MenuButton from '../menu/MenuButton.vue';

export default {
  components: { MenuList, MenuButton },
  props: {
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
    const selectButtonRef = ref<HTMLElement | null>(null);
    const menuButtonRef = ref<ComponentInstance | null>(null);
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
    } = menuContext;

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType,
    );

    useInjectStyle(selectButtonRef as Ref<HTMLElement>, elementStyle);

    const calcWidth = (entries) => {
      for (let entry of entries) {
        if (entry.borderBoxSize) {
          if (entry.borderBoxSize[0]) {
            const newSize = Math.round(entry.borderBoxSize[0].inlineSize);
            const oldSize =
              (selectButtonRef.value as HTMLElement).getBoundingClientRect()
                .width || 0;

            const threshold = Math.round(oldSize * 0.01);

            if (Math.abs(newSize - oldSize) > threshold) {
              menuListWidth.value = newSize;
            } else {
              menuListWidth.value = oldSize;
            }
          }
        }
      }
    };

    const onRemoveLabel = (label) => {
      onRemoveFromSelection(label);
    };

    useResizeObserver(menuButtonRef as Ref<ComponentInstance>, calcWidth);

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
      menuListWidth.value = (
        menuButtonRef.value as ComponentInstance
      ).$el.getBoundingClientRect().width;

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
      selectButtonRef,
      menuButtonRef,
      isOpen,
      menuListWidth,
      selectedList,
      onRemoveLabel,
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
    display: flex;
    gap: 15px;

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

    .close-icon {
      width: 25px;
    }
  }
}
</style>
