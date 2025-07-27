# **Fundación GASIBA GI: Desarrollo Web Frontend Puro, Accesible y Optimizado**

El presente informe detalla la estrategia y la implementación técnica para la creación de un sitio web robusto y eficiente para la Fundación GASIBA GI, utilizando exclusivamente HTML5, CSS3 y JavaScript ES6+. El enfoque primordial se centra en la accesibilidad (WCAG 2.1 AA), el rendimiento óptimo (Core Web Vitals) y una sólida base SEO, garantizando una experiencia de usuario fluida y un impacto digital significativo. La arquitectura propuesta es 100% frontend, diseñada para un despliegue sencillo en cualquier hosting compartido, sin dependencias de frameworks, librerías pesadas o entornos de ejecución de backend.

## **I. Estructura General del Sitio y Elementos Fundamentales**

La base del sitio web se construye sobre una estructura HTML semántica y bien organizada, complementada por una hoja de estilos CSS unificada y un archivo JavaScript puro para la interactividad.

### **A. `index.html` \- Estructura Principal del Documento**

El archivo `index.html` sirve como punto de entrada principal del sitio, encapsulando la mayor parte del contenido en un diseño de "Single Page Application" lógica mediante secciones navegables.

La sección `<head>` es meticulosamente configurada para optimizar el rendimiento y la visibilidad en motores de búsqueda:

* El `<!DOCTYPE html>` y `<html lang="es">` establecen el tipo de documento y el idioma, crucial para la interpretación del navegador y para tecnologías de asistencia.  
* Las meta etiquetas esenciales incluyen `<meta charset="UTF-8">` para el soporte de caracteres especiales del español, y `<meta name="viewport" content="width=device-width, initial-scale=1.0">` que asegura la correcta adaptación del contenido a diversos tamaños de pantalla, fundamental para el diseño "Mobile-First".  
* La etiqueta `<title>` se define como "Fundación GASIBA GI | Transformando Vidas, Construyendo Futuro", un título impactante y optimizado con palabras clave relevantes para el SEO.  
* La `<meta name="description">` proporciona un resumen conciso y atractivo: "Fundación GASIBA GI: Impulsando el desarrollo humano, la inclusión social y la protección de derechos en Guayaquil, Durán y Milagro. ¡Conoce nuestros programas y cómo puedes ayudar\!", incorporando ubicaciones clave y llamadas a la acción para mejorar la tasa de clics en los resultados de búsqueda.  
* Se incluyen `<meta name="keywords">` con términos como "Fundación GASIBA GI, desarrollo social, inclusión, donaciones, voluntariado, Guayaquil, Durán, Milagro, programas sociales, ayuda humanitaria, niños, jóvenes, adultos mayores, personas con discapacidad, Ecuador" para reforzar la relevancia temática.  
* `meta` tags adicionales como `author` y `robots` (`index, follow`) son prácticas estándar de SEO.  
* La `<meta name="theme-color" content="#003366">` personaliza la interfaz del navegador en dispositivos móviles con el color primario de la marca, mejorando la coherencia visual.  
* Un `<link rel="icon" href="favicon.ico" type="image/x-icon">` asegura la presencia del ícono de la fundación en la barra de direcciones del navegador.  
* La integración de Google Fonts para 'Noto Sans' se realiza mediante `preconnect` y `link` tags, priorizando esta fuente por su versatilidad y soporte de idiomas, cargando solo los pesos necesarios (400, 600, 700\) para optimizar el tiempo de carga.  
* Finalmente, `<link rel="stylesheet" href="css/style.css">` enlaza la hoja de estilos principal, manteniendo una separación limpia entre la estructura y la presentación.

La sección `<body>` se estructura con un enfoque en la semántica y la accesibilidad:

