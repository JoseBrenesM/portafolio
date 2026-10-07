# Abrir el portafolio localmente

Desde la raíz del repositorio (donde está `package.json`):

```powershell
npm start
```

Abrir http://127.0.0.1:3000/. El servidor sirve `public` y no necesita conectarse a MongoDB. Para detenerlo, usar Ctrl+C en esa terminal.

Este servidor muestra el portafolio estático. La API de producción continúa en `api/server.js`; no se modifica ni se levanta con esta vista local.

## Otras formas compatibles

- Si un servidor estático sirve la raíz del repositorio, abrir `/public/` o `/public/index.html` en la URL que indique ese servidor.
- Si el servidor sirve directamente `public`, abrir `/` o `/index.html`.
- Se puede abrir `public/index.html` como archivo para revisar el contenido: los recursos locales y el cambio de idioma usan rutas relativas. Las fuentes y librerías externas siguen requiriendo conexión.

Para inglés, usar el selector de idioma. Conserva la sección actual y navega al HTML vecino dentro de la misma carpeta.

## Fallos reproducidos antes de la corrección

- Servir el repositorio y abrir `/public/` solicitaba `/css/style.css`, que devolvía 404.
- Abrir el HTML como archivo buscaba el CSS en `C:\css`, fuera del proyecto.
- `npm start` apuntaba a un `server.js` inexistente.

La reproducción no identifica el comando concreto del usuario; estos son los casos comprobados.
