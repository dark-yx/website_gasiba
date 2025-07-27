# **Directrices para el Desarrollo y Mantenimiento del Sitio Web de la Fundación GASIBA GI**

Este documento establece las directrices y procedimientos obligatorios para cualquier agente de IA o ingeniero humano que trabaje en el desarrollo, mantenimiento o refactorización del código de este proyecto. El objetivo es garantizar la coherencia, calidad, y alineación con los objetivos de la Fundación GASIBA GI.

## **1. Obligación de Actualizar la Bitácora de Desarrollo**

Antes de confirmar cualquier cambio (`commit`), es **mandatorio** actualizar la bitácora de desarrollo. Este proceso es crucial para mantener un registro histórico claro y detallado de todas las acciones realizadas en el proyecto.

### **Procedimiento de Actualización:**

1.  **Marcar Tareas Completadas:** Navegue al directorio `ai_docs/tasks` y localice el archivo de la tarea correspondiente. Marque la casilla de verificación (`[x]`) de la acción que ha completado.
2.  **Añadir Conclusiones:** Al final del archivo de la tarea, añada una sección de "Conclusión" que resuma el trabajo realizado, las observaciones relevantes y cualquier recomendación para futuro mantenimiento o refactorización.
3.  **Actualizar la Bitácora Central:** Abra el archivo `ai_docs/development_history.md`. Agregue una nueva entrada con la fecha, su nombre (o identificador de agente), una descripción concisa del cambio y un enlace al archivo de la tarea correspondiente.

**El incumplimiento de este procedimiento resultará en el rechazo de los cambios propuestos.**

## **2. Investigación y Validación Previa a la Implementación**

Antes de realizar cualquier cambio significativo, ajuste o refactorización en el código, es **obligatorio** realizar un proceso de investigación exhaustivo utilizando la herramienta de búsqueda integrada (Google Search para agentes de IA).

### **Propósito de la Investigación:**

*   **Validar Cambios Planeados:** Asegurarse de que las soluciones propuestas son las más eficientes y adecuadas para el problema.
*   **Buscar Referencias de Código:** Consultar ejemplos de implementaciones en repositorios de GitHub y otras fuentes confiables para seguir las mejores prácticas.
*   **Consultar Documentación Oficial:** Revisar la documentación de APIs, librerías o cualquier dependencia para utilizarla de manera correcta y segura.
*   **Asegurar Acciones Correctas:** Prevenir la introducción de errores, `bugs` o vulnerabilidades de seguridad.
*   **Depurar `Bugs`:** Investigar las causas de los errores y encontrar las soluciones más efectivas.
*   **Seguir las Mejores Prácticas:** Mantener el código alineado con los estándares más actuales de la industria.
*   **Documentar el Código:** Añadir comentarios claros y precisos donde sea necesario, explicando el *porqué* de una implementación compleja.


Este paso es fundamental para mantener la alta calidad del código y la estabilidad del sitio web. La diligencia en la investigación previa ahorra tiempo en la depuración y previene problemas a largo plazo.

## **3. Actualización y Despliegue Continuo**

Después de realizar cualquier cambio en el código, es **obligatorio** seguir el flujo de trabajo de Git para asegurar que el repositorio y el sitio web en producción estén siempre actualizados:

1.  **Preparar Cambios:** Ejecutar `git add .` para añadir todos los archivos modificados y nuevos al área de preparación.
2.  **Confirmar Cambios:** Ejecutar `git commit -m "Mensaje descriptivo del cambio"` para guardar los cambios en el historial local.
3.  **Desplegar a Producción:** Ejecutar `git push origin main` para subir los cambios al repositorio remoto y activar el flujo de CI/CD, que desplegará automáticamente el sitio web en el hosting.

**El incumplimiento de este procedimiento resultará en que los cambios no se reflejen en el sitio en vivo.**

Debes siempre seguir los lineiamientos del GEMINI.md y del gasiba_website_specs.json
