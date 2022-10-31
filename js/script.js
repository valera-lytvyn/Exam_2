"use strict";
const menu = document.querySelector(".navMenu");
const menuItems = document.querySelectorAll(".itemMenu");
const hamburger= document.querySelector(".burgerMenuBtn");
const closeMenu= document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)