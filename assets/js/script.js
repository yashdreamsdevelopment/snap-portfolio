const navToggleBTN = document.getElementById("NavToggleBtn");
const sideNavigationEle = document.getElementById("Navbar");
const overlay = document.getElementById("overlay");

navToggleBTN.addEventListener("click", (e) => {
  sideNavigationEle.classList.toggle("navbar_open");
  overlay.classList.toggle("overlay-open");
});
