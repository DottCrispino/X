document.addEventListener("DOMContentLoaded", () => {

  // Animazioni SOLO se sei in home
  const isHome = document.body.classList.contains("home");

  if (!isHome) return;

  const sections = document.querySelectorAll("section");

  // Se il browser non supporta IntersectionObserver, mostra tutto
  if (!("IntersectionObserver" in window)) {
    sections.forEach(s => s.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  sections.forEach(section => observer.observe(section));
});
