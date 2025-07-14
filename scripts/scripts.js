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
  const navbar = document.getElementById("navbar-ham");
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
      const texto =
        card.getAttribute("data-texto") || "Información no disponible.";
      const titulo = card.querySelector("h3").textContent;

      Swal.fire({
        title: titulo,
        text: texto,
        icon: "info",
        confirmButtonText: "Cerrar",
        customClass: {
          popup: "swal2-card-popup",
        },
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const imgsCertificaciones = document.querySelectorAll(
    "#certificaciones .carousel-img-wrapper img"
  );

  imgsCertificaciones.forEach((img) => {
    img.addEventListener("click", () => {
      Swal.fire({
        title: img.alt,
        imageUrl: img.src,
        imageAlt: img.alt,
        showCloseButton: true,
        background: "#1e1e1e",
        color: "#fff",
        imageWidth: "80%",
        confirmButtonText: "Cerrar",
        customClass: {
          popup: "swal2-certificacion-popup",
        },
      });
    });
  });
});

emailjs.init("3i7vSTHCRrRHH7Sch");

function enviar(e) {
  e.preventDefault();

  const loading = document.getElementById("loading");
  loading.style.display = "block";

  emailjs
    .send("service_z5k5v53", "template_663m05n", {
      name: document.getElementById("name").value,
      message: document.getElementById("message").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      cel: document.getElementById("cel").value,
    })
    .then(() => {
      loading.style.display = "none";

      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarte, te responderé pronto.",
        confirmButtonColor: "#4e4eff",
      });

      document.querySelector("form").reset();
    })
    .catch((error) => {
      loading.style.display = "none";

      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "Ocurrió un problema. Intentá de nuevo más tarde.",
        footer: "<code>" + JSON.stringify(error) + "</code>",
        confirmButtonColor: "#d33",
      });
    });
}





let confettiFired = false;

window.addEventListener("scroll", () => {
  // Altura total de la página
  const scrollHeight = document.documentElement.scrollHeight;
  // Cuánto se ha scrolleado + alto ventana
  const scrollTopPlusWindow = window.scrollY + window.innerHeight;

  // Si estamos a 10px o menos del final y no se disparó aún
  if (scrollTopPlusWindow >= scrollHeight - 10 && !confettiFired) {
    confettiFired = true; // para que no se dispare muchas veces

    // Disparo de confetis
    lanzarConfetti();
  }
});

function lanzarConfetti() {
  const duration = 5 * 1000; // 5 segundos
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Lanzar confetis de ambos lados de la pantalla
    confetti(Object.assign({}, defaults, { 
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, { 
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}
