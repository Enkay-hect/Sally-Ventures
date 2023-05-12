<template>
    <div>
        <welcome />
        <gadgetlinks />
    </div>
</template>

<script>
import welcome from '../components/welcome.vue';
import gadgetlinks from '../components/gadgetlinks.vue';



    export default {
        name: 'home',
        components: {
            welcome,
            gadgetlinks,
        }
    }
</script>

<style scoped>

</style>