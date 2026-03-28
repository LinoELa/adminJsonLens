# Core About and Health

## Objetivo

Esta guia cubre el bloque `core` del MVP.

## Que entra en `core`

En este proyecto, `core` guarda la informacion base del servicio:

- `about`
- `health`

## `about`

Sirve para devolver informacion descriptiva de la API.

Ejemplos de datos utiles:

- nombre de la app
- estado general
- endpoints disponibles
- version del servicio

## `health`

Sirve para saber si la API esta viva y responder rapido a un healthcheck.

Ejemplos de datos utiles:

- `status`
- `uptime`
- timestamp
- version o entorno si aporta valor

## Estructura esperada

```text
core/
|-- core.module.js
|-- about/
|   |-- about.module.js
|   `-- about-get/
|       |-- about.controller.js
|       `-- about.service.js
`-- health/
    |-- health.module.js
    `-- health-get/
        |-- health.controller.js
        `-- health.service.js
```

## Siguiente paso

La siguiente guia natural es [`05-json-validate.md`](./05-json-validate.md).
