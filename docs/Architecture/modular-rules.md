# Modular Rules

## Regla 1

La unidad principal del backend es el modulo, no la carpeta tecnica global.

## Regla 2

El wiring vive en `*.module.js`.

## Regla 3

Los controllers adaptan HTTP.
No deben contener logica de negocio pesada.

## Regla 4

Los services resuelven la logica funcional de una accion.

## Regla 5

Los DTOs definen el contrato esperado cuando la accion necesita entrada estructurada.

## Regla 6

Las utilidades compartidas viven en `shared/utils/` solo cuando realmente las usa mas de un modulo.

## Regla 7

Los nombres tecnicos van en ingles.
Los comentarios y la documentacion interna pueden ir en espanol.

## Regla 8

Si una carpeta o archivo nuevo no encaja claramente en `core`, `json-processing` o `shared`, hay que revisar la arquitectura antes de crearlo.
