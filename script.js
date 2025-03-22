document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".slide-in");
  const header = document.querySelector("header");

  // Slide-in animation for sections
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  const handleScroll = () => {
    // Slide-in animation
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("visible");
      }
    });

    // Sticky header effect
    if (window.scrollY > 10) {
      // Trigger after scrolling 10px
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
