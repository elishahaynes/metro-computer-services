// Hamburger Menu JavaScript


// function myFunction() {
//     var x = document.getElementById("homeNav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

// function myFunction() {
//     var x = document.getElementById("servicesNav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

// function myFunction() {
//     var x = document.getElementById("blogNav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

// function myFunction() {
//     var x = document.getElementById("contactNav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }



// Testing the Typewriter Function below 

// let i = 0;
// let txt = 'Serving the IT needs of Louisville since 2008';
// let speed = 50;  The speed/duration of the effect in milliseconds
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("typing").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }






var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 8 seconds
}
