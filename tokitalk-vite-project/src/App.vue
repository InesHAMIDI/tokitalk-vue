<script lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import ButtonsLayerComponent from "./components/ButtonsLayerComponent.vue";
// import SettingsLayerComponent from "./components/SettingsLayerComponent.vue";
// import TextAreaLayerComponent from "./components/TextAreaLayerComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    ButtonsLayerComponent,
    // SettingsLayerComponent,
    // TextAreaLayerComponent
  }
}
</script>

<template>
  <ButtonsLayerComponent/>

  <FooterComponent/>

</template>

<style scoped>

</style>