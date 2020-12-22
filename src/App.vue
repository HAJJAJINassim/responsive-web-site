<template>
  <div id="app">
   
     <Header/>
     <FirstSection/>
     <SectionMeals/>
     <SectionHowItWorks/>
     <SectionCities/>
     <SectionUserReview/>
     <SectionPlans/>
     <SectionForm/>
     <Footer/>
     
  </div>
</template>


<script>
import Header from './components/Header.vue';
import FirstSection from './components/FirstSection.vue';
import SectionMeals from './components/SectionMeals.vue';
import SectionHowItWorks from './components/SectionHowItWorks.vue';
import SectionCities from './components/SectionCities.vue';
import SectionUserReview from './components/SectionUserReview.vue';
import SectionPlans from './components/SectionPlans.vue';
import SectionForm from './components/SectionForm.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    FirstSection,
    SectionMeals,
    SectionHowItWorks,
    SectionCities,
    SectionUserReview,
    SectionPlans,
    SectionForm,
    Footer,
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
