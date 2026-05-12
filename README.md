<<<<<<< HEAD
# Choplife Bistro Website
*A premium static restaurant site built with semantic HTML5, modern CSS3, and vanilla JavaScript.*

---

### ![HTML5](https://img.shields.io/badge/HTML5-🟧-e34f26?logo=html5) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3) ![JavaScript](https://img.shields.io/badge/JS-F7DF1E?logo=javascript) ![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## Tech Stack

| Technology | Reason for Choice |
|------------|-------------------|
| **HTML5** | Semantic markup improves accessibility, SEO, and provides native structure for the menu, navigation, and content sections. |
| **CSS3** | Enables advanced UI effects (glassmorphism, custom properties, transitions) without external libraries; guarantees fast style computation. |
| **Vanilla JavaScript** | Keeps the bundle size zero, leverages native APIs (IntersectionObserver, smooth scrolling) for animation and routing, ensuring instant load times. |
| **No Build Tools** | Eliminates a build step, making the project completely zero‑dependency—open the `index.html` directly in a browser. |
| **Responsive Design (Mobile‑First)** | Guarantees optimal experience across phones, tablets, and desktops using fluid layouts and media queries. |

---

## Features

- [x] **Custom Animated Cursor** – unique, performant cursor effects using CSS transforms and requestAnimationFrame.  
- [x] **Sticky Category Navigation** – anchor‑based scroll routing with a persistent navigation bar.  
- [x] **IntersectionObserver Scroll‑Reveal** – lazy‑load animations for sections as they enter the viewport.  
- [x] **Glassmorphism UI Components** – frosted‑glass cards and modals built with backdrop‑filter and translucency.  
- [x] **CSS Custom Properties Design System** – themable colors, spacing, and typography variables.  
- [x] **Mobile‑First Responsive Layout** – fluid grid and adaptive breakpoints for all devices.  
- [x] **Full Digital Menu** – 7 categories, 50+ dishes; each dish includes image, description, and price.  
- [x] **Zero Dependencies** – pure static files; no npm, no bundlers, no runtime server required.  

---

## Project Structure

```
choplife-bistro-website/
├─ assets/
│  ├─ images/            # Dish photos, UI icons, backgrounds
│  └─ fonts/             # Optional custom fonts
├─ css/
│  ├─ base.css           # Reset, typography, root custom properties
│  ├─ layout.css         # Grid, flex utilities, responsive breakpoints
│  └─ components.css     # Glassmorphism cards, navigation, cursor styles
├─ js/
│  └─ main.js            # Navigation, cursor, IntersectionObserver logic
├─ index.html            # Entry point, semantic sections, menu markup
└─ README.md              # This file
```

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/choplife-bistro-website.git
   cd choplife-bistro-website
   ```

2. **Open the site**

   Simply open `index.html` in any modern browser—no package manager, no build step:

   - Double‑click `index.html`, or
   - Run `start index.html` (Windows) / `open index.html` (macOS) from the terminal.

That’s it! The site will load instantly because it contains only static assets.

---

## Performance Notes

- **Zero JavaScript bundle size** – only a few kilobytes of hand‑written code.
- **No framework overhead** – no React, Vue, or heavy runtime.
- **No build pipeline** – eliminates transpilation, minification, and source‑map generation steps.
- **Native browser APIs** – `IntersectionObserver`, `requestAnimationFrame`, and CSS `backdrop-filter` are hardware‑accelerated, giving buttery‑smooth animations.

---

## Browser Compatibility

| Browser | Version* | Status |
|---------|----------|--------|
| Chrome  | 80+      | ✅ Fully supported |
| Edge    | 80+      | ✅ Fully supported |
| Firefox | 78+      | ✅ Fully supported |
| Safari  | 14+      | ✅ Fully supported |
| Opera   | 67+      | ✅ Fully supported |

*Versions indicate the first release that includes the required APIs (e.g., `backdrop-filter`, `IntersectionObserver`).

---

## Contributing

We welcome contributions of any kind—bug fixes, UI enhancements, new dishes, or documentation updates.

1. **Fork the repository** and create a new branch for your changes.
2. Ensure you **do not introduce external dependencies**; keep the project framework‑free.
3. Follow the existing code style (semantic HTML, BEM‑like CSS class naming, and clear JavaScript modular functions).
4. **Open a Pull Request** with a concise description of what you changed and why.
5. All PRs will be reviewed for **accessibility**, **performance**, and **responsiveness** before merging.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for full details.

---

*Happy coding and enjoy serving up the Choplife experience!*
=======
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4fa0ad05-d4db-42bf-83c4-afde6ae7330d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
