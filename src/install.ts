// Components
import SampleComponent from './components/SampleComponent.vue';
import Box from './components/Box.vue';
import IconButton from './components/IconButton.vue';
import Toggle from './components/Toggle.vue';
import MenuButton from './components/menu/MenuButton.vue';
import MenuItem from './components/menu/MenuItem.vue';
import MenuProvider from './components/menu/MenuProvider.vue';
import MenuList from './components/menu/MenuList.vue';
import MenuSelect from './components/select/MenuSelect.vue';
import SelectOption from './components/select/SelectOption.vue';
import Modal from './components/modals/Modal.vue';
import ModalButton from './components/modals/ModalButton.vue';
import ModalContent from './components/modals/ModalContent.vue';
import Checkbox from './components/Checkbox.vue';
import InputNumber from './components/InputNumber.vue';

// Composables
import { useIsDescendent } from './composables/useIsDescendent';
import { useClickOutside } from './composables/useClickOutside';
import { useInjectStyle } from './composables/useInjectStyle';
import { useStyledSystem } from './composables/useStyledSystem';

export {
  SampleComponent,
  Box,
  IconButton,
  Toggle,
  MenuButton,
  MenuItem,
  MenuProvider,
  MenuList,
  MenuSelect,
  SelectOption,
  Modal,
  ModalButton,
  ModalContent,
  Checkbox,
  InputNumber,
  useIsDescendent,
  useClickOutside,
  useInjectStyle,
  useStyledSystem,
};

// Declare install function executed by Vue.use()
// export function install(Vue) {
//   if (install.installed) return;
//   install.installed = true;
//   Vue.component('Box', Box);
//   Vue.component('IconButton', IconButton);
//   Vue.component('Toggle', Toggle);
//   Vue.component('SampleComponent', SampleComponent);
// }

// // Create module definition for Vue.use()
// const plugin = {
//   install,
// };

// // Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null;
// if (typeof window !== 'undefined') {
//   GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
//   GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }

// export default plugin;
