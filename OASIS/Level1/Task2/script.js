    /*----------------toggle icon----------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('hommie');
};








        /*----------------scroll sections hommie link----------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('hommie');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('hommie');
            });
        };
    });




    /*----------------sticky navbar----------------*/

header.classList.toggle('sticky', window.scrollY > 100);







/*----------------remove toggle icon and navbar when click navbar link---------------*/



menuIcon.classList.remove('bx-x');
navbar.classList.remove('hommie');


};



/*----------------scroll reveal---------------*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


ScrollReveal().reveal('.marquee__group, marquee', { origin:'right' });
ScrollReveal().reveal('.marquee marquee--reverse, marquee', { origin:'left' });








/*----------------typed js---------------*/
const typed = new Typed('.multiple-text', {
    strings: ['a CSE Pre Final Year Student', 'a FrontEnd Developer', 'a Blogger', 'an UI-UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 100,
    loop: true
})