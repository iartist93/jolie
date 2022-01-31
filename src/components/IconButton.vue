<template>
  <button
    :style="{
      ...buttonStyle,
    }"
    class="crafter-button"
    :class="{ disabled }"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import typography, { FontSize } from '@/foundation/typography';
import { spacing } from '@/foundation/spacing';
import ButtonTheme from '@/themes/button';
import { Data } from '@vue/composition-api';

interface PropsType extends Readonly<Data> {
  colorScheme: string;
  size: FontSize;
  border: number;
  isFullWidth: boolean;
  disabled: boolean;
}

export default defineComponent({
  props: {
    colorScheme: {
      type: String,
      default: 'teal',
    },
    size: {
      type: String as () => FontSize,
      validator: (size: string): boolean =>
        typography.fontSizes[size] !== undefined,
      default: 'md',
    },
    border: {
      type: Number,
      default: 6,
    },
    isFullWidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let { size, colorScheme, border, isFullWidth, disabled } =
      props as PropsType;

    const hasSize = Boolean(size && ButtonTheme.sizes[size]);

    const buttonStyle = {
      width: isFullWidth ? '100%' : 'auto',
      'border-radius': border ? `${border}px` : '0',
      'background-color': disabled
        ? 'gray'
        : colorScheme
        ? colorScheme
        : 'blue',
      'font-size': typography.fontSizes[size],
      height: hasSize ? spacing[ButtonTheme.sizes[size].h] : 'auto',
      'padding-right': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'padding-left': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'min-width': hasSize ? spacing[ButtonTheme.sizes[size].minW] : 0,
    };

    return { buttonStyle };
  },
});
</script>

<style lang="scss" scoped>
.crafter-button {
  box-shadow: 0px 3px 6px #00000029;
  font-weight: 500;
  line-height: '1.2';
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;

  cursor: pointer;

  &:hover:not(.disabled) {
    filter: brightness(90%);
  }

  &.disabled {
    color: rgb(216, 216, 216);
  }
}
</style>
