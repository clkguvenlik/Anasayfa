<!DOCTYPE html>
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
      --bg: #0f1720;
      --ink: #111827;
      --primary: #1f2b39;
      --primary-600:#16202c;
      --accent:#7fa4b9;
      --muted:#e6eef3;
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

    /* YENİ EKLENDİ: Mobil menü */
    #menu-toggle {
      display:none;
      font-size:26px;
      background:none;
      border:none;
      cursor:pointer;
    }
    @media (max-width:768px) {
      .menu {
        display:none;
        flex-direction:column;
        gap:12px;
        background:#fff;
        position:absolute;
        top:60px;
        right:10px;
        padding:14px;
        border:1px solid #e5e7eb;
        border-radius:12px;
        box-shadow:var(--shadow);
      }
      .menu.active { display:flex; }
      #menu-toggle { display:block; }
    }

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

    /* YENİ EKLENDİ: Hero mobil uyum */
    @media (max-width:768px){
      .hero-inner{grid-template-columns:1fr;text-align:center}
      .hero img{margin:20px auto;max-width:90%}
    }

    /* Bölüm başlıkları */
    .section{padding:70px 0}
    .section h3{font-family:Montserrat,Inter,sans-serif;font-size:30px;margin:0 0 20px;color:var(--primary-600)}
    .section p.lead{margin:8px 0 30px;color:#4b5563}

    /* Hizmetler */
    .grid{display:grid;gap:18px}
    .grid-3{grid-template-columns:repeat(3,1fr)}
    @media (max-width:900px){.grid-3{grid-template-columns:1fr 1fr}}
    @media (max-width:600px){.grid-3{grid-template-columns:1fr}}

    .card{background:#ffffff;border:1px solid #e7edf3;border-radius:var(--radius);padding:18px;box-shadow:var(--shadow);transition:.2s transform ease}
    .card:hover{transform:translateY(-4px)}
    .card h4{margin:6px 0 8px;font-size:18px}
    .badge{display:inline-block;font-size:12px;border:1px solid #d5e1ea;background:#f1f7fb;color:#0f1720;border-radius:999px;padding:6px 10px;font-weight:700}

    /* Galeri */
    .gallery{columns:3 280px;column-gap:16px}
    .gallery figure{break-inside:avoid;padding:0;margin:0 0 16px;background:#fff;border:1px solid #e7edf3;border-radius:16px;box-shadow:var(--shadow)}
    .gallery figcaption{padding:10px 12px;color:#4b5563;font-size:14px}
    @media (max-width:700px){.gallery{columns:1 100%}}

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

      <!-- YENİ EKLENDİ: Menü butonu -->
      <button id="menu-toggle">☰</button>

      <nav class="menu">
        <a href="#anasayfa">Anasayfa</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#galeri">Galeri</a>
        <a href="#iletisim">İletişim</a>
      </nav>
    </div>
  </header>

  <!-- (DEVAMI SENİN KODUNLA AYNI, sadece aşağıya script ekledim) -->

  <script>
    // Yıl
    document.getElementById('yil').textContent = new Date().getFullYear();

    // YENİ EKLENDİ: Mobil menü aç/kapa
    document.getElementById("menu-toggle").addEventListener("click", function() {
      document.querySelector(".menu").classList.toggle("active");
    });
  </script>
</body>
</html>
