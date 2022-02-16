<template>
  <div>
    <div class="menu-item" @click="onClose">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api';

export default {
  setup() {
    const menuContext = inject('menuContext');
    const { onClose } = menuContext;
    return { onClose };
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  // height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    background-color: rgb(226, 226, 203);
  }
}
</style>
