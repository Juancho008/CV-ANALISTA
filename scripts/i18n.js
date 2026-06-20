'use strict';

const translations = {
    en: {
        'meta.title': 'Curriculum Vitae',
        'sidebar.title1': 'Web Developer',
        'sidebar.title2': 'Graphic Designer',
        'sidebar.title3': 'Full Stack Developer',
        'sidebar.showContacts': 'Show Contacts',
        'sidebar.email': 'Email',
        'sidebar.phone': 'Phone',
        'sidebar.birthday': 'Birthday',
        'sidebar.birthdayDate': 'December 10, 1999',
        'sidebar.location': 'Location',
        'sidebar.address': 'H. Quiroga 6624, Posadas, Misiones',
        'nav.about': 'About',
        'nav.resume': 'Resume',
        'nav.certifications': 'Certifications',
        'nav.contact': 'Contact',
        'about.title': 'About me',
        'about.p1': 'Systems Analyst with experience in software development, technology integration, and solution optimization. Throughout my career, I have worked with various libraries and tools, which has allowed me to solve problems efficiently and innovatively. I am constantly learning and always seeking new challenges that drive my growth as a developer.',
        'about.servicesTitle': "What I'm doing",
        'about.service1.title': 'Web Design',
        'about.service1.text': 'The most modern and high-quality design made at a professional level.',
        'about.service2.title': 'Web development',
        'about.service2.text': 'High-quality development of sites at the professional level.',
        'about.service3.title': 'AI Integration',
        'about.service3.text': 'Integration of artificial intelligence solutions to automate processes and enhance user experiences.',
        'about.service4.title': 'Legacy Code Maintenance',
        'about.service4.text': 'Maintenance and modernization of legacy systems to improve stability, performance, and long-term maintainability.',
        'resume.title': 'Resume',
        'resume.education': 'Education',
        'resume.edu1.title': 'NORMAL N° 10 — Systems Analyst',
        'resume.edu1.text': 'There I learned the basic fundamentals of programming to later specialize and improve in the field.',
        'resume.edu2.title': 'BOP N°1 — Secondary school focused on technical studies',
        'resume.edu2.text': 'I learned a great deal about mathematical calculations and developed a solid understanding of technical concepts.',
        'resume.skillsTitle': 'My Skills',
        'resume.skills.php': 'PHP',
        'resume.skills.js': 'JS',
        'resume.skills.typescript': 'TypeScript',
        'resume.skills.tailwind': 'Tailwind CSS',
        'resume.skills.sass': 'SASS',
        'resume.skills.react': 'ReactJS',
        'resume.skills.node': 'Node.js',
        'resume.skills.godot': 'GodotScript',
        'resume.skills.jquery': 'jQuery',
        'resume.skills.python': 'Python',
        'resume.skills.cpp': 'C++',
        'resume.skills.laravel': 'Laravel',
        'resume.skills.sql': 'SQL',
        'resume.skills.chromadb': 'ChromaDB',
        'resume.skills.oracle': 'OracleDB',
        'resume.skills.sqlserver': 'SQL Server',
        'resume.skills.postgresql': 'PostgreSQL',
        'resume.skills.json': 'JSON',
        'resume.skills.api': 'API REST',
        'resume.skills.ajax': 'Ajax',
        'resume.skills.ai': 'AI',
        'resume.skills.reactNative': 'React Native',
        'resume.skills.android': 'Android Developer',
        'resume.skills.cloudflare': 'Cloudflare',
        'resume.skills.vercel': 'Vercel',
        'cert.title': 'Certifications',
        'cert.subtitle': 'Professional Certifications',
        'cert.galleryHint': 'Use the arrows to browse certificates. Tap or click to view full size.',
        'portfolio.title': 'Portfolio',
        'portfolio.selectCategory': 'Select Category',
        'portfolio.all': 'All',
        'portfolio.webDesign': 'Web Design',
        'portfolio.applications': 'Applications',
        'portfolio.webDevelopment': 'Web Development',
        'portfolio.categoryWebDev': 'Web Development',
        'portfolio.categoryWebDesign': 'Web Design',
        'portfolio.categoryApps': 'Applications',
        'contact.title': 'Contact',
        'contact.formTitle': 'Contact Form',
        'contact.placeholderName': 'Full name',
        'contact.placeholderEmail': 'Email Address',
        'contact.placeholderMessage': 'Your Message',
        'contact.sendBtn': 'Send Message',
        'music.nowPlaying': 'Now playing',
        'music.embedHint': 'Use the Spotify player below to play or pause.',
        'music.openSpotify': 'Open in Spotify',
        'music.placeholder': 'Enable music from the welcome prompt.',
        'music.consentTitle': 'Play music?',
        'music.consentText': 'This site includes a Spotify playlist. If you accept, the player will load so you can listen while browsing the CV. You may need to press play once inside the Spotify player.',
        'music.consentAccept': 'Yes, play music',
        'music.consentDecline': 'No, thanks',
        'music.minimize': 'Minimize player',
        'music.expand': 'Expand player'
    },
    es: {
        'meta.title': 'Curriculum Vitae',
        'sidebar.title1': 'Desarrollador Web',
        'sidebar.title2': 'Diseñador Gráfico',
        'sidebar.title3': 'Desarrollador Full Stack',
        'sidebar.showContacts': 'Ver contactos',
        'sidebar.email': 'Correo',
        'sidebar.phone': 'Teléfono',
        'sidebar.birthday': 'Fecha de nacimiento',
        'sidebar.birthdayDate': '10 de diciembre de 1999',
        'sidebar.location': 'Ubicación',
        'sidebar.address': 'H. Quiroga 6624, Posadas, Misiones',
        'nav.about': 'Sobre mí',
        'nav.resume': 'Currículum',
        'nav.certifications': 'Certificaciones',
        'nav.contact': 'Contacto',
        'about.title': 'Sobre mí',
        'about.p1': 'Analista en Sistemas, con experiencia en el desarrollo de software, integración de tecnologías y optimización de soluciones. A lo largo de mi trayectoria, he trabajado con diversas librerías y herramientas, lo que me ha permitido resolver problemas de manera eficiente e innovadora. Estoy en constante aprendizaje y siempre en busca de nuevos desafíos que impulsen mi crecimiento como desarrollador.',
        'about.servicesTitle': 'Lo que hago',
        'about.service1.title': 'Diseño Web',
        'about.service1.text': 'El diseño más moderno y de alta calidad realizado a nivel profesional.',
        'about.service2.title': 'Desarrollo Web',
        'about.service2.text': 'Desarrollo de sitios de alta calidad a nivel profesional.',
        'about.service3.title': 'Integración de IA',
        'about.service3.text': 'Integración de soluciones de inteligencia artificial para automatizar procesos y mejorar la experiencia del usuario.',
        'about.service4.title': 'Mantenimiento de código legacy',
        'about.service4.text': 'Mantenimiento y modernización de sistemas legacy para mejorar la estabilidad, el rendimiento y la mantenibilidad a largo plazo.',
        'resume.title': 'Currículum',
        'resume.education': 'Educación',
        'resume.edu1.title': 'NORMAL N° 10 — Analista en Sistemas',
        'resume.edu1.text': 'Allí aprendí los fundamentos básicos de la programación para posteriormente perfeccionarme en la misma.',
        'resume.edu2.title': 'BOP N°1 — Colegio secundario orientado a la tecnicatura',
        'resume.edu2.text': 'Aprendí mucho de cálculos matemáticos y desarrollé una sólida comprensión de conceptos técnicos.',
        'resume.skillsTitle': 'Mis habilidades',
        'resume.skills.php': 'PHP',
        'resume.skills.js': 'JS',
        'resume.skills.typescript': 'TypeScript',
        'resume.skills.tailwind': 'Tailwind CSS',
        'resume.skills.sass': 'SASS',
        'resume.skills.react': 'ReactJS',
        'resume.skills.node': 'Node.js',
        'resume.skills.godot': 'GodotScript',
        'resume.skills.jquery': 'jQuery',
        'resume.skills.python': 'Python',
        'resume.skills.cpp': 'C++',
        'resume.skills.laravel': 'Laravel',
        'resume.skills.sql': 'SQL',
        'resume.skills.chromadb': 'ChromaDB',
        'resume.skills.oracle': 'OracleDB',
        'resume.skills.sqlserver': 'SQL Server',
        'resume.skills.postgresql': 'PostgreSQL',
        'resume.skills.json': 'JSON',
        'resume.skills.api': 'API REST',
        'resume.skills.ajax': 'Ajax',
        'resume.skills.ai': 'IA',
        'resume.skills.reactNative': 'React Native',
        'resume.skills.android': 'Desarrollador Android',
        'resume.skills.cloudflare': 'Cloudflare',
        'resume.skills.vercel': 'Vercel',
        'cert.title': 'Certificaciones',
        'cert.subtitle': 'Certificaciones profesionales',
        'cert.galleryHint': 'Usá las flechas para ver más certificados. Tocá o hacé clic para ver en tamaño completo.',
        'portfolio.title': 'Portafolio',
        'portfolio.selectCategory': 'Seleccionar categoría',
        'portfolio.all': 'Todos',
        'portfolio.webDesign': 'Diseño Web',
        'portfolio.applications': 'Aplicaciones',
        'portfolio.webDevelopment': 'Desarrollo Web',
        'portfolio.categoryWebDev': 'Desarrollo Web',
        'portfolio.categoryWebDesign': 'Diseño Web',
        'portfolio.categoryApps': 'Aplicaciones',
        'contact.title': 'Contacto',
        'contact.formTitle': 'Formulario de contacto',
        'contact.placeholderName': 'Nombre completo',
        'contact.placeholderEmail': 'Correo electrónico',
        'contact.placeholderMessage': 'Tu mensaje',
        'contact.sendBtn': 'Enviar mensaje',
        'music.nowPlaying': 'Sonando ahora',
        'music.embedHint': 'Usá el reproductor de Spotify de abajo para reproducir o pausar.',
        'music.openSpotify': 'Abrir en Spotify',
        'music.placeholder': 'Activá la música desde el aviso de bienvenida.',
        'music.consentTitle': '¿Reproducir música?',
        'music.consentText': 'Este sitio incluye una playlist de Spotify. Si aceptás, se cargará el reproductor para que puedas escuchar mientras navegás el CV. Es posible que debas pulsar play una vez dentro del reproductor de Spotify.',
        'music.consentAccept': 'Sí, reproducir música',
        'music.consentDecline': 'No, gracias',
        'music.minimize': 'Minimizar reproductor',
        'music.expand': 'Expandir reproductor'
    }
};

