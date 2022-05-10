<template>
  <label
    class="jolie-checkbox"
    :style="{ width: size + 2 + 'px', height: size + 2 + 'px' }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <input type="checkbox" :checked="checked" @change.stop="onInputChange" />
    <div
      class="checkmark"
      :class="{ hover: isHover, checked }"
      :style="{
        'border-radius': borderRadius + 'px',
        '--jolie-checkbox-active-background-color': backgroundColor,
        '--jolie-checkbox-border-color': borderColor,
        '--jolie-checkbox-checkmark-color': color,
        '--jolie-checkbox-size': size + 'px',
      }"
    />
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'input',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: Number,
      default: 5,
    },
    borderWidth: {
      type: Number,
      default: 2,
    },
    borderColor: {
      type: String,
      default: '#a5a5a5',
    },
    backgroundColor: {
      type: String,
      default: '#B3DEE1',
    },
    color: {
      type: String,
      default: '#333333',
    },
    size: {
      type: Number,
      default: 23,
    },
  },
  data() {
    return {
      isHover: false,
      isFocus: false,
    };
  },
  methods: {
    onInputChange(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
*,
div,
span {
  box-sizing: border-box;
}

.jolie-checkbox {
  font-size: 22px;
  display: block;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: transparent;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: content-box;
  //   width: 25px;
  //   height: 25px;
}

/* Hide the browser's default checkbox */
.jolie-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: var(--jolie-checkbox-size);
  width: var(--jolie-checkbox-size);
  background-color: white;
  border: 2px solid var(--jolie-checkbox-border-color);
  box-sizing: content-box;

  &.hover {
    background-color: rgba(
      $color: var(--jolie-checkbox-active-background-color),
      $alpha: 0.6
    );
  }

  &.checked {
    // background-color: #b3dee1;
    background-color: var(--jolie-checkbox-active-background-color);
  }
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.jolie-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.jolie-checkbox .checkmark:after {
  left: calc(var(--jolie-checkbox-size) / 3);
  top: calc(var(--jolie-checkbox-size) / 8);

  width: calc(var(--jolie-checkbox-size) / 3);
  height: calc(var(--jolie-checkbox-size) / 1.7);

  //   border: solid #333333;
  border: solid var(--jolie-checkbox-checkmark-color);

  border-width: 0 calc(var(--jolie-checkbox-size) / 6)
    calc(var(--jolie-checkbox-size) / 6) 0;

  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
s
