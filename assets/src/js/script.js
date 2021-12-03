function slide() {
  const navTogglerBox = document.querySelector(".navbar-toggler-box");
  const navToggler = document.querySelector(".navbar-toggler");
  const navBox = document.querySelector(".nav-links-box ");

  navTogglerBox.addEventListener("click", () => {
    // navBox Toggle
    navBox.classList.toggle("open");

    // bav Toggler Animate
    navToggler.classList.toggle("toggle");
  });
}
slide();
