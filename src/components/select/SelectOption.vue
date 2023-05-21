<template>
  <div
    ref="rootRef"
    class="jolie-select-option"
    :class="{ show: isOpen }"
    @click="onItemClicked"
    :data-selected="isSelected ? 1 : 0"
    :data-value="JSON.stringify(value)"
  >
    <img
      v-if="startIcon"
      :src="startIcon"
      alt="start-icon"
      class="icon start-icon"
      :style="{ width: maxIconSize }"
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
      class="icon end-icon"
      :style="{ width: maxIconSize }"
    />
  </div>
</template>

<script lang="ts">
import { computed, inject, ref, Ref } from '@vue/composition-api';
import { useInjectStyle } from '@/composables/useInjectStyle';
import {
  useStyledSystem,
  useStyledSystemType,
} from '@/composables/useStyledSystem';
import {
  UseMenuSelectType,
  optionValueObjectType,
  optionValueType,
} from '@/composables/select/useMenuSelect';

export default {
  props: {
    value: {
      type: [Object, String, Number, Array],
    },
    startIcon: {
      type: String,
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

    const menuContext = inject('menuContext') as UseMenuSelectType;
    const { onClose, isOpen, onSelect, selected, closeOnSelect } = menuContext;

    const isSelected = computed(() => {
      return selected.value === null
        ? false
        : typeof selected.value === 'string'
        ? (selected.value as string) === props.value
        : typeof selected.value === 'object'
        ? (selected.value as optionValueObjectType).text ===
          (props.value as optionValueObjectType).text
        : false;
    });

    const elementStyle = useStyledSystem(
      props as unknown as useStyledSystemType,
    );

    elementStyle.value['--jolie-select-option-hover-color'] = props.hoverColor;
    elementStyle.value['--jolie-transition-property-background'] =
      'background-color, background-image, background-position';

    useInjectStyle(rootRef as Ref<HTMLElement>, elementStyle);

    const onItemClicked = () => {
      onSelect(props.value as optionValueType);

      if (closeOnSelect) {
        onClose();
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
.jolie-select-option {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 50ms cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    background-color: var(--jolie-select-option-hover-color);
  }

  span {
    flex: 1;
    justify-content: var(--menu-item-text-align);
  }
}

.icon {
  &.start-icon {
    margin-right: 16px;
  }

  &.end-icon {
    margin-left: 16px;
  }
}
</style>
