<template>
 
        <div class="carrd">
                
            <div class="homebrand">
                <div class="homelogo">

                </div>
                <div class="homebrandlink">
                    <router-link to="/">Home</router-link>
                        <!-- <a href="">Home</a> -->
                </div>

                <input class="form-control ms-2 me-2" type="search" placeholder="What are you shopping for">
                
            </div>

            <div class="homelinks">
                <ul style="margin-top: 4.5px">
                    <select name="" id="" style="border: none; align-self: center;">
                        <option value="">NGN - Naira</option>
                        <option value="">USA - Dollars</option>
                    </select>
                
                <li>
                    <a href="">About US</a>
                </li>
                <li>
                    <div class="dropdown">
                         <button class="dropbtn">Contact Us</button>
                         <div class="dropcontent">
                            <a href="">Twitter</a>
                         </div>
                    </div>
                </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li class="cart" > <a href="" class="fa fa-shopping-cart"></a></li>
                </ul>
            

            </div>

            <div class="logcart">
                <div class="log">
                    <a href="">Login</a>
                </div>
                <div class="cart">
                    <a href=""><li class="fa fa-shopping-cart"></li></a>
                </div>
            </div>

            
            
        </div>
<div>
    
</div>
</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<style scoped>

.homelinks{
    width: 50%;
}
.homebrand{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 750px
}
.homelogo, .homebrandlink{
    align-self: center;
    text-decoration: none;
    margin-right: 5px;
}
.homebrandlink a{
    text-decoration: none;
    color: Black;
}
.carrd{
    color: black;
    padding: 10px;
    padding-left: 5%;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.form-control{
    height: 40px;
    width: 100%;
    border-radius: 10px;
}

.homelinks ul{
    display: flex;
    flex-direction: row;
    margin-left: 15px;
}

.homelinks ul li{
    list-style-type: none;
    margin-left: 20px; 
    width: 140px;
    align-self: center;
}

.homelinks ul li a{
    padding-right: 5px;
    text-decoration: none;
    color: black;
    align-self: center;
}

.homelinks ul li a:hover{
    background-color: white;
    color: green;
    transition: 0.5s;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: white;
  color: black;
  padding: 10px;
  /* font-size: 16px; */
  border: none;
  cursor: pointer;
}

.dropcontent {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  transition: 0.4s;
}

.dropcontent a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropcontent {
  display: block;
  transition: 0.4s;
}

.logcart{
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 100px;
    display: none;
}

.cart{
    margin-left: 10px;
}

.cart a, .log a{
    text-decoration: none;
    color: black;
}

@media (max-width: 800px) {
  .form-control{
    width: 95px;
  }

  .logcart{
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 200px;
    display: flex;
}

.homelinks{
    display: none;
}


}

@media (max-width: 1100px){
    .form-control{
        /* width: 250px */
    }
}

</style>