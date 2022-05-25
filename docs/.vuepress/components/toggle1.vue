<template>
  <wrapper>
    <div class="container">
      <toggle v-model="isOpen1" />

      <toggle
        v-model="isOpen2"
        class="toggle-btn"
        :color="'#423194'"
        :offColor="'#B9E4F4'"
        :sliderColor="'white'"
        :sliderOffColor="'#FEF9B8'"
      />

      <toggle
        v-model="isOpen3"
        class="toggle-btn"
        :color="'#46B781'"
        :offColor="'transperent'"
        :sliderColor="'white'"
        :sliderOffColor="'#46B781'"
        :borderColor="'#46B781'"
        :showBorder="true"
      />

      <toggle
        v-model="isOpen4"
        class="toggle-btn"
        :color="'#E68907'"
        :offColor="'#F0F0F0'"
        :sliderColor="'#333333'"
        :sliderSize="39"
        :opened="true"
        :width="80"
      />

      <toggle
        :value="true"
        :disabled="true"
        class="toggle-btn"
        :color="'#E68907'"
        :offColor="'#F0F0F0'"
        :sliderColor="'#333333'"
        :sliderSize="39"
        :opened="true"
        :width="80"
      />
    </div>
  </wrapper>
</template>

<script>
import Toggle from '@/components/Toggle.vue';
import Wrapper from '@/components/wrapper.vue';

export default {
  components: { Toggle, Wrapper },
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.toggle-btn {
  margin-top: 20px;
}
</style>
