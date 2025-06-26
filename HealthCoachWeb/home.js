// home.js

// Sticky header shadow on scroll
document.addEventListener('DOMContentLoaded', fadeInOnScroll);
console.log("home.js loaded");

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 20) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Scroll-triggered fade-in animations
const fadeEls = document.querySelectorAll('.main, .about, .main-services, .services, .blog, .events, .team-intro, .team-members, .contact');

const observerOptions = {
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, observerOptions);

fadeEls.forEach(el => {
  fadeObserver.observe(el);
});

// Button click animation
const buttons = document.querySelectorAll('.sub-button, .cta-button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 150);
  });
});

function fadeInOnScroll() {
    
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      if (!section.classList.contains('fade-in')) {
        console.log('Fading in:', section.id || section.className);
        section.classList.add('fade-in');
      }
    }
  });
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});