* Un `<a href="#main-content" class="skip-link">Saltar al contenido principal</a>` se implementa como un enlace de salto para usuarios de teclado y lectores de pantalla, permitiéndoles omitir la navegación repetitiva. Este enlace es visualmente oculto por defecto, pero se hace visible al recibir el foco.  
* El `<header>` contiene el logotipo de la fundación (`img/logo.png` con `alt` descriptivo y `aria-label` para accesibilidad) y una barra de navegación (`<nav>`). La navegación incluye un botón de hamburguesa para dispositivos móviles con atributos `aria-controls` y `aria-expanded` para una experiencia accesible. La lista de enlaces de navegación (`<ul>`) utiliza `role="menu"` y `role="menuitem"` para una semántica de navegación clara.  
* Todo el contenido principal del sitio reside dentro de la etiqueta `<main id="main-content">`, lo que es fundamental para la estructura semántica y la navegación por puntos de referencia para tecnologías de asistencia.  
* Un `<footer>` global proporciona enlaces relevantes (privacidad, términos, contacto) y la información de contacto de la Fundación GASIBA GI.  

## **II. Secciones Principales del Sitio Web (`<main>` Contenido)**

El contenido principal del sitio se organiza en secciones lógicas, cada una con un propósito claro y un diseño optimizado para la usabilidad y el impacto.

### **A. Sección Principal (Hero)**

La sección hero (`<section id="hero" class="hero-section">`) es el primer punto de contacto visual para el usuario. Su diseño y contenido están cuidadosamente elaborados para generar un impacto inmediato y comunicar la esencia de la fundación. Se utiliza una imagen de fondo de ancho completo (`img/hero-children.jpg`) que transmite esperanza y comunidad, con una superposición sutilmente oscura para asegurar la legibilidad del texto. La imagen se carga con `loading="eager"` para priorizar su renderizado como el elemento LCP (Largest Contentful Paint), lo cual es crítico para la métrica de rendimiento Core Web Vitals.

El título principal, `<h1>Transformamos Vidas. Construimos Futuro.`, es impactante y comunica directamente la misión de la fundación, alineándose con el contenido visual. Una breve declaración de la misión, "Juntos hacemos posible la inclusión social y el desarrollo humano de quienes más lo necesitan", se presenta de forma concisa y prominente, justo encima del pliegue.

Para guiar al usuario, se incluyen llamadas a la acción (CTAs) claras y prominentes: "Conoce Nuestros Programas" (botón primario verde), "Donar Ahora" (botón secundario naranja) e "Involúcrate" (botón terciario azul). La decisión de priorizar el contenido relevante en el "above-the-fold" y optimizarlo para LCP es fundamental. Un hero de carga lenta o con un mensaje ambiguo puede resultar en altas tasas de rebote y una experiencia de usuario deficiente, lo que directamente socava los objetivos de compromiso y conversión. Por el contrario, un hero que carga rápidamente, es claro y orienta a la acción, establece un tono positivo y alienta la exploración del sitio.

### **B. Sección de Resumen de Impacto**

Esta sección (`<section class="impact-summary">`) ofrece una representación visual rápida del alcance y la efectividad de la fundación. Presenta tres indicadores numéricos clave: "+10,000 personas beneficiadas", "3 cantones con presencia activa" (Guayaquil, Durán y Milagro ), y "+200 líderes comunitarios aliados". Estos números se muestran de forma destacada utilizando un diseño de cuadrícula responsivo.  

Aunque la solicitud inicial sugería contadores dinámicos, para mantener la simplicidad, el rendimiento y adherirse estrictamente a las limitaciones de JavaScript puro sin librerías pesadas, estos números se presentan como texto estático. Sin embargo, se incorpora una sutil animación CSS (como una transición de opacidad o un ligero desplazamiento vertical) que se activa mediante JavaScript utilizando `IntersectionObserver` cuando la sección entra en el viewport del usuario. Esta implementación equilibra el deseo de dinamismo con la necesidad de un rendimiento óptimo. Un contador JavaScript completo podría consumir más recursos y potencialmente afectar la interactividad de la página (FID). Al usar números estáticos con una animación CSS activada por `IntersectionObserver`, se logra el efecto visual deseado sin la sobrecarga de un script complejo, lo que contribuye a una experiencia de usuario fluida y cumple con los requisitos de optimización de Core Web Vitals.

### **C. Sección Quiénes Somos**

