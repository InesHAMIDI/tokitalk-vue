<template>
  <!--CAROUSEL POUR LA MISE EN PAGE DANS UNE FENETRE MODALE (voir bootstrap)-->
  <n-carousel show-arrow>
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        alt="">
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        alt="">
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        alt="">
    <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        alt="">
  </n-carousel>
</template>
<script lang="ts">

import {NCarousel} from "naive-ui";

export default {
  components:{
    NCarousel
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>

</style>