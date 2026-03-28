# JSON Compare

## Objetivo

Esta guia cubre el submodulo `compare` dentro de `json-processing`.

## Para que sirve

`compare` recibe dos o mas documentos JSON y devuelve diferencias legibles.

## Puede resolver cosas como

- claves anadidas
- claves eliminadas
- cambios de valor
- cambios de tipo
- diferencias de estructura

## Estructura esperada

```text
json-processing/
`-- compare/
    |-- compare.module.js
    `-- compare-post/
        |-- compare-json.controller.js
        |-- compare-json.dto.js
        `-- compare-json.service.js
```

## Utilidad compartida recomendada

- `shared/utils/build-json-diff.util.js`

## Endpoint esperado

- `POST /json/compare`

## Siguiente paso

La siguiente guia natural es [`09-testing-and-documentation.md`](./09-testing-and-documentation.md).
