<template>
    <div
        class="mb-6">
        <!-- thumbnails group -->
        <router-link 
            to="#">
            <figure
            class="relative w-full h-48">
            <!-- one image-->
            <img
                class="absolute z-30 inline object-cover h-48 border border-white rounded-xl"
                :class="total === 1 ? 'w-full' : 'w-1/2'"
                :src="images[0]"
                :alt="name"/>
                <!-- one image-->
            <!-- second image-->
            <img
                class="absolute z-20 inline object-cover h-48 border border-white rounded-xl"
                :class="total === 2 ? 'right-0 w-7/12 md:w-48' : 'w-5/12 sm:w-3/5 right-12 sm:right-14 md:right-10 mr-4 sm:mr-2 md:mr-2 lg:mr-4'"
                :src="images[1]"
                :alt="name"/>
                <!-- second image-->
            <!-- Mask Image -->
            <div
                class="absolute right-0 z-10 inline w-3/12 h-48"
                :class="total <= 2 ? 'hidden' : 'block'" >
                <div
                class="relative">
                <span
                    class="absolute flex w-full top-0 left-0 h-48 bg-cp1 opacity-70 z-10 border border-white rounded-xl justify-end items-center">
                    <b
                        class="font-bold block text-white flex-none w-full text-right pr-6 md:pr-0 md:text-center md:pl-3 lg:pl-5">
                        +{{total-2}}
                    </b>
                    </span>
                <img
                    class="opacity-80 object-cover w-full h-48 rounded-xl"
                    :src="images[2]"
                    :alt="name"/>
                </div>
            </div>
            <!-- Mask Image -->
            </figure>
        </router-link>
        <!-- thumbnails group -->
        <!-- info card -->
        <div
        class="mt-3">
        <h4
            class="text-cp1 hover:text-main text-lg font-silka2 font-semibold mb-2">
            <router-link
                to="#">
            {{name}}
            </router-link>
        </h4>
        <p
            class="text-cp2 text-sm font-normal">
            {{total}} propiedades guardadas
        </p>
        </div>
        <!-- info card -->
    </div>
</template>

<script>
export default{
    name: "CardThumbnail",
    props: ['name', 'images', 'total']
}
</script>
