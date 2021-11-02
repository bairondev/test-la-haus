<template>
  <div
    class="pt-16 md:pt-14">
    <NavBar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

import NavBar from '../components/NavBar/NavBar.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
    components: {
        NavBar,
        Footer
    }
}
</script>