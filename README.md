# Carbon Crunch - Eco Reporting Website

## Project Overview
"Carbon Crunch" is a single-page website designed for a fictional company that provides eco-reporting solutions. The homepage features a modern, minimal design with a transparent navigation bar that changes color on scroll, a hero section with a glassmorphism effect, and sections for stats, features, and services. The goal was to create a clean, user-friendly interface that emphasizes sustainability while maintaining a professional and visually appealing aesthetic.

## Live Preview
[View the live preview on Vercel](https://carbon-crunch-tau.vercel.app/)

## Technologies Used
- **HTML5**: Used for the structure of the webpage, including semantic elements for better accessibility.
- **CSS3**: Used for styling, including:
  - Glassmorphism effects (`backdrop-filter: blur()`).
  - Animations (e.g., slide-in effects, scroll-down indicator bounce).
  - Responsive design with media queries.
- **JavaScript**: Used for interactivity, including:
  - Scroll-based header color change (transparent to white with shadow).
  - Slide-in animations for sections when they enter the viewport.
- **Google Fonts**: Used the Poppins font for typography (`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`).
- **SVGs**: Inline SVGs are used for icons in the features section and the scroll-down indicator.

## Approach
The development of this project followed a structured approach to achieve a minimal, modern, and functional design:

1. **Design Philosophy**:
   - Focused on a minimal and sober aesthetic to align with the sustainability theme.
   - Used a transparent header and glassmorphism effect in the hero section to create a modern, professional look.
   - Incorporated subtle animations to enhance user engagement without overwhelming the design.

2. **Header Behavior**:
   - Implemented a transparent navigation bar that transitions to a white background with a shadow when the user scrolls down (triggered after 10px of scrolling).
   - Added a logo to the left of the company name "CarbonCrunch" in the nav bar for branding.
   - Used JavaScript (`window.scrollY`) to toggle the `scrolled` class on the header, with CSS transitions for a smooth effect.

3. **Hero Section**:
   - Designed a full-screen hero section with a background image of a stethoscope and globe on a mossy surface to reflect the eco theme.
   - Added a subtle dark overlay (`rgba(0, 0, 0, 0.2)`) to improve text readability.
   - Applied a glassmorphism effect to the hero content using `backdrop-filter: blur(20px)` and a semi-transparent background.
   - Included a scroll-down indicator with a bounce animation to encourage users to explore more content.

4. **Additional Sections**:
   - **Stats Section**: Displayed key statistics in a grid layout with hover effects for interactivity.
   - **Features Section**: Highlighted key features with icons and descriptions in a grid layout.
   - **Services Section**: Showcased services with an image and text, maintaining a clean and balanced design.

5. **Enhancements**:
   - Adjusted typography for better hierarchy (e.g., larger and bolder "CARBON CRUNCH" text in the hero section).
   - Added subtle hover effects to buttons (e.g., scale-up effect) for better interactivity.
   - Included a logo in the nav bar to enhance branding.
   - Ensured the design is fully responsive, with adjustments for smaller screens (e.g., stacking elements, hiding the scroll-down indicator on mobile).

6. **Responsiveness**:
   - Used media queries to ensure the layout adapts to different screen sizes.
   - Adjusted font sizes, padding, and element stacking for mobile devices (below 768px).
   - Reduced the logo size and nav bar padding on smaller screens to maintain a balanced layout.

## Setup Instructions
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/TanishSen/carbon-crunch.git]
