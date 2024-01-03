<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ButtonsLayerComponent from "./components/ButtonsLayerComponent.vue";
import SettingsLayerComponent from "./components/SettingsLayerComponent.vue";
import TextAreaLayerComponent from "./components/TextAreaLayerComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    ButtonsLayerComponent,
    SettingsLayerComponent,
    TextAreaLayerComponent
  }
}
</script>

<template>
  <HeaderComponent/>
  <ButtonsLayerComponent/>
  <SettingsLayerComponent/>
  <TextAreaLayerComponent/>
  <FooterComponent/>
</template>

<style scoped>

</style>