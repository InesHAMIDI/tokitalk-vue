<template>
  <div class="layer">
    <div class="buttons-area">
      <div class="perso-buttons">
        <n-button v-for="button in this.buttons" :key="button"
                  @click="$emit(button)">
          {{ button }}
        </n-button>
      </div>

      <n-button class="btn btn-primary" type="primary">
        <i class="fa-solid fa-plus"></i>
      </n-button>
      <n-input
          size="tiny"
          type="text"
      />
    </div>
  </div>
</template>
<script>
import {NInput} from 'naive-ui';

export default {

  components: {
    NInput,
  },

  setup() {
  },
  data() {
    return {
      newClicked: Boolean,
    }
  },
  methods: {},
  computed: {
    buttons() {
      return JSON.parse(localStorage.getItem("buttons"));
    }
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.css";

.buttons-area {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
}
</style>