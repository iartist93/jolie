<template>
  <button
    :style="{
      ...buttonStyle,
      '--jolie-icon-button-background-color': backgroundColor,
      '--jolie-icon-button-color': color,
      '--jolie-icon-button-border': border,
      '--jolie-icon-button-hover-color': hoverColor,
    }"
    class="jolie-button"
    :class="{
      disabled,
      outline: variant === 'outline',
      solid: variant === 'solid',
      ghost: variant === 'ghost',
    }"
    v-on="$listeners"
  >
    <img
      v-if="startIcon"
      :src="startIcon"
      alt="start-icon"
      class="start-icon"
      :style="{ '--jolie-icon-button-padding-h': ph }"
    />
    <slot>Button</slot>
    <img
      v-if="endIcon"
      :src="endIcon"
      alt="end-icon"
      class="end-icon"
      :style="{ '--jolie-icon-button-padding-h': ph }"
    />
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
  borderRadius: number;
  isFullWidth: boolean;
  disabled: boolean;
}

export default defineComponent({
  name: 'IconButton',
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
    borderRadius: {
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
      default: 'solid' /** solid, outline, ghost */,
    },
    startIcon: {
      type: String,
    },
    endIcon: {
      type: String,
    },
  },
  setup(props) {
    let { size, colorScheme, variant, borderRadius, isFullWidth, disabled } =
      props as PropsType;

    const hasSize = Boolean(size && ButtonTheme.sizes[size]);

    const buttonStyle = {
      'border-radius': borderRadius ? `${borderRadius}px` : '0',
      'font-size': typography.fontSizes[size],
      'padding-right': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'padding-left': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'min-width': hasSize ? spacing[ButtonTheme.sizes[size].minW] : 0,
      width: isFullWidth ? '100%' : 'auto',
      height: hasSize ? spacing[ButtonTheme.sizes[size].h] : 'auto',
      'box-shadow':
        variant === 'solid' ? 'box-shadow: 0px 3px 6px #00000029;' : 'none',
    };

    const ph = hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0;

    const backgroundColor =
      variant === 'outline' || variant === 'ghost'
        ? 'transparent'
        : disabled
        ? 'gray'
        : colorScheme
        ? colorScheme
        : 'blue';

    const color =
      variant === 'outline' || variant === 'ghost'
        ? colorScheme
          ? colorScheme
          : 'black'
        : 'white';

    const hoverColor = disabled
      ? 'gray'
      : variant === 'outline'
      ? colorScheme
      : 'white';

    const border =
      variant === 'ghost'
        ? 0
        : disabled
        ? '1px solid gray'
        : variant === 'outline' || variant === 'ghost'
        ? colorScheme
          ? `1px solid ${colorScheme}`
          : 'black'
        : 0;

    return { buttonStyle, ph, backgroundColor, color, border, hoverColor };
  },
});
</script>

<style lang="scss" scoped>
.jolie-button {
  font-weight: 500;
  line-height: '1.2';

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  user-select: none;

  background-color: var(--jolie-icon-button-background-color);
  color: var(--jolie-icon-button-color);
  border: var(--jolie-icon-button-border);

  transition: all 0.1s linear;

  &:hover:not(.disabled) {
    &.outline {
      background-color: var(--jolie-icon-button-hover-color);
      color: white;
    }

    &.solid {
      filter: brightness(90%);
    }
  }

  &.disabled {
    color: rgb(216, 216, 216);
  }
}

.start-icon {
  height: 60%;
  margin-right: var(--jolie-icon-button-padding-h);
}

.end-icon {
  height: 60%;
  margin-left: var(--jolie-icon-button-padding-h);
}
</style>