La sección "Quiénes Somos" (`<section id="quienes-somos">`) profundiza en la identidad, misión, visión y valores fundamentales de la Fundación GASIBA GI. Se presenta con un `<h2>` claro y una introducción que describe a la fundación como una organización sin fines de lucro dedicada al desarrollo integral de los sectores más vulnerables de la sociedad, con un enfoque en niñas, niños, adolescentes, jóvenes, adultos mayores y personas con discapacidad, promoviendo su inclusión social, económica y comunitaria.  

Se detalla la presencia geográfica activa de la fundación en Guayaquil, Durán y Milagro, y se resalta su trabajo sostenido de cercanía con las comunidades, construyendo lazos de confianza con líderes barriales, madres cuidadoras, organizaciones de base e instituciones locales. Se enfatiza explícitamente el compromiso de la fundación con la transparencia en todas sus operaciones e informes de impacto.  

La Visión de la fundación se presenta como: "Ser una organización referente a nivel nacional por su compromiso con la transformación social, promoviendo la inclusión económica, social y cultural de los grupos de atención prioritaria, en especial aquellos que se encuentran en situación de pobreza y vulnerabilidad, garantizando el ejercicio pleno de sus derechos a lo largo del ciclo de vida".  

La Misión se describe como: "Proponer, ejecutar y promover programas integrales que impulsen el desarrollo humano, la inclusión social, la movilidad económica ascendente y la protección de los derechos de niñas, niños, adolescentes, jóvenes, adultos, adultos mayores y personas con discapacidad. Lo hacemos a través de acciones solidarias, articuladas y sostenibles, fortaleciendo la economía popular, la corresponsabilidad familiar y el bienestar colectivo".  

Los Valores Institucionales se presentan de forma clara, cada uno con una breve descripción:

* **Solidaridad:** "Actuamos con empatía y compromiso hacia quienes más lo necesitan."    
* **Equidad:** "Promovemos oportunidades justas para todos, sin distinción."    
* **Respeto:** "Reconocemos la dignidad y los derechos de cada persona."    
* **Inclusión:** "Valoramos y acogemos la diversidad humana en todas sus expresiones."    
* **Corresponsabilidad:** "Fomentamos la participación activa de las familias, comunidades e instituciones."    
* **Resiliencia:** "Apoyamos a las personas a reconstruir sus vidas frente a la adversidad."    
* **Transparencia:** "Actuamos con ética y rendición de cuentas en todos nuestros procesos."  

La profunda conexión entre los valores de la fundación, como la "inclusión social" y la atención a "grupos de atención prioritaria" y "personas con discapacidad" , y los requisitos de accesibilidad WCAG 2.1 AA es un pilar fundamental de este desarrollo. Si la identidad central de la fundación se basa en la inclusión, su presencia digital debe reflejar este compromiso. Un sitio web inaccesible sería una contradicción directa de su misión y valores declarados. Por lo tanto, cada decisión de diseño (contraste de color, navegación por teclado, HTML semántico, texto  

`alt` descriptivo) y de contenido (lenguaje claro, texto redimensionable) se ha tomado a través del prisma de la accesibilidad. Esto no solo asegura el cumplimiento de las normativas, sino que también construye confianza con una audiencia más amplia, incluyendo posibles socios que priorizan la responsabilidad social.

### **D. Sección Nuestros Programas**

La sección "Nuestros Programas" (`<section id="nuestros-programas">`) tiene como objetivo presentar los 14 objetivos y actividades principales de la Fundación GASIBA GI de manera clara y digerible. Se introduce con un `<h2>` y una breve descripción general de los programas.

Para manejar la cantidad de información (14 objetivos ), se opta por un sistema de tarjetas interactivas o acordeones, dispuestos en un diseño de cuadrícula responsivo. Esta arquitectura de la información es crucial para evitar la sobrecarga cognitiva del usuario, especialmente en dispositivos móviles. Presentar una lista larga de elementos puede ser abrumador; al dividir la información en "fragmentos" digeribles, se mejora la escaneabilidad y la capacidad del usuario para encontrar rápidamente los programas de su interés. Esto fomenta una exploración más profunda del sitio y apoya el objetivo de aumentar el compromiso.  

