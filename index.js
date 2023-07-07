"use strict";
function toggle() {
  let e = document.querySelector("#drop"),
    o = document.querySelector("#check");
  e.classList.toggle("open", !e.classList.contains("open")),
    (o.innerHTML = e.classList.contains("open") ? "close" : "menu");
}
function hoverdiv(e) {
  document.getElementById(e).style.backgroundColor = "white";
}
function nohoverdiv(e, o) {
  document.getElementById(e).style.backgroundColor = o;
}
function scrollFunction() {
  let e = document.querySelector("#myBtn");
  e.style.display = window.scrollY > 20 ? "block" : "none";
}
function topFunction() {
  window.scrollTo(0, 0);
}
document.querySelector("#drop").addEventListener("click", toggle),
  document.addEventListener("scroll", scrollFunction);
const observer = new IntersectionObserver((e) =>
    e
      .filter((e) => e.intersectionRatio > 0)
      .forEach((e) => e.target.classList.add("inview"))
  ),
  elements = document.querySelectorAll(".fade-up, .zoom-out");
elements.forEach((e) => {
  observer.observe(e);
});
