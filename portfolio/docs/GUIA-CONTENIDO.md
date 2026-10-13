# Guía de contenido

Cómo actualizar textos, proyectos, medios y enlaces sin tocar la lógica general de la app.

## Currículum (menú → Ver Currículum)

- Archivo: `public/Curriculum Vitae (Emiliano Pereyra).pdf`
- Reemplazá el PDF manteniendo **el mismo nombre** o actualizá la constante `CV_PUBLIC_URL` en `src/pages/MenuScreen.jsx`.
- La URL servida es `/Curriculum Vitae (Emiliano Pereyra).pdf` (los archivos en `public/` no usan el prefijo `/public` en la URL).

## Proyectos

Todo el catálogo está en el array `proyectos` dentro de `src/pages/ProyectosScreen.jsx`.

Cada entrada tiene esta forma:

| Campo | Descripción |
|-------|-------------|
| `key` | Identificador interno único (sin espacios). |
| `nombre` | Título en la tarjeta y en el detalle. |
| `imagen` | Portada de la tarjeta: ruta bajo `public/` (`.jpg`, `.png`, `.avif`, o `.mp4` en mute en la grilla). |
| `descripcion` | JSX con párrafos y listas (estilos inline coherentes con el resto). |
| `repo` | URL del repositorio o `null` si no se muestra botón. |
| `imagenes` | Array de rutas para el carrusel del detalle (imágenes o un video `.mp4`/`.webm`). |

### Orden en pantalla

La grilla usa `proyectosOrdenados = [...proyectos].reverse()`. El **último** objeto del array es el **primero** que ve el usuario.

### Agregar un proyecto nuevo

1. Copiá imágenes o video a `public/`.
2. Duplicá un bloque del array y ajustá `key`, textos y rutas.
3. Probá en detalle que el video cargue y que el audio del video haga ducking de la música (video con controles, no muted).

### Proyectos actuales (referencia)

| `key` | Medios principales |
|-------|-------------------|
| `bichtec` | Imágenes de tienda + panel admin |
| `auditor` | `Auditor.mp4` |
| `linkmatch` | `LinkMatch.mp4` |
| `hoteleria` | `BardoCompetencia.mp4` |
| `sistema-servicios` | Portada `cuidados.avif`, demo `ControlIngresosVideo.mp4` |
| `plataforma-datos-ia` | Portada `plataforma-datos-ia.png`, demo `ChatOperativoVideo.mp4` |

## Assets en `public/`

- Rutas en código: siempre con `/` inicial, p. ej. `"/fondoMenu.png"`.
- Nombres con espacios: funcionan; el navegador codifica la URL al abrir enlaces (`encodeURI` en el CV).
- **Videos:** preferí MP4 H.264; archivos muy grandes afectan clone y deploy.
- **No subir** carpetas temporales (`tmp-frames/`) ni PDFs de prueba con datos reales.

## Pantalla Sobre mí

Texto y estilos en `src/pages/SobreMiScreen.jsx`. Fondo: `public/fondoSobreMi.png`.

## Contacto

- UI y campos: `src/pages/ContactoScreen.jsx`.
- Envío: EmailJS (service, template y public key en `ContactoScreen.jsx`).
- Campos del formulario: `nombre`, `email`, `mensaje` — deben coincidir con el template en EmailJS.

## Fuentes y estética

- Título / menú: **Press Start 2P** (Google Fonts en `index.html`).
- Cuerpo: Segoe UI / Inter.
- Paleta habitual: cyan `#00e0ff`, dorado `#ffd700`, fondos oscuros `#222831`.

## Comprobaciones antes de publicar

1. `npm run build` sin errores.
2. Probar menú, un proyecto con video, mute de música y envío de contacto (con `.env.local` o variables en el host).
3. Revisar que capturas y videos no muestren credenciales, datos de clientes ni entornos internos.
