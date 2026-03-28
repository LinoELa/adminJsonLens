# App, Server and Config

## Objetivo

Esta guia explica la base tecnica que arranca el backend.

## Archivos clave

- `src/app.js`
- `src/server.js`
- `src/config/config.index.js`

## Responsabilidad de cada archivo

### `app.js`

Configura Express y monta los modulos del sistema.

Aqui deben vivir:

- `express.json()`
- middlewares globales
- CORS basico si hace falta
- montaje de modulos desde `index.module.js`

### `server.js`

Solo debe arrancar el servidor.

La idea es que no mezcle logica de negocio ni wiring de features.

### `config.index.js`

Centraliza:

- `PORT`
- lectura de `.env`
- configuracion compartida del entorno

## Resultado esperado de esta fase

Al cerrar esta fase, la API ya debe poder arrancar y responder al menos una ruta base.

## Siguiente paso

La siguiente guia natural es [`03-modular-wiring.md`](./03-modular-wiring.md).
