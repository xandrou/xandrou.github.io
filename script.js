const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuButton.setAttribute(
    "aria-expanded",
    isOpen
  );
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();