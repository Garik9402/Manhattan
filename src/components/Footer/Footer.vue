<template>
   <footer class="footer">
      <div class="footer__inner container">
         <div class="footer__top">
            <Contacts />
         </div>
      </div>

   </footer>
</template>

<script>
import Contacts from '../Contacts/Contacts.vue';
export default {
   name: 'myFooter',
   components: {
      Contacts,
   }
}
</script>

<style lang="scss" scoped></style>