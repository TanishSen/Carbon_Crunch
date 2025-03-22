document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".slide-in");
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");

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

    parallaxOnScroll();
  };

  const parallaxOnScroll = () => {
    const scroll = window.scrollY;
    hero.style.backgroundPositionY = `${scroll * 0.5}px`;
  };

  const parallaxOnMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const offsetX = (window.innerWidth / 2 - x) * 0.02;
    const offsetY = (window.innerHeight / 2 - y) * 0.02;
    hero.style.backgroundPositionX = `${50 + offsetX}%`;
    hero.style.backgroundPositionY = `${scroll * 0.5 + offsetY}px`;
  };

  window.addEventListener("scroll", handleScroll);
  // window.addEventListener("mousemove", parallaxOnMouseMove);
  handleScroll();
});
