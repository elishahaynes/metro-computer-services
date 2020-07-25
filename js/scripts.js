// Hamburger Menu (one of the "feature requirements")

function toggleClass(){
  let menu = document.querySelector(".main-nav");
  menu.classList.toggle("toggleCls");
}


// Carousel of Testimonials (one of the "feature requirements")

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Changes image every 8 seconds
}

