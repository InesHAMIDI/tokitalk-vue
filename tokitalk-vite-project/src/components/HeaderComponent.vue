<template>
  <div class="layer">
    <!--TODO-->
    <img :src="'/logo.svg'" alt="the infinite symbol, symbol of autistic community"/>
    <github-button href="https://github.com/InesHAMIDI/tokitalk"
                   data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large"
                   data-show-count="true" aria-label="Star the project on GitHub">Star
    </github-button>
  </div>
</template>

<script>
import GithubButton from 'vue-github-button'
export default {
  components: {
    GithubButton
  },

  data() {
    return {
    }
  },

  methods: {}
}
</script>
<style scoped>
.header {
  height: 50px;
  background-color: chocolate;
}
</style>