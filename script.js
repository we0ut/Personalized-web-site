///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile nav

const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Making the boxes work

document.getElementById("todo-box").addEventListener("click", function () {
  window.open("https://we0ut.github.io/todo-app-main/", "_blank");
});

document.getElementById("shortly-box").addEventListener("click", function () {
  window.open(
    "https://we0ut.github.io/URL-shortening-API-landing-page/",
    "_blank"
  );
});

document.getElementById("ip-box").addEventListener("click", function () {
  window.open("https://we0ut.github.io/IP-address-tracker-app/", "_blank");
});
