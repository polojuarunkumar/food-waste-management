// Fade in sections on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeElems = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    fadeElems.forEach(elem => {
      elem.classList.add("fade-in");
      observer.observe(elem);
    });
  });
  
