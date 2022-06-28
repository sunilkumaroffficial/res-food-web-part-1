var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});

function scrollNavbar() {
  const navbar = document.getElementById('navbar');

  if (this.scrollY >= 100) {
    navbar.classList.add('scrollNavbar');
  } else {
    navbar.classList.remove('scrollNavbar');
  }
}

window.addEventListener('scroll', scrollNavbar);
