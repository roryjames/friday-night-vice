const spotlight = document.querySelector('.spotlight');
const hero = document.querySelector('.hero-card');
const slides = Array.from(document.querySelectorAll('.gallery-image'));

window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  spotlight.style.setProperty('--x', `${x}%`);
  spotlight.style.setProperty('--y', `${y}%`);
});

for (let i = 0; i < 24; i += 1) {
  const spark = document.createElement('span');
  spark.className = 'spark';
  spark.style.left = `${Math.random() * 100}%`;
  spark.style.top = `${Math.random() * 100}%`;
  spark.style.animationDelay = `${Math.random() * 1.2}s`;
  hero.appendChild(spark);
}

if (slides.length) {
  const slideFiles = [
    'images/slide-1.svg',
    'images/slide-2.svg',
    'images/slide-3.svg',
    'images/slide-4.svg'
  ];

  slides.forEach((slide, index) => {
    slide.src = slideFiles[index % slideFiles.length];
  });

  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}
