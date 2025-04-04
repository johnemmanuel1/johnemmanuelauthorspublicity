let currentSlide = 0;

function moveSlide(step) {
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: dark mode toggle (if you have a toggle button)
const toggle = document.getElementById("dark-mode-toggle");
if (toggle) {
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}
