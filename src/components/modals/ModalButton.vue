<template>
  <button class="jolie-modal-button" @click="onToggleClicked">
    <slot>Toggle Modal</slot>
  </button>
</template>

<script lang="ts">
import { useMenuButton } from '@/composables/menu/useMenuButton';

export default {
  setup(props, { emit }) {
    const { onToggle } = useMenuButton();

    const onToggleClicked = () => {
      emit('click');
      onToggle();
    };

    return { onToggleClicked };
  },
};
</script>

<style lang="scss" scoped></style>
