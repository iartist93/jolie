<template>
  <div id="app">
    <sample-component />
    <icon-button>Icon Button default</icon-button>
    <icon-button :size="'xl'">Icon Button xl</icon-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconButton from './components/buttons/IconButton.vue';
import SampleComponent from './components/SampleComponent.vue';

export default Vue.extend({
  name: 'App',
  components: {
    SampleComponent,
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
}
</style>
