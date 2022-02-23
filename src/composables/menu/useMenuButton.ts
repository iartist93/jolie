import { inject } from '@vue/composition-api';
import { UseMenuType } from '@/composables/menu/useMenu';

export interface UseMenuButtonType {
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  openOnHover?: boolean;
}

export function useMenuButton(): UseMenuButtonType {
  const menuContext = inject('menuContext') as UseMenuType;
  const { onToggle, onOpen, onClose, openOnHover } = menuContext;
  return { onToggle, onOpen, onClose, openOnHover };
}
