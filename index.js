/*
 * Toggles the visibility of the drop-down menu.
 */
function toggle() {
  const drop = document.querySelector("#drop");
  const check = document.querySelector("#check");
  drop.classList.toggle("open", !drop.classList.contains("open"));
  check.innerHTML = drop.classList.contains("open") ? "close" : "menu";
}
document.querySelector("#drop").addEventListener("click", toggle);
/**
 * Changes the background color of the element to white.
 */
function hoverdiv(elementId) {
  document.getElementById(elementId).style.backgroundColor = "white";
}
/**
 * Changes the background color of the element to the specified color.
 */
function nohoverdiv(elementId, divcolor) {
  document.getElementById(elementId).style.backgroundColor = divcolor;
}
/**
 * Shows the "Back to top" button when the user scrolls down.
 */
function scrollFunction() {
  const mybutton = document.querySelector("#myBtn");
  mybutton.style.display = window.scrollY > 20 ? "block" : "none";
}
document.addEventListener("scroll", scrollFunction);

function topFunction() {
  window.scrollTo(0, 0);
}

const observer = new IntersectionObserver(entries => entries.filter(entry => entry.intersectionRatio > 0).forEach(entry => entry.target.classList.add("inview")));
const elements = document.querySelectorAll(".fade-up, .zoom-out");
elements.forEach((element) => {
  observer.observe(element);
});
