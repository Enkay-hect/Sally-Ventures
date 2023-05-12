<template>
    <div>
        <div class="gadgetlinks">
            <ul>
                <li>
                    <button class="a" disabled style="color: black; font-weight:bolder; background-color: white;">Collection</button>
                </li>
                <li>
                    <button class="a" 
                        v-bind:style="{
                            backgroundColor:activeCard=='all' ? 'green':'', 
                            color:activeCard=='all' ? 'white': 'black',
                         }" 
                        @click="activeCard = 'all'">
                        All
                    </button>
                </li>
                <li>
                    <button class="a" 
                        v-bind:style="{
                            backgroundColor:activeCard=='electronics' ? 'green':'', 
                            color:activeCard=='electronics' ? 'white': 'black'
                            }" 
                        @click="activeCard = 'electronics'">
                        Electronics
                    </button>
                </li>
                <li>
                    <button class="a"
                        v-bind:style="{
                            backgroundColor:activeCard=='wears' ? 'green':'', 
                            color:activeCard=='wears' ? 'white': 'black'
                            }" 
                        @click="activeCard = 'wears'">
                        Wears
                    </button>
                </li>
                <li>
                    <button class="a">Digital</button>
                </li>
                <li>
                    <button class="a">Drinks</button>
                </li>
                <li>
                    <button class="a">Shoes</button>
                </li>
                <li>
                    <button class="a">Kitchen Items</button>
                </li>
                <li>
                    <button class="a">Housing</button>
                </li>
                <li>
                    <button class="a">More</button>
                </li>
            </ul>
        </div>

     
        <component :is="activeCard" />
       
    </div>

</template>

<script>
    import all from '../views/all.vue'
    import electronics from './electronics.vue' 
    import wears from './wears.vue'   

    export default {
        name: 'gadgetlinks',
        components: {
            all, electronics, wears
        },
      data() {
        return {
            activeCard: 'all',
        }
      },
    }
</script>

<style scoped>
.gadgetlinks{
    display: flex;
    flex-direction: row;
    width: 100%;

    
}

.gadgetlinks ul{
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.gadgetlinks ul li{
    list-style-type: none;
}

.gadgetlinks ul li button{
   background-color: white;
   border: 0px;
   border-radius: 10px;
   margin-top: 15px;
   padding: 10px;

}

.gadgetlinks ul li button:hover{
   background-color: rgb(216, 247, 216);
   border-radius: 10px;
   transition: 0.5s;
}


@media (max-width: 800px) {
    .gadgetlinks{
        align-self: center;
        margin-left: 0;
        padding-left: 0;
    }    
}

</style>