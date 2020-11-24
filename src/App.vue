<template>
  <div id="app">
    <div class="container">
        <div class="header"> 
          <HeaderBar v-on:open-side-bar="openSideBar()"></HeaderBar> 
        </div>
        <div class="section">
          <div class="sidebar" id="sidebar"> <SideBar></SideBar> </div>
          <div class="main" id="main"> main </div>
        </div>

        <div class="footer">Footer</div>
    </div>
    
  </div>
</template>


<script>
import HeaderBar from './components/TopBar.vue';
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: {
    HeaderBar,
    SideBar
  },
  data:function(){
    return {
      showHide:"1"
    }
  },
  methods:{
    openSideBar:function(){
      if(this.showHide=="1"){
        document.getElementById("sidebar").style.width="0%";
        document.getElementById("main").style.width="100%";

        this.showHide="0";
      }else{
        document.getElementById("sidebar").style.width="20%";
        document.getElementById("main").style.width="80%";

        this.showHide="1";
      }
     
      
    }
  }
}
</script>

<style scoped>

.container{
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr 100px ;
  gap: 5px;
  padding: 5px;
  box-sizing: border-box;
}
.container div{
  padding: 0px;
  border: 1px solid black;
}
.header{
  grid-column-start: 1;
  grid-column-end: 6;
}
.section{
  grid-column-start:1;
  grid-column-end: 6;
  display: flex;
  direction: row;
}
.sidebar{
  background-color: blue;
  width: 20%;
}
.main{
  width: 80%;
  padding: 0px 0px 0px 5px;
  background-color: brown;
}
.footer{
  grid-column-start: 1;
  grid-column-end: 6;
}
</style>
