'use strict'


const mainMenu = document.querySelector(".mainMenu");
const brandMenu = document.querySelector(".brand-menu");
const brand = document.querySelector(".brand");
const observer = new IntersectionObserver(
    ([e]) => {
        mainMenu.classList.toggle("is-top", e.intersectionRatio < 1);
        brandMenu.classList.toggle("is-visible", e.intersectionRatio < 1);
        brand.classList.toggle("no-visible", e.intersectionRatio < 1);
    },
    { threshold: [1] }
);

observer.observe(mainMenu);

// Menu mobile
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  
    var menu = document.getElementById('menu');
    menu.classList.toggle('visible', !menu.classList.contains('visible'));

    // Toggle the text
    var menuButton = document.getElementById('mobile-menu-btn');
    if (menu.classList.contains('visible')) {
        menuButton.textContent = 'Cerrar';
    } else {
        menuButton.textContent = 'Menu';
    }
  });

  // Menu mobile
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }