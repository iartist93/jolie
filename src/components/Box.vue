<template>
  <div class="jolie-box shadow-md" ref="rootRef" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
import useStyledSystem from '../composables/useStyledSystem';
import useInjectStyle from '../composables/useInjectStyle';

import StyledSystem from '../mixins/StyledSystem';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Box',
  props: {},
  ...StyledSystem,
  setup(props) {
    const rootRef = ref(null);

    const elementStyle = useStyledSystem(props);

    useInjectStyle(rootRef, elementStyle);

    return { rootRef };
  },
});
</script>

<style lang="scss" scoped></style>
