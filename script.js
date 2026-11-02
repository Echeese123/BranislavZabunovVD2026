/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.05)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ==========================================
   SIMPLE REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-item, .process-item"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});
/* =========================================================
   HERO SLIDER
========================================================= */

const heroSlides =
    document.querySelectorAll(".hero-slide");

const heroDots =
    document.querySelectorAll(".hero-dot");

const heroPrev =
    document.querySelector(".hero-slider-prev");

const heroNext =
    document.querySelector(".hero-slider-next");


let heroCurrent = 0;

let heroTimer;


function showHeroSlide(index) {

    heroSlides.forEach(slide => {

        slide.classList.remove("active");

    });


    heroDots.forEach(dot => {

        dot.classList.remove("active");

    });


    heroSlides[index]
        .classList.add("active");


    heroDots[index]
        .classList.add("active");


    heroCurrent = index;

}


function nextHeroSlide() {

    let next =
        heroCurrent + 1;


    if (
        next >= heroSlides.length
    ) {

        next = 0;

    }


    showHeroSlide(next);

}


function previousHeroSlide() {

    let previous =
        heroCurrent - 1;


    if (previous < 0) {

        previous =
            heroSlides.length - 1;

    }


    showHeroSlide(previous);

}


/* NEXT */

if (heroNext) {

    heroNext.addEventListener(
        "click",
        () => {

            nextHeroSlide();

            restartHeroTimer();

        }
    );

}


/* PREVIOUS */

if (heroPrev) {

    heroPrev.addEventListener(
        "click",
        () => {

            previousHeroSlide();

            restartHeroTimer();

        }
    );

}


/* DOTS */

heroDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                showHeroSlide(index);

                restartHeroTimer();

            }
        );

    }
);


/* AUTOMATIC */

function startHeroTimer() {

    heroTimer =
        setInterval(
            nextHeroSlide,
            4500
        );

}


function restartHeroTimer() {

    clearInterval(heroTimer);

    startHeroTimer();

}


if (heroSlides.length > 0) {

    startHeroTimer();

}
/* =========================================================
   NEW HERO SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides =
        document.querySelectorAll(".hero-new-slide");

    const dots =
        document.querySelectorAll(".hero-new-dot");

    const next =
        document.querySelector(".hero-new-next");

    const prev =
        document.querySelector(".hero-new-prev");

    if (!slides.length) return;

    let current = 0;
    let timer;


    function showSlide(index) {

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }


        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        dots.forEach(function (dot) {

            dot.classList.remove("active");

        });


        slides[index].classList.add("active");


        if (dots[index]) {

            dots[index].classList.add("active");

        }


        current = index;

    }


    function nextSlide() {

        showSlide(current + 1);

    }


    function previousSlide() {

        showSlide(current - 1);

    }


    function restartTimer() {

        clearInterval(timer);

        timer = setInterval(
            nextSlide,
            4500
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            function () {

                nextSlide();

                restartTimer();

            }
        );

    }


    if (prev) {

        prev.addEventListener(
            "click",
            function () {

                previousSlide();

                restartTimer();

            }
        );

    }


    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                showSlide(index);

                restartTimer();

            }
        );

    });


    showSlide(0);

    restartTimer();

});
/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
