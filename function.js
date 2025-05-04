const titles = ["System Engineer", "Web Developer", "Problem Solver"];
let titleIndex = 0;
let charIndex = 0;
let speed = 150;
let deleting = false;

function typeWriterLoop() {
  const currentTitle = titles[titleIndex];
  const display = document.getElementById("typed-text");

  if (!display) return;

  if (!deleting && charIndex <= currentTitle.length) {
    display.textContent = currentTitle.substring(0, charIndex);
    charIndex++;
    setTimeout(typeWriterLoop, speed);
  } else if (deleting && charIndex >= 0) {
    display.textContent = currentTitle.substring(0, charIndex);
    charIndex--;
    setTimeout(typeWriterLoop, speed / 2);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeWriterLoop, 1500); // espera antes de borrar
  } else {
    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length; // pasa al siguiente título
    setTimeout(typeWriterLoop, 500); // espera antes de volver a escribir
  }
}

document.addEventListener("DOMContentLoaded", typeWriterLoop);


