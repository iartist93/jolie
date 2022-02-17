<template>
  <div
    v-if="isOpen"
    class="jolie-menu-list"
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
.jolie-menu-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
}
</style>

<style lang="scss">
// .jolie-menu-list {
//   > div {
//     height: 40px;
//   }
// }
</style>
