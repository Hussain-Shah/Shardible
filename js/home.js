// Animson_Overlay From Left to Right

$(document).ready(function() {
    $('.animsition-overlay').animsition({
    inClass: 'overlay-slide-in-left',
    outClass: 'overlay-slide-out-left',
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    inDuration: 800,
    outDuration: 500,
    })
    .one('animsition.inStart',function(){
    $('body').removeClass('bg-init');
    });
});

// Per horizontal scroll
skrollr.init();
var _skrollr = skrollr.get(); // get() returns the skrollr instance or undefined
var windowWidth = $(window).width();

if (windowWidth <= 640 && _skrollr !== undefined) {
    _skrollr.destroy();
};

// NavigationbarDEsktop Edit GSAP
// =======================
window.onload = function() {

    var menu = document.getElementById("menu");
    var logo = document.getElementById("logo");
    var menu_lines = document.getElementById("menu_lines");

    TweenLite.to(menu, .3, {
        ease: Power3.easeInOut,
        width: "0px",
        backgroundColor: "#fff",
        overflow: "hidden",
    })
    TweenLite.to(menu, .1, {
        ease: Power4.easeInOut,
        width: "82px",
        delay: 1
    });

    TweenLite.to(logo, .4, {
        ease: Power3.easeInOut,
        left: "50px",
        backgroundColor: "transparent",
    })
    TweenLite.to(logo, .6, {
        ease: Power4.easeInOut,
        left: "-900px",
        delay: 1.1
    });

    $("#menu").hover(
        function() {
            TweenLite.to(menu, .3, {
                ease: Power3.easeInOut,
                width: "542px",
                backgroundColor: "#9442fe"
            })
            TweenLite.to(menu_lines, .6, {
                ease: Power3.easeInOut,
            })
            TweenLite.to(logo, .5, {
                ease: Power3.easeInOut,
                left: "120px",
                backgroundColor: "transparent"
            });
        },

        function() {
            TweenLite.to(menu, .6, {
                ease: Power4.easeInOut,
                width: "82px",
                delay: .1,
                backgroundColor: "#fff"
            })
            TweenLite.to(logo, .3, {
                ease: Power4.easeInOut,
                left: "-600px",
                delay: .2
            });

        }
    );
};
// NavigationMobile Collapse
$(document).ready(function() {
    $(".button_collapse_navi").click(function() {
        $("#open_nav").animate({
            height: 'toggle'
        });
        $(this).toggleClass('rotate_icon')
    });
});

// Animacion scroll
var rellax = new Rellax('.rellax');


function scrollWin() {
    var x = 13150;
    var y = 0;

window.scrollBy({
    top: x,
    left: y,
    behavior: 'smooth'
  });
};


// ZONA PROVAVE



// Portfolio_addedClass
$(".portfolio_item").addClass("myClass yourClass");



$('.carousel').bcSwipe({
    threshold: 50
});

// SCROLL TEAM

! function(t) {
    t.fn.bcSwipe = function(e) {
        var n = {
            threshold: 50
        };
        return e && t.extend(n, e), this.each(function() {
            function e(t) {
                1 == t.touches.length && (u = t.touches[0].pageX, c = !0, this.addEventListener("touchmove", o, !1))
            }

            function o(e) {
                if (c) {
                    var o = e.touches[0].pageX,
                        i = u - o;
                    Math.abs(i) >= n.threshold && (h(), t(this).carousel(i > 0 ? "next" : "prev"))
                }
            }

            function h() {
                this.removeEventListener("touchmove", o), u = null, c = !1
            }
            var u, c = !1;
            "ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1)
        }), this
    }
}(jQuery);
