let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}

// CARRUSEL
let currentIndex = 0;
let carouselInterval;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startCarouselAutoplay() {
  carouselInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);
}

function stopCarouselAutoplay() {
  clearInterval(carouselInterval);
}

window.addEventListener('DOMContentLoaded', () => {
  startCarouselAutoplay();

  document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    stopCarouselAutoplay();
    moveCarousel(-1);
  });

  document.querySelector('.carousel-button.next').addEventListener('click', () => {
    stopCarouselAutoplay();
    moveCarousel(1);
  });
});
