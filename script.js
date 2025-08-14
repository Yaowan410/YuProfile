// JavaScript for YuProfile website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('YuProfile website loaded successfully');
    
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Add fade-in animation for page content
function fadeInContent() {
    const content = document.querySelector('main, .container');
    if (content) {
        content.style.opacity = '0';
        content.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            content.style.opacity = '1';
        }, 100);
    }
}

// Call fade-in animation
fadeInContent();