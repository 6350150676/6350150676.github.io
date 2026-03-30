/* ============================================================
   script.js — Lav Naruka Portfolio
   Shared JavaScript across all pages
   ============================================================ */

/* ── 1. NAVBAR SCROLL EFFECT ────────────────────────────────── */
/*
  Adds the 'scrolled' class to the navbar when the user scrolls down.
  The CSS .navbar.scrolled rule applies the glass blur background.
*/
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load in case page is already scrolled
})();


/* ── 2. ACTIVE NAV LINK ─────────────────────────────────────── */
/*
  Automatically highlights the nav link that matches the current page.
  Reads the current filename (e.g. "projects.html") and adds
  the 'active' class to the matching nav link.
*/
(function setActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length) return;

  // Get the current page filename, default to 'index.html'
  const page = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    // Match exact filename, or match index for home
    if (
      href === page ||
      (page === '' || page === 'index.html') && href === 'index.html'
    ) {
      link.classList.add('active');
    }
  });
})();


/* ── 3. MOBILE NAV TOGGLE ───────────────────────────────────── */
/*
  Toggles the mobile nav menu open/closed when the hamburger button is clicked.
  Also closes the menu when a nav link is clicked.
*/
(function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    // Animate hamburger into an X
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close menu when a nav link is tapped on mobile
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });
})();


/* ── 4. SCROLL FADE-UP ANIMATIONS ──────────────────────────── */
/*
  Watches elements with the class 'fade-up'.
  When they enter the viewport, adds the 'visible' class
  which triggers the CSS transition (opacity + translateY).

  HOW TO USE: Add class="fade-up" to any HTML element
  and it will animate in when the user scrolls to it.

  You can also add a delay with style="transition-delay: 0.1s"
*/
(function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop observing once it's animated in
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,    // Trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px'  // Slightly before the bottom edge
    }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ── 5. PROJECT FILTER (projects.html only) ─────────────────── */
/*
  Filter buttons on the Projects page.
  Clicking a filter hides/shows cards by their data-category attribute.

  HOW PROJECT CATEGORIES WORK:
  Each .project-card has:   data-category="level-design"
  Each filter button has:   data-filter="level-design"
  "All" button:             data-filter="all"
*/
(function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';

        if (filter === 'all' || category.includes(filter)) {
          // Show card
          card.style.display = 'flex';
          // Re-trigger fade animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '';
            card.style.transform = '';
          });
        } else {
          // Hide card
          card.style.display = 'none';
        }
      });
    });
  });
})();


/* ── 6. CURRENT YEAR IN FOOTER ──────────────────────────────── */
/*
  Automatically puts the current year in the footer copyright.
  Add id="footer-year" to the year span in your footer.
*/
(function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();


/* ── 7. SMOOTH INTERNAL ANCHOR LINKS ─────────────────────────── */
/*
  Any link pointing to an #anchor on the same page will
  scroll smoothly with an offset to account for the fixed navbar.
*/
(function initAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── 8. CONSOLE GREETING ────────────────────────────────────── */
/*
  A fun easter egg for developers who open the console.
  Nice professional touch that recruiters / devs appreciate.
*/
console.log(
  '%c Lav Naruka — Portfolio',
  'font-size:18px; font-weight:bold; color:#c8ff00;'
);
console.log(
  '%c Level Designer & Unity Developer (Gameplay + VR Systems)',
  'font-size:12px; color:#6b6b74;'
);
console.log(
  '%c 👋 Hey, curious dev — feel free to reach out!',
  'font-size:12px; color:#ededea;'
);
