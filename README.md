
<html lang="tr">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CLK Güvenlik Sistemleri</title>

<meta name="description" content="CLK Güvenlik Sistemleri Kamera, Alarm, Yangın, Bariyer ve Akıllı Ev Sistemleri">

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

<style>

*{margin:0;padding:0;box-sizing:border-box}

body{
font-family:Inter;
background:#f4f7fb;
color:#1f2937;
}

.container{
width:90%;
max-width:1200px;
margin:auto;
}

header{
background:white;
position:sticky;
top:0;
z-index:100;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:16px 0;
}

.logo{
font-size:22px;
font-weight:800;
color:#1f2b39;
}

.menu a{
margin-left:20px;
font-weight:600;
}

.hero{
height:90vh;
position:relative;
overflow:hidden;
}

.slide{
position:absolute;
width:100%;
height:100%;
background-size:cover;
background-position:center;
display:flex;
align-items:center;
color:white;
padding-left:10%;
transition:opacity 1s;
}

.slide h1{
font-size:52px;
margin-bottom:20px;
}

.slide p{
font-size:18px;
margin-bottom:30px;
}

.btn{
background:white;
color:#1f2b39;
padding:14px 22px;
border-radius:10px;
font-weight:700;
}

.section{
padding:80px 0;
}

.services{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:15px;
}

.gallery img{
width:100%;
border-radius:10px;
cursor:pointer;
}

.stats{
background:white;
text-align:center;
}

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
}

.stats h2{
font-size:40px;
}

.testimonials{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:20px;
}

.testimonial{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.whatsapp{
position:fixed;
right:20px;
bottom:20px;
background:#25D366;
color:white;
padding:15px 20px;
border-radius:50px;
font-weight:700;
}

footer{
background:white;
text-align:center;
padding:30px;
margin-top:50px;
}

.lightbox{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.8);
display:none;
align-items:center;
justify-content:center;
}

.lightbox img{
max-width:80%;
border-radius:10px;
}

</style>
</head>

<body>

<header>
<div class="container nav">

<div class="logo">CLK Güvenlik</div>

<nav class="menu">
<a href="#">Anasayfa</a>
<a href="#">Hizmetler</a>
<a href="#">Projeler</a>
<a href="#">İletişim</a>
</nav>

</div>
</header>

<section class="hero">

<div class="slide" style="background-image:url(images/proje-1.jpg)">
<div>
<h1>Profesyonel Güvenlik Sistemleri</h1>
<p>Kamera ve alarm çözümleri</p>
<a class="btn" href="https://wa.me/905368323458">Teklif Al</a>
</div>
</div>

<div class="slide" style="background-image:url(images/proje-2.jpg)">
<div>
<h1>Akıllı Ev Sistemleri</h1>
<p>Uzaktan kontrol teknolojileri</p>
</div>
</div>

<div class="slide" style="background-image:url(images/proje-3.jpg)">
<div>
<h1>Otopark Bariyer Sistemleri</h1>
<p>Site ve tesis güvenliği</p>
</div>
</div>

</section>

<section class="section stats">

<div class="container stats-grid">

<div>
<h2 class="counter" data-target="12">0</h2>
<p>Yıl Tecrübe</p>
</div>

<div>
<h2 class="counter" data-target="950">0</h2>
<p>Kurulum</p>
</div>

<div>
<h2 class="counter" data-target="500">0</h2>
<p>Müşteri</p>
</div>

<div>
<h2>7/24</h2>
<p>Destek</p>
</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Hizmetlerimiz</h2>

<div class="services">

<div class="card">
<h3>Kamera Sistemleri</h3>
<p>IP ve AHD çözümler</p>
</div>

<div class="card">
<h3>Yangın Algılama</h3>
<p>Yangın ihbar sistemleri</p>
</div>

<div class="card">
<h3>Bariyer Sistemleri</h3>
<p>Otopark giriş kontrol</p>
</div>

<div class="card">
<h3>Akıllı Ev</h3>
<p>Otomasyon çözümleri</p>
</div>

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Projeler</h2>

<div class="gallery">

<img src="images/proje-1.jpg">
<img src="images/proje-2.jpg">
<img src="images/proje-3.jpg">
<img src="images/proje-4.jpg">
<img src="images/proje-5.jpg">
<img src="images/proje-6.jpg">

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Müşteri Yorumları</h2>

<div class="testimonials">

<div class="testimonial">
<p>Çok kaliteli kurulum yaptılar.</p>
<strong>Ahmet Y.</strong>
</div>

<div class="testimonial">
<p>Kamera sistemi çok başarılı.</p>
<strong>Mehmet K.</strong>
</div>

</div>

</div>

</section>

<footer>

© 2026 CLK Güvenlik Sistemleri

</footer>

<a class="whatsapp" href="https://wa.me/905368323458">WhatsApp</a>

<div class="lightbox" id="lightbox">
<img id="lightbox-img">
</div>

<script>

let slides=document.querySelectorAll(".slide")
let index=0

setInterval(()=>{
slides.forEach(s=>s.style.opacity=0)
index++
if(index>=slides.length)index=0
slides[index].style.opacity=1
},4000)

const images=document.querySelectorAll(".gallery img")
const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

images.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
}
})

lightbox.onclick=()=>{
lightbox.style.display="none"
}

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{
const update=()=>{
const target=+counter.dataset.target
const c=+counter.innerText
const inc=target/100
if(c<target){
counter.innerText=Math.ceil(c+inc)
setTimeout(update,20)
}else{
counter.innerText=target
}
}
update()
})

</script>

</body>
</html>
