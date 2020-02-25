$(document).ready(function() {

    $('.select-cv__carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        navText: [
            '<i class="flaticon-back" aria-hidden="true"></i>',
            '<i class="flaticon-right-arrow" aria-hidden="true"></i>'
        ],
        navContainer: '.select-cv__carouselBox .custom-nav',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    $('.select-cv__carousel--1').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        navText: [
            '<i class="flaticon-back" aria-hidden="true"></i>',
            '<i class="flaticon-right-arrow" aria-hidden="true"></i>'
        ],
        navContainer: '.select-cv__carouselBox--1 .custom-nav',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

  });




  $(document).ready(function() {

    $('.select-cv__carousel--1').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        navText: [
            '<i class="flaticon-back" aria-hidden="true"></i>',
            '<i class="flaticon-right-arrow" aria-hidden="true"></i>'
        ],
        navContainer: '.select-cv__carouselBox--1 .custom-nav--1',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

  });
