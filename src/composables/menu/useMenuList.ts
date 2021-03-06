import { inject, Ref } from '@vue/composition-api';

import { UseDisclosureType } from '@/composables/useDisclosure';
import { useClickOutside } from '../useClickOutside';

interface UseMenuListType {
  isOpen: Ref<boolean>;
  onClose(): void;
  openOnHover?: boolean;
}

export function useMenuList(
  el: Ref<HTMLElement>,
  toggleEl?: Ref<HTMLElement>
): UseMenuListType {
  const menuContext = inject('menuContext') as UseDisclosureType;
  const { isOpen, onClose, closeOnBlur, openOnHover } = menuContext;

  useClickOutside(
    el,
    () => {
      if (closeOnBlur) {
        onClose();
      }
    },
    toggleEl
  );

  return { isOpen, onClose, openOnHover };
}
