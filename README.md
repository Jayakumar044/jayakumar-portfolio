# Jayakumar S - Frontend Developer Portfolio

A responsive personal portfolio website built with React, Vite, and Tailwind CSS. The interface features a default bright theme with clean typography and a switchable dark theme incorporating modern glassmorphism design elements.

---

## Key Features

### Customization and Theme System
- Bright Mode (Default): Clean white backgrounds, high-contrast dark navy typography, royal blue accents, and professional layout elevations.
- Dark Mode: Deep dark space aesthetic with subtle blue-purple ambient glow borders and frosted glass effects.
- Dynamic Switching: Immediate transitions of CSS variables, backgrounds, utility borders, and interactive card states on toggle.

### User Interface Elements
- Structured layout with responsive grid-based cards.
- Custom mouse cursor glow and progress indicator scroll bar.
- Collapsible project highlight panels.
- Animated typewriter headings for standard user onboarding section.
- Parallax depth and perspective-based carousel lists.

### Project Categories
- Frontend: Demonstrates core React, JavaScript, and responsive layout projects.
- Backend: Focuses on REST API architectures, data schemas, security libraries, and testing.
- Fullstack: Integration of React frontends with Node.js servers, SQL/NoSQL databases, and authentication systems.
- AI Engineer: Gemini AI workflow automation, trip planner design, structured JSON output parsing, and dynamic export configurations.

---

## Technical Specifications

### Tech Stack Details
- Core: React 18.3.1
- Bundler: Vite 5.4.10
- Styling: Tailwind CSS 3.4.14
- CSS Processing: PostCSS 8.4.47

### Color Reference

| Theme Element | Bright Mode Hex | Dark Mode Hex |
| --- | --- | --- |
| Main Background | #ffffff | #060912 |
| Secondary Background | #f0f6ff | #0d1224 |
| Primary Accent | #2563eb | #4f8bff |
| Secondary Accent | #0ea5e9 | #a855f7 |
| Auxiliary Accent | #6366f1 | #06b6d4 |
| Main Typography | #0f172a | #e8eaf0 |
| Muted Typography | #64748b | #6b7280 |

---

## Project Structure

```
portfolio/
├── public/
│   ├── assets/resume/Jayakumar_Frontend_Developer.pdf
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── AmbientOrbs.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeader.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Local Setup Instructions

### Pre-requisites
Ensure Node.js and npm are installed on your machine.

### Installation
Run the following command in the project root directory to install required dependencies:
```bash
npm install
```

### Development Server
To launch the local development server:
```bash
npm run dev
```
By default, the server will open at http://localhost:5173.

### Production Build
To generate production-ready assets:
```bash
npm run build
```

### Preview Build
To preview the production builds locally:
```bash
npm run preview
```

---

## Implementation Details

### State Management
Theme states are controlled within the root component (App.jsx) and distributed to downstream presentation elements using reactive React props:
```jsx
const [isDark, setIsDark] = useState(false);
const toggleTheme = () => setIsDark(prev => !prev);
```

### Class Application
CSS custom properties are used to control colors across both themes dynamically:
```css
.bright-mode {
  --primary: #2563eb;
  --bg:      #ffffff;
  --text:    #0f172a;
}

.dark-mode {
  --primary: #4f8bff;
  --bg:      #060912;
  --text:    #e8eaf0;
}
```

---

Designed and Developed by Jayakumar S.
Built with React, Vite, and Tailwind CSS.
© 2026 Jayakumar. All rights reserved.
