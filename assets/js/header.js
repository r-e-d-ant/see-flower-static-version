
/* -- show and hide the navigation bar on mobile view -- */


/* -- accessing the dom -- */
const navBar = document.querySelector('.nav-bar');
const openMenuIcon = document.querySelector('.open-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon')
const main = document.getElementById('main');
// -------------------------

/* -- open nav bar -- */
openMenuIcon.addEventListener('click', () => {
    if(!navBar.classList.contains('show-nav-bar')) {
        navBar.classList.add('show-nav-bar');
        openMenuIcon.classList.add('hide-open-menu__icon');
        closeMenuIcon.classList.add('show-close-menu__icon');

        main.classList.add('hide-background')
    }
});

/* -- close nav bar -- */
closeMenuIcon.addEventListener('click', () => {
    if(navBar.classList.contains('show-nav-bar')) {
        navBar.classList.remove('show-nav-bar');
        openMenuIcon.classList.remove('hide-open-menu__icon');
        closeMenuIcon.classList.remove('show-close-menu__icon');

        main.classList.remove('hide-background')
    }
});