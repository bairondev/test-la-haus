<template>
  <div
    class="pt-14">
    <NavBar/>
    <Nuxt />
  </div>
</template>

<script>

import NavBar from '../components/NavBar/NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>