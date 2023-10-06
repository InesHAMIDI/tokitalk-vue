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
    localStorage.setItem("buttons", ["bonjour", "oui", "non", "je me tire"]);
    localStorage.setItem("voice", 1);
    localStorage.setItem("pitch", 1);
    localStorage.setItem("volume", 1);
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

#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 400%;
  color: var(--text-color);
  background-color: var(--background-app);
}

.main-app {
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  margin-top: 50px;
}

body{
  overflow: hidden;
  height: 100%;
  width: 100%;
}

/* The class for all layers (header, footer, buttons, textarea... */
.layer {
  background-color: var(--layers-background);
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
}

.footer {
  bottom: 0;
  position: absolute;
  height: 50px;
  width: 100%;
}

.header {
  top: 0;
  position: absolute;
  height: 50px;
}

.btn {
  width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--buttons-normal);
}

.btn:hover {
  background-color: var(--buttons-hover);
  font-weight: bold;
}

.btn:active {
  background-color: var(--buttons-clicked);
  font-weight: bold;
}
</style>