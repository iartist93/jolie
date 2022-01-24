<template>
  <button class="modal-button" @click="onToggle">
    <slot>Toggle Modal</slot>
  </button>
</template>

<script lang="ts">
import { useMenuButton } from '@/composables/menu/useMenuButton';

export default {
  setup(props) {
    const { onToggle } = useMenuButton();
    return { onToggle };
  },
};
</script>

<style lang="scss" scoped>
.modal-button {
  width: 300px;
  background-color: red;
}
</style>
