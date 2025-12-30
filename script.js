function goToPage(pageNumber) {
  document.querySelector('.page.active').classList.remove('active');
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function surprise(el) {
  el.innerText = "💫";
  el.style.transform = "scale(1.5)";
  setTimeout(() => {
    el.innerText = "💖";
    el.style.transform = "scale(1)";
  }, 600);
}
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

let isPlaying = false;

toggle.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggle.innerText = "🎶";
  } else {
    music.pause();
    toggle.innerText = "🎵";
  }
  isPlaying = !isPlaying;
});
