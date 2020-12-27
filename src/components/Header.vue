<template>
<header id="head">
    <nav v-bind:class="{'nav-white':sticky}" class="">
        <div class="row">
            <img class="logo-white" src="../assets/image/logo-white.png" alt="">
            <img class="logo" src="../assets/image/logo.png" alt="">
            <ul class="main-navigation">
                <li><a href="">Food delivery</a></li>
                <li><a href="">How it works</a> </li>
                <li><a href="">Our cities</a></li>
                <li><a href="">Sign up</a></li>
            </ul>
            <a @click="ButtonShowHideNav" class ="mobile-icon" href="#"><i class="fas fa-bars"></i></a>

        </div>
    </nav>
    
    <div class="hero-text-box">
        <h1>Goodbye junk food.<br> Hello super healthy meals.</h1>
        <a class="btn btn-full"  @click="scrollto('section-plans')" href="#">I’m hungry</a>
        <a class="btn btn-ghost" @click="scrollto('section-features')" href="#">Show me more</a>
    </div>
</header>
  
</template>

<script>

export default {
    data:function(){
        return {
            sticky:false,
            Showhidenav:false
        };
    },
    methods:{
        // display and hide the sticky top Bar
        handlScroll(){
           var topScreen = window.pageYOffset;
            /*console.log(window.innerHeight);*/
            var seuil = document.querySelector(".section-features").offsetTop;
            if(topScreen >= seuil){
                this.sticky=true;
            }else{
                this.sticky=false;
            }
        },

        //scroll to a section
        scrollto(section){
             window.scrollTo(0,document.querySelector("."+section).offsetTop);
        },
        ShowHideNav(){ // triggers to show hide the nav depends on the width
            if(document.querySelector("body").offsetWidth < 768){
                document.querySelector(".main-navigation").style.display="none"
                 this.Showhidenav=false;

            }else{
                document.querySelector(".main-navigation").style.display="block"
            }
        },
        ButtonShowHideNav(){
            if(this.Showhidenav==true){
                 document.querySelector(".main-navigation").style.display="none";
                 this.Showhidenav=false;
            }else{
                 document.querySelector(".main-navigation").style.display="block";
                 this.Showhidenav=true;
            }
        }
    },

    created:function(){
        console.log("Created");
        window.addEventListener('scroll',this.handlScroll);
        window.addEventListener('resize', this.ShowHideNav);
        console.log(window.pageYOffset);
        this.ShowHideNav();
    },
    destroyed:function(){
        window.removeEventListener('scroll',this.handlScroll);
        window.removeEventListener('scroll',this.ShowHideNav);
    }
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
    transform: translate(-50%, -50%);
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
    text-align: center;
    margin: 30px 15px 0px 0px;
    width: 180px;
    font-size: 80%;
}
/*-------------------------------------- */
/* color #e67e22 */
/*-------------------------------------- */


.btn-full:link, .btn-full:visited, input[type=submit]{
    background: #e67e22;
    border: 1px solid #d6c1af;  
    font-weight: 100;
    transition: background-color 0.2s, border 0.5s;
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
   height: 115px;
   width: auto ;
   float: left;
   margin: 20px  0px;
   display: block;
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
.main-navigation li a:link,
.main-navigation li a:visited {
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
.mobile-icon{
    font-size: 200%;
    color: #fff;
    display: none;
    width: 50px;
    height: 50px;
    float: right;
    margin-top: 45px;
   

}


/* ------------ the sticky nav ------------ */


.logo{
   height: 50px;
   width: auto ;
   float: left;
   margin: 5px  0px;
   display: none;
}

.nav-white{
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
}
.nav-white .main-navigation li a:link,
.nav-white .main-navigation li a:visited {
    color: #555;
    padding: 8px 0;
   
}
.nav-white .main-navigation li a:active ,
.nav-white .main-navigation li a:hover{
    padding-bottom: 19px;
    border-bottom: 3px solid #e67e22;
}

.nav-white .logo {
    display: block;
}
.nav-white .logo-white {
    display: none;
}
.nav-white .row ul {
    margin-top: 15px;
}
/*
.nav-white .row ul li {
    display: block;
}
.nav-white .row ul {
    display: block;
    float: left;
}
.nav-white .mobile-icon{
     font-size: 200%;
    color: #000;
    display: block;
    border: 2px solid #000;
    width: 50px;
    height: 50px;
    float: right;
    margin-top: 45px;
    padding-left:9px ;
    padding-top: 6px;
}*/

</style>