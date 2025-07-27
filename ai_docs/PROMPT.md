Eres un experto desarrollador web, diseñador de UX/UI y especialista en SEO con un profundo conocimiento en accesibilidad web (WCAG 2.1 AA). Tu tarea es crear el código completo de una página web para la "Fundación GASIBA GI" utilizando **solo HTML, CSS y JavaScript puros**. La página debe ser totalmente "frontend puro", sin necesidad de Node.js, NPM, frameworks de JavaScript (como React, Vue, Angular), ni un servidor backend dedicado. Debe funcionar de forma nativa en cualquier navegador moderno desde un hosting compartido (como Hostinger), sin dependencias externas ni compilación.


Obede a los lineamientos del archivo gasiba_website_specs.json y GEMINI.md

**Objetivo Principal:**
Crear un sitio web que refleje la misión, visión y valores de la Fundación GASIBA GI, impulse el compromiso, fomente las donaciones y atraiga asociaciones estratégicas para sus proyectos futuros, todo ello con un rendimiento y accesibilidad excepcionales.

**Requisitos Generales:**
1.  **Tecnología:** Solo HTML5, CSS3 y JavaScript ES6+. Sin frameworks, librerías grandes (ej. jQuery, Bootstrap), ni preprocesadores CSS.
2.  **Funcionamiento:** 100% frontend. La interacción del usuario y la carga de contenido (si es dinámica) deben manejarse con JavaScript puro y APIs web (ej. `fetch` para JSON estático si fuera necesario, pero el objetivo es que la mayoría del contenido sea estático en HTML).
3.  **Hosting:** Diseñado para un hosting compartido HTML/PHP básico (Hostinger u similar). Los formularios de contacto se pueden integrar con servicios de terceros vía JavaScript si el hosting no soporta PHP para el envío de correos, pero la prioridad es un formulario de ejemplo HTML/JS que muestre la estructura.
4.  **Modernidad:** Diseño visual moderno, profesional y atractivo.
5.  **Responsividad:** Diseño "Mobile-First" que se adapte perfectamente a todos los tamaños de pantalla (móvil, tablet, escritorio) utilizando CSS media queries y Flexbox/Grid.
6.  **Rendimiento:** Altamente optimizado para Core Web Vitals (LCP, FID, CLS). Optimización manual de imágenes (placeholder, `loading="lazy"`), CSS y JS minimizados/inlinizados donde sea posible, y carga eficiente de recursos.
7.  **Accesibilidad (WCAG 2.1 AA):**
    * Estructura semántica HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`, `<p>`, `<a>`, `<button>`, `<img>` con `alt` descriptivo).
    * Navegación por teclado completa y visible (`:focus` styling).
    * Relaciones de contraste de color adecuadas (WCAG AA).
    * Texto redimensionable (sin imágenes de texto).
    * Controles para animaciones si exceden 5 segundos o tienen parpadeos.
    * Formularios accesibles (etiquetas explícitas, validación).
8.  **SEO:**
    * Estructura de contenido clara con jerarquía de encabezados (`H1`, `H2`, etc.).
    * Meta tags descriptivas (`<title>`, `<meta name="description">`).
    * URLs amigables (ej. `nuestros-programas.html`).
    * Texto alternativo (`alt`) descriptivo para todas las imágenes.
    * Priorizar la carga de contenido relevante en el "above-the-fold".

**Estructura del Sitio Web (Secciones Obligatorias - Cada una puede ser una sección en la misma página o páginas HTML separadas si es más limpio, priorizando una "Single Page Application" lógica con scroll a secciones):**

1.  **Inicio (`index.html`):**
    * Título impactante.
    * Breve declaración de la misión de GASIBA GI.
    * Resumen visual del impacto (ej. contador de vidas impactadas, proyectos activos - si es posible con CSS/JS).
    * Llamadas a la acción claras y prominentes: "Donar Ahora", "Conoce Nuestros Programas", "Involúcrate".
    * Diseño visual: Utilizar los colores primarios y secundarios, imágenes que transmitan esperanza y comunidad.

2.  **Quiénes Somos (`quienes-somos.html` o sección en `index.html`):**
    * [cite_start]**Visión:** "Ser una organización referente a nivel nacional por su compromiso con la transformación social..." [cite: 60]
    * [cite_start]**Misión:** "Proponer, ejecutar y promover programas integrales..." [cite: 62]
    * [cite_start]**Valores Institucionales:** Solidaridad, Equidad, Respeto, Inclusión, Corresponsabilidad, Resiliencia, Transparencia[cite: 65, 66, 67, 68, 69, 70, 71]. Cada valor con su breve descripción.
    * [cite_start]**Nuestra Identidad, Impacto y Compromiso Comunitario:** "La Fundación GASIBA GI es una organización sin fines de lucro..." [cite: 73] [cite_start]Mencionar presencia en Guayaquil, Durán y Milagro[cite: 75]. [cite_start]Resaltar el trabajo con líderes barriales, madres cuidadoras, etc.[cite: 76].
    * Enfatizar la transparencia.

3.  **Nuestros Programas (`nuestros-programas.html` o sección):**
    * [cite_start]Listar y describir los 14 objetivos/actividades de la Fundación GASIBA GI[cite: 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98].
    * Cada programa debe tener un título claro, una breve descripción y un icono asociado (diseñado con CSS si es simple, o SVG inline).
    * Ejemplo de diseño: Un sistema de tarjetas o acordeones para cada programa.

4.  **Futuros Proyectos (`futuros-proyectos.html` o sección):**
    * [cite_start]Presentar los proyectos: "Centros Municipales de Cuidado Infantil (CMCI)", "Centros de Desarrollo Infantil (CDI)" y "Creciendo Juntos"[cite: 103, 106, 109].
    * [cite_start]Para cada uno: Descripción detallada de su propósito, necesidad, impacto esperado y los recursos que requieren (infraestructura, talento humano, materiales, apoyo)[cite: 104, 105, 107, 108, 111, 112, 113, 114].
    * [cite_start]Diseñar esta sección para atraer financiación y alianzas: "Requieren el respaldo de instituciones aliadas, organismos cooperantes, empresas socialmente responsables y personas solidarias"[cite: 116]. Incluir CTAs específicas para la colaboración.

5.  **Nuestro Impacto / Historias de Éxito (`nuestro-impacto.html` o sección):**
    * Sección crucial para generar confianza.
    * Mostrar resultados tangibles: historias de éxito de individuos o familias impactadas.
    * Incluir testimonios (citas breves y creíbles).
    * Métricas de impacto (si es posible representarlas visualmente con gráficos CSS/JS simples, o solo texto).
    * Diseño que evoque empatía y esperanza.

6.  **Cómo Ayudar / Involúcrate (`como-ayudar.html` o sección):**
    * Opciones claras para donaciones (simular un botón de donación que dirija a una URL externa o muestre un mensaje, sin procesamiento de pagos interno).
    * Opciones de voluntariado (formulario de interés).
    * Suscripción a boletín informativo (solo la interfaz, sin funcionalidad de backend).
    * Otras formas de apoyo.
    * CTAs persuasivas.

7.  **Noticias / Blog (`noticias.html` o sección):**
    * Diseño para listar artículos de noticias o blog.
    * Incluir 2-3 artículos de ejemplo con contenido ficticio sobre actividades recientes, logros o eventos.
    * Diseño simple de "tarjetas" o "listas" para los artículos.

8.  **Contáctanos (`contacto.html` o sección):**
    * [cite_start]Dirección: Milagro[cite: 100].
    * [cite_start]Correo: `fundaciongasiba@gmail.com`[cite: 100].
    * [cite_start]Teléfono/WhatsApp: `0960193518`[cite: 100].
    * [cite_start]Instagram: `@fundaciongasibagi.ec`[cite: 100].
    * Formulario de contacto básico (HTML, con validación JS en el frontend, sin envío real).
    * Mapa incrustado (ej. Google Maps embed de la dirección de Milagro).

**Identidad de Marca Digital (Implementar estrictamente):**

* **Paleta de Colores:**
    * **Azul Profundo (Primario):** `#003366` (Encabezados principales, fondos de secciones clave, elementos de marca)
    * **Verde Naturaleza (Primario):** `#339966` (Iconos de programas, gráficos de impacto, botones principales)
    * **Amarillo Sincero (Acento):** `#FFCC00` (Resaltados, elementos interactivos, detalles de diseño)
    * **Rojo/Naranja Sutil (Acento - para CTAs):** `#E67E22` (Botones de "Donar Ahora", CTAs secundarias)
    * **Blanco (Neutro):** `#FFFFFF` (Fondos, texto principal sobre fondos oscuros)
    * **Gris Claro (Neutro):** `#F2F2F2` (Fondos de secciones, separadores, texto secundario)
    * **Carbón Oscuro (Neutro):** `#333333` (Texto de cuerpo, elementos de navegación)
    * Asegurar contraste WCAG AA para todas las combinaciones de color.

* **Tipografía:**
    * **Fuentes recomendadas (usar Google Fonts si es posible con `<link>`, o declarar `font-family` genérica si no):**
        * **Títulos/Principal:** 'Inclusive Sans' o 'Noto Sans' (Preferir 'Noto Sans' por su versatilidad y soporte de idiomas).
        * **Cuerpo/Secundaria:** 'Noto Sans' o 'EB Garamond' (si se desea una serif para cuerpo, si no, 'Noto Sans' para coherencia).
    * **Jerarquía:**
        * H1: 48px / 3rem, Bold, Carbón Oscuro
        * H2: 36px / 2.25rem, Bold, Carbón Oscuro
        * H3: 24px / 1.5rem, Semi-Bold, Carbón Oscuro
        * H4: 18px / 1.125rem, Regular, Carbón Oscuro
        * Texto de Cuerpo: 16px / 1rem, Regular, Carbón Oscuro
        * CTA (Botones): 18px / 1.125rem, Bold, Blanco (sobre color de acento)
        * Pie de Página/Legal: 14px / 0.875rem, Regular, Gris Oscuro

* **Imágenes e Iconografía:**
    * Uso de imágenes auténticas y centradas en el ser humano que reflejen diversidad, esperanza, empoderamiento y comunidad.
    * Evitar fotos de archivo genéricas. Usar placeholders con nombres de archivo descriptivos (ej. `familia-empoderada.jpg`, `ninos-jugando.png`).
    * Optimizar el tamaño y formato de las imágenes para web (ej. usar `WebP` si el navegador lo soporta, o `JPG` con compresión). Incluir texto `alt` descriptivo.
    * Iconografía: Minimalista, limpia, coherente. Utilizar SVG inline o iconos simples con CSS si es posible para elementos clave (ej. objetivos de programas).

