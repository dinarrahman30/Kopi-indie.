// toggle kelas active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#shop-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar menghilangkan nav
const shop = document.querySelector("#shop-menu");

document.addEventListener("click", function (e) {
  if (!shop.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
