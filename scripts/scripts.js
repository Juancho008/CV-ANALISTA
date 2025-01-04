const typed = new Typed(".typed", {
    strings: [
        "<b>Desarrollador WEB</b>",
        "<b>Desarrollador Front-End</b>",
        "<b>Analista en Sistemas</b>"

    ],
    typeSpeed: 50,
    startDelay: 200,
    backSpeed: 50,
    smartBackspace: false,
    shuffle: false,
    loop: true,
    loopCount: false,
    showCursor: false,
    contentType: 'html',
});
const menu = document.querySelector('.menu');
const typeds = document.querySelector('.typed');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
        typeds.classList.add('display-typed');
    } else {
        menu.classList.remove('scrolled');
        typeds.classList.remove('display-typed');

    }
});

setTimeout(hideTyped, 5000);
setTimeout(showTyped, 10000);