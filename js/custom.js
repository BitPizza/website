$(document).ready(function () {
    // carousel script
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                stagePadding: 100,
            },
            600: {
                items: 3,
                nav: false,
                stagePadding: 100,
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
})
