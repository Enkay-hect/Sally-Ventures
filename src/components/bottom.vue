<template>
    <div class="footer">
        <div class="footer1">
            <h6 class="fotext">CONTACT US <br>+2341234567890</h6>
        </div>

        <div class="footer2">
            <h6>27 Thorborn Avenue, Off Montgomery road, Yaba. Lagos Nigeria. 100001</h6>
        </div>
        <div class="footer3">
            <div class="footer3-1">
                2021. <a href="" class="footlink">Get a free online store on Bumpa</a>
            </div>

            <div class="footer3-2">
                <a href="">Return Policy</a>   VISA
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'footer'
    }
</script>

<style scoped>
.footer{
    height: 200px;
    width: 100%;
    background-color: #161926;  
    display: flex;
    padding: 20px;
    color: white;
    flex-direction: column;
    justify-content: center;
}

.fotext{
    text-align: center;
}

.footer1{
    align-self: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.footer2{
    align-self: center;
    text-align: center;
}

.footer3{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.footer3-1 a, .footer3-2 a{
    color: white;
}

.footer3-1 a:hover, .footer3-2 a:hover{
   background-color: #161926;
}
</style>