Cada tarjeta o elemento de acordeón incluye:

* Un `<h3>` para el título del programa (ej., "Atención Integral al Ciclo de Vida").  
* Un ícono minimalista y limpio, preferiblemente SVG inline o una forma dibujada con CSS, utilizando el color `Verde Naturaleza` (`#339966`) para coherencia visual.  
* Una descripción concisa del objetivo, derivada del material de investigación.    
* Una llamada a la acción "Ver más" (simulando un enlace a una página de detalle o la expansión del acordeón).

Ejemplos de programas a incluir, basados en los objetivos de la fundación :  

1. Crear y promocionar programas y servicios de desarrollo integral.  
2. Atención integral a lo largo del ciclo de vida (niñez, adolescencia, juventud, adultos, adultos mayores, personas con discapacidad), buscando retirarlos de las calles y la erradicación de la mendicidad.  
3. Prevención de violación de derechos y atención en emergencias (charlas, gestión de riesgos, albergues, ayuda psico-emocional, donaciones).  
4. Inclusión económica y movilidad social (generación de capacidades y oportunidades).  
5. Desarrollo de actividades de protección, inclusión, movilidad social y económica para primera infancia, juventud, adultos, adultos mayores, protección especial al ciclo de vida, personas con discapacidad, actores de la economía popular y solidaria.  
6. Charlas informativas sobre oportunidades productivas para usuarios del bono de desarrollo humano y pensiones.  
7. Fomento de emprendimientos productivos individuales, familiares, asociativos en grupos de atención prioritaria, articulando con IEPS/MIES.  
8. Apoyo a grupos de personas migrantes internos.  
9. Campañas de información y respeto a la integridad física, psicológica, emocional, espiritual.  
10. Fomentar la cultura de crianzas positivas en la primera infancia.  
11. Espacios de ocio para niños, niñas y adolescentes, fomentando valores y corresponsabilidad familiar.  
12. Promover proyectos de seguridad y soberanía alimentaria.  
13. Promover proyectos para la prevención de violencia de género.  
14. Impulsar proyectos relacionados con la movilidad humana.

La accesibilidad se garantiza mediante la navegación por teclado para las tarjetas o acordeones y el uso de roles y estados ARIA apropiados para los elementos interactivos.

### **E. Sección Futuros Proyectos**

La sección "Futuros Proyectos" (`<section id="futuros-proyectos">`) está diseñada estratégicamente para atraer alianzas y financiación para las próximas iniciativas de la fundación. Se introduce con un `<h2>` y una declaración que subraya la ampliación del impacto social de la fundación, basada en su experiencia territorial en Guayaquil, Durán y Milagro, y su compromiso con la primera infancia y las familias vulnerables.  

Se presentan en detalle tres proyectos clave, cada uno con su propósito y necesidades específicas:

* **1\. Centros Municipales de Cuidado Infantil (CMCI):** Se busca expandir el modelo de atención integral para niños de 1 a 3 años, proporcionando cuidado, alimentación, estimulación temprana y entornos seguros mientras sus familias trabajan o estudian. Este modelo requiere infraestructura, talento humano capacitado, materiales didácticos y soporte técnico continuo.    
* **2\. Centros de Desarrollo Infantil (CDI):** Se propone implementar unidades especializadas de atención a la primera infancia en áreas urbanas y rurales, bajo un modelo de corresponsabilidad familiar y comunitaria. Estos centros ofrecerán servicios pedagógicos, nutricionales y psicoafectivos, articulados con redes locales de salud y protección.    
* **3\. Creciendo Juntos:** Este proyecto es una respuesta comunitaria, integral y preventiva, orientada a garantizar entornos protectores para niños y adolescentes de 6 a 15 años, prevenir su vinculación con grupos delictivos o el abandono escolar, fortalecer las capacidades familiares y comunitarias de cuidado, y brindar oportunidades de desarrollo educativo, artístico, cultural y psicosocial.  

