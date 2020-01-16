// --------- Start Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function(e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function() {
    setTimeout(function() { test(); });
});
$(window).on('resize', function() {
    setTimeout(function() { test(); }, 500);
});
$(".navbar-toggler").click(function() {
    setTimeout(function() { test(); });
});

// --------- End Responsive-navbar-active-animation-----------




$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        smartSpeed: 500,
        pullDrag: true,
        mouseDrag: true,
        nav: true,
        animateIn: true,
        touchDrag: true,

    });

});

/* Start  Apply fancybox to multiple items */

$("a.group").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
});
/* End Apply fancybox to multiple items */



// Start UpBtn

// Counter Up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// Start Back To Top With Smoothing

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1200) {
        $("#upBtn").fadeIn(1000)
    } else {
        $("#upBtn").fadeOut(1000)
    }

    //     var homeOffset = $('#Home').offset().top,
    //         aboutOffset = $('#About').offset().top,
    //         workOffset = $('#Work').offset().top,
    //         portfolioOffset = $('#Portfolio').offset().top,
    //         hiremeOffset = $('#HireMe').offset().top;


    //     if (scroll >= homeOffset) {
    //         $(".menu-item-1").addClass("active")

    //     } else {
    //         $(".menu-item-1").removeClass("active");

    //     }
    //     if (scroll >= aboutOffset) {
    //         $(".menu-item-2").addClass("active");
    //         $(".menu-item-1").removeClass("active");

    //     } else {
    //         $(".menu-item-2").removeClass("active");
    //         $(".menu-item-2 .nav-link").removeClass("active");
    //     }
    //     if (scroll >= workOffset) {
    //         $(".menu-item-3").addClass("current-menu-item");
    //         $(".menu-item-2").removeClass("current-menu-item");
    //         $(".menu-item-3 .nav-link").addClass("current-menu-item");
    //         $(".menu-item-2 .nav-link").removeClass("current-menu-item");
    //     } else {
    //         $(".menu-item-3").removeClass("current-menu-item");
    //         $(".menu-item-3 .nav-link").removeClass("current-menu-item");
    //     }
    //     if (scroll >= portfolioOffset) {
    //         $(".menu-item-4").addClass("current-menu-item");
    //         $(".menu-item-3").removeClass("current-menu-item");
    //         $(".menu-item-4 .nav-link").addClass("current-menu-item");
    //         $(".menu-item-3 .nav-link").removeClass("current-menu-item");
    //     } else {
    //         $(".menu-item-4").removeClass("current-menu-item");
    //         $(".menu-item-4 .nav-link").removeClass("current-menu-item");
    //     }
    //     if (scroll >= hiremeOffset) {
    //         $(".menu-item-5").addClass("current-menu-item");
    //         $(".menu-item-4").removeClass("current-menu-item");
    //         $(".menu-item-5 .nav-link").addClass("current-menu-item");
    //         $(".menu-item-4 .nav-link").removeClass("current-menu-item");
    //     } else {
    //         $(".menu-item-5").removeClass("current-menu-item");
    //         $(".menu-item-5 .nav-link").removeClass("current-menu-item");
    //     }

});
$("#upBtn").click(function() {
    $("body").animate({ scrollTop: 0 }, 1000)
});
// End Back To Top With Smoothing


$(".fa-angle-down").click(function() {

    let aboutOffset = $("#About").offset().top;

    $("body").animate({ scrollTop: aboutOffset }, 1000)
})

// End Back To Top With Smoothing



// Start Scroll When Clcik on links In Navbar 

$(".home .navbar .nav-item .nav-link").click(function() {
    let href = $(this).attr("href");
    let linkOffset = $(href).offset().top;


    $("body").animate({ scrollTop: linkOffset }, 500)
})


// End Scroll When Clcik on links In Navbar

// Start Mixer
var mixer = mixitup('.parent-container');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300,

    },
    controls: {
        enable: true
    }
});
// End Mixer