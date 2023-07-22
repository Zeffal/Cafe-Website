//Toggle class active
// Search element with selector/id name Navbar-nav
const navbarNav = document.querySelector(".Navbar-nav");

// When click sidebar toggle, activing css .Navbar-nav.active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close sidebar without click the sidebar
// Search element with selector/id name hamburger-menu
const hamburger = document.querySelector("#hamburger-menu");

// When event click, do function
document.addEventListener("click", function (e) {
  // if click other than sidebar toggle and other than navbar, remove class active
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
