(function () {

  "use strict";

  var gum = new Gumshoe('.nav-collapse a', {
    reflow: true,
    offset: function () {
      return 80;
    }
  });

})();
