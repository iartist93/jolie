import { inject, Ref } from '@vue/composition-api';

import { UseMenuType } from '@/composables/menu/useMenu';
import { useClickOutside } from '../useClickOutside';

interface UseMenuListType {
  isOpen: Ref<boolean>;
  onClose(): void;
  openOnHover?: boolean;
}

export function useMenuList(
  el: Ref<HTMLElement>,
  toggleEl: Ref<HTMLElement>
): UseMenuListType {
  const menuContext = inject('menuContext') as UseMenuType;
  const { isOpen, onClose, closeOnBlur, openOnHover } = menuContext;

  useClickOutside(
    el,
    () => {
      if (closeOnBlur) {
        console.log('😀😀😀😀 Close on Blur');
        onClose();
      }
    },
    toggleEl
  );

  return { isOpen, onClose, openOnHover };
}
