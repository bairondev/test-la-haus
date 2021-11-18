<template>
    <!-- card -->
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
    <!-- card -->
</template>

<script>
import MoreIcon from '../icons/MoreIcon.vue';

export default {
    name: 'CardNew',
    components: {
        MoreIcon
    },
};
</script>
