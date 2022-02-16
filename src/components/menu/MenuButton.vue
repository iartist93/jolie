<template>
  <button class="craft-menu__menu-button" @click="onToggle">
    <slot></slot>
  </button>
</template>

<script>
import { inject } from '@vue/composition-api';
import { useMenuButton } from '@/composables/menu/useMenuButton';

export default {
  setup() {
    const { onToggle } = useMenuButton();
    return { onToggle };
  },
};
</script>

<style lang="scss" scoped>
.craft-menu {
  &__menu-button {
    background-color: rgb(56, 47, 97);
    width: fit-content;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: white;
    cursor: pointer;
    outline: 0;
    border: none;
  }
}
</style>
