$(document).ready(function () {
    //Hero slider//

    $('#hero-slider').owlCarousel({
        loop: true,
        // margin: 10,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText: ['Prev ', 'Next'],
        responsive: {
            0: {
                nav: false
            },
            786: {
                nav: true
            }

        }
    })

    // --- project slider --///

    $('#project-slider').owlCarousel({
        loop: true,
        margin: 24,
        nav: true,

        dots: false,
        smartSpeed: 1000,
        // navText: ['Prev ', 'Next'],
        responsive: {
            0: {
                items: 1
            },
            786: {
                items: 2
            },
            1140: {
                items: 2,
                center: true,
                dots: true
            }

        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 1200,
    })


})




