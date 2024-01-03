<template>
  <div class="layer">
    <img :src="logo" alt="the infinite symbol, symbol of autistic community"/>
    <github-button href="https://github.com/InesHAMIDI/tokitalk"
                   data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large"
                   data-show-count="true" aria-label="Star InesHAMIDI/tokitalk on GitHub">Star
    </github-button>
  </div>
  <div>

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
      logo: '/public/logo.svg',
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