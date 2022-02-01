import { Ref } from '@vue/composition-api';

export default function useInjectStyle<T extends HTMLElement = HTMLElement>(
  el: Ref<T>,
  style: any,
  className?: string
): void {
  if (!className) {
    //TODO: you can do better naming
    className = 'el-gen-class-' + Math.floor(Math.random() * 100000);
  }
  const cssObj = Object.entries(style)
    .map(([key, value]) => `${key}:${value};`)
    .join('\n');
  const css = `.${className} { ${cssObj} } `;

  const headElement = document.head || document.getElementsByTagName('head')[0];
  const styleElement = document.createElement('style');

  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(css));
  headElement.appendChild(styleElement);
  el.value.classList.add(className);
}