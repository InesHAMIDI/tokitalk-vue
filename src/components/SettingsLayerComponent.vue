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

    <div>
      <n-select :options="langs" @update-value="setLang" :value="langSelected"/>
    </div>

    <div>
      <n-select :options="voices" @update-value="setVoice" :value="voiceSelected"/>
    </div>

<!--        <div class="keybind">-->
<!--          <n-button @click="showModal = true">-->
<!--            Keybind-->
<!--          </n-button>-->
<!--          <n-modal v-model:show="showModal">-->
<!--            <KeybindComponent />-->
<!--          </n-modal>-->
<!--        </div>-->
  </div>
</template>
<script lang="ts">
import KeybindComponent from "./KeybindComponent.vue";
import {ref} from "vue";
import {useSettingsStore} from "../stores/settingsStore.ts";
import {languages, LanguageType} from "../assets/languages.ts";
import {initSpeech, initSynth} from "../assets/audio.ts";

export default {
  components: {
    KeybindComponent
  },
  setup() {
    initSpeech();
  },
  mounted() {
    this.volume = this.store.getVolume() * 100;
    this.pitch = this.store.getPitch() * 100;
    this.rate = this.store.getRate() * 100;

    this.langSelected = this.store.getLang() ?
        this.store.getLang().language : '';

    this.voiceSelected = this.store.getVoice() ?
        this.store.getVoice().name : '';
  },
  data() {
    return {
      showModal: ref(false),
      store: useSettingsStore(),
      volume: 0,
      pitch: 0,
      rate: 0,
      langInd: '',
      langSelected: languages[0] ? languages[0].language : '',
      voiceSelected: '',
    }
  },
  methods: {
    setLang(lang: LanguageType) {
      this.store.setLang(lang);
      this.langSelected = lang.language;
    },
    setVoice(voice: SpeechSynthesisVoice){
      this.store.setVoice(voice);
      this.voiceSelected = voice.name;
    },
    populateVoices(): Array<{ label: string, value: SpeechSynthesisVoice }>{
      this.voiceSelected = this.synth.getVoices()[0] ? this.synth.getVoices()[0].name : '';
      return this.synth.getVoices().map((voice) => {
        return {
          label: voice.name,
          value: voice
        }
      });
    }
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
    //IMPORTANT : LES VOIX CHANGENT EN FONCTION DE LA LANGUE
    langSelected: function (val, oldval) {
      if (val != oldval) {
        this.populateVoices();
      }
    },
  },
  computed: {
    langs(): Array<{ label: string, value: LanguageType }> {
      return languages.map((lang) => {
        return {
          label: lang.language,
          value: lang
        }
      });
    },

    voices(): Array<{ label: string, value: SpeechSynthesisVoice }>{
      return this.populateVoices();
    },

    synth(): SpeechSynthesis {
      return initSynth();
    }
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";
</style>