<template>
    <div class="elect">
        <div class="left">
            This is the left side of the electronics component 
        </div>

        <div class="right">
            This is the right side of the electronics component 
        </div>

    </div>

</template>

<script>
    export default {
        name: 'electronics',
        
    }
</script>

<style scoped>

    .elect{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 100px;
    }

</style>