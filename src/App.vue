<template>
   <div class="wrapper">
      <Header/>
      <main class="main">
         <router-view/>
      </main>
        <Footer />
   </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './views/Main.vue';
 export default {
  components: {
   Header,
   Footer,
  }

,
    Main}
</script>


