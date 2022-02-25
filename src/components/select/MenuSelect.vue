<template>
  <div ref="rootRef" class="jolie-menu-select">
    <menu-button>
      <button class="menu-select">
        <span>Selected Option {{ isOpen }}</span>
        <img
          src="@/assets/icons/arrow-down.svg"
          alt="arrow-down"
          class="arrow-down"
        />
      </button>
    </menu-button>
    <menu-list>
      <slot></slot>
    </menu-list>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, provide, ref } from '@vue/composition-api';
import { useStyledSystem } from '@/composables/useStyledSystem';
import { useInjectStyle } from '@/composables/useInjectStyle';
import { useMenuSelect } from '@/composables/select/useMenuSelect';
import MenuList from '../menu/MenuList.vue';
import MenuButton from '../menu/MenuButton.vue';

export default {
  components: { MenuList, MenuButton },
  props: {
    closeOnBlur: {
      type: Boolean,
      default: true,
    },
    openOnHover: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
      default: 500,
    },
  },
  setup(props) {
    const rootRef = ref(null);
    let elementStyle = ref({});

    const menuContext = useMenuSelect(props);
    provide('menuContext', menuContext);
    const { onOpen, onClose, isOpen } = menuContext;

    elementStyle = useStyledSystem(props);

    useInjectStyle(rootRef, elementStyle.value);

    onMounted(() => {
      if (props.openOnHover) {
        rootRef.value.addEventListener('mouseover', onOpen);
        rootRef.value.addEventListener('mouseleave', onClose);
      }
    });

    onBeforeUnmount(() => {
      if (props.openOnHover) {
        rootRef.value.removeEventListener('mouseover', onOpen);
        rootRef.value.removeEventListener('mouseleave', onClose);
      }
    });

    return { rootRef, isOpen };
  },
};
</script>

<style lang="scss" scoped>
.jolie-menu-select {
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.menu-select {
  display: flex;
  align-items: center;
  background-color: white;
  color: #a5a5a5;
  padding: 15px 20px;
  border-radius: 6px;
  border: 1px solid #e1dcdc;

  img {
    margin-left: 30px;
  }
}
</style>
