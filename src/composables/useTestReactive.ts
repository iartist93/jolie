import { ref, Ref, watch } from '@vue/composition-api';
import Vue from 'vue';

export default function useTestReactive(isChecked: Ref<boolean>) {
  const returnValue = ref({});

  watch(isChecked, (newValue) => {
    console.log('🤘🤘🤘🤘 ===========> Is Checked ', newValue, typeof newValue);
    // returnValue.value['checked'] = isChecked.value; // ❌❌❌
    Vue.set(returnValue.value, 'checked', isChecked.value);
  });

  return { returnValue };
}
