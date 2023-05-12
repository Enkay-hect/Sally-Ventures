<template >
    
    <div  class="productdisplay container">
        <div class="top">
            <div class="top1">
                image here
                <img src="productImage" alt="">
            </div>

            <div class="top2">
                <h3>namme</h3>
                <h3>price</h3>
                <h3>review</h3>

                <h3>count</h3>
                <div class="share">
                    <div>W</div>
                    <div>T</div>
                </div>
                <h3>Tag <a href="">Wears</a></h3>

                <button>Add to cart</button>
                <button>Continue Shopping</button>


            </div>
            
        </div>



        <div class="bottom">
            <div class="bottom1">
                <div class="">
                    title
                </div>
                <div class="">
                    text
                </div>
            </div>

            <div class="bottom2">
                <div class="review">
                    review(0)
                </div>

                <div class="rtext">
                    dsaf
                </div>

            </div>

        </div>

</div>

<h2>
        nnnn
</h2>
<h2>
    afadsfdsf
</h2>

    
</template>

<script>
import navbar from '../components/navbar.vue';
import newsletter from '../components/newsletter.vue';
import bottom from '../components/bottom.vue'

    export default {
        name: 'productdetails',
        data() {
            return {
                //productsummary:{}
            }
        },

        // mounted(){
        //     this.id = this.$route.params.id;
        //     this.product = this.productsummary.find((product)=>product.id==this.id)
       // },
        components: {
            navbar, newsletter, bottom,
        },
        props: ['productsummary'],

    }
</script>

<style scoped>
    .productdisplay{
        height: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 2px solid yellow;
    }

    .top{
        display: flex;
        flex-direction: row;
        border: 2px solid black;
        padding: 5px;
        justify-content: space-between;
        height: 75%;
    }

    .top1, .top2{
        height: 99%;
        width: 48%;
        border: 2px solid gray;
    }

    .bottom{
        height: 25%;
        border: 2px solid green;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .bottom1, .bottom2{
        height: 99%;
        width: 48%;
        border: 2px solid gray;
    }


</style>


