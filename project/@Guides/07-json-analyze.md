# JSON Analyze

## Objetivo

Esta guia cubre el submodulo `analyze` dentro de `json-processing`.

## Para que sirve

`analyze` inspecciona la forma del JSON y devuelve informacion estructural.

## Puede resolver cosas como

- claves principales
- profundidad
- tipos detectados
- arrays y objetos anidados
- posibles inconsistencias de estructura

## Estructura esperada

```text
json-processing/
`-- analyze/
    |-- analyze.module.js
    `-- analyze-post/
        |-- analyze-json.controller.js
        |-- analyze-json.dto.js
        `-- analyze-json.service.js
```

## Utilidad compartida recomendada

- `shared/utils/inspect-json-shape.util.js`

## Endpoint esperado

- `POST /json/analyze`

## Siguiente paso

La siguiente guia natural es [`08-json-compare.md`](./08-json-compare.md).
