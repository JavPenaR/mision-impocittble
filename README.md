# Mision impoCITTble · sitio del evento · 11 Noviembre

Página estática de promoción del CTF Mision impoCITTble, programado para el **11 de noviembre de 2026, de 11:00 a 17:00 h (Chile)**.

## Publicar en Cloudflare Pages

El proyecto de Cloudflare Pages se llama `mision-impocittble`. El flujo `.github/workflows/cloudflare-pages.yml` publica el sitio automáticamente con cada push a `main` y también se puede ejecutar desde **Actions → Deploy Cloudflare Pages → Run workflow**.

En GitHub, abre **Settings → Secrets and variables → Actions** y agrega dos secretos de repositorio:

- `CLOUDFLARE_ACCOUNT_ID`: ID de la cuenta mostrado en **Cloudflare → Workers & Pages → Account details**.
- `CLOUDFLARE_API_TOKEN`: token personalizado de Cloudflare con permiso **Account → Cloudflare Pages → Edit**, limitado a la cuenta del proyecto.

El flujo prepara `dist/` con `index.html`, CSS, JavaScript e imágenes; luego lo despliega a `mision-impocittble.pages.dev`. No copies el token a archivos del repositorio.

`_headers` hace que el navegador revalide el HTML y `signals.js` para evitar que se sigan mostrando flags de una versión anterior.

No hay dependencias ni proceso de compilación. Para probar localmente, abre `index.html` en un navegador o ejecuta `python -m http.server 8000` desde esta carpeta.

El logo del evento es `assets/logo-evento.svg`, basado en el SVG Citt de ciberseguridad y tablero. Se usa en la portada, la navegación, el pie de página y el icono del navegador. La sede y el enlace de contacto se pueden agregar cuando estén confirmados.

La ilustración suministrada se muestra al final de la página, después de fecha y hora, como `assets/mision-impocittble-escena.png`.

## Inscripción

Los enlaces **Inscribirme** llevan a `https://forms.gle/8wJerXh5KuEd8DAi6`.

## Señales y flags

El panel de la portada cambia el emblema, la señal y la flag juntos cada **5 segundos**, incluso con el cursor sobre el panel. El botón **Siguiente señal** permite avanzar manualmente. Todas las flags usan el formato `CTI{...}`. La flag propuesta para el desafío promocional es `CTI{11NOV_SENAL_ACTIVA}`; debe configurarse como respuesta válida en el sistema de puntuación antes del evento. Como el sitio es estático y público, cualquier visitante puede encontrar todas las flags inspeccionando `signals.js`.
