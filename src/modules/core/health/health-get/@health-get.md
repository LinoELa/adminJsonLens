# @health-get

Esta carpeta contiene el caso de uso `GET /health`.

## Estado actual

- `health.controller.js`: define la ruta y maneja la respuesta o el error.
- `health.service.js`: ejecuta `SELECT NOW()` usando `queryRepository` y devuelve estado de la API.

## Nota importante

Este endpoint sirve como chequeo de aplicacion y de base de datos al mismo tiempo. Si la conexion no esta lista, aqui se va a notar enseguida.
