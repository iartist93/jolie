<template>
  <div class="page">
    <header>
      <h1>Demo Components</h1>
      <p>Please add any reusable component here</p>
    </header>

    <sample-component v-if="false" />

    <section v-if="true" class="section menu">
      <h1>Menu Component</h1>
      <menu-provider>
        <menu-button>MenuButton</menu-button>
        <menu-list :backgroundColor="'white'" :width="264" :borderRadius="6">
          <template #header>
            <menu-item
              :pl="36"
              :variant="'header'"
              :h="48"
              :backgroundColor="'#185A76'"
              :color="'white'"
              >This is the header</menu-item
            >
          </template>
          <menu-item
            v-for="(item, index) in 10"
            :key="index"
            :startIcon="require('@/assets/icons/description-icon.svg')"
            :iconSize="28"
            :hoverColor="'#F0F0F0'"
            :pl="25"
            :h="46"
            @click="onMenuItemClicked(index)"
            >Menu item {{ index + 1 }}
          </menu-item>
        </menu-list>
      </menu-provider>
    </section>

    <!-- buttons -->
    <div v-if="false" class="buttons">
      <icon-button size="sm" class="mt-4">Button sm</icon-button>
      <icon-button class="mt-4">Button default</icon-button>
      <icon-button size="lg" class="mt-4">Button lg</icon-button>
      <icon-button size="xl" class="mt-4" :colorScheme="'blue'">
        Button xl
      </icon-button>
      <icon-button size="lg" class="mt-4" disabled>Button Disabled</icon-button>
      <icon-button size="lg" class="mt-4" :variant="'outline'"
        >Button Outlined</icon-button
      >
      <icon-button
        size="lg"
        class="mt-4"
        :variant="'ghost'"
        :colorScheme="'green'"
        >Button Ghost</icon-button
      >
    </div>

    <div v-if="false" class="toggles">
      <!-- switch -->
      <toggle v-model="toggleChecked" />
    </div>

    <div v-if="false" class="boxes">
      <box
        :color="'red'"
        :borderRadius="12"
        :mt="120"
        :class="{ boxActive: boxActiveState }"
      >
        Hello this is a default box
      </box>
    </div>

    <div v-if="false" :class="{ test2: boxActiveState }" class="test1">
      This is a test div
      <button
        @click="
          () => {
            boxActiveState = !boxActiveState;
          }
        "
      >
        Toogle Active
      </button>
    </div>

    <!-- end -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Box from './components/Box.vue';
import IconButton from './components/IconButton.vue';
import Toggle from './components/Toggle.vue';
import SampleComponent from './components/SampleComponent.vue';
import MenuButton from './components/menu/MenuButton.vue';
import MenuItem from './components/menu/MenuItem.vue';
import MenuList from './components/menu/MenuList.vue';
import MenuProvider from './components/menu/MenuProvider.vue';

export default Vue.extend({
  name: 'App',
  components: {
    IconButton,
    Toggle,
    Box,
    SampleComponent,
    MenuButton,
    MenuItem,
    MenuList,
    MenuProvider,
  },
  data() {
    return {
      toggleChecked: false,
      boxActiveState: false,
    };
  },
  methods: {
    onMenuItemClicked(index) {
      console.log('============> on Menu Item Clicked ', index);
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.page {
  width: 100vw;
  min-height: 3000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  padding-top: 30px;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }

  header {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.section {
  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    color: blueviolet;
  }

  width: 80%;
  height: fit-content;
  background-color: rgba(234, 232, 240, 0.582);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}
</style>
