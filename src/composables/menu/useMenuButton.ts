import { inject } from '@vue/composition-api';
import { UseDisclosureType } from '@/composables/useDisclosure';

export interface UseMenuButtonType {
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  openOnHover?: boolean;
}

export function useMenuButton(): UseMenuButtonType {
  const menuContext = inject('menuContext') as UseDisclosureType;
  const { onToggle, onOpen, onClose, openOnHover } = menuContext;
  return { onToggle, onOpen, onClose, openOnHover };
}
