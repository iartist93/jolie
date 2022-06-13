<template>
  <div class="">
    <div class="input-container">
      <input
        :style="{ width: `${width}px`, height: `${height}px` }"
        :id="id"
        :value="value"
        type="number"
        class="custom-input"
        ref="input"
        @input="onInput"
        @change="onChange"
        @blur="($event) => $emit('blur', $event)"
      />
      <div class="input-btns" :style="{ width: '20px', height: `${height}px` }">
        <button
          class="input-number-btn"
          :id="`${id}-input-increment`"
          @click="onIncrment"
        >
          <img src="@/assets/icons//up-arrow.svg" alt="increment" />
        </button>
        <button
          class="input-number-btn"
          :id="`${id}-input-decrement`"
          @click="onDecrement"
        >
          <img src="@/assets/icons/down-arrow.svg" alt="decrement" />
        </button>
      </div>
    </div>
    <div class="validation">
      <p v-if="max !== undefined && value > max" class="message error">
        {{ nameCapitalized }} must be lower than {{ max }}
      </p>

      <p v-else-if="min !== undefined && value < min" class="message error">
        {{ nameCapitalized }} must be larger than {{ min }}
      </p>

      <p v-else-if="max !== undefined" class="message">
        Max {{ name }} is {{ max }}
      </p>

      <p v-else-if="min !== undefined" class="message">
        Min {{ name }} is {{ min }}
      </p>

      <p v-else class="message">{{ nameCapitalized }} is invalid</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'input-number',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
    },
    min: {
      type: Number,
    },
    width: {
      type: Number,
      default: 130,
    },
    height: {
      type: Number,
      default: 49,
      validator: function (value) {
        return value > 30;
      },
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isInvalid() {
      return (
        (this.max !== undefined && this.value > this.max) ||
        (this.min !== undefined && this.value < this.min)
      );
    },
    nameCapitalized() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
  },
  methods: {
    onIncrment() {
      this.$emit('input', parseInt(this.value + 1));
    },
    onDecrement() {
      this.$emit('input', parseInt(this.value - 1));
    },
    onInput(event) {
      this.$emit('input', parseInt(event.target.value));
    },
    onChange(event) {
      this.$emit('change', parseInt(event.target.value));
    },
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus();
    }
    // allow only nunbers from 0..9
    // keycode for 0 = 48
    // keycode for 9 = 57
    this.$refs.input.addEventListener('keypress', (evt) => {
      if (
        (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
        evt.which > 57
      ) {
        evt.preventDefault();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
}

.custom-input {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.custom-input::-webkit-inner-spin-button,
.custom-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.custom-input {
  // width: 130px;
  // height: 49px;
  border-radius: 4px;
  border: 1px solid #bfc6d9;
  outline: none;
  // background-color: $gray-100;
  color: #363c49;
  padding-left: 10px;
  box-sizing: border-box;
  font-weight: 600;
}

.input-btns {
  // width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  right: 20px;
  background-color: #b9bdd162;
  border-radius: 0 4px 4px 0;
  // height: 49px;
}

.input-number-btn {
  background-color: transparent;
  border: 0;
  outline: 0;
  position: relative;
  // right: 2px;
  filter: invert(0);
}

.input-number-btn:hover > img {
  filter: invert(0.1);
}

.input-number-btn:focus > img {
  filter: invert(0.2);
}

.validation {
  position: relative;
  top: 0;
  left: 0;
  min-width: 400px;
}

.message {
  margin-top: 5px;
  font-size: 14px;
  color: #707070;

  &.error {
    color: red;
    font-weight: 500;
  }
}
</style>
