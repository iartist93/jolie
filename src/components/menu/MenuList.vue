<template>
  <div
    ref="rootRef"
    class="jolie-menu-list"
    :class="{ show: isOpen, dropup }"
    :style="{
      width: `${width}px`,
      'background-color': backgroundColor,
      'border-radius': `${borderRadius}px`,
      '--menu-list-border-radius': `${borderRadius}px`,
      '--menu-list-transform-x': `${transformX}px`,
      '--menu-list-transform-y': `${transformY}px`,
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
      default: 'white',
    },
    width: {
      type: [Number, String],
      default: 'auto',
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
    const transformX = ref(0);
    const transformY = ref(0);

    const toggleButton = ref(null);

    const { isOpen, openOnHover } = useMenuList(rootRef, toggleButton);

    const updateMenuPosition = () => {
      menu.value = rootRef.value.parentElement;

      toggleButton.value =
        menu.value.getElementsByClassName('jolie-menu-button')[0] ||
        menu.value.getElementsByClassName('menu-anchor-el')[0];

      const menuPositionY = toggleButton.value.getBoundingClientRect().y;
      const totalViewportHeight = document.documentElement.clientHeight;

      menuListHeight.value = rootRef.value.getBoundingClientRect().height;
      menuListWidth.value = rootRef.value.getBoundingClientRect().width;

      menuButtonHeight.value =
        toggleButton.value.getBoundingClientRect().height;
      menuButtonWidth.value = toggleButton.value.getBoundingClientRect().width;

      const totalMenuHeight = menuButtonHeight.value + menuListHeight.value;

      transformX.value =
        props.anchor === 'right'
          ? -(menuListWidth.value - menuButtonWidth.value)
          : props.anchor === 'middle'
          ? -menuListWidth.value / 2 + menuButtonWidth.value / 2
          : 0;

      const menuOverflowBottom =
        totalMenuHeight + menuPositionY > totalViewportHeight;

      const menuOverflowTop = menuPositionY - totalMenuHeight < 0;

      dropup.value = menuOverflowBottom && !menuOverflowTop;

      const offsetY = openOnHover ? 0 : props.offset;

      transformY.value = dropup.value
        ? -(menuListHeight.value + offsetY)
        : menuButtonHeight.value + offsetY;
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
      dropup,
      transformX,
      transformY,
      openOnHover,
    };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 15px 15px #04040423;
  z-index: 1;
  opacity: 0;
  transform-origin: top left;
  visibility: hidden;
  transition: all 50ms cubic-bezier(0.4, 0, 1, 1);

  // TODO: the height calculation get the height after the 0.8 scale
  transform: translate3d(
      var(--menu-list-transform-x),
      var(--menu-list-transform-y),
      0px
    )
    scale(1);

  &.dropup {
    transform: translate3d(
        var(--menu-list-transform-x),
        var(--menu-list-transform-y),
        0px
      )
      scale(1);
  }

  &.show {
    opacity: 1;
    visibility: visible;
    will-change: transform;
    transform: translate3d(
        var(--menu-list-transform-x),
        var(--menu-list-transform-y),
        0px
      )
      scale(1);

    &.dropup {
      transform: translate3d(
          var(--menu-list-transform-x),
          var(--menu-list-transform-y),
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
    border-top-left-radius: var(--menu-list-border-radius);
    border-top-right-radius: var(--menu-list-border-radius);
    margin-bottom: 10px;
  }
}
</style>
