// Toggle tema giorno/notte
let dayNight = document.querySelector('.dayNight');
let body = document.querySelector('body');

dayNight.onclick = function () {
  body.classList.toggle('dark');
  dayNight.classList.toggle('active');
};

// Toggle menu
let menuToogle = document.querySelector('.menuToogle');
menuToogle.onclick = function () {
  menuToogle.classList.toggle('active');
};

// Cambio video
const switchBtn = document.getElementById("switchVideoBtn");
const videoElement = document.getElementById("heroVideo");

// Array dei video disponibili
const videoSources = [
  "res/Video1.mp4",
  "res/Video2.mp4",
  "res/Video3.mp4",
  "res/Video4.mp4",
  "res/Video5.mp4",

];

let currentIndex = 0;

switchBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videoSources.length;
  videoElement.src = videoSources[currentIndex];
  videoElement.load();
  videoElement.play();
});

// Blocca tasto destro e combinazioni
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert('Non hai detto la parola Magica!');
  });

  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && ['u', 's', 'i'].includes(event.key.toLowerCase())) {
      event.preventDefault();
      alert('Non Hai detto la Parola Magica!');
    }
  });
});

