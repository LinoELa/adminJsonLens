# Nomenclatura del proyecto

## 1. Sistema

### Regla corta

La regla por defecto es esta:

- `camelCase` dentro del codigo
- `PascalCase` para tipos y componentes
- `kebab-case` para archivos y carpetas
- `UPPER_SNAKE_CASE` para constantes globales
- `snake_case` solo cuando una integracion externa lo exija

Si no hay una razon fuerte para romper esta regla, no se rompe.

### Sistema de nomenclatura base

Este es el sistema recomendado y por defecto.

| Caso | Formato | Uso recomendado | Ejemplo |
| --- | --- | --- | --- |
| Variables y funciones | `camelCase` | valores, funciones, helpers, hooks, servicios internos | `buildJsonDiff`, `requestBody`, `useLoginPage` |
| Clases, tipos y componentes | `PascalCase` | clases, errores, entidades, React components, DTOs tipados | `AppError`, `LoginPage`, `UserSession` |
| Archivos y carpetas | `kebab-case` | nombres de archivos y directorios tecnicos | `json-processing`, `login-page.tsx`, `error-handler.ts` |
| Constantes globales | `UPPER_SNAKE_CASE` | env vars, flags estaticos, constantes globales | `API_BASE_URL`, `DEFAULT_TIMEOUT_MS` |
| Casos especiales externos | `snake_case` | solo si la BD, API externa o contrato externo ya obliga a usarlo | `created_at`, `user_id` |

## Objetivo

Este documento define como nombramos carpetas, archivos, modulos, endpoints, variables y comentarios en `adminJsonLens`.

La idea es evitar mezcla de idiomas, nombres duplicados o estilos distintos para la misma clase de pieza.

## Regla principal

En este proyecto:

- el codigo se nombra en ingles
- la estructura tecnica se nombra en ingles
- los comentarios y la documentacion interna pueden escribirse en espanol

## Que debe ir en ingles

Estas piezas deben usar nombres en ingles:

- carpetas tecnicas de `src/`
- nombres de modulos
- nombres de acciones
- archivos `.js`
- endpoints HTTP
- funciones, variables y constantes
- nombres de DTOs, services, controllers y middlewares

Ejemplos correctos:

- `json-processing`
- `validate-post`
- `about.module.js`
- `validate-json.service.js`
- `request-logger.middleware.js`
- `POST /json/validate`
- `getHealthService`

## Que puede ir en espanol

Estas piezas pueden estar en espanol:

- comentarios dentro del codigo
- documentacion del equipo en `docs/`
- explicaciones dentro de archivos `@...md`
- este archivo `nomenclatura.md`

## Regla para carpetas

### Carpetas de codigo

Usan ingles y nombre simple en minusculas.

Ejemplos:

- `core`
- `json-processing`
- `shared`
- `validate`
- `compare-post`

### Carpetas de documentacion

En `docs/` usamos nombres claros de alto nivel:

- `Architecture`
- `Guides`
- `Reference`

## Regla para archivos

### Modulos

Usan:

```text
module-name.module.js
```

Ejemplos:

- `core.module.js`
- `json-processing.module.js`
- `validate.module.js`

### Controllers

Usan:

```text
action-name.controller.js
```

Ejemplos:

- `about.controller.js`
- `health.controller.js`
- `validate-json.controller.js`

### Services

Usan:

```text
action-name.service.js
```

Ejemplos:

- `about.service.js`
- `compare-json.service.js`

### DTOs

Usan:

```text
action-name.dto.js
```

Ejemplos:

- `validate-json.dto.js`
- `format-json.dto.js`

### Middlewares

Usan:

```text
middleware-name.middleware.js
```

Ejemplos:

- `request-logger.middleware.js`
- `error-handler.middleware.js`

### Utils

Usan:

```text
utility-name.util.js
```

Ejemplos:

- `safe-json-parse.util.js`
- `pretty-json.util.js`

## Regla para endpoints

Los endpoints tambien van en ingles.

Ejemplos esperados para este proyecto:

- `GET /about`
- `GET /health`
- `POST /json/validate`
- `POST /json/format`
- `POST /json/analyze`
- `POST /json/compare`

## Regla para funciones y variables

Dentro del codigo usamos ingles tecnico y `camelCase`.

Ejemplos:

- `validateJsonService`
- `buildJsonDiff`
- `parsedJson`
- `requestBody`

Si se exporta una clase o un error, puede usarse `PascalCase`.

Ejemplo:

- `AppError`

## Regla para comentarios

Los comentarios del codigo van en espanol y deben explicar:

- la intencion
- la decision tecnica
- el paso importante del flujo

No deben explicar cosas obvias.

Ejemplo util:

```js
// Intentamos parsear el JSON una sola vez para reutilizar el resultado
// en validacion, analisis y formateo.
```

Ejemplo flojo:

```js
// Guardamos el valor en una variable.
```

## Regla de consistencia

Una misma idea debe tener un solo nombre en todo el proyecto.

Ejemplo:

- si elegimos `json-processing`, no mezclar despues `jsonProcessor`, `procesador-json` o `json-tools` para la misma capa
- si elegimos `validate-json.service.js`, no crear luego `json-validator.service.js` para la misma responsabilidad

## Checklist rapido antes de crear nombres nuevos

Antes de crear una carpeta o archivo nuevo, revisa:

1. si pertenece a `core`, `json-processing` o `shared`
2. si el nombre puede quedar en ingles simple
3. si sigue el patron `*.module.js`, `*.controller.js`, `*.service.js`, `*.dto.js`, `*.middleware.js` o `*.util.js`
4. si ya existe otra pieza con el mismo significado pero otro nombre

## Idea principal

La regla base de `adminJsonLens` es esta:

- ingles para la estructura tecnica
- espanol para explicar el proyecto a las personas

Eso permite que el codigo sea consistente y que el equipo siga leyendo la intencion en un lenguaje natural cercano.

## Regla final del proyecto

La regla base de este proyecto es esta:

- ingles para estructura y codigo
- espanol para explicar a las personas
- `camelCase` dentro del codigo
- `PascalCase` para tipos y componentes
- `kebab-case` para archivos y carpetas
- `UPPER_SNAKE_CASE` para constantes globales
- `snake_case` solo cuando un sistema externo lo obligue

Si todo el repo sigue esta base, la nomenclatura deja de discutirse y pasa a ser una convencion estable.
