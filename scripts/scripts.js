const typed = new Typed(".typed", {
  strings: [
    "<b>Desarrollador WEB</b>",
    "<b>Desarrollador Front-End</b>",
    "<b>Analista en Sistemas</b>",
  ],
  typeSpeed: 50,
  startDelay: 200,
  backSpeed: 50,
  smartBackspace: false,
  shuffle: false,
  loop: true,
  loopCount: false,
  showCursor: false,
  contentType: "html",
});

const menu = document.querySelector(".menu");
const typeds = document.querySelector(".typed");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    menu.classList.add("scrolled");
    typeds.classList.add("display-typed");
  } else {
    menu.classList.remove("scrolled");
    typeds.classList.remove("display-typed");
  }
});

function hideTyped() {
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    typedElement.classList.add("display-typed");
  }
}

function showTyped() {
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    typedElement.classList.remove("display-typed");
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

  const navLinks = navbar.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  let currentIndex = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = "translateX(" + -slideWidth * currentIndex + "px)";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  }

  window.addEventListener("resize", updateSlidePosition);
  setInterval(nextSlide, 3000);
  updateSlidePosition();

 const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => observer.observe(card));

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const texto = card.getAttribute("data-texto") || "Información no disponible.";
      const titulo = card.querySelector("h3").textContent;

      Swal.fire({
        title: titulo,
        text: texto,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        customClass: {
          popup: 'swal2-card-popup'
        }
      });
    });
  });
});