const LANG_TRANSITION_MS = 320;
let currentLang = null;

function updateLanguageContent(lang) {
    const strings = translations[lang];
    if (!strings) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.dataset.i18n;
        if (strings[key] !== undefined) {
            el.textContent = strings[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const key = el.dataset.i18nPlaceholder;
        if (strings[key] !== undefined) {
            el.placeholder = strings[key];
        }
    });

    if (strings['meta.title']) {
        document.title = strings['meta.title'];
    }

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });

    localStorage.setItem('cv-lang', lang);
    currentLang = lang;
}

function applyLanguage(lang, animate) {
    if (!translations[lang]) return;
    if (lang === currentLang) return;

    const main = document.querySelector('main');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shouldAnimate = animate && main && !prefersReducedMotion;

    if (!shouldAnimate) {
        updateLanguageContent(lang);
        return;
    }

    main.classList.add('lang-transition-out');

    window.setTimeout(function () {
        updateLanguageContent(lang);
        main.classList.remove('lang-transition-out');
        main.classList.add('lang-transition-in');
        void main.offsetWidth;
        main.classList.remove('lang-transition-in');
    }, LANG_TRANSITION_MS);
}

function initLanguageSwitcher() {
    const savedLang = localStorage.getItem('cv-lang');
    const defaultLang = savedLang || (navigator.language.startsWith('es') ? 'es' : 'en');
    applyLanguage(defaultLang, false);

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyLanguage(this.dataset.langBtn, true);
        });
    });
}
