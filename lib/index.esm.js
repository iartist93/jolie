import { defineComponent, ref } from '@vue/composition-api';

function stringOrNumber(attribute) {
    return typeof attribute === 'string' ? attribute : attribute + 'px';
}
function useStyleSystem(props) {
    var style = {};
    // colors
    if (props.color)
        style['color'] = props.color;
    if (props.bg)
        style['background-color'] = props.bg;
    if (props.backgroundColor)
        style['background-color'] = props.backgroundColor;
    // background
    if (props.backgroundImage)
        style['background-image'] = props.backgroundImage;
    if (props.backgroundSize)
        style['background-size'] = props.backgroundSize;
    if (props.backgroundPosition)
        style['background-position'] = props.backgroundPosition;
    if (props.backgroundRepeat)
        style['background-repeat'] = props.backgroundRepeat;
    // border
    if (props.border)
        style['border'] = stringOrNumber(props.border);
    if (props.borderTop)
        style['border-top'] = stringOrNumber(props.borderTop);
    if (props.borderRight)
        style['border-right'] = stringOrNumber(props.borderRight);
    if (props.borderBottom)
        style['border-bottom'] = stringOrNumber(props.borderBottom);
    if (props.borderLeft)
        style['border-left'] = stringOrNumber(props.borderLeft);
    if (props.borderWidth)
        style['border-width'] = stringOrNumber(props.borderWidth);
    if (props.borderRadius)
        style['border-radius'] = stringOrNumber(props.borderRadius);
    if (props.borderColor)
        style['border-color'] = props.borderColor;
    // position
    if (props.position)
        style['position'] = props.position;
    if (props.top)
        style['top'] = stringOrNumber(props.top);
    if (props.right)
        style['right'] = stringOrNumber(props.right);
    if (props.left)
        style['left'] = stringOrNumber(props.left);
    if (props.bottom)
        style['bottom'] = stringOrNumber(props.bottom);
    // layout
    if (props.w)
        style['width'] = stringOrNumber(props.w);
    if (props.h)
        style['height'] = stringOrNumber(props.h);
    if (props.maxW)
        style['max-width'] = stringOrNumber(props.maxW);
    if (props.maxH)
        style['max-height'] = stringOrNumber(props.maxH);
    if (props.overflow)
        style['overflow'] = props.overflow;
    if (props.overflowX)
        style['overflow-x'] = props.overflowX;
    if (props.overflowY)
        style['overflow-y'] = props.overflowY;
    if (props.display)
        style['display'] = props.display;
    // spacing
    if (props.p)
        style['padding'] = stringOrNumber(props.p);
    if (props.px) {
        style['padding-left'] = stringOrNumber(props.px);
        style['padding-right'] = stringOrNumber(props.px);
    }
    if (props.py) {
        style['padding-top'] = stringOrNumber(props.py);
        style['padding-bottom'] = stringOrNumber(props.py);
    }
    if (props.pr)
        style['padding-right'] = stringOrNumber(props.pr);
    if (props.pl)
        style['padding-left'] = stringOrNumber(props.pl);
    if (props.pt)
        style['padding-top'] = stringOrNumber(props.pt);
    if (props.pb)
        style['padding-bottom'] = stringOrNumber(props.pb);
    if (props.m)
        style['margin'] = stringOrNumber(props.m);
    if (props.mx) {
        style['margin-left'] = stringOrNumber(props.mx);
        style['margin-right'] = stringOrNumber(props.mx);
    }
    if (props.my) {
        style['margin-top'] = stringOrNumber(props.my);
        style['margin-bottom'] = stringOrNumber(props.my);
    }
    if (props.mr)
        style['margin-right'] = stringOrNumber(props.mr);
    if (props.ml)
        style['margin-left'] = stringOrNumber(props.ml);
    if (props.mt)
        style['margin-top'] = stringOrNumber(props.mt);
    if (props.mb)
        style['margin-bottom'] = stringOrNumber(props.mb);
    //typography
    if (props.fontSize)
        style['font-size'] = stringOrNumber(props.fontSize);
    if (props.fontWeight)
        style['font-weight'] = stringOrNumber(props.fontWeight);
    if (props.fontFamily)
        style['font-family'] = props.fontFamily;
    if (props.textAlign)
        style['text-align'] = props.textAlign;
    if (props.letterSpacing)
        style['letter-spacing'] = props.letterSpacing;
    if (props.lineHeight)
        style['line-height'] = props.lineHeight;
    // flexbox
    if (props.alignItems)
        style['align-items'] = props.alignItems;
    if (props.justifyContent)
        style['justify-content'] = props.justifyContent;
    if (props.alignContent)
        style['align-content'] = props.alignContent;
    if (props.flexWrap)
        style['flex-wrap'] = props.flexWrap;
    if (props.flexBasis)
        style['flex-basis'] = stringOrNumber(props.flexBasis);
    if (props.flexDirection)
        style['flex-direction'] = props.flexDirection;
    if (props.flex)
        style['flex'] = props.flex;
    if (props.justifySelf)
        style['justify-self'] = props.justifySelf;
    if (props.alignSelf)
        style['align-self'] = props.alignSelf;
    if (props.order)
        style['order'] = props.order;
    return style;
}

