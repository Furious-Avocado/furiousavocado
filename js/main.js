(function () {

  "use strict";

  // Nav menu mark active link

  var gum = new Gumshoe('.nav-collapse a', {
    offset: function () {
      return 95;
    }
  });

  // Change url to match the scrolled part of the page

  var anchor = null;
  document.addEventListener('gumshoeActivate', function (event) {
    var link = event.detail.link;
    anchor = link.href.substring(link.href.indexOf("#"));
  }, false);
  var isScrolling;
  window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      if (history.replaceState && anchor) {
        history.replaceState(null, null, anchor);
      }
    }, 66);
  }, false);

  // Hide nav menu on link click

  var navToggle = document.querySelector("#navToggle");
  var nav = document.querySelector(".nav-collapse ul");
  var links = nav.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      navToggle.checked = false;
    }, false);
  }

})();
