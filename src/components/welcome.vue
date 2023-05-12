<template>
    <div class="wellimg">
            <h2 class="wellimg-text">Welcome to Sally <br>Ventures </h2>  
    </div>
</template>

<script>
    export default {
        name: 'welcome',
        data() {
            return {
                // tx1: 'Welcome to Sally',
                // tx2: 'Ventures',
            }
        },
        
    }
</script>

<style scoped>
    .wellimg{
        background-image: url(../assets/image/background-image-3535807_1920.jpg);
        width: 100%;
        height: 450px;
        background-size: cover;
        background-repeat: no-repeat;
        align-content: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .wellimg-text{
        color: white;
        text-align: center
    }

    @media (max-width: 800px) {

        .wellimg {
            width: 97%;
        }
        
    }
</style>