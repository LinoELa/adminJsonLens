# JSON Format

## Objetivo

Esta guia cubre el submodulo `format` dentro de `json-processing`.

## Para que sirve

`format` recibe un JSON y devuelve una version legible y bien estructurada.

## Estructura esperada

```text
json-processing/
`-- format/
    |-- format.module.js
    `-- format-post/
        |-- format-json.controller.js
        |-- format-json.dto.js
        `-- format-json.service.js
```

## Flujo recomendado

1. validar el payload de entrada
2. parsear el JSON de forma segura
3. aplicar pretty print
4. devolver texto o estructura formateada

## Utilidad compartida recomendada

- `shared/utils/pretty-json.util.js`

## Endpoint esperado

- `POST /json/format`

## Siguiente paso

La siguiente guia natural es [`07-json-analyze.md`](./07-json-analyze.md).
