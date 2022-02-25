import { ref, Ref } from '@vue/composition-api';

export interface UseMenuSelectType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  closeOnBlur?: boolean;
  openOnHover?: boolean;
  onSelect(value: any): void;
  selected: Ref<any>;
}

interface option {
  text: string;
  value: any;
}

type optionsType = string[] | option[];

export interface UseMenuSelectProps {
  closeOnBlur?: boolean;
  openOnHover?: boolean;
  options: optionsType[];
}

export function useMenuSelect(props: UseMenuSelectProps): UseMenuSelectType {
  const { closeOnBlur, openOnHover } = props;

  const isOpen = ref(false);
  const selected = ref<any>(null);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  const onSelect = (value: unknown) => {
    selected.value = value;
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    closeOnBlur,
    openOnHover,
    onSelect,
    selected,
  };
}
