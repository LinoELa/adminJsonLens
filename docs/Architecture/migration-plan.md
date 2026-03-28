# Migration Plan

## Objetivo

Este plan describe como pasar del estado actual del repo a la arquitectura modular MVP objetivo.

## Fase 1

Conservar y ordenar la base ya existente:

- `app.js`
- `server.js`
- `config.index.js`
- `core/about`
- `core/health`

## Fase 2

Introducir el bloque `json-processing` con sus cuatro submodulos:

- `validate`
- `format`
- `analyze`
- `compare`

## Fase 3

Mover utilidades comunes a `shared/` cuando aparezcan repeticiones reales.

## Fase 4

Revisar carpetas fuera del MVP actual, como:

- `users`
- `repository`
- placeholders que no se usen

Esas piezas pueden:

- eliminarse
- pausarse
- migrarse despues

## Regla de migracion

No mover por mover.

Cada cambio debe mejorar una de estas tres cosas:

- claridad
- consistencia
- facilidad de crecimiento
