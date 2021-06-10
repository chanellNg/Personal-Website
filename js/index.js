const navToggle = document.querySelector('.nav-toggle');

//returns a nodelist of all the nodes with class nav__link
const navLinks = document.querySelectorAll('.nav__link');

//adds and remove the nav-open class upon clicking the button
navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open');
});

//always remove nav list after clicking on any of the nav links
navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open');
    })
})
