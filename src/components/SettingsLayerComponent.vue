<template>
  <div class="settings">
    <div class="volume-settings">
      <p v-if="volume === 0"><i class="fa-solid fa-volume-off"></i></p>
      <p v-if="volume <= 50 && volume > 0"><i class="fa-solid fa-volume-low"></i></p>
      <p v-if="volume >= 75"><i class="fa-solid fa-volume-high"></i></p>
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

   <!-- <div>
      <n-dropdown trigger="click" :options="options" @select="selectLang">
        <n-button>Go For a Trip</n-button>
      </n-dropdown>
    </div>-->

    <!--    <div class="keybind">-->
    <!--      <n-button @click="showModal = true">-->
    <!--        Keybind-->
    <!--      </n-button>-->
    <!--      <n-modal v-model:show="showModal">-->
    <!--        <KeybindComponent />-->
    <!--      </n-modal>-->
    <!--    </div>-->
  </div>
</template>
<script lang="ts">
import KeybindComponent from "./KeybindComponent.vue";
import {ref} from "vue";
import {useSettingsStore} from "../stores/settingsStore.ts";

export default {
  components: {
    KeybindComponent
  },
  setup() {
  },
  mounted() {
    this.volume = this.store.getVolume() * 100;
    this.pitch = this.store.getPitch() * 100;
    this.rate = this.store.getRate() * 100;
    this.langInd = this.store.getLangIndex();
    this.voiceInd = this.store.getVoiceIndex();
  },
  data() {
    return {
      showModal: ref(false),
      store: useSettingsStore(),
      volume: 0,
      pitch: 0,
      rate: 0,
      langInd: 0,
      voiceInd: 0,
      voices: speechSynthesis.getVoices(),
      langs: ""
    }
  },
  methods: {
    selectLang(){

    },
    selectVoice(){

    },
  },
  watch: {
    volume: function (val, oldval) {
      if (val != oldval) {
        this.store.setVolume(this.volume / 100);
      }
    },
    pitch: function (val, oldval) {
      if (val != oldval) {
        this.store.setPitch(this.pitch / 100);
      }
    },
    rate: function (val, oldval) {
      if (val != oldval) {
        this.store.setRate(this.rate / 100);
      }
    },
  },
  computed: {},
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";
</style>