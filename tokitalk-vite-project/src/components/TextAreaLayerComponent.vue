<template>
  <div class="layer">
    <div class="text-area">
      <n-form ref="formRef"
              :model="formValue">
        <n-form-item>
          <n-input round
                   v-model:value="formValue.textToRead"
                   type="textarea"
                   size="small"
                   :autosize="{
                      minRows: 3,
                      maxRows: 5
                   }"
                   @keyup.enter="validateText"
          />
        </n-form-item>
        <n-form-item>
          <n-button
                    @click="validateText">
            <font-awesome-icon :icon="['fas', 'paper-plane']"/>
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>
<script lang="ts">
import {ref} from "vue";
import {FormInst} from 'naive-ui'

export default {
  setup() {
    const formRef = ref<FormInst | null>(null)
    return {
      formRef,
      formValue: ref({
        textToRead: ''
      }),
    }
  },
  methods: {
    validateText() {
      if (!this.formValue.textToRead) return;
      this.$emit(this.formValue.textToRead);
      this.formValue.textToRead = "";
    }
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";

</style>