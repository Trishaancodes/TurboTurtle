  document.addEventListener("scroll", () => {
    document.querySelectorAll('.fade-card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('loaded');
      }, index * 150); // stagger animation
    });
  });