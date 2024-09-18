// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to check if the element is in view (for scrolling fade animation)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.50 && // Trigger when 75% visible
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}

// Function to handle the intersection (for scrolling fade animation)
function handleScroll() {
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Add scroll event listener (for scrolling fade animation)
window.addEventListener('scroll', handleScroll);

// Initial check (for scrolling fade animation)
handleScroll();
