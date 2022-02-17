<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useMenuButton } from '@/composables/menu/useMenuButton';
import { onBeforeUnmount, onMounted, Ref, ref } from '@vue/composition-api';

export default {
  setup() {
    const rootRef = ref<HTMLElement | null>(null);
    const buttonRef = ref<HTMLElement | null>(null);

    const { onToggle } = useMenuButton();

    onMounted(() => {
      console.log('=======>> Root Ref ', rootRef);

      // get the first button child of div
      buttonRef.value = (
        rootRef as unknown as Ref<HTMLElement>
      ).value.getElementsByTagName('button')[0];

      // attach `onToggle` hanlder to it
      buttonRef.value.addEventListener('click', onToggle);
    });

    onBeforeUnmount(() => {
      buttonRef.value?.removeEventListener('click', onToggle);
    });

    return { onToggle, rootRef };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-button {
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
</style>
