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
            event.preventDefault();
            let form = this;
            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById("confirmation-message").style.display = "block";
                    form.reset();
                } else {
                    alert("Error sending message. Please try again.");
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }
};

// Book Slider & Popup
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    else if (currentSlide >= totalSlides) currentSlide = 0;

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

setInterval(() => moveSlide(1), 5000);

function openPopup(title, description) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupDescription").innerText = description;
    document.getElementById("bookPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("bookPopup").style.display = "none";
                            }
