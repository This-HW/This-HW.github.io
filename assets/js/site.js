// ?theme=dark|light forces a theme (for previews and screenshots).
// Sections fade in once as they scroll into view; skipped under reduced motion.
(function () {
  var d = document.documentElement, m = location.search.match(/[?&]theme=(dark|light)/);
  if (m) d.setAttribute("data-theme", m[1]);
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -6% 0px" });
  d.classList.add("rv");
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
})();
