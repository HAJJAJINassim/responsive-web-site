<template>
  <section class="section-meals">
        <ul class="meals-showcase clearfix">
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/1.jpg" alt="Korean bibimbap with egg and vegetables">
            </figure>
          </li>
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/2.jpg" alt="Simple italian pizza with cherry tomatoes">
            </figure>
          </li>
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/3.jpg" alt="Chicken breast steak with vegetables ">
            </figure>
          </li>
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/4.jpg" alt="Autumn pumpkin soup">
            </figure>
          </li>
        </ul>  
        <ul class="meals-showcase clearfix">  
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/5.jpg" alt="Paleo beef steak with vegetables">
            </figure>
          </li>
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/6.jpg" alt="Healthy baguette with egg and vegetables">
            </figure>
          </li>
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/7.jpg" alt="Burger with cheddar and bacon">
            </figure>
          </li>
          <li>
            <figure class="fig-meal">
              <img src="../assets/image/8.jpg" alt="Granola with cherries and strawberries">
            </figure>
          </li>
         </ul>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.section-meals{
padding: 80px 0 0 0;
}
.meals-showcase{
  list-style: none;
  width: 100%;
  margin: 0px;
}
.meals-showcase li {
  display: block;
  float: left;
  margin: 0px;
  width: 25%;
}
.fig-meal{
  width: 100%;
  margin:0;
  overflow: hidden;
  background-color: #000;
  
}
.fig-meal img{
  opacity: 0.7;
  width: 100%;
  height: auto;
  transform: scale(1.15);
  transition: transform  0.5s, opacity 0.5s;
}
.fig-meal img:hover{
  transform: scale(1.05);
  opacity: 1;
}
.clearfix{
  zoom: 1;
}
.clearfix:after{
  content: '.';
  clear: both;
  display: block;
  height: 0px;
  visibility: hidden;
}

</style>