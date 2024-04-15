// // JavaScript for automatic slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let testimonials = document.querySelectorAll('.testimonial');
//   for (let i = 0; i < testimonials.length; i++) {
//     testimonials[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > testimonials.length) {slideIndex = 1}    
//   testimonials[slideIndex - 1].style.display = "block";  
//   setTimeout(showSlides, 5000); // Change slide every 5 seconds
// }


// JavaScript for testimonial slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let testimonials = document.querySelectorAll('.testimonial');
  slideIndex++;
  if (slideIndex >= testimonials.length) {
    slideIndex = 0; // Reset slideIndex if it exceeds the number of testimonials
  }
  let offset = -slideIndex * 600; // Adjust the width of the testimonial (600px) according to your design
  document.querySelector('.testimonial-container').style.transform = `translateX(${offset}px)`;
  setTimeout(showSlides, 5000); // Change testimonial every 5 seconds
}