* **Tono de Voz y Mensajería:**
    * Empático, respetuoso, empoderador, profesional, transparente, esperanzador.
    * Centrado en el impacto, orientado a la solución, lenguaje inclusivo.
    * Impulsado por Llamadas a la Acción (CTAs).
    * Contenido estructurado para IA/LLM (respuestas concisas primero, viñetas, listas, tablas si aplica).

**Interactividad y Animaciones (JavaScript Puro):**
* **Navegación Suave:** Implementar desplazamiento suave (smooth scroll) al hacer clic en enlaces de anclaje (si es una SPA con secciones).
* **Microinteracciones:** Efectos sutiles `onHover` para botones y enlaces (ej. cambio de color de fondo, ligero escalado).
* **Animaciones por Scroll (Opcional, sutil):** Elementos que se desvanecen o deslizan sutilmente al entrar en el viewport (utilizar `IntersectionObserver` si es compatible con todos los navegadores objetivo, de lo contrario, detección simple de scroll). Asegurar que no afecte el rendimiento ni la accesibilidad.
* **Validación de Formularios:** Validación de campos en el frontend con JavaScript puro (ej. campos requeridos, formato de correo electrónico).

**Estructura del Código (Archivos):**

* `index.html` (o `home.html` si hay múltiples páginas principales)
* `quienes-somos.html` (o incluir como sección en `index.html`)
* `nuestros-programas.html` (o incluir como sección en `index.html`)
* `futuros-proyectos.html` (o incluir como sección en `index.html`)
* `nuestro-impacto.html` (o incluir como sección en `index.html`)
* `como-ayudar.html` (o incluir como sección en `index.html`)
* `noticias.html` (o incluir como sección en `index.html`)
* `contacto.html` (o incluir como sección en `index.html`)
* `css/style.css` (todos los estilos CSS en un solo archivo, minimizado si es posible)
* `js/script.js` (todo el JavaScript puro en un solo archivo)
* `img/` (carpeta para imágenes con placeholders descriptivos, indicando nombre y dimensiones)

**Consideraciones Adicionales:**
* La página debe ser **100% independiente** una vez cargada, sin necesidad de llamadas a API externas o servicios que requieran un backend para su funcionamiento básico.
* El diseño debe ser **limpio y profesional**, transmitiendo confianza y seriedad en la misión de la fundación.
* El código debe estar **bien comentado** y ser **fácil de entender y mantener**.
* Incluir un `<header>` con un logo (placeholder `logo.png` con texto alternativo "Fundación GASIBA GI Logo") y una barra de navegación responsiva.
* [cite_start]Un `<footer>` con enlaces relevantes (privacidad, términos, contacto) y los datos de contacto de GASIBA GI[cite: 100].

**¡Manos a la obra! Genera el código HTML, CSS y JavaScript para este sitio web, asegurando que cumple con todas las especificaciones detalladas.**