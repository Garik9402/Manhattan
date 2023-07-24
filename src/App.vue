<template>
   <div class="wrapper">
      <Hero />
      <main class="main">
         <router-view />
      </main>
      <Footer />
   </div>
</template>

<script>
import Hero from './components/Hero/Hero.vue'
import Footer from './components/Footer/Footer.vue';
import Main from './views/Main.vue';
export default {
   components: {
      Footer,
      Hero,
   }

   ,
   Main
}
</script>


