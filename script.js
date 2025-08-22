// Toggle tema giorno/notte
const dayNight = document.querySelector('.dayNight');
const body = document.body;

dayNight.onclick = () => {
  body.classList.toggle('dark');
  dayNight.classList.toggle('active');
};

// Toggle menu
const menuToogle = document.querySelector('.menuToogle');
menuToogle.onclick = () => {
  menuToogle.classList.toggle('active');
};

// Cambio video
const switchBtn = document.getElementById("switchVideoBtn");
const videoElement = document.getElementById("heroVideo");

const videoSources = [
  "res/Video1.mp4",
  // "res/Video2.mp4",
  // "res/Video3.mp4",
  // "res/Video4.mp4",
  // "res/Video5.mp4"
];

let currentIndex = 1; // Video2 è il default

switchBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videoSources.length;
  videoElement.src = videoSources[currentIndex];
  videoElement.load();
  videoElement.play();
});

// Blocca tasto destro e combinazioni
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert('Non hai detto la parola Magica!');
  });

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && ['u', 's', 'i'].includes(event.key.toLowerCase())) {
      event.preventDefault();
      alert('Non Hai detto la Parola Magica!');
    }
  });
});