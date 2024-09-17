document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".fade-in");
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section.classList.add("show");
      }
    });
  });