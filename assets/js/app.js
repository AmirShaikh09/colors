//toggle mobile menu
const menuToggle = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

const toggleMenu = () => {
  menuToggle.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menuToggle.addEventListener("click", toggleMenu);

const hideMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menuToggle.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMenu);
//show active menu when scrolling
const navLogo = document.querySelector("#navbar-logo");

const highlightMenu = () => {
  const element = document.querySelector(".highlight");
  const home = document.querySelector("#home-page");
  const about = document.querySelector("#about-page");
  const service = document.querySelector("#service-page");
  const contact = document.querySelector("#contact-page");

  let scrollPosition = window.scrollY;
  console.log(scrollPosition);

  if (window.innerWidth > 960 && scrollPosition < 500) {
    home.classList.add("highlight");
    about.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 1200) {
    home.classList.remove("highlight");
    about.classList.add("highlight");
    service.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 1800) {
    about.classList.remove("highlight");
    service.classList.add("highlight");
    contact.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 2600) {
    service.classList.remove("highlight");
    contact.classList.add("highlight");
    return;
  }

  if ((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
    element.classList.remove("highlight");
  }
};

navLogo.addEventListener("click", hideMenu);
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
