// -------------------------------------------------------
// #TEAM CAROUSEL
// -------------------------------------------------------
const classExistsSwiper = document.getElementsByClassName('swiper');
if( classExistsSwiper.length > 0 ) {
    const carousel_images = new Swiper(".js-carousel-images", {
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

    const carousel_navigation = new Swiper(".js-carousel-navigation", {
        loop: true,
        fadeEffect: { crossFade: true },
        effect: "fade",
        allowTouchMove: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    carousel_images.controller.control = carousel_navigation;
    carousel_navigation.controller.control = carousel_images;
    // -------------------------------------------------------
    // #REVIEWS CAROUSEL
    // -------------------------------------------------------
    const carousel_item = new Swiper(".js-carousel-item", {
        loop: true,
        slidesPerView: 3,
        loopedSlides: 10,
        allowTouchMove: true,
        spaceBetween: 30,
        direction: 'horizontal',
        slidesPerGroup: 1,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 3,
            }
        }
    });

    const carousel_navigation_two = new Swiper(".js-carousel-navigation-two", {
        slidesPerView: 3,
        direction: 'horizontal',
        loopedSlides: 10,
        slidesPerGroup: 1,
        loop: true,
        allowTouchMove: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    carousel_item.controller.control = carousel_navigation_two;    
    carousel_navigation_two.controller.control = carousel_item;
}
// -------------------------------------------------------
// #POPUP LINK FOR COPY CURRENT URL IN CAREER PAGE
// -------------------------------------------------------
let classExists  = document.getElementsByClassName('info-sidebar');
if( classExists.length) {
    const copy_url       = document.getElementById("current_url");
    copy_url.innerHTML = window.location.href;

    new ClipboardJS('.btn-copy');
    const copy_btn = document.querySelector('.btn-copy');
    const tooltip  = document.querySelector('.tooltiptext');

    copy_btn.addEventListener('click', function() {
        tooltip.classList.add('active');
        setTimeout(function(){
            tooltip.classList.remove("active");      
        }, 1300);
    });
    // -------------------------------------------------------
    // #OPEN POPUP
    // -------------------------------------------------------
    const button = document.querySelector('.js-share-icon');
    const popup  = document.querySelector('.popup-share');
    const close  = document.querySelector('.js-popup-close');

    button.addEventListener('click', function() {
        popup.classList.toggle('active');
    });

    close.addEventListener('click', function() {
        popup.classList.remove('active');
    });
}
// -------------------------------------------------------
// #HOMEPAGE ANIMATIONS
// -------------------------------------------------------
let classExistsParallax = document.getElementsByClassName('homepage');
if( classExistsParallax.length) {
    // -------------------------------------------------------
    // #FADE ANIMATION
    // -------------------------------------------------------
    AOS.init();
    // -------------------------------------------------------
    // #HOME HERO ANIMATION
    // -------------------------------------------------------
    const scene = document.getElementById("js-hero-decorations");
    const parallax = new Parallax(scene);
    // -------------------------------------------------------
    // #REMOVE BURGER MENU ON CLICK
    // -------------------------------------------------------
    const menuLinks  = document.querySelectorAll(".site-header ul a");
    const bodyToggle = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuTogglePrimary = document.querySelector('.primary-menu');

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function() {
            setTimeout(function(){
                bodyToggle.classList.remove('menu-triggered');
                menuToggle.classList.remove('activated');    
                menuTogglePrimary.classList.remove('triggered');
            }, 800);
        });
    }
    // -------------------------------------------------------
    // #SMOOTH SCROLL TO ID
    // -------------------------------------------------------
    document.querySelectorAll('.scroll-to').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // -------------------------------------------------------
    // #COUNTUP
    // -------------------------------------------------------
    class CountUp {
        constructor(triggerEl, counterEl) {
            const counter = document.querySelector(counterEl)
            const trigger = document.querySelector(triggerEl)
            let num = 0
            const countUp = () => {
                if (num <= counter.dataset.stop)
                ++num
                counter.textContent = num
            }
      
            const observer = new IntersectionObserver((el) => {
                if (el[0].isIntersecting) {
                    const interval = setInterval(() => {
                        (num < counter.dataset.stop) ? countUp() : clearInterval(interval)
                    }, counter.dataset.speed)
                }
            }, { threshold: [0] });
            observer.observe(trigger)
        }
    }

    // Initialize any number of counters:
    new CountUp('#counter1', '#counter1');
    new CountUp('#counter2', '#counter2');

}




const image_girl = document.getElementsByClassName('girl-paralax');
if(image_girl.length) {
    new simpleParallax(image_girl, {
        delay: .5,
        orientation: 'up',
        overflow: true,
        // maxTransition: 50
    });
}

const image_boy = document.getElementsByClassName('boy-paralax');
if(image_boy.length) {
    new simpleParallax(image_boy, {
        delay: .9,
        orientation: 'up',
        overflow: true,
        // maxTransition: 50
    });
}


const image_decorations = document.getElementsByClassName('decorations-paralax');
if(image_decorations.length) {
    new simpleParallax(image_decorations, {
        delay: .8,
        orientation: 'down',
        overflow: true,
        maxTransition: 50
    });
}


const image_bg = document.getElementsByClassName('item-bg-paralax');
if(image_bg.length) {
    new simpleParallax(image_bg, {
        scale: 1.1,
        delay: 1.3,
        orientation: 'up',
    });
}


const image_candle_one = document.getElementsByClassName('item-img__candle-one');
if(image_candle_one.length) {
    new simpleParallax(image_candle_one, {
        delay: .5,
        orientation: 'up',
        overflow: true,
        // maxTransition: 50
    });
}

const image_candle_two = document.getElementsByClassName('item-img__candle-two');
if(image_candle_two.length) {
    new simpleParallax(image_candle_two, {
        delay: .9,
        transition: 'cubic-bezier(0,0,0,1)',
        overflow: true,
        // maxTransition: 50
    });
}

const image_decorations_dots = document.getElementsByClassName('item-img__decoration-dots');
if(image_decorations_dots.length) {
    new simpleParallax(image_decorations_dots, {
        delay: .8,
        orientation: 'down',
        overflow: true,
        scale: 1.3
    });
}
