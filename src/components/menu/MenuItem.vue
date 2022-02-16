<template>
  <div>
    <div class="menu-item" @click="onItemClicked">
      <img
        v-if="startIcon"
        :src="startIcon"
        alt="start-icon"
        class="icon start-icon"
        :style="{ width: maxIconSize }"
      />
      <slot></slot>
      <img
        v-if="endIcon"
        :src="endIcon"
        alt="end-icon"
        class="icon end-icon"
        :style="{ width: maxIconSize }"
      />
    </div>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api';

export default {
  props: {
    startIcon: {
      type: String,
    },
    endIcon: {
      type: String,
    },
    iconSize: {
      type: [Number, String],
      default: 25,
    },
  },
  setup(props, { emit }) {
    const menuContext = inject('menuContext');
    const { onClose } = menuContext;

    const onItemClicked = () => {
      emit('click');
      onClose();
    };

    const maxIconSize =
      typeof props.iconSize === 'number'
        ? props.iconSize + 'px'
        : props.iconSize;

    return { onItemClicked, maxIconSize };
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  // height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    background-color: rgb(226, 226, 203);
  }
}

.icon {
  &.start-icon {
    margin-right: 16px;
  }

  &.end-icon {
    margin-left: 16px;
  }
}
</style>
