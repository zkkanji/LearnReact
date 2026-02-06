# Card Component Instructions

## Goal
Create a reusable card component that supports dynamic content and renders three cards total.

## Requirements
- The card component must accept props for `title`, `description`, `image`, `buttonText`, and `buttonLink`.
- Clicking the button should navigate to the provided `buttonLink`.
- There should be **3 cards** when finished.

## Images
- Images are located in `src/assets`.
- Import images like this and use the variables as props:
  `import img1 from "./assets/img1.jpg";`

## Bootstrap
- Reference Bootstrap card docs for classes:
  https://getbootstrap.com/docs/4.0/components/card/
- Apply the card width style:
  `style={{ width: "18rem" }}`

## Accessibility and Link Behavior
- Give the image an `alt` attribute.
- The button link should use:
  `target="_blank"` and `rel="noopener noreferrer"`.
