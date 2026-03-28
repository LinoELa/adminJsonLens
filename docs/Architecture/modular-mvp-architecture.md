# Modular MVP Architecture

## Objetivo

Este documento define la arquitectura objetivo de `adminJsonLens` para su MVP.

## Resumen rapido

| Area | Detalle |
| --- | --- |
| Rol | Backend del ecosistema `JsonLens` |
| Stack base | `Node.js`, `Express`, `JavaScript` |
| Puerto recomendado | `5700` |
| Enfoque | Arquitectura modular MVP |
| Bloques principales | `core` y `json-processing` |
| Idioma tecnico | Ingles en carpetas, archivos, endpoints e identificadores |
| Idioma humano | Espanol en comentarios y documentacion interna |

## Responsabilidad del backend

- exponer informacion del servicio
- responder healthcheck
- validar JSON
- formatear JSON
- analizar estructura
- comparar documentos JSON

## Idea central

El backend se organiza por capacidades funcionales, no por carpetas tecnicas globales.

Los dos bloques principales del MVP son:

- `core`
- `json-processing`

## `core`

Guarda la informacion base del servicio.

Modulos esperados:

- `about`
- `health`

## `json-processing`

Guarda el corazon funcional del producto.

Submodulos esperados:

- `validate`
- `format`
- `analyze`
- `compare`

## Fuera de alcance del MVP

En esta fase no forman parte de la arquitectura objetivo:

- `users`
- `repository`
- autenticacion
- historial
- persistencia dedicada
- demasiadas piezas transversales

## Estructura objetivo

```text
adminJsonLens/
|-- docs/
|   |-- Architecture/
|   |   |-- modular-mvp-architecture.md
|   |   |-- modular-rules.md
|   |   |-- dependency-rule.md
|   |   |-- audit-and-mapping.md
|   |   `-- migration-plan.md
|   |-- Guides/
|   |   |-- @Guides.md
|   |   `-- 01..09 guiando el crecimiento del MVP
|   `-- Reference/
|       |-- nomenclatura.md
|       |-- preparar-todo.md
|       |-- github-workflow.md
|       `-- http-status.md
|
|-- src/
|   |-- app.js
|   |-- server.js
|   |-- config/
|   |   `-- config.index.js
|   |-- shared/
|   |   |-- errors/
|   |   |-- middlewares/
|   |   `-- utils/
|   `-- modules/
|       |-- index.module.js
|       |-- core/
|       |   |-- core.module.js
|       |   |-- about/
|       |   `-- health/
|       `-- json-processing/
|           |-- json-processing.module.js
|           |-- validate/
|           |-- format/
|           |-- analyze/
|           `-- compare/
|
|-- tests/
|-- package.json
|-- package-lock.json
`-- README.md
```

## Patron interno

Cada modulo o submodulo sigue el mismo patron:

```text
module-name/
|-- module-name.module.js
`-- action-name/
    |-- action-name.controller.js
    |-- action-name.dto.js
    `-- action-name.service.js
```

## Regla de crecimiento

El MVP no necesita mas bloques de los necesarios.

Solo deben aparecer nuevas capas cuando aporten claridad real.

## Relacion con `shared`

`shared/` existe para piezas comunes de verdad:

- errores
- middlewares globales
- utilidades de JSON

No debe convertirse en un cajon desastre.

## Flujo habitual

```text
JsonLens frontend
  -> request HTTP
  -> app.js
  -> index.module.js
  -> core o json-processing
  -> controller de la accion
  -> service de la accion
  -> shared/* si hace falta
  -> response JSON
```

## Regla de idioma

La referencia concreta de nombres e idioma vive en `docs/Reference/nomenclatura.md`.
