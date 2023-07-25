<template>
   <section class="hero">
      <Header />
      <div class="hero__content">
         <TheHeroDescVue />
      </div>
   </section>
</template>

<script>

import Header from '../Header/Header.vue'
import TheHeroDescVue from '../TheHeroDesc/TheHeroDesc.vue'
export default {
   name: 'appHero',
   components: {
      Header,
      TheHeroDescVue

   }
}
</script>

<style lang="scss" scoped></style>