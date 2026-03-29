# Modular Wiring

## Objetivo

Esta guia explica como se conecta la arquitectura modular MVP.

## Idea central

El backend no se organiza por carpetas genericas como `controllers/`, `services/` y `routes/` a nivel global.

La organizacion principal va por modulos.

## Piezas clave

- `src/modules/index.module.js`
- `src/modules/core/core.module.js`
- `src/modules/json-processing/json-processing.module.js`

## Patron base

Cada modulo o submodulo sigue este patron:

```text
module-name/
|-- module-name.module.js
`-- action-name/
    |-- action-name.controller.js
    |-- action-name.dto.js
    `-- action-name.service.js
```

## Regla importante

El wiring vive en `*.module.js`.

Eso significa que:

- `app.js` monta modulos
- cada `*.module.js` conecta acciones
- el controller adapta HTTP
- el service resuelve la logica

## Siguiente paso

La siguiente guia natural es [`04-core-about-and-health.md`](./04-core-about-and-health.md).
