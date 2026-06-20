# CV Web — Juan Ignacio Espíndola

Currículum vitae personal en formato web: sitio estático, responsive y bilingüe (español / inglés), pensado para presentar perfil profesional, formación, habilidades, certificaciones y contacto.

---

## Qué incluye el proyecto

### Secciones del CV

| Sección | Contenido |
|---------|-----------|
| **Sidebar** | Nombre, títulos profesionales, datos de contacto, ubicación (Posadas, Misiones) con enlace a Google Maps, redes (GitHub, CodePen, LinkedIn) |
| **Sobre mí** | Presentación como Analista en Sistemas y cuatro servicios: diseño web, desarrollo web, integración de IA y mantenimiento de código legacy |
| **Currículum** | Educación (NORMAL N° 10 — Analista en Sistemas; BOP N°1 — secundaria técnica) y habilidades en chips (PHP, JavaScript, TypeScript, React, Node.js, Laravel, SQL, IA, Cloudflare, Vercel, etc.) |
| **Certificaciones** | Galería de 22 certificados con carrusel (8 por página), navegación por flechas, puntos y swipe en móvil; lightbox al hacer clic en cada imagen |
| **Contacto** | Mapa embebido y formulario de contacto con validación básica del lado del cliente |

### Funcionalidades extra

- **Selector de idioma (ES / EN)** fijo arriba a la derecha, con transición suave (fade + blur) al cambiar idioma.
- **Reproductor Spotify** con playlist personal *CV*, modal de consentimiento antes de cargar el embed, minimizar/expandir y enlace directo a Spotify.
- **Diseño responsive** con barra de navegación inferior en móvil y lateral en escritorio.
- **Tema oscuro** con acentos en amarillo/naranja y animaciones en hover, tarjetas y elementos interactivos.

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del CV |
| **CSS3** | Estilos, layout responsive, animaciones y variables CSS |
| **JavaScript (vanilla)** | Navegación, carrusel, lightbox, i18n y reproductor musical |
| **[Ionicons](https://ionicons.com/)** | Iconografía (redes, navegación, UI) |
| **[Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)** | Tipografía principal |
| **[Spotify Embed](https://developer.spotify.com/documentation/embeds)** | Reproductor de playlist integrado |
| **[Google Maps](https://maps.google.com/)** | Ubicación en sidebar y sección de contacto |

No requiere Node.js ni build: es un sitio estático listo para abrir en el navegador o desplegar en cualquier hosting (por ejemplo [Vercel](https://vercel.com/)).

---

## Estructura del repositorio

```
CV-ANALISTA/
├── index.html              # Página principal del CV
├── css/
│   └── style.css           # Estilos globales, componentes y media queries
├── scripts/
│   ├── i18n.js             # Traducciones ES/EN y cambio de idioma
│   ├── music-player.js     # Consentimiento, embed Spotify y colapsar/expandir
│   └── script.js           # Navegación, sidebar, carrusel de certificaciones, lightbox, formulario
├── certificaciones/        # Imágenes de certificados (PNG/JPG)
├── LICENSE
└── README.md
```

---

## Reproductor Spotify

Playlist: [CV — Juan Ignacio Espíndola](https://open.spotify.com/playlist/0XXtViuvCuVVgHSz8jJP7g)

| Comportamiento | Escritorio (≥580px) | Móvil (<580px) |
|----------------|---------------------|----------------|
| **Al cargar** | Minimizado con barra compacta visible (canción + play/pausa) | Minimizado como chip pequeño (icono + “CV”) |
| **Minimizado** | Barra de ~300×80px con controles de Spotify | Chip mínimo; la música sigue en segundo plano sin tapar el CV |
| **Expandido** | Panel ~300×352px con playlist completa | Panel compacto (~152px de alto del embed) sin espacio negro extra |
| **Consentimiento** | Modal la primera vez; preferencia guardada en `localStorage` (`cv-spotify-consent`) | Igual |

> Spotify no permite controlar play/pausa desde fuera del iframe sin su API Premium. El usuario debe usar los controles del propio embed.

---

## Internacionalización (i18n)

- Archivo de traducciones: `scripts/i18n.js`
- Atributos `data-i18n` y `data-i18n-placeholder` en el HTML
- Idioma guardado en `localStorage`
- Al cambiar idioma se actualiza el `<title>` y el atributo `lang` del documento

---

## Cómo ejecutarlo en local

1. Clonar o descargar el repositorio.
2. Servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
# Con Python
python -m http.server 8080

# Con npx (Node)
npx serve .
```

3. Abrir `http://localhost:8080` en el navegador.

> Abrir `index.html` directamente con `file://` puede fallar con rutas absolutas (`/css/...`). Usar un servidor local es lo recomendable.

---

## Cambios y mejoras realizadas

Resumen de lo implementado en esta versión del CV:

1. **Perfil actualizado** — Enfoque en Analista en Sistemas, servicios profesionales y datos de contacto reales (dirección, redes, mapa).
2. **Bilingüe ES/EN** — Selector fijo, traducciones completas y transición visual al cambiar idioma.
3. **Habilidades** — Chips sin porcentajes, con stack actual (TypeScript, Tailwind, React Native, ChromaDB, Cloudflare, etc.).
4. **Certificaciones** — Nueva pestaña con 22 certificados, carrusel paginado, lightbox y soporte táctil.
5. **Reproductor Spotify** — Playlist personal, consentimiento GDPR-style, estados minimizado/expandido diferenciados para PC y móvil.
6. **UX responsive** — En móvil el reproductor colapsado ocupa el mínimo espacio posible; al expandir se evita el hueco negro del iframe.
7. **UI** — Animaciones en contactos y tarjetas de servicios, títulos en chips flex y estilo coherente con el selector de idioma.

---

## Contacto

- **Email:** juanignacioespindola08@gmail.com  
- **GitHub:** [Juancho008](https://github.com/Juancho008)  
- **LinkedIn:** [juanespindola08](https://www.linkedin.com/in/juanespindola08/)  
- **CodePen:** [Juan-Ignacio-Espindola](https://codepen.io/Juan-Ignacio-Espindola)

---

## Licencia

Ver el archivo [LICENSE](LICENSE) del repositorio.
