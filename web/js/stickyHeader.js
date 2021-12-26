define([
  "jquery"
], function($) {
    $(function () {
        var header = $('.page-header');
        var content = $('.page-header .content');
        var logo = $('.page-header .logo');
        var below = false;
        var offset = 400;

        toggle = () => {
            content.toggleClass('content-down');
            header.toggleClass('page-header-up');
            logo.toggleClass('logo-down');
        }

        window.onscroll = () => {
            const Ypos = window.pageYOffset;

            if (Ypos > offset && !below) {
              below = true;
              toggle();
            } else if (Ypos < offset && below) {
              below = false;
              toggle();
            }
        }
    })
});
