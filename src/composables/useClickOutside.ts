import { onMounted, onBeforeUnmount, Ref, ref } from '@vue/composition-api';
import { useIsDescendent } from './useIsDescendent';

type AnyEvent = MouseEvent | TouchEvent;

function isDatePickerChild(node: ParentNode) {
  let parent: ParentNode | null = node;

  while (parent && (parent as HTMLElement).parentNode) {
    if ((parent as HTMLElement).classList.contains('mx-datepicker-main')) {
      return true;
    }
    parent = (parent as HTMLElement).parentNode;
  }
  return false;
}

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  el: Ref<T>,
  handler: (event: AnyEvent) => void,
  ignoreEl?: Ref<T>
): void {
  const root = ref<any>();

  const listener = (event: AnyEvent) => {
    const isChild = useIsDescendent(root.value, event.target as HTMLElement);

    const isIgnored =
      typeof ignoreEl === 'undefined' || ignoreEl === null
        ? false
        : useIsDescendent(
            (ignoreEl as Ref<HTMLElement>).value,
            event.target as HTMLElement
          );

    if (
      !isChild &&
      !isIgnored &&
      !isDatePickerChild(event.target as HTMLElement)
    ) {
      handler(event);
    }
  };

  onMounted(() => {
    root.value = el.value;
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', listener);
    document.removeEventListener('touchstart', listener);
  });
}
