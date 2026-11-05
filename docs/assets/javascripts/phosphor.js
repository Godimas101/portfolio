/* Keyboard access for the menu (portfolio#7).

   The theme builds its drawer from labels and hidden checkboxes, which only a
   pointer can reach. This file swaps those labels for real buttons, takes the
   page behind out of reach while the drawer is open, and tells screen readers
   which page is current. Without it the labels stay, and the menu still works
   by pointer. */
(() => {
  "use strict";

  const drawer = document.getElementById("__drawer");
  if (!drawer || !window.document$) return;

  const outsideDrawer = ".md-skip, .md-header, .md-content, .md-sidebar--secondary, .md-top, .md-footer";
  const underPanel = ".md-nav--primary > .md-nav__title, .md-nav--primary > .md-nav__list > .md-nav__item";

  // The same widths the theme switches at: the drawer, then its "On this page" panel.
  const drawerWidth = window.matchMedia("(max-width: 76.234375em)");
  const panelWidth = window.matchMedia("(max-width: 59.984375em)");

  const all = (selector, root = document) => [...root.querySelectorAll(selector)];
  const panelToggle = () => document.getElementById("__toc");

  // The theme's styles find these controls by `for`, so the button keeps it.
  function toButton(label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = label.className;
    button.setAttribute("for", label.htmlFor);
    button.append(...label.childNodes);
    label.replaceWith(button);
    return button;
  }

  // The first thing Tab can reach inside an element.
  const firstStop = (root) => all("a[href], button", root).find((el) =>
    !el.closest("[inert]") && el.getClientRects().length > 0 &&
    getComputedStyle(el).visibility === "visible");

  const focus = (el) => { if (el) el.focus({ preventScroll: true }); };

  all("label.md-header__button").forEach(toButton);
  const menuButton = document.querySelector("button[for='__drawer']");

  function syncDrawer(moveFocus) {
    const open = drawer.checked && drawerWidth.matches;
    all(outsideDrawer).forEach((el) => { el.inert = open; });
    menuButton.setAttribute("aria-expanded", String(open));
    if (open && moveFocus) focus(firstStop(document.querySelector(".md-sidebar--primary")));
  }

  function syncPanel(moveFocus) {
    const toggle = panelToggle();
    if (!toggle) return;
    const item = toggle.closest(".md-nav__item");
    const opener = item.querySelector("button.md-nav__link");
    // The panel only exists at phone widths. Wider, the toggle shows nothing, so it must change nothing.
    const open = toggle.checked && panelWidth.matches;
    all(underPanel).forEach((el) => { el.inert = open && el !== item; });
    opener.inert = open;
    opener.setAttribute("aria-expanded", String(open));
    if (moveFocus && panelWidth.matches) focus(open ? firstStop(item.querySelector(".md-nav--secondary")) : opener);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button[for]");
    if (button) document.getElementById(button.getAttribute("for")).click();
  });

  document.addEventListener("change", (event) => {
    if (event.target === drawer) syncDrawer(true);
    if (event.target === panelToggle()) syncPanel(true);
  });

  // Escape steps back a level: panel to menu, then menu to page.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !drawer.checked) return;
    // Search opens over the drawer and takes its own Escape.
    if (event.target !== document.body && !event.target.closest(".md-sidebar--primary")) return;
    const toggle = panelToggle();
    if (toggle && toggle.checked && panelWidth.matches) {
      toggle.click();
    } else {
      drawer.click();
      menuButton.focus();
    }
  });

  // A window that widens leaves the drawer behind, so nothing may stay shut off.
  // The panel's toggle is set, not clicked: a click would pull focus to its opener.
  [drawerWidth, panelWidth].forEach((width) => width.addEventListener("change", () => {
    const toggle = panelToggle();
    if (toggle && toggle.checked) {
      toggle.checked = false;
      syncPanel(false);
    }
    if (drawer.checked && !drawerWidth.matches) drawer.click();
  }));

  // Chrome and Edge can restore the panel's toggle after the sync below, and they send no change event.
  window.addEventListener("pageshow", () => syncPanel(false));

  // Runs for each page, because instant navigation swaps the sidebar.
  window.document$.subscribe(() => {
    // Only the drawer's own controls: the desktop "On this page" heading stays a plain label.
    all(".md-nav--primary label[for='__toc']").forEach(toButton);
    all("button.md-nav__title").forEach((button) => {
      button.setAttribute("aria-label", "On this page: back to the menu");
    });
    all(".md-nav--primary .md-nav__item--active > .md-nav__link").forEach((link) => {
      link.setAttribute("aria-current", "page");
    });

    // The real search dialog is built elsewhere. This wrapper only holds its button.
    all(".md-search[role='dialog']").forEach((wrapper) => {
      wrapper.removeAttribute("role");
      wrapper.removeAttribute("aria-label");
    });

    syncDrawer(false);
    syncPanel(false);
  });
})();
