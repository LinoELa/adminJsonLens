# Arquitectura adminJsonLens

## Resumen

Backend modular para procesamiento de JSON.

## Estructura objetivo

```text
adminJsonLens/
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
|-- tests/
|-- package.json
`-- README.md
```

## Patron de modulo

```text
module-name/
|-- module-name.module.js
`-- action-name/
	|-- action-name.controller.js
	|-- action-name.dto.js
	`-- action-name.service.js
```

## Reglas simples

- Crear por modulo funcional, no por capa global.
- Usar shared solo para piezas realmente comunes.
- Evitar agregar modulos fuera del MVP sin necesidad.

## Nomenclatura

- camelCase: variables y funciones
- PascalCase: clases y tipos
- kebab-case: archivos y carpetas
- UPPER_SNAKE_CASE: constantes globales