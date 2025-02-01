/* ==================== SCROLL SECTIONS ACTIVE LINK ===================== */
function scrollActive() {
  const sections = document.querySelectorAll("section[id]");
  const indicator = document.querySelector(".indicator");

  const scrollY = window.scrollY;

  sections.forEach((current, index) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.add("active");

      indicator.style.transform = `translateX(${56 * index}px)`;
    } else {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
