<template>
  <div>
    {{ isOpen }}
    <div class="menu-list" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api';

import { useMenuList } from '@/composables/menu/useMenuList';

export default {
  setup() {
    const { isOpen } = useMenuList();
    return { isOpen };
  },
};
</script>

<style lang="scss" scoped>
.menu-list {
  width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: beige;
}
</style>
