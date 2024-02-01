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
      <n-select :options="langs" :value="langSelected" @update-value="setLang"/>
    </div>

    <div>
      <n-select :options="voices" :value="voiceSelected" @update-value="setVoice"/>
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
import {languageType, LanguageType} from "../domain/LanguageType.ts";
import {Settings} from "../domain/Settings.ts";
import {Speech} from "../domain/Speech.ts";

export default {
  components: {
    KeybindComponent
  },
  setup() {
    return {}
  },
  mounted() {
    this.volume = this.settings.volume * 100;
    this.pitch = this.settings.pitch * 100;
    this.rate = this.settings.rate * 100;

    this.langSelected = this.settings.lang ?
        this.settings.lang.language : 'en-US';

    this.voiceSelected = this.settings.voice ?
        this.settings.voice.name : '';
  },
  data() {
    const settings = new Settings();
    const speech = new Speech(settings);

    return {
      settings,
      speech,
      showModal: ref(false),
      volume: 0,
      pitch: 0,
      rate: 0,
      langInd: '',
      langSelected: languageType[0] ? languageType[0].language : '',
      voiceSelected: '',
    }
  },
  methods: {
    setLang(lang: LanguageType) {
      this.settings.setLang(lang);
      this.langSelected = lang.language;
      this.populateVoices();
      this.speech.updateSettings();
    },

    setVoice(voice: SpeechSynthesisVoice) {
      this.settings.setVoice(voice);
      this.voiceSelected = voice.name;
      this.speech.updateSettings();
    },

    populateVoices(): Array<{ label: string, value: SpeechSynthesisVoice }> {
      let voices = this.speech.updateVoices();
      return voices.map((voice) => {
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
        this.settings.setVolume(this.volume / 100);
        this.speech.updateSettings();
      }
    },
    pitch: function (val, oldval) {
      if (val != oldval) {
        this.settings.setPitch(this.pitch / 100);
        this.speech.updateSettings();
      }
    },
    rate: function (val, oldval) {
      if (val != oldval) {
        this.settings.setRate(this.rate / 100);
        this.speech.updateSettings();
      }
    },
  },
  computed: {
    langs(): Array<{ label: string, value: LanguageType }> {
      return languageType.map((lang) => {
        return {
          label: lang.language,
          value: lang
        }
      });
    },

    voices(): Array<{ label: string, value: SpeechSynthesisVoice }> {
      return this.populateVoices();
    },

  }
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";
</style>