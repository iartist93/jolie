import {
  inject,
  Ref,
  ref,
  watch,
  onMounted,
  onUnmounted,
  nextTick,
} from '@vue/composition-api';

import { UseDisclosureType } from '@/composables/useDisclosure';
import { useClickOutside } from '../useClickOutside';
import { menuOptionType } from '../select/useMenuMultipleSelect';

interface UseMenuListType {
  isOpen: Ref<boolean>;
  onClose(): void;
  openOnHover?: boolean;
  currentFocusIndex?: Ref<number | null>;
  currentFocusItem?: Ref<menuOptionType | null>;
  onFocusChange(ev: KeyboardEvent): void;
}

export interface UseMenuListProps {
  list: menuOptionType[];
}

export function useMenuList(
  el: Ref<HTMLElement>,
  props: UseMenuListProps,
  toggleEl?: Ref<HTMLElement>,
): UseMenuListType {
  const menuContext = inject('menuContext') as UseDisclosureType;
  const { isOpen, onClose, closeOnBlur, openOnHover } = menuContext;

  const currentFocusIndex: Ref<number | null> = ref(null);
  const currentFocusItem: Ref<menuOptionType | null> = ref(null);

  const listItemClass = 'jolie-menu-list-item';
  const focusClass = 'focus';

  const updateFocuedItem = () => {
    const listItems = Array.from(
      el.value.getElementsByClassName(listItemClass),
    );

    for (const item of listItems) {
      item.classList.remove(focusClass);
    }

    if (currentFocusIndex.value === null) {
      currentFocusIndex.value = 0;
    }

    const currentElement = listItems[currentFocusIndex.value];

    if (currentElement instanceof HTMLElement) {
      const elementDataValue = currentElement.dataset.value;
      if (elementDataValue) {
        currentFocusItem.value = JSON.parse(elementDataValue);
      }

      currentElement.classList.add(focusClass);
    }
  };

  const onFocusChange = (ev: KeyboardEvent) => {
    ev.stopPropagation();

    if (!(ev.key === 'ArrowDown' || ev.key === 'ArrowUp')) {
      return;
    }

    if (currentFocusIndex.value === null) {
      currentFocusIndex.value = 0;
    } else if (ev.key === 'ArrowDown') {
      let newIndex = currentFocusIndex.value + 1;
      if (newIndex === props.list.length) {
        newIndex = 0;
      }
      currentFocusIndex.value = newIndex;
    } else if (ev.key === 'ArrowUp') {
      let newIndex = currentFocusIndex.value - 1;
      if (newIndex < 0) {
        newIndex = props.list.length - 1;
      }
      currentFocusIndex.value = newIndex;
    }

    nextTick(() => {
      updateFocuedItem();
    });
  };

  watch(isOpen, () => {
    currentFocusIndex.value = null;
    currentFocusItem.value = null;
  });

  watch(
    () => props.list,
    (newList) => {
      if (!(newList && newList.length)) return;

      nextTick(() => {
        currentFocusIndex.value = 0;
        updateFocuedItem();
      });
    },
  );

  useClickOutside(
    el,
    () => {
      if (closeOnBlur) {
        onClose();
      }
    },
    toggleEl,
  );

  onMounted(() => {
    document.addEventListener('keydown', onFocusChange);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', onFocusChange);
  });

  return {
    isOpen,
    onClose,
    openOnHover,
    currentFocusIndex,
    currentFocusItem,
    onFocusChange,
  };
}
