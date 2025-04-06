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
