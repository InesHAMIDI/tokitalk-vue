<template>
  <div class="layer">
    <div class="buttons-area">
      <div class="perso-buttons">
        <button v-for="button in this.buttons" :key="button"
                @click="$emit('button')">
        </button>
      </div>

      <n-button type="primary" class="btn btn-primary" @click='newClicked = !newClicked'>
        <i class="fa-solid fa-plus"></i>
      </n-button>
      <n-input
          :disabled='newClicked'
          type="text"
          size="small"
      />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    this.newClicked(false);
  },
  data() {
    return {
      newClicked: Boolean,
    }
  },
  methods: {
    createNewButton() {

    },

  },
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