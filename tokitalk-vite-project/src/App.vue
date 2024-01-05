<script lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import ButtonsLayerComponent from "./components/ButtonsLayerComponent.vue";
// import SettingsLayerComponent from "./components/SettingsLayerComponent.vue";
import TextAreaLayerComponent from "./components/TextAreaLayerComponent.vue";

export default {
  name: "App",
  components: {
    TextAreaLayerComponent,
    FooterComponent,
    ButtonsLayerComponent,
    // SettingsLayerComponent,
  }
}
</script>

<template>
  <ButtonsLayerComponent/>
  <TextAreaLayerComponent/>
  <FooterComponent/>

</template>

<style scoped>

</style>