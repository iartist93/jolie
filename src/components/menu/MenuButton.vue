<template>
  <div ref="rootRef" class="jolie-menu-button">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { useMenuButton } from '@/composables/menu/useMenuButton';
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
} from '@vue/composition-api';

export default defineComponent({
  setup() {
    const rootRef = ref<HTMLElement | null>(null);
    const buttonRef = ref<HTMLElement | null>(null);

    const { onToggle } = useMenuButton();

    onMounted(() => {
      buttonRef.value = (
        rootRef as unknown as Ref<HTMLElement>
      ).value.getElementsByTagName('button')[0];

      buttonRef.value.addEventListener('click', onToggle);
    });

    onBeforeUnmount(() => {
      buttonRef.value?.removeEventListener('click', onToggle);
    });

    return { onToggle, rootRef };
  },
});
</script>

<style lang="scss" scoped></style>
