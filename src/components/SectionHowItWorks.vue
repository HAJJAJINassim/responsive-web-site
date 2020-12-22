<template>
      <section class="how-work">
      <div class="row">
         <h2>
        How it works &mdash; simple 1, 2, 3 
      </h2>
      </div>
      <div class="row">
        <div class="col span-1-of-2 steps-box">
          <img src="../assets/image/app-iPhone.png" alt="" class="app-screen">
        </div>
        <div class="steps-box col span-1-of-2">
          <div class="step">
            <div>1</div>
            <p> Choose the subscription plan that best fits your needs and sign up today.</p>
          </div> <div class="step">
            <div>2</div>
            <p> Order your delicious meal using our mobile app or website. Or you can even call us!</p>
          </div> <div class="step">
            <div>3</div>
            <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
          </div>
          <a href="#" class="btn-app"><img src="../assets/image/download-app-android.png" alt=""></a>
        <a href="#" class="btn-app"><img src="../assets/image/download-app.svg" alt=""></a>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* how it works => steps */
.how-work{
background-color:#f4f4f4 ;
}

.steps-box:first-child{
  text-align: right;
  padding-right:3% ;
  margin-top: 30px;
}
.steps-box:last-child{
  padding-left: 3%;
  margin-top: 70px;
  
}
.app-screen{
  width: 40%;  
}
.step{
  margin-bottom: 50px;
}
.step:last-of-type{
  margin-bottom: 80px;
}
.step div{
  color: #e67e22;
  border: 2px solid #e67e22;
  display: inline-block;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  text-align: center;
  padding: 7px;
  font-size: 150%;
  float: left;
  margin-right: 20px;
}
.btn-app img{
  height: 50px;
  width: auto;
  margin-right: 10px ;
}
</style>