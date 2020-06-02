(function () {

  "use strict";

  var gum = new Gumshoe('.nav-collapse a', {
    offset: function () {
      return 80;
    }
  });

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

})();
