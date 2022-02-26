<template>
  <div ref="rootRef" class="jolie-menu-select">
    <menu-button ref="menuButtonRef">
      <button ref="selectButtonRef" class="menu-select-button">
        <span
          >Selected Option {{ isOpen }}, {{ Math.round(menuListWidth) }}</span
        >
        <img
          src="@/assets/icons/arrow-down.svg"
          alt="arrow-down"
          class="arrow-down"
        />
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
} from '@vue/composition-api';
import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import { useInjectStyle } from '@/composables/useInjectStyle';
import {
  useMenuSelect,
  UseMenuSelectProps,
} from '@/composables/select/useMenuSelect';
import { useResizeObserver } from '@/composables/useReszieObserver';
import MenuList from '../menu/MenuList.vue';
import MenuButton from '../menu/MenuButton.vue';

export default {
  components: { MenuList, MenuButton },
  props: {
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
    openOnHover: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: 300,
    },
  },
  setup(props) {
    const rootRef = ref<HTMLElement | null>(null);
    const selectButtonRef = ref<HTMLElement | null>(null);
    const menuButtonRef = ref<ComponentInstance | null>(null);

    const menuListWidth = ref<number>(props.width as number);

    const menuContext = useMenuSelect(props as unknown as UseMenuSelectProps);
    provide('menuContext', menuContext);
    const { onOpen, onClose, isOpen } = menuContext;

    const propsRef = ref(props);

    const elementStyle = useStyledSystem(propsRef);

    useInjectStyle(selectButtonRef as Ref<HTMLElement>, elementStyle);

    const calcWidth = (entries) => {
      for (let entry of entries) {
        if (entry.borderBoxSize) {
          if (entry.borderBoxSize[0]) {
            const newSize = Math.round(entry.borderBoxSize[0].inlineSize);
            const threshold = Math.round((menuListWidth.value * 1) / 100);
            if (Math.abs(newSize - menuListWidth.value) > threshold) {
              menuListWidth.value = newSize;
            }
          }
        }
      }
    };

    useResizeObserver(menuButtonRef as Ref<ComponentInstance>, calcWidth);

    onMounted(() => {
      menuListWidth.value = (
        menuButtonRef.value as ComponentInstance
      ).$el.getBoundingClientRect().width;

      if (props.openOnHover) {
        (rootRef.value as HTMLElement).addEventListener('mouseover', onOpen);
        (rootRef.value as HTMLElement).addEventListener('mouseleave', onClose);
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

    return { rootRef, selectButtonRef, menuButtonRef, isOpen, menuListWidth };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-select {
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.menu-select-button {
  display: flex;
  align-items: center;
  background-color: white;
  color: #a5a5a5;
  padding: 15px 20px;
  border-radius: 6px;
  border: 1px solid #e1dcdc;

  img {
    margin-left: 30px;
  }
}
</style>
