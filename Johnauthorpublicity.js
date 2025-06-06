document.addEventListener('DOMContentLoaded', () => {
  // Slide logic (assuming slider-container and slide classes exist)
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
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      toggle.innerText = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    });
  }

  // Render Mockup Gallery
  const mockupGallery = document.getElementById("mockup-gallery");
  if (mockupGallery) {
    // List of your actual mockup filenames with spaces encoded for URL
    const mockupFiles = [
      "mockup%203.jpg",
      "mockup%203i.jpg",
      "mockup%204i.jpg",
      "mockup%204ii.jpg",
      "mockup%204iii.jpg",
      "mockup%204iv.jpg",
      "mockup4.jpg"
    ];

    mockupGallery.innerHTML = mockupFiles.map((filename, i) => `
      <img src="${filename}" alt="Mockup ${i + 3}" style="max-width: 180px; border-radius: 8px; margin-right: 10px; margin-bottom: 10px;">
    `).join('');
  }

  // Render Trailer Gallery (make sure your HTML has <section id="trailer-gallery"></section>)
  const trailerGallery = document.getElementById("trailer-gallery");
  if (trailerGallery) {
    // Your actual trailer filenames (spaces encoded)
    const trailerFiles = [
      "trailer%201.mp4",
      "trailer%202.mp4"
    ];

    trailerGallery.innerHTML = trailerFiles.map((filename, i) => `
      <video controls style="max-width: 300px; border-radius: 10px; margin-right: 10px; margin-bottom: 10px;">
        <source src="${filename}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `).join('');
  }
});
