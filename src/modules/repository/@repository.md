# @repository

Esta carpeta concentra el acceso a datos del proyecto.

## Estado actual

- `repository.module.js`: expone el modulo de repositorio y la funcion `queryRepository`.
- `modules/`: guarda los repositories concretos.

## Nota importante

La idea es que el SQL y la comunicacion con base de datos vivan aqui. Los services de `core/` deberian depender de repositories, no de queries directas.
