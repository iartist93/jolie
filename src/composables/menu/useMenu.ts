import { ref, Ref } from '@vue/composition-api';

export interface UseMenuType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
}

export interface UseMenuProps {
  blurOnClose: boolean;
}

// TODO: setup to take arguments
export function useMenu(props?: UseMenuProps) {
  const isOpen = ref(false);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    console.log('on toggle');
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
