import { inject } from '@vue/composition-api';

import { UseMenuType } from '@/composables/menu/useMenu';

export function useMenuButton() {
  const menuContext = inject('menuContext') as UseMenuType;
  const { onToggle } = menuContext;
  return { onToggle };
}
