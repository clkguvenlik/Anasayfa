<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CLK Güvenlik Sistemleri | Premium Kurumsal Güvenlik Çözümleri</title>
  <meta name="description" content="CLK Güvenlik Sistemleri; kamera, alarm, yangın algılama, bariyer, geçiş kontrol ve akıllı ev sistemlerinde kurumsal çözümler sunar.">
  <meta name="theme-color" content="#0f172a" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#f8fbff;
      --bg-soft:#f1f6fb;
      --panel:#ffffff;
      --panel-2:#fbfdff;
      --line:#e4edf5;
      --text:#1f2b39;
      --muted:#617286;
      --title:#142033;
      --accent:#7fa4b9;
      --accent-2:#a8cadb;
      --accent-3:#223449;
      --header:#0f172a;
      --header-2:#162033;
      --success:#25D366;
      --shadow:0 20px 50px rgba(16,24,40,.08);
      --shadow-soft:0 10px 25px rgba(16,24,40,.06);
      --radius:24px;
      --radius-sm:18px;
      --max:1240px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
      color:var(--text);
      background:
        radial-gradient(circle at 0% 0%, rgba(127,164,185,.10), transparent 22%),
        radial-gradient(circle at 100% 10%, rgba(168,202,219,.10), transparent 20%),
        linear-gradient(180deg,#ffffff 0%, #f8fbff 42%, #f3f8fd 100%);
      overflow-x:hidden;
    }

    a{text-decoration:none;color:inherit}
    img{display:block;max-width:100%;height:auto}
    .container{width:min(var(--max),92%);margin:auto}
    .section{padding:96px 0}
    .grid{display:grid;gap:22px}

    .card{
      background:linear-gradient(180deg,var(--panel) 0%, var(--panel-2) 100%);
      border:1px solid var(--line);
      border-radius:var(--radius);
      box-shadow:var(--shadow);
    }

    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:8px 12px;
      border-radius:999px;
      border:1px solid #d8e5f0;
      background:#f7fbff;
      color:#557089;
      font-size:13px;
      font-weight:800;
      letter-spacing:.2px;
    }

    .title{
      margin:18px 0 14px;
      font-size:clamp(30px,4vw,54px);
      line-height:1.03;
      font-weight:900;
      letter-spacing:-1.6px;
      color:var(--title);
    }

    .lead{
      margin:0 0 32px;
      max-width:760px;
      color:var(--muted);
      font-size:17px;
      line-height:1.85;
    }

    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:54px;
      padding:0 20px;
      border-radius:16px;
      border:1px solid transparent;
      font-size:15px;
      font-weight:800;
      transition:.25s ease;
      cursor:pointer;
    }

    .btn:hover{transform:translateY(-2px)}
    .btn-primary{
      background:linear-gradient(135deg,var(--accent-3),var(--accent));
      color:#fff;
      box-shadow:0 18px 38px rgba(127,164,185,.22);
    }

    .btn-secondary{
      background:#fff;
      color:var(--title);
      border-color:#dbe6f0;
      box-shadow:var(--shadow-soft);
    }

    .reveal{
      opacity:0;
      transform:translateY(24px);
      transition:opacity .75s ease, transform .75s ease;
    }

    .reveal.show{
      opacity:1;
      transform:none;
    }

    header{
      position:sticky;
      top:0;
      z-index:1000;
      background:rgba(15,23,42,.92);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      border-bottom:1px solid rgba(255,255,255,.06);
      box-shadow:0 10px 30px rgba(2,6,23,.18);
    }

    .nav{
      min-height:78px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      position:relative;
    }

    .brand{
      display:flex;
      align-items:center;
      gap:14px;
    }

    .logo{
      width:50px;
      height:50px;
      border-radius:14px;
      display:grid;
      place-items:center;
      background:linear-gradient(135deg,#203046,#7fa4b9);
      color:#fff;
      font-weight:900;
      letter-spacing:.7px;
      box-shadow:0 14px 32px rgba(127,164,185,.25);
    }

    .brand-meta strong{
      display:block;
      color:#fff;
      font-size:15px;
    }

    .brand-meta span{
      display:block;
      color:#9fb1c7;
      font-size:12px;
      margin-top:2px;
    }

    .menu{
      display:flex;
      align-items:center;
      gap:8px;
    }

    .menu a{
      padding:11px 14px;
      border-radius:12px;
      color:#dbe7f4;
      font-size:14px;
      font-weight:700;
    }

    .menu a:hover{
      background:rgba(255,255,255,.06);
      color:#fff;
    }

    .menu .cta{
      margin-left:6px;
      background:linear-gradient(135deg,var(--accent-3),var(--accent));
      color:#fff;
      box-shadow:0 14px 28px rgba(127,164,185,.18);
    }

    .menu-toggle{
      display:none;
      width:46px;
      height:46px;
      border-radius:12px;
      border:1px solid rgba(255,255,255,.12);
      background:rgba(255,255,255,.05);
      color:#fff;
      font-size:21px;
      cursor:pointer;
    }

    .hero{
      position:relative;
      overflow:hidden;
      padding:96px 0 56px;
      min-height:100vh;
      display:flex;
      align-items:center;
    }

    .hero-blur{
      position:absolute;
      border-radius:999px;
      filter:blur(70px);
      opacity:.5;
      pointer-events:none;
    }

    .hero-blur.one{
      width:320px;height:320px;
      background:rgba(127,164,185,.24);
      top:40px;left:-90px;
    }

    .hero-blur.two{
      width:260px;height:260px;
      background:rgba(168,202,219,.28);
      right:-70px;top:110px;
    }

    .hero-blur.three{
      width:340px;height:340px;
      background:rgba(34,52,73,.12);
      left:35%;bottom:-120px;
    }

    .hero-grid{
      position:relative;
      z-index:1;
      display:grid;
      grid-template-columns:1.08fr .92fr;
      gap:34px;
      align-items:center;
    }

    .hero-copy h1{
      margin:18px 0 16px;
      font-size:clamp(42px,6vw,86px);
      line-height:.95;
      letter-spacing:-2.6px;
      font-weight:900;
      color:var(--title);
      max-width:820px;
    }

    .hero-copy p{
      margin:0 0 28px;
      max-width:720px;
      color:var(--muted);
      font-size:18px;
      line-height:1.9;
    }

    .hero-actions{
      display:flex;
      flex-wrap:wrap;
      gap:14px;
      margin-bottom:22px;
    }

    .hero-tags{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
    }

    .hero-tags span{
      padding:10px 12px;
      border-radius:999px;
      border:1px solid #dbe6f0;
      background:#fff;
      color:#4b6279;
      font-size:13px;
      font-weight:700;
      box-shadow:var(--shadow-soft);
    }

    .hero-visual{
      position:relative;
      min-height:620px;
      overflow:hidden;
      border-radius:30px;
      border:1px solid var(--line);
      background:
        radial-gradient(circle at 85% 20%, rgba(168,202,219,.22), transparent 24%),
        linear-gradient(160deg,#ffffff 0%, #f3f8fd 48%, #edf5fb 100%);
      box-shadow:0 30px 70px rgba(16,24,40,.10);
      transition:transform .2s ease;
    }

    .hero-main-image{
      position:absolute;
      inset:18px 18px 160px 18px;
      border-radius:24px;
      overflow:hidden;
      border:1px solid #dce8f2;
      box-shadow:var(--shadow-soft);
    }

    .hero-main-image img{
      width:100%;
      height:100%;
      object-fit:cover;
    }

    .hero-float{
      position:absolute;
      padding:14px 16px;
      border-radius:18px;
      background:rgba(255,255,255,.92);
      border:1px solid #dbe6f0;
      color:var(--title);
      font-size:14px;
      font-weight:800;
      box-shadow:var(--shadow);
    }

    .float-1{left:18px;bottom:92px}
    .float-2{right:18px;top:18px}
    .float-3{right:18px;bottom:24px}

    .hero-mini-stats{
      position:absolute;
      left:18px;
      right:18px;
      bottom:18px;
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:12px;
    }

    .mini-stat{
      padding:18px;
      border-radius:20px;
      background:#fff;
      border:1px solid #dbe6f0;
      text-align:center;
      box-shadow:var(--shadow-soft);
    }

    .mini-stat strong{
      display:block;
      font-size:26px;
      color:var(--title);
      margin-bottom:6px;
      letter-spacing:-1px;
    }

    .mini-stat span{
      font-size:13px;
      color:var(--muted);
      font-weight:600;
    }

    .stats-strip{
      margin-top:26px;
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:16px;
    }

    .stat{
      padding:22px 18px;
      text-align:center;
    }

    .stat h3{
      margin:0 0 8px;
      font-size:34px;
      line-height:1;
      font-weight:900;
      color:var(--title);
      letter-spacing:-1px;
    }

    .stat p{
      margin:0;
      font-size:14px;
      font-weight:600;
      color:var(--muted);
    }

    .brand-strip{
      padding:18px 0;
      overflow:hidden;
      border-top:1px solid #e7eef5;
      border-bottom:1px solid #e7eef5;
      background:rgba(255,255,255,.65);
    }

    .brand-marquee{
      display:flex;
      gap:56px;
      min-width:max-content;
      white-space:nowrap;
      animation:marquee 24s linear infinite;
      color:#7a8ea4;
      font-weight:800;
      letter-spacing:1.2px;
      text-transform:uppercase;
    }

    @keyframes marquee{
      from{transform:translateX(0)}
      to{transform:translateX(-50%)}
    }

    .services-grid{grid-template-columns:repeat(3,1fr)}

    .service{
      padding:26px;
      transition:.25s ease;
    }

    .service:hover{
      transform:translateY(-6px);
      box-shadow:0 28px 60px rgba(16,24,40,.10);
    }

    .service-icon{
      width:58px;height:58px;
      border-radius:16px;
      display:grid;place-items:center;
      margin-bottom:18px;
      font-size:24px;
      background:linear-gradient(135deg,#eef6fb,#ffffff);
      border:1px solid #dce7f1;
      box-shadow:var(--shadow-soft);
    }

    .service h3{
      margin:0 0 10px;
      font-size:22px;
      color:var(--title);
    }

    .service p{
      margin:0 0 16px;
      color:var(--muted);
      line-height:1.8;
      font-size:15px;
    }

    .service ul{
      list-style:none;
      padding:0;
      margin:0;
      display:grid;
      gap:10px;
    }

    .service li{
      position:relative;
      padding-left:18px;
      color:#41586e;
      font-size:14px;
    }

    .service li::before{
      content:"";
      position:absolute;
      left:0;top:8px;
      width:8px;height:8px;
      border-radius:999px;
      background:linear-gradient(135deg,var(--accent),var(--accent-2));
      box-shadow:0 0 0 4px rgba(127,164,185,.12);
    }

    .split{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:24px;
      align-items:stretch;
    }

    .panel{
      padding:28px;
    }

    .feature-list{
      display:grid;
      gap:14px;
      margin-top:8px;
    }

    .feature{
      padding:18px;
      border-radius:18px;
      border:1px solid #e4edf5;
      background:#fff;
      box-shadow:var(--shadow-soft);
    }

    .feature strong{
      display:block;
      color:var(--title);
      margin-bottom:8px;
      font-size:17px;
    }

    .feature p{
      margin:0;
      color:var(--muted);
      line-height:1.75;
      font-size:14px;
    }

    .projects-grid{grid-template-columns:repeat(3,1fr)}

    .project{
      overflow:hidden;
      transition:.25s ease;
    }

    .project:hover{
      transform:translateY(-6px);
      box-shadow:0 28px 60px rgba(16,24,40,.10);
    }

    .project-media{
      aspect-ratio:16/11;
      overflow:hidden;
      border-bottom:1px solid #e8eef5;
      cursor:pointer;
    }

    .project-media img{
      width:100%;
      height:100%;
      object-fit:cover;
      transition:transform .45s ease;
    }

    .project:hover img{transform:scale(1.06)}

    .project-body{padding:20px}

    .project-badges{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-bottom:12px;
    }

    .project-badges span{
      padding:7px 10px;
      border-radius:999px;
      border:1px solid #dde7f0;
      background:#f7fbff;
      color:#577089;
      font-size:12px;
      font-weight:800;
    }

    .project h3{
      margin:0 0 10px;
      font-size:21px;
      color:var(--title);
    }

    .project p{
      margin:0;
      color:var(--muted);
      line-height:1.8;
      font-size:15px;
    }

    .trust-grid{grid-template-columns:repeat(3,1fr)}

    .trust-card{
      padding:26px;
    }

    .trust-card h3{
      margin:0 0 10px;
      font-size:24px;
      color:var(--title);
    }

    .trust-card p{
      margin:0;
      color:var(--muted);
      line-height:1.8;
    }

    .testimonials-grid{grid-template-columns:repeat(3,1fr)}

    .testimonial{
      padding:24px;
    }

    .testimonial p{
      margin:0 0 18px;
      color:#425970;
      line-height:1.9;
      font-size:15px;
    }

    .testimonial strong{
      display:block;
      color:var(--title);
      margin-bottom:4px;
    }

    .testimonial span{
      color:#7890a7;
      font-size:13px;
    }

    .faq-wrap{
      display:grid;
      grid-template-columns:.95fr 1.05fr;
      gap:24px;
      align-items:start;
    }

    .faq-list{display:grid;gap:14px}

    .faq-item{
      padding:22px;
      border-radius:20px;
      border:1px solid #e4edf5;
      background:#fff;
      box-shadow:var(--shadow-soft);
    }

    .faq-q{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      width:100%;
      border:none;
      background:none;
      padding:0;
      text-align:left;
      font:inherit;
      font-size:17px;
      font-weight:800;
      color:var(--title);
      cursor:pointer;
    }

    .faq-icon{
      width:34px;height:34px;
      border-radius:10px;
      display:grid;place-items:center;
      border:1px solid #dce8f2;
      background:#f8fbff;
      color:#5e7892;
      flex:0 0 auto;
    }

    .faq-a{
      max-height:0;
      overflow:hidden;
      transition:max-height .3s ease;
      color:var(--muted);
      line-height:1.85;
      font-size:15px;
    }

    .faq-item.active .faq-a{
      max-height:220px;
      margin-top:14px;
    }

    .cta-band{
      padding:34px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:24px;
      border-radius:28px;
      background:
        radial-gradient(circle at 20% 20%, rgba(127,164,185,.16), transparent 28%),
        linear-gradient(135deg,#ffffff 0%, #f4f9fd 100%);
      border:1px solid #dfe9f2;
      box-shadow:var(--shadow);
    }

    .cta-band h3{
      margin:0 0 10px;
      font-size:34px;
      color:var(--title);
      letter-spacing:-1px;
    }

    .cta-band p{
      margin:0;
      color:var(--muted);
      line-height:1.85;
      max-width:760px;
    }

    .contact-grid{
      display:grid;
      grid-template-columns:.92fr 1.08fr;
      gap:24px;
    }

    .contact-card{
      padding:28px;
    }

    .contact-card h3{
      margin:0 0 14px;
      font-size:28px;
      color:var(--title);
    }

    .contact-list{
      display:grid;
      gap:14px;
      margin-top:18px;
    }

    .contact-item{
      padding:16px 18px;
      border-radius:18px;
      background:#fff;
      border:1px solid #e4edf5;
      box-shadow:var(--shadow-soft);
    }

    .contact-item small{
      display:block;
      color:#7f96ad;
      font-size:12px;
      font-weight:700;
      text-transform:uppercase;
      margin-bottom:6px;
    }

    .contact-item strong,.contact-item a{
      color:var(--title);
      font-size:15px;
      line-height:1.6;
    }

    .map{
      margin-top:20px;
      overflow:hidden;
      border-radius:22px;
      border:1px solid #e4edf5;
      box-shadow:var(--shadow-soft);
    }

    .map iframe{
      width:100%;
      height:280px;
      border:0;
      display:block;
    }

    .form-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }

    .field{
      width:100%;
      min-height:54px;
      padding:0 16px;
      border-radius:16px;
      border:1px solid #dce7f1;
      background:#fff;
      color:var(--title);
      font:inherit;
      outline:none;
      transition:.2s ease;
      box-shadow:var(--shadow-soft);
    }

    textarea.field{
      min-height:140px;
      padding:16px;
      resize:vertical;
    }

    .field::placeholder{color:#90a5bb}
    .field:focus{
      border-color:#b6cede;
      box-shadow:0 0 0 4px rgba(127,164,185,.12);
    }

    .form-note{
      margin-top:14px;
      color:#8096ac;
      font-size:13px;
      line-height:1.7;
    }

    footer{
      padding:28px 0 44px;
      border-top:1px solid #e6eef5;
      background:rgba(255,255,255,.7);
    }

    .footer-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      color:#7c90a5;
      font-size:14px;
    }

    .footer-row a{color:#4e6780}

    .fab{
      position:fixed;
      right:18px;
      bottom:18px;
      z-index:900;
      width:62px;
      height:62px;
      border-radius:50%;
      display:grid;
      place-items:center;
      background:var(--success);
      color:#fff;
      font-size:28px;
      box-shadow:0 18px 40px rgba(37,211,102,.28);
    }

    .lightbox{
      position:fixed;
      inset:0;
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
      background:rgba(8,15,28,.72);
      z-index:1300;
      backdrop-filter:blur(8px);
      -webkit-backdrop-filter:blur(8px);
    }

    .lightbox.active{display:flex}

    .lightbox-inner{
      position:relative;
      width:min(1100px,96vw);
    }

    .lightbox img{
      width:100%;
      max-height:88vh;
      object-fit:contain;
      border-radius:24px;
      background:#fff;
      border:1px solid #e4edf5;
    }

    .lightbox-close{
      position:absolute;
      right:14px;
      top:14px;
      width:46px;height:46px;
      border-radius:14px;
      border:1px solid #dbe7f1;
      background:#fff;
      color:var(--title);
      font-size:20px;
      cursor:pointer;
      box-shadow:var(--shadow-soft);
    }

    @media (max-width:1100px){
      .hero-grid,.split,.faq-wrap,.contact-grid{
        grid-template-columns:1fr;
      }
      .stats-strip,.services-grid,.projects-grid,.trust-grid,.testimonials-grid{
        grid-template-columns:repeat(2,1fr);
      }
    }

    @media (max-width:860px){
      .menu-toggle{display:block}
      .menu{
        display:none;
        position:absolute;
        left:0;right:0;top:78px;
        flex-direction:column;
        align-items:stretch;
        padding:14px;
        border-radius:22px;
        background:rgba(15,23,42,.98);
        border:1px solid rgba(255,255,255,.08);
        box-shadow:0 25px 60px rgba(2,6,23,.25);
      }
      .menu.active{display:flex}
      .menu .cta{margin-left:0}
      .hero{padding-top:74px}
      .stats-strip,.services-grid,.projects-grid,.trust-grid,.testimonials-grid{
        grid-template-columns:1fr;
      }
      .hero-visual{min-height:500px}
      .hero-main-image{inset:16px 16px 152px 16px}
      .hero-mini-stats{grid-template-columns:1fr}
      .form-grid{grid-template-columns:1fr}
      .cta-band,.footer-row{flex-direction:column;align-items:flex-start}
    }

    @media (max-width:560px){
      .section{padding:78px 0}
      .hero-copy h1{letter-spacing:-1.5px}
      .hero-visual{min-height:440px}
      .float-1,.float-2,.float-3{font-size:12px}
      .stat h3{font-size:30px}
      .cta-band h3{font-size:28px}
    }
  </style>
</head>
<body>

  <header>
    <div class="container nav">
      <a href="#anasayfa" class="brand">
        <div class="logo">CLK</div>
        <div class="brand-meta">
          <strong>CLK Güvenlik Sistemleri</strong>
          <span>Premium Kurumsal Güvenlik Çözümleri</span>
        </div>
      </a>

      <button class="menu-toggle" id="menuToggle" aria-label="Menüyü aç/kapat">☰</button>

      <nav class="menu" id="menu">
        <a href="#anasayfa">Anasayfa</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#projeler">Projeler</a>
        <a href="#nedenbiz">Neden Biz?</a>
        <a href="#sss">SSS</a>
        <a href="#iletisim">İletişim</a>
        <a href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20teklif%20almak%20istiyorum." target="_blank" rel="noopener" class="btn cta">Teklif Al</a>
      </nav>
    </div>
  </header>

  <main id="anasayfa" class="hero">
    <div class="hero-blur one"></div>
    <div class="hero-blur two"></div>
    <div class="hero-blur three"></div>

    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <span class="eyebrow">• Güven veren modern kurumsal yapı</span>
        <h1>Güvenlik sisteminizi daha <span style="color:#5d7f97">premium</span> ve daha güçlü gösterelim.</h1>
        <p>
          Kamera, alarm, yangın algılama, bariyer, akıllı ev ve erişim kontrol projelerinde;
          keşiften kurulum ve teknik desteğe kadar markanıza yakışan, estetik ve profesyonel çözümler sunuyoruz.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20teklif%20almak%20istiyorum." target="_blank" rel="noopener">WhatsApp’tan Teklif Al</a>
          <a class="btn btn-secondary" href="#projeler">Projeleri Gör</a>
        </div>

        <div class="hero-tags">
          <span>Ücretsiz Keşif</span>
          <span>Garantili Kurulum</span>
          <span>7/24 Teknik Destek</span>
          <span>Kurumsal Çözüm</span>
        </div>
      </div>

      <div class="hero-visual reveal" id="parallaxCard">
        <div class="hero-main-image">
          <img src="images/hero-camera.png" alt="CLK Güvenlik profesyonel sistemler">
        </div>
        <div class="hero-float float-1">7/24 Teknik Destek</div>
        <div class="hero-float float-2">Kurumsal Projelendirme</div>
        <div class="hero-float float-3">Temiz & Garantili İşçilik</div>

        <div class="hero-mini-stats">
          <div class="mini-stat">
            <strong class="counter" data-target="12">0</strong>
            <span>Yıllık Tecrübe</span>
          </div>
          <div class="mini-stat">
            <strong class="counter" data-target="950">0</strong>
            <span>Kurulum</span>
          </div>
          <div class="mini-stat">
            <strong>7/24</strong>
            <span>Destek</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container stats-strip">
      <div class="stat card reveal">
        <h3 class="counter" data-target="500">0</h3>
        <p>Memnun Müşteri</p>
      </div>
      <div class="stat card reveal">
        <h3 class="counter" data-target="300">0</h3>
        <p>Aktif Sistem</p>
      </div>
      <div class="stat card reveal">
        <h3 class="counter" data-target="99">0</h3>
        <p>Memnuniyet Oranı</p>
      </div>
      <div class="stat card reveal">
        <h3>24/7</h3>
        <p>İletişim & Servis</p>
      </div>
    </div>
  </main>

  <section class="brand-strip">
    <div class="brand-marquee">
      <span>Hikvision</span>
      <span>Dahua</span>
      <span>Ajax</span>
      <span>Paradox</span>
      <span>Bosch</span>
      <span>Ezviz</span>
      <span>IP Kamera</span>
      <span>Yangın Sistemleri</span>
      <span>Akıllı Ev</span>
      <span>Geçiş Kontrol</span>
      <span>Hikvision</span>
      <span>Dahua</span>
      <span>Ajax</span>
      <span>Paradox</span>
      <span>Bosch</span>
      <span>Ezviz</span>
      <span>IP Kamera</span>
      <span>Yangın Sistemleri</span>
      <span>Akıllı Ev</span>
      <span>Geçiş Kontrol</span>
    </div>
  </section>

  <section id="hizmetler" class="section">
    <div class="container">
      <span class="eyebrow reveal">• Hizmetlerimiz</span>
      <h2 class="title reveal">Her alan için ayrı düşünülmüş profesyonel güvenlik çözümleri</h2>
      <p class="lead reveal">
        Konut, site, işyeri, ofis, depo ve ticari alanlara uygun sistemleri ihtiyaca göre planlıyor; yalnızca ürün değil, doğru kurgu ve uzun ömürlü performans sunuyoruz.
      </p>

      <div class="grid services-grid">
        <article class="service card reveal">
          <div class="service-icon">📷</div>
          <h3>Kamera Sistemleri</h3>
          <p>İç ve dış alanlarda yüksek çözünürlüklü izleme, kayıt ve uzaktan kontrol sağlayan profesyonel kamera altyapıları kuruyoruz.</p>
          <ul>
            <li>IP ve AHD sistem seçenekleri</li>
            <li>Gece görüşü ve mobil izleme</li>
            <li>DVR / NVR kayıt çözümleri</li>
          </ul>
        </article>

        <article class="service card reveal">
          <div class="service-icon">🔥</div>
          <h3>Yangın Algılama</h3>
          <p>Yangın riskini erkenden fark eden, uyarı ve yönlendirme sağlayan güvenli sistem kurguları hazırlıyoruz.</p>
          <ul>
            <li>Dedektör ve siren çözümleri</li>
            <li>Kontrol paneli entegrasyonu</li>
            <li>Kurumsal alanlara uygun yapı</li>
          </ul>
        </article>

        <article class="service card reveal">
          <div class="service-icon">🚧</div>
          <h3>Bariyer & Geçiş</h3>
          <p>Otopark, site ve işletme girişleri için kontrollü, dayanıklı ve estetik geçiş sistemleri uyguluyoruz.</p>
          <ul>
            <li>Otomatik bariyer sistemleri</li>
            <li>Kartlı / plaka tanıma altyapısı</li>
            <li>Yoğun kullanıma uygun kurulum</li>
          </ul>
        </article>

        <article class="service card reveal">
          <div class="service-icon">🔐</div>
          <h3>Alarm Sistemleri</h3>
          <p>Hırsızlık, ihlal ve çevre güvenliği risklerine karşı anlık uyarı veren alarm çözümleri sunuyoruz.</p>
          <ul>
            <li>Kablolu ve kablosuz alternatifler</li>
            <li>Anlık bildirim ve uyarı</li>
            <li>Konut ve işyeri uyumlu sistemler</li>
          </ul>
        </article>

        <article class="service card reveal">
          <div class="service-icon">🏠</div>
          <h3>Akıllı Ev</h3>
          <p>Aydınlatma, erişim, güvenlik ve kontrol sistemlerini tek merkezden yöneteceğiniz akıllı yaşam çözümleri kuruyoruz.</p>
          <ul>
            <li>Mobil uygulama ile kontrol</li>
            <li>Senaryo ve otomasyon desteği</li>
            <li>Modern yaşam alanı entegrasyonu</li>
          </ul>
        </article>

        <article class="service card reveal">
          <div class="service-icon">🛠️</div>
          <h3>Teknik Servis</h3>
          <p>Sistemler kurulduktan sonra da performansın korunması için teknik servis ve bakım desteği sağlıyoruz.</p>
          <ul>
            <li>Periyodik bakım ve kontrol</li>
            <li>Arıza tespit ve hızlı müdahale</li>
            <li>Yerinde ve uzaktan destek</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section id="nedenbiz" class="section">
    <div class="container split">
      <div class="panel card reveal">
        <span class="eyebrow">• Neden CLK?</span>
        <h2 class="title">Sizi yalnızca güvenli değil, daha profesyonel gösteren sistemler kuruyoruz</h2>
        <p class="lead">
          İyi bir güvenlik sistemi yalnızca çalışmaz; iyi görünür, kullanıcıyı yormaz ve işletmenize prestij katar. Bu yüzden her projeye marka değeri gözüyle bakıyoruz.
        </p>
      </div>

      <div class="panel card reveal">
        <div class="feature-list">
          <div class="feature">
            <strong>Kurumsal Görünüm</strong>
            <p>Kablolamadan ekipman yerleşimine kadar her detayın düzenli ve profesyonel görünmesine önem veriyoruz.</p>
          </div>
          <div class="feature">
            <strong>Doğru Ürün Kurgusu</strong>
            <p>Gereksiz maliyet oluşturmadan ihtiyacınıza uygun sistem planlıyor, uzun vadeli verim hedefliyoruz.</p>
          </div>
          <div class="feature">
            <strong>Temiz İşçilik</strong>
            <p>Kurulum kalitesi, sistemin ömrünü ve müşteri memnuniyetini doğrudan etkiler. Biz burada fark yaratıyoruz.</p>
          </div>
          <div class="feature">
            <strong>Destek Sürekliliği</strong>
            <p>Kurulum sonrası iletişimi koparmıyor, gerektiğinde hızlı teknik destek ile çözüm üretiyoruz.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projeler" class="section">
    <div class="container">
      <span class="eyebrow reveal">• Projelerimiz</span>
      <h2 class="title reveal">Yaptığımız işin kalitesi, markamızın en güçlü referansıdır</h2>
      <p class="lead reveal">
        Kurulum sonrası temiz görünüm, kararlı çalışma ve kullanıcı deneyimi bir araya geldiğinde ortaya uzun ömürlü ve güven veren projeler çıkar.
      </p>

      <div class="grid projects-grid">
        <article class="project card reveal">
          <div class="project-media"><img src="images/proje-1.jpg" alt="Kamera kurulumu" class="zoomable"></div>
          <div class="project-body">
            <div class="project-badges"><span>Kamera</span><span>Kurumsal Alan</span></div>
            <h3>Profesyonel Kamera Altyapısı</h3>
            <p>Kör nokta bırakmayan planlama, net görüntü kalitesi ve uzaktan izleme desteği ile güçlü güvenlik sistemi.</p>
          </div>
        </article>

        <article class="project card reveal">
          <div class="project-media"><img src="images/proje-2.jpg" alt="Yangın algılama" class="zoomable"></div>
          <div class="project-body">
            <div class="project-badges"><span>Yangın</span><span>İşyeri</span></div>
            <h3>Yangın Algılama Kurulumu</h3>
            <p>Erken uyarı sağlayan dedektör ve alarm bileşenlerinin düzenli ve kontrollü altyapı ile kurulduğu proje.</p>
          </div>
        </article>

        <article class="project card reveal">
          <div class="project-media"><img src="images/proje-3.jpg" alt="Bariyer sistemleri" class="zoomable"></div>
          <div class="project-body">
            <div class="project-badges"><span>Bariyer</span><span>Site Girişi</span></div>
            <h3>Geçiş & Otopark Kontrolü</h3>
            <p>Yoğun giriş çıkışlarda güvenli, dayanıklı ve estetik görünüm sağlayan kontrollü geçiş sistemi.</p>
          </div>
        </article>

        <article class="project card reveal">
          <div class="project-media"><img src="images/proje-4.jpg" alt="Akıllı kilit sistemi" class="zoomable"></div>
          <div class="project-body">
            <div class="project-badges"><span>Erişim</span><span>Akıllı Kilit</span></div>
            <h3>Akıllı Erişim Yönetimi</h3>
            <p>Şifre, kart ve mobil erişim desteği ile kullanıcı kolaylığını ve güvenliği aynı yapıda buluşturan çözüm.</p>
          </div>
        </article>

        <article class="project card reveal">
          <div class="project-media"><img src="images/proje-5.jpg" alt="Şarj istasyonu" class="zoomable"></div>
          <div class="project-body">
            <div class="project-badges"><span>EV Şarj</span><span>Konut</span></div>
            <h3>Şarj Altyapı Projesi</h3>
            <p>Elektrikli araç kullanıcılarına uygun, güvenli ve planlı enerji erişimi sağlayan düzenli uygulama.</p>
          </div>
        </article>

        <article class="project card reveal">
          <div class="project-media"><img src="images/proje-6.jpg" alt="Alarm entegrasyonu" class="zoomable"></div>
          <div class="project-body">
            <div class="project-badges"><span>Alarm</span><span>Entegrasyon</span></div>
            <h3>Alarm & Sensör Entegrasyonu</h3>
            <p>Merkezi yönetim mantığıyla çalışan, bildirim ve kontrol avantajı sunan güçlü alarm kurgusu.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow reveal">• Güven Unsurları</span>
      <h2 class="title reveal">Müşterinin kararını hızlandıran detaylar burada başlar</h2>
      <p class="lead reveal">
        İnsanlar yalnızca fiyata bakmaz; güven, düzen, görünüm, iletişim ve teslim kalitesine bakar. Bu alan tam da o etkiyi oluşturur.
      </p>

      <div class="grid trust-grid">
        <article class="trust-card card reveal">
          <h3>Keşif & Analiz</h3>
          <p>Alan yapısını görmeden ezbere çözüm önermiyoruz. İhtiyaca göre doğru sistemi planlıyoruz.</p>
        </article>
        <article class="trust-card card reveal">
          <h3>Premium Uygulama</h3>
          <p>Kurulumların sadece çalışmasına değil, profesyonel görünmesine de önem veriyoruz.</p>
        </article>
        <article class="trust-card card reveal">
          <h3>Satış Sonrası Destek</h3>
          <p>Kurulum bittikten sonra da ulaşılabilir teknik destek ile sistemi sürdürülebilir tutuyoruz.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow reveal">• Yorumlar</span>
      <h2 class="title reveal">Memnuniyet, en güçlü satış aracıdır</h2>

      <div class="grid testimonials-grid">
        <article class="testimonial card reveal">
          <p>“İşletmemiz için kurulan kamera ve alarm sistemi hem düzenli hem de çok profesyonel görünüyor. İletişim ve destek de çok iyi.”</p>
          <strong>Ahmet Y.</strong>
          <span>İşletme Sahibi</span>
        </article>

        <article class="testimonial card reveal">
          <p>“Site giriş sistemleri ve bariyer kurulumu sorunsuz tamamlandı. Baştan sona güven veren bir ekip çalışması vardı.”</p>
          <strong>Mehmet K.</strong>
          <span>Site Yönetimi</span>
        </article>

        <article class="testimonial card reveal">
          <p>“Ofis projemizde temiz işçilik ve estetik görünüm bizim için çok önemliydi. Beklentimizin üstünde bir sonuç aldık.”</p>
          <strong>Selin A.</strong>
          <span>Ofis Projesi</span>
        </article>
      </div>
    </div>
  </section>

  <section id="sss" class="section">
    <div class="container faq-wrap">
      <div class="reveal">
        <span class="eyebrow">• Sık Sorulan Sorular</span>
        <h2 class="title">Karar vermeden önce en çok bunlar soruluyor</h2>
        <p class="lead">
          Teklif süreci, keşif, kurulum süresi ve destek yapısı hakkında kısa ve net bilgi alın.
        </p>
      </div>

      <div class="faq-list reveal">
        <div class="faq-item">
          <button class="faq-q">
            <span>Ücretsiz keşif yapıyor musunuz?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Evet. Uygun projelerde yerinde keşif yaparak ihtiyaca göre sistem planlaması ve teklif hazırlıyoruz.</div>
        </div>

        <div class="faq-item">
          <button class="faq-q">
            <span>Kurulum süresi neye göre değişir?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Kurulum süresi alan büyüklüğü, cihaz sayısı ve proje detayına göre değişir. Keşif sonrası net bilgi verilir.</div>
        </div>

        <div class="faq-item">
          <button class="faq-q">
            <span>Mobil uygulama ile izleme mümkün mü?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Uygun sistemlerde telefon üzerinden canlı izleme, kayıt görüntüleme ve bildirim alma mümkündür.</div>
        </div>

        <div class="faq-item">
          <button class="faq-q">
            <span>Kurulum sonrası destek veriyor musunuz?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">Evet. Sistem tesliminden sonra bakım, arıza müdahalesi ve kullanım desteği sağlıyoruz.</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-band reveal">
        <div>
          <h3>Alanınızı daha güvenli, markanızı daha güçlü gösterelim.</h3>
          <p>İhtiyacınızı dinleyelim, doğru sistemi planlayalım ve size güven veren bir çözüm hazırlayalım.</p>
        </div>
        <a class="btn btn-primary" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20kurumsal%20bir%20teklif%20almak%20istiyorum." target="_blank" rel="noopener">Teklif İste</a>
      </div>
    </div>
  </section>

  <section id="iletisim" class="section">
    <div class="container contact-grid">
      <div class="contact-card card reveal">
        <span class="eyebrow">• İletişim</span>
        <h3>Bize hızlıca ulaşın</h3>

        <div class="contact-list">
          <div class="contact-item">
            <small>Telefon / WhatsApp</small>
            <a href="https://wa.me/905368323458" target="_blank" rel="noopener">0536 832 34 58</a>
          </div>
          <div class="contact-item">
            <small>E-posta</small>
            <a href="mailto:clkguvenliksistemleri@gmail.com">clkguvenliksistemleri@gmail.com</a>
          </div>
          <div class="contact-item">
            <small>Instagram</small>
            <a href="https://www.instagram.com/guvenlik_kamera_sistemleri/" target="_blank" rel="noopener">@guvenlik_kamera_sistemleri</a>
          </div>
          <div class="contact-item">
            <small>Adres</small>
            <strong>Göztepe Mah. 2395 Sk. No:7 D:6 Bağcılar / İstanbul</strong>
          </div>
        </div>

        <div class="map">
          <iframe
            src="https://maps.google.com/maps?q=Bağcılar%20İstanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="CLK Güvenlik konum haritası"></iframe>
        </div>
      </div>

      <div class="contact-card card reveal">
        <span class="eyebrow">• Teklif Formu</span>
        <h3>Projenizi anlatın, mesajı hazır oluşturalım</h3>

        <form id="offerForm">
          <div class="form-grid">
            <input class="field" id="name" type="text" placeholder="Ad Soyad" required>
            <input class="field" id="phone" type="tel" placeholder="Telefon" required>
          </div>
          <div class="form-grid" style="margin-top:14px">
            <input class="field" id="service" type="text" placeholder="İlgilendiğiniz hizmet">
            <input class="field" id="location" type="text" placeholder="İlçe / Lokasyon">
          </div>
          <div style="margin-top:14px">
            <textarea class="field" id="message" placeholder="Kısaca proje detayınızı yazın"></textarea>
          </div>
          <div style="margin-top:16px">
            <button class="btn btn-primary" type="submit">WhatsApp’tan Gönder</button>
          </div>
        </form>

        <p class="form-note">
          Form gönderildiğinde bilgileriniz WhatsApp mesajı olarak hazırlanır ve doğrudan bize iletebilirsiniz.
        </p>
      </div>
    </div>
  </section>

  <footer>
    <div class="container footer-row">
      <div>© <span id="year"></span> CLK Güvenlik Sistemleri • Tüm hakları saklıdır.</div>
      <div>
        <a href="#anasayfa">Anasayfa</a> •
        <a href="#hizmetler">Hizmetler</a> •
        <a href="#projeler">Projeler</a> •
        <a href="#iletisim">İletişim</a>
      </div>
    </div>
  </footer>

  <a class="fab" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" aria-label="WhatsApp">☎</a>

  <div class="lightbox" id="lightbox">
    <div class="lightbox-inner">
      <button class="lightbox-close" id="lightboxClose" aria-label="Kapat">✕</button>
      <img id="lightboxImage" src="" alt="Büyük görsel">
    </div>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();

    // mobil menü
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('active'));
    });

    // reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // sayaç
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target);
        if (!target || el.dataset.done === '1') return;

        let count = 0;
        const step = Math.max(1, Math.ceil(target / 80));

        const run = () => {
          count += step;
          if (count >= target) {
            el.textContent = target;
            el.dataset.done = '1';
            return;
          }
          el.textContent = count;
          requestAnimationFrame(run);
        };
        run();
      });
    }, { threshold: 0.45 });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // faq
    document.querySelectorAll('.faq-item').forEach(item => {
      item.querySelector('.faq-q').addEventListener('click', () => {
        const active = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!active) item.classList.add('active');
      });
    });

    // lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.classList.add('active');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      lightboxImage.src = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    // form -> whatsapp
    document.getElementById('offerForm').addEventListener('submit', function(e){
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value.trim();
      const location = document.getElementById('location').value.trim();
      const message = document.getElementById('message').value.trim();

      const text =
`Merhaba CLK Güvenlik,
Ben ${name}.
Telefon: ${phone}
İlgilendiğim hizmet: ${service || '-'}
Lokasyon: ${location || '-'}
Mesajım: ${message || '-'}

Bilgi ve teklif almak istiyorum.`;

      window.open('https://wa.me/905368323458?text=' + encodeURIComponent(text), '_blank');
    });

    // hafif premium parallax
    const card = document.getElementById('parallaxCard');

    if (card && window.matchMedia('(min-width: 861px)').matches) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rx = ((y / rect.height) - 0.5) * -5;
        const ry = ((x / rect.width) - 0.5) * 6;

        card.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      });
    }
  </script>
</body>
</html>
