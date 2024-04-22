/** @format */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0; // Index of the currently active slide

function showSlide(index) {
  // Ensure the current slide is hidden and the new one is shown
  slides[currentSlide].classList.remove("active");
  slides[index].classList.add("active");
  currentSlide = index; // Update the current slide index
}

// Attach event listeners to 'Next' buttons
document.querySelectorAll(".next").forEach((button) => {
  button.addEventListener("click", () => {
    let nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex >= slides.length) {
      nextSlideIndex = 0; // Loop back to the first slide
    }
    showSlide(nextSlideIndex);
  });
});

// Attach event listeners to 'Previous' buttons
document.querySelectorAll(".prev").forEach((button) => {
  button.addEventListener("click", () => {
    let prevSlideIndex = currentSlide - 1;
    if (prevSlideIndex < 0) {
      window.location.href = "index.html"; // Loop to the last slide
    } else showSlide(prevSlideIndex);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    let nextSlideIndex = (currentSlide + 1) % slides.length;
    showSlide(nextSlideIndex);
  } else if (event.key === "ArrowLeft") {
    let prevSlideIndex = currentSlide - 1;
    if (prevSlideIndex < 0) {
      window.location.href = "index.html"; // Loop to the last slide
    } else showSlide(prevSlideIndex);
  }
});
