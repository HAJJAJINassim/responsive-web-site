<template>
  <footer>
      <div class="row">
          <div class="col span-1-of-2">
              <ul class="footer-nav">
                  <li><a href="">About us</a></li> 
                  <li><a href="">Blog</a></li>
                  <li><a href="">Press</a></li>
                  <li><a href="">iOS App</a></li>
                  <li><a href="">Android App</a></li>    
                </ul>
          </div>
          <div class="col span-1-of-2">
              <ul class="social-links">
                  <li><a href=""> <i class="fab fa-facebook-f"></i> </a></li>
                  <li><a href=""> <i class="fab fa-twitter"></i> </a></li>
                  <li><a href=""> <i class="fab fa-instagram"></i> </a></li>
                  <li><a href=""> <i class="fab fa-google-plus-g"> </i></a></li>
              </ul>
          </div>
      </div>
      <div class="row">
          <p>
              Copyright &copy; 2015 by Omnifood. All rights reserved
          </p>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    background-color: #333;
    padding: 50px;
    font-size: 80%;
}
.footer-nav{
list-style: none;
float: left;
}
.social-links{
list-style: none;
float: right;
}
.footer-nav li ,
.social-links li{
    display: inline-block;
    margin-right:20px ;
}
.social-links li:last-child{
    margin: 0;
}
.footer-nav li a:link,
.footer-nav li a:visited ,
.social-links li a:link,
.social-links li a:visited {
     text-decoration: none;
     border: none;
     color: rgb(144, 144, 144);
     transition: color 0.5s;
}
.footer-nav li a:hover,
.footer-nav li a:active{
    color: #fff;
}
footer p{
    margin-top: 30px;
    color: rgb(212, 212, 212);
    text-align: center;
    
}
</style>