<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CLK Güvenlik Sistemleri</title>
  <style>
    /* Genel stil */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: #111827;
      color: #fff;
      position: relative;
    }
    header h1 {
      margin: 0;
      font-size: 20px;
    }
    .menu {
      display: flex;
      gap: 20px;
    }
    .menu a {
      color: #fff;
      text-decoration: none;
    }
    #menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 26px;
      color: #fff;
      cursor: pointer;
    }

    /* Hero */
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 40px 20px;
      background: #f9fafb;
    }
    .hero img {
      max-width: 100%;
      border-radius: 10px;
    }

    /* Grid */
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 20px;
    }
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    /* Footer */
    footer {
      background: #111827;
      color: #fff;
      text-align: center;
      padding: 20px;
    }

    /* Responsive ayarlar */
    @media (max-width: 768px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .hero img {
        margin-top: 20px;
        max-width: 90%;
      }
      .grid-3 {
        grid-template-columns: 1fr;
      }
      #menu-toggle {
        display: block;
      }
      .menu {
        display: none;
        flex-direction: column;
        gap: 12px;
        background: #1f2937;
        position: absolute;
        top: 60px;
        right: 10px;
        padding: 14px;
        border-radius: 12px;
      }
      .menu.active {
        display: flex;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>CLK Güvenlik Sistemleri</h1>
    <button id="menu-toggle">☰</button>
    <nav class="menu">
      <a href="#hizmetler">Hizmetler</a>
      <a href="#galeri">Galeri</a>
      <a href="#iletisim">İletişim</a>
    </nav>
  </header>

  <section class="hero">
    <div>
      <h2>Profesyonel Güvenlik Çözümleri</h2>
      <p>Ev ve iş yeriniz için kamera ve güvenlik sistemlerinde uzman ekibimizle yanınızdayız.</p>
    </div>
    <img src="images/kamera.jpg" alt="Güvenlik Kamera">
  </section>

  <section id="hizmetler">
    <h2 style="text-align:center; margin-top:30px;">Hizmetlerimiz</h2>
    <div class="grid-3">
      <div class="card">📹 Kamera Sistemleri</div>
      <div class="card">🚪 Alarm Sistemleri</div>
      <div class="card">🔐 Kartlı Geçiş</div>
    </div>
  </section>

  <section id="galeri">
    <h2 style="text-align:center; margin-top:30px;">Galeri</h2>
    <div class="grid-3">
      <div class="card"><img src="images/ornek1.jpg" style="max-width:100%; border-radius:8px;"></div>
      <div class="card"><img src="images/ornek2.jpg" style="max-width:100%; border-radius:8px;"></div>
      <div class="card"><img src="images/ornek3.jpg" style="max-width:100%; border-radius:8px;"></div>
    </div>
  </section>

  <section id="iletisim">
    <h2 style="text-align:center; margin-top:30px;">İletişim</h2>
    <div style="text-align:center; padding:20px;">
      <p>Telefon: 0555 555 55 55</p>
      <p>Email: info@clkguvenliksistemleri.com</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%" height="300" style="border:0; border-radius:16px;"
        allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 CLK Güvenlik Sistemleri</p>
  </footer>

  <script>
    document.getElementById("menu-toggle").addEventListener("click", function() {
      document.querySelector(".menu").classList.toggle("active");
    });
  </script>
</body>
</html>
