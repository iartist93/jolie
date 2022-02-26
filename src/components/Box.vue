<template>
  <div class="jolie-box shadow-md" ref="rootRef" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import { useInjectStyle } from '@/composables/useInjectStyle';
import StyledSystem from '@/mixins/StyledSystem';

import { defineComponent, ref, Ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Box',
  ...StyledSystem,
  setup(props) {
    const rootRef = ref<HTMLElement | null>(null);
    const style = ref<Record<string, unknown>>({});

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType
    );
    useInjectStyle(rootRef as Ref<HTMLElement>, elementStyle);

    return { rootRef, style };
  },
});
</script>

<style lang="scss" scoped></style>
