import { ref, Ref } from '@vue/composition-api';

export interface UseMenuType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  closeOnBlur?: boolean;
  openOnHover?: boolean;
}

export interface UseMenuProps {
  closeOnBlur?: boolean;
  openOnHover?: boolean;
}

export function useMenu(props: UseMenuProps): UseMenuType {
  const { closeOnBlur, openOnHover } = props;

  const isOpen = ref(false);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    closeOnBlur,
    openOnHover,
  };
}
