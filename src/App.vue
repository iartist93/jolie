<template>
  <div id="app">
    <icon-button>Icon Button default</icon-button>
    <!-- <icon-button :size="'xl'">Icon Button xl</icon-button> -->
    <!-- <icon-button :size="'md'">Icon Button md</icon-button> -->
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
