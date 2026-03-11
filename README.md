<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CLK Güvenlik Sistemleri | Profesyonel Güvenlik Çözümleri</title>
  <meta name="description" content="CLK Güvenlik Sistemleri; kamera, alarm, yangın algılama, bariyer, akıllı ev ve geçiş kontrol çözümlerinde profesyonel kurulum ve teknik destek sunar." />
  <meta name="theme-color" content="#0f172a" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#08111f;
      --bg-2:#0f172a;
      --panel:#0f1b31cc;
      --panel-solid:#101c31;
      --line:rgba(255,255,255,.08);
      --line-soft:rgba(255,255,255,.05);
      --text:#e5eefb;
      --muted:#9fb0c8;
      --white:#ffffff;
      --accent:#7fa4b9;
      --accent-2:#98c1d9;
      --accent-dark:#223246;
      --success:#25D366;
      --shadow:0 20px 60px rgba(0,0,0,.30);
      --radius:22px;
      --radius-sm:16px;
      --max:1200px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
      background:
        radial-gradient(circle at 10% 20%, rgba(127,164,185,.20), transparent 32%),
        radial-gradient(circle at 90% 10%, rgba(152,193,217,.18), transparent 28%),
        radial-gradient(circle at 50% 100%, rgba(67,97,116,.18), transparent 35%),
        linear-gradient(180deg, #07101d 0%, #0a1323 45%, #0c1527 100%);
      color:var(--text);
      overflow-x:hidden;
    }

    a{color:inherit;text-decoration:none}
    img{display:block;max-width:100%;height:auto}
    .container{width:min(var(--max), 92%);margin-inline:auto}
    .section{padding:96px 0}
    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:8px 12px;
      border:1px solid var(--line);
      border-radius:999px;
      background:rgba(255,255,255,.03);
      color:#c8d6ea;
      font-size:13px;
      font-weight:700;
      letter-spacing:.3px;
    }
    .section-title{
      font-size:clamp(30px, 4vw, 46px);
      line-height:1.05;
      margin:18px 0 14px;
      font-weight:900;
      letter-spacing:-1.2px;
    }
    .section-lead{
      max-width:760px;
      color:var(--muted);
      font-size:17px;
      line-height:1.75;
      margin:0 0 34px;
    }

    .glass{
      background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
      border:1px solid var(--line);
      box-shadow:var(--shadow);
      backdrop-filter:blur(16px);
      -webkit-backdrop-filter:blur(16px);
    }

    header{
      position:sticky;
      top:0;
      z-index:1000;
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      background:rgba(7,16,29,.55);
      border-bottom:1px solid rgba(255,255,255,.05);
    }

    .nav{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:20px;
      min-height:78px;
    }

    .brand{
      display:flex;
      align-items:center;
      gap:14px;
      min-width:0;
    }

    .logo{
      width:48px;
      height:48px;
      border-radius:14px;
      display:grid;
      place-items:center;
      background:linear-gradient(135deg, #1d2a3d 0%, #7fa4b9 100%);
      color:#fff;
      font-weight:900;
      letter-spacing:.8px;
      box-shadow:0 10px 30px rgba(127,164,185,.25);
      flex:0 0 auto;
    }

    .brand-text{
      display:flex;
      flex-direction:column;
      gap:2px;
      min-width:0;
    }

    .brand-text strong{
      font-size:15px;
      color:#fff;
      line-height:1.1;
      white-space:nowrap;
    }

    .brand-text span{
      font-size:12px;
      color:#9fb0c8;
      white-space:nowrap;
    }

    .menu{
      display:flex;
      align-items:center;
      gap:8px;
    }

    .menu a{
      color:#d7e3f3;
      padding:11px 14px;
      border-radius:12px;
      font-size:14px;
      font-weight:700;
      transition:.25s ease;
    }

    .menu a:hover{
      background:rgba(255,255,255,.06);
      color:#fff;
    }

    .menu-cta{
      margin-left:8px;
      padding:12px 16px;
      border-radius:14px;
      background:linear-gradient(135deg, var(--accent-dark), var(--accent));
      color:#fff;
      font-weight:800;
      box-shadow:0 14px 30px rgba(127,164,185,.20);
    }

    .menu-toggle{
      display:none;
      width:46px;
      height:46px;
      border-radius:12px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
      color:#fff;
      cursor:pointer;
      font-size:21px;
    }

    .hero{
      position:relative;
      overflow:hidden;
      padding:88px 0 56px;
    }

    .hero-blur{
      position:absolute;
      border-radius:999px;
      filter:blur(60px);
      opacity:.45;
      pointer-events:none;
    }

    .hero-blur.one{
      width:340px;height:340px;
      background:#7fa4b9;
      top:30px;left:-80px;
      animation:float1 8s ease-in-out infinite;
    }

    .hero-blur.two{
      width:280px;height:280px;
      background:#98c1d9;
      right:-70px;top:50px;
      animation:float2 9s ease-in-out infinite;
    }

    .hero-blur.three{
      width:380px;height:380px;
      background:#27435c;
      left:30%;bottom:-160px;
      animation:float3 10s ease-in-out infinite;
    }

    @keyframes float1{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(18px)}
    }
    @keyframes float2{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-18px)}
    }
    @keyframes float3{
      0%,100%{transform:translateX(0)}
      50%{transform:translateX(24px)}
    }

    .hero-grid{
      position:relative;
      z-index:1;
      display:grid;
      grid-template-columns:1.1fr .9fr;
      align-items:center;
      gap:34px;
    }

    .hero-copy h1{
      margin:18px 0 16px;
      font-size:clamp(42px, 6vw, 78px);
      line-height:.97;
      letter-spacing:-2.6px;
      font-weight:900;
      color:#fff;
      max-width:760px;
    }

    .hero-copy p{
      max-width:690px;
      margin:0 0 28px;
      color:#b8c7db;
      font-size:18px;
      line-height:1.8;
    }

    .hero-actions{
      display:flex;
      flex-wrap:wrap;
      gap:14px;
      margin-bottom:22px;
    }

    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      min-height:54px;
      padding:0 20px;
      border-radius:16px;
      font-weight:800;
      font-size:15px;
      border:1px solid transparent;
      transition:transform .22s ease, box-shadow .22s ease, background .22s ease;
      will-change:transform;
    }

    .btn:hover{transform:translateY(-2px)}
    .btn-primary{
      color:#fff;
      background:linear-gradient(135deg, #203146 0%, #7fa4b9 100%);
      box-shadow:0 20px 40px rgba(127,164,185,.22);
    }
    .btn-secondary{
      color:#e7eef8;
      background:rgba(255,255,255,.04);
      border-color:var(--line);
    }

    .hero-points{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
    }

    .hero-points span{
      padding:10px 12px;
      border-radius:999px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.04);
      color:#d6e2f1;
      font-size:13px;
      font-weight:700;
    }

    .hero-card{
      position:relative;
      padding:18px;
      border-radius:28px;
    }

    .hero-visual{
      position:relative;
      overflow:hidden;
      border-radius:24px;
      min-height:560px;
      border:1px solid var(--line);
      background:
        linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03)),
        radial-gradient(circle at 80% 20%, rgba(152,193,217,.18), transparent 22%),
        linear-gradient(140deg, #101c31 0%, #15233b 40%, #0d172b 100%);
      box-shadow:var(--shadow);
    }

    .hero-photo{
      position:absolute;
      inset:18px 18px 150px 18px;
      border-radius:22px;
      overflow:hidden;
      border:1px solid var(--line);
    }

    .hero-photo img{
      width:100%;
      height:100%;
      object-fit:cover;
    }

    .floating-badge{
      position:absolute;
      padding:14px 16px;
      border-radius:18px;
      font-size:14px;
      font-weight:800;
      color:#fff;
      border:1px solid var(--line);
      background:rgba(12,22,39,.72);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      box-shadow:0 18px 40px rgba(0,0,0,.25);
    }

    .badge-1{left:22px;bottom:86px}
    .badge-2{right:22px;top:22px}
    .badge-3{right:22px;bottom:22px}

    .stats-strip{
      margin-top:26px;
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:16px;
    }

    .stat{
      padding:22px 18px;
      border-radius:20px;
      text-align:center;
    }

    .stat h3{
      margin:0 0 8px;
      font-size:34px;
      line-height:1;
      font-weight:900;
      letter-spacing:-1px;
      color:#fff;
    }

    .stat p{
      margin:0;
      font-size:14px;
      color:#b4c3d8;
      font-weight:600;
    }

    .marquee-wrap{
      border-top:1px solid var(--line-soft);
      border-bottom:1px solid var(--line-soft);
      background:rgba(255,255,255,.025);
      overflow:hidden;
    }

    .marquee{
      display:flex;
      gap:56px;
      white-space:nowrap;
      padding:18px 0;
      min-width:max-content;
      animation:marquee 24s linear infinite;
      color:#a8b8cd;
      font-weight:800;
      letter-spacing:1.5px;
      text-transform:uppercase;
    }

    @keyframes marquee{
      from{transform:translateX(0)}
      to{transform:translateX(-50%)}
    }

    .grid-3{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:22px;
    }

    .service-card{
      padding:26px;
      border-radius:24px;
      transition:transform .25s ease, border-color .25s ease;
    }

    .service-card:hover{
      transform:translateY(-6px);
      border-color:rgba(152,193,217,.28);
    }

    .icon{
      width:58px;
      height:58px;
      border-radius:16px;
      display:grid;
      place-items:center;
      margin-bottom:18px;
      font-size:24px;
      background:linear-gradient(135deg, rgba(127,164,185,.18), rgba(255,255,255,.04));
      border:1px solid var(--line);
      box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
    }

    .service-card h3{
      margin:0 0 10px;
      font-size:22px;
      color:#fff;
      letter-spacing:-.5px;
    }

    .service-card p{
      margin:0 0 16px;
      color:var(--muted);
      line-height:1.75;
      font-size:15px;
    }

    .service-card ul{
      list-style:none;
      padding:0;
      margin:0;
      display:grid;
      gap:10px;
    }

    .service-card li{
      color:#d7e2f0;
      font-size:14px;
      padding-left:20px;
      position:relative;
    }

    .service-card li::before{
      content:"";
      position:absolute;
      left:0;top:8px;
      width:8px;height:8px;
      border-radius:99px;
      background:linear-gradient(135deg, var(--accent), var(--accent-2));
      box-shadow:0 0 0 4px rgba(127,164,185,.13);
    }

    .projects-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:22px;
    }

    .project{
      overflow:hidden;
      border-radius:24px;
      transition:transform .25s ease, border-color .25s ease;
    }

    .project:hover{
      transform:translateY(-6px);
      border-color:rgba(152,193,217,.28);
    }

    .project-media{
      aspect-ratio: 16 / 11;
      overflow:hidden;
      border-bottom:1px solid var(--line);
      cursor:pointer;
    }

    .project-media img{
      width:100%;
      height:100%;
      object-fit:cover;
      transition:transform .45s ease;
    }

    .project:hover img{transform:scale(1.05)}

    .project-body{
      padding:20px;
    }

    .project-top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      margin-bottom:10px;
    }

    .project-tag{
      font-size:12px;
      padding:8px 10px;
      border-radius:999px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
      color:#dce6f3;
      font-weight:800;
    }

    .project-body h3{
      margin:0 0 10px;
      font-size:21px;
      color:#fff;
      letter-spacing:-.4px;
    }

    .project-body p{
      margin:0 0 16px;
      color:var(--muted);
      line-height:1.7;
      font-size:15px;
    }

    .project-meta{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
    }

    .project-meta span{
      font-size:12px;
      color:#c8d5e7;
      border:1px solid var(--line);
      padding:7px 10px;
      border-radius:999px;
      background:rgba(255,255,255,.025);
    }

    .split{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:24px;
      align-items:stretch;
    }

    .process-card,.cta-panel,.info-card,.faq-item,.testimonial,.contact-card,.form-card{
      border-radius:24px;
      padding:26px;
    }

    .process-list{
      display:grid;
      gap:14px;
      margin-top:10px;
    }

    .process-step{
      display:grid;
      grid-template-columns:56px 1fr;
      gap:16px;
      align-items:start;
      padding:18px;
      border-radius:18px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.025);
    }

    .step-no{
      width:56px;
      height:56px;
      border-radius:16px;
      display:grid;
      place-items:center;
      font-weight:900;
      color:#fff;
      background:linear-gradient(135deg, rgba(127,164,185,.32), rgba(255,255,255,.05));
      border:1px solid var(--line);
    }

    .process-step h4{
      margin:4px 0 8px;
      font-size:18px;
      color:#fff;
    }

    .process-step p{
      margin:0;
      color:var(--muted);
      line-height:1.7;
      font-size:14px;
    }

    .testimonial-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:22px;
    }

    .testimonial p{
      margin:0 0 18px;
      color:#d7e3f2;
      line-height:1.85;
      font-size:15px;
    }

    .testimonial strong{
      display:block;
      color:#fff;
      font-size:16px;
      margin-bottom:4px;
    }

    .testimonial span{
      color:#9fb0c8;
      font-size:13px;
    }

    .faq{
      display:grid;
      gap:14px;
    }

    .faq-item{
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
    }

    .faq-q{
      width:100%;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:14px;
      background:none;
      border:none;
      color:#fff;
      font:inherit;
      text-align:left;
      cursor:pointer;
      padding:0;
      font-weight:800;
      font-size:17px;
    }

    .faq-a{
      max-height:0;
      overflow:hidden;
      transition:max-height .3s ease;
      color:var(--muted);
      line-height:1.8;
      font-size:15px;
    }

    .faq-item.active .faq-a{
      max-height:220px;
      margin-top:14px;
    }

    .faq-icon{
      flex:0 0 auto;
      width:34px;height:34px;
      border-radius:10px;
      display:grid;place-items:center;
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
      font-size:18px;
    }

    .cta-band{
      padding:34px;
      border-radius:28px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:22px;
      background:
        radial-gradient(circle at 20% 20%, rgba(127,164,185,.22), transparent 28%),
        linear-gradient(135deg, rgba(127,164,185,.10), rgba(255,255,255,.03));
      border:1px solid var(--line);
      box-shadow:var(--shadow);
    }

    .cta-band h3{
      margin:0 0 10px;
      font-size:34px;
      color:#fff;
      letter-spacing:-1px;
    }

    .cta-band p{
      margin:0;
      color:#adc0d6;
      max-width:720px;
      line-height:1.75;
    }

    .contact-grid{
      display:grid;
      grid-template-columns:.95fr 1.05fr;
      gap:24px;
    }

    .info-card h3,.form-card h3{
      margin:0 0 14px;
      font-size:28px;
      color:#fff;
      letter-spacing:-.8px;
    }

    .info-list{
      display:grid;
      gap:14px;
      margin-top:18px;
    }

    .info-item{
      padding:16px 18px;
      border-radius:18px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
    }

    .info-item small{
      display:block;
      color:#8ea4bf;
      margin-bottom:6px;
      font-size:12px;
      font-weight:700;
      letter-spacing:.2px;
      text-transform:uppercase;
    }

    .info-item strong,.info-item a{
      color:#fff;
      font-size:15px;
      line-height:1.5;
    }

    .form-row{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }

    .field{
      width:100%;
      min-height:54px;
      padding:0 16px;
      border-radius:16px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.04);
      color:#fff;
      outline:none;
      font:inherit;
      transition:border-color .2s ease, background .2s ease;
    }

    textarea.field{
      min-height:140px;
      padding:16px;
      resize:vertical;
    }

    .field::placeholder{color:#93a7c0}
    .field:focus{
      border-color:rgba(152,193,217,.5);
      background:rgba(255,255,255,.06);
    }

    .form-note{
      margin-top:14px;
      color:#8ea4bf;
      font-size:13px;
      line-height:1.7;
    }

    .map-frame{
      margin-top:22px;
      border-radius:22px;
      overflow:hidden;
      border:1px solid var(--line);
      min-height:280px;
      box-shadow:var(--shadow);
    }

    .map-frame iframe{
      display:block;
      width:100%;
      height:100%;
      min-height:280px;
      border:0;
      filter:grayscale(.15) contrast(1.05);
    }

    footer{
      padding:28px 0 44px;
      border-top:1px solid var(--line-soft);
      background:rgba(255,255,255,.02);
    }

    .footer-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      color:#8ea4bf;
      font-size:14px;
    }

    .footer-row a{color:#d8e4f2}

    .whatsapp-fab{
      position:fixed;
      right:18px;
      bottom:18px;
      z-index:900;
      width:62px;
      height:62px;
      border-radius:50%;
      display:grid;
      place-items:center;
      background:#25D366;
      color:#fff;
      box-shadow:0 18px 40px rgba(37,211,102,.35);
      font-size:28px;
    }

    .lightbox{
      position:fixed;
      inset:0;
      background:rgba(3,8,15,.88);
      display:none;
      align-items:center;
      justify-content:center;
      padding:20px;
      z-index:1200;
      backdrop-filter:blur(8px);
      -webkit-backdrop-filter:blur(8px);
    }

    .lightbox.active{display:flex}

    .lightbox-inner{
      width:min(1100px, 96vw);
      position:relative;
    }

    .lightbox img{
      width:100%;
      max-height:88vh;
      object-fit:contain;
      border-radius:24px;
      border:1px solid var(--line);
      background:#0e182c;
    }

    .lightbox-close{
      position:absolute;
      right:14px;
      top:14px;
      width:46px;height:46px;
      border-radius:14px;
      border:1px solid var(--line);
      background:rgba(0,0,0,.35);
      color:#fff;
      font-size:20px;
      cursor:pointer;
    }

    .reveal{
      opacity:0;
      transform:translateY(24px);
      transition:opacity .7s ease, transform .7s ease;
    }

    .reveal.show{
      opacity:1;
      transform:none;
    }

    @media (max-width: 1100px){
      .hero-grid,
      .split,
      .contact-grid{
        grid-template-columns:1fr;
      }
      .stats-strip,
      .grid-3,
      .projects-grid,
      .testimonial-grid{
        grid-template-columns:repeat(2,1fr);
      }
      .hero-visual{min-height:480px}
    }

    @media (max-width: 860px){
      .menu-toggle{display:grid;place-items:center}
      .menu{
        position:absolute;
        left:4%;
        right:4%;
        top:78px;
        display:none;
        flex-direction:column;
        align-items:stretch;
        padding:14px;
        border-radius:22px;
        background:rgba(10,19,35,.94);
        border:1px solid var(--line);
        box-shadow:var(--shadow);
      }
      .menu.active{display:flex}
      .menu a,.menu-cta{margin:0}
      .hero{padding-top:72px}
      .stats-strip,
      .grid-3,
      .projects-grid,
      .testimonial-grid{
        grid-template-columns:1fr;
      }
      .form-row{
        grid-template-columns:1fr;
      }
      .cta-band{
        flex-direction:column;
        align-items:flex-start;
      }
      .footer-row{
        flex-direction:column;
        align-items:flex-start;
      }
      .hero-copy h1{
        letter-spacing:-1.5px;
      }
    }

    @media (max-width: 560px){
      .section{padding:76px 0}
      .hero-visual{min-height:420px}
      .hero-photo{inset:14px 14px 140px 14px}
      .floating-badge{
        font-size:12px;
        padding:12px 13px;
      }
      .badge-1{left:14px;bottom:78px}
      .badge-2{right:14px;top:14px}
      .badge-3{right:14px;bottom:14px}
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
        <div class="brand-text">
          <strong>CLK Güvenlik Sistemleri</strong>
          <span>Kurumsal Güvenlik Çözümleri</span>
        </div>
      </a>

      <button class="menu-toggle" id="menuToggle" aria-label="Menüyü aç/kapat" aria-expanded="false">☰</button>

      <nav class="menu" id="menu">
        <a href="#anasayfa">Anasayfa</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#projeler">Projeler</a>
        <a href="#surec">Süreç</a>
        <a href="#sss">SSS</a>
        <a href="#iletisim">İletişim</a>
        <a class="menu-cta" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20teklif%20almak%20istiyorum." target="_blank" rel="noopener">Teklif Al</a>
      </nav>
    </div>
  </header>

  <main id="anasayfa" class="hero">
    <div class="hero-blur one"></div>
    <div class="hero-blur two"></div>
    <div class="hero-blur three"></div>

    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <span class="eyebrow">• Güvenliğinizi kurumsal seviyeye taşıyoruz</span>
        <h1>Mekânınıza sadece sistem değil, <span style="color:#b8d4e4">güven</span> kuruyoruz.</h1>
        <p>
          Kamera, alarm, yangın algılama, bariyer, akıllı ev ve geçiş kontrol sistemlerinde;
          keşiften projelendirmeye, kurulumdan teknik desteğe kadar uçtan uca profesyonel hizmet sunuyoruz.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20teklif%20almak%20istiyorum." target="_blank" rel="noopener">WhatsApp’tan Teklif Al</a>
          <a class="btn btn-secondary" href="#projeler">Projeleri İncele</a>
        </div>

        <div class="hero-points">
          <span>Ücretsiz Keşif</span>
          <span>Garantili Kurulum</span>
          <span>7/24 Teknik Destek</span>
          <span>Kurumsal Çözüm</span>
        </div>
      </div>

      <div class="hero-card reveal glass">
        <div class="hero-visual">
          <div class="hero-photo">
            <img src="images/hero-camera.png" alt="CLK Güvenlik profesyonel kamera sistemleri">
          </div>
          <div class="floating-badge badge-1">7/24 Teknik Destek</div>
          <div class="floating-badge badge-2">Kurumsal Projelendirme</div>
          <div class="floating-badge badge-3">Garantili Uygulama</div>
        </div>
      </div>
    </div>

    <div class="container stats-strip">
      <div class="stat glass reveal">
        <h3 class="counter" data-target="12">0</h3>
        <p>Yıllık Tecrübe</p>
      </div>
      <div class="stat glass reveal">
        <h3 class="counter" data-target="950">0</h3>
        <p>Tamamlanan Kurulum</p>
      </div>
      <div class="stat glass reveal">
        <h3 class="counter" data-target="500">0</h3>
        <p>Memnun Müşteri</p>
      </div>
      <div class="stat glass reveal">
        <h3>7/24</h3>
        <p>Teknik Destek</p>
      </div>
    </div>
  </main>

  <section class="marquee-wrap">
    <div class="marquee">
      <span>Hikvision</span>
      <span>Dahua</span>
      <span>Ajax</span>
      <span>Paradox</span>
      <span>Bosch</span>
      <span>Ezviz</span>
      <span>IP Kamera</span>
      <span>Yangın Sistemleri</span>
      <span>Geçiş Kontrol</span>
      <span>Akıllı Ev</span>
      <span>Hikvision</span>
      <span>Dahua</span>
      <span>Ajax</span>
      <span>Paradox</span>
      <span>Bosch</span>
      <span>Ezviz</span>
      <span>IP Kamera</span>
      <span>Yangın Sistemleri</span>
      <span>Geçiş Kontrol</span>
      <span>Akıllı Ev</span>
    </div>
  </section>

  <section id="hizmetler" class="section">
    <div class="container">
      <span class="eyebrow reveal">• Hizmetlerimiz</span>
      <h2 class="section-title reveal">Kurumsal ihtiyaca göre tasarlanmış güçlü çözümler</h2>
      <p class="section-lead reveal">
        Her proje aynı değildir. Bu yüzden mekânın yapısına, kullanım amacına ve güvenlik risklerine göre özel planlama yapıyor; doğru ürün, doğru kurulum ve doğru destek ile ilerliyoruz.
      </p>

      <div class="grid-3">
        <article class="service-card glass reveal">
          <div class="icon">📷</div>
          <h3>Kamera Sistemleri</h3>
          <p>Yüksek çözünürlüklü IP ve AHD kamera sistemleri ile iç ve dış alanlarda profesyonel izleme altyapısı kuruyoruz.</p>
          <ul>
            <li>Gece görüşü ve uzaktan izleme</li>
            <li>Mobil uygulama entegrasyonu</li>
            <li>Kayıt cihazı ve network planlama</li>
          </ul>
        </article>

        <article class="service-card glass reveal">
          <div class="icon">🔥</div>
          <h3>Yangın Algılama</h3>
          <p>Yangın risklerine karşı erken uyarı sağlayan dedektör, panel ve alarm altyapısını standartlara uygun kuruyoruz.</p>
          <ul>
            <li>Dedektör, siren ve panel kurulumu</li>
            <li>İhbar ve yönlendirme çözümleri</li>
            <li>Kurumsal alanlara uygun yapı</li>
          </ul>
        </article>

        <article class="service-card glass reveal">
          <div class="icon">🚧</div>
          <h3>Bariyer & Geçiş</h3>
          <p>Site, plaza, işletme ve otopark girişlerinde kontrollü geçiş ve güvenli yönlendirme sistemleri uyguluyoruz.</p>
          <ul>
            <li>Otopark bariyer sistemleri</li>
            <li>Kartlı geçiş ve plaka yönetimi</li>
            <li>Yoğun kullanıma uygun kurulum</li>
          </ul>
        </article>

        <article class="service-card glass reveal">
          <div class="icon">🔐</div>
          <h3>Alarm Sistemleri</h3>
          <p>İç ve dış alanlarda hırsızlık, ihlal ve çevre güvenliğine karşı etkin alarm çözümleri sunuyoruz.</p>
          <ul>
            <li>Kablolu ve kablosuz seçenekler</li>
            <li>Akıllı uyarı ve bildirim sistemleri</li>
            <li>İşyeri ve konut uyumlu yapı</li>
          </ul>
        </article>

        <article class="service-card glass reveal">
          <div class="icon">🏠</div>
          <h3>Akıllı Ev Otomasyonu</h3>
          <p>Aydınlatma, iklimlendirme, güvenlik ve erişim sistemlerini tek merkezden kontrol edilebilir hale getiriyoruz.</p>
          <ul>
            <li>Telefonla uzaktan kontrol</li>
            <li>Senaryo ve otomasyon yönetimi</li>
            <li>Modern yaşam alanı entegrasyonu</li>
          </ul>
        </article>

        <article class="service-card glass reveal">
          <div class="icon">🛠️</div>
          <h3>Teknik Servis & Bakım</h3>
          <p>Kurulum sonrası desteği güçlü tutuyor, sistem performansını korumak için bakım ve servis hizmeti sağlıyoruz.</p>
          <ul>
            <li>Periyodik kontrol hizmeti</li>
            <li>Arıza tespit ve hızlı müdahale</li>
            <li>Yerinde ve uzaktan destek</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <section id="projeler" class="section">
    <div class="container">
      <span class="eyebrow reveal">• Proje Vitrini</span>
      <h2 class="section-title reveal">Yaptığımız işlerin kalitesi, anlattığımızdan daha güçlü konuşur</h2>
      <p class="section-lead reveal">
        Estetik görünüm, doğru kablolama, temiz işçilik ve kararlı çalışma mantığı ile projeleri sadece teslim etmiyor; sürdürülebilir şekilde devreye alıyoruz.
      </p>

      <div class="projects-grid">
        <article class="project glass reveal">
          <div class="project-media">
            <img src="images/proje-1.jpg" alt="Kamera kurulumu projesi" class="lightbox-img">
          </div>
          <div class="project-body">
            <div class="project-top">
              <span class="project-tag">Kamera</span>
              <span class="project-tag">Kurumsal Alan</span>
            </div>
            <h3>Profesyonel Kamera Kurulumu</h3>
            <p>İç ve dış alanlar için planlanmış, kör nokta bırakmayan, uzaktan izleme destekli sistem kurulumu.</p>
            <div class="project-meta">
              <span>Uzaktan İzleme</span>
              <span>Gece Görüşü</span>
              <span>Kayıt Çözümü</span>
            </div>
          </div>
        </article>

        <article class="project glass reveal">
          <div class="project-media">
            <img src="images/proje-2.jpg" alt="Yangın algılama projesi" class="lightbox-img">
          </div>
          <div class="project-body">
            <div class="project-top">
              <span class="project-tag">Yangın</span>
              <span class="project-tag">İşyeri</span>
            </div>
            <h3>Yangın Algılama Altyapısı</h3>
            <p>Dedektör, alarm ve uyarı sistemlerinin standartlara yakın mantıkla planlandığı güvenli kurulum yapısı.</p>
            <div class="project-meta">
              <span>Erken Uyarı</span>
              <span>Panel Yönetimi</span>
              <span>Alarm Senaryosu</span>
            </div>
          </div>
        </article>

        <article class="project glass reveal">
          <div class="project-media">
            <img src="images/proje-3.jpg" alt="Bariyer ve geçiş kontrol sistemi" class="lightbox-img">
          </div>
          <div class="project-body">
            <div class="project-top">
              <span class="project-tag">Bariyer</span>
              <span class="project-tag">Site Girişi</span>
            </div>
            <h3>Giriş & Otopark Kontrolü</h3>
            <p>Yoğun geçişe uygun, uzun ömürlü ve düzenli kullanım sunan güvenli giriş kontrol sistemleri.</p>
            <div class="project-meta">
              <span>Geçiş Kontrol</span>
              <span>Yoğun Kullanım</span>
              <span>Dayanıklı Sistem</span>
            </div>
          </div>
        </article>

        <article class="project glass reveal">
          <div class="project-media">
            <img src="images/proje-4.jpg" alt="Akıllı kilit ve geçiş sistemi" class="lightbox-img">
          </div>
          <div class="project-body">
            <div class="project-top">
              <span class="project-tag">Erişim</span>
              <span class="project-tag">Akıllı Kilit</span>
            </div>
            <h3>Akıllı Kilit & Erişim Yönetimi</h3>
            <p>Şifre, kart ya da mobil erişim destekli modern giriş sistemleri ile güvenlik ve kullanım kolaylığı bir arada.</p>
            <div class="project-meta">
              <span>Kartlı Geçiş</span>
              <span>Mobil Kontrol</span>
              <span>Modern Tasarım</span>
            </div>
          </div>
        </article>

        <article class="project glass reveal">
          <div class="project-media">
            <img src="images/proje-5.jpg" alt="Elektrikli araç şarj istasyonu" class="lightbox-img">
          </div>
          <div class="project-body">
            <div class="project-top">
              <span class="project-tag">EV Şarj</span>
              <span class="project-tag">Konut</span>
            </div>
            <h3>Şarj İstasyonu Altyapısı</h3>
            <p>Elektrikli araç kullanıcılarına uygun, güvenli ve düzenli enerji aktarımı sağlayan kurulum yapısı.</p>
            <div class="project-meta">
              <span>AC/DC Altyapı</span>
              <span>Güvenli Bağlantı</span>
              <span>Planlı Kurulum</span>
            </div>
          </div>
        </article>

        <article class="project glass reveal">
          <div class="project-media">
            <img src="images/proje-6.jpg" alt="Alarm ve sensör entegrasyonu" class="lightbox-img">
          </div>
          <div class="project-body">
            <div class="project-top">
              <span class="project-tag">Alarm</span>
              <span class="project-tag">Entegrasyon</span>
            </div>
            <h3>Alarm & Sensör Entegrasyonu</h3>
            <p>Farklı güvenlik bileşenlerini ortak sistem mantığında çalıştıran dengeli ve kullanıcı dostu kurulumlar.</p>
            <div class="project-meta">
              <span>Anlık Bildirim</span>
              <span>Çoklu Sensör</span>
              <span>Merkezi Yönetim</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="surec" class="section">
    <div class="container split">
      <div class="process-card glass reveal">
        <span class="eyebrow">• Çalışma Sürecimiz</span>
        <h2 class="section-title" style="margin-top:18px">İşi baştan sona sistemli yürütüyoruz</h2>
        <p class="section-lead" style="margin-bottom:22px">
          Rastgele ürün satışı yerine, ihtiyacınızı dinleyip doğru sistemi kurmayı hedefliyoruz. Böylece hem gereksiz maliyetten kaçınıyor hem de uzun ömürlü sonuç alıyoruz.
        </p>

        <div class="process-list">
          <div class="process-step">
            <div class="step-no">01</div>
            <div>
              <h4>Keşif & İhtiyaç Analizi</h4>
              <p>Alan yapısı, risk noktaları, kullanım yoğunluğu ve beklentiler detaylı biçimde değerlendirilir.</p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-no">02</div>
            <div>
              <h4>Projelendirme & Teklif</h4>
              <p>Doğru ürün seçimi ve kurulum planı netleştirilir, bütçeye uygun teklif hazırlanır.</p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-no">03</div>
            <div>
              <h4>Kurulum & Test</h4>
              <p>Sistem temiz işçilikle devreye alınır, tüm bağlantılar test edilerek çalışır halde teslim edilir.</p>
            </div>
          </div>

          <div class="process-step">
            <div class="step-no">04</div>
            <div>
              <h4>Destek & Sürdürülebilirlik</h4>
              <p>Kurulum sonrası kullanım desteği, bakım ve teknik servis ile sistem performansı korunur.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="cta-panel glass reveal" style="display:flex;flex-direction:column;justify-content:space-between">
        <div>
          <span class="eyebrow">• Neden CLK?</span>
          <h2 class="section-title" style="margin-top:18px">Sadece ürün değil, prestijli bir güvenlik altyapısı kuruyoruz</h2>
          <p class="section-lead" style="margin-bottom:24px">
            İyi görünen, düzgün çalışan, kullanıcıyı yormayan ve servis desteği güçlü sistemler sayesinde uzun vadeli memnuniyet sağlıyoruz.
          </p>
        </div>

        <div class="grid-3" style="grid-template-columns:1fr;gap:14px">
          <div class="info-item">
            <small>Kalite</small>
            <strong>Temiz işçilik, dengeli kurulum, kurumsal görünüm</strong>
          </div>
          <div class="info-item">
            <small>Hız</small>
            <strong>Tekliften devreye almaya kadar kontrollü süreç yönetimi</strong>
          </div>
          <div class="info-item">
            <small>Destek</small>
            <strong>Ulaşılabilir iletişim ve çözüm odaklı teknik servis yaklaşımı</strong>
          </div>
        </div>

        <div style="margin-top:24px">
          <a class="btn btn-primary" href="#iletisim">Hemen İletişime Geç</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow reveal">• Referans Etkisi</span>
      <h2 class="section-title reveal">İnsanların sizi tercih etmesini sağlayan şey, verdiğiniz güven hissidir</h2>
      <p class="section-lead reveal">
        Kurumsal tasarım yalnızca güzel görünmek için değil; müşterinin “bunlar işi biliyor” demesi için önemlidir. Bu yüzden sayfayı güçlü bir marka algısı oluşturacak şekilde tasarladık.
      </p>

      <div class="testimonial-grid">
        <article class="testimonial glass reveal">
          <p>“Site güvenlik sistemimizi kurdular. Kurulum düzenliydi, kablolama temizdi ve teslim sonrası destekleri çok iyiydi.”</p>
          <strong>Ahmet Y.</strong>
          <span>Site Yönetimi</span>
        </article>

        <article class="testimonial glass reveal">
          <p>“İşletmemiz için kamera ve alarm sistemi yaptırdık. Hem estetik hem de sorunsuz çalışan bir sistem kuruldu.”</p>
          <strong>Mehmet K.</strong>
          <span>İşletme Sahibi</span>
        </article>

        <article class="testimonial glass reveal">
          <p>“Kurumsal yaklaşım ve iletişim kalitesi çok iyiydi. Baştan sona ne yapılacağı net şekilde anlatıldı.”</p>
          <strong>Selin A.</strong>
          <span>Ofis Projesi</span>
        </article>
      </div>
    </div>
  </section>

  <section id="sss" class="section">
    <div class="container split">
      <div class="reveal">
        <span class="eyebrow">• Sık Sorulan Sorular</span>
        <h2 class="section-title">Müşterilerin en çok merak ettiği konular</h2>
        <p class="section-lead">
          Teklif, kurulum süresi, garanti ve teknik destek gibi kritik başlıklarda hızlıca bilgi alın.
        </p>
      </div>

      <div class="faq reveal">
        <div class="faq-item">
          <button class="faq-q">
            <span>Ücretsiz keşif hizmetiniz var mı?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">
            Evet. Uygun projelerde yerinde keşif yaparak ihtiyaç analizi ve doğru sistem önerisi sunuyoruz.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-q">
            <span>Kurulum ne kadar sürer?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">
            Projenin büyüklüğüne göre değişir. Küçük ölçekli kurulumlar genelde kısa sürede tamamlanırken, kurumsal projelerde planlama ile birlikte süre netleşir.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-q">
            <span>Kurulum sonrası destek veriyor musunuz?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">
            Evet. Sistem tesliminden sonra kullanım desteği, arıza müdahalesi ve teknik servis desteği sağlıyoruz.
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-q">
            <span>Uzaktan izleme ve mobil kullanım mümkün mü?</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">
            Uygun sistemlerde mobil uygulama üzerinden canlı izleme, kayıt görüntüleme ve bildirim alma mümkündür.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-band reveal">
        <div>
          <h3>Markanızı daha güçlü, alanınızı daha güvenli gösterelim.</h3>
          <p>
            Keşif, teklif ve doğru sistem planlaması için bizimle iletişime geçin. Size sadece cihaz değil, güven veren bir çözüm hazırlayalım.
          </p>
        </div>
        <a class="btn btn-primary" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20kurumsal%20g%C3%BCvenlik%20sistemi%20teklifi%20almak%20istiyorum." target="_blank" rel="noopener">Teklif İste</a>
      </div>
    </div>
  </section>

  <section id="iletisim" class="section">
    <div class="container contact-grid">
      <div class="info-card glass reveal">
        <span class="eyebrow">• İletişim</span>
        <h3>Hızlıca bize ulaşın</h3>

        <div class="info-list">
          <div class="info-item">
            <small>Telefon / WhatsApp</small>
            <a href="https://wa.me/905368323458" target="_blank" rel="noopener">0536 832 34 58</a>
          </div>

          <div class="info-item">
            <small>E-posta</small>
            <a href="mailto:clkguvenliksistemleri@gmail.com">clkguvenliksistemleri@gmail.com</a>
          </div>

          <div class="info-item">
            <small>Instagram</small>
            <a href="https://www.instagram.com/guvenlik_kamera_sistemleri/" target="_blank" rel="noopener">@guvenlik_kamera_sistemleri</a>
          </div>

          <div class="info-item">
            <small>Adres</small>
            <strong>Göztepe Mah. 2395 Sk. No:7 D:6 Bağcılar / İstanbul</strong>
          </div>
        </div>

        <div class="map-frame">
          <iframe
            src="https://maps.google.com/maps?q=Bağcılar%20İstanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="CLK Güvenlik Sistemleri konum haritası">
          </iframe>
        </div>
      </div>

      <div class="form-card glass reveal">
        <span class="eyebrow">• Teklif Formu</span>
        <h3>Projeniz için bilgi bırakın</h3>

        <form onsubmit="sendWhatsApp(event)">
          <div class="form-row">
            <input class="field" id="name" type="text" placeholder="Ad Soyad" required>
            <input class="field" id="phone" type="tel" placeholder="Telefon" required>
          </div>
          <div class="form-row">
            <input class="field" id="service" type="text" placeholder="İlgilendiğiniz hizmet">
            <input class="field" id="location" type="text" placeholder="İlçe / Lokasyon">
          </div>
          <textarea class="field" id="message" placeholder="Projenizi kısaca yazın"></textarea>
          <button class="btn btn-primary" type="submit">WhatsApp’tan Gönder</button>
          <p class="form-note">
            Form gönderildiğinde bilgileriniz WhatsApp mesajı olarak hazırlanır ve doğrudan bize iletebilirsiniz.
          </p>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <div class="container footer-row">
      <div>© <span id="year"></span> CLK Güvenlik Sistemleri • Tüm hakları saklıdır.</div>
      <div>
        <a href="#anasayfa">Anasayfa</a> •
        <a href="#hizmetler">Hizmetler</a> •
        <a href="#iletisim">İletişim</a>
      </div>
    </div>
  </footer>

  <a class="whatsapp-fab" href="https://wa.me/905368323458?text=Merhaba%20CLK%20G%C3%BCvenlik%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" aria-label="WhatsApp ile iletişime geç">
    ☎
  </a>

  <div class="lightbox" id="lightbox">
    <div class="lightbox-inner">
      <button class="lightbox-close" id="lightboxClose" aria-label="Görseli kapat">✕</button>
      <img id="lightboxImage" src="" alt="Büyük görsel">
    </div>
  </div>

  <script>
    // Yıl
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobil menü
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
      const isActive = menu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Reveal animasyonları
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Sayaç animasyonu
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target);
        if (!target || el.dataset.done === '1') return;

        let current = 0;
        const step = Math.max(1, Math.ceil(target / 80));

        const tick = () => {
          current += step;
          if(current >= target){
            el.textContent = target;
            el.dataset.done = '1';
            return;
          }
          el.textContent = current;
          requestAnimationFrame(tick);
        };

        tick();
      });
    }, { threshold: 0.55 });

    document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.lightbox-img').forEach(img => {
      img.addEventListener('click', function(){
        lightboxImage.src = this.src;
        lightbox.classList.add('active');
      });
    });

    function closeLightbox(){
      lightbox.classList.remove('active');
      lightboxImage.src = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e){
      if(e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeLightbox();
    });

    // FAQ
    document.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if(!isActive) item.classList.add('active');
      });
    });

    // Form -> WhatsApp
    function sendWhatsApp(e){
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

      const url = 'https://wa.me/905368323458?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    }
  </script>
</body>
</html>