const StyledSystem = {
  props: {
    color: {
      type: String
    },
    bg: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    backgroundImage: {
      type: String
    },
    backgroundSize: {
      type: String
    },
    backgroundPosition: {
      type: String
    },
    backgroundRepeat: {
      type: String
    },
    border: {
      type: [String, Number]
    },
    borderTop: {
      type: [String, Number]
    },
    borderRight: {
      type: [String, Number]
    },
    borderBottom: {
      type: [String, Number]
    },
    borderLeft: {
      type: [String, Number]
    },
    borderWidth: {
      type: [String, Number]
    },
    borderRadius: {
      type: [String, Number]
    },
    borderColor: {
      type: String
    },
    position: {
      type: String
    },
    top: {
      type: [String, Number]
    },
    right: {
      type: [String, Number]
    },
    bottom: {
      type: [String, Number]
    },
    left: {
      type: [String, Number]
    },
    w: {
      type: [String, Number]
    },
    h: {
      type: [String, Number]
    },
    maxW: {
      type: [String, Number]
    },
    maxH: {
      type: [String, Number]
    },
    overflow: {
      type: String
    },
    overflowX: {
      type: String
    },
    overflowY: {
      type: String
    },
    display: {
      type: String
    },
    p: {
      type: Number
    },
    px: {
      type: Number
    },
    py: {
      type: Number
    },
    pt: {
      type: Number
    },
    pr: {
      type: Number
    },
    pb: {
      type: Number
    },
    pl: {
      type: Number
    },
    m: {
      type: Number
    },
    mx: {
      type: Number
    },
    my: {
      type: Number
    },
    mt: {
      type: Number
    },
    mr: {
      type: Number
    },
    mb: {
      type: Number
    },
    ml: {
      type: Number
    },
    fontSize: {
      type: Number
    },
    fontWeight: {
      type: [Number, String]
    },
    fontFamily: {
      type: String
    },
    textAlign: {
      type: String
    },
    letterSpacing: {
      type: String
    },
    lineHeight: {
      type: String
    },
    alignItems: {
      type: String
    },
    justifyContent: {
      type: String
    },
    alignContent: {
      type: String
    },
    flexWrap: {
      type: String
    },
    flexBasis: {
      type: [String, Number]
    },
    flexDirection: {
      type: String
    },
    flex: {
      type: String
    },
    justifySelf: {
      type: String
    },
    alignSelf: {
      type: String
    },
    order: {
      type: Number
    }
  }
};

