<template>
<header id="head">
    <nav>
        <div class="row">
            <img class="logo-white" src="../assets/image/logo-white.png" alt="">
            <ul class="main-navigation">
                <li><a href="">Food delivery</a></li>
                <li><a href="">How it works</a> </li>
                <li><a href="">Our cities</a></li>
                <li><a href="">Sign up</a></li>
            </ul>

        </div>
    </nav>
    <div class="hero-text-box">
        <h1>Goodbye junk food.<br> Hello super healthy meals.</h1>
        <a class="btn btn-full" href="#">I’m hungry</a>
        <a class="btn btn-ghost" href="#">Show me more</a>
    </div>
</header>
  
</template>

<script>

export default {

}
</script>

<style>

header{
  background-image: linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.9)) ,url('../assets/image/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
}
.hero-text-box{
    background-color: goldvis;
    position: absolute;
    width: 1140xp;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -50%);
}
h1,h2,h3{
    
    font-weight: 300;
    text-transform: uppercase;
    
}
h1{
    margin-top:0;
    margin-bottom: 20px;
    color:#fff;
    font-size: 220%;
    word-spacing: 4px;
    letter-spacing: 3px;
}


.btn,input[type=submit]{
    display: inline-block;
    padding: 10px 30px;
    font-weight: 500;
    text-decoration: none;
    color:white;
    border-radius: 20px;
    width: 210px;
    text-align: center;
    margin: 30px 15px 0px 0px;
}
/*-------------------------------------- */
/* color #e67e22 */
/*-------------------------------------- */


.btn-full:link, .btn-full:visited, input[type=submit]{
    background: #e67e22;
    border: 1px solid #d6c1af;  
    font-weight: 100;
    transition: background-color 0.2s, border 0.5s;
    font-size: 90%;
}
.btn-full:hover,input[type=submit]:hover{
    background: #f7b731;
}
.btn-ghost{
    border: 1px solid #e67e22 ;
    color: #e67e22 ;
    transition: background-color 0.5s, border 0.5s, color 0.5s;
}

.btn-ghost:hover, .btn-ghost:active{
    background:#fc5c65;
    color: #ebe6dc;
    border: 1px solid #dbd4ce;  
}
.logo-white{
   height: 135px;
   width: auto ;
   float: left;
   margin-top: 20px;
}
.main-navigation{
    margin-top: 65px;
    float: right;
    list-style: none;
}
.main-navigation li {
    display: inline-block;
    margin-left: 40px;
}
.main-navigation li a:link,.main-navigation li a:visited {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90% ;
    border-bottom: 2px solid #e67e22 transparent;
    padding: 8px 0;
    transition:  border-bottom 0.2s;

}
.main-navigation li a:active , .main-navigation li a:hover{
    border-bottom: 2px solid #e67e22;
}
</style>