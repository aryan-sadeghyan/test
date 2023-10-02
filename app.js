const toggle = document.querySelector("#toggle");
const list = document.querySelector(".links-list");

toggle.addEventListener("click", () => {
  list.classList.toggle("show-list");
});
