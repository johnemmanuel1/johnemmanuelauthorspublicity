let currentSlide = 0;

function moveSlide(step) {
    let slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    document.querySelector(".slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("dark-mode-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }
});
