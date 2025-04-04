// 🔥 هذا الملف يوضع في: frontend/public/js/main.ts

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    let lastScroll = 0;
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        navbar.style.top = "0";
        return;
      }
      if (currentScroll > lastScroll) {
        navbar.style.top = "-80px"; // Hide
      } else {
        navbar.style.top = "0"; // Show
      }
      lastScroll = currentScroll;
    });
  });
  