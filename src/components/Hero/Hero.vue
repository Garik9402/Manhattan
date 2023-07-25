<template>
   <section class="hero">
      <Header />
      <div class="hero__content">
         <TheHeroDescVue />
         <HeroPosters />
      </div>
   </section>
</template>

<script>

import Header from '../Header/Header.vue'
import TheHeroDescVue from '../TheHeroDesc/TheHeroDesc.vue'
import HeroPosters from '../HeroPosters/HeroPosters.vue'
export default {
   name: 'appHero',
   components: {
      Header,
      TheHeroDescVue,
      HeroPosters
   }
}
</script>

<style lang="scss" scoped></style>