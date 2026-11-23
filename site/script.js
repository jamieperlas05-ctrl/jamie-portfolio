/*
  Site behavior: mobile menu, skill filters, project grids, project page, contact form.
  Project content and skills come from data/projects.js. Nothing here needs editing
  to add a project or a skill.
*/

// Form service endpoint. Leave empty until a form service is chosen. The service
// (for example Formspree or Netlify Forms) is set up to forward submissions to
// Jamie's email, so the address does not need to appear on the page.
const FORM_ENDPOINT = "";

const PROJECTS = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];

// Every skill used by any project, in order of first appearance. New skills
// added to a project show up here automatically.
const SKILL_LIBRARY = (() => {
  const seen = new Set();
  const list = [];
  PROJECTS.forEach((p) => {
    (p.skills || []).forEach((s) => {
      if (!seen.has(s)) {
        seen.add(s);
        list.push(s);
      }
    });
  });
  return list;
})();

// Selected skills. Default: all selected.
const selectedSkills = new Set(SKILL_LIBRARY);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Featured projects first, then the rest, keeping the order in the data file.
function orderedProjects() {
  return [
    ...PROJECTS.filter((p) => p.featured),
    ...PROJECTS.filter((p) => !p.featured),
  ];
}

// A project shows when no skill is selected, when it has no skills yet, or when
// it has at least one selected skill (match any).
function projectMatches(p) {
  if (selectedSkills.size === 0) return true;
  if (!p.skills || p.skills.length === 0) return true;
  return p.skills.some((s) => selectedSkills.has(s));
}

// Tags shown on a card: only selected skills, so none show when nothing is selected.
function visibleTags(p) {
  if (selectedSkills.size === 0) return [];
  return (p.skills || []).filter((s) => selectedSkills.has(s));
}

function buildCard(p, { showTags }) {
  const link = el("a", "project-card");
  link.href = `project.html?id=${encodeURIComponent(p.id)}`;

  const media = el("div", "card-media");
  const caption = el("div");
  caption.append(el("div", "card-title", p.title || "Name"));
  caption.append(el("div", "card-summary", p.summary || ""));
  media.append(caption);
  link.append(media);

  if (showTags) {
    const tags = el("div", "card-tags");
    visibleTags(p).forEach((s) => tags.append(el("span", "", s)));
    link.append(tags);
  }
  return link;
}

function renderFilters() {
  const box = document.getElementById("skill-filters");
  if (!box) return;
  box.replaceChildren();
  SKILL_LIBRARY.forEach((skill) => {
    const pressed = selectedSkills.has(skill);
    const btn = el("button", "skill-chip", skill);
    btn.type = "button";
    btn.setAttribute("aria-pressed", String(pressed));
    btn.addEventListener("click", () => {
      if (selectedSkills.has(skill)) selectedSkills.delete(skill);
      else selectedSkills.add(skill);
      renderFilters();
      renderHomeGrids();
    });
    box.append(btn);
  });
}

function renderHomeGrids() {
  const featuredGrid = document.getElementById("featured-grid");
  const otherGrid = document.getElementById("other-grid");
  if (!featuredGrid || !otherGrid) return;

  const ordered = orderedProjects().filter(projectMatches);
  const featured = ordered.filter((p) => p.featured);
  const others = ordered.filter((p) => !p.featured);

  featuredGrid.replaceChildren();
  featured.forEach((p) => featuredGrid.append(buildCard(p, { showTags: true })));

  otherGrid.replaceChildren();
  others.forEach((p) => otherGrid.append(buildCard(p, { showTags: true })));

  if (featured.length === 0 && others.length === 0) {
    featuredGrid.append(el("p", "empty-state", "No projects match these skills."));
  }
}

function renderWorksGrid() {
  const grid = document.getElementById("works-grid");
  if (!grid) return;
  grid.replaceChildren();
  orderedProjects().forEach((p) => grid.append(buildCard(p, { showTags: false })));
}

function renderProjectPage() {
  const id = new URLSearchParams(window.location.search).get("id");
  const project = PROJECTS.find((p) => p.id === id);
  const title = document.getElementById("project-title");
  const summary = document.getElementById("project-summary");
  const tags = document.getElementById("project-tags");
  if (!title) return;

  if (!project) {
    title.textContent = "Project not found";
    summary.textContent = "This project may have moved. Return to all works to see what is available.";
    tags.replaceChildren();
    const back = el("a", "", "All works");
    back.href = "works.html";
    summary.append(" ", back);
    return;
  }

  document.title = `${project.title || "Project"} | Jamie Perlas`;
  title.textContent = project.title || "Name";
  summary.textContent = project.summary || "";
  tags.replaceChildren();
  (project.skills || []).forEach((s) => tags.append(el("span", "", s)));
}

function setupMobileMenu() {
  document.querySelectorAll(".menu-button").forEach((button) => {
    const menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) return;
    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "Close" : "Menu";
    };
    button.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  });
}

function setupSkillControls() {
  const clear = document.getElementById("clear-skills");
  const selectAll = document.getElementById("select-skills");
  if (clear) {
    clear.addEventListener("click", () => {
      selectedSkills.clear();
      renderFilters();
      renderHomeGrids();
    });
  }
  if (selectAll) {
    selectAll.addEventListener("click", () => {
      SKILL_LIBRARY.forEach((s) => selectedSkills.add(s));
      renderFilters();
      renderHomeGrids();
    });
  }
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const submit = form.querySelector(".submit-button");

  const fields = ["name", "subject", "message"];
  const messages = {
    name: "Please enter your name.",
    subject: "Please enter a subject.",
    message: "Please enter a message.",
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";
    let valid = true;
    fields.forEach((name) => {
      const input = form.elements[name];
      const value = input.value.trim();
      const error = form.querySelector(`[data-error-for="${name}"]`);
      const ok = value.length > 0;
      error.textContent = ok ? "" : messages[name];
      input.setAttribute("aria-invalid", String(!ok));
      if (!ok) valid = false;
    });
    if (!valid) return;

    if (!FORM_ENDPOINT) {
      status.textContent = "This form is not connected to an email service yet, so your message was not sent.";
      return;
    }

    submit.disabled = true;
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      status.textContent = "Thanks, your message was sent.";
    } catch (err) {
      status.textContent = "Sorry, your message could not be sent. Please try again.";
    } finally {
      submit.disabled = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  const page = document.body.dataset.page;
  if (page === "home") {
    setupSkillControls();
    renderFilters();
    renderHomeGrids();
  } else if (page === "works") {
    renderWorksGrid();
  } else if (page === "project") {
    renderProjectPage();
  } else if (page === "contact") {
    setupContactForm();
  }
});
