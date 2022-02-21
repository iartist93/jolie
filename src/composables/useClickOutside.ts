import { onMounted, onBeforeUnmount, Ref, ref } from '@vue/composition-api';

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
  handler: (event: AnyEvent) => void
): void {
  const root = ref<any>();

  const isDescendent = (root: T, target: HTMLElement) => {
    let targetParentNode = target.parentNode;

    while (targetParentNode) {
      if (root.contains(targetParentNode)) {
        return true;
      } else {
        targetParentNode = (targetParentNode as HTMLElement).parentNode;
      }
    }

    return false;
  };

  const listener = (event: AnyEvent) => {
    const isChild = isDescendent(root.value, event.target as HTMLElement);

    if (!isChild && !isDatePickerChild(event.target as HTMLElement)) {
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
