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
// import useTestReactive from '@/composables/useTestReactive';

import { defineComponent, ref, Ref, watch } from '@vue/composition-api';
// import _ from 'lodash';

export default defineComponent({
  name: 'Box',
  ...StyledSystem,
  setup(props) {
    const rootRef = ref<HTMLElement | null>(null);
    // const isChecked = ref(false);

    const style = useStyledSystem(props as useStyledSystemType);

    watch(style.value, (newVal, oldVal) => {
      console.log('🤘 style new value ', newVal);
      console.log('🌼 style old value ', oldVal);
    });

    // watch(props, (newProps, oldProps) => {
    //   console.log('======> new props ', newProps);
    //   console.log('======> old props ', oldProps);
    //   isChecked.value = !isChecked.value;
    // });

    // const { returnValue } = useTestReactive(isChecked);

    // watch(returnValue.value, (newVal, oldVal) => {
    //   console.log('======> new returnValue ', newVal);
    //   console.log('======> old returnValue ', oldVal);
    // });

    useInjectStyle(rootRef as Ref<HTMLElement>, style);

    return { rootRef, style };
  },
});
</script>

<style lang="scss" scoped></style>
