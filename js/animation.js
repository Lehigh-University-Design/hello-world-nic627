document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("watch-me");
  if (!element) return;

  element.addEventListener("animationstart", listener, false);
  element.addEventListener("animationend", listener, false);
  element.addEventListener("animationiteration", listener, false);

  element.classList.add("slide-in");

  function listener(event) {
  const l = document.createElement("li");
  // No textContent set
  document.getElementById("output").appendChild(l);
}
});