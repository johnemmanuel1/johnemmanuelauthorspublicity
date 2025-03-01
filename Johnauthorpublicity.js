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
};

// Function to show/hide sample sections smoothly
function toggleSamples(sectionId) {
    let section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        section.style.display = "none";
    }
}