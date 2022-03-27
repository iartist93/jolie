<template>
  <div ref="rootRef" class="jolie-modal">
    <slot></slot>
    <span>isOpen === {{ isOpen }}</span>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from '@vue/composition-api';
import { useMenu } from '@/composables/menu/useMenu';

export default {
  props: {
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const rootRef = ref<null | Ref<HTMLElement>>(null);

    const menuContext = useMenu(props);
    const { isOpen } = menuContext;

    //TODO: Implement `useEscape` here

    return { rootRef, isOpen };
  },
};
</script>
