// navbar
const   hamburger = document.querySelector(".navbar-toggle"),
navbarMob = document.querySelector(".navbar-mobile"),
hamburgerLogo = document.querySelector(".hamburger-logo");

// if (window.matchMedia("(max-width: 1024px)").matches) {
hamburger.addEventListener('click', event => {
    const   dropdown = document.querySelector('.dropdown'),
            arrow = document.querySelector('.arrow');
    // animation hamburger
    hamburgerLogo.classList.toggle("hamburger-logo--open");
    // toggle navbar
    navbarMob.classList.toggle("navbar-mobile--open");
    // fermer la dropdown et basculer la flèche a la fermeture de la navbar
    let dropdownOpen = dropdown.classList.contains('dropdown--open') ? true : false;
    let arrowOpen = arrow.classList.contains('arrow--open') ? true : false;
    console.log(dropdownOpen)
    if (dropdownOpen == true && arrowOpen == true) {
        dropdown.classList.remove("dropdown--open");
        arrow.classList.remove("arrow--open");
    }
});
// }
    
// toggle dropdown
const   dropdownToggle = document.querySelectorAll(".dropdown-toggle");

dropdownToggle.forEach(function (e) {
    e.addEventListener('click', event => {
        const   dropdown = event.target.closest(".dropdown-container").querySelector('.dropdown'),
        arrow = event.target.closest(".dropdown-container").querySelector('.arrow');
        
        // ouvrir dropdown
        dropdown.classList.toggle("dropdown--open");
        // toggle arrow
        if (document.body.contains(arrow) == true) {
            arrow.classList.toggle("arrow--open");
        } else {
            return false;
        }
    })
});

// lazy load youtube
( function() {
	var youtube = document.querySelectorAll( ".video-occasion" );
	for (var i = 0; i < youtube.length; i++) {
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		var image = new Image();
        image.src = source;
        image.alt = "video youtube";
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );
        youtube[i].addEventListener( "click", function() {
            var iframe = document.createElement( "iframe" );
            iframe.setAttribute( "allow", "autoplay" );
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

            this.innerHTML = "";
            this.appendChild( iframe );
        } );
	};
} )();