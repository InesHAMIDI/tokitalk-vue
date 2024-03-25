<template>
  <div class="buttons-area">
    <div class="perso-buttons" v-for="button in buttonsService.getButtons()" :key="button">
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
import {ButtonsService} from "../service/ButtonsService.ts";
import {ButtonsRepository} from "../repository/ButtonsRepository.ts";

export default {
  setup() {
    const formRef = ref<FormInst | null>(null)
    return {
      formRef,
      formValue: ref({
        newButtonText: '',
      }),
    }
  },
  data() {
    const buttonsRepository = new ButtonsRepository();
    const buttonsService = new ButtonsService(buttonsRepository);
    return {
      buttonsService,
      buttonsRepository,
    }
  },
  methods: {
    newButton(text: string) {
      if (!text) return;

      this.buttonsService.addButton(text);
      this.formValue.newButtonText = '';
    },

    removeButton(button: string) {
      const index = this.buttonsService.getButtons().indexOf(button);
      this.buttonsService.removeButton(index);
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