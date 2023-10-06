<template>
  <body>
    <div class="header">
      <HeaderComponent />
    </div>
    <div class="main-app">
      <div class="left-panel">
        <ButtonsLayerComponent />
      </div>
      <div class="right-panel">
        <TextAreaComponent />
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
//import { inject } from 'vue';

export default {
  name: 'App',
  components: {
    ButtonsLayerComponent,
    TextAreaComponent,
    SettingsLayerComponent,
    HeaderComponent,
    FooterComponent
  },

  setup() {
    var buttons = ["bonjour", "oui", "non", "je me tire"];

    localStorage.setItem("buttons", JSON.stringify(buttons) );
    localStorage.setItem("voice", 1);
    localStorage.setItem("pitch", 1);
    localStorage.setItem("volume", 0.5);
    localStorage.setItem("rate", 5);
    localStorage.setItem("language", "fr-FR");
  },
  data() {
    return {
    }
  },
}
</script>

<style>
@import "../public/cssVariables.css";

/* voir fichier avec le css dedans quand l'appli sera prête */
</style>