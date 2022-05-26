<template>
  <div ref="rootRef" class="jolie-modal">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, Ref, watch } from '@vue/composition-api';
import { useMenu } from '@/composables/menu/useMenu';

export default {
  props: {
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    //TODO: Implement `useEscape`
    const rootRef = ref<null | Ref<HTMLElement>>(null);

    const { isOpen } = useMenu(props);

    watch(isOpen, (newValue) => {
      if (newValue === false) {
        emit('onClose');
      }
    });

    return { rootRef };
  },
};
</script>
