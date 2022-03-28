<template>
  <label
    class="jolie-toggle"
    :style="{
      '--jolie-toggle-active-color': color,
      '--jolie-toggle-inactive-color': offColor,
      '--jolie-toggle-slider-color': opened ? color : computedSliderColor,
      '--jolie-toggle-slider-border-color': opened
        ? computedSliderColor
        : color,
      '--jolie-toggle-height': height + 'px',
      '--jolie-toggle-width': width + 'px',
      '--jolie-toggle-slider-size': computedSliderSize + 'px',
      '--jolie-toggle-offset': `${offset}px`,
      '--jolie-toggle-translate-x': `${
        width - computedSliderSize - offset * 2
      }px`,
      '--jolie-toggle-slider-border-radius': `${borderRadius}px`,
      '--jolie-toggle-border-value': borderValue,
    }"
  >
    <input
      type="checkbox"
      @click="onToggle"
      @keydown.space.prevent="onToggle"
      :checked="value"
      :aria-checked="value.toString()"
      :disabled="disabled"
    />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#2196f3',
    },
    offColor: {
      type: String,
      default: '#ccc',
    },
    sliderColor: {
      type: String,
      default: 'white',
    },
    sliderOffColor: {
      type: String,
    },
    height: {
      type: Number,
      default: 34,
    },
    width: {
      type: Number,
      default: 75,
    },
    sliderSize: {
      type: Number,
    },
    opened: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String,
      default: 'red',
    },
    showBorder: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedSliderSize() {
      return this.sliderSize ? this.sliderSize : this.height * 0.77;
    },
    offset() {
      return (this.height - this.computedSliderSize) / 2;
    },
    borderRadius() {
      return this.opened ? this.computedSliderSize * 0.35 : 0;
    },
    borderValue() {
      return this.showBorder ? `2px solid ${this.borderColor}` : 0;
    },
    computedSliderColor() {
      return this.value === true
        ? this.sliderColor
        : this.sliderOffColor
        ? this.sliderOffColor
        : this.sliderColor;
    },
  },
  methods: {
    onToggle() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.jolie-toggle {
  box-sizing: content-box;
  position: relative;
  display: inline-block;
  width: var(--jolie-toggle-width);
  height: var(--jolie-toggle-height);
  user-select: none;
  border-radius: var(--jolie-toggle-height);
  border: var(--jolie-toggle-border-value);

  // hide default HTML checkbox
  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      + .slider {
        background-color: var(--jolie-toggle-active-color);

        &::before {
          -webkit-transform: translateX(var(--jolie-toggle-translate-x));
          -ms-transform: translateX(var(--jolie-toggle-translate-x));
          transform: translateX(var(--jolie-toggle-translate-x));
        }
      }
    }

    &:focus {
      + .slider {
        box-shadow: 0 0 1px var(--jolie-toggle-active-color);
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--jolie-toggle-inactive-color);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    border-radius: var(--jolie-toggle-height);
    box-shadow: inset -2px 2px 1px #00000029;

    &::before {
      position: absolute;
      content: '';
      height: var(--jolie-toggle-slider-size);
      width: var(--jolie-toggle-slider-size);
      left: var(--jolie-toggle-offset);
      bottom: var(--jolie-toggle-offset);
      // top: 2px;
      border-radius: 50%;
      background-color: var(--jolie-toggle-slider-color);
      border: var(--jolie-toggle-slider-border-radius) solid
        var(--jolie-toggle-slider-border-color);
      transition: 0.3s;
      -webkit-transition: 0.3s;
    }

    // &::after {
    //   position: absolute;
    //   content: '';
    //   height: var(--jolie-toggle-slider-inner-radius);
    //   width: var(--jolie-toggle-slider-inner-radius);
    //   left: var(--jolie-toggle-slider-inner-offset);
    //   bottom: var(--jolie-toggle-slider-inner-offset);
    //   background-color: var(--jolie-toggle-active-color);
    //   border-radius: 50%;
    //   transition: 0.3s;
    //   -webkit-transition: 0.3s;
    // }
  }
}
</style>
