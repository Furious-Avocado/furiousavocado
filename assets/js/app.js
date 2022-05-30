"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -------------------------------------------------------
// #TEAM CAROUSEL
// -------------------------------------------------------
var classExistsSwiper = document.getElementsByClassName('swiper');

if (classExistsSwiper.length > 0) {
  var carousel_images = new Swiper(".js-carousel-images", {
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    effect: "fade",
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  var carousel_navigation = new Swiper(".js-carousel-navigation", {
    loop: true,
    fadeEffect: {
      crossFade: true
    },
    effect: "fade",
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  carousel_images.controller.control = carousel_navigation;
  carousel_navigation.controller.control = carousel_images; // -------------------------------------------------------
  // #REVIEWS CAROUSEL
  // -------------------------------------------------------

  var carousel_item = new Swiper(".js-carousel-item", {
    loop: true,
    slidesPerView: 3,
    loopedSlides: 10,
    allowTouchMove: true,
    spaceBetween: 30,
    direction: 'horizontal',
    slidesPerGroup: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3
      }
    }
  });
  var carousel_navigation_two = new Swiper(".js-carousel-navigation-two", {
    slidesPerView: 3,
    direction: 'horizontal',
    loopedSlides: 10,
    slidesPerGroup: 1,
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  carousel_item.controller.control = carousel_navigation_two;
  carousel_navigation_two.controller.control = carousel_item;
} // -------------------------------------------------------
// #POPUP LINK FOR COPY CURRENT URL IN CAREER PAGE
// -------------------------------------------------------


var classExists = document.getElementsByClassName('info-sidebar');

if (classExists.length) {
  var copy_url = document.getElementById("current_url");
  copy_url.innerHTML = window.location.href;
  new ClipboardJS('.btn-copy');
  var copy_btn = document.querySelector('.btn-copy');
  var tooltip = document.querySelector('.tooltiptext');
  copy_btn.addEventListener('click', function () {
    tooltip.classList.add('active');
    setTimeout(function () {
      tooltip.classList.remove("active");
    }, 1300);
  }); // -------------------------------------------------------
  // #OPEN POPUP
  // -------------------------------------------------------

  var button = document.querySelector('.js-share-icon');
  var popup = document.querySelector('.popup-share');
  var close = document.querySelector('.js-popup-close');
  button.addEventListener('click', function () {
    popup.classList.toggle('active');
  });
  close.addEventListener('click', function () {
    popup.classList.remove('active');
  });
} // -------------------------------------------------------
// #HOMEPAGE ANIMATIONS
// -------------------------------------------------------


var classExistsParallax = document.getElementsByClassName('homepage');

if (classExistsParallax.length) {
  (function () {
    // -------------------------------------------------------
    // #FADE ANIMATION
    // -------------------------------------------------------
    AOS.init(); // -------------------------------------------------------
    // #HOME HERO ANIMATION
    // -------------------------------------------------------

    var scene = document.getElementById("js-hero-decorations");
    var parallax = new Parallax(scene); // -------------------------------------------------------
    // #REMOVE BURGER MENU ON CLICK
    // -------------------------------------------------------

    var menuLinks = document.querySelectorAll(".site-header ul a");
    var bodyToggle = document.querySelector('body');
    var menuToggle = document.querySelector('.menu-toggle');
    var menuTogglePrimary = document.querySelector('.primary-menu');

    for (var i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', function () {
        setTimeout(function () {
          bodyToggle.classList.remove('menu-triggered');
          menuToggle.classList.remove('activated');
          menuTogglePrimary.classList.remove('triggered');
        }, 800);
      });
    } // -------------------------------------------------------
    // #SMOOTH SCROLL TO ID
    // -------------------------------------------------------


    document.querySelectorAll('.scroll-to').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }); // -------------------------------------------------------
    // #COUNTUP
    // -------------------------------------------------------

    var CountUp = /*#__PURE__*/_createClass(function CountUp(triggerEl, counterEl) {
      _classCallCheck(this, CountUp);

      var counter = document.querySelector(counterEl);
      var trigger = document.querySelector(triggerEl);
      var num = 0;

      var countUp = function countUp() {
        if (num <= counter.dataset.stop) ++num;
        counter.textContent = num;
      };

      var observer = new IntersectionObserver(function (el) {
        if (el[0].isIntersecting) {
          var interval = setInterval(function () {
            num < counter.dataset.stop ? countUp() : clearInterval(interval);
          }, counter.dataset.speed);
        }
      }, {
        threshold: [0]
      });
      observer.observe(trigger);
    }); // Initialize any number of counters:


    new CountUp('#counter1', '#counter1');
    new CountUp('#counter2', '#counter2');
  })();
}

var image_girl = document.getElementsByClassName('girl-paralax');

if (image_girl.length) {
  new simpleParallax(image_girl, {
    delay: .5,
    orientation: 'up',
    overflow: true // maxTransition: 50

  });
}

var image_boy = document.getElementsByClassName('boy-paralax');

if (image_boy.length) {
  new simpleParallax(image_boy, {
    delay: .9,
    orientation: 'up',
    overflow: true // maxTransition: 50

  });
}

var image_decorations = document.getElementsByClassName('decorations-paralax');

if (image_decorations.length) {
  new simpleParallax(image_decorations, {
    delay: .8,
    orientation: 'down',
    overflow: true,
    maxTransition: 50
  });
}

var image_bg = document.getElementsByClassName('item-bg-paralax');

if (image_bg.length) {
  new simpleParallax(image_bg, {
    scale: 1.1,
    delay: 1.3,
    orientation: 'up'
  });
}

var image_candle_one = document.getElementsByClassName('item-img__candle-one');

if (image_candle_one.length) {
  new simpleParallax(image_candle_one, {
    delay: .5,
    orientation: 'up',
    overflow: true // maxTransition: 50

  });
}

var image_candle_two = document.getElementsByClassName('item-img__candle-two');

if (image_candle_two.length) {
  new simpleParallax(image_candle_two, {
    delay: .9,
    transition: 'cubic-bezier(0,0,0,1)',
    overflow: true // maxTransition: 50

  });
}

var image_decorations_dots = document.getElementsByClassName('item-img__decoration-dots');

if (image_decorations_dots.length) {
  new simpleParallax(image_decorations_dots, {
    delay: .8,
    orientation: 'down',
    overflow: true,
    scale: 1.3
  });
}
