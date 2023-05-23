<template>
  <div class="page" :class="{ dark: darkMode }">
    <header>
      <h1>Demo Components</h1>
      <p>Built with ❤️ at Uniparticle</p>
    </header>

    <sample-component v-if="false" />

    <!-- ------------------------------------------------- -->
    <!-- Modal  -->
    <!-- ------------------------------------------------- -->
    <section v-if="false" class="section modal">
      <h1>Modal Components</h1>

      <p>IS Opened {1} {{ isOpen }}</p>

      <!-- Uncontrolled Modal Component -->
      <!-- <modal>
        <modal-button>
          <icon-button>Toggle Menu 1</icon-button>
        </modal-button>
        <modal-content
          :width="800"
          :height="500"
          :p="20"
          :boxShadow="'md'"
          :borderWidth="4"
          :borderColor="'black'"
          :borderRadius="30"
          class="modal-content"
        >
          <div>Modal Content 1</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 3</div>

          <icon-button class="modal-close">Cancel 1</icon-button>
          <icon-button class="modal-close">Cancel 2</icon-button>
          <icon-button>Don't Cancel</icon-button>
        </modal-content>
      </modal> -->

      <!-- Controlled Modal Component -->
      <modal :isOpen="isOpen" @onClose="onModalClose">
        <modal-button @click="onModalOpen">
          <icon-button>Toggle Modal 2</icon-button>
        </modal-button>
        <modal-content
          :width="800"
          :height="500"
          :p="20"
          :boxShadow="'md'"
          :borderWidth="0"
          :borderRadius="30"
          class="modal-content"
        >
          <div>Modal Content 1</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 2</div>
          <div>Modal Content 3</div>

          <icon-button class="modal-close">Cancel 1</icon-button>
          <icon-button class="modal-close">Cancel 2</icon-button>
          <icon-button>Don't Cancel</icon-button>
        </modal-content>
      </modal>
    </section>

    <!-- ------------------------------------------------- -->
    <!-- Menu Select -->
    <!-- ------------------------------------------------- -->

    <section v-if="true" class="section menu">
      <div class="flex">
        <div>
          <span> Selected Option : {{ selectedOption3 }} </span>

          <menu-select
            :width="toggleChecked ? 300 : 400"
            v-model="selectedOption3"
            :closeOnSelect="true"
          >
            <select-option
              v-for="(item, index) in options"
              :key="index"
              :startIcon="item.startIcon"
              :iconSize="28"
              :hoverColor="'#F0F0F0'"
              :pl="25"
              :h="46"
              :value="item"
            >
              {{ item.value }}
            </select-option>
          </menu-select>

          <button @click="randomizeSelectedOption">
            Randomize Selected Option
          </button>
        </div>

        <div>
          <span> Selected Option : {{ selectedOption }} </span>

          <menu-select
            :width="toggleChecked ? 300 : 400"
            v-model="selectedOption"
            :closeOnSelect="true"
          >
            <select-option
              v-for="(item, index) in options"
              :key="index"
              :startIcon="item.startIcon"
              :iconSize="28"
              :hoverColor="'#F0F0F0'"
              :pl="25"
              :h="46"
              :value="item"
            >
              {{ item.text }}
            </select-option>
          </menu-select>

          <button @click="randomizeSelectedOption">
            Randomize Selected Option
          </button>
        </div>

        <div class="mx-12">
          <span> Selected Option 2: {{ selectedOption2 }} </span>
          <menu-select v-model="selectedOption2" :openOnHover="true">
            <select-option
              v-for="(item, index) in options2"
              :key="index"
              :iconSize="28"
              :hoverColor="'#F0F0F0'"
              :pl="25"
              :h="46"
              :value="item"
            >
              {{ item }}
            </select-option>
          </menu-select>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------- -->
    <!-- Menu Multiple Select -->
    <!-- ------------------------------------------------- -->

    <section v-if="false" class="section multiple-selection-menu">
      <div class="flex">
        <div>
          <menu-multiple-select
            :width="toggleChecked ? 300 : 400"
            v-model="selectedOptions"
            :name="'Media Groups'"
          >
            <multiple-select-option
              v-for="(item, index) in options"
              :key="index"
              :startIcon="item.startIcon"
              :iconSize="28"
              :hoverColor="'#F0F0F0'"
              :pl="25"
              :h="52"
              :value="item"
              class="multiple-select-option"
            >
              {{ item.text }}
            </multiple-select-option>
          </menu-multiple-select>

          <pre> Selected Option : {{ selectedOptions }} </pre>

          <button @click="randomizeSelectedOption">
            Randomize Selected Option
          </button>
        </div>

        <div class="mx-12">
          <span> Selected Option 2: {{ selectedOption2 }} </span>
          <menu-select v-model="selectedOption2" :openOnHover="true">
            <select-option
              v-for="(item, index) in options2"
              :key="index"
              :iconSize="28"
              :hoverColor="'#F0F0F0'"
              :pl="25"
              :h="46"
              :value="item"
            >
              {{ item }}
            </select-option>
          </menu-select>
        </div>
      </div>
    </section>

    <!-- ------------------------------------------------- -->
    <!-- Menu -->
    <!-- ------------------------------------------------- -->

    <section v-if="true" class="section menu">
      <h1>Menu Component</h1>
      <menu-provider
        class="menu-provider"
        @onOpen="onMenuOpen"
        @onClose="onMenuClose"
      >
        <menu-button>
          <icon-button :size="'lg'">Menu Button</icon-button>
        </menu-button>
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
            :textAlign="'center'"
            :pl="25"
            :h="46"
            :disabled="index === 1"
            @click="onMenuItemClicked(index)"
            >Menu item {{ index + 1 }}
          </menu-item>
        </menu-list>
      </menu-provider>

      <!-- Don't close the menu when item is selected  -->
      <menu-provider
        class="menu-provider"
        @onOpen="onMenuOpen"
        @onClose="onMenuClose"
        :closeOnSelect="false"
      >
        <menu-button>
          <icon-button :size="'lg'">Don't close on select</icon-button>
        </menu-button>
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
            :selectedColor="'#e2e2cb'"
            :textAlign="'center'"
            :pl="25"
            :h="46"
            :disabled="index === 1"
            :selected="selectedMenuItemIndex === index"
            @click="onMenuItemClicked(index)"
            >Menu item {{ index + 1 }}
          </menu-item>
        </menu-list>
      </menu-provider>

      <menu-provider class="menu-provider menu-icon-right">
        <menu-button>
          <button>
            <img src="@/assets/icons/add-black-icon.svg" />
          </button>
        </menu-button>
        <menu-list :backgroundColor="'white'" :width="264" :borderRadius="6">
          <menu-item
            v-for="(item, index) in 10"
            :key="index"
            :hoverColor="'#F0F0F0'"
            :pl="25"
            :h="46"
            @click="onMenuItemClicked(index)"
            >Menu item {{ index + 1 }}
          </menu-item>
        </menu-list>
      </menu-provider>

      <menu-provider :openOnHover="true" class="menu-provider menu-icon-right">
        <menu-button>
          <button>
            <img src="@/assets/icons/add-black-icon.svg" />
          </button>
        </menu-button>
        <menu-list
          :backgroundColor="'white'"
          :width="264"
          :borderRadius="6"
          :anchor="'right'"
        >
          <menu-item
            v-for="(item, index) in 10"
            :key="index"
            :hoverColor="'#F0F0F0'"
            :textAlign="'end'"
            :h="46"
            @click="onMenuItemClicked(index)"
            >Menu item {{ index + 1 }}
          </menu-item>
        </menu-list>
      </menu-provider>

      <menu-provider :openOnHover="true" class="menu-provider menu-icon-right">
        <menu-button>
          <button>
            <img src="@/assets/icons/add-black-icon.svg" />
          </button>
          <!-- <icon-button :size="'lg'">Menu Button</icon-button> -->
        </menu-button>
        <menu-list
          :backgroundColor="'white'"
          :width="264"
          :borderRadius="6"
          :anchor="'middle'"
        >
          <menu-item
            v-for="(item, index) in 10"
            :key="index"
            :hoverColor="'#F0F0F0'"
            :textAlign="'center'"
            :h="46"
            @click="onMenuItemClicked(index)"
            >Menu item {{ index + 1 }}
          </menu-item>
        </menu-list>
      </menu-provider>
    </section>

    <!-- ------------------------------------------------- -->
    <!-- buttons -->
    <!-- ------------------------------------------------- -->

    <div v-if="false" class="buttons">
      <icon-button size="sm" class="mt-4">Button sm</icon-button>
      <icon-button class="mt-4">Button default</icon-button>
      <icon-button size="lg" class="mt-4">Button lg</icon-button>
      <icon-button size="xl" class="mt-4" :colorScheme="'blue'">
        Button xl
      </icon-button>
      <icon-button size="lg" class="mt-4" disabled>Button Disabled</icon-button>
      <icon-button
        size="lg"
        class="mt-4"
        :variant="'outline'"
        disabled
        @click="onDisabledClicked"
        >Button Disabled</icon-button
      >
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

      <icon-button
        :size="'sm'"
        class="mt-4"
        :startIcon="require('@/assets/icons/back.svg')"
      >
        Icon Button
      </icon-button>

      <icon-button
        :size="'md'"
        class="mt-4"
        :startIcon="require('@/assets/icons/back.svg')"
      >
        Icon Button
      </icon-button>

      <icon-button
        :size="'lg'"
        class="mt-4"
        :startIcon="require('@/assets/icons/back.svg')"
      >
        Icon Button
      </icon-button>

      <icon-button
        :size="'xl'"
        class="mt-4"
        :startIcon="require('@/assets/icons/back.svg')"
        :endIcon="require('@/assets/icons/lock.svg')"
      >
        Icon Button
      </icon-button>

      <icon-button
        :size="'md'"
        class="mt-4"
        :startIcon="require('@/assets/icons/back.svg')"
        :endIcon="require('@/assets/icons/lock.svg')"
        disabled
      >
        Icon Button
      </icon-button>
    </div>

    <!-- ------------------------------------------------- -->
    <!-- toggle -->
    <!-- ------------------------------------------------- -->

    <div v-if="false" class="section toggles">
      <h1>Toggle Components</h1>

      <toggle v-model="toggleChecked" :width="70" class="mx-10" />
      <toggle
        v-model="darkMode"
        class="mx-10"
        :color="'#423194'"
        :offColor="'#B9E4F4'"
        :sliderColor="'white'"
        :sliderOffColor="'#FEF9B8'"
      />

      <toggle
        v-model="toggleChecked4"
        class="mx-10"
        :color="'#46B781'"
        :offColor="'transperent'"
        :sliderColor="'white'"
        :sliderOffColor="'#46B781'"
        :borderColor="'#46B781'"
        :showBorder="true"
      />
      <toggle
        v-model="toggleChecked3"
        class="mx-10"
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
        class="mx-10"
        :color="'#E68907'"
        :offColor="'#F0F0F0'"
        :sliderColor="'#333333'"
        :sliderSize="39"
        :opened="true"
        :width="80"
      />
    </div>
    <!-- ------------------------------------------------- -->
    <!-- Checkbox -->
    <!-- ------------------------------------------------- -->

    <div v-if="false" class="section toggles">
      <h1>Checkbox Components</h1>

      <div class="flex">
        <checkbox v-model="isChecked1" :border-radius="5" />
        <checkbox
          v-model="isChecked2"
          :background-color="'#6323F5'"
          :color="'white'"
          class="ml-5"
        />
        <checkbox
          v-model="isChecked3"
          :border-radius="0"
          :color="'#6CE682'"
          :background-color="'#7A3EE6'"
          :border-color="'#573199'"
          class="ml-5"
        />
        <checkbox
          v-model="isChecked4"
          :background-color="'#f3a7'"
          :color="'black'"
          :show-checkmark="false"
          class="ml-5"
          :size="40"
        />
        <checkbox
          v-model="isChecked5"
          :background-color="'green'"
          :color="'white'"
          :show-checkmark="false"
          class="ml-5"
          :size="15"
          :border-width="1"
          :border-radius="3"
        />
      </div>
    </div>

    <!-- ------------------------------------------------- -->
    <!-- Input Number -->
    <!-- ------------------------------------------------- -->

    <input-number
      :min="1"
      :max="10"
      :name="'score'"
      :width="130"
      :height="49"
      v-model="inputNumber1"
    />

    <!-- ------------------------------------------------- -->
    <!-- boxes -->
    <!-- ------------------------------------------------- -->

    <div v-if="false" class="section boxes">
      <box
        :color="!toggleChecked ? 'blue' : 'green'"
        :borderColor="toggleChecked ? 'red' : 'yellow'"
        :w="toggleChecked ? '90%' : '95%'"
        :borderRadius="12"
        :mt="120"
        :class="{ boxActive: boxActiveState }"
      >
        Hello this is a default box {{ toggleChecked }}
      </box>

      <!-- <box
        :color="!toggleChecked ? 'blue' : 'green'"
        :borderColor="toggleChecked ? 'red' : 'yellow'"
        :w="toggleChecked ? '90%' : '95%'"
        :borderRadius="12"
        :mt="120"
        :class="{ boxActive: boxActiveState }"
      >
        Hello this is a default box {{ toggleChecked }}
      </box> -->

      <box :mt="40" :boxShadow="'lg'" />
      <box :mt="40" :boxShadow="'sm'" :borderWidth="1" />
      <box :mt="40" :boxShadow="'md'" />
      <box :mt="40" />

      <box
        :backgroundColor="'green'"
        :borderWidth="6"
        :borderColor="'black'"
        :p="20"
        :w="'100%'"
        :minW="800"
      >
        Hello this is a default box
      </box>
    </div>

    <!-- ------------------------------------------------- -->

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
    <!-- ------------------------------------------------- -->
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
import MenuSelect from './components/select/MenuSelect.vue';
import SelectOption from './components/select/SelectOption.vue';
import Modal from './components/modals/Modal.vue';
import ModalContent from './components/modals/ModalContent.vue';
import ModalButton from './components/modals/ModalButton.vue';
import Checkbox from './components/Checkbox.vue';
import InputNumber from './components/InputNumber.vue';
import { useDisclosure } from './composables/useDisclosure';
import MenuMultipleSelect from './components/select/MenuMultipleSelect.vue';
import MultipleSelectOption from './components/select/MultipleSelectOption.vue';

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
    MenuSelect,
    SelectOption,
    Modal,
    ModalContent,
    ModalButton,
    Checkbox,
    InputNumber,
    MenuMultipleSelect,
    MultipleSelectOption,
  },
  data() {
    return {
      toggleChecked: false,
      toggleChecked2: false,
      toggleChecked3: false,
      toggleChecked4: false,
      boxActiveState: false,
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false,
      inputNumber1: 1,

      options: [
        {
          text: 'Option 1',
          startIcon: require('@/assets/icons/description-icon.svg'),
          value: 'option 1 value',
        },
        {
          text: 'Option 2',
          startIcon: require('@/assets/icons/description-icon.svg'),
          value: 'option 2 value',
        },
        {
          text: 'Option 3',
          value: 'option 3 value',
        },
        {
          text: 'Option 4',
          value: 'option 4 value',
        },
      ],
      options2: ['option 2.1', 'option 2.2', 'option 2.3', 'option 2.4'],
      selectedOptionValue: {
        text: 'Option 4',
      },
      selectedOption3Value: {
        text: 'Option 4',
        value: 'Option 4 value',
      },
      selectedOptions: [
        {
          text: 'Option 4',
        },
      ],
      selectedOption2: null,
      darkMode: false,
      isOpen: false,
      selectedMenuItemIndex: null,
    };
  },

  computed: {
    pageColor() {
      return this.darkMode ? '#26282C' : '#f5f5f5';
    },
    selectedOption: {
      get() {
        return this.selectedOptionValue;
      },
      set(value) {
        this.selectedOptionValue = value;
        console.log('---------> selected option changed ', value);
      },
    },
    selectedOption3: {
      get() {
        return this.selectedOption3Value;
      },
      set(value) {
        this.selectedOption3Value = value;
        console.log('---------> selected option changed ', value);
      },
    },
  },
  methods: {
    onModalOpen() {
      this.isOpen = true;
    },
    onModalClose() {
      this.isOpen = false;
    },
    onMenuOpen() {
      console.log('---------> on menu open >>>>>> ');
    },
    onMenuClose() {
      console.log('---------> on menu close >>>>>> ');
    },
    onMenuItemClicked(index) {
      console.log('============> on Menu Item Clicked ', index);
      this.selectedMenuItemIndex = index;
    },
    randomizeSelectedOption() {
      const rand = Math.round(Math.random() * 3);
      console.log('Rand ', rand);
      this.selectedOption = this.options[rand];
    },
    onDisabledClicked() {
      console.log('on disabled clicked');
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

  transition: all 0.1s linear;

  &.dark {
    background-color: #26282c;
    color: white;
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

  // margin-top: 600px;
  &.toggles {
    background-color: rgb(255, 255, 255);
  }
}

.menu-provider {
  margin-top: 50px;
}

.menu-icon-left {
}

.menu-icon-right {
  margin-left: 400px;
}

.multiple-select-option {
  font-weight: 500;
  font-size: 20px;
}
</style>
