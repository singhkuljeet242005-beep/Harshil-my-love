document.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");

  let isPlaying = false;

  // ===== MUSIC TOGGLE =====
  toggle.addEventListener("click", () => {
    if (!isPlaying) {
      music.play().catch(() => {});
      toggle.innerText = "🎶";
    } else {
      music.pause();
      toggle.innerText = "🎵";
    }
    isPlaying = !isPlaying;
  });

  // ===== PAGE NAVIGATION =====
  window.goToPage = function(pageNumber) {
    const current = document.querySelector(".page.active");
    const next = document.getElementById(`page${pageNumber}`);

    if (current && next) {
      current.classList.remove("active");
      next.classList.add("active");
    }
  };

  // ===== CUTE SURPRISE =====
  window.surprise = function(el) {
    el.innerText = "💫";
    el.style.transform = "scale(1.5)";
    setTimeout(() => {
      el.innerText = "💖";
      el.style.transform = "scale(1)";
    }, 600);
  };

});
