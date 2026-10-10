/**
 * ==============================================================================
 * PERSONAL PORTFOLIO JAVASCRIPT
 * Author: Mubashira M
 * Description: Interactive behavior including typing effect, modal project data,
 *              smooth scroll, navbar transitions, and form validation.
 * ==============================================================================
 */

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initCopyrightYear();
  initNavbarBehavior();
  initTypewriter();
  initBackToTop();
  initContactForm();
  initSkillBarAnimation();
});

/* ------------------------------------------------------------------------------
 * 1. DYNAMIC COPYRIGHT YEAR
 * Automatically keeps the footer year up to date.
 * ------------------------------------------------------------------------------ */
function initCopyrightYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ------------------------------------------------------------------------------
 * 2. NAVBAR SCROLL EFFECT & MOBILE MENU AUTO-CLOSE
 * Adds a blurred background shadow when user scrolls down and auto-collapses
 * the mobile menu when any nav-link is clicked.
 * ------------------------------------------------------------------------------ */
function initNavbarBehavior() {
  const navbar = document.getElementById("mainNavbar");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarContent");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Automatically close mobile menu when a navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}

/* ------------------------------------------------------------------------------
 * 3. HERO TYPEWRITER EFFECT
 * Alternates through professional developer titles with typing and deleting pace.
 * ------------------------------------------------------------------------------ */
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriter-text");
  if (!typewriterElement) return;

  const roles = [
    "MERN FULLSTACK DEVELOPER",
    "REACT & NODE.JS SPECIALIST",
    "MONGODB & REST API ARCHITECT",
    "RESPONSIVE UI/UX ENTHUSIAST"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseEnd = 1800;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at the end of the word
      isDeleting = true;
      setTimeout(type, pauseEnd);
      return;
    } else if (isDeleting && charIndex === 0) {
      // Move to the next role after deleting
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 400);
      return;
    }

    const nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, nextSpeed);
  }

  // Start typewriter loop
  type();
}

/* ------------------------------------------------------------------------------
 * 4. PROJECT MODAL DATA & PREVIEW HANDLER
 * Holds structured details for each project card and opens the modal.
 * ------------------------------------------------------------------------------ */
const projectData = {
  fragranzia: {
    title: "Fragranzia - Luxury E-Commerce Platform",
    image: "assets/images/fragranzia.jpg",
    description:
      "Fragranzia is a modern, high-performance e-commerce web application engineered for luxury fragrances and bespoke perfumes. It offers an immersive dark-luxe shopping experience with real-time cart persistence and intuitive scent notes filtration.",
    features: [
      "Dynamic product catalog with filter by fragrance family (Oud, Floral, Citrus, Oriental).",
      "Interactive cart with quantity management and simulated checkout.",
      "Customer reviews, product rating badges, and responsive product spotlight modals.",
      "Built with scalable REST API endpoints and MongoDB database schemas."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap 5", "CSS3 Glassmorphism"],
    githubUrl: "https://github.com/"
  },
  devconnect: {
    title: "DevConnect - Developer Community Network",
    image: "assets/images/devconnect.jpg",
    description:
      "DevConnect is a full-stack social networking and collaboration platform designed specifically for software developers to share syntax-highlighted code snippets, exchange technical solutions, and follow community leaders.",
    features: [
      "User profile customization with GitHub integration and skill badges.",
      "Markdown and code snippet feeds with syntax highlighting.",
      "Interactive engagement system including real-time comments and likes.",
      "JWT-secured authentication and protected API endpoints."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "REST APIs"],
    githubUrl: "https://github.com/"
  },
  taskflow: {
    title: "TaskFlow - Agile Team Kanban & Project Tracker",
    image: "assets/images/taskflow.jpg",
    description:
      "TaskFlow is an agile project management and task tracking application designed to streamline team collaboration. It features drag-and-drop Kanban workflow columns, sprint velocity charts, and comprehensive task status filtering.",
    features: [
      "Interactive Kanban boards with customizable status lanes (To Do, In Progress, Review, Done).",
      "Priority tagging, sprint due-date indicators, and assignee avatars.",
      "Team productivity dashboards with visual burndown and velocity charts.",
      "State-persisted task updates and responsive mobile board view."
    ],
    tech: ["JavaScript (ES6+)", "React", "Node.js", "Express", "Bootstrap 5", "CSS3"],
    githubUrl: "https://github.com/"
  }
};

/**
 * Global function called by project cards to show the preview modal.
 * @param {string} projectId - Identifier matching a key in projectData
 */
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  // Set modal elements
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectImage").src = project.image;
  document.getElementById("modalProjectDescription").textContent = project.description;

  // Populate feature list
  const featuresList = document.getElementById("modalProjectFeatures");
  featuresList.innerHTML = "";
  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Populate tech tags
  const techContainer = document.getElementById("modalProjectTech");
  techContainer.innerHTML = "";
  project.tech.forEach((techItem) => {
    const span = document.createElement("span");
    span.className = "tech-tag";
    span.textContent = techItem;
    techContainer.appendChild(span);
  });

  // Set GitHub URL
  const githubBtn = document.getElementById("modalGithubLink");
  githubBtn.href = project.githubUrl;

  // Show Bootstrap modal
  const modalEl = document.getElementById("projectModal");
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

/* ------------------------------------------------------------------------------
 * 5. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
 * Validates inputs using HTML5 validation API, provides visual error feedback,
 * and displays an interactive submission feedback state.
 * ------------------------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("contact-submit-btn");
  const btnText = document.getElementById("btn-text");
  const btnSpinner = document.getElementById("btn-spinner");
  const successAlert = document.getElementById("formSuccessAlert");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check HTML5 validation
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    form.classList.remove("was-validated");

    // UI Loading state
    submitBtn.disabled = true;
    btnText.classList.add("d-none");
    btnSpinner.classList.remove("d-none");

    // Simulate sending network request (1.2s delay)
    setTimeout(() => {
      // Reset button state
      submitBtn.disabled = false;
      btnText.classList.remove("d-none");
      btnSpinner.classList.add("d-none");

      // Show success alert
      successAlert.classList.remove("d-none");

      // Reset input fields
      form.reset();

      // Automatically hide alert after 6 seconds
      setTimeout(() => {
        successAlert.classList.add("d-none");
      }, 6000);
    }, 1200);
  });
}

/* ------------------------------------------------------------------------------
 * 6. FLOATING BACK TO TOP BUTTON
 * Shows when page is scrolled down > 300px and scrolls smoothly to top on click.
 * ------------------------------------------------------------------------------ */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ------------------------------------------------------------------------------
 * 7. SKILL PROGRESS BAR ANIMATION ON SCROLL
 * Animates skill progress bars when the skills section enters the viewport.
 * ------------------------------------------------------------------------------ */
function initSkillBarAnimation() {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".skill-progress-bar");

  if (!skillsSection || !progressBars.length) return;

  // Initially set width to 0 for a nice entrance animation
  const originalWidths = [];
  progressBars.forEach((bar, index) => {
    originalWidths[index] = bar.style.width || "80%";
    bar.style.width = "0%";
  });

  // Intersection Observer to trigger when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar, index) => {
            bar.style.width = originalWidths[index];
          });
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(skillsSection);
}
