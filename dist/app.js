"use strict";
let slideIndex = 1;
let currentPage = "home";
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const mobileSideBarMenu = document.getElementById("mobile-navbar");
const mobileSideBarMenu2 = document.getElementById("mobile-navbar-2");
let isDropdownOpen = false;

window.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.classList.contains("fa-bars")) {
    isDropdownOpen = !isDropdownOpen;
    changeDropdownVisibility(
      currentPage === "home" ? mobileSideBarMenu2 : mobileSideBarMenu
    );
  } else if (!mobileSideBarMenu.contains(e.target)) {
    isDropdownOpen = false;
    changeDropdownVisibility(
      currentPage === "home" ? mobileSideBarMenu2 : mobileSideBarMenu
    );
  }
  if (e.target.classList.contains("fa-youtube")) {
    window.open("https://www.youtube.com/channel/UCQ71Y6dp5f-HZaKB4ZQZDlg");
  } else if (e.target.classList.contains("fa-facebook-f")) {
    window.open("https://www.facebook.com/KCT.edu/");
  } else if (e.target.classList.contains("fa-instagram")) {
    window.open("https://www.instagram.com/kct_84/");
  } else if (e.target.classList.contains("fa-linkedin-in")) {
    window.open("https://www.linkedin.com/school/kct/");
  }
}

function changeDropdownVisibility(mobileSideBarMenu) {
  if (isDropdownOpen) {
    mobileSideBarMenu.style.display = "block";
  } else {
    mobileSideBarMenu.style.display = "none";
  }
}

const aboutPageButton = document.querySelector("#about-page-button");
const aboutPage = document.querySelector("#about-page");
const homePage = document.querySelector("#home-page");
const homePageButton = document.querySelector("#home-page-button");
aboutPageButton.addEventListener("click", showAboutPage);
homePageButton.addEventListener("click", showHomePage);

function showAboutPage() {
  currentPage = "about";
  window.scrollTo(0, 0);

  aboutPage.style.display = "block";
  aboutPageButton.style.display = "none";
  homePage.style.display = "none";

  homePageButton.style.display = "block";
}

function showHomePage() {
  currentPage = "home";
  window.scrollTo(0, 0);
  homePageButton.style.display = "none";
  homePage.style.display = "block";
  aboutPageButton.style.display = "block";
  aboutPage.style.display = "none";
}

const logoDivs = document.getElementsByClassName("logo-wrapper");

Array.from(logoDivs).forEach((element) => {
  element.addEventListener("click", showHomePage);
});

// const icons = document.querySelectorAll(".fa-brands.icon");
// console.log(icons);

// Array.from(icons).forEach((icon) => {
//   icon.addEventListener("click", iconEventHandler);
// });
