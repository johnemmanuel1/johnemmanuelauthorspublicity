let currentSlide = 0;

function moveSlide(step) {
    let slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    document.querySelector(".slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
