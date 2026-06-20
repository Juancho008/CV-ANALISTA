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
        'resume.edu1.title': 'Indira Gandhi National Open University',
        'resume.edu1.text': 'There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing. This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration and communication soft skills.',
        'resume.edu2.title': '12th',
        'resume.edu2.text': 'In 12th grade (Commerce stream with Maths) under the CBSE curriculum, I deepened my understanding of subjects like Accountancy, Economics, Business Studies, Mathematics, and English. I enhanced my analytical, problem-solving, and quantitative skills, and developed a strong grasp of financial and business concepts, preparing me for higher education and a career in business or related fields.',
        'resume.edu3.title': '10th',
        'resume.edu3.text': 'In 10th grade under the CBSE curriculum, I developed a strong foundation in subjects like Mathematics, Science, English, and Social Science, enhancing my analytical, problem-solving, and communication skills. I also learned valuable time-management and critical thinking abilities, preparing me for future academic and personal growth.',
        'resume.skillsTitle': 'My Skills',
        'resume.skill1': 'Web Design (HTML-CSS-JS)',
        'resume.skill2': 'PHP (core,SQL)',
        'resume.skill3': 'Tailwind CSS',
        'resume.skill4': 'React.js',
        'resume.skill5': 'jQuary',
        'cert.title': 'Certifications',
        'cert.subtitle': 'Professional Certifications',
        'cert.item1.title': 'Web Development Certification',
        'cert.item1.date': '2024',
        'cert.item1.text': 'Training in front-end and back-end technologies, including HTML, CSS, JavaScript, PHP, and databases.',
        'cert.item2.title': 'Artificial Intelligence Integration',
        'cert.item2.date': '2025',
        'cert.item2.text': 'Training in AI solution implementation, natural language APIs, and process automation.',
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
        'contact.sendBtn': 'Send Message'
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
        'resume.edu1.title': 'Universidad Nacional Abierta Indira Gandhi',
        'resume.edu1.text': 'Allí aprendí una amplia gama de temas esenciales para comprender tanto la teoría como los aspectos prácticos de la informática. Esto incluye fundamentos de programación, arquitectura de computadoras, sistemas operativos, bases de datos, ingeniería de software, resolución de problemas y habilidades blandas de colaboración y comunicación.',
        'resume.edu2.title': '2.º Bachillerato',
        'resume.edu2.text': 'En 2.º de bachillerato (Comercio con Matemáticas) bajo el currículo CBSE, profundicé mi comprensión de materias como Contabilidad, Economía, Estudios Empresariales, Matemáticas e Inglés. Mejoré mis habilidades analíticas, de resolución de problemas y cuantitativas, y desarrollé una sólida comprensión de conceptos financieros y empresariales.',
        'resume.edu3.title': '1.º Bachillerato',
        'resume.edu3.text': 'En 1.º de bachillerato bajo el currículo CBSE, desarrollé una sólida base en materias como Matemáticas, Ciencias, Inglés y Ciencias Sociales, mejorando mis habilidades analíticas, de resolución de problemas y comunicación. También aprendí valiosas habilidades de gestión del tiempo y pensamiento crítico.',
        'resume.skillsTitle': 'Mis habilidades',
        'resume.skill1': 'Diseño Web (HTML-CSS-JS)',
        'resume.skill2': 'PHP (core, SQL)',
        'resume.skill3': 'Tailwind CSS',
        'resume.skill4': 'React.js',
        'resume.skill5': 'jQuery',
        'cert.title': 'Certificaciones',
        'cert.subtitle': 'Certificaciones profesionales',
        'cert.item1.title': 'Certificación en Desarrollo Web',
        'cert.item1.date': '2024',
        'cert.item1.text': 'Formación en tecnologías front-end y back-end, incluyendo HTML, CSS, JavaScript, PHP y bases de datos.',
        'cert.item2.title': 'Integración de Inteligencia Artificial',
        'cert.item2.date': '2025',
        'cert.item2.text': 'Capacitación en implementación de soluciones con IA, APIs de lenguaje natural y automatización de procesos.',
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
        'contact.sendBtn': 'Enviar mensaje'
    }
};

function applyLanguage(lang) {
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
}

function initLanguageSwitcher() {
    const savedLang = localStorage.getItem('cv-lang');
    const defaultLang = savedLang || (navigator.language.startsWith('es') ? 'es' : 'en');
    applyLanguage(defaultLang);

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyLanguage(this.dataset.langBtn);
        });
    });
}
