const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.ham-nav-list');

hamburger.addEventListener('click',() => {
    navList.classList.toggle('active');
})

// SCROLL ANIMATIONS - Intersection Observer
// This makes elements animate when they scroll into view

// Select all elements with animation classes
const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-left, .slide-right, .scale-up');

// Create Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If element is in viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing after animation (remove this line if you want it to animate every time)
            // observer.unobserve(entry.target);
        } else {
            // Optional: Remove class when out of view (re-animate when scrolling back)
            // entry.target.classList.remove('visible');
        }
    });
}, {
    // Options: trigger when 20% of element is visible
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all animated elements
animatedElements.forEach(el => observer.observe(el));

console.log('Scroll animations loaded - ' + animatedElements.length + ' elements will animate');