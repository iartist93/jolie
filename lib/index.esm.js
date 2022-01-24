import { defineComponent, ref } from '@vue/composition-api';

var script = defineComponent({
  props: {
    headingText: {
      type: String,
      default: 'default heading text'
    },
    bodyText: {
      type: String,
      default: 'default body text'
    }
  },
  setup: function () {
    var show = ref(false);

    var toggleShow = function () {
      show.value = !show.value;
    };

    return {
      show: show,
      toggleShow: toggleShow
    };
  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  const options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  let hook;

  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return (id, style) => addStyle(id, style);
}

let HEAD;
const styles = {};

function addStyle(id, css) {
  const group = isOldIE ? css.media || 'default' : id;
  const style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    let code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      const index = style.ids.size - 1;
      const textNode = document.createTextNode(code);
      const nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "sample-component-container"
  }, [_c("span", [_vm._v("Crafter UI > SampleComponent")]), _vm._v(" "), _c("span", [_vm._v("default thing here")]), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_vm.headingText))]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.bodyText))]), _vm._v(" "), _c("h4", [_vm._v("Show = " + _vm._s(_vm.show))]), _vm._v(" "), _c("button", {
    on: {
      click: _vm.toggleShow
    }
  }, [_vm._v("Toggle Show")])]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4984ad10_0", {
    source: ".sample-component-container {\n  padding: 40px;\n  /* background-color: rgba($color: green, $alpha: 0.5); */\n  background-color: green;\n  color: white;\n  font-size: 70px;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=SampleComponent.vue.map */",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\aayma\\Desktop\\uniparticle\\crafter-ui\\src\\components\\SampleComponent.vue", "SampleComponent.vue"],
      "names": [],
      "mappings": "AAsCA;EACA,aAAA;EACA,wDAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;ACrCA;;AAEA,8CAA8C",
      "file": "SampleComponent.vue",
      "sourcesContent": ["<template>\n  <div class=\"sample-component-container\">\n    <span>Crafter UI > SampleComponent</span>\n    <span>default thing here</span>\n    <h2>{{ headingText }}</h2>\n    <h3>{{ bodyText }}</h3>\n    <h4>Show = {{ show }}</h4>\n    <button @click=\"toggleShow\">Toggle Show</button>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent, ref } from '@vue/composition-api';\n\nexport default defineComponent({\n  props: {\n    headingText: {\n      type: String,\n      default: 'default heading text',\n    },\n    bodyText: {\n      type: String,\n      default: 'default body text',\n    },\n  },\n  setup() {\n    const show = ref(false);\n\n    const toggleShow = () => {\n      show.value = !show.value;\n    };\n\n    return { show, toggleShow };\n  },\n});\n</script>\n\n<style lang=\"scss\">\n.sample-component-container {\n  padding: 40px;\n  /* background-color: rgba($color: green, $alpha: 0.5); */\n  background-color: green;\n  color: white;\n  font-size: 70px;\n  font-weight: 700;\n}\n</style>\n", ".sample-component-container {\n  padding: 40px;\n  /* background-color: rgba($color: green, $alpha: 0.5); */\n  background-color: green;\n  color: white;\n  font-size: 70px;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=SampleComponent.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

export { __vue_component__ as SampleComponent };
//# sourceMappingURL=index.esm.js.map
