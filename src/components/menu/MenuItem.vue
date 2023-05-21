<template>
  <div
    ref="rootRef"
    class="jolie-menu-item"
    :class="{ header: variant === 'header', show: isOpen, disabled, selected }"
    :id="variant === 'header' ? 'header' : ''"
    @click="onItemClicked"
  >
    <img
      v-if="startIcon"
      :src="startIcon"
      alt="start-icon"
      class="icon start-icon"
      :style="{ width: maxIconSize }"
    />
    <span
      :style="{
        '--menu-item-text-align': alignValue,
      }"
    >
      <slot></slot>
    </span>
    <img
      v-if="endIcon"
      :src="endIcon"
      alt="end-icon"
      class="icon end-icon"
      :style="{ width: maxIconSize }"
    />
  </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from '@vue/composition-api';
import { useInjectStyle } from '@/composables/useInjectStyle';
import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import { UseDisclosureType } from '@/composables/useDisclosure';

export default {
  props: {
    variant: {
      type: String, // header, default
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
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
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    color: {
      type: String,
      default: 'black',
    },
    hoverColor: {
      type: String,
      default: '#e2e2cb',
    },
    selectedColor: {
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
    textAlign: {
      type: String,
      default: 'start', // 'start', 'end', 'center'
    },
  },
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement | null>(null);
    const alignValue = ref('flex-start');

    // TODO: Create a seperate composable for this
    const menuContext = inject('menuContext') as UseDisclosureType;
    const { onClose, isOpen } = menuContext;

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType,
    );

    elementStyle.value['--jolie-menu-item-hover-color'] = props.hoverColor;
    elementStyle.value['--jolie-menu-item-selected-color'] =
      props.selectedColor;
    elementStyle.value['--jolie-transition-property-background'] =
      'background-color, background-image, background-position';

    useInjectStyle(rootRef as Ref<HTMLElement>, elementStyle);

    const onItemClicked = () => {
      if (props.variant === 'header' || props.disabled) return;
      emit('click');
      onClose();
    };

    const maxIconSize =
      typeof props.iconSize === 'number'
        ? props.iconSize + 'px'
        : props.iconSize;

    alignValue.value =
      props.textAlign === 'center'
        ? 'center'
        : props.textAlign === 'end'
        ? 'flex-end'
        : 'flex-start';

    return { onItemClicked, maxIconSize, rootRef, isOpen, alignValue };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-item {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 50ms cubic-bezier(0.4, 0, 1, 1);

  &:not(.header):not(.disabled) {
    &:hover {
      background-color: var(--jolie-menu-item-hover-color);
    }

    &.selected {
      background-color: var(--jolie-menu-item-selected-color);
    }
  }

  &.header,
  &.disabled {
    cursor: default;
  }

  span {
    flex: 1;
    justify-content: var(--menu-item-text-align);
  }

  &.disabled {
    color: rgb(145, 144, 144);

    img {
      filter: grayscale(1) saturate(0.1);
    }
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
