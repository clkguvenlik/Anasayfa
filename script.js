document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('active'));
  });
}

const offerForm = document.getElementById('offerForm');

if (offerForm) {
  offerForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const service = document.getElementById('service')?.value.trim() || '';
    const location = document.getElementById('location')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

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
}
let index = 0
const slides = document.getElementById("slides")
const total = slides.children.length

function showSlide(){
  slides.style.transform = `translateX(-${index*100}%)`
}

function nextSlide(){
  index = (index + 1) % total
  showSlide()
}

function prevSlide(){
  index = (index - 1 + total) % total
  showSlide()
}

setInterval(nextSlide, 3500)