import Box from './components/Box.vue';
import IconButton from './components/IconButton.vue';
import Toggle from './components/Toggle.vue';
import SampleComponent from './components/SampleComponent.vue';

export { IconButton, SampleComponent, Box, Toggle };

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
