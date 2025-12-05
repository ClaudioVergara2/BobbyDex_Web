document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.querySelector(".home-btn");

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "/";
    });
  }
});