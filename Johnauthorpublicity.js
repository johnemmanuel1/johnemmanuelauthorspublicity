window.onload = function () {
    let darkModeButton = document.getElementById("dark-mode-toggle");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Contact Form Submission
    let contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents default form submission

            let form = this;

            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById("confirmation-message").style.display = "block";
                    form.reset(); // Clear form fields
                } else {
                    alert("Error sending message. Please try again.");
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }

    // Slider Functionality
    let currentSlide = 0;
    function moveSlide(step) {
        let slides = document.querySelectorAll(".slide");
        let totalSlides = slides.length;
        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        document.querySelector(".slider-container").style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", function () {
        moveSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        moveSlide(1);
    });
};
