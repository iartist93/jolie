import { inject } from '@vue/composition-api';

import { UseMenuType } from '@/composables/menu/useMenu';

export function useMenuList() {
  const menuContext = inject('menuContext') as UseMenuType;
  const { isOpen, onClose } = menuContext;

  return { isOpen, onClose };
}
