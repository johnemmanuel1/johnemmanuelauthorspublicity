let currentSlide = 0;

function moveSlide(step) {
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Dark Mode Toggle
const toggle = document.getElementById("dark-mode-toggle");
if (toggle) {
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Optional: Update the button text/icon
    if (document.body.classList.contains("dark-mode")) {
      toggle.innerText = "Light Mode";
    } else {
      toggle.innerText = "Dark Mode";
    }
  });
                  }
// Render Book Mockups
const mockupGallery = document.getElementById("mockup-gallery");
mockupGallery.innerHTML = Array.from({ length: 30 }, (_, i) => `
  <img src="mockup${i + 1}.jpg" alt="Mockup ${i + 1}" style="max-width: 180px; border-radius: 8px;">
`).join('');

// Render Book Trailers
const trailerGallery = document.getElementById("trailer-gallery");
trailerGallery.innerHTML = Array.from({ length: 15 }, (_, i) => `
  <video controls style="max-width: 300px; border-radius: 10px;">
    <source src="trailer${i + 1}.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
`).join('');
