import { onMounted, onUpdated, ref, Ref } from '@vue/composition-api';

function insertClassAtFirst<T extends HTMLElement = HTMLElement>(
  el: Ref<T>,
  originalClassList: string,
  className: string
) {
  // el.value.classList.remove(className);

  // const originalArray = originalClassList.split(' ');
  // const currentArray = el.value.classList.value.split(' ');
  // const newClasses = currentArray.filter((a) => !originalArray.includes(a));

  // el.value.classList.value = '';
  // newClasses.forEach((c) => el.value.classList.add(c));
  // originalArray.forEach((c) => el.value.classList.add(c));

  el.value.classList.add(className);
}

export default function useInjectStyle<T extends HTMLElement = HTMLElement>(
  el: Ref<T>,
  style: any
): void {
  const className = ref('css-');
  const originalClassList = ref('');
  const styleElement = ref<null | HTMLElement>(null);

  onMounted(() => {
    originalClassList.value = el.value.classList.value;

    const classId = Math.floor(Math.random() * 100000);
    className.value = 'css-' + classId;

    const cssObj = Object.entries(style)
      .map(([key, value]) => `${key}:${value};`)
      .join('\n');

    const css = `.${className.value} { ${cssObj} } `;

    const headElement =
      document.head || document.getElementsByTagName('head')[0];

    // get the first style element
    const firstStyleElement = headElement.getElementsByTagName('style')[0];

    styleElement.value = document.createElement('style');

    // styleElement.value.type = 'text/css';
    styleElement.value.dataset.jolie = `css ${classId}`;

    styleElement.value.appendChild(document.createTextNode(css));
    headElement.insertBefore(styleElement.value, firstStyleElement);

    insertClassAtFirst(el, originalClassList.value, className.value);
  });
  onUpdated(() => {
    insertClassAtFirst(el, originalClassList.value, className.value);
  });
}
