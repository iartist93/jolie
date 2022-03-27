<template>
  <div class="container-modal animate" ref="modalContainer">
    <main
      class="modal-custom animate"
      :style="{ width: `${width}px` }"
      ref="modalRef"
    >
      <!-- <section v-if="showHeader" class="modal-custom__header">
        <slot name="header"></slot>
        <button @click="onCloseClicked" class="close-btn">
          <img src="@/assets/icons/close.svg" alt="close button" height="40" />
        </button>
      </section> -->

      <section class="modal-custom__body" ref="modalBody">
        <slot name="body"></slot>
      </section>

      <!-- <section v-if="$slots.footer" class="modal-custom__footer">
        <slot name="footer"></slot>
      </section> -->
    </main>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import { useClickOutside } from '@/composables/useClickOutside';

export default {
  emits: ['blurtest', 'blur'],
  props: {
    width: {
      type: Number,
      default: 1614,
    },
    id: {
      type: String,
      default: 'modal-base-id',
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const modalRef = ref(null);

    useClickOutside(modalRef, (event) => {
      if (props.show) {
        emit('close');
      }
    });

    return { modalRef };
  },
  methods: {
    onFooterClicked() {
      this.$emit('click');
    },
    onCloseClicked() {
      if (this.$refs.modal && this.$refs.modalContainer) {
        this.$refs.modalRef.classList.remove('animate');
        this.$refs.modalContainer.classList.remove('animate');

        this.$refs.modalRef.classList.add('animate-reverse');
        this.$refs.modalContainer.classList.add('animate-reverse');
      }

      setTimeout(() => {
        this.$emit('close');
      }, 300);
    },
    onBlur(event) {
      const parent = document.getElementsByClassName('modal-custom')[0];
      const targetClassList = event.target.classList;
      if (parent) {
        const isChild = parent.contains(event.target);

        let shouldIgnore = false;

        // sometime clicking on embeded component inside modal
        // will blur it
        // add all class of the elements to ignore here for now
        // TODO: @ahmad refactor it
        const ignoreClassList = ['close-img'];

        for (let className of targetClassList) {
          if (ignoreClassList.includes(className)) {
            shouldIgnore = true;
          }
        }

        if (isChild || shouldIgnore) return;
        this.$emit('blur');
      }
    },
  },

  watch: {
    show(newValue, oldValue) {
      if (newValue) {
        document.body.style.height = '100vh';
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = '16px'; /* scrollbar width */
      } else {
        document.body.style.height = '';
        document.body.style.overflowY = '';
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.paddingRight = '0px';
      }
    },
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
      background-color: gray;
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
      // background-color: $gray-100;
      background-color: gray;
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
