const burgerbtn = document.getElementById("burger");
const closebtn = document.getElementById("close");
const menu = document.querySelector(".mobile-menu");
const text = document.querySelector(".text");

burgerbtn.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    text.style.display = "none";
  } else {
    menu.style.display = "none";
    text.style.display = "block";
  }
});

closebtn.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    text.style.display = "block";
  }
});
