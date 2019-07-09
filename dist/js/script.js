
const report = document.querySelectorAll('.create-report');
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName("body")[0];
const menu = document.getElementById("menu");
const nav = document.getElementById("main-nav");

// open sidebar

report.forEach(function (btn) {
  btn.addEventListener('click', function() {

    overlay.style.display = "block" //sidebar overlay for background
    sidebar.className += "active"; //activate sidebar
    body.style.position = "fixed"; // fix webpage while sidebar is open
    overlay.style.opacity = "0.7"; // set opacity of overlay

    overlay.addEventListener('click', function() {
      sidebar.className = "";
      overlay.style.opacity = "0";
      body.style.position = "static";
      overlay.style.display = "none"
    })

  })
})

// close sidebar

let close = document.getElementById("close");
close.addEventListener('click', function() {
  sidebar.className = "";
  overlay.style.opacity = "0";
  body.style.position = "static";
  overlay.style.display = "none"

})

// toggle hamburger menu

menu.addEventListener('click', function() {
  nav.classList.toggle("nav-active");
})
