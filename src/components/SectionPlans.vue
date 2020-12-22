<template>
      <section class="section-plans">
      <div class="row">
        <h2>Start eating healthy today</h2>
      </div>
      <div class="row">
        <div class="col span-1-of-3">
            <div class="plan-box">
              <div>
                <h3>Premium</h3>
                <p class="plan-price"> 399$ <span>/ meal</span></p>
                <p class="plan-price-meal">That’s only 13.30$ per meal</p>
              </div>

              <div>
                <ul>
                  <li><i class="fas fa-check"></i>1 meal every day</li>
                  <li><i class="fas fa-check"></i>Order 24/7</li>
                  <li><i class="fas fa-check"></i>Access to newest creations</li>
                  <li><i class="fas fa-check"></i>Free delivery</li>
                </ul>
              </div>
              <div>
                <a href="#" class="btn btn-ghost">Sing up now</a>
              </div>
            </div>
        </div>
        
        <div class="col span-1-of-3">
            <div class="plan-box">
              <div>
                <h3>Pro</h3>
                <p class="plan-price"> 149$ <span>/ meal</span></p>
                <p class="plan-price-meal">That’s only 14.90$ per meal</p>
              </div>

              <div>
                <ul>
                  <li><i class="fas fa-check"></i>1 meal 10 days/month</li>
                  <li><i class="fas fa-check"></i>Order 24/7</li>
                  <li><i class="fas fa-check"></i>Access to newest creations</li>
                  <li><i class="fas fa-check"></i>Free delivery</li>
                </ul>
              </div>
              <div>
                <a href="#" class="btn btn-ghost">Sing up now</a>
              </div>
            </div>
        </div> 
    
        <div class="col span-1-of-3">
            <div class="plan-box">
              <div>
                <h3>Starter</h3>
                <p class="plan-price"> 19$ <span>/ meal</span></p>
                <p class="plan-price-meal"> <pre> </pre> </p>
              </div>

              <div>
                <ul>
                  <li><i class="fas fa-check"></i>1 meal</li>
                  <li><i class="fas fa-check"></i>Order from 8 am to 12 pm</li>
                  <li><i class="fas fa-times"></i></li>
                  <li><i class="fas fa-check"></i>Free delivery</li>
                </ul>
              </div>
              <div>
                <a href="#" class="btn btn-ghost">Sing up now</a>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* section plans */
.section-plans{
  background-color: #f4f4f4 ;
}
.plan-box{
  background-color: #FFF;
  border-radius: 5px;
  width: 90%;
  margin-left: 5%;
  margin-top: 40px;
  box-shadow: 0 2px 2px rgb(228, 228, 228);
 
}
.plan-box div:last-child{
  text-align: center;
  border: none;  

}
.plan-box div:first-child{ 
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: rgb(250, 250, 249) ;
}
.plan-box div{
  padding: 15px;
  border-bottom: 1px solid #dfdfdf;
}
.plan-price{
  font-size: 300%;
  margin-bottom: 10px;
  font-weight: 100;
  color: #e67e22;
}
.plan-price span{
  font-size: 30%;
  font-weight: 300;
  
}
.plan-price-meal{
  font-size: 80%;

}
.plan-box ul{
  list-style: none;
}
.plan-box li{
  font-size: 90%;
  padding: 5px 0px;
}
.plan-box div ul li svg {
  display: inline-block;
  color: #e67e22;
  font-size: 90%;
  margin-right: 5%;
}

</style>