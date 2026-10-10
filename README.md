# 🚀 Modern Personal Portfolio Website

A sleek, responsive, and high-performance developer portfolio website designed for **MUBASHIRA M** — *MERN Fullstack Developer*. Built with **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**.

---

## 📸 Overview & Features

- **Dark Mode Cyber-Luxe Aesthetic**: Deep obsidian background (`#090b11`) with neon purple and electric blue accent glows.
- **Dynamic Hero Section**: Interactive typewriter effect showcasing multiple roles and specializations.
- **Fully Responsive**: Optimized for seamless viewing on smartphones, tablets, laptops, and ultra-wide screens.
- **Bootstrap 5.3 CDN Integration**: Utilizing modern grid layouts, modals, and responsive utilities without bloat.
- **Interactive Project Showcase**:
  - **Fragranzia** (Luxury Perfume E-Commerce Platform)
  - **DevConnect** (Developer Community & Code Sharing Network)
  - **TaskFlow** (Agile Team Kanban & Sprint Tracker)
  - Includes interactive **Quick View / Live Demo Modals** with feature breakdowns.
- **Skills Matrix with Animated Progress Indicators**: Visual presentation for MERN stack technologies (React, Node.js, Express, MongoDB, JavaScript, HTML5/CSS3, Git, etc.).
- **Interactive Contact Form**:
  - Client-side validation using HTML5 and Bootstrap validation classes.
  - Loading spinner and success notification feedback.
  - Built-in guidance for connecting third-party form services (Formspree, EmailJS).
- **Floating Controls**: Back-to-Top smooth scroll button and sticky glassmorphic navigation bar.

---

## 📁 Project File Structure

```text
portfolio/
├── index.html            # Main semantic HTML structure & sections
├── style.css             # Custom styles, CSS variables, dark theme & animations
├── script.js             # Typewriter effect, project modal data & form validation
├── README.md             # Project documentation & beginner customization guide
└── assets/
    └── images/
        ├── profile.jpg    # Developer avatar image
        ├── fragranzia.jpg # Fragranzia project showcase image
        ├── devconnect.jpg # DevConnect project showcase image
        └── taskflow.jpg   # TaskFlow project showcase image
```

---

## ⚡ How to Preview and Run the Website

### Option 1: Direct Browser Opening (Zero Setup Required)
Simply navigate to the project directory in your file explorer and double-click `index.html`, or drag and drop `index.html` into Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Using Python Simple HTTP Server
If you have Python installed, open PowerShell or terminal inside the `portfolio` folder:
```powershell
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: Using Node.js `npx serve`
If you have Node.js installed:
```powershell
npx -y serve .
```

### Option 4: VS Code / Antigravity IDE "Live Server"
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🛠️ Beginner Customization Guide

This project is organized specifically for beginners and workshop attendees to easily personalize.

### 1. Changing Name, Role & Bio
Open `index.html` and find the `<!-- HERO SECTION -->`:
- Search for `MUBASHIRA M` and replace it with your own name.
- To update the animated roles in the hero section, open `script.js` and modify the `roles` array:
  ```javascript
  const roles = [
    "MERN FULLSTACK DEVELOPER",
    "REACT & NODE.JS SPECIALIST",
    "YOUR TITLE HERE"
  ];
  ```

### 2. Updating Profile & Project Images
- Replace `assets/images/profile.jpg` with your own profile photo.
- Replace `assets/images/fragranzia.jpg`, `devconnect.jpg`, and `taskflow.jpg` with screenshots of your own projects.
- Alternatively, you can change the image paths directly in `index.html` and `script.js`.

### 3. Adding or Updating Skills
Open `index.html` and locate `<!-- SKILLS SECTION -->`. Each skill is wrapped in a `<div class="col-6 col-md-4 col-lg-3">`. Simply duplicate or edit any card block to add new skills (e.g., Python, Docker, Next.js, etc.).

### 4. Adding or Modifying Projects
- In `index.html`, edit the project cards in `<!-- PROJECTS SECTION -->`.
- In `script.js`, edit the `projectData` object to update the title, description, features list, and GitHub repository links for the modal popup.

### 5. Connecting a Real Email Backend to the Contact Form
By default, the contact form validates inputs and displays a simulated confirmation message. To receive actual emails:
1. **Formspree (Recommended for Beginners)**:
   - Create a free account at [Formspree.io](https://formspree.io).
   - In `index.html`, update `<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`.
2. **EmailJS**:
   - Integrate the [EmailJS](https://www.emailjs.com/) browser SDK inside `script.js`.
3. **Custom Express.js API**:
   - Send a `fetch('/api/contact', { method: 'POST', ... })` to your Node.js backend.

---

## 🎨 Tech Stack & Dependencies

- **HTML5**: Semantic and accessible markup.
- **CSS3**: Custom design tokens, Flexbox, CSS Grid, Glassmorphism, Neon glow filters.
- **Bootstrap 5.3 (CDN)**: Grid layout, responsiveness, navbar toggling, and modals.
- **Vanilla JavaScript (ES6+)**: DOM manipulation, typewriter animation, form handling.
- **Font Awesome 6 (CDN)**: Modern UI icons.
- **Google Fonts**: *Outfit* & *Plus Jakarta Sans*.

---

## 📄 License
Open source and free for personal, academic, and workshop use. Feel free to fork, customize, and make it your own!
