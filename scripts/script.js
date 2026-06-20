'use strict';

initLanguageSwitcher();

//Opening or closing side bar

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
    sidebarBtn.setAttribute("aria-expanded", sidebar.classList.contains("active"));
});

//Activating Modal-testimonial

const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    })
}

//Activating close button in modal-testimonial

modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

//Activating Filter Select and filtering options

const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

if (select) {
select.addEventListener('click', function () {elementToggleFunc(this); });

for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {

        let selectedValue = this.dataset.filterValue || this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
        if(selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

//Enabling filter button for larger screens 

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    
    filterBtn[i].addEventListener('click', function() {

        let selectedValue = this.dataset.filterValue || this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;

    })
}

// Enabling Contact Form

const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if(form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else { 
            formBtn.setAttribute('disabled', '');
        }
    })
}

// Enabling Page Navigation 

const MAP_EMBED_URL = 'https://maps.google.com/maps?q=H.+Quiroga+6624,+Posadas,+Misiones&hl=es&z=16&output=embed';
const mapbox = document.querySelector('[data-mapbox]');
const mapLoadBtn = document.querySelector('[data-map-load]');
const mapEmbed = document.querySelector('[data-map-embed]');
const mapIframe = document.querySelector('[data-map-iframe]');
let mapPrefetched = false;

function isMobileViewport() {
    return window.matchMedia('(max-width: 1023px)').matches;
}

function prefetchContactMap() {
    if (!mapIframe || mapPrefetched) return;

    mapIframe.src = MAP_EMBED_URL;
    mapPrefetched = true;
}

function loadContactMap() {
    if (!mapIframe || !mapbox) return;

    prefetchContactMap();
    mapbox.classList.add('is-loaded');
}

function resetContactMap() {
    if (!mapbox) return;

    mapbox.classList.remove('is-loaded');
}

function handleContactPage(pageName) {
    if (pageName === 'contact') {
        prefetchContactMap();
        if (!isMobileViewport()) {
            loadContactMap();
        }
    } else {
        resetContactMap();
    }
}

if (mapLoadBtn) {
    mapLoadBtn.addEventListener('click', loadContactMap);
}

if (mapIframe) {
    const scheduleMapPrefetch = () => prefetchContactMap();

    if ('requestIdleCallback' in window) {
        requestIdleCallback(scheduleMapPrefetch, { timeout: 4000 });
    } else {
        setTimeout(scheduleMapPrefetch, 2000);
    }
}

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('article[data-page]');

for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        const pageName = this.dataset.page;

        for(let j = 0; j < pages.length; j++) {
            if(pageName === pages[j].dataset.page) {
                pages[j].classList.add('active');
                navigationLinks[j].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove('active');
                navigationLinks[j].classList.remove('active');
            }
        }

        handleContactPage(pageName);
    });
}

// Certification carousel

const CERTS_PER_PAGE = 8;

function initCertCarousel() {
    const carousel = document.querySelector('[data-cert-carousel]');
    const gallery = document.querySelector('[data-cert-gallery]');
    const track = document.querySelector('[data-cert-track]');
    const prevBtn = document.querySelector('[data-cert-prev]');
    const nextBtn = document.querySelector('[data-cert-next]');
    const statusEl = document.querySelector('[data-cert-status]');
    const dotsEl = document.querySelector('[data-cert-dots]');

    if (!carousel || !gallery || !track) return;

    const cards = Array.from(gallery.querySelectorAll('.cert-card'));
    track.innerHTML = '';

    for (let i = 0; i < cards.length; i += CERTS_PER_PAGE) {
        const slide = document.createElement('li');
        slide.className = 'cert-carousel-slide';

        const slideGallery = document.createElement('ul');
        slideGallery.className = 'cert-gallery';

        cards.slice(i, i + CERTS_PER_PAGE).forEach(function (card) {
            slideGallery.appendChild(card);
        });

        slide.appendChild(slideGallery);
        track.appendChild(slide);
    }

    const slides = track.querySelectorAll('.cert-carousel-slide');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

        if (statusEl) {
            statusEl.textContent = (currentIndex + 1) + ' / ' + slides.length;
        }

        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;

        if (dotsEl) {
            dotsEl.querySelectorAll('.cert-carousel-dot').forEach(function (dot, index) {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    }

    if (dotsEl) {
        dotsEl.innerHTML = '';
        slides.forEach(function (_, index) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'cert-carousel-dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Page ' + (index + 1));
            dot.addEventListener('click', function () {
                currentIndex = index;
                updateCarousel();
            });
            dotsEl.appendChild(dot);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    let touchStartX = 0;

    carousel.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) < 50) return;

        if (diff < 0 && currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        } else if (diff > 0 && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }, { passive: true });

    if (slides.length <= 1) {
        const header = carousel.querySelector('.cert-carousel-header');
        if (header) header.style.display = 'none';
        if (dotsEl) dotsEl.style.display = 'none';
    }

    updateCarousel();
}

initCertCarousel();

// Certifications / Projects sub-tabs

function initWorkSubnav() {
    document.querySelectorAll('[data-work-subnav]').forEach(function (subnav) {
        const container = subnav.closest('article');
        if (!container) return;

        const tabs = subnav.querySelectorAll('[data-work-tab]');
        const panels = container.querySelectorAll('[data-work-panel]');

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                const target = tab.dataset.workTab;

                tabs.forEach(function (t) {
                    const isActive = t.dataset.workTab === target;
                    t.classList.toggle('active', isActive);
                    t.setAttribute('aria-selected', isActive ? 'true' : 'false');
                });

                panels.forEach(function (panel) {
                    const isActive = panel.dataset.workPanel === target;
                    panel.classList.toggle('active', isActive);
                    panel.hidden = !isActive;
                });
            });
        });
    });
}

initWorkSubnav();

// Certification lightbox

const certButtons = document.querySelectorAll('[data-cert-img]');
const certLightbox = document.querySelector('[data-cert-lightbox]');
const certLightboxImg = document.querySelector('[data-cert-lightbox-img]');
const certCloseBtn = document.querySelector('[data-cert-close]');
const certOverlay = document.querySelector('[data-cert-overlay]');

const certLightboxToggle = function (open) {
    if (!certLightbox) return;
    certLightbox.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
};

if (certButtons.length && certLightbox && certLightboxImg) {
    certButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const img = this.querySelector('img');
            certLightboxImg.src = this.dataset.certImg;
            certLightboxImg.alt = img ? img.alt : '';
            certLightboxToggle(true);
        });
    });

    if (certCloseBtn) certCloseBtn.addEventListener('click', function () { certLightboxToggle(false); });
    if (certOverlay) certOverlay.addEventListener('click', function () { certLightboxToggle(false); });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && certLightbox.classList.contains('active')) {
            certLightboxToggle(false);
        }
    });
}