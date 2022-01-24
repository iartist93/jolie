<template>
  <div id="app">
    <icon-button size="sm" class="mt-4">Button sm</icon-button>
    <icon-button class="mt-4">Button default</icon-button>
    <icon-button size="lg" class="mt-4">Button lg</icon-button>
    <icon-button size="xl" class="mt-4" :colorScheme="'blue'">
      Button xl
    </icon-button>
    <icon-button size="lg" class="mt-4" disabled>Button Disabled</icon-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconButton from './components/buttons/IconButton.vue';

export default Vue.extend({
  name: 'App',
  components: {
    IconButton,
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
