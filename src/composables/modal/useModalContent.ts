import { inject, Ref } from '@vue/composition-api';

import { UseDisclosureType } from '@/composables/useDisclosure';
import { useClickOutside } from '../useClickOutside';

interface UseModalContent {
  isOpen: Ref<boolean>;
  onClose(): void;
  openOnHover?: boolean;
}

export function useModalContent(
  el: Ref<HTMLElement>,
  closeHanlder: () => void
): UseModalContent {
  const menuContext = inject('menuContext') as UseDisclosureType;
  const { isOpen, onClose, closeOnBlur, openOnHover } = menuContext;

  useClickOutside(el, () => {
    if (closeOnBlur && isOpen.value) {
      closeHanlder();
    }
  });

  return { isOpen, onClose, openOnHover };
}
