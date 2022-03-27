import { ref, Ref } from '@vue/composition-api';

export interface UseDisclosureType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  closeOnBlur?: boolean;
  openOnHover?: boolean;
}

export interface UseDisclosureProps {
  closeOnBlur?: boolean;
  openOnHover?: boolean;
}

export function useDisclosure(props: UseDisclosureProps): UseDisclosureType {
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
