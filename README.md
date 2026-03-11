<!DOCTYPE html>
<html lang="tr">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CLK Güvenlik Sistemleri</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

<style>

*{box-sizing:border-box}

body{
font-family:Inter;
margin:0;
background:#f6f9fc;
color:#111;
}

.container{
width:min(1200px,92%);
margin:auto;
}

header{
background:white;
border-bottom:1px solid #eee;
position:sticky;
top:0;
z-index:50;
}

.nav{
display:flex;
align-items:center;
justify-content:space-between;
padding:16px 0;
}

.logo{
background:#1f2b39;
color:white;
width:45px;
height:45px;
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
font-weight:800;
}

.menu{
display:flex;
gap:20px;
font-weight:600;
}

.menu a{
text-decoration:none;
color:#333;
}

.hero{
padding:80px 0;
background:linear-gradient(160deg,#fff,#eef4f8);
}

.hero-inner{
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
align-items:center;
}

.hero h1{
font-size:46px;
margin:0 0 16px;
}

.hero p{
color:#555;
margin-bottom:20px;
}

.btn{
background:#1f2b39;
color:white;
padding:14px 18px;
border-radius:12px;
text-decoration:none;
font-weight:700;
display:inline-block;
}

.section{
padding:80px 0;
}

.grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

.card{
background:white;
padding:24px;
border-radius:16px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
transition:.3s;
}

.card:hover{
transform:translateY(-6px);
}

.slider{
overflow:hidden;
position:relative;
}

.slides{
display:flex;
gap:20px;
transition:.5s;
}

.slide{
min-width:320px;
background:white;
border-radius:16px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
cursor:pointer;
}

.slide img{
width:100%;
border-radius:16px 16px 0 0;
}

.slide p{
padding:10px;
}

.slider-btn{
position:absolute;
top:50%;
transform:translateY(-50%);
background:white;
border:none;
width:40px;
height:40px;
border-radius:50%;
cursor:pointer;
}

.prev{left:0}
.next{right:0}

.brands{
display:grid;
grid-template-columns:repeat(5,1fr);
gap:20px;
align-items:center;
text-align:center;
}

.brands img{
max-width:120px;
opacity:.7;
filter:grayscale(1);
}

.brands img:hover{
filter:none;
opacity:1;
}

.testimonials{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

.testimonial{
background:white;
padding:20px;
border-radius:16px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.contact{
background:#eef4f8;
}

.wrap{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.info{
background:white;
padding:24px;
border-radius:16px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

footer{
text-align:center;
padding:30px;
background:white;
border-top:1px solid #eee;
color:#666;
}

.lightbox{
position:fixed;
inset:0;
background:rgba(0,0,0,.8);
display:none;
align-items:center;
justify-content:center;
}

.lightbox img{
max-width:90%;
max-height:90%;
border-radius:10px;
}

@media(max-width:900px){

.hero-inner{grid-template-columns:1fr;text-align:center}
.grid{grid-template-columns:1fr}
.testimonials{grid-template-columns:1fr}
.wrap{grid-template-columns:1fr}
.brands{grid-template-columns:repeat(2,1fr)}

}

</style>

</head>

<body>

<header>

<div class="container nav">

<div style="display:flex;align-items:center;gap:10px">
<div class="logo">CLK</div>
<b>Güvenlik Sistemleri</b>
</div>

<nav class="menu">
<a href="#">Anasayfa</a>
<a href="#hizmetler">Hizmetler</a>
<a href="#projeler">Projeler</a>
<a href="#iletisim">İletişim</a>
</nav>

</div>

</header>

<section class="hero">

<div class="container hero-inner">

<div>

<h1>Profesyonel Güvenlik Sistemleri</h1>

<p>
Kamera, alarm, yangın algılama ve akıllı ev sistemlerinde profesyonel çözümler.
</p>

<a class="btn" href="https://wa.me/905368323458">WhatsApp Teklif Al</a>

</div>

<img src="images/hero-camera.png">

</div>

</section>

<section id="hizmetler" class="section">

<div class="container">

<h2>Hizmetlerimiz</h2>

<div class="grid">

<div class="card">IP Kamera Sistemleri</div>
<div class="card">Yangın Algılama</div>
<div class="card">Alarm Sistemleri</div>
<div class="card">Bariyer Sistemleri</div>
<div class="card">Akıllı Ev Otomasyonu</div>
<div class="card">Teknik Servis</div>

</div>

</div>

</section>

<section id="projeler" class="section">

<div class="container">

<h2>Projelerimiz</h2>

<div class="slider">

<button class="slider-btn prev">❮</button>

<div class="slides">

<div class="slide"><img src="images/proje-1.jpg"><p>Kamera Kurulumu</p></div>
<div class="slide"><img src="images/proje-2.jpg"><p>Yangın Algılama</p></div>
<div class="slide"><img src="images/proje-3.jpg"><p>Bariyer</p></div>
<div class="slide"><img src="images/proje-4.jpg"><p>Akıllı Kilit</p></div>

</div>

<button class="slider-btn next">❯</button>

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Kullandığımız Markalar</h2>

<div class="brands">

<img src="images/hikvision.png">
<img src="images/dahua.png">
<img src="images/paradox.png">
<img src="images/ajax.png">
<img src="images/bosch.png">

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Müşteri Yorumları</h2>

<div class="testimonials">

<div class="testimonial">Site kamera sistemimizi kurdular çok memnun kaldık.</div>
<div class="testimonial">Hızlı kurulum ve temiz işçilik.</div>
<div class="testimonial">7/24 destek veriyorlar.</div>

</div>

</div>

</section>

<section id="iletisim" class="section contact">

<div class="container wrap">

<div class="info">

<h3>İletişim</h3>

<p>Telefon: 0536 832 34 58</p>
<p>Email: clkguvenliksistemleri@gmail.com</p>
<p>Instagram: @guvenlik_kamera_sistemleri</p>

</div>

<div class="info">

<h3>Teklif Al</h3>

<form>

<input placeholder="Ad Soyad" style="width:100%;padding:10px;margin-bottom:10px">

<input placeholder="Telefon" style="width:100%;padding:10px;margin-bottom:10px">

<textarea placeholder="Mesaj" style="width:100%;padding:10px"></textarea>

</form>

</div>

</div>

</section>

<div class="lightbox" id="lightbox"><img></div>

<footer>

© <span id="yil"></span> CLK Güvenlik Sistemleri

</footer>

<script>

document.getElementById("yil").textContent=new Date().getFullYear()

const slides=document.querySelector(".slides")
const slide=document.querySelectorAll(".slide")

let index=0

function updateSlider(){
slides.style.transform=`translateX(-${index*340}px)`
}

setInterval(()=>{
index++
if(index>slide.length-2) index=0
updateSlider()
},4000)

document.querySelector(".next").onclick=()=>{
index++
if(index>slide.length-2) index=0
updateSlider()
}

document.querySelector(".prev").onclick=()=>{
index--
if(index<0) index=slide.length-2
updateSlider()
}

const lightbox=document.getElementById("lightbox")
const lightboxImg=lightbox.querySelector("img")

document.querySelectorAll(".slide img").forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
}
})

lightbox.onclick=()=>lightbox.style.display="none"

</script>

</body>
</html>
