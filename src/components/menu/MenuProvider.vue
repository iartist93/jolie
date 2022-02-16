<template>
  <div class="craft-menu">
    <slot></slot>
  </div>
</template>

<script>
import { useMenu } from '@/composables/menu/useMenu';
import { provide } from '@vue/composition-api';

export default {
  setup(props) {
    const menuContext = useMenu();
    provide('menuContext', menuContext);
  },
};
</script>

<style lang="scss" scoped></style>
