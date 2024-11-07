function toggleMenu() {
  console.log("Toggle menu function called"); // Debug line
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  console.log("Menu classes:", menu.classList); // Debug line
  console.log("Icon classes:", icon.classList); // Debug line
}