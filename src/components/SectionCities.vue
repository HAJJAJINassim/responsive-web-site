<template>
      <section class="section-cities">
        <div class="row">
          <h2>We're currently in these cities</h2>
        </div>
        <div class="row">
          <ul class="cities-ul">
            <li class="col span-1-of-4">
              <div>
                <img class="city-img" src="../assets/image/lisbon-3.jpg" alt="">
              </div>
              <h3 class="city-title">Lisbon</h3>
              <div class="city-info">
                 <i class="city-icon fas fa-user"></i>
                 <p class="city-desc">1600+ happy eaters</p>
                 <i class="city-icon fas fa-star"></i>
                 <p class="city-desc">60+ top chefs</p>
                 <i class="city-icon fab fa-twitter"></i>
                 <a href="" class="city-desc">@omnifood_lx</a>
                
              </div>
            </li>

            <li class="col span-1-of-4">
              <div>
                <img class="city-img" src="../assets/image/san-francisco.jpg" alt="">
              </div>
              <h3 class="city-title">San Francisco</h3>
              <div class="city-info">
                <i class="city-icon fas fa-user"></i>   
                <p class="city-desc"> 3700+ happy eaters</p>
                <i class="city-icon fas fa-star"></i>   
                <p class="city-desc">160+ top chefs</p>
                <i class="city-icon fab fa-twitter"></i>
                <a href="" class="city-desc">@omnifood_sf</a>
                
              </div>
            </li>

            <li class="col span-1-of-4">
              <div>
                <img class="city-img" src="../assets/image/berlin.jpg" alt="">
              </div>
              <h3 class="city-title">Berlin</h3>
              <div class="city-info">
                <i class="city-icon fas fa-user">  </i> 
                <p class="city-desc">2300+ happy eaters</p>
                <i class="city-icon fas fa-star"></i>   
                <p class="city-desc">110+ top chefs</p>
                <i class="city-icon fab fa-twitter"></i>
                <a href="" class="city-desc">@omnifood_berlin</a>
              </div>
            </li>

            <li class="col span-1-of-4">
              <div>
                <img class="city-img" src="../assets/image/london.jpg" alt="">
              </div>
              <h3 class="city-title">London</h3>
              <div class="city-info">
                <i class="city-icon fas fa-user"></i>
                  <p class="city-desc">1200+ happy eaters</p>
                <i class="city-icon fas fa-star"></i>
                  <p class="city-desc">50+ top chefs</p>
                <i class="city-icon fab fa-twitter"></i>
                  <a href="" class="city-desc">@omnifood_london</a>
                
              </div>
            </li>
          </ul>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

.section-cities{
  
}
.cities-ul{
  text-decoration: none;
  list-style: none;
}
.cities-ul li div:first-child{
  margin: 10px 5px;
  
}
.city-img{
  height: 100%;
  width: 100%;
}
.city-title{
  margin: 30px 0px;
}
.city-info{
  margin-left: 8px;
}
.city-desc {
  margin : 17px 0px;
  font-size: 110%;
}

.city-icon{
  float: left;
  display: block;
  margin-right: 20px;
  color: #e67e22;
  width: 30px;
  font-size: 120%;
}
.cities-ul li div a{
  color: #e67e22;
  text-decoration: none;
  border-bottom: 2px solid orange;
  transition: border-bottom 0.5s;
}
.cities-ul li div a:hover{
  color: #e67e22;
  text-decoration: none;
  border-bottom:none;
}
</style>