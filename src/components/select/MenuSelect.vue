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

<script>
import { onBeforeUnmount, onMounted, provide, ref } from '@vue/composition-api';
import { useStyledSystem } from '@/composables/useStyledSystem';
import { useInjectStyle } from '@/composables/useInjectStyle';
import { useMenuSelect } from '@/composables/select/useMenuSelect';
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
      type: [Number, String],
      default: 300,
    },
  },
  setup(props) {
    const rootRef = ref(null);
    const selectButtonRef = ref(null);
    const menuButtonRef = ref(null);
    const menuListWidth = ref(props.width || 'auto');
    const menuButtonObserver = ref(null);

    const menuContext = useMenuSelect(props);
    provide('menuContext', menuContext);
    const { onOpen, onClose, isOpen } = menuContext;

    const elementStyle = useStyledSystem(props);
    useInjectStyle(selectButtonRef, elementStyle.value);

    const calcWidth = (entries) => {
      for (let entry of entries) {
        if (entry.borderBoxSize) {
          if (entry.borderBoxSize[0]) {
            const newSize = Math.round(entry.borderBoxSize[0].inlineSize);
            const threshold = Math.round((menuListWidth.value * 1) / 100);

            console.log(threshold);

            if (Math.abs(newSize - menuListWidth.value) > threshold) {
              menuListWidth.value = newSize;
              console.log(
                '==========> un observe again!! ',
                menuListWidth.value
              );
            }
          }
        }
      }
    };

    onMounted(() => {
      menuListWidth.value =
        menuButtonRef.value.$el.getBoundingClientRect().width;

      if (props.openOnHover) {
        rootRef.value.addEventListener('mouseover', onOpen);
        rootRef.value.addEventListener('mouseleave', onClose);
      }

      menuButtonObserver.value = new ResizeObserver(calcWidth).observe(
        menuButtonRef.value.$el
      );
    });

    onBeforeUnmount(() => {
      if (props.openOnHover) {
        rootRef.value.removeEventListener('mouseover', onOpen);
        rootRef.value.removeEventListener('mouseleave', onClose);
      }

      menuButtonObserver.value.unobserve(menuButtonRef.value.$el);
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
