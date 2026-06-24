/* =====================================================================
   Personal site — shared behaviour
   Keep this lean. It powers three things:
     1. Active-tab highlighting (so you never set it by hand)
     2. The mobile menu toggle
     3. A gentle scroll-reveal for elements marked .reveal
   ===================================================================== */

(function () {
  "use strict";

  /* ---- 1. Highlight the current tab automatically ---------------- */
  // Compares each nav link's filename to the current page's filename.
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach(function (link) {
    var target = (link.getAttribute("href") || "").split("/").pop();
    if (target === here || (here === "" && target === "index.html")) {
      link.classList.add("is-active");
    }
  });

  /* ---- 2. Mobile menu toggle ------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after tapping a link
    links.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) links.classList.remove("is-open");
    });
  }

  /* ---- 3. Scroll reveal ------------------------------------------ */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    // No observer support → just show everything
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
