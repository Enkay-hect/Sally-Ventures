<template>
    <div class="newsletter">
        <div class="news1">
            <h4 style="font-weight:bolder">NEWSLETTER SIGNUP</h4>
            <h4>Sign up for our e-mail and be the first to know of our special offers!</h4>
        </div>
        
        <div class="news2">
            <input  class="newstext"
                    type="text" 
                    style="" 
                    placeholder="Enter your phone number or email address">
            <button class='btn btn-primary' style="border-radius:0">Sign up</button>
        </div>
        
    </div>
    
</template>

<script>
    export default {
        name: 'newsletter',
        
    }
</script>

<style scoped>
.newsletter{
    height: 200px;
    width: 100%;
    margin-top: 150px;
    background-color: #eef0f8;  
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.news1{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.news2{
    display: flex;
    align-self: center;
    border-radius: 10px;
}

.newstext{
    width: 400px; 
    padding: 5px;
    background-color: white;
    border: #eef0f8;
}

@media (max-width: 800px) {
    .newstext{
        width: 180px;
        align-self: center;
    }   
}

</style>