# Audit and Mapping

## Objetivo

Este archivo compara la estructura actual del repo con la estructura objetivo del MVP modular.

## Estructura actual visible

Hoy el backend ya tiene piezas como:

- `src/app.js`
- `src/server.js`
- `src/config/config.index.js`
- `src/modules/core/about`
- `src/modules/core/health`
- `src/modules/core/users`
- `src/modules/repository`

## Estructura objetivo

La estructura objetivo para `adminJsonLens` es:

- `core/about`
- `core/health`
- `json-processing/validate`
- `json-processing/format`
- `json-processing/analyze`
- `json-processing/compare`
- `shared/errors`
- `shared/middlewares`
- `shared/utils`

## Mapeo practico

```text
src/modules/core/about
  -> se mantiene dentro de core

src/modules/core/health
  -> se mantiene dentro de core

src/modules/core/users
  -> fuera del alcance del MVP modular actual

src/modules/repository
  -> fuera del alcance del MVP modular actual

src/shared/shared-in
  -> deberia absorberse o redefinirse dentro de shared segun necesidad real
```

## Regla de limpieza

Si una carpeta pertenece a otro tipo de backend o a una version anterior del proyecto, no debe seguir marcando la direccion del repo.

La referencia valida es la arquitectura modular MVP.
