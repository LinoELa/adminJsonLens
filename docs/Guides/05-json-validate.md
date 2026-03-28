# JSON Validate

## Objetivo

Esta guia cubre el submodulo `validate` dentro de `json-processing`.

## Para que sirve

`validate` comprueba si el JSON recibido:

- tiene sintaxis valida
- cumple el contrato minimo esperado por la accion

## Estructura esperada

```text
json-processing/
`-- validate/
    |-- validate.module.js
    `-- validate-post/
        |-- validate-json.controller.js
        |-- validate-json.dto.js
        `-- validate-json.service.js
```

## Flujo recomendado

1. el controller recibe el body
2. el dto valida la forma del payload
3. el service intenta parsear y construir la respuesta
4. si hace falta, reutiliza `shared/utils/safe-json-parse.util.js`

## Endpoint esperado

- `POST /json/validate`

## Siguiente paso

La siguiente guia natural es [`06-json-format.md`](./06-json-format.md).
