<template>
  <div class="layer">
    <n-space vertical>
      <n-input
          v-model:value="text"
          type="textarea"
          placeholder="TokiTalk"
          size="medium"
      />
    </n-space>
    <n-button @click='$emit(text)'>
      <i class="fa-solid fa-check"></i>
    </n-button>
  </div>
</template>
<script>
import { NInput, NSpace } from 'naive-ui';

export default {
  components:{
    NInput,
    NSpace,

  },
  setup() {
  },
  data() {
    return {
      text: "",
    }
  },
  methods: {}
}
</script>
<style scoped>
@import "../../public/cssVariables.css";
</style>