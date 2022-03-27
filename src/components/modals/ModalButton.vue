<template>
  <button class="jolie-modal-button" @click="onToggle">
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

<style lang="scss" scoped></style>
