<template>
  <label
    ref="rootRef"
    class="jolie-multiple-label-select-item"
    :class="{ show: isOpen }"
    :data-selected="isSelected ? 1 : 0"
    :data-value="JSON.stringify(value)"
    @click="onItemClicked"
  >
    <img
      v-if="isSelected"
      src="@/assets/icons/check-mark-2.svg"
      alt="checkmark"
      class="checkmark-icon"
    />

    <span
      :style="{
        '--menu-item-text-align': alignValue,
      }"
    >
      <slot></slot>
    </span>
    <img
      v-if="endIcon"
      :src="endIcon"
      alt="end-icon"
      class="item-icon end-icon"
      :style="{ width: maxIconSize }"
    />
  </label>
</template>

<script lang="ts">
import _ from 'lodash';
import { computed, inject, ref, Ref } from '@vue/composition-api';
import { useInjectStyle } from '@/composables/useInjectStyle';
import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import {
  UseMenuMultipleSelectType,
  menuOptionObjectType,
  menuOptionType,
} from '@/composables/select/useMenuMultipleSelect';

export default {
  props: {
    value: {
      type: [Object, String, Number, Array],
    },
    endIcon: {
      type: String,
    },
    iconSize: {
      type: [Number, String],
      default: 25,
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    color: {
      type: String,
      default: 'black',
    },
    hoverColor: {
      type: String,
      default: '#e2e2cb',
    },
    pl: {
      type: Number,
      default: 0,
    },
    pr: {
      type: Number,
      default: 0,
    },
    px: {
      type: Number,
      default: 0,
    },
    p: {
      type: Number,
      default: 0,
    },
    h: {
      type: Number,
      default: 40,
    },
    textAlign: {
      type: String,
      default: 'start', // 'start', 'end', 'center'
    },
  },
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement | null>(null);
    const alignValue = ref('flex-start');

    const menuContext = inject('menuContext') as UseMenuMultipleSelectType;
    const { isOpen, onAddToSelection, onRemoveFromSelection, selectedList } =
      menuContext;

    const isSelected = computed(() => {
      console.log(selectedList.value, typeof props.value);

      return selectedList.value === null
        ? false
        : typeof props.value === 'string'
        ? _.some(selectedList.value as string[], props.value as string)
        : typeof props.value === 'object'
        ? _.some(
            selectedList.value as menuOptionObjectType[],
            props.value as menuOptionObjectType,
          )
        : false;
    });

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType,
    );

    elementStyle.value['--jolie-multiple-label-select-item-hover-color'] =
      props.hoverColor;
    elementStyle.value['--jolie-transition-property-background'] =
      'background-color, background-image, background-position';

    useInjectStyle(rootRef as Ref<HTMLElement>, elementStyle);

    const onItemClicked = (event: Event) => {
      //   onAddToSel   ection(props.value as menuOptionType);

      console.log(
        'on item clicked ',
        isSelected.value,
        event.target,
        props.value as menuOptionType,
      );
      if (isSelected.value) {
        onRemoveFromSelection(props.value as menuOptionType);
      } else {
        onAddToSelection(props.value as menuOptionType);
      }
    };

    const maxIconSize =
      typeof props.iconSize === 'number'
        ? props.iconSize + 'px'
        : props.iconSize;

    alignValue.value =
      props.textAlign === 'center'
        ? 'center'
        : props.textAlign === 'end'
        ? 'flex-end'
        : 'flex-start';

    return {
      onItemClicked,
      maxIconSize,
      rootRef,
      isOpen,
      alignValue,
      isSelected,
    };
  },
};
</script>

<style lang="scss" scoped>
.jolie-multiple-label-select-item {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 50ms cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    background-color: var(--jolie-multiple-label-select-item-hover-color);
  }

  span {
    flex: 1;
    justify-content: var(--menu-item-text-align);
  }
  .item-icon {
    &.end-icon {
      margin-left: 16px;
    }
  }

  .checkmark-icon {
    width: 20px;
    margin-right: 20px;
  }
}
</style>
