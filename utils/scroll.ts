export function scrollToTarget(id: string, offset = 0) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
