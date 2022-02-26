import { ref, Ref, watch } from '@vue/composition-api';
import Vue from 'vue';

export default function useTestReactive(props: any) {
  const returnValue = ref({});

  watch(props, (newValue) => {
    console.log(
      '🤘🤘🤘🤘 ===========> use test reactive new props value =  ',
      newValue
    );
    // returnValue.value['checked'] = isChecked.value; // ❌❌❌
    // Vue.set(returnValue.value, 'checked', props);
    Object.entries(props).forEach(([key, value]) => {
      if (value) {
        console.log('key : ', key, ', value : ', value);
        Vue.set(returnValue.value, key, value);
      }
    });
  });

  return returnValue.value;
}
