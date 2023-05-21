import { ref, Ref, watch } from '@vue/composition-api';

export interface UseDisclosureType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  openOnHover?: boolean;
}

export interface UseDisclosureProps {
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  openOnHover?: boolean;
  isOpen?: boolean;
}

export function useDisclosure(props: UseDisclosureProps): UseDisclosureType {
  const { closeOnBlur, openOnHover, closeOnSelect } = props;

  const isOpen = ref(props.isOpen as boolean);

  watch(
    () => props.isOpen,
    (newIsOpen) => {
      isOpen.value = newIsOpen as boolean;
    },
  );

  const onOpen = () => {
    if (props.isOpen !== undefined) return;
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    if (props.isOpen !== undefined) return;
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    closeOnBlur,
    closeOnSelect,
    openOnHover,
  };
}
