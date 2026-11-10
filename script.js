
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("show");

    const isOpen = navbar.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// AUTOMATIC CURRENT YEAR
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

console.log("Gulati Coaching Classes website is ready!");
