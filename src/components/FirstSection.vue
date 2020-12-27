<template>
    <section class="section-features">
      <div  class="row">
        <h2>Get food fast &mdash; not fast food.</h2>
        <p class="long-copy">
          Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!
        </p>
      </div>
        <div class="row animate__animated" v-bind:class="{'animate__fadeInUp':fadeUp}" >
          <div class="col span-1-of-4 box-inside">
            <h3>
              Up to 365 days/year
            </h3>
            <p>
              Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
            </p>
          </div>
          <div class="col span-1-of-4 box-inside">
            <h3>Ready in 20 minutes</h3>
            <p>
              You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
            </p>
          </div>
          <div class="col span-1-of-4 box-inside">
            <h3>100% organic</h3>
            <p>
              All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!
            </p>
          </div>
          <div class="col span-1-of-4 box-inside">
            <h3>Order anything</h3>
            <p>
              We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!
            </p>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  data(){
    return {
      fadeUp:false
    }
  },
  methods:{
    fadeup:function () {
        var topScreen = window.pageYOffset;
        /*console.log(window.innerHeight);*/
        var seuil = document.querySelector(".section-features").offsetTop;
        if(topScreen >= seuil){
            this.fadeUp=true;
        }
    }
  },
  created:function () {
      window.addEventListener('scroll',this.fadeup);
      console.log(window.pageYOffset);
  }

}
</script>

<style>

section{
  padding: 80px 0;
}

h2{
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 3px;
}
h2:after{
  display: block;
  height: 2px;
  background-color: #e67e22 ;
  content: "  ";
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
}
.long-copy{
  line-height: 145%;
  width: 80%;
  margin-left: 10%;
  letter-spacing: 0.25px;
  margin-bottom: 75px;
}

.box-inside{
  padding: 0 1%;
}
h3{
  font-size: 110%;
  margin-bottom: 15px;
}
.box-inside{
  line-height: 145%;
  font-size: 90%;
}
/* for the faded animation */
.animate__animated{
  opacity: 0;
}

</style>