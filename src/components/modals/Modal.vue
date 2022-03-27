<template>
  <div ref="root" class="jolie-modal">
    <span>isOpen === {{ isOpen }}</span>
    <slot></slot>
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
    const root = ref<null | Ref<HTMLElement>>(null);

    const { closeOnBlur = true } = props;

    const menuContext = useMenu(props);
    const { onClose, isOpen } = menuContext;

    //TODO: Implement `useEscape` here

    return { root, isOpen };
  },
};
</script>
