<template>
  <div id="app">
    <div class="container">
        <div class="header"><TopBar></TopBar></div>
        <div class="section">
          <SideBar></SideBar>
          <Main></Main>
        </div>
    </div>
  </div>
</template>


<script>
import TopBar from './components/TopBar.vue';
import Main from './components/Main.vue';
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: {
    TopBar,
    Main,
    SideBar
  },
  data:function(){
    return {
     
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>

.container{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  gap: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.header{
 background-color: blue;
}
.section{
  background-color: yellow;
  display: flex;
  direction: row;
  margin: 0px;
}

</style>
