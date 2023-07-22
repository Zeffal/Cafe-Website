//Toggle class active
const navbarNav = document.querySelector(".Navbar-nav");

// When click sidebar toggle, activing css .Navbar-nav.active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
