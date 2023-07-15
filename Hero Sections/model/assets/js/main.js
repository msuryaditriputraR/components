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
