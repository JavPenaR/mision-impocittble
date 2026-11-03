# Mision impoCITTble · sitio del evento · 11 Noviembre

Página estática de promoción del CTF Mision impoCITTble, programado para el **11 de noviembre de 2026, de 11:00 a 17:00 h (Chile)**.

## Publicar en Cloudflare Pages

El proyecto de Cloudflare Pages se llama `mision-impocittble`. El flujo `.github/workflows/cloudflare-pages.yml` publica el sitio automáticamente con cada push a `main` y también se puede ejecutar desde **Actions → Deploy Cloudflare Pages → Run workflow**.

En GitHub, abre **Settings → Secrets and variables → Actions** y agrega dos secretos de repositorio:

- `CLOUDFLARE_ACCOUNT_ID`: ID de la cuenta mostrado en **Cloudflare → Workers & Pages → Account details**.
- `CLOUDFLARE_API_TOKEN`: token personalizado de Cloudflare con permiso **Account → Cloudflare Pages → Edit**, limitado a la cuenta del proyecto.

El flujo prepara `dist/` con `index.html`, CSS, JavaScript e imágenes; luego lo despliega a `mision-impocittble.pages.dev`. No copies el token a archivos del repositorio.

No hay dependencias ni proceso de compilación. Para probar localmente, abre `index.html` en un navegador o ejecuta `python -m http.server 8000` desde esta carpeta.

El logo del evento es `assets/logo-evento.svg`, basado en el SVG Citt de ciberseguridad y tablero. Se usa en la portada, la navegación, el pie de página y el icono del navegador. Antes de publicar se pueden agregar sede, inscripción y enlace de contacto cuando estén confirmados.

La ilustración suministrada se muestra en la sección visual posterior a la portada como `assets/mision-impocittble-escena.png`.

## Activar la inscripción

Cuando exista el cuestionario, reemplaza `href="#inscripcion"` en los dos botones **Inscripción próximamente** de `index.html` por su URL. Cambia el texto de los botones a **Inscribirme** y elimina el párrafo con `id="inscripcion"`.

## Señales y flags

El panel de la portada cambia el emblema, la señal y la flag juntos cada **5 segundos**, incluso con el cursor sobre el panel. El botón **Siguiente señal** permite avanzar manualmente. La flag propuesta para el desafío promocional está entre las cinco; debe configurarse como respuesta válida en el sistema de puntuación antes del evento. Como el sitio es estático y público, cualquier visitante puede encontrar todas las flags inspeccionando `signals.js`.
