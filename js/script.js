// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburgermenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik fi luar sidebar untuk menghilang
const hamburger = document.querySelector("#hamburgermenu ");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
