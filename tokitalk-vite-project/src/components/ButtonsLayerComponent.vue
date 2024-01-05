<template>
  <div class="buttons-area">
    <div class="perso-buttons" v-for="button in buttons" :key="button">
      <div v-if="button">
        <n-button @click="$emit(button)">
          {{ button }}
        </n-button>
        <n-button @click="removeButton(buttons.indexOf(button))">
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
          <n-button tertiary
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
import {useButtonStore} from "../stores/buttonsStore.ts";

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
      store: useButtonStore(),
    }
  },
  methods: {
    newButton(text: string) {
      if (!text) return;

      this.store.addButton(text);
      this.formValue.newButtonText = '';
    },

    removeButton(index: number) {
      if(!index) return;
      this.store.removeButton(index);
    }
  },
  computed: {
    buttons() {
      return this.store.getButtons();
    }
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