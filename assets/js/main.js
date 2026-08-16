/**
 * Rachid Oujil Portfolio Interactive Controller (rachidoujil.me)
 * Core Features: Theme Manager, Dynamic Project Filtering, GitHub API Ingestion,
 * Interactive Statistics, Copy Helpers, Mobile Drawer, and Toast Notifications.
 */

// GitHub Configuration (configurable username)
const GITHUB_USERNAME = "rachidoujil";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileNav();
  initProjectFilters();
  initProjectStats();
  initGitHubSection();
  initContactForm();
  initCopyButtons();
});

/* -------------------------------------------------------------------------- */
/* Theme Manager                                                              */
/* -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const target = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", target);
      localStorage.setItem("theme", target);
      updateThemeIcon(target);
      showToast(`Switched to ${target} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "light") {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* -------------------------------------------------------------------------- */
/* Mobile Navigation                                                          */
/* -------------------------------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Dynamic Project Filtering & Rendering                                      */
/* -------------------------------------------------------------------------- */
function initProjectFilters() {
  const container = document.getElementById("projects-container");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("project-search");

  if (!container || typeof PROJECTS_DATA === "undefined") return;

  renderProjects(PROJECTS_DATA, container);

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      
      let filtered = PROJECTS_DATA;
      if (category && category !== "All") {
        filtered = PROJECTS_DATA.filter(p => p.categories.includes(category) || p.category === category);
      }
      
      if (searchInput && searchInput.value.trim() !== "") {
        const q = searchInput.value.trim().toLowerCase();
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.shortDescription.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q))
        );
      }
      renderProjects(filtered, container);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const activeTab = document.querySelector(".filter-tab.active");
      const category = activeTab ? activeTab.getAttribute("data-category") : "All";
      
      let filtered = PROJECTS_DATA;
      if (category && category !== "All") {
        filtered = filtered.filter(p => p.categories.includes(category) || p.category === category);
      }
      if (q !== "") {
        filtered = filtered.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.shortDescription.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q))
        );
      }
      renderProjects(filtered, container);
    });
  }
}

function renderProjects(projects, container) {
  if (!projects || projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1rem;">No matching projects found in this category.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset Filter</button>
      </div>
    `;
    return;
  }

  // Determine root path for relative project URLs
  const isSubdir = window.location.pathname.includes("/projects/");
  const projectBaseUrl = isSubdir ? "" : "projects/";

  container.innerHTML = projects.map(p => {
    const techBadges = p.technologies.slice(0, 4).map(t => `<span class="badge badge-tech">${t}</span>`).join("");
    const liveButton = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Visit Live Platform">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
           Live Demo
         </a>` 
      : "";
    
    const liveBadge = p.liveUrl ? `<span class="badge badge-live">Live</span>` : "";

    return `
      <article class="project-card" data-slug="${p.slug}">
        <div class="project-card-header">
          <div class="project-badge-group">
            <span class="badge">${p.category}</span>
            ${liveBadge}
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-dim);">#${p.id}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">
            <a href="${projectBaseUrl}${p.slug}.html">${p.title}</a>
          </h3>
          <p class="project-desc">${p.shortDescription}</p>
          <div class="project-tech-stack">
            ${techBadges}
            ${p.technologies.length > 4 ? `<span class="badge badge-tech">+${p.technologies.length - 4}</span>` : ""}
          </div>
        </div>
        <div class="project-card-footer">
          <div class="project-links">
            ${liveButton}
          </div>
          <a href="${projectBaseUrl}${p.slug}.html" class="btn btn-secondary btn-sm" style="margin-left: auto;">
            Details & Architecture
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function resetFilters() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("project-search");
  const container = document.getElementById("projects-container");
  
  if (filterTabs.length > 0) {
    filterTabs.forEach(t => t.classList.remove("active"));
    filterTabs[0].classList.add("active");
  }
  if (searchInput) searchInput.value = "";
  if (container && typeof PROJECTS_DATA !== "undefined") {
    renderProjects(PROJECTS_DATA, container);
  }
}

/* -------------------------------------------------------------------------- */
/* Dynamic Statistics Calculation                                             */
/* -------------------------------------------------------------------------- */
function initProjectStats() {
  const statTotal = document.getElementById("stat-total-projects");
  const statLive = document.getElementById("stat-live-projects");
  const statAcademic = document.getElementById("stat-academic-projects");
  const statERP = document.getElementById("stat-erp-projects");

  if (typeof PROJECTS_DATA === "undefined") return;

  const total = PROJECTS_DATA.length;
  const liveCount = PROJECTS_DATA.filter(p => p.liveUrl).length;
  const academicCount = PROJECTS_DATA.filter(p => p.categories.includes("Academic")).length;
  const erpCount = PROJECTS_DATA.filter(p => p.categories.includes("Management Systems")).length;

  if (statTotal) statTotal.textContent = `${total}+`;
  if (statLive) statLive.textContent = `${liveCount} Live`;
  if (statAcademic) statAcademic.textContent = `${academicCount}`;
  if (statERP) statERP.textContent = `${erpCount}`;
}

/* -------------------------------------------------------------------------- */
/* GitHub API Integration & Public Repositories                               */
/* -------------------------------------------------------------------------- */
async function initGitHubSection() {
  const reposContainer = document.getElementById("github-repos-container");
  if (!reposContainer) return;

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
    if (!response.ok) throw new Error("GitHub API rate-limit or unavailable");
    const repos = await response.json();

    if (Array.isArray(repos) && repos.length > 0) {
      reposContainer.innerHTML = repos.map(repo => `
        <div class="repo-card">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name">${repo.name}</a>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan);"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
          <p class="repo-desc">${repo.description || "Software engineering repository and implementation files."}</p>
          <div class="repo-meta">
            <span>${repo.language || "PHP / JS"}</span>
            <span>⭐ ${repo.stargazers_count || 0}</span>
            <span>Updated ${new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      `).join("");
      return;
    }
  } catch (err) {
    // Fallback gracefully to local curated repository highlights
    renderFallbackRepos(reposContainer);
  }
}

function renderFallbackRepos(container) {
  const fallbackRepos = [
    { name: "mailnox-core", desc: "MTA delivery engine, PowerMTA orchestrator & warmup algorithms.", lang: "PHP / Laravel", stars: 4 },
    { name: "fldm-academic-suite", desc: "Doctoral & Master's academic lifecycle and research management system.", lang: "PHP / Blade", stars: 6 },
    { name: "pharma-erp-system", desc: "Comprehensive pharmacy POS, stock expiry tracking & caisse ledger.", lang: "PHP / MySQL", stars: 5 },
    { name: "deutschio-learning-platform", desc: "LMS with interactive quizzes, DomPDF certificates & appointments.", lang: "Laravel 12 / Vite", stars: 3 },
    { name: "pinedrama-stream-downloader", desc: "Video processing proxy and media watermark removal platform.", lang: "PHP / Alpine.js", stars: 4 },
    { name: "test-16-personalities-mbti", desc: "Livewire 4 reactive psychometric test and PDF report generator.", lang: "Livewire / DomPDF", stars: 3 }
  ];

  container.innerHTML = fallbackRepos.map(r => `
    <div class="repo-card">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="repo-name">${r.name}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan);"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </div>
      <p class="repo-desc">${r.desc}</p>
      <div class="repo-meta">
        <span>${r.lang}</span>
        <span>Verified Local Source</span>
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------------- */
/* Contact Form Handling                                                      */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill out all required fields.", "error");
      return;
    }

    const mailtoUrl = `mailto:contact@rachidoujil.me?subject=${encodeURIComponent(subject || "Engineering Inquiry from Portfolio")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoUrl;
    showToast("Launching your email client to send message...");
    form.reset();
  });
}

/* -------------------------------------------------------------------------- */
/* Clipboard Helper & Toast Notifications                                     */
/* -------------------------------------------------------------------------- */
function initCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: "${text}"`);
      }).catch(() => {
        showToast("Failed to copy to clipboard", "error");
      });
    });
  });
}

function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  if (type === "error") {
    toast.style.borderLeftColor = "var(--accent-rose)";
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: ${type === 'error' ? 'var(--accent-rose)' : 'var(--accent-cyan)'};"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
