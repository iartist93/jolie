<template>
  <div id="app">
    <sample-component v-if="false" />

    <!-- buttons -->
    <div v-if="true" class="buttons">
      <icon-button size="sm" class="mt-4">Button sm</icon-button>
      <icon-button class="mt-4">Button default</icon-button>
      <icon-button size="lg" class="mt-4">Button lg</icon-button>
      <icon-button size="xl" class="mt-4" :colorScheme="'blue'">
        Button xl
      </icon-button>
      <icon-button size="lg" class="mt-4" disabled>Button Disabled</icon-button>
      <icon-button size="lg" class="mt-4" :variant="'outline'"
        >Button Outlined</icon-button
      >
      <icon-button
        size="lg"
        class="mt-4"
        :variant="'ghost'"
        :colorScheme="'green'"
        >Button Ghost</icon-button
      >
    </div>

    <div v-if="false" class="toggles">
      <!-- switch -->
      <toggle v-model="toggleChecked" />
    </div>

    <div v-if="false" class="boxes">
      <box
        :color="'red'"
        :borderRadius="12"
        :mt="120"
        :class="{ boxActive: boxActiveState }"
      >
        Hello this is a default box
      </box>
    </div>

    <div v-if="false" :class="{ test2: boxActiveState }" class="test1">
      This is a test div
    </div>
    <button
      @click="
        () => {
          boxActiveState = !boxActiveState;
        }
      "
    >
      Toogle Active
    </button>

    <!-- end -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Box from './components/Box.vue';
import IconButton from './components/IconButton.vue';
import Toggle from './components/Toggle.vue';
import SampleComponent from './components/SampleComponent.vue';

export default Vue.extend({
  name: 'App',
  components: {
    IconButton,
    Toggle,
    Box,
    SampleComponent,
  },
  data() {
    return {
      toggleChecked: false,
      boxActiveState: false,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  background-color: rgb(228, 228, 228);
}

.boxActive {
  height: 500px;
  background-color: blue;
  color: green;
  position: relative;
  top: -100px;
}

.test1 {
  width: 500px;
  height: 200px;
  background-color: red;
}

.test2 {
  background-color: green !important;
}
</style>
