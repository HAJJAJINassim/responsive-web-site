<template>
    <div class="main">
        <div class="content"> content</div>
        <div class="footer">footer</div>    
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.main{
    margin: 0px;
    padding: 0px;
    display: grid;
    grid-template-rows: 1fr 60px;
    background-color:white;
    width: 100%;
    height: 100vh;
}
.main div{
    border: #e0e0e0 solid 1px;
}

.footer{
    background-color: rgb(248, 244, 244);
    height: 60px;
   
}
</style>