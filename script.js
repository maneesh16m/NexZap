$(window).on("load", function() {
    $(".preloader").fadeOut("slow");
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 90)

});

/**********Features********  */
$('.features-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    }
});



/****************** page scrolling ***************/
$.scrollIt({
    topOffset: -50

});



/************ Navbar collapse**************/

$(document).ready(function() {
    $(".nav-link").click(function() {
        $(".navbar-collapse").collapse('hide');
    });
});

/*****************Toggle Theme - light & Dark *********** */

function toggleTheme() {
    if (localStorage.getItem("saadany") !== null) {
        if (localStorage.getItem("saadany") === "dark") {
            $("body").addClass("dark");
        } else {
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();

$(".toggle-theme").on("click", function() {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
        localStorage.setItem("saadany", "dark");
    } else {
        localStorage.setItem("saadany", "light");
    }
    updateIcon();
});

function updateIcon() {
    if ($("body").hasClass("dark")) {
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    } else {
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");

    }
}