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

// ✅ Definimos las funciones que faltaban
function hideTyped() {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
        typedElement.classList.add('display-typed');
    }
}

function showTyped() {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
        typedElement.classList.remove('display-typed');
    }
}

setTimeout(hideTyped, 5000);
setTimeout(showTyped, 10000);

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const closeMenu = document.getElementById("closeMenu");

    hamburger.addEventListener("click", () => {
        navbar.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

    // Extra: cerrar al hacer clic en un enlace del menú (opcional)
    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');

    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
    }

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length -1;
        }
        updateSlidePosition();
    });

    window.addEventListener('resize', updateSlidePosition);
});