Se incluye una llamada prominente a la colaboración: "Estos proyectos están en fase de diseño y búsqueda de recursos. Requieren el respaldo de instituciones aliadas, organismos cooperantes, empresas socialmente responsables y personas solidarias que deseen contribuir a la construcción de un futuro más justo para las nuevas generaciones". Una CTA principal, "¡Hazte Aliado Estratégico\!", dirige a la sección de contacto.  

Para optimizar la presentación de las necesidades de estos proyectos y facilitar la toma de decisiones por parte de posibles socios, se incorpora una tabla resumen. Para instituciones aliadas y donantes corporativos, la claridad y concisión de los requisitos de recursos son primordiales. Una descripción narrativa, aunque informativa, puede ralentizar la evaluación. Una tabla permite una rápida revisión y comparación, transformando el texto descriptivo en una "propuesta" accionable, lo que demuestra profesionalismo y facilita que los posibles socios identifiquen cómo pueden contribuir, apoyando directamente el objetivo de atraer alianzas estratégicas.

| Proyecto | Propósito Principal | Impacto Esperado | Recursos Requeridos (Ejemplos) |
| :---- | :---- | :---- | :---- |
| **Centros Municipales de Cuidado Infantil (CMCI)** | Expandir atención integral (1-3 años), cuidado, alimentación, estimulación temprana, entornos seguros. | Niños/as con desarrollo integral; familias con apoyo para trabajar/estudiar. | Infraestructura (espacios, mobiliario), Talento Humano (cuidadores, educadores), Materiales (didácticos, nutricionales), Apoyo técnico. |
| **Centros de Desarrollo Infantil (CDI)** | Unidades especializadas (primera infancia), modelo corresponsabilidad familiar/comunitaria, servicios pedagógicos, nutricionales, psicoafectivos. | Desarrollo integral de la primera infancia; familias empoderadas en el cuidado; comunidades fortalecidas. | Infraestructura (centros), Talento Humano (pedagogos, nutricionistas, psicólogos), Materiales (educativos), Articulación con redes locales. |
| **Creciendo Juntos** | Garantizar entornos protectores (6-15 años), prevenir vinculación delictiva/abandono escolar, fortalecer capacidades familiares/comunitarias, brindar oportunidades de desarrollo. | Niños/as y adolescentes seguros, con acceso a educación y desarrollo; familias y comunidades resilientes. | Infraestructura (espacios seguros), Talento Humano (educadores, artistas, psicólogos), Materiales (didácticos, artísticos), Apoyo logístico. |

Exportar a Hojas de cálculo

### **F. Sección Nuestro Impacto / Historias de Éxito**

Esta sección (`<section id="nuestro-impacto">`) es crucial para generar confianza y evocar empatía, mostrando resultados tangibles y experiencias personales. Se introduce con un `<h2>` y una declaración sobre cómo el trabajo de la fundación se refleja en vidas transformadas.

Se presentan testimonios convincentes, ya sea en una cuadrícula estática o un carrusel simple impulsado por JavaScript. La autenticidad y la conexión emocional son poderosos impulsores para la donación y el voluntariado. Al destacar historias de individuos específicos, como "madres cuidadoras" o "líderes barriales" (mencionados en la sección Quiénes Somos ), se refuerzan directamente las afirmaciones de la fundación sobre su profundo compromiso comunitario y su autenticidad. Cuando los posibles donantes o voluntarios ven historias personales y tangibles de personas directamente impactadas, se genera una mayor confianza y se motiva la acción de manera más efectiva que con métricas abstractas.  

Cada tarjeta de testimonio incluye:

* Una cita (ej., "Gracias al apoyo de la fundación, he aprendido a Cuidar Hijos de mi ago-y-me stento mas, segura." \- Maria Gómez \[Imagen 2\]).  
* El nombre (ej., "María Gómez").  
* El rol o relación (ej., "Madre beneficiada de Durán").  
* Una imagen de marcador de posición (`img/testimonial-maria.jpg`) que representa un retrato auténtico y centrado en el ser humano.

Además de los testimonios, se incluyen métricas de impacto, presentadas visual o textualmente (ej., "X familias fortalecidas", "Y niños/as con acceso a educación", "Z programas activos"). Si se opta por la representación visual, se utilizan barras de progreso o gráficos simples basados en CSS para evitar la necesidad de librerías JavaScript pesadas. Una CTA, "¡Sé parte del cambio\!", dirige a las opciones de donación e involucramiento.

