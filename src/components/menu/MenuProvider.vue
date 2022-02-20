<template>
  <div class="jolie-menu-provider">
    <slot></slot>
  </div>
</template>

<script>
import { useMenu } from '@/composables/menu/useMenu';
import { provide } from '@vue/composition-api';

export default {
  setup() {
    const menuContext = useMenu();
    provide('menuContext', menuContext);
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-provider {
  position: relative;
  display: flex;
}
</style>
