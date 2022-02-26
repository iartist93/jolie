<template>
  <div v-show="isOpen" class="container-modal" ref="modalContainerRef">
    <main
      class="modal-custom animate"
      :style="{ width: `${width}px` }"
      ref="modalRef"
    >
      <div>{{ isOpen }}</div>
      <div>Modal Content 1</div>
      <div>Modal Content 2</div>
      <div>Modal Content 3</div>
      <div>Modal Content 4</div>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { onMounted, Ref, ref, watch } from '@vue/composition-api';
import { useMenuList } from '@/composables/menu/useMenuList';
import { useClickOutside } from '@/composables/useClickOutside';

export default {
  props: {
    width: {
      type: Number,
      default: 1614,
    },
    id: {
      type: String,
      default: 'modal-base-id',
    },
  },

  setup(props) {
    const modalRef = ref<null | Ref<HTMLElement>>(null);
    const modalContainerRef = ref<null | Ref<HTMLElement>>(null);

    const { isOpen, onClose } = useMenuList(modalRef as Ref<HTMLElement>);

    useClickOutside(modalRef as Ref<HTMLElement>, (event) => {
      if (isOpen.value) {
        onModalClose();
      }
    });

    watch(isOpen, (openValue) => {
      if (openValue) {
        // document.body.style.height = "100vh";
        // document.body.style.overflowY = "hidden";
        // document.body.style.paddingRight = "16px"; /* scrollbar width */
        onModalOpen();
      }
      //   else {
      // document.body.style.height = "";
      // document.body.style.overflowY = "";
      // document.body.style.top = "";
      // document.body.style.position = "";
      // document.body.style.paddingRight = "0px";
      // onModalClose();
      //   }
    });

    const onModalOpen = () => {
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

    const onModalClose = () => {
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

    onMounted(() => {
      document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape') {
          onModalClose();
        }
      });
    });

    return { onModalClose, isOpen, modalRef, modalContainerRef };
  },
};
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
    border-radius: 10px;
    position: relative;

    &.animate {
      animation: moveup 0.35s cubic-bezier(0.83, 0.85, 0.83, 0.67);
      animation-fill-mode: forwards;
    }

    &.animate-reverse {
      animation: movedown 0.1s cubic-bezier(0.83, 0.85, 0.83, 0.67);
      animation-fill-mode: forwards;
    }

    &__header {
      height: 111px;
      width: 100%;
      border-radius: 10px 10px 0px 0px;
      background-color: $gray-900;
      color: white;
      font-size: 20px;
      font-weight: 500;
      padding: 23px 35px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .close-btn {
        outline: none;
        border: 0;
        background: transparent;
      }
    }
    &__body {
      background-color: white;
      flex: 1;
      border-radius: 10px;
      max-height: 70vh;
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__footer {
      background-color: $gray-100;
      height: 94px;
      border-radius: 0px 0px 10px 10px;
      display: flex;
      align-items: center;
      // justify-content: center;
      z-index: 10;
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
