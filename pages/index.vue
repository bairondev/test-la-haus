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
          <!-- card - thumbnail -->
          <CardThunbnail />
          <!-- card - thumbnail -->
          
          <!-- card - NewList -->
            <CardNew />
          <!-- card - NewList -->
        </div>
        <!-- cardList -->
      </div>
    </main>
</template>

<script>
import axios from 'axios'
import CardThunbnail from '../components/CardThumbnail/CardThunbnail.vue';
import CardNew from '../components/CardNew/CardNew.vue';

export default {
  components: { 
    CardThunbnail,
    CardNew
  }
}
</script>
