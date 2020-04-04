"use strict";

/////////////  Smooth Scrolling ///////////////////

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//////////////////// Navbar Gradient ///////////////////////

const htmlTag = document.querySelector("html");
const bodyTag = document.querySelector("body");
const myNav = document.querySelector("nav");
const myElem = document.querySelector("nav li a");

let scrolled = () => {
  let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec * 100);
};

addEventListener("scroll", () => {
  myNav.style.setProperty(
    "background",
    scrolled() > 13 ? "var(--color2)" : "var(--color1)"
  );
});
