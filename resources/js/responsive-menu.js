// --------------------------------------------------------------------------------------
// #ON SCROLL ADD ACTIVE CLASS TO SITE HEADER FOR FIXED ANIMATION
// --------------------------------------------------------------------------------------

let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}



function responsiveMenu() {

    const element = document.querySelectorAll('.sub-menu-toggle');

    var hamburger = {
        navToggle: document.querySelector('.menu-toggle'),
        nav: document.querySelector('.primary-menu'),
        body_class: document.body,

        doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('activated');
            this.nav.classList.toggle('triggered');
            this.body_class.classList.toggle('menu-triggered');
        },

    };

    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    for (var i = 0, l = element.length; i < l; i++) {
        element[i].onclick = function() {
            for (var j = 0; j < l; j++) {
                if (element[j] != this) {
                    element[j].classList.remove('activated');
                    let submenu_Close = element[j].nextElementSibling;
                    submenu_Close.classList.toggle('activated');
                    slideUp(submenu_Close, 200);
                }
            }
            this.classList.toggle('activated');
            let submenu = this.nextElementSibling;
            submenu.classList.toggle('activated');
            slideToggle(submenu, 200);
        }
    }

}

document.addEventListener('DOMContentLoaded', function () {
    responsiveMenu();

    let scrollpos = window.scrollY
    const header = document.querySelector(".site-header")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("active")
    const remove_class_on_scroll = () => header.classList.remove("active")

    scrollpos = window.scrollY;

    if (scrollpos >= header_height) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }

    window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;
        if (scrollpos >= header_height) {
            add_class_on_scroll()
        } else {
            remove_class_on_scroll()
        }

    });

});