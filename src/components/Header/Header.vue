<template>
   <header class="header">
      <div class="header__inner container">
         <a href="/" class="header__logo logo-link">
            <logo />
         </a>
         <div class="header__menu">
            <nav class="header__nav nav">
               <ul class="header__nav-list nav__list">
                  <li class="header__nav-list-item nav__list-item" v-for="(menu, index) in headerMenuList" :key="index">
                     <router-link :to="menu.path" class="header__nav-item-link nav__item-link" aria-current="page">{{ menu.name }}</router-link>
                  </li>
               </ul>
            </nav>
         </div>
         <Btn class="header__btn">
            <span>бронирование</span>
         </Btn>
      </div>
   </header>
</template>

<script>
import logo from '../Logo/logo.vue';
import Btn from '../Btn/Btn.vue'
export default {
   name: 'headerComp',
   components: {
      logo,
      Btn,
   },

   data() {
      return {
         headerMenuList: [
            {
               name: 'Главня', path: '/'
            },
            {
               name: 'Меню', path: '#'
            },
            {
               name: 'Афиша', path: '#'
            },
            {
               name: 'Сотрудничество', path: '#'
            },
            {
               name: 'Галерея', path: '/Gallery'
            },
            {
               name: 'Новости', path: '#'
            },
         ]
      }

   }

}
</script>

