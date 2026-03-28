# @src

Esta es la raiz del codigo fuente de `adminJsonLens`.

## Que guarda

- `app.js`: configura Express, el parseo JSON, CORS basico y el montaje de modulos.
- `server.js`: arranca la API usando el `PORT` definido en `config/`.
- Carpetas tecnicas como `config/`, `modules/`, `shared/` y `utils/`.

## Estado actual

La aplicacion esta organizada principalmente por modulos. La mayor parte de controllers y services vive dentro de `modules/`.

## Nota importante

Si una pieza pertenece claramente a una feature, es mejor dejarla dentro de su modulo antes que moverla a una carpeta global.
