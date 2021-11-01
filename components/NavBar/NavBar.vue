<template>
  <header
    class="w-full border-b border-cp4 px-4 py-4 z-50 fixed bg-white top-0">
    <div class="max-w-6xl flex items-center md:justify-between mx-auto">
      <!-- Menu Mobile -->
      <div
        class="mr-2 flex md:hidden">
        <button
          @click="showMobile">
          <!-- Hamburger icon -->
          <HamburgerIcon
            :class="!menuMobile ? 'md:block': 'hidden'" />
          <!-- Hamburger icon -->
          <!-- close icon -->
          <CloseIcon
            :class="menuMobile ? 'md:block': 'hidden'" />
          <!-- close icon -->
        </button>
        <!-- notification -->
          <div
            class="rounded-full -mt-1 -ml-1 flex items-center justify-center w-3 h-3 bg-main">
          </div>
        <!-- notification -->
      </div>
      <!-- Menu Mobile -->
      <!-- logo-->
      <div class="logo overflow-hidden w-8 md:w-auto">
        <MainLogo />
      </div>
      <!-- logo-->
      <!-- NavBar-->
      <nav
        :class="menuMobile ? 'md:block': 'hidden'"
        class="md:block w-full md:w-auto bg-blend-color fixed md:relative left-0 pt-5 md:pt-0 bg-white min-h-screen md:min-h-full z-40 top-12 md:top-0">
        <ul class="flex-row md:flex justify-center md:justify-start items-center text-cp1">
          <li 
            v-for="{name, url, index} in links"
            :key="index"
            class="mx-5 my-4 md:my-0 hover:text-main" >
            <router-link to='url'>{{name}}</router-link>
          </li>
          <!-- Perfil -->
          <li class="mx-5 my-4 md:my-0 group relative">
            <button
              @click="showPerfil"
              class="flex items-center group-hover:text-main">
              Mi Perfil
              <!-- arrow -->
              <svg
                class="w-5 group-hover:text-main fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79291 12.2071L7.20712 10.7929L16 19.5858L24.7929 10.7929L26.2071 12.2071L16 22.4142L5.79291 12.2071Z" fill="#5B6866"/>
                </svg>
                <!-- arrow -->
                <!-- notification -->
                <div
                  class="rounded-full -mt-4 -ml-1 hidden md:flex items-center justify-center w-3 h-3 bg-main">
                  </div>
                <!-- notification -->

            </button>
            <!-- dropdown / menu -->
            <div
              :class="menuPerfil ? 'md:block': 'hidden'"
              class="w-full md:w-32 md:-ml-3 p-2 md:px-4 md:rounded-b-2xl bg-white md:shadow-md md:absolute md:left-0 md:top-6">
              <ul class="text-sm">
                <li
                  class="my-2 hover:text-main">
                  <router-link to="#">Mis mensajes</router-link>
                </li>
                <li
                  class="my-2 hover:text-main">
                  <router-link to="#">Cerrar sesión</router-link>
                </li>
              </ul>
            </div>
            <!-- dropdown / menu -->
          </li>
          <!-- Perfil -->
        </ul>
      </nav>
       <!-- NavBar-->
    </div>
  </header>
</template>

<script>
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';

export default{
  components:{
    HamburgerIcon,
    CloseIcon,
  },
  data(){
    return {
      menuMobile: false,
      menuPerfil: false,
      links: [
        {
          name: 'Cundinamarca',
          url: 'goto'
        },
        {
          name: 'Antioquia',
          url: 'goto'
        },
        {
          name: 'Recursos',
          url: 'goto'
        },
      ]
    };
  },
  methods: {
    showMobile: function () {
      return this.menuMobile = !this.menuMobile;
    },
    showPerfil: function () {
      return this.menuPerfil = !this.menuPerfil;
    }
  }

}
</script>


