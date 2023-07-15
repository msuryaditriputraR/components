/* ==================== TOGGLE MENU ===================== */
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

/*SHOW*/
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navMenu.classList.remove("hidden");
});

/*HIDDEN*/
closeMenu.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.remove("show");
});

new hoverEffect({
    parent: document.querySelector(".home__img"),
    intensity: 0.3,
    image1: "assets/img/img1.jpg",
    image2: "assets/img/img2.jpg",
    displacementImage: "assets/img/diss.png",
    imagesRatio: 450 / 300,
});

/* NAV, TITLE, IMG */
gsap.from(".nav", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -30,
});
gsap.from(".home__title", {
    opacity: 0,
    duration: 1.2,
    delay: 1.2,
    y: -30,
});
gsap.from(".home__img", {
    opacity: 0,
    duration: 1.3,
    delay: 1.3,
    y: -50,
});

/*SOCIAL, SUBTITLE, BUTTON*/
gsap.from(".home__social", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    y: 50,
});
gsap.from(".home__subtitle", {
    opacity: 0,
    duration: 1,
    delay: 1.8,
    y: 50,
});
gsap.from(".home__button", {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: 50,
});
