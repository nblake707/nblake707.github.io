"use strict";

/////////////  Menu Toggle ///////////////////
function menuToggle(){
  var nav = document.getElementById('menu-overlay');
  nav.classList.toggle('active');
  
  var nav = document.getElementById('toggleIcon');
  nav.classList.toggle('active');
}

// function closeOverlay(){
//   var nav = document.getElementById('menu-overlay');

//   // var links = document.querySelectorAll('#menu-overlay ul li a');
// }





/////////////  Typing Animation ///////////////////


// List of sentences
var _CONTENT = [ "I'm a web developer", "I'm a coding instructor", "I'm a curriculum engineer"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#type-text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


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

// const htmlTag = document.querySelector("html");
// const bodyTag = document.querySelector("body");
// const myNav = document.querySelector("nav");
// const myElem = document.querySelector("nav li a");

// let scrolled = () => {
//   let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
//   return Math.floor(dec * 100);
// };

// addEventListener("scroll", () => {
//   myNav.style.setProperty(
//     "background",
//     scrolled() > 1 ? "var(--color2)" : "var(--color1)"
//   );
// });



