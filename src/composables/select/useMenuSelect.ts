import { ref, Ref } from '@vue/composition-api';

export interface optionValueObjectType {
  text: string;
  [x: string]: unknown;
}

export type optionValueType =
  | number
  | string
  | optionValueObjectType
  | undefined;

export interface UseMenuSelectType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  openOnHover?: boolean;
  onSelect(value: optionValueType): void;
  selected: Ref<optionValueType>;
}

export interface UseMenuSelectProps {
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  openOnHover?: boolean;
  value?: optionValueType;
}

export function useMenuSelect(props: UseMenuSelectProps): UseMenuSelectType {
  const { closeOnSelect, closeOnBlur, openOnHover } = props;

  const isOpen = ref(false);
  const selected = ref<optionValueType>(props.value);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  const onSelect = (value: optionValueType) => {
    selected.value = value;
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    closeOnBlur,
    closeOnSelect,
    openOnHover,
    onSelect,
    selected,
  };
}