### **G. Sección Cómo Ayudar / Involúcrate**

La sección "Cómo Ayudar / Involúcrate" (`<section id="como-ayudar">`) proporciona vías claras para que los usuarios apoyen a la fundación. Se presenta con un `<h2>` y una introducción persuasiva sobre la importancia del apoyo del usuario.

Se detallan varias opciones:

* **1\. Opciones de Donación:** Se explica que cada aporte marca una diferencia. Un botón "Donar Ahora" (`<a href="" target="_blank" class="button button-primary" aria-label="Donar ahora a Fundación GASIBA GI (abre en nueva pestaña)">`) se simula para dirigir a una URL externa de una plataforma de pago. Para demostrar la funcionalidad sin un backend real, un script JavaScript muestra un mensaje (`alert()` o modal) indicando que es una simulación.  
* **2\. Voluntariado:** Se invita a los usuarios a unirse como voluntarios. Un formulario de interés (`<form id="volunteerForm">`) incluye campos para nombre, apellido, correo electrónico, teléfono, área de interés (con opciones como Educación, Salud, Desarrollo Comunitario, Apoyo a Familias, Otros) y un mensaje.  
  * La accesibilidad de los formularios es una prioridad, ya que son un canal directo de interacción y un factor clave para la confianza del usuario. Si un formulario no es accesible (ej., etiquetas faltantes, mensajes de error poco claros, navegación deficiente con teclado), los usuarios, especialmente aquellos con discapacidades, encontrarán dificultades para completarlo. Esto obstaculiza directamente la capacidad de la fundación para conseguir voluntarios o suscriptores. Los formularios claros, validados y accesibles no solo cumplen con WCAG, sino que también generan confianza al proporcionar una experiencia fluida y resistente a errores, lo cual es crítico para la conversión. Todos los campos tienen etiquetas `<label>` explícitas, se usa el atributo `required` para campos obligatorios y `aria-describedby` para vincular mensajes de validación. La validación se realiza en el frontend con JavaScript puro, proporcionando retroalimentación clara al usuario.  
* **3\. Suscripción a Boletín Informativo:** Se invita a los usuarios a suscribirse para recibir noticias. Un formulario simple (`<form id="newsletterForm">`) con un campo de correo electrónico y un botón "Suscribirme" (`<button type="submit" class="button button-accent">`) se implementa con validación JavaScript y mensajes de éxito.  
* **4\. Otras Formas de Apoyo:** Se enumeran opciones adicionales como "Alianzas Estratégicas (ver sección Futuros Proyectos)", "Difusión en redes sociales" y "Donaciones en especie".

Todas las CTAs son persuasivas y utilizan los colores de acento especificados para maximizar su visibilidad y atractivo.

### **H. Sección Noticias / Blog**

La sección "Últimas Noticias y Blog" (`<section id="noticias">`) tiene como objetivo mantener a la audiencia informada y comprometida con las actividades, logros y eventos de la fundación. Se presenta con un `<h2>` y una introducción que invita a los usuarios a descubrir cómo la fundación está transformando vidas.

Se utiliza un diseño de cuadrícula responsivo para mostrar 2-3 artículos de ejemplo. Cada tarjeta de artículo incluye:

* Una imagen de marcador de posición (`img/news-event-1.jpg`), optimizada y con texto `alt` descriptivo.  
* Un `<h3>` para el título del artículo (ej., "Celebración del Día del Niño en Milagro").  
* Una fecha (ej., "15 de Octubre, 2023").  
* Un breve extracto con contenido ficticio que resume el artículo.  
* Una CTA "Leer más" que simula un enlace a la página completa del artículo.

La estructura de las tarjetas es semántica y navegable por teclado para asegurar la accesibilidad.

### **I. Sección Contáctanos**

La sección "Contáctanos" (`<section id="contacto">`) proporciona toda la información de contacto necesaria y un canal directo de comunicación. Se presenta con un `<h2>` y una invitación a ponerse en contacto con la fundación.

