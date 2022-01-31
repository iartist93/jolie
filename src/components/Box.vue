<template>
  <div class="crafter-box shadow-md" :style="{ ...elementStyle }">
    <slot></slot>
    <div>elementStyle = {{ elementStyle }}</div>
  </div>
</template>

<script>
import useStyledSystem from '../composables/useStyledSystem';
import StyledSystem from '../mixins/StyledSystem';
import Vue from 'vue';

export default Vue.extend({
  //   mixins: [StyledSystem],
  name: 'Box',
  props: {},
  ...StyledSystem,
  setup(props) {
    const elementStyle = useStyledSystem(props);
    return { elementStyle };
  },
});
</script>

<style lang="scss" scoped></style>
