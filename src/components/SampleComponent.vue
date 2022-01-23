<template>
  <div class="sample-component-container">
    <span>Crafter UI > SampleComponent</span>
    <span>default thing here</span>
    <h2>{{ headingText }}</h2>
    <h3>{{ bodyText }}</h3>
    <h4>Show = {{ show }}</h4>
    <button @click="toggleShow">Toggle Show</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    headingText: {
      type: String,
      default: 'default heading text',
    },
    bodyText: {
      type: String,
      default: 'default body text',
    },
  },
  setup() {
    const show = ref(false);

    const toggleShow = () => {
      show.value = !show.value;
    };

    return { show, toggleShow };
  },
});
</script>

<style lang="scss">
.sample-component-container {
  padding: 40px;
  background-color: rgba($color: green, $alpha: 0.5);
  color: white;
  font-size: 70px;
  font-weight: 700;
}
</style>
