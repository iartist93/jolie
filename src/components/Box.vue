<template>
  <div class="crafter-box shadow-md" :style="{ ...elementStyle }">
    <slot></slot>
    <div>elementStyle = {{ elementStyle }}</div>
  </div>
</template>

<script>
// import Vue from 'vue';
import useSytleSystem from '../composables/useSytleSystem';
import StyledSystem from '../mixins/StyledSystem';
// import mixins from 'vue-typed-mixins';
import Vue from 'vue';

export default Vue.extend({
  //   mixins: [StyledSystem],
  name: 'Box',
  props: {},
  ...StyledSystem,
  setup(props) {
    const elementStyle = useSytleSystem(props);
    return { elementStyle };
  },
});
</script>

<style lang="scss" scoped></style>
