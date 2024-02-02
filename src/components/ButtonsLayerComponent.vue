<template>
  <div class="buttons-area">
    <div class="perso-buttons" v-for="button in buttons.getButtons()" :key="button">
      <div v-if="button">
        <n-button @click="$emit(button)">
          {{ button }}
        </n-button>
        <n-button @click="removeButton(button)">
          <font-awesome-icon :icon="['fas', 'trash']"/>
        </n-button>
      </div>
    </div>

    <div>
      <n-divider></n-divider>
      <n-form ref="formRef"
              :model="formValue">
        <n-form-item>
          <n-input round
                   type="text"
                   size="tiny"
                   v-model:value="formValue.newButtonText"
                   @keyup.enter="newButton(formValue.newButtonText)"
          />
        </n-form-item>
        <n-form-item>
          <n-button
                    @click="newButton(formValue.newButtonText)">
            <font-awesome-icon :icon="['fas', 'plus']"/>
          </n-button>
        </n-form-item>
      </n-form>
    </div>

  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import {FormInst} from 'naive-ui'
import {Buttons} from "../domain/Buttons.ts";

export default {
  setup() {
    const formRef = ref<FormInst | null>(null)
    return {
      formRef,
      formValue: ref({
        newButtonText: ''
      }),
    }
  },
  data() {
    return {
      buttons: new Buttons(),
    }
  },
  methods: {
    newButton(text: string) {
      if (!text) return;

      this.buttons.addButton(text);
      this.formValue.newButtonText = '';
    },

    removeButton(button: string) {
      const index = this.buttons.getButtons().indexOf(button);
      this.buttons.removeButton(index);
    }
  },
  computed: {
  }
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";

.buttons-area {
  background-color: #74C69D;
  color: #ffffff;
}
</style>