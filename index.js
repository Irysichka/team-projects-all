(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function u(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = u(e);
    fetch(e.href, t);
  }
})();
var i = document.getElementById("burger-icon"),
  d = document.getElementById("open_menu"),
  c = document.getElementById("modal_menu"),
  l = document.body;
function m(n) {
  return function () {
    n.classList.toggle("is-open"),
      l.classList.toggle("locked"),
      n.classList.contains("is-open")
        ? i.setAttribute("href", "/img/sprite.svg#icon-close-iscon")
        : i.setAttribute("href", "/img/sprite.svg#icon-menu-icon");
  };
}
var a = document.querySelectorAll(
  ".mobile-menu-nav-list-item-link, .menu-social-link"
);
a.forEach((n) => {
  n.addEventListener("click", function () {
    c.classList.remove("is-open"),
      l.classList.remove("locked"),
      i.setAttribute("href", "/img/sprite.svg#icon-menu-icon");
  });
});
d.addEventListener("click", m(c));
//# sourceMappingURL=index.js.map
