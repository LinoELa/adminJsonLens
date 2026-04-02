# @health

Esta carpeta representa la feature de salud de la API.

## Estructura

- `health.module.js`: une el controller y el service del chequeo de salud.
- `health-get/`: contiene la implementacion del endpoint GET /health.

## Descripción

El endpoint `GET /health` verifica el estado de la API y su conexión a la base de datos mediante la ejecución de `SELECT NOW()`.

### Componentes

- `health.controller.js`: define la ruta y maneja la respuesta o el error.
- `health.service.js`: ejecuta la query usando `queryRepository` y devuelve el estado.