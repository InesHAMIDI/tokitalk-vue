<template>
  <ButtonsLayerComponent />
  <TextAreaComponent />
  <SettingsLayerComponent />
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
</style>
