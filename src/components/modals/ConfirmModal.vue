<template>
  <modal-base
    :show="show"
    :showHeader="false"
    :width="600"
    @blur="onBlur"
    @close="onBlur"
  >
    <template #body>
      <div class="row">
        <h2>Please Confirm Deleting this item!</h2>
        <icon-button class="action-button" :width="150" @click="onConfirm"
          >Confirm</icon-button
        >
        <icon-button class="action-button" :width="150" @click="onCancel"
          >Cancel</icon-button
        >
      </div>
    </template>
  </modal-base>
</template>

<script>
import ModalBase from './ModalBase.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  components: { ModalBase, IconButton },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onBlur() {
      this.$emit('blur');
    },
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.action-button {
  margin: 0 20px;
}
</style>
