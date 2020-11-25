<template>
    <div class="bar">       
        <a class="left" @click="openSideBar()"> COMPASS</a>
        <a class="right" href="">LOGOUT</a>
        <a class="right" href="">Compass 2020</a>
            
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            show:true
        }
    },
    methods:{
        openSideBar:function(){
            if (this.show) {
                document.getElementById('sidebar').style.display="none";
                this.show=false
            }else{
                document.getElementById('sidebar').style.display="block";
                this.show=true
            }
            
        }
    }
    
}
</script>

<style scoped>
.bar{
   
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #da1b1b;

   
    
}
.right{
    float: right;
}
.left {
    float: left;
} 
.bar a{
     line-height: 1rem;
    font-size: 1.05rem;
    
    text-decoration: none;
    color: whitesmoke;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 20px;
    margin: 7px;
}
.bar a:hover {
  background-color: #da4444;
  
}
</style>