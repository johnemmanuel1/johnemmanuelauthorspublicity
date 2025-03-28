window.onload = function () {
    let darkModeButton = document.getElementById("dark-mode-toggle");

    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Save preference in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // Contact Form Submission with Loading Indicator
    let contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let form = this;
            let submitButton = form.querySelector("button[type='submit']");
            let confirmationMessage = document.getElementById("confirmation-message");

            // Show loading state
            submitButton.textContent = "Sending...";
            submitButton.disabled = true;

            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
            })
            .then(response => {
                if (response.ok) {
                    confirmationMessage.style.display = "block";
                    form.reset();
                } else {
                    alert("Error sending message. Please try again.");
                }
            })
            .catch(error => console.error("Error:", error))
            .finally(() => {
                // Reset button after submission
                submitButton.textContent = "Send Message";
                submitButton.disabled = false;
            });
        });
    }
};

// Function to show/hide sample sections smoothly
function toggleSamples(sectionId) {
    let section = document.getElementById(sectionId);
    section.classList.toggle("active");

    if (section.classList.contains("active")) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        section.style.display = "none";
    }
                }