//
var script$3 = defineComponent({
  name: 'Box',
  props: {},
  ...StyledSystem,

  setup(props) {
    const elementStyle = useStyleSystem(props);
    return {
      elementStyle
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
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "crafter-box shadow-md",
    style: Object.assign({}, _vm.elementStyle)
  }, [_vm._t("default"), _vm._v(" "), _c("div", [_vm._v("elementStyle = " + _vm._s(_vm.elementStyle))])], 2);
};

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-ccaeb332_0", {
    source: "\n\n/*# sourceMappingURL=Box.vue.map */",
    map: {
      "version": 3,
      "sources": ["Box.vue"],
      "names": [],
      "mappings": ";;AAEA,kCAAkC",
      "file": "Box.vue"
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-ccaeb332";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

var typography = {
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
    lineHeights: {
        normal: 'normal',
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    //   fonts: {
    //     heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    //     body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    //     mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    //   },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
};

var spacing = {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
};

var ButtonTheme = {
    sizes: {
        '4xl': {
            h: 20,
            minW: 20,
            fontSize: '4xl',
            ph: 12,
        },
        '2xl': {
            h: 16,
            minW: 16,
            fontSize: '2xl',
            ph: 10,
        },
        xl: {
            h: 14,
            minW: 14,
            fontSize: 'xl',
            ph: 8,
        },
        lg: {
            h: 12,
            minW: 12,
            fontSize: 'lg',
            ph: 6,
        },
        md: {
            h: 10,
            minW: 10,
            fontSize: 'md',
            ph: 4,
        },
        sm: {
            h: 8,
            minW: 8,
            fontSize: 'sm',
            ph: 3,
        },
        xs: {
            h: 6,
            minW: 6,
            fontSize: 'xs',
            ph: 2,
        },
    },
};

var script$2 = defineComponent({
  props: {
    colorScheme: {
      type: String,
      default: 'teal'
    },
    size: {
      type: String,
      validator: function (size) {
        return typography.fontSizes[size] !== undefined;
      },
      default: 'md'
    },
    border: {
      type: Number,
      default: 6
    },
    isFullWidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup: function (props) {
    var _a = props,
        size = _a.size,
        colorScheme = _a.colorScheme,
        border = _a.border,
        isFullWidth = _a.isFullWidth,
        disabled = _a.disabled;
    var hasSize = Boolean(size && ButtonTheme.sizes[size]);
    var buttonStyle = {
      width: isFullWidth ? '100%' : 'auto',
      'border-radius': border ? "".concat(border, "px") : '0',
      'background-color': disabled ? 'gray' : colorScheme ? colorScheme : 'blue',
      'font-size': typography.fontSizes[size],
      height: hasSize ? spacing[ButtonTheme.sizes[size].h] : 'auto',
      'padding-right': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'padding-left': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,
      'min-width': hasSize ? spacing[ButtonTheme.sizes[size].minW] : 0
    };
    return {
      buttonStyle: buttonStyle
    };
  }
});

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("button", {
    staticClass: "crafter-button",
    class: {
      disabled: _vm.disabled
    },
    style: Object.assign({}, _vm.buttonStyle)
  }, [_vm._t("default", function () {
    return [_vm._v("Button")];
  })], 2);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-70ccc210_0", {
    source: ".crafter-button[data-v-70ccc210] {\n  box-shadow: 0px 3px 6px #00000029;\n  font-weight: 500;\n  line-height: \"1.2\";\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  white-space: nowrap;\n  vertical-align: middle;\n  outline: none;\n  cursor: pointer;\n}\n.crafter-button[data-v-70ccc210]:hover:not(.disabled) {\n  filter: brightness(90%);\n}\n.crafter-button.disabled[data-v-70ccc210] {\n  color: #d8d8d8;\n}\n\n/*# sourceMappingURL=IconButton.vue.map */",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\aayma\\Desktop\\uniparticle\\crafter-ui\\src\\components\\IconButton.vue", "IconButton.vue"],
      "names": [],
      "mappings": "AA+EA;EACA,iCAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EAEA,eAAA;AChFA;ADkFA;EACA,uBAAA;AChFA;ADmFA;EACA,cAAA;ACjFA;;AAEA,yCAAyC",
      "file": "IconButton.vue",
      "sourcesContent": ["<template>\n  <button\n    :style=\"{\n      ...buttonStyle,\n    }\"\n    class=\"crafter-button\"\n    :class=\"{ disabled }\"\n  >\n    <slot>Button</slot>\n  </button>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from '@vue/composition-api';\nimport typography, { FontSize } from '@/foundation/typography';\nimport { spacing } from '@/foundation/spacing';\nimport ButtonTheme from '@/themes/button';\nimport { Data } from '@vue/composition-api';\n\ninterface PropsType extends Readonly<Data> {\n  colorScheme: string;\n  size: FontSize;\n  border: number;\n  isFullWidth: boolean;\n  disabled: boolean;\n}\n\nexport default defineComponent({\n  props: {\n    colorScheme: {\n      type: String,\n      default: 'teal',\n    },\n    size: {\n      type: String as () => FontSize,\n      validator: (size: string): boolean =>\n        typography.fontSizes[size] !== undefined,\n      default: 'md',\n    },\n    border: {\n      type: Number,\n      default: 6,\n    },\n    isFullWidth: {\n      type: Boolean,\n      default: false,\n    },\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  setup(props) {\n    let { size, colorScheme, border, isFullWidth, disabled } =\n      props as PropsType;\n\n    const hasSize = Boolean(size && ButtonTheme.sizes[size]);\n\n    const buttonStyle = {\n      width: isFullWidth ? '100%' : 'auto',\n      'border-radius': border ? `${border}px` : '0',\n      'background-color': disabled\n        ? 'gray'\n        : colorScheme\n        ? colorScheme\n        : 'blue',\n      'font-size': typography.fontSizes[size],\n      height: hasSize ? spacing[ButtonTheme.sizes[size].h] : 'auto',\n      'padding-right': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,\n      'padding-left': hasSize ? spacing[ButtonTheme.sizes[size].ph] : 0,\n      'min-width': hasSize ? spacing[ButtonTheme.sizes[size].minW] : 0,\n    };\n\n    return { buttonStyle };\n  },\n});\n</script>\n\n<style lang=\"scss\" scoped>\n.crafter-button {\n  box-shadow: 0px 3px 6px #00000029;\n  font-weight: 500;\n  line-height: '1.2';\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  white-space: nowrap;\n  vertical-align: middle;\n  outline: none;\n\n  cursor: pointer;\n\n  &:hover:not(.disabled) {\n    filter: brightness(90%);\n  }\n\n  &.disabled {\n    color: rgb(216, 216, 216);\n  }\n}\n</style>\n", ".crafter-button {\n  box-shadow: 0px 3px 6px #00000029;\n  font-weight: 500;\n  line-height: \"1.2\";\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  white-space: nowrap;\n  vertical-align: middle;\n  outline: none;\n  cursor: pointer;\n}\n.crafter-button:hover:not(.disabled) {\n  filter: brightness(90%);\n}\n.crafter-button.disabled {\n  color: #d8d8d8;\n}\n\n/*# sourceMappingURL=IconButton.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-70ccc210";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'Toggle',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onToggle() {
      this.$emit('input', !this.value);
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("label", {
    staticClass: "crafter-toggle"
  }, [_c("input", {
    attrs: {
      type: "checkbox",
      "aria-checked": _vm.value.toString()
    },
    domProps: {
      checked: _vm.value
    },
    on: {
      click: _vm.onToggle,
      keydown: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
          return null;
        }

        $event.preventDefault();
        return _vm.onToggle.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-7c454bc1_0", {
    source: ".crafter-toggle[data-v-7c454bc1] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.crafter-toggle input[data-v-7c454bc1] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.crafter-toggle input:checked + .slider[data-v-7c454bc1] {\n  background-color: #2196f3;\n}\n.crafter-toggle input:checked + .slider[data-v-7c454bc1]::before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.crafter-toggle input:focus + .slider[data-v-7c454bc1] {\n  box-shadow: 0 0 1px #2196f3;\n}\n.crafter-toggle .slider[data-v-7c454bc1] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n  border-radius: 34px;\n}\n.crafter-toggle .slider[data-v-7c454bc1]::before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n/*# sourceMappingURL=Toggle.vue.map */",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\aayma\\Desktop\\uniparticle\\crafter-ui\\src\\components\\Toggle.vue", "Toggle.vue"],
      "names": [],
      "mappings": "AA+BA;EACA,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AC9BA;ADiCA;EACA,UAAA;EACA,QAAA;EACA,SAAA;AC/BA;ADkCA;EACA,yBAAA;AChCA;ADkCA;EACA,mCAAA;EACA,+BAAA;EACA,2BAAA;AChCA;ADsCA;EACA,2BAAA;ACpCA;ADyCA;EACA,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,sBAAA;EACA,gBAAA;EACA,wBAAA;EACA,mBAAA;ACvCA;ADyCA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;ACvCA;;AAEA,qCAAqC",
      "file": "Toggle.vue",
      "sourcesContent": ["<template>\r\n  <label class=\"crafter-toggle\">\r\n    <input\r\n      type=\"checkbox\"\r\n      @click=\"onToggle\"\r\n      @keydown.space.prevent=\"onToggle\"\r\n      :checked=\"value\"\r\n      :aria-checked=\"value.toString()\"\r\n    />\r\n    <span class=\"slider\"></span>\r\n  </label>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'Toggle',\r\n  props: {\r\n    value: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n  methods: {\r\n    onToggle() {\r\n      this.$emit('input', !this.value);\r\n    },\r\n  },\r\n};\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.crafter-toggle {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n\r\n  // hide default HTML checkbox\r\n  input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n\r\n    &:checked {\r\n      + .slider {\r\n        background-color: #2196f3;\r\n\r\n        &::before {\r\n          -webkit-transform: translateX(26px);\r\n          -ms-transform: translateX(26px);\r\n          transform: translateX(26px);\r\n        }\r\n      }\r\n    }\r\n\r\n    &:focus {\r\n      + .slider {\r\n        box-shadow: 0 0 1px #2196f3;\r\n      }\r\n    }\r\n  }\r\n\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: 0.3s;\r\n    -webkit-transition: 0.3s;\r\n    border-radius: 34px;\r\n\r\n    &::before {\r\n      position: absolute;\r\n      content: '';\r\n      height: 26px;\r\n      width: 26px;\r\n      left: 4px;\r\n      bottom: 4px;\r\n      background-color: white;\r\n      border-radius: 50%;\r\n      transition: 0.3s;\r\n      -webkit-transition: 0.3s;\r\n    }\r\n  }\r\n}\r\n</style>\r\n", ".crafter-toggle {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.crafter-toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.crafter-toggle input:checked + .slider {\n  background-color: #2196f3;\n}\n.crafter-toggle input:checked + .slider::before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.crafter-toggle input:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n.crafter-toggle .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n  border-radius: 34px;\n}\n.crafter-toggle .slider::before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  border-radius: 50%;\n  transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n/*# sourceMappingURL=Toggle.vue.map */"]
    },
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-7c454bc1";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

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
  inject("data-v-51b388b2_0", {
    source: ".sample-component-container {\n  padding: 40px;\n  background-color: rgba(0, 128, 0, 0.5);\n  color: white;\n  font-size: 70px;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=SampleComponent.vue.map */",
    map: {
      "version": 3,
      "sources": ["C:\\Users\\aayma\\Desktop\\uniparticle\\crafter-ui\\src\\components\\SampleComponent.vue", "SampleComponent.vue"],
      "names": [],
      "mappings": "AAsCA;EACA,aAAA;EACA,sCAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;ACrCA;;AAEA,8CAA8C",
      "file": "SampleComponent.vue",
      "sourcesContent": ["<template>\n  <div class=\"sample-component-container\">\n    <span>Crafter UI > SampleComponent</span>\n    <span>default thing here</span>\n    <h2>{{ headingText }}</h2>\n    <h3>{{ bodyText }}</h3>\n    <h4>Show = {{ show }}</h4>\n    <button @click=\"toggleShow\">Toggle Show</button>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent, ref } from '@vue/composition-api';\n\nexport default defineComponent({\n  props: {\n    headingText: {\n      type: String,\n      default: 'default heading text',\n    },\n    bodyText: {\n      type: String,\n      default: 'default body text',\n    },\n  },\n  setup() {\n    const show = ref(false);\n\n    const toggleShow = () => {\n      show.value = !show.value;\n    };\n\n    return { show, toggleShow };\n  },\n});\n</script>\n\n<style lang=\"scss\">\n.sample-component-container {\n  padding: 40px;\n  background-color: rgba($color: green, $alpha: 0.5);\n  color: white;\n  font-size: 70px;\n  font-weight: 700;\n}\n</style>\n", ".sample-component-container {\n  padding: 40px;\n  background-color: rgba(0, 128, 0, 0.5);\n  color: white;\n  font-size: 70px;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=SampleComponent.vue.map */"]
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

export { __vue_component__$3 as Box, __vue_component__$2 as IconButton, __vue_component__ as SampleComponent, __vue_component__$1 as Toggle };
//# sourceMappingURL=index.esm.js.map
