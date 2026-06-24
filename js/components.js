/* =====================================================================
   components.js — shared nav + footer
   Edit ONLY this file to update the nav or footer across all pages.

   To add a new tab:
     1. Add a line inside navLinks below (copy an existing <li>)
     2. Create the new .html file
     That's it — the active highlight is handled automatically.
   ===================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------
     CONFIG — edit these to update across the whole site
     ---------------------------------------------------------------- */
  var SITE_NAME = "Eric's Web Corner";

  var NAV_LINKS = [
    { label: "Home",    href: "index.html"  },
    { label: "Résumé",  href: "resume.html" },
    /* Add more tabs here, e.g.:
    { label: "Projects", href: "projects.html" },
    { label: "Contact",  href: "contact.html"  }, */
  ];

  var FOOTER = {
    name:     "Eric Jun",
    github:   "https://github.com/EricJun56",
    linkedin: "https://ca.linkedin.com/in/seungwon-jun-90b44b221",
    email:    "mailto:seungwon0324@gmail.com",
  };

  /* ----------------------------------------------------------------
     Build nav HTML
     ---------------------------------------------------------------- */
  var linkItems = NAV_LINKS.map(function (link) {
    return '<li><a class="nav__link" href="' + link.href + '">' + link.label + "</a></li>";
  }).join("\n        ");

  var navHTML = [
    '<header class="nav">',
    '  <div class="nav__inner">',
    '    <a class="nav__brand" href="index.html">',
    '      <span class="nav__mark" aria-hidden="true"></span>',
    '      ' + SITE_NAME,
    '    </a>',
    '    <button class="nav__toggle" aria-label="Menu" aria-expanded="false">',
    '      <span></span>',
    '    </button>',
    '    <ul class="nav__links">',
    '      ' + linkItems,
    '    </ul>',
    '  </div>',
    '</header>',
  ].join("\n");

  /* ----------------------------------------------------------------
     Build footer HTML
     ---------------------------------------------------------------- */
  var year = new Date().getFullYear();

  var footerHTML = [
    '<footer class="footer">',
    '  <div class="wrap footer__inner">',
    '    <span>&copy; ' + year + " " + FOOTER.name + "</span>",
    '    <nav class="footer__links">',
    '      <a href="' + FOOTER.github   + '" target="_blank" rel="noopener">GitHub</a>',
    '      <a href="' + FOOTER.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>',
    '      <a href="' + FOOTER.email    + '">Email</a>',
    '    </nav>',
    '  </div>',
    '</footer>',
  ].join("\n");

  /* ----------------------------------------------------------------
     Inject into placeholders
     ---------------------------------------------------------------- */
  var navEl = document.getElementById("nav-placeholder");
  if (navEl) navEl.outerHTML = navHTML;

  var footerEl = document.getElementById("footer-placeholder");
  if (footerEl) footerEl.outerHTML = footerHTML;

})();
