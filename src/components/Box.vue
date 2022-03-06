<template>
  <div :class="`jolie-box ${shadowClass}`" ref="rootRef" v-on="$listeners">
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
  props: {
    boxShadow: {
      type: String,
    },
    ...StyledSystem.props,
  },
  setup(props) {
    const rootRef = ref<HTMLElement | null>(null);
    const style = ref<Record<string, unknown>>({});

    let shadowClass = ref('');

    if (props.boxShadow) {
      shadowClass.value =
        props.boxShadow === 'sm'
          ? 'shadow-sm'
          : props.boxShadow === 'md'
          ? 'shadow-md'
          : props.boxShadow === 'lg'
          ? 'shadow-lg'
          : props.boxShadow === 'xl'
          ? 'shadow-xl'
          : props.boxShadow === '2xl'
          ? 'shadow-2xl'
          : props.boxShadow === 'inner'
          ? 'shadow-inner'
          : props.boxShadow === 'none'
          ? 'shadow-none'
          : 'shadow';
    }

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType
    );
    useInjectStyle(rootRef as Ref<HTMLElement>, elementStyle);

    return { rootRef, style, shadowClass };
  },
});
</script>

<style lang="scss" scoped></style>
