<template>
  <div ref="rootRef" class="jolie-menu-provider">
    <slot></slot>
  </div>
</template>

<script>
import { useMenu } from '@/composables/menu/useMenu';
import { onBeforeUnmount, onMounted, ref, watch } from '@vue/composition-api';

export default {
  props: {
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
    openOnHover: {
      type: Boolean,
      default: false,
    },
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const rootRef = ref(null);

    const menuContext = useMenu(props);
    const { onOpen, onClose, isOpen } = menuContext;

    watch(isOpen, (openValue) => {
      if (openValue) {
        emit('onOpen');
      } else {
        emit('onClose');
      }
    });

    onMounted(() => {
      if (props.openOnHover) {
        rootRef.value.addEventListener('mouseover', onOpen);
        rootRef.value.addEventListener('mouseleave', onClose);
      }
    });

    onBeforeUnmount(() => {
      if (props.openOnHover) {
        rootRef.value.removeEventListener('mouseover', onOpen);
        rootRef.value.removeEventListener('mouseleave', onClose);
      }
    });

    return { rootRef };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-provider {
  position: relative;
  display: flex;
  width: fit-content;
}
</style>
