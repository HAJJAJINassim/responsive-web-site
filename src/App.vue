<template>
  <div id="app">
   
     <Header/>
     <FirstSection/>
     
  </div>
</template>


<script>
import Header from './components/Header.vue';
import FirstSection from './components/FirstSection.vue';
export default {
  name: 'App',
  components: {
    Header,
    FirstSection
  },
  data:function(){
    return {
     
    }
  },
  methods:{
   
  }
}
</script>

<style>

</style>
