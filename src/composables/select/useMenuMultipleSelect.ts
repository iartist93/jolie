import { ref, Ref } from '@vue/composition-api';
import _ from 'lodash';

/**
 * 
 * If the menu option data is an object
 * instead of a string or a number, it should have a
 * `text` field as required.
 * 
 * There may be any other optional field(s) as needed.
 *
 * ### Example
 * ```
    {
       text : "option 1",
       icon : "../assets/icon.svg"
    }
 * ```
 */
export interface menuOptionObjectType {
  text: string;
  [x: string]: unknown;
}

export type menuOptionType = number | string | menuOptionObjectType;

export interface UseMenuMultipleSelectType {
  isOpen: Ref<boolean>;
  onOpen(): void;
  onClose(): void;
  onToggle(): void;
  closeOnBlur?: boolean;
  openOnHover?: boolean;
  onSelectionChange(value: menuOptionType[]): void;
  onAddToSelection(value: menuOptionType): void;
  onRemoveFromSelection(value: menuOptionType): void;
  selectedList: Ref<menuOptionType[] | undefined>;
}

export interface UseMenuSelectProps {
  closeOnBlur?: boolean;
  openOnHover?: boolean;
  value?: menuOptionType[];
}

export function useMenuSelect(
  props: UseMenuSelectProps
): UseMenuMultipleSelectType {
  const { closeOnBlur, openOnHover } = props;

  const isOpen = ref(false);
  const selectedList = ref<menuOptionType[] | undefined>(props.value);

  const onOpen = () => {
    isOpen.value = true;
  };

  const onClose = () => {
    isOpen.value = false;
  };

  const onToggle = () => {
    isOpen.value = !isOpen.value;
  };

  const onSelectionChange = (value: menuOptionType[]) => {
    selectedList.value = value;
  };

  const onAddToSelection = (value: menuOptionType) => {
    selectedList.value?.push(value);
  };

  const onRemoveFromSelection = (value: menuOptionType) => {
    selectedList.value = selectedList.value?.filter(
      (option) => !_.isEqual(option, value)
    );
  };

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    closeOnBlur,
    openOnHover,
    onSelectionChange,
    onAddToSelection,
    onRemoveFromSelection,
    selectedList,
  };
}
