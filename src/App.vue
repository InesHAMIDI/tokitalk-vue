<script lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import ButtonsLayerComponent from "./components/ButtonsLayerComponent.vue";
import SettingsLayerComponent from "./components/SettingsLayerComponent.vue";
import TextAreaLayerComponent from "./components/TextAreaLayerComponent.vue";

export default {
  name: "App",
  components: {
    SettingsLayerComponent,
    TextAreaLayerComponent,
    FooterComponent,
    ButtonsLayerComponent,
  }
}
</script>

<template>
  <ButtonsLayerComponent/>
  <TextAreaLayerComponent/>
  <SettingsLayerComponent/>
  <FooterComponent/>

</template>

<style scoped>

</style>