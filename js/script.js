// 1. Preloader
window.addEventListener("load", function () {
  setTimeout(() => {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";
  }, 1000);
});



// 2. Hide And Show Desktop Navbar (Aside)
document.addEventListener("DOMContentLoaded", () => {
  const hideSidebarBtn = document.getElementById("hideSidebarBtn");
  const showSidebarBtn = document.getElementById("showSidebarBtn");
  const aside = document.getElementById("navDesktop");
  const main = document.getElementById("main");

  // Hide The Nav Desktop
  hideSidebarBtn.addEventListener("click", () => {
    aside.classList.add("hidden");
    main.classList.add("shifted");
    setTimeout(() => {
      showSidebarBtn.classList.remove("d-hidden");
    }, 600);
  });


  // Show The Nav Desktop
  showSidebarBtn.addEventListener("click", () => {
    aside.classList.remove("hidden");
    main.classList.remove("shifted");
    setTimeout(() => {
      showSidebarBtn.classList.add("d-hidden");
    }, 100);
  });
});
