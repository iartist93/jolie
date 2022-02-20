<template>
  <div class="jolie-box shadow-md" ref="rootRef" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import useStyledSystem, {
  useStyleSystemType,
} from '@/composables/useStyledSystem';
import useInjectStyle from '@/composables/useInjectStyle';
// import useTestReactive from '@/composables/useTestReactive';
import StyledSystem from '@/mixins/StyledSystem';

import { defineComponent, ref, Ref, watch } from '@vue/composition-api';

export default defineComponent({
  name: 'Box',
  props: {
    test: {
      type: String,
    },
    ...StyledSystem.props,
  },

  setup(props) {
    const rootRef = ref<HTMLElement | null>(null);
    // const isChecked = ref(false);

    const { style } = useStyledSystem(props as useStyleSystemType);

    watch(
      style,
      (newValue) => {
        console.log('style new value ', newValue);
      },
      { deep: true, immediate: true }
    );

    // watch(
    //   () => props.test,
    //   (newValue) => {
    //     // console.log(newValue);
    //     isChecked.value = newValue === 'green';
    //   }
    // );
    // const { returnValue } = useTestReactive(isChecked);

    // watch(returnValue, (newValue) => {
    //   console.log('==============> return value changed ', returnValue.value);
    // });

    useInjectStyle(rootRef as Ref<HTMLElement>, style);

    return { rootRef, style };
  },
});
</script>

<style lang="scss" scoped></style>
