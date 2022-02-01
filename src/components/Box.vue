<template>
  <div class="crafter-box shadow-md" ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useStyledSystem from '../composables/useStyledSystem';
import useInjectStyle from '../composables/useInjectStyle';

import StyledSystem from '../mixins/StyledSystem';
import { defineComponent, onMounted, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Box',
  props: {},
  ...StyledSystem,
  setup(props) {
    const rootRef = ref(null);

    const elementStyle = useStyledSystem(props);

    onMounted(() => {
      useInjectStyle(rootRef, elementStyle, 'crafter-box');
    });

    return { rootRef };
  },
});
</script>

<style lang="scss" scoped></style>
