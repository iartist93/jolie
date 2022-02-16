<template>
  <div
    v-if="isOpen"
    class="menu-list"
    :style="{
      width: `${width}px`,
      'background-color': backgroundColor,
      'border-radius': `${borderRadius}px`,
    }"
  >
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
.menu-list {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss">
.menu-list {
  > div {
    height: 40px;
  }
}
</style>
