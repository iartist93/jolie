import { ref, watch } from '@vue/composition-api';
import Vue from 'vue';

export interface useStyledSystemType {
  // colors
  color: string;
  bg: string;
  backgroundColor: string;

  // background
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;

  // border
  border: string | number;
  borderTop: string | number;
  borderRight: string | number;
  borderBottom: string | number;
  borderLeft: string | number;
  borderWidth: number | string;
  borderRadius: string | number;
  borderColor: string;

  // position
  position: string;
  top: string | number;
  right: string | number;
  bottom: string | number;
  left: string | number;

  // layout
  w: string | number;
  h: string | number;
  width: string | number;
  height: string | number;
  maxW: string | number;
  maxH: string | number;
  overflow: string;
  overflowX: string;
  overflowY: string;
  display: string;

  // spacing
  p: number;
  px: number;
  py: number;
  pt: number;
  pr: number;
  pb: number;
  pl: number;
  m: number;
  mx: number;
  my: number;
  mt: number;
  mr: number;
  mb: number;
  ml: number;

  // typography
  fontSize: number;
  fontWeight: string | number;
  fontFamily: string;
  textAlign: string;
  letterSpacing: string;
  lineHeight: string;

  // flexbox
  alignItems: string;
  justifyContent: string;
  alignContent: string;
  flexWrap: string;
  flexBasis: string | number;
  flexDirection: string;
  flex: string;
  justifySelf: string;
  alignSelf: string;
  order: number;
}

function stringOrNumber(attribute: unknown) {
  return typeof attribute === 'string' ? attribute : attribute + 'px';
}

