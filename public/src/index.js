import ScrollReveal from "scrollreveal";
const $ = require("jquery");

function toggleMobileMenu() {
  $(".nav__icon").click(() => {
    $(".nav__icon").toggleClass("is-clicked");
    $(".nav__mobile-menu").toggleClass("is-opened");
    $("body").toggleClass("menu-open");
  });

  $("main").click(() => {
    $(".nav__icon").removeClass("is-clicked");
    $(".nav__mobile-menu").removeClass("is-opened");
    $("body").removeClass("menu-open");
  });
}

function activateScrollReveal() {
  var slideUp = {
    origin: "top",
    distance: "-40px",
    duration: 1200,
    delay: 100,
  };

  window.sr = ScrollReveal();
  window.sr.reveal(".animate-fade-in", { duration: 2000 });
  window.sr.reveal(".animate-slide-up", slideUp);
  window.sr.reveal(".animate-delay-200", { delay: 200 });
  window.sr.reveal(".animate-delay-300", { delay: 300 });
  window.sr.reveal(".animate-delay-400", { delay: 400 });
  window.sr.reveal(".animate-delay-500", { delay: 500 });
}

toggleMobileMenu();
activateScrollReveal();
