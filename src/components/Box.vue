<template>
  <div class="crafter-box shadow-md" :style="{ ...elementStyle }">
    <slot></slot>
    <div>elementStyle = {{ elementStyle }}</div>
  </div>
</template>

<script>
import usePropsStyle from '../composables/usePropsStyle';

export default {
  name: 'Box',
  props: {},
  setup(props, { attrs }) {
    const elementStyle = usePropsStyle(attrs);
    return { elementStyle };
  },
};
</script>

<style lang="scss" scoped></style>
