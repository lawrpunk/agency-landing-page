const hamburgerIcon = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector("ul");
const body = document.body;

function updateStyleBasedOnScreenSize() {
  const screenSizeThreshold = 665;

  if (window.innerWidth <= screenSizeThreshold) {
    hamburgerIcon.style.display = "block";
    navLinks.classList.add("hide");
  } else {
    hamburgerIcon.style.display = "none";
    navLinks.classList.remove("hide");
  }
}

function showHamburger() {
  hamburgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("ul-hamburger");
    body.classList.toggle("disable-scroll");
  });
}

window.addEventListener("resize", updateStyleBasedOnScreenSize);

updateStyleBasedOnScreenSize();
showHamburger();
