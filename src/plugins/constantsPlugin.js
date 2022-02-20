import constants from '@/foundation/constants.ts';

const MyPlugin = {};

MyPlugin.install = function (Vue, options) {
  console.log('===========> Installing constants plugin');
  Vue.constants = constants;
};

export default MyPlugin;
