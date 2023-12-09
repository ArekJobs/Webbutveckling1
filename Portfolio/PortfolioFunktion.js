
// Smooth scrolling nav-links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const yOffset = -60; 
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        })
    }
})

// JS for carousel 
let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById('carousel');
  const slideWidth = document.querySelector('.carousel-item').clientWidth;
  carousel.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}
// PrevSlide
function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}
// NextSlide 
function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}

// JS for dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// More JS for dark mode (Smooth transition)
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark-mode-toggle');
}

