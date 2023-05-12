<template>
     <div  class="productdisplay container">
        <div class="top">
            <div class="top1">
                <img :src="'/'+pdt.productImage" alt="" height="800" width="600">
            </div>

            <div class="top2">
                <h3 style="margin-bottom: 40px;">{{pdt.product}}</h3>
                <h3 style="margin-bottom: 40px;">{{pdt.price}}</h3>
                <h3 style="margin-bottom: 40px;">{{pdt.review}}</h3>


                <div class="inc">
                    <button @click="pdt.count -= 1 "><h4>-</h4></button>
                    <button disabled style="color: black">{{pdt.count}}</button>
                    <button @click="pdt.count += 1"><h4>+</h4></button>
                </div>

                <div class="share" style="display:flex; flex-direction: row;">
                    <div style="margin-right: 20px">WhatsApp</div>
                    <div>Twitter</div>
                </div>
                <h4 style="margin-bottom: 40px; margin-top: 20px;" class="tag">Tag: <a href="">Wears</a></h4>

                <button class="add" style="margin-right: 30px">Add to cart</button>
                <button class="con">Continue Shopping</button>


            </div>
            
        </div>



        <div class="bottom">
            <div class="bottom1">
                <div class="" style="margin-bottom: 20px;">
                    {{ pdt.product}}
                </div>
                <div class="">
                    Description here
                </div>
            </div>

            <div class="bottom2">
                <div class="review" style="margin-bottom: 20px;">
                    review(0)
                </div>

                <div class="rtext">
                    dsaf
                </div>

            </div>

        </div>

</div>


   
</template>

<script>
    export default {
        
        data() {
            return {
                pdt: {}
                
                //this.$route.params.product,
            }
        },
        mounted(){
            var id = this.$route.params.id;
            this.pdt = this.$store.state.products.filter(pdt => pdt.id == id)[0];


        }
    }


        
    
</script>

<style scoped>
     .productdisplay{
        height: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;
        /* border: 2px solid yellow; */
    }

    .inc{
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;
    }

    .inc button{
        border: none;
        padding: 15px;
        background-color: none;
    }
    .top{
        display: flex;
        flex-direction: row;
        /* border: 2px solid black; */
        padding: 5px;
        justify-content: space-between;
        height: 75%;
    }

    .top1 img{
        border-radius: 5px;
    }

    .top2{
        padding-top: 50px;
    }
    .top2  .add, .con{
        background-color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
    }

    .top2  .add:hover, .con:hover{
        background-color: green;
        border: none;
        transition: 0.4s;
    }

    .top1, .top2{
        height: 99%;
        width: 48%;
        /* border: 2px solid gray; */
    }

    .bottom{
        height: 25%;
        /* border: 2px solid green; */
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .bottom1, .bottom2{
        height: 99%;
        width: 48%;
        /* border: 2px solid gray; */
    }

    .tag a{
        text-decoration: none;
    }

    @media (max-width: 800px) {
    
    
}

</style>