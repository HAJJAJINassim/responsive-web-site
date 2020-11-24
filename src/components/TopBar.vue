<template>
    <div class="bar">       
        <a class="left" @click="openSideBar()"> COMPASS</a>
        <a class="right" href="">LOGOUT</a>
        <a class="right" href="">Compass 2020</a>
            
    </div>
</template>
<script>
export default {
    methods:{
        openSideBar:function(){
            this.$emit("open-side-bar");
            
        }
    }
    
}
</script>

<style scoped>
.bar{
   
    height: 100%;
    padding: 0;
    margin: 0;
    background-color:#da1b1b;
   
    
}
.right{
    float: right;
}
.left {
    float: left;
} 
.bar a{
    padding: 0px 10px;
    text-decoration: none;
    color: #f2f2f2;
    text-align: center;
    font-size: 12px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 23px 10px;
    margin: 4px;
}
.bar a:hover {
  background-color: #da4444;
  
}
</style>