/** Header scroll effect */
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

/** Scroll reveal animation */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

/** Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/** Mobile nav toggle (간단 버전) */
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-links');

if (navMenu && navLinks) {
  navMenu.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '2rem';
    navLinks.style.background = '#111111';
    navLinks.style.border = '1px solid #1c1c1c';
    navLinks.style.borderRadius = '12px';
    navLinks.style.padding = '0.75rem';
    navLinks.style.gap = '0.25rem';
    if (isOpen) {
      navLinks.style.display = 'none';
    }
  });
}
