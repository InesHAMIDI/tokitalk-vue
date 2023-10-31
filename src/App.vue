<template>
  <body>
    <div class="header">
      <HeaderComponent />
    </div>
    <div class="main-app">
      <div class="left-panel">
        <ButtonsLayerComponent  @button="(text) => this.readText(text)" />
      </div>
      <div class="right-panel">
        <TextAreaComponent @text="(text) => this.readText(text)"/>
        <SettingsLayerComponent />
      </div>
    </div>
    <div class="footer">
      <FooterComponent />
    </div>
  </body>
</template>

<script>
import ButtonsLayerComponent from './components/ButtonsLayerComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import SettingsLayerComponent from './components/SettingsLayerComponent.vue';
import TextAreaComponent from './components/TextAreaComponent.vue';

export default {
  name: 'App',
  components: {
    ButtonsLayerComponent,
    TextAreaComponent,
    SettingsLayerComponent,
    HeaderComponent,
    FooterComponent
  },

  data() {
    return {
      speech: {},
    }
  },

  mounted() {
    this.initSpeech();
  },

  methods: {
    initSpeech(){
      this.speech =  new SpeechSynthesisUtterance();

      this.speech.voice = window.speechSynthesis.getVoices()[1];

      if(localStorage.getItem("volume") == null)
        this.speech.volume = 1;
      else
        this.speech.volume = localStorage.getItem("volume"); // From 0 to 1

      if(localStorage.getItem("rate") == null)
        this.speech.rate = 5;
      else
        this.speech.rate = localStorage.getItem("rate"); // From 0.1 to 10

      if(localStorage.getItem("pitch") == null)
        this.speech.pitch = 1;
      else
        this.speech.pitch = localStorage.getItem("pitch"); // From 0 to 2

      if(localStorage.getItem("language") == null)
        this.speech.lang = "fr-FR"
      else
        this.speech.lang = localStorage.getItem("language");
    },

    readText(text){
      if(text === "" || typeof(text) !== 'string'){
        return;
      }
      this.speech.text = text;
      window.speechSynthesis.speak(this.speech);
      console.log(text);
    }
  }
}
</script>

<style>
@import "../public/cssVariables.css";

/* voir fichier avec le css dedans quand l'appli sera prête */
</style>