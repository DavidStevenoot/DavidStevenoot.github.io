// navbar
// toggle "nos agences"
const   dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(function (e) {
    console.log(e)
    e.addEventListener('click', event => {
        const   dropdownMenu = event.target.closest(".dropdown").querySelector('.dropdown-menu'),
                arrow = event.target.closest(".dropdown").querySelector('.fa-chevron-down')
        // ouvrir dropdown
        dropdownMenu.classList.toggle("dropdown-menu--open");
        // toggle arrow
        arrow.classList.toggle("fa-chevron-down--open");
    })
});
        
// toggle hamburger
const   hamburger = document.querySelector(".navbar-toggler"),
        subNavbar = document.querySelector(".sub-navbar"),
        overLayer = document.querySelector(".overlayer"),
        hamburgerLogo = document.querySelector(".hamburger-logo");

hamburger.addEventListener('click', event => {
    // déplacer la layout supérieure
    overLayer.classList.toggle("overlayer--open");
    // animation hamburger
    hamburgerLogo.classList.toggle("hamburger-logo--open");
    // toggle navbar
    subNavbar.classList.toggle("sub-navbar--open");
    // fermer la dropdown et basculer la flèche a la fermeture de la navbar
    let dropdownOpen = dropdownMenu.classList.contains('dropdown-menu--open') ? true : false;
    let arrowOpen = arrow.classList.contains('fa-chevron-down--open') ? true : false;
    if (dropdownOpen == true && arrowOpen == true) {
        dropdownMenu.classList.remove("dropdown-menu--open");
        arrow.classList.remove("fa-chevron-down--open");
    }
});