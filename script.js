let menu = document.querySelector(".menu");
let ham = document.querySelector(".nav-bar");
let xIcon = document.querySelector(".xIcon");
let menuIcon = document.querySelector(".menuIcon");

//hamburger menu for mobile screens
ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none"
  }
}

let menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener("click", toggleMenu);
  }
)