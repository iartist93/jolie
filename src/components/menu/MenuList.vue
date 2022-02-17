<template>
  <div
    class="jolie-menu-list"
    :class="{ show: isOpen }"
    :style="{
      width: `${width}px`,
      'background-color': backgroundColor,
      'border-radius': `${borderRadius}px`,
      '--jolie-menu-list-border-radius': `${borderRadius}px`,
    }"
  >
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { useMenuList } from '@/composables/menu/useMenuList';
import useInjectStyle from '@/composables/useInjectStyle';
import { ref } from '@vue/composition-api';

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
  },
  setup() {
    const { isOpen } = useMenuList();

    return { isOpen };
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

  top: 60px;
  opacity: 0;
  transform: scale(0.8) translateZ(0);
  transition: all 50ms cubic-bezier(0.4, 0, 1, 1);
  transform-origin: top left;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
}
</style>

<style lang="scss">
.jolie-menu-list {
  // > div {
  //   height: 40px;
  // }

  > #header {
    border-top-left-radius: var(--jolie-menu-list-border-radius);
    border-top-right-radius: var(--jolie-menu-list-border-radius);
    margin-bottom: 10px;
  }
}
</style>
