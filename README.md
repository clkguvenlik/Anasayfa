<!DOCTYPE html>
<html lang="tr">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CLK Güvenlik Sistemleri</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>

<style>

*{margin:0;padding:0;box-sizing:border-box}

body{
font-family:Inter;
background:#f5f8fb;
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
font-weight:800;
font-size:22px;
color:#1f2b39;
}

.menu a{
margin-left:20px;
font-weight:600;
}

.hero{
height:90vh;
display:flex;
align-items:center;
color:white;
background:linear-gradient(-45deg,#1f2b39,#3b566e,#7fa4b9,#1f2b39);
background-size:400% 400%;
animation:gradient 12s ease infinite;
}

@keyframes gradient{
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}

.hero h1{
font-size:52px;
margin-bottom:20px;
}

.hero p{
font-size:18px;
margin-bottom:30px;
}

.btn{
background:white;
color:#1f2b39;
padding:14px 22px;
border-radius:10px;
font-weight:700;
display:inline-block;
}

.section{
padding:80px 0;
}

.stats{
background:white;
}

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
text-align:center;
}

.stats h2{
font-size:40px;
color:#1f2b39;
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

.brands{
display:flex;
flex-wrap:wrap;
gap:40px;
justify-content:center;
font-weight:700;
font-size:22px;
color:#64748b;
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

.form{
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
max-width:500px;
}

.form input,.form textarea{
width:100%;
padding:12px;
margin-bottom:12px;
border:1px solid #e5e7eb;
border-radius:8px;
}

footer{
text-align:center;
padding:30px;
background:white;
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
max-width:85%;
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

<div class="container">

<h1 data-aos="fade-up">Profesyonel Güvenlik Sistemleri</h1>

<p data-aos="fade-up" data-aos-delay="200">
Kamera, alarm, bariyer ve akıllı ev sistemlerinde profesyonel çözümler.
</p>

<a class="btn" href="https://wa.me/905368323458">WhatsApp ile Teklif Al</a>

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

<div class="card" data-aos="fade-up">
<h3>Kamera Sistemleri</h3>
<p>IP ve AHD kamera çözümleri</p>
</div>

<div class="card" data-aos="fade-up">
<h3>Yangın Algılama</h3>
<p>Yangın ihbar sistemleri</p>
</div>

<div class="card" data-aos="fade-up">
<h3>Bariyer Sistemleri</h3>
<p>Otopark giriş kontrol sistemleri</p>
</div>

<div class="card" data-aos="fade-up">
<h3>Akıllı Ev</h3>
<p>Otomasyon sistemleri</p>
</div>

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Projelerimiz</h2>

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

<h2>Kullandığımız Markalar</h2>

<div class="brands">

<div>HIKVISION</div>
<div>DAHUA</div>
<div>EZVIZ</div>
<div>TP-LINK</div>

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Müşteri Yorumları</h2>

<div class="testimonials">

<div class="testimonial">
<p>Kurulum çok hızlı yapıldı. Çok memnun kaldık.</p>
<strong>Ahmet Y.</strong>
</div>

<div class="testimonial">
<p>Kamera sistemi çok kaliteli. Tavsiye ederim.</p>
<strong>Mehmet K.</strong>
</div>

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Teklif Al</h2>

<div class="form">

<input placeholder="Ad Soyad">

<input placeholder="Telefon">

<textarea placeholder="Mesajınız"></textarea>

<button class="btn">Gönder</button>

</div>

</div>

</section>

<section class="section">

<div class="container">

<h2>Adres</h2>

<iframe
src="https://maps.google.com/maps?q=Bağcılar%20İstanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
width="100%" height="300" style="border:0;border-radius:12px;">
</iframe>

</div>

</section>

<footer>

© 2026 CLK Güvenlik Sistemleri

</footer>

<a class="whatsapp" href="https://wa.me/905368323458">WhatsApp</a>

<div class="lightbox" id="lightbox">
<img id="lightbox-img">
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>

AOS.init()

const images=document.querySelectorAll(".gallery img")
const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

images.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
}
})

lightbox.onclick=()=>{lightbox.style.display="none"}

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{
counter.innerText="0"
const update=()=>{
const target=+counter.getAttribute("data-target")
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
