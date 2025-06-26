let indiceActual = 0;

function moverSlider(direccion) {
  const slider = document.querySelector(".slider");
  const totalSlides = document.querySelectorAll(".slide").length;

  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = totalSlides - 1;
  } else if (indiceActual >= totalSlides) {
    indiceActual = 0;
  }

  slider.style.transform = `translateX(-${indiceActual * 100}%)`;
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let indexGaleria = 0;

function abrirGaleriaModal() {
  document.getElementById("galeriaModalUnico").style.display = "block";
}

function cerrarGaleriaModal() {
  document.getElementById("galeriaModalUnico").style.display = "none";
}

window.onclick = function (e) {
  const modal = document.getElementById("galeriaModalUnico");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

function moverGaleria(direccion) {
  const slides = document.querySelectorAll(".track-galeria-unico .slide-galeria");
  const track = document.getElementById("trackGaleriaUnico");
  indexGaleria += direccion;

  if (indexGaleria < 0) indexGaleria = slides.length - 1;
  if (indexGaleria >= slides.length) indexGaleria = 0;

  track.style.transform = `translateX(-${indexGaleria * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-hamburguesa');
  const navLinks = document.querySelector('nav ul');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Activa o desactiva la clase 'active'
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navBar = document.querySelector(".main-nav");

    menuIcon.addEventListener("click", function() {
        navBar.classList.toggle("activo"); // Alterna la visibilidad del menú
    });
});
