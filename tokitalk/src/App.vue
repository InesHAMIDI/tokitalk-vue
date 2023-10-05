<template>
  <div class="main-app">
    <div class="left-panel">
      <ButtonsLayerComponent />
    </div>
    <div class="right-panel">
      <TextAreaComponent />
      <SettingsLayerComponent />
    </div>
  </div>
  
</template>

<script>
import ButtonsLayerComponent from './components/ButtonsLayerComponent.vue';
import SettingsLayerComponent from './components/SettingsLayerComponent.vue';
import TextAreaComponent from './components/TextAreaComponent.vue';
//import { inject } from 'vue';

export default {
  name: 'App',
  components: {
    ButtonsLayerComponent,
    TextAreaComponent,
    SettingsLayerComponent
},

    setup() {
        //const speech = inject('globalSpeech');
    },
    data(){
        return {
        }
    },
}
</script>

<style>
.fa, .fas, .fa-solid, .fa-regular {
  color: #717171;
  size: 20px;
}
.main-app{
  display: flex;
  justify-content: space-between;
}
</style>
