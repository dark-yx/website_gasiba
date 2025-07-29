# Tarea 16: Diseño Responsivo (Mobile-First)

**Objetivo:** Asegurar que el sitio web sea completamente funcional y estéticamente agradable en todos los tamaños de pantalla, desde móviles pequeños hasta computadoras de escritorio grandes.

## Acciones Mandatorias:

- [x] **Meta Etiqueta Viewport:** Verificar que la etiqueta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` esté presente en el `<head>` del `index.html`.
- [x] **Media Queries:** Utilizar `@media` queries en `css/style.css` para aplicar estilos específicos según el ancho de la pantalla.
- [x] **Menú de Navegación Adaptable:** Convertir el menú de navegación de escritorio en un menú de hamburguesa funcional en dispositivos móviles.
- [x] **Imágenes Flexibles:** Asegurar que todas las imágenes se escalen correctamente utilizando `max-width: 100%;` y `height: auto;`.
- [x] **Tipografía Fluida:** Ajustar los tamaños de fuente para garantizar la legibilidad en pantallas pequeñas.
- [x] **Contenedores Flexibles:** Utilizar unidades relativas (%, vw) y `max-width` para los contenedores principales, evitando anchos fijos que causen desbordamiento.
- [x] **Pruebas en Múltiples Dispositivos:** Simular la visualización en diferentes resoluciones (móvil, tableta, escritorio) utilizando las herramientas de desarrollador del navegador.

## Conclusión

Se ha completado una refactorización exhaustiva del diseño responsivo del sitio. Las acciones clave realizadas fueron:

1.  **Corrección del Desbordamiento Horizontal:** Se solucionó el problema de la "franja blanca" en móviles añadiendo la meta etiqueta `viewport`, estableciendo `overflow-x: hidden` como medida de seguridad, y lo más importante, reconfigurando todas las rejillas de contenido (`grids`) para que se apilen en una sola columna en pantallas de menos de 768px de ancho.
2.  **Optimización de Imágenes y Rendimiento:** Se añadieron atributos explícitos de `width` y `height` a todas las etiquetas `<img>` en el `index.html`. Esta acción es fundamental para mejorar el Cumulative Layout Shift (CLS), lo que se traduce en una mejor puntuación en PageSpeed Insights y una experiencia de usuario más fluida.
3.  **Ajuste del Encabezado y Título:** Se redujo el tamaño de la fuente del título principal en la sección "hero" mediante variables de CSS y `media queries`, asegurando que no desborde en pantallas pequeñas. También se ajustó el `padding` para mejorar el centrado vertical.

El resultado es un sitio web robusto, completamente adaptable a cualquier dispositivo y optimizado para un mejor rendimiento de carga.