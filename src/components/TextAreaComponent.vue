<template>
  <div class="layer">
    <n-form>
      <n-form-item>
        <n-input
            class="text-area"
            type="textarea"
            placeholder="Hey !!"
        />
      </n-form-item>
      <n-form-item>
        <n-button @click="validateText">
          <i class="fa-solid fa-check"></i>
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
<script>
export default {
  setup() {
  },
  data() {
    return {
      text: "",
    }
  },
  methods: {
    validateText() {
    }
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.css";
</style>