<template>
   
        <div class="all">
                <div class="imggg" v-for="pdt in product" :key=pdt.id>
                    <router-link :to="{
                                name: 'productdetails', 
                                params:{
                                    id : pdt.id}
                                }" 
                        class="rot" disabled>
                        <img  v-bind:src="pdt.productImage" alt="">
                        <h6  class="hh6">{{pdt.product}}</h6>
                        <h6  class="hh6">{{pdt.price}}</h6>
                        <button v-if="pdt.inventory == 0" class="btn" disabled>Out of Stock</button>
                        <button v-else-if="pdt.inventory > 0" class="btn">Add to Cart</button>
                    </router-link>
                </div>
        </div>

        <!-- <productdetails v-for="pdt in productsummary" :key="pdt.id" :productsummary=pdt style="display:none;"/> -->
        <!-- <productdetails v-bind:productsummary = 'productsummary' style="display:none;"></productdetails> -->
    
   
</template>

<script>
    // import productdetails from  './productdetails.vue'

    
    export default {        
        name: 'all',
        data(){
            return{
                
            }

        },

        computed: {
            product(){
                return this.$store.state.products
            },
        },


        mounted(){
            // window.storeKey="dahbahdas";
            // window.App = { "dahbahdas" : {}}
            // window.App["dahbahdas"].products = this.productsummary;

            //console.log(this.$store.state.product)
        }
        
    }
</script>

<style scoped> 
    .all{
        /* border: 2px solid black; */
        padding-left: 75px;
        padding-right: 75px;
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .imggg img{
        width: 300px;
        height: 600px;
        background-size: cover;
        border-radius: 10px;
    }
  
    .imggg{
        /* margin-left: 10px; */
        margin-top: 25px;
    }

    .imggg .btn{
        width: 300px;
        position: relative;
        border: 2px solid yellowgreen;
        color: green;
    }

    .imggg .btn:hover{
        width: 300px;
        position: relative;
        border: 2px solid green;
        background-color: green;
        color: white;
        transition: 0.5s;
    }

    .rot{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .rot:hover{
        background-color: white;
    }

    /* .imggg .btn1{
        background-color: white;
        border: none;
    }
    .imggg .btn1:hover{
        background-color: white;
    } */

     .imggg h6{
        color: black;
    }


    .all a{
       width: 300px;
        height: 400px; 
        text-decoration: none;
    }

    @media (max-width: 800px) {
    .all{
        /* width: 200px; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding-left: 0;
        padding-right: 0;
        width: 270px;
    }

    .imggg img{
        width: 270px;
        height: 500px;
        background-size: cover;
        border-radius: 10px;
    }

    .imggg .btn, .btn1{
        width: 270px;
        position: relative;
        border: 2px solid yellowgreen;
        color: green;
    }

    .imggg h6{
        color: black;
        width: 250px;
    }

    }
</style>