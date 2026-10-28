# Clases en JavaScript — Bloque 2

## Propósito

Entorno local para consultar y resolver los ejercicios de clases en JavaScript. Cada consigna tiene una página propia y archivos independientes para escribir la solución.

## Selección

Se incluye el Bloque 2 de `clases.docx`, desde su numeración original 21 hasta 40. La numeración del documento comienza en 21 para el Nivel 1, continúa en 26 para el Nivel 2 y en 31 para el Nivel 3; el Nivel 4 muestra expresamente los números 36–40. Se conservan los cuatro niveles, su orden y las consignas originales. El Bloque 1 (ejercicios 1–20) queda fuera de esta selección.

## Estructura

- `index.html`: índice por nivel con tarjetas enlazadas a las páginas de los ejercicios.
- `assets/css/styles.css`: estilos compartidos y responsive.
- `assets/js/main.js`: navegación de estado y persistencia del progreso; no contiene soluciones.
- `assets/favicon.svg`: icono local del proyecto.
- `ejercicio-21/` … `ejercicio-40/`: página, CSS y módulo JavaScript independiente de cada ejercicio.
- `clases.docx`: documento fuente, sin modificaciones.

## Abrir el proyecto

1. Abre esta carpeta en VS Code.
2. Inicia Live Server desde el `index.html` o usa **Open with Live Server**.
3. Accede a cada consigna desde las tarjetas del inicio. Usa los controles anterior/siguiente para recorrer la secuencia.

Las páginas cargan sus scripts con `type="module"`. Por eso se deben abrir desde Live Server u otro servidor estático local; los navegadores suelen bloquear módulos ES cuando se abre el HTML directamente con `file://`.

## Escribir soluciones y consultar resultados

Cada ejercicio tiene una plantilla vacía en `ejercicio-XX/js/script.js`. Escribe allí su solución. El archivo se carga como módulo ES. Cuando una consigna no especifica que el resultado deba mostrarse en pantalla o en el DOM, se consulta en la consola del navegador. La nota «(ver en consola)» aparece dentro del área `result-output`. Si una consigna requiere salida HTML o en el DOM, esa salida se presenta en pantalla.

## Progreso

El control de cada ejercicio permite marcarlo como pendiente o resuelto. El estado se guarda automáticamente en `localStorage` y se refleja en la tarjeta del inicio. En la sección **Progreso** del inicio puedes exportar los 20 estados a JSON o importar una copia. La importación valida la versión, todos los identificadores y los estados antes de reemplazar el progreso existente. Los datos de `localStorage` dependen del navegador y del origen local donde se abra el proyecto; el archivo JSON sirve para transferirlos.

Si el navegador bloquea el almacenamiento local, la página informa que los cambios se conservarán solo durante la sesión actual.

## Restricciones técnicas

El entorno usa HTML, CSS y JavaScript vanilla, no requiere instalación de dependencias ni recursos remotos. Los archivos de solución nuevos son módulos vacíos con un comentario breve y no resuelven ejercicios.
