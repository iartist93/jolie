<template>
  <div
    class="jolie-menu-item"
    @click="onItemClicked"
    :style="{
      '--jolie-menu-item-hover-color': hoverColor,
      padding: `${p}px`,
      'padding-left': `${pl}px`,
      'padding-right': `${pr}px`,
      height: `${h}px`,
    }"
  >
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
    hoverColor: {
      type: String,
      default: '#e2e2cb',
    },
    pl: {
      type: Number,
      default: 0,
    },
    pr: {
      type: Number,
      default: 0,
    },
    px: {
      type: Number,
      default: 0,
    },
    p: {
      type: Number,
      default: 0,
    },
    h: {
      type: Number,
      default: 40,
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
.jolie-menu-item {
  // height: 50px;
  width: 100%;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    background-color: var(--jolie-menu-item-hover-color);
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
