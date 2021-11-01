<template>
  <main
      class="max-w-5xl mx-auto min-h-85">
      <div class="mx-auto max-w-6xl">
        <h2 class="font-silka2 font-semibold text-xl md:text-3xl text-center my-4 md:mt-14 mb-9 py-1">
          Listas de favoritos
        </h2>
        <!-- cardList -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 p-4">

          
          <CardThunbnail />
          

          <!-- card - NewList -->
            <div
              class="mb-7">
              <a
                href="#"
                class="rounded-lg w-full bg-cp5 h-48 flex justify-center items-center">
                  <MoreIcon />
              </a>
              <div
                class="mt-4">
                <h4
                  class="text-cp3 text-lg text-center font-medium mb-2">
                  <a href="#">
                    Crear una nueva lista
                  </a>
                </h4>
              </div>
            </div>
          <!-- card - NewList -->

        </div>
        <!-- cardList -->
      </div>
    </main>
</template>

<script>
import MoreIcon from '../components/icons/MoreIcon.vue';
import CardThunbnail from '../components/CardThumbnail/CardThunbnail.vue';

export default {
  components: {
    MoreIcon,
    CardThunbnail
  }
}
</script>
