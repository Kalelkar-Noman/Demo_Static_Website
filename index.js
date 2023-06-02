function toggle() {
  let d = document.getElementById("drop");
  let con = document.getElementById("check");

  // Check if the dropdown menu is already open
  if (d.classList.contains("open")) {
    // Close the dropdown menu
    d.classList.remove("open");

    // Update the text of the check element
    con.innerHTML = "menu";
  } else {
    // Open the dropdown menu
    d.classList.add("open");

    // Update the text of the check element
    con.innerHTML = "close";
  }
}
function hoverdiv(elementId) {
  const backgroundColor = "white";
  document.getElementById(elementId).style.backgroundColor = backgroundColor;
}
function nohoverdiv(elementId, divcolor) {
  const backgroundColor = divcolor;
  document.getElementById(elementId).style.backgroundColor = backgroundColor;
}

let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("inview");
    }
  });
});

const elements = document.querySelectorAll(".fade-up");

elements.forEach((element) => {
  observer.observe(element);
});
