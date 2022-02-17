<template>
  <button
    :style="{
      ...buttonStyle,
    }"
    class="jolie-button"
    :class="{ disabled }"
    v-on="$listeners"
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
  variant: string;
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
    variant: {
      type: String,
      default: 'solid' /** solid, outline */,
    },
  },
  setup(props) {
    let { size, colorScheme, variant, border, isFullWidth, disabled } =
      props as PropsType;

    const hasSize = Boolean(size && ButtonTheme.sizes[size]);

    const buttonStyle = {
      'border-radius': border ? `${border}px` : '0',
      'background-color': disabled
        ? 'gray'
        : variant === 'outline' || variant === 'ghost'
        ? 'transparent'
        : colorScheme
        ? colorScheme
        : 'blue',
      'font-size': typography.fontSizes[size],
      'padding-right': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'padding-left': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'min-width': hasSize ? spacing[ButtonTheme.sizes[size].minW] : 0,
      width: isFullWidth ? '100%' : 'auto',
      height: hasSize ? spacing[ButtonTheme.sizes[size].h] : 'auto',
      border:
        variant === 'ghost'
          ? 0
          : variant === 'outline' || variant === 'ghost'
          ? colorScheme
            ? `1px solid ${colorScheme}`
            : 'black'
          : 0,
      color:
        variant === 'outline' || variant === 'ghost'
          ? colorScheme
            ? colorScheme
            : 'black'
          : 'white',
      'box-shadow':
        variant === 'solid' ? 'box-shadow: 0px 3px 6px #00000029;' : 'none',
    };

    return { buttonStyle };
  },
});
</script>

<style lang="scss" scoped>
.jolie-button {
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
  user-select: none;

  &:hover:not(.disabled) {
    filter: brightness(90%);
  }

  &.disabled {
    color: rgb(216, 216, 216);
  }
}
</style>