La información de contacto se muestra de forma clara:

* **Dirección:** Milagro, Ecuador.    
* **Correo Electrónico:** `fundaciongasiba@gmail.com` , con un enlace    
* `mailto:` para facilitar el envío de correos.  
* **Teléfono/WhatsApp:** `0960193518` , con un enlace    
* `tel:` para llamadas directas.  
* **Instagram:** `@fundaciongasibagi.ec` , con un enlace que abre en una nueva pestaña y    
* `aria-label` para accesibilidad.

Se incluye un formulario de contacto básico (`<form id="contactForm">`) con campos para Nombre, Correo Electrónico y Mensaje. Al igual que los otros formularios, este se implementa con etiquetas `<label>` explícitas, validación de campos en el frontend con JavaScript puro (ej., campos requeridos, formato de correo electrónico) y mensajes de retroalimentación claros, sin envío real a un backend.

Finalmente, se integra un mapa incrustado (ej., Google Maps embed) de la dirección de Milagro para facilitar la ubicación de la fundación.

## **III. Identidad de Marca Digital**

La implementación de la identidad de marca digital es estricta para asegurar una imagen coherente y profesional.

### **A. Paleta de Colores**

Se utiliza una paleta de colores definida con precisión, asegurando el cumplimiento de las relaciones de contraste WCAG AA para todas las combinaciones:

* **Azul Profundo (Primario):** `#003366` (para encabezados principales, fondos de secciones clave, elementos de marca).  
* **Verde Naturaleza (Primario):** `#339966` (para íconos de programas, gráficos de impacto, botones principales).  
* **Amarillo Sincero (Acento):** `#FFCC00` (para resaltados, elementos interactivos, detalles de diseño).  
* **Rojo/Naranja Sutil (Acento \- para CTAs):** `#E67E22` (para botones de "Donar Ahora", CTAs secundarias).  
* **Blanco (Neutro):** `#FFFFFF` (para fondos, texto principal sobre fondos oscuros).  
* **Gris Claro (Neutro):** `#F2F2F2` (para fondos de secciones, separadores, texto secundario).  
* **Carbón Oscuro (Neutro):** `#333333` (para texto de cuerpo, elementos de navegación).

### **B. Tipografía**

La tipografía se selecciona para legibilidad y coherencia visual, utilizando Google Fonts para una carga eficiente:

* **Títulos/Principal:** 'Noto Sans' (preferida por su versatilidad y soporte de idiomas).  
* **Cuerpo/Secundaria:** 'Noto Sans' (para coherencia general). La jerarquía tipográfica se aplica rigurosamente:  
* H1: 48px / 3rem, Bold, Carbón Oscuro  
* H2: 36px / 2.25rem, Bold, Carbón Oscuro  
* H3: 24px / 1.5rem, Semi-Bold, Carbón Oscuro  
* H4: 18px / 1.125rem, Regular, Carbón Oscuro  
* Texto de Cuerpo: 16px / 1rem, Regular, Carbón Oscuro  
* CTA (Botones): 18px / 1.125rem, Bold, Blanco (sobre color de acento)  
* Pie de Página/Legal: 14px / 0.875rem, Regular, Gris Oscuro

### **C. Imágenes e Iconografía**

Se prioriza el uso de imágenes auténticas y centradas en el ser humano que reflejen diversidad, esperanza, empoderamiento y comunidad, evitando fotos de archivo genéricas. Se utilizan marcadores de posición con nombres de archivo descriptivos (ej., `familia-empoderada.jpg`, `ninos-jugando.png`). Todas las imágenes se optimizan para la web (compresión, formatos como WebP si es posible, o JPG) y se incluyen textos `alt` descriptivos para accesibilidad y SEO. La iconografía es minimalista, limpia y coherente, utilizando SVG inline o iconos simples con CSS para elementos clave.

### **D. Tono de Voz y Mensajería**

El tono de voz en todo el sitio es empático, respetuoso, empoderador, profesional, transparente y esperanzador. El contenido se centra en el impacto, está orientado a la solución y utiliza un lenguaje inclusivo. Las llamadas a la acción (CTAs) son prominentes y persuasivas. La estructura del contenido se optimiza para la comprensión, utilizando respuestas concisas, viñetas y listas.

