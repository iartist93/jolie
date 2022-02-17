<template>
  <div
    v-if="isOpen"
    class="jolie-menu-list"
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
  top: 50px;
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
