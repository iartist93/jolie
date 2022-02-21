import { inject, Ref } from '@vue/composition-api';

import { UseMenuType } from '@/composables/menu/useMenu';
import { useClickOutside } from '../useClickOutside';

export function useMenuList(el: Ref<HTMLElement>) {
  const menuContext = inject('menuContext') as UseMenuType;
  const { isOpen, onClose, closeOnBlur } = menuContext;

  useClickOutside(el, () => {
    if (closeOnBlur) {
      onClose();
    }
  });

  return { isOpen, onClose };
}
