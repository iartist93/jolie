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
    </div>

    <div v-if="false" class="toggles">
      <!-- switch -->
      <toggle v-model="toggleChecked" />
    </div>

    <div v-if="false" class="boxes">
      <box :color="'red'" :borderRadius="12" :mt="120"
        >Hello this is a default box</box
      >
    </div>

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
</style>
