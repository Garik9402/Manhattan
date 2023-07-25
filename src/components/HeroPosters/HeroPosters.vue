<template>
   <div class="hero__posters">
      <div class="hero__posters-btns">
         <button class="hero__posters-btn" :class="{ active: activeSet === 'first' }" @click="showImmediatePosters">Ближайшие</button>
         <button class="hero__posters-btn" :class="{ active: activeSet === 'second' }" @click="showSoonPosters">скоро</button>
      </div>
      <div class="hero__posters-content">
         <img v-for="( image, index ) in  images " :key="index" :src="image" alt="postersImg">
      </div>
   </div>
</template>
   
<script>
export default {
   data() {
      return {
         immediatePosters: [
            require('../../assets/images/Posts-img1.png'),
            require('../../assets/images/Posts-img2.png'),
            require('../../assets/images/Posts-img3.png'),
            require('../../assets/images/Posts-img4.png'),
         ],
         soonPosters: [
            require('../../assets/images/Posts-img3.png'),
            require('../../assets/images/Posts-img1.png'),
            require('../../assets/images/Posts-img4.png'),
            require('../../assets/images/Posts-img2.png'),
         ],
         images: [],
         activeSet: ''
      }
   },
   created() {
      this.showImmediatePosters();
   },
   methods: {
      showImmediatePosters() {
         this.images = this.immediatePosters;
         this.activeSet = 'first';
      },
      showSoonPosters() {
         this.images = this.soonPosters;
         this.activeSet = 'second';
      }
   }
}
</script>

<style lang="scss" scoped>
.active {
   background: rgba(213, 98, 29, 0.10)
}
</style>