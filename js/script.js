window.onscroll = function () {
  const navBar = document.querySelector(".header-regular");
  const hamburgerMenu = document.querySelector(".hamburger-line");
  const logo = document.querySelector(".header-logo");

  if (
    document.body.scrollTop >= 280 ||
    document.documentElement.scrollTop >= 280
  ) {
    navBar.classList.add("scroll-header");
    hamburgerMenu.classList.add("scroll-hamburger");
    logo.classList.add("scroll-logo");
  } else {
    navBar.classList.remove("scroll-header");
    hamburgerMenu.classList.remove("scroll-hamburger");
    logo.classList.remove("scroll-logo");
  }
};

const orderButton = document.querySelector(".order-button");

orderButton.addEventListener("click", function (event) {
  alert("Thank you! Your order has been processed.");
});
