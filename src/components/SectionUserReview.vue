<template>
  
    <section class="user-comment">
      <div class="row">
        <h2>Our customers can't live without us</h2>
      </div>
      <div class="row">
        <div class="col span-1-of-3">
          <blockquote>
            Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
            <cite> <img src="../assets/image/customer-1.jpg" alt="">Alberto Duncan</cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
            <cite> <img src="../assets/image/customer-2.jpg" alt="">Joana Silva</cite>
          </blockquote>
        </div>
        <div class="col span-1-of-3">
          <blockquote>
            I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
            <cite> <img src="../assets/image/customer-3.jpg" alt="">Milton Chapman</cite>
          </blockquote>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

/* customers Comment */


.user-comment{
  
  background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(../assets/image/back-customers.jpg);
  background-size: cover;
  color: white;
  background-attachment: fixed;
}

blockquote{
  padding: 2%;
  font-style: italic;
  line-height: 145%;
  position: relative;
  margin-top: 50px;
}
blockquote:before{
  content: '\201C';
  font-size: 400%;
  display: block;
  position: absolute;
  top: 7px;
  left: -10px;
}
cite{
  font:  80%;
  display: block;
  margin-top: 25px;
}
cite img{
  height: 45px;
  border-radius: 50%;
  vertical-align: middle;
}
</style>