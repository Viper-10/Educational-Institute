"use strict";
let slideIndex = 1;
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

const mobileSideBarMenu = document.querySelector("#mobile-navbar");
let isDropdownOpen = false;

window.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.classList.contains("fa-bars")) {
    isDropdownOpen = !isDropdownOpen;
    changeDropdownVisibility();
  } else if (!mobileSideBarMenu.contains(e.target)) {
    isDropdownOpen = false;
    changeDropdownVisibility();
  }
}

function changeDropdownVisibility() {
  if (isDropdownOpen) {
    mobileSideBarMenu.style.display = "block";
  } else {
    mobileSideBarMenu.style.display = "none";
  }
}
