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
import axios from 'axios';
import CardThunbnail from '../components/CardThumbnail/CardThunbnail.vue';
import CardNew from '../components/CardNew/CardNew.vue';

export default {
  components: { 
    CardThunbnail,
    CardNew
  },
  data(){
    return{
      favorites:[],
      images:[]
    }
  },
  async created(){

    //consulta a la api
    const apiFavorites = await axios.get(
        process.env.baseUrl+"/real-estates"
      );

    this.favorites = apiFavorites.data.data;
    this.images = apiFavorites.data.included;

    // Insertamos las imagenes teniendo como referencias los id del nodo real_estate_ids
    this.favorites.map((item)=>{

      this.images.forEach((element) => {
        let id = parseInt(element.id);
        let thumbnail = item.attributes.real_estate_ids;
        let urlImage = element.attributes.gallery_urls[0];

        thumbnail.filter((image, key)=>{
          image == id
            ? thumbnail[key] = urlImage
            : null
          });

      })

    })
  
  }
}
</script>
