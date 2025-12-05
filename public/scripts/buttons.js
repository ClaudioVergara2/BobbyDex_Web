document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.querySelector(".home-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "/";
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      window.history.back();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.history.forward();
    });
  }
});