<template>
  <div
    ref="rootRef"
    class="jolie-menu-list"
    :class="{ show: isOpen, dropup }"
    :style="{
      width: `${width}px`,
      'background-color': backgroundColor,
      'border-radius': `${borderRadius}px`,
      '--jolie-menu-list-border-radius': `${borderRadius}px`,
      '--menu-list-height': `${menuListHeight + offset}px`,
      '--menu-list-offset-x': `${offsetX}px`,
      '--menu-button-height': `${menuButtonHeight + offset}px`,
    }"
  >
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { useMenuList } from '@/composables/menu/useMenuList';
import { onMounted, onUnmounted, onUpdated, ref } from '@vue/composition-api';

export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'beige',
    },
    width: {
      type: Number,
      default: 200,
    },
    borderRadius: {
      type: Number,
      default: 6,
    },
    offset: {
      type: Number,
      default: 10,
    },
    anchor: {
      type: String,
      default: 'left', // left, right, middle
    },
  },
  setup(props) {
    const rootRef = ref(null);
    const menu = ref(null);
    const dropup = ref(false);
    const menuListHeight = ref(0);
    const menuListWidth = ref(0);

    const menuButtonHeight = ref(0);
    const menuButtonWidth = ref(0);
    const offsetX = ref(0);

    const { isOpen } = useMenuList(rootRef);

    const updateMenuPosition = () => {
      menu.value = rootRef.value.parentElement;

      const toggleButton =
        menu.value.getElementsByClassName('jolie-menu-button')[0];
      const offsetY = toggleButton.getBoundingClientRect().y;
      const totalViewportHeight = document.documentElement.clientHeight;

      menuListHeight.value = rootRef.value.getBoundingClientRect().height;
      menuListWidth.value = rootRef.value.getBoundingClientRect().width;

      menuButtonHeight.value = toggleButton.getBoundingClientRect().height;
      menuButtonWidth.value = toggleButton.getBoundingClientRect().width;

      const totalMenuHeight = menuButtonHeight.value + menuListHeight.value;

      console.log(menuListWidth, menuButtonWidth);

      offsetX.value =
        props.anchor === 'right'
          ? -(menuListWidth.value - menuButtonWidth.value)
          : props.anchor === 'middle'
          ? -menuListWidth.value / 2 + menuButtonWidth.value / 2
          : 0;

      dropup.value = totalMenuHeight + offsetY > totalViewportHeight;
    };

    onMounted(() => {
      updateMenuPosition();
      document.addEventListener('scroll', updateMenuPosition);
    });

    onUpdated(() => {
      updateMenuPosition();
    });

    onUnmounted(() => {
      document.removeEventListener('scroll', updateMenuPosition);
    });

    return {
      rootRef,
      isOpen,
      menuListHeight,
      menuButtonHeight,
      dropup,
      offsetX,
    };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 1;
  opacity: 0;
  transform-origin: top left;
  visibility: hidden;
  transition: all 50ms cubic-bezier(0.4, 0, 1, 1);

  // TODO: the height calculation get the height after the 0.8 scale
  transform: translate3d(
      var(--menu-list-offset-x),
      var(--menu-button-height),
      0px
    )
    scale(1);

  &.dropup {
    transform: translate3d(
        var(--menu-list-offset-x),
        calc(var(--menu-list-height) * -1),
        0px
      )
      scale(1);
  }

  &.show {
    opacity: 1;
    visibility: visible;
    will-change: transform;
    transform: translate3d(
        var(--menu-list-offset-x),
        var(--menu-button-height),
        0px
      )
      scale(1);

    &.dropup {
      transform: translate3d(
          var(--menu-list-offset-x),
          calc(var(--menu-list-height) * -1),
          0px
        )
        scale(1);
    }
  }
}
</style>

<style lang="scss">
.jolie-menu-list {
  > #header {
    border-top-left-radius: var(--jolie-menu-list-border-radius);
    border-top-right-radius: var(--jolie-menu-list-border-radius);
    margin-bottom: 10px;
  }
}
</style>
