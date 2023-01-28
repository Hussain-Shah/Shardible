'use strict'

var app = angular.module('rilind', ['ngSanitize']);

app.config(['$httpProvider', '$interpolateProvider', function($httpProvider, $interpolateProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');

}
]);

app.run(function($rootScope, $http, $timeout) {


    AOS.init();
    // Initi i mousit per mi marr formen tjeter
    magnetCurs.init({
        spacing: 20,
        pointer: true
    });

    // PortfolioSlider
    $(function(){
        var owl = $('.portfolio_owl');
            owl.owlCarousel({
            autoplay: 6000,
            loop: true,
            navigation : true,
            dots: false,
            onInitialized  : counter, //When the plugin has initialized.
            onTranslated : counter,
                responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:2,
                    nav:true,
                }
            } //When the translation of the stage has finished.
        });

        function counter(event) {
           var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item

          // it loop is true then reset counter from 1
          if(item > items) {
            item = item - items
          }
          $('#counter').html("<span>0"+item+"</span> / 0"+items)
        }
        });

// Njehsori i numrave animacion
    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
// Navigationbar Hamburger Mobile
        $('#nav-icon1').click(function() {
            $(this).toggleClass('open');
        });
    });

    $timeout(function () {
        var owl = $('.tesimonial_carousel');
        owl.owlCarousel({
          items:1,
          loop:true,
          margin:10,
          center: false,
          dots: false,
          autoplay:true,
          autoplayTimeout:8000,
          autoplayHoverPause:true,
          nav:true,
          responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:1,
          },
          1000:{
              items:1,
              nav:true,
          }
        }
      });

        var owl = $('.slide__container');
        owl.owlCarousel({
          items:1,
          loop:true,
          margin:10,
          center: false,
          dots: false,
          autoplay:true,
          autoplayTimeout:8000,
          autoplayHoverPause:true,
          nav:true,
          responsive:{
          0:{
              items:1,
              nav:true,
          },
          600:{
              items:3,
          },
          1000:{
              items:4,
              nav:true,
          }
        }
      });
      var owl = $('.bedge_carousel');
      owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        center: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
        0:{
            items:2,
            nav:true,
        },
        600:{
            items:3,
            autoplay:false,
            touchDrag  : false,
            mouseDrag  : false
        },
        1000:{
            items:4,
            nav:true,
            autoplay:false,
            touchDrag  : false,
            mouseDrag  : false
        }
      }
    });

      var owl = $('.team-carousel');
        owl.owlCarousel({
          items:3,
          loop:true,
          margin:10,
          center: false,
          dots: true,
          autoplay:true,
          autoplayTimeout:5000,
          autoplayHoverPause:true,
          responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:4,
          },
          1000:{
              items:4,
          }
        }
      });


      }, 900)


    $rootScope.globalRequest = {
        "global":[
            {
                "type":"main_products",
                "limit": 'all'
            },
            {
                "type":"testimonials",
                "limit": 'all'
            },
            {
                "type":"proccess_a",
                "limit": 'all'
            },
            {
                "type":"our-history",
                "limit": 'all'
            },
            {
                "type":"media_cards",
                "limit": 'all'
            },
            {
                "type":"awards_one",
                "limit": 'all'
            },
            {
                "type":"app_benefits",
                "limit": 'all'
            },
            {
                "type":"more_what_app",
                "limit": 'all'
            },
            {
                "type":"web_benefits",
                "limit": 'all'
            },
            {
                "type":"more_what_web",
                "limit": 'all'
            },
            {
                "type":"marketing_benefits",
                "limit": 'all'
            },
            {
                "type":"more_what_marketing",
                "limit": 'all'
            },
            {
                "type":"scope_veron",
                "limit": 'all'
            },
            {
                "type":"scope_bayan",
                "limit": 'all'
            },
            {
                "type":"al_scope",
                "limit": 'all'
            },
            {
                "type":"smart_sh_scope",
                "limit": 'all'
            },
            {
                "type":"store_scope",
                "limit": 'all'
            },
            {
                "type":"extra_scope",
                "limit": 'all'
            },
            {
                "type":"scope_xxsim",
                "limit": 'all'
            },
            {
                "type":"type_apps",
                "limit": 'all'
            },
            {
                "type":"analytics_all",
                "limit": 'all'
            },
            {
                "type":"scope_shippers",
                "limit": 'all'
            },
            {
                "type":"scope_modastelle",
                "limit": 'all'
            },
            {
                "type":"blog_api",
                "limit": 'all'
            },
            {
                "type":"scope_dinesouq",
                "limit": 'all'
            },
            {
                "type":"cycle_scope",
                "limit": 'all'
            },
            {
                "type":"jobad_scope",
                "limit": 'all'
            },
            {
                "type":"scopeof_tartibk",
                "limit": 'all'
            },
            {
                "type":"slotted_scope",
                "limit": 'all'
            },
            {
                "type":"scope_dwisi",
                "limit": 'all'
            },
            {
                "type":"scope_falcon",
                "limit": 'all'
            },
            {
                "type":"media_clients_many",
                "limit": 'all'
            },
            {
                "type":"more_what_web3",
                "limit": 'all'
            },
        ]
    };

    $http({
        method: 'POST',
        url: '/websites/api/global',
        data: $rootScope.globalRequest,
    }).then(function (response) {

        $rootScope.includes = response.data;

        console.log($rootScope.includes);

    });
});
app.controller("HeaderCtrl", function ($scope, $http, $log, $window) {
    $scope.isSending = false;
    $scope.validateForm = false;
    $scope.sendingSuccesful = false;
    $scope.contact = {
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    };
    $http({
        method:'GET',
        format: 'jsonp',
        url: "/websites/api/pages",
    }).then(function (response) {
        $scope.pages = response.data;
    });
    $scope.redirect = function ( slug) {
        var url = "http://" + $window.location.host + slug;
        $log.log(url);
        $window.location.href = url;
    };

    $scope.mailSubject = function (param) {
        $scope.contact.subject = param;
        console.log($scope.contact);
    };

    $scope.sendMail = function (contact) {

        if ($scope.hasNull($scope.contact)) {
            $scope.validateForm = true;
            $scope.isSending = false;
        } else {
            $scope.validateForm = false;
            $scope.isSending = true;
        }

        if ($scope.validateForm == false) {
            $http({
                method:'POST',
                format: 'jsonp',
                data: $scope.contact,
                url: "/send/mail",
            }).then(function (response) {
                $scope.isSending = false;
                $scope.sendingSuccesful = true;
            });
        }
    };

    $scope.hasNull = function (target) {
       for (var contact in target) {
            if (target[contact] == null || target[contact] == "")
                return true;
        }
        return false;
    };

    $scope.sendNewsletter = function (newsletter) {
        $http({
            method:'POST',
            format: 'jsonp',
            url: "/websites/api/pages",
        }).then(function (response) {
            $scope.pages = response.data;
        });
    };

});

app.filter('moment', function () {
    return function (input, momentFn) {
        var args = Array.prototype.slice.call(arguments, 2),
            momentObj = moment(input);
        return momentObj[momentFn].apply(momentObj, args);
    };
});
