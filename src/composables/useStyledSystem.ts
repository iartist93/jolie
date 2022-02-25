import { ref, watch } from '@vue/composition-api';

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

  const style = ref({});

  const computeStyle = () => {
    // colors
    if (props.color) style.value['color'] = props.color;
    if (props.bg) style.value['background-color'] = props.bg;
    if (props.backgroundColor)
      style.value['background-color'] = props.backgroundColor;

    // background
    if (props.backgroundImage)
      style.value['background-image'] = props.backgroundImage;
    if (props.backgroundSize)
      style.value['background-size'] = props.backgroundSize;
    if (props.backgroundPosition)
      style.value['background-position'] = props.backgroundPosition;
    if (props.backgroundRepeat)
      style.value['background-repeat'] = props.backgroundRepeat;

    // border
    if (props.border) style.value['border'] = stringOrNumber(props.border);
    if (props.borderTop)
      style.value['border-top'] = stringOrNumber(props.borderTop);
    if (props.borderRight)
      style.value['border-right'] = stringOrNumber(props.borderRight);
    if (props.borderBottom)
      style.value['border-bottom'] = stringOrNumber(props.borderBottom);
    if (props.borderLeft)
      style.value['border-left'] = stringOrNumber(props.borderLeft);
    if (props.borderWidth)
      style.value['border-width'] = stringOrNumber(props.borderWidth);
    if (props.borderRadius)
      style.value['border-radius'] = stringOrNumber(props.borderRadius);
    if (props.borderColor) style.value['border-color'] = props.borderColor;

    // position
    if (props.position) style.value['position'] = props.position;
    if (props.top) style.value['top'] = stringOrNumber(props.top);
    if (props.right) style.value['right'] = stringOrNumber(props.right);
    if (props.left) style.value['left'] = stringOrNumber(props.left);
    if (props.bottom) style.value['bottom'] = stringOrNumber(props.bottom);

    // layout
    if (props.width) style.value['width'] = stringOrNumber(props.width);
    if (props.height) style.value['height'] = stringOrNumber(props.height);
    if (props.w) style.value['width'] = stringOrNumber(props.w);
    if (props.h) style.value['height'] = stringOrNumber(props.h);
    if (props.maxW) style.value['max-width'] = stringOrNumber(props.maxW);
    if (props.maxH) style.value['max-height'] = stringOrNumber(props.maxH);
    if (props.overflow) style.value['overflow'] = props.overflow;
    if (props.overflowX) style.value['overflow-x'] = props.overflowX;
    if (props.overflowY) style.value['overflow-y'] = props.overflowY;
    if (props.display) style.value['display'] = props.display;

    // spacing
    if (props.p) style.value['padding'] = stringOrNumber(props.p);
    if (props.px) {
      style.value['padding-left'] = stringOrNumber(props.px);
      style.value['padding-right'] = stringOrNumber(props.px);
    }
    if (props.py) {
      style.value['padding-top'] = stringOrNumber(props.py);
      style.value['padding-bottom'] = stringOrNumber(props.py);
    }
    if (props.pr) style.value['padding-right'] = stringOrNumber(props.pr);
    if (props.pl) style.value['padding-left'] = stringOrNumber(props.pl);
    if (props.pt) style.value['padding-top'] = stringOrNumber(props.pt);
    if (props.pb) style.value['padding-bottom'] = stringOrNumber(props.pb);

    if (props.m) style.value['margin'] = stringOrNumber(props.m);
    if (props.mx) {
      style.value['margin-left'] = stringOrNumber(props.mx);
      style.value['margin-right'] = stringOrNumber(props.mx);
    }
    if (props.my) {
      style.value['margin-top'] = stringOrNumber(props.my);
      style.value['margin-bottom'] = stringOrNumber(props.my);
    }
    if (props.mr) style.value['margin-right'] = stringOrNumber(props.mr);
    if (props.ml) style.value['margin-left'] = stringOrNumber(props.ml);
    if (props.mt) style.value['margin-top'] = stringOrNumber(props.mt);
    if (props.mb) style.value['margin-bottom'] = stringOrNumber(props.mb);

    //typography
    if (props.fontSize)
      style.value['font-size'] = stringOrNumber(props.fontSize);
    if (props.fontWeight)
      style.value['font-weight'] = stringOrNumber(props.fontWeight);
    if (props.fontFamily) style.value['font-family'] = props.fontFamily;
    if (props.textAlign) style.value['text-align'] = props.textAlign;
    if (props.letterSpacing)
      style.value['letter-spacing'] = props.letterSpacing;
    if (props.lineHeight) style.value['line-height'] = props.lineHeight;

    // flexbox
    if (props.alignItems) style.value['align-items'] = props.alignItems;
    if (props.justifyContent)
      style.value['justify-content'] = props.justifyContent;
    if (props.alignContent) style.value['align-content'] = props.alignContent;
    if (props.flexWrap) style.value['flex-wrap'] = props.flexWrap;
    if (props.flexBasis)
      style.value['flex-basis'] = stringOrNumber(props.flexBasis);
    if (props.flexDirection)
      style.value['flex-direction'] = props.flexDirection;
    if (props.flex) style.value['flex'] = props.flex;
    if (props.justifySelf) style.value['justify-self'] = props.justifySelf;
    if (props.alignSelf) style.value['align-self'] = props.alignSelf;
    if (props.order) style.value['order'] = props.order;
  };

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
