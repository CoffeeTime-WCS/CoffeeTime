window.onscroll = function () {
  const navBar = document.querySelector(".header-regular");
  const hamburgerMenu = document.querySelector(".hamburger-line");
  const logo = document.querySelector(".header-logo");

  /* 
 document.body; -> Safari
 document.documentElement; -> Chrome, Firefox, IE and Opera places the overflow at the <html> level, unless else is specified.
 Therefore, we use the documentElement property for these browsers
 source: https://www.w3schools.com/jsref/prop_element_scrolltop.asp
  */

  if (
    document.body.scrollTop >= 250 ||
    document.documentElement.scrollTop >= 250
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
