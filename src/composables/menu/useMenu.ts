import { provide } from '@vue/composition-api';

import {
  UseDisclosureType,
  useDisclosure,
  UseDisclosureProps,
} from '../useDisclosure';

export function useMenu(props: UseDisclosureProps): UseDisclosureType {
  const menuContext = useDisclosure(props);
  provide('menuContext', menuContext);

  return menuContext;
}
