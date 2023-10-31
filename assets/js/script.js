'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


function download_page(title,subtitle,plink,dlink) {

  document.getElementById("top-rated").style.display = 'none';
  document.getElementById("hero").style.display = 'none';
  document.getElementById("movie-detail").style.display = 'block';

  window.scrollTo(0, 0);

  document.getElementById("movie-detail").innerHTML = `<div class="container">

  <figure class="movie-detail-banner">

    <img src="${plink}" alt="${title}">

    <button class="play-btn">
      <ion-icon name="play-circle-outline"></ion-icon>
    </button>

  </figure>

  <div class="movie-detail-content">

    <h1 class="h1 detail-title">
    ${title}
    </h1>
    
    <p class="storyline">
    ${subtitle}
    </p>
    
    <a href="${dlink}" download target="_blank" class="download-btn">
      <span>Download</span>
    
      <ion-icon name="download-outline"></ion-icon>
    </a>

  </div>`


}
