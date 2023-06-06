var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  slidesPerView: 1,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  992: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  }
  }
});


// Reviews
const sliderReviews = document.querySelector('.swiper-container');

const swiperReviews = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 60,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
        992: {
          slidesPerView: 'auto',
          spaceBetween: 60,
        },
        992: {
          slidesPerView: 'auto',
          spaceBetween: 60,
        },
        991: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        }
      }
});


// Parthers
const sliderParthers = document.querySelector('.swiper-container2');

const swiperParthers = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.next-slider3',
        prevEl: '.prev-slider3',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
});