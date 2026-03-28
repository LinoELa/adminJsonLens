# @about-get

Esta carpeta contiene el caso de uso `GET /about`.

## Estado actual

- `about.controller.js`: define la ruta y responde con el resultado del service.
- `about.service.js`: devuelve metadatos de la API y una lista de endpoints disponibles.

## Nota importante

El router se monta en `/` y en `/api`, por eso esta feature responde tanto en `/about` como en `/api/about`.
