<template>
  <div id="app">
    <!-- buttons -->
    <div v-if="false" class="buttons">
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

    <div class="boxes">
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
import IconButton from './components/buttons/IconButton.vue';
import Toggle from './components/checkboxes/Toggle.vue';

export default Vue.extend({
  name: 'App',
  components: {
    IconButton,
    Toggle,
    Box,
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
}
</style>
