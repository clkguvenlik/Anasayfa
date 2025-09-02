<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CLK Güvenlik Sistemleri</title>
  <meta name="description" content="Kamera, alarm, yangın, akıllı ev ve otomatik bariyer sistemleri – CLK Güvenlik Sistemleri" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      /* Palet: görseldeki tonlardan türetildi */
      --bg: #0f1720;           /* çok koyu lacivert/siyah */
      --ink: #111827;          /* başlık/metin koyu */
      --primary: #1f2b39;      /* lacivert gövde */
      --primary-600:#16202c;   /* lacivert koyu */
      --accent:#7fa4b9;        /* açık mavi-gri */
      --muted:#e6eef3;         /* açık arka plan */
      --white:#ffffff;
      --shadow: 0 12px 30px rgba(15,23,32,.18);
      --radius: 18px;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0}
    body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif;color:var(--ink);background:linear-gradient(180deg,#ffffff 0%, #f7fafc 100%)}
    a{color:inherit;text-decoration:none}
    img{max-width:100%;display:block;border-radius:14px}
    .container{width:min(1100px,92%);margin-inline:auto}

   /* Header */
    header{position:sticky;top:0;z-index:40;background:#ffffffd9;backdrop-filter:saturate(160%) blur(8px);border-bottom:1px solid #eef2f7}
    .nav{display:flex;gap:22px;align-items:center;justify-content:space-between;padding:14px 0}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{
      width:44px;height:44px;border-radius:12px;display:grid;place-items:center;
      background:linear-gradient(135deg,var(--primary) 0%, var(--accent) 100%);
      color:var(--white);font-weight:800;font-family:Montserrat,Inter,sans-serif;letter-spacing:.5px;
      box-shadow:var(--shadow)
    }
    .brand h1{font-family:Montserrat,Inter,sans-serif;font-size:20px;letter-spacing:.4px;margin:0}
    .menu{display:flex;gap:18px;font-weight:600}
    .menu a{padding:10px 12px;border-radius:12px}
    .menu a:hover{background:#eef4f8}

  /* Hero */
    .hero{position:relative;overflow:hidden;background:linear-gradient(160deg,#ffffff 0%,#f4f8fb 65%, #eaf2f7 100%);}
    .hero::before{
      content:"";position:absolute;inset:-20% -10% auto auto;height:82%;width:140%;
      background:
        linear-gradient(115deg,transparent 38%, var(--primary) 38% 52%, transparent 52%),
        linear-gradient(115deg,transparent 48%, var(--accent) 48% 66%, transparent 66%);
      opacity:.16;transform:rotate(-6deg);
    }
    .hero-inner{display:grid;grid-template-columns:1.2fr .9fr;gap:36px;align-items:center;padding:80px 0}
    .hero h2{font-family:Montserrat,Inter,sans-serif;font-size:46px;line-height:1.08;margin:0 0 16px;color:var(--primary-600)}
    .hero p{font-size:17px;color:#374151;margin:0 0 26px}
    .cta{display:flex;gap:14px;flex-wrap:wrap}
    .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;font-weight:700;border:1px solid transparent;box-shadow:var(--shadow)}
    .btn-primary{background:var(--primary);color:var(--white)}
    .btn-primary:hover{background:var(--primary-600)}
    .btn-soft{background:#e8f0f6;border-color:#d6e4ee}
    .btn-soft:hover{background:#dfeaf2}

  /* Bölüm başlıkları */
    .section{padding:70px 0}
    .section h3{font-family:Montserrat,Inter,sans-serif;font-size:30px;margin:0 0 20px;color:var(--primary-600)}
    .section p.lead{margin:8px 0 30px;color:#4b5563}
  /* Hizmetler */
    .grid{display:grid;gap:18px}
    .grid-3{grid-template-columns:repeat(3,1fr)}
    @media (max-width:900px){.hero-inner{grid-template-columns:1fr}.grid-3{grid-template-columns:1fr 1fr}}
    @media (max-width:620px){.grid-3{grid-template-columns:1fr}}

   .card{background:#ffffff;border:1px solid #e7edf3;border-radius:var(--radius);padding:18px;box-shadow:var(--shadow);transition:.2s transform ease}
    .card:hover{transform:translateY(-4px)}
    .card h4{margin:6px 0 8px;font-size:18px}
    .badge{display:inline-block;font-size:12px;border:1px solid #d5e1ea;background:#f1f7fb;color:#0f1720;border-radius:999px;padding:6px 10px;font-weight:700}

  /* Galeri */
    .gallery{columns:3 280px;column-gap:16px}
    .gallery figure{break-inside:avoid;padding:0;margin:0 0 16px;background:#fff;border:1px solid #e7edf3;border-radius:16px;box-shadow:var(--shadow)}
    .gallery figcaption{padding:10px 12px;color:#4b5563;font-size:14px}

  /* İletişim blok */
    .contact{background:linear-gradient(180deg,#f3f8fc, #eef5fa);border-top:1px solid #e7edf3}
    .contact .wrap{display:grid;grid-template-columns:1fr 1fr;gap:22px}
    @media (max-width:800px){.contact .wrap{grid-template-columns:1fr}}
    .info{background:#fff;border:1px solid #e7edf3;border-radius:var(--radius);padding:20px;box-shadow:var(--shadow)}
    .info li{margin:10px 0;color:#374151}

  /* Footer */
    footer{padding:26px 0;color:#6b7280;border-top:1px solid #e7edf3;background:#ffffff}

   /* Sabit Sosyal Butonlar */
    .floating{position:fixed;right:20px;bottom:20px;display:flex;flex-direction:column;gap:12px;z-index:60}
    .fab{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;box-shadow:var(--shadow);border:1px solid #d8e6ef;background:#ffffff}
    .fab:hover{transform:translateY(-2px)}

   /* Küçük yardımcı */
    .muted{color:#6b7280}
    .divider{height:1px;background:#e7edf3;margin:18px 0}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="brand">
        <div class="logo">CLK</div>
        <h1>Güvenlik Sistemleri</h1>
      </div>
      <nav class="menu">
        <a href="#anasayfa">Anasayfa</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#galeri">Galeri</a>
        <a href="#iletisim">İletişim</a>
      </nav>
    </div>
  </header>

  <main id="anasayfa" class="hero">
    <div class="container hero-inner">
      <div>
        <h2>Profesyonel <span style="color:var(--accent)">Güvenlik</span> Çözümleri</h2>
        <p> Kamera, alarm, yangın algılama, akıllı ev ve bariyer sistemlerinde keşiften kuruluma kadar uçtan uca hizmet. <strong>CLK Güvenlik Sistemleri</strong> ile mekânlarınız güvende. </p>
        <div class="cta">
          <a class="btn btn-primary" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20teklif%20almak%20istiyorum." target="_blank" rel="noopener">WhatsApp'tan Yaz</a>
          <a class="btn btn-soft" href="https://www.instagram.com/guvenlik_kamera_sistemleri/" target="_blank" rel="noopener">Instagram'ı Gör</a>
        </div>
        <p class="muted" style="margin-top:10px">7/24 Destek • Ücretsiz Keşif • Garantili Kurulum</p>
      </div>
      <div>
        <img src="images/kameralar.jpg">
      </div>
    </div>
  </main>

  <section id="hizmetler" class="section">
    <div class="container">
      <h3>Hizmetlerimiz</h3>
      <p class="lead">İhtiyacınıza özel projelendirme, kaliteli ekipman ve uzman montaj ile güvenliğinizi bir üst seviyeye taşıyoruz.</p>
      <div class="grid grid-3">
        <article class="card">
          <span class="badge">Kamera</span>
          <h4>IP & AHD Kamera Sistemleri</h4>
          <p>Yüksek çözünürlük, gece görüşü, uzaktan izleme ve kayıt çözümleri.</p>
        </article>
        <article class="card">
          <span class="badge">Yangın</span>
          <h4>Yangın Algılama & İhbar</h4>
          <p>Dedektör, siren ve kontrol panelleriyle EN standartlarında güvenlik.</p>
        </article>
        <article class="card">
          <span class="badge">Otomatik Bariyerler</span>
          <h4>Geçiş & Otopark Sistemleri</h4>
          <p>Site, otopark ve tesis girişleri için bariyer, road blocker ve mantar sistemler.</p>
        </article>
        <article class="card">
          <span class="badge">Elektrikli Şarj İstasyonu</span>
          <h4>EV Şarj Çözümleri</h4>
          <p>AC/DC şarj cihazları, kurulum ve işletme danışmanlığı.</p>
        </article>
        <article class="card">
          <span class="badge">Akıllı Kilit Kapı</span>
          <h4>Erişim Kontrol</h4>
          <p>Kart/şifre/biyometrik kilit sistemleri ve kapı otomasyonu.</p>
        </article>
        <article class="card">
          <span class="badge">Alarm</span>
          <h4>Hırsız & Çevre Güvenliği</h4>
          <p>Kablosuz/kablolu alarm, dedektörler ve 7/24 haber alma entegrasyonu.</p>
        </article>
        <article class="card">
          <span class="badge">Akıllı Ev</span>
          <h4>Otomasyon & Entegrasyon</h4>
          <p>Aydınlatma, iklimlendirme ve güvenliği tek uygulamadan yönetin.</p>
        </article>
        <article class="card">
          <span class="badge">Sistemleri</span>
          <h4>Projelendirme & Bakım</h4>
          <p>Keşif, çizim, kurulum sonrası bakım sözleşmeleri ve eğitim.</p>
        </article>
        <article class="card">
          <span class="badge">Destek</span>
          <h4>7/24 Teknik Destek</h4>
          <p>Uzak bağlantı ve yerinde servis ile hızlı çözüm.</p>
        </article>
      </div>
    </div>
  </section>

  <section id="galeri" class="section" style="padding-top:40px">
    <div class="container">
      <h3>Yaptığımız İşlerden</h3>
   

  <div class="gallery">
        <figure>
          <img src="images/proje-1.jpg" alt="Proje 1">
          <figcaption>Kamera kurulumu</figcaption>
        </figure>
        <figure>
          <img src="images/proje-2.jpg" alt="Proje 2">
          <figcaption>Yangın algılama</figcaption>
        </figure>
        <figure>
          <img src="images/proje-3.jpg" alt="Proje 3">
          <figcaption>Otopark bariyer</figcaption>
        </figure>
        <figure>
          <img src="images/proje-4.jpg" alt="Proje 4">
          <figcaption>Akıllı kilit</figcaption>
        </figure>
        <figure>
          <img src="images/proje-5.jpg" alt="Proje 5">
          <figcaption>Ev-Otopark şarj istasyonu</figcaption>
        </figure>
        <figure>
          <img src="images/proje-6.jpg" alt="Proje 6">
          <figcaption>Alarm ve sensör entegrasyonu</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section id="iletisim" class="section contact">
    <div class="container wrap">
      <div class="info">
        <h3>İletişim</h3>
        <div class="divider"></div>
        <ul style="list-style:none;padding:0;margin:0">
          <li><strong>Telefon / WhatsApp:</strong> <a href="https://wa.me/905368323458" target="_blank" rel="noopener">0536 832 34 58</a></li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/guvenlik_kamera_sistemleri/" target="_blank" rel="noopener">@guvenlik_kamera_sistemleri</a></li>
          <li><strong>E-posta:</strong> <a href="mailto:clkguvenliksistemleri@gmail.com">clkguvenliksistemleri@gmail.com</a></li>
        </ul>
      </div>
      <div class="info">
        <h3>Neden Biz?</h3>
        <div class="divider"></div>
        <p>Kurumsal yaklaşım, kaliteli ekipman ve uzman montaj ile uzun ömürlü çözümler sunuyoruz. Ücretsiz keşif ve projelendirme ile bütçenize uygun teklif hazırlıyoruz.</p>
        <ul>
          <li>Ücretsiz keşif ve danışmanlık</li>
          <li>Marka garantili ürünler</li>
          <li>Hızlı kurulum & 7/24 destek</li>
        </ul>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      © <span id="yil"></span> CLK Güvenlik Sistemleri • Tüm hakları saklıdır.
    </div>
  </footer>
  
  <!-- Sabit WhatsApp & Instagram butonları -->
  <div class="floating" aria-label="Hızlı erişim">
    <a class="fab" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" title="WhatsApp">
      <!-- WhatsApp SVG -->
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 0 5.38 0 12.01c0 2.12.56 4.17 1.63 5.99L0 24l6.19-1.62a11.97 11.97 0 0 0 5.82 1.48h.01c6.63 0 12.01-5.38 12.01-12.01 0-3.21-1.25-6.22-3.51-8.36ZM12.02 21.3h-.01a9.3 9.3 0 0 1-4.75-1.3l-.34-.2-3.68.96.98-3.59-.22-.37a9.27 9.27 0 1 1 8.02 4.5Zm5.38-6.94c-.29-.15-1.72-.85-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.69-1.61-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.49.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49l-.54-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.8 1.16 2.99.15.19 2 3.05 4.86 4.28.68.29 1.21.45 1.62.58.68.22 1.3.19 1.79.12.55-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" fill="#25D366"/></svg>
    </a>
    <a class="fab" href="https://www.instagram.com/guvenlik_kamera_sistemleri/" target="_blank" rel="noopener" title="Instagram">
      <!-- Instagram SVG -->
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4.61.21 1.05.46 1.51.92.46.46.71.9.92 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.21.61-.46 1.05-.92 1.51-.46.46-.9.71-1.51.92-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a3.9 3.9 0 0 1-1.51-.92 3.9 3.9 0 0 1-.92-1.51c-.16-.46-.35-1.26-.4-2.43C2.17 15.59 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.21-.61.46-1.05.92-1.51.46-.46.9-.71 1.51-.92.46-.16 1.26-.35 2.43-.4C8.42 2.17 8.8 2.16 12 2.16Zm0 1.73c-3.15 0-3.52.01-4.76.07-.99.05-1.53.21-1.89.35-.48.19-.83.42-1.19.78-.36.36-.59.71-.78 1.19-.14.36-.3.9-.35 1.89-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.99.21 1.53.35 1.89.19.48.42.83.78 1.19.36.36.71.59 1.19.78.36.14.9.3 1.89.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.99-.05 1.53-.21 1.89-.35.48-.19.83-.42 1.19-.78.36-.36.59-.71.78-1.19.14-.36.3-.9.35-1.89.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.99-.21-1.53-.35-1.89a3.04 3.04 0 0 0-.78-1.19 3.04 3.04 0 0 0-1.19-.78c-.36-.14-.9-.3-1.89-.35-1.24-.06-1.61-.07-4.76-.07Zm0 3.07a6.97 6.97 0 1 1 0 13.94 6.97 6.97 0 0 1 0-13.94Zm0 1.73a5.24 5.24 0 1 0 0 10.48 5.24 5.24 0 0 0 0-10.48Zm5.45-2.07a1.63 1.63 0 1 1 0 3.27 1.63 1.63 0 0 1 0-3.27Z" fill="#E1306C"/></svg>
    </a>
  </div>

  <script>
    // Yıl
    document.getElementById('yil').textContent = new Date().getFullYear();
  </script>
</body>
</html>
