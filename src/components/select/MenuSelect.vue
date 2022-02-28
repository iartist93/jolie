<template>
  <div ref="rootRef" class="jolie-menu-select">
    <menu-button ref="menuButtonRef">
      <button ref="selectButtonRef" class="menu-select-button">
        <span v-html="selectedtext" class="flex" />
        <div class="arrow-down-wrapper">
          <img
            src="@/assets/icons/arrow-down.svg"
            alt="arrow-down"
            class="arrow-down"
          />
        </div>
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
  optionValueType,
  useMenuSelect,
  UseMenuSelectProps,
} from '@/composables/select/useMenuSelect';
import { useResizeObserver } from '@/composables/useReszieObserver';
import MenuList from '../menu/MenuList.vue';
import MenuButton from '../menu/MenuButton.vue';

export default {
  components: { MenuList, MenuButton },
  props: {
    value: {
      type: [Object, String, Number, Array],
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
    const selectedtext = ref<string>('');

    const menuContext = useMenuSelect(props as unknown as UseMenuSelectProps);
    provide('menuContext', menuContext);

    const { onOpen, onClose, isOpen, selected, onSelect } = menuContext;

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType
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

    const setSelectedText = () => {
      selectedtext.value = (rootRef.value as HTMLElement).querySelector(
        '.jolie-select-option[data-selected="1"]'
      )?.innerHTML as string;

      emit('change', selected.value);
      emit('input', selected.value);
    };

    useResizeObserver(menuButtonRef as Ref<ComponentInstance>, calcWidth);

    watch(selected, () => {
      setSelectedText();
    });

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
          '.jolie-select-option'
        ) as HTMLElement;

        firstItem.dataset['selected'] = '1';
        selectedtext.value = firstItem?.innerHTML as string;

        onSelect(JSON.parse(firstItem.dataset['value'] as string));
      } else {
        onSelect(props.value as optionValueType);
        setSelectedText();
      }
    });

    onBeforeUnmount(() => {
      if (props.openOnHover) {
        (rootRef.value as HTMLElement).removeEventListener('mouseover', onOpen);
        (rootRef.value as HTMLElement).removeEventListener(
          'mouseleave',
          onClose
        );
      }
    });

    return {
      rootRef,
      selectButtonRef,
      menuButtonRef,
      isOpen,
      menuListWidth,
      selectedtext,
    };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-select {
  position: relative;
  display: flex;
  flex-direction: column;
  // width: fit-content;
}

.menu-select-button {
  display: flex;
  align-items: center;
  background-color: white;
  color: #a5a5a5;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid #e1dcdc;

  .arrow-down-wrapper {
    margin-left: auto;

    img {
      margin-left: 20px;
    }
  }
}
</style>