export function useStyledSystem(props: useStyledSystemType) {
  // const props = propsRef as useStyledSystemType;

  const style = ref<Record<string, unknown>>({});

  const computeStyle = () => {
    // colors
    if (props.color) Vue.set(style.value, 'color', props.color);
    if (props.bg) Vue.set(style.value, 'background-color', props.bg);
    if (props.backgroundColor)
      Vue.set(style.value, 'background-color', props.backgroundColor);

    // background
    if (props.backgroundImage)
      Vue.set(style.value, 'background-image', props.backgroundImage);
    if (props.backgroundSize)
      Vue.set(style.value, 'background-size', props.backgroundSize);
    if (props.backgroundPosition)
      Vue.set(style.value, 'background-position', props.backgroundPosition);
    if (props.backgroundRepeat)
      Vue.set(style.value, 'background-repeat', props.backgroundRepeat);

    // border
    if (props.border)
      Vue.set(style.value, 'border', stringOrNumber(props.border));
    if (props.borderTop)
      Vue.set(style.value, 'border-top', stringOrNumber(props.borderTop));
    if (props.borderRight)
      Vue.set(style.value, 'border-right', stringOrNumber(props.borderRight));
    if (props.borderBottom)
      Vue.set(style.value, 'border-bottom', stringOrNumber(props.borderBottom));
    if (props.borderLeft)
      Vue.set(style.value, 'border-left', stringOrNumber(props.borderLeft));
    if (props.borderWidth)
      Vue.set(style.value, 'border-width', stringOrNumber(props.borderWidth));
    if (props.borderRadius)
      Vue.set(style.value, 'border-radius', stringOrNumber(props.borderRadius));
    if (props.borderColor)
      Vue.set(style.value, 'border-color', props.borderColor);

    // position
    if (props.position) Vue.set(style.value, 'position', props.position);
    if (props.top) Vue.set(style.value, 'top', stringOrNumber(props.top));
    if (props.right) Vue.set(style.value, 'right', stringOrNumber(props.right));
    if (props.left) Vue.set(style.value, 'left', stringOrNumber(props.left));
    if (props.bottom)
      Vue.set(style.value, 'bottom', stringOrNumber(props.bottom));

    // layout
    if (props.width) Vue.set(style.value, 'width', stringOrNumber(props.width));
    if (props.height)
      Vue.set(style.value, 'height', stringOrNumber(props.height));
    if (props.w) Vue.set(style.value, 'width', stringOrNumber(props.w));
    if (props.h) Vue.set(style.value, 'height', stringOrNumber(props.h));
    if (props.maxW)
      Vue.set(style.value, 'max-width', stringOrNumber(props.maxW));
    if (props.maxH)
      Vue.set(style.value, 'max-height', stringOrNumber(props.maxH));
    if (props.overflow) Vue.set(style.value, 'overflow', props.overflow);
    if (props.overflowX) Vue.set(style.value, 'overflow-x', props.overflowX);
    if (props.overflowY) Vue.set(style.value, 'overflow-y', props.overflowY);
    if (props.display) Vue.set(style.value, 'display', props.display);

    // spacing
    if (props.p) Vue.set(style.value, 'padding', stringOrNumber(props.p));
    if (props.px) {
      Vue.set(style.value, 'padding-left', stringOrNumber(props.px));
      Vue.set(style.value, 'padding-right', stringOrNumber(props.px));
    }
    if (props.py) {
      Vue.set(style.value, 'padding-top', stringOrNumber(props.py));
      Vue.set(style.value, 'padding-bottom', stringOrNumber(props.py));
    }
    if (props.pr)
      Vue.set(style.value, 'padding-right', stringOrNumber(props.pr));
    if (props.pl)
      Vue.set(style.value, 'padding-left', stringOrNumber(props.pl));
    if (props.pt) Vue.set(style.value, 'padding-top', stringOrNumber(props.pt));
    if (props.pb)
      Vue.set(style.value, 'padding-bottom', stringOrNumber(props.pb));

    if (props.m) Vue.set(style.value, 'margin', stringOrNumber(props.m));
    if (props.mx) {
      Vue.set(style.value, 'margin-left', stringOrNumber(props.mx));
      Vue.set(style.value, 'margin-right', stringOrNumber(props.mx));
    }
    if (props.my) {
      Vue.set(style.value, 'margin-top', stringOrNumber(props.my));
      Vue.set(style.value, 'margin-bottom', stringOrNumber(props.my));
    }
    if (props.mr)
      Vue.set(style.value, 'margin-right', stringOrNumber(props.mr));
    if (props.ml) Vue.set(style.value, 'margin-left', stringOrNumber(props.ml));
    if (props.mt) Vue.set(style.value, 'margin-top', stringOrNumber(props.mt));
    if (props.mb)
      Vue.set(style.value, 'margin-bottom', stringOrNumber(props.mb));

    //typography
    if (props.fontSize)
      Vue.set(style.value, 'font-size', stringOrNumber(props.fontSize));
    if (props.fontWeight)
      Vue.set(style.value, 'font-weight', stringOrNumber(props.fontWeight));
    if (props.fontFamily) Vue.set(style.value, 'font-family', props.fontFamily);
    if (props.textAlign) Vue.set(style.value, 'text-align', props.textAlign);
    if (props.letterSpacing)
      Vue.set(style.value, 'letter-spacing', props.letterSpacing);
    if (props.lineHeight) Vue.set(style.value, 'line-height', props.lineHeight);

    // flexbox
    if (props.alignItems) Vue.set(style.value, 'align-items', props.alignItems);
    if (props.justifyContent)
      Vue.set(style.value, 'justify-content', props.justifyContent);
    if (props.alignContent)
      Vue.set(style.value, 'align-content', props.alignContent);
    if (props.flexWrap) Vue.set(style.value, 'flex-wrap', props.flexWrap);
    if (props.flexBasis)
      Vue.set(style.value, 'flex-basis', stringOrNumber(props.flexBasis));
    if (props.flexDirection)
      Vue.set(style.value, 'flex-direction', props.flexDirection);
    if (props.flex) Vue.set(style.value, 'flex', props.flex);
    if (props.justifySelf)
      Vue.set(style.value, 'justify-self', props.justifySelf);
    if (props.alignSelf) Vue.set(style.value, 'align-self', props.alignSelf);
    if (props.order) Vue.set(style.value, 'order', props.order);
  };

  watch(
    style.value,
    (newStyle) => {
      console.log('😂 =======> watching style ', newStyle);
    },
    {
      immediate: true,
    }
  );

  watch(
    props,
    () => {
      computeStyle();
      console.log('🥌 => use styled system, ', style.value);
    },
    { immediate: true }
  );

  return style;
}
