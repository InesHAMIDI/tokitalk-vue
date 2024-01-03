<template>
  <div class="layer">
    <div class="buttons-area">
      <div class="perso-buttons">
        <n-button v-for="button in buttons" :key="button"
                  @click="$emit(button)">
          {{ button }}
        </n-button>
      </div>

      <n-button type="primary" class="btn btn-primary">
        <i class="fa-solid fa-plus"></i>
      </n-button>
      <n-input
          type="text"
          size="tiny"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { NInput} from 'naive-ui';
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
  methods: {

  },
  computed: {
    buttons() {
    }
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";

.buttons-area {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
}
</style>