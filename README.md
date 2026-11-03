# Mision impoCITTble · sitio del evento

Página estática de promoción del CTF Mision impoCITTble, programado para el **11 de noviembre de 2026, de 11:00 a 17:00 h (Chile)**.

## Publicar en GitHub Pages

1. Sube **el contenido de esta carpeta** a la raíz de un repositorio de GitHub. Conserva juntos `index.html`, `styles.css`, `signals.js` y `assets/`.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**, elige la rama principal y la carpeta **/ (root)**; guarda.

No hay dependencias ni proceso de compilación. Para probar localmente, abre `index.html` en un navegador o ejecuta `python -m http.server 8000` desde esta carpeta.

El logo del evento es `assets/logo-evento.svg`, basado en el SVG Citt de ciberseguridad y tablero. Se usa en la portada, la navegación, el pie de página y el icono del navegador. Antes de publicar se pueden agregar sede, inscripción y enlace de contacto cuando estén confirmados.

La ilustración suministrada se muestra en la sección visual posterior a la portada como `assets/mision-impocittble-escena.png`.

## Activar la inscripción

Cuando exista el cuestionario, reemplaza `href="#inscripcion"` en los dos botones **Inscripción próximamente** de `index.html` por su URL. Cambia el texto de los botones a **Inscribirme** y elimina el párrafo con `id="inscripcion"`.

## Señales y flags

El panel de la portada cambia el emblema, la señal y la flag juntos cada **5 segundos**, incluso con el cursor sobre el panel. El botón **Siguiente señal** permite avanzar manualmente. La flag propuesta para el desafío promocional está entre las cinco; debe configurarse como respuesta válida en el sistema de puntuación antes del evento. Como el sitio es estático y público, cualquier visitante puede encontrar todas las flags inspeccionando `signals.js`.
