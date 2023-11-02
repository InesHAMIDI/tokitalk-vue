<template>
  <div class="settings">
    <div class="volume-settings">
      <p v-if="this.volume === 0"><i class="fa-solid fa-volume-off"></i></p>
      <p v-if="this.volume <= 0.50 && this.volume > 0"><i class="fa-solid fa-volume-low"></i></p>
      <p v-if="this.volume >= 0.75"><i class="fa-solid fa-volume-high"></i></p>
      <n-slider v-model:value="volume" :step="10"/>
    </div>

    <div class="pitch">
      <i class="fa-solid fa-microphone"></i>
      <n-slider v-model:value="pitch" :step="10"/>
    </div>

    <div class="rate">
      <i class="fa-solid fa-microphone"></i>
      <n-slider v-model:value="rate" :step="10"/>
    </div>

    <div class="keybind">
      <n-button @click="showModal = true">
        Keybind
      </n-button>
      <n-modal v-model:show="showModal">
        <KeybindComponent />
      </n-modal>
    </div>
  </div>
</template>
<script>


import KeybindComponent from "@/components/KeybindComponent.vue";
import {ref} from "vue";

export default {
  components:{
    KeybindComponent
  },
  setup() {

  },
  data() {
    return {
      showModal: ref(false),
    }
  },
  methods: {
    selectVoice(v) {
      localStorage.setItem('voiceIndex', v);
    }
  },
  computed: {
    volume() {
      return localStorage.getItem('volume');
    },

    pitch() {
      return localStorage.getItem('pitch');
    },

    rate() {
      return localStorage.getItem('rate');
    },

    language() {
      return localStorage.getItem('language');
    },
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.css";
</style>