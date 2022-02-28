<template>
  <label class="jolie-toggle">
    <input
      type="checkbox"
      @click="onToggle"
      @keydown.space.prevent="onToggle"
      :checked="value"
      :aria-checked="value.toString()"
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
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  user-select: none;

  // hide default HTML checkbox
  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      + .slider {
        background-color: #2196f3;

        &::before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }
      }
    }

    &:focus {
      + .slider {
        box-shadow: 0 0 1px #2196f3;
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
    background-color: #ccc;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: 0.3s;
      -webkit-transition: 0.3s;
    }
  }
}
</style>
