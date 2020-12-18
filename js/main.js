(function() {
    "use strict";

    // Define variables
    var hero = $("#hero"),
        work = $("#work"),
        about = $("#about"),
        topTrigger = $(".hero__trigger-button.top"),
        bottomTrigger = $(".hero__trigger-button.bottom"),
        closeBottom = $(".close.bottom"),
        closeTop = $(".close.top")

    // Mobile Detection
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    /* =Loader
    -------------------------------------------------------------- */
    $("body").queryLoader2({
        // Loader background color
        backgroundColor: "#000",
        fadeOutTime: 500
    });

    /* =Hero
    -------------------------------------------------------------- */
    // Centering function
    function centerInit() {
        hero.css({
            "height": $(window).height()
        });

        $(".hero__content").css({
            "margin-top": ($(window).height() - $(".hero__content").height()) / 2 + "px"
        });

        about.css({
            "height": $(window).height()
        });

        work.css({
            "height": $(window).height()
        });
    }

    // Initialize centering function
    centerInit();
    $(window).resize(centerInit);

    /* =Page Transitions
    -------------------------------------------------------------- */
    topTrigger.click(function() {
        about.removeClass("idle").addClass("active-screen");
        hero.animate({
            top: 20 + "%"
        }, 500, function() {
        });

        return false;
    });

    closeTop.click(function() {
        about.addClass("idle").removeClass("active-screen");
        hero.animate({
            top: 0
        }, 500, function() {
        });

        return false;
    });

    bottomTrigger.click(function() {
        work.removeClass("idle").addClass("active-screen");
        hero.animate({
            top: - 20 + "%"
        }, 500, function() {
        });

        return false;
    });

    closeBottom.click(function() {
        work.addClass("idle").removeClass("active-screen");
        hero.animate({
            top: 0
        }, 500, function() {
        });

        return false;
    });

    /* =Swiper Collection
    -------------------------------------------------------------- */

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });
})();
