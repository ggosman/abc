// СЛАЙДЕР

let swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

let schemeSwiper = new Swiper(".schemeSwiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 4,
    },
  },
});

// КАТАЛОГ

const catalog = document.querySelectorAll(".catalogItem");

catalog.forEach((catalogA) => {
  catalogA.addEventListener("click", () => {
    catalogA.classList.toggle("active");
  });
});

// Плавный скролл jq

$(document).ready(function () {
  $(".scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "swing",
      }
    );
    return false;
  });
});

// burger

const burger = document.querySelectorAll(".burger");
const headerWrapper = document.querySelectorAll(".headerWrapper");

burger.forEach((burgerElement) => {
  burgerElement.addEventListener("click", () => {
    burgerElement.classList.toggle("active");
  });
});

headerWrapper.forEach((headerWrapper) => {
  headerWrapper.addEventListener("click", () => {
    headerWrapper.classList.toggle("active");
  });
});
