
# Fancy GSAP Transitions (Astro Project)

A modern Astro site featuring SVG morphing transitions powered by GSAP and MorphSVGPlugin. The home page animation only plays for returning visitors, using localStorage for session logic.

## 🚀 Features

- SVG morphing transitions with GSAP and MorphSVGPlugin
- Animation only plays for returning visitors (tracked via localStorage)
- Smooth content reveal after animation
- Easily customizable for other pages

## 🗂️ Project Structure

```
/
├── public/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── morphing-animation.js
│   └── pages/
│       ├── index.astro
│       └── about.astro
├── package.json
└── README.md
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4323`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🧩 Animation Logic

- On first visit, SVG animation is hidden and content is shown immediately.
- On returning visits, SVG animation plays first, then content is revealed.
- To test first-visit logic, clear localStorage in your browser console:
	```js
	localStorage.removeItem('visitedHome');
	```

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [GSAP Documentation](https://greensock.com/docs/)
- [MorphSVGPlugin](https://greensock.com/morphSVG/)
