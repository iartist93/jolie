<template>
  <div v-show="isOpen" ref="modalContainerRef" class="container-modal">
    <div ref="modalRef" :class="`modal-custom animate ${shadowClass}`">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  Ref,
  ref,
  watch,
  defineComponent,
  onBeforeUnmount,
} from '@vue/composition-api';
import { useModalContent } from '@/composables/modal/useModalContent';

import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import { useInjectStyle } from '@/composables/useInjectStyle';
import StyledSystem from '@/mixins/StyledSystem';

export default defineComponent({
  name: 'ModalContent',
  props: {
    id: {
      type: String,
      default: 'modal-base-id',
    },
    boxShadow: {
      type: String,
    },
    ...StyledSystem.props,
  },

  setup(props, { emit }) {
    const modalContainerRef = ref<null | Ref<HTMLElement>>(null);
    const modalRef = ref<null | Ref<HTMLElement>>(null);

    const cancelButtons = ref<null | HTMLElement[]>(null);

    let shadowClass = ref('');

    if (props.boxShadow) {
      shadowClass.value =
        props.boxShadow === 'sm'
          ? 'shadow-sm'
          : props.boxShadow === 'md'
          ? 'shadow-md'
          : props.boxShadow === 'lg'
          ? 'shadow-lg'
          : props.boxShadow === 'xl'
          ? 'shadow-xl'
          : props.boxShadow === '2xl'
          ? 'shadow-2xl'
          : props.boxShadow === 'inner'
          ? 'shadow-inner'
          : props.boxShadow === 'none'
          ? 'shadow-none'
          : 'shadow';
    }

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType
    );

    useInjectStyle(modalRef as Ref<HTMLElement>, elementStyle);

    const onModalOpen = () => {
      console.log('=========> on modal open ');

      const modalElement = (modalRef as Ref<HTMLElement>).value;
      const modalContainerElement = (modalContainerRef as Ref<HTMLElement>)
        .value;

      modalElement.classList.add('animate');
      modalElement.classList.remove('animate-reverse');
      modalContainerElement.classList.add('animate');
      modalContainerElement.classList.remove('animate-reverse');

      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = '16px'; /* scrollbar width */
    };

    const onModalClose = (event?: Event) => {
      if (event) {
        event.stopPropagation();
      }
      const modalElement = (modalRef as Ref<HTMLElement>).value;
      const modalContainerElement = (modalContainerRef as Ref<HTMLElement>)
        .value;

      modalElement.classList.remove('animate');
      modalElement.classList.add('animate-reverse');
      modalContainerElement.classList.remove('animate');
      modalContainerElement.classList.add('animate-reverse');

      setTimeout(() => {
        document.body.style.height = '';
        document.body.style.overflowY = '';
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.paddingRight = '0px';
        onClose();
      }, 300);
    };

    const { isOpen, onClose } = useModalContent(
      modalRef as Ref<HTMLElement>,
      onModalClose
    );

    watch(isOpen, (openValue) => {
      if (openValue) {
        onModalOpen();
      } else {
        emit('onClose');
      }
    });

    onMounted(() => {
      if (isOpen.value) {
        onModalOpen();
      }

      document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape') {
          onModalClose(e);
        }
      });

      cancelButtons.value = modalRef.value?.querySelectorAll(
        '.modal-close'
      ) as unknown as HTMLElement[];

      for (const button of cancelButtons.value) {
        button.addEventListener('click', onModalClose);
      }
    });

    onBeforeUnmount(() => {
      if (cancelButtons.value) {
        for (const button of cancelButtons.value) {
          button.removeEventListener('click', onModalClose);
        }
      }
    });

    return { isOpen, modalRef, modalContainerRef, shadowClass };
  },
});
</script>

<style lang="scss" scoped>
$start-bgcolor: rgba(
  $color: #000000,
  $alpha: 0,
);

$end-bgcolor: rgba(
  $color: #000000,
  $alpha: 0.65,
);

.container-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 250;
  // background-color: $end-bgcolor;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  overflow-y: hidden;

  &.animate {
    animation: appear 0.7s cubic-bezier(0.62, 0.6, 0.83, 0.67);
    animation-fill-mode: forwards;
  }

  &.animate-reverse {
    animation: disapear 0.2s cubic-bezier(0.62, 0.6, 0.83, 0.67);
    animation-fill-mode: forwards;
  }

  .modal-custom {
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // border-radius: 10px;
    position: relative;

    &.animate {
      animation: moveup 0.35s cubic-bezier(0.83, 0.85, 0.83, 0.67);
      animation-fill-mode: forwards;
    }

    &.animate-reverse {
      animation: movedown 0.1s cubic-bezier(0.83, 0.85, 0.83, 0.67);
      animation-fill-mode: forwards;
    }
  }
}

@keyframes moveup {
  0% {
    top: 30px;
    opacity: 0;
  }
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  40% {
    opacity: 1;
  }
  60% {
    top: -2px;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

@keyframes movedown {
  0% {
    top: 0;
    opacity: 1;
  }
  100% {
    top: 30px;
    opacity: 0;
  }
}

@keyframes appear {
  from {
    background-color: $start-bgcolor;
  }
  20% {
    background-color: rgba($color: #000000, $alpha: 0.55);
  }
  70% {
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
  to {
    background-color: $end-bgcolor;
  }
}

@keyframes disapear {
  from {
    background-color: $end-bgcolor;
  }
  to {
    background-color: $start-bgcolor;
  }
}
</style>
