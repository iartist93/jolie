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

    const { onToggle, onOpen, onClose, openOnHover } = useMenuButton();

    onMounted(() => {
      buttonRef.value = (
        rootRef as unknown as Ref<HTMLElement>
      ).value.getElementsByTagName('button')[0];

      buttonRef.value.addEventListener('click', onToggle);
      if (openOnHover) {
        buttonRef.value.addEventListener('mouseover', onOpen);
        buttonRef.value.addEventListener('mouseleave', onClose);
      }
    });

    onBeforeUnmount(() => {
      buttonRef.value?.removeEventListener('click', onToggle);
      if (openOnHover) {
        buttonRef.value?.removeEventListener('mouseover', onOpen);
        buttonRef.value?.removeEventListener('mouseleave', onClose);
      }
    });

    return { onToggle, rootRef };
  },
});
</script>

<style lang="scss" scoped></style>