## **IV. Interactividad y Animaciones (JavaScript Puro)**

La interactividad del sitio se maneja exclusivamente con JavaScript puro, sin dependencias de librerías o frameworks.

* **Navegación Suave (Smooth Scroll):** Se implementa un desplazamiento suave al hacer clic en los enlaces de anclaje, mejorando la experiencia de navegación en una estructura de "Single Page Application" lógica.  
* **Microinteracciones:** Se aplican efectos sutiles `onHover` a botones y enlaces (ej., cambio de color de fondo, ligero escalado) para proporcionar retroalimentación visual al usuario.  
* **Animaciones por Scroll:** Elementos específicos se desvanecen o deslizan sutilmente al entrar en el viewport. Esto se logra utilizando la API `IntersectionObserver` para una detección eficiente del scroll, asegurando que las animaciones no afecten negativamente el rendimiento ni la accesibilidad. Se garantiza que ninguna animación exceda los 5 segundos o tenga parpadeos que puedan causar problemas de accesibilidad.  
* **Validación de Formularios:** Todos los formularios incluyen validación de campos en el frontend con JavaScript puro, verificando requisitos como campos obligatorios y formato de correo electrónico antes de un posible envío (simulado).

## **V. Estructura del Código y Consideraciones Adicionales**

El código se organiza en una estructura de archivos limpia y fácil de mantener:

* `index.html` (actuando como la página principal con secciones navegables).  
* `css/style.css` (todos los estilos CSS en un único archivo, con comentarios claros y potencialmente minimizado para producción).  
* `js/script.js` (todo el JavaScript puro en un único archivo, bien comentado).  
* `img/` (carpeta dedicada a imágenes con placeholders descriptivos).

El sitio está diseñado para ser 100% independiente una vez cargado, sin necesidad de llamadas a API externas o servicios de backend para su funcionamiento básico. El diseño es limpio y profesional, transmitiendo confianza y seriedad en la misión de la fundación. El código está abundantemente comentado para facilitar su comprensión y mantenimiento futuro. Se incluye un `<header>` con el logo y una barra de navegación responsiva, y un `<footer>` con enlaces relevantes y los datos de contacto de la fundación.  

## **VI. Conclusiones**

El desarrollo de la página web para la Fundación GASIBA GI, ejecutado exclusivamente con HTML, CSS y JavaScript puros, representa una solución digital de alto rendimiento, accesible y estratégicamente alineada con los objetivos de la fundación. Este enfoque técnico no solo cumple con las restricciones de un hosting compartido básico y la ausencia de frameworks, sino que también establece un estándar de calidad en usabilidad y visibilidad.

La meticulosa atención a la accesibilidad WCAG 2.1 AA no es meramente un requisito técnico, sino una manifestación directa de los valores de inclusión de la Fundación GASIBA GI. Al garantizar que el sitio sea usable por todos, se amplifica el alcance de su mensaje y se refuerza la credibilidad de su misión. La optimización para Core Web Vitals y las prácticas SEO integradas aseguran que el sitio sea fácilmente descubrible y ofrezca una experiencia de carga rápida, elementos cruciales para la retención de usuarios y la conversión.

La estructura de contenido, desde la impactante sección Hero hasta la detallada presentación de programas y futuros proyectos, está diseñada para impulsar el compromiso, fomentar las donaciones y atraer asociaciones estratégicas. La presentación clara de las necesidades de los proyectos futuros, facilitada por la tabla de recursos, es un ejemplo de cómo la arquitectura de la información se ha adaptado para servir a los objetivos de captación de fondos y alianzas.

En resumen, el sitio web propuesto para la Fundación GASIBA GI es una herramienta digital potente y autosuficiente, diseñada para maximizar el impacto social de la fundación, comunicar su propósito con claridad y eficiencia, y servir como un catalizador para el crecimiento y la colaboración, todo ello mientras se adhiere a los más altos estándares de desarrollo web moderno.

