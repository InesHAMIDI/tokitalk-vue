<template>
  <ButtonsLayerComponent />
  <TextAreaComponent />
</template>

<script>
import ButtonsLayerComponent from './components/ButtonsLayerComponent.vue';
import TextAreaComponent from './components/TextAreaComponent.vue';
import { inject } from 'vue';

export default {
  name: 'App',
  components: {
    ButtonsLayerComponent, 
    TextAreaComponent
    },

    setup() {
        this.speech = inject('speech');
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
