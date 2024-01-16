document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.btn');
    const navLinks = document.querySelector('.nav__links');
  
    mobileMenuButton.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  
    // Review slider navigation
    const reviewNav = document.querySelector('.review__nav');
    const reviewContent = document.querySelector('.review__content');
  
    reviewNav.addEventListener('click', function (e) {
      const direction = e.target.classList.contains('ri-arrow-left-line') ? -1 : 1;
      // Add logic to navigate through reviews (left/right) based on 'direction'
      // You can use additional HTML or modify existing structure for multiple reviews
    });
  });
  