# @Guides

Esta carpeta guarda documentacion **guiada y secuencial** del proyecto.

La idea de `Guides` es contar el recorrido de construccion del backend por bloques ordenados.

## Para que sirve esta carpeta

Esta carpeta sirve para guardar documentos que explican:

- como se fue montando el proyecto
- que se hizo en cada fase
- que piezas se agregaron en cada bloque
- como entender el flujo paso a paso

## Lectura recomendada

Si quieres entender el proyecto rapido:

1. lee [`../../README.md`](../../README.md)
2. lee [`../Architecture/modular-mvp-architecture.md`](../Architecture/modular-mvp-architecture.md)
3. revisa [`../Reference/nomenclatura.md`](../Reference/nomenclatura.md)
4. entra luego en la guia numerada que toque

## Ideas base del proyecto

- `adminJsonLens` es el backend de `JsonLens`
- procesa JSON y evita arrastrar dominios heredados ajenos a este backend
- usa arquitectura modular MVP
- el backend se divide en `core` y `json-processing`
- el codigo usa nombres en ingles
- los comentarios y la documentacion pueden ir en espanol

## Que tipo de archivos van aqui

Aqui encajan archivos como:

- guias numeradas `01`, `02`, `03`
- pasos de construccion del backend
- documentos de aprendizaje por fase
- tutoriales internos del proyecto
- explicaciones largas de una parte concreta del flujo

## Que archivos NO van aqui

No deberian ir aqui:

- reglas generales del proyecto
- documentos de consulta rapida
- documentos de arquitectura principal

Esos documentos encajan mejor en:

- `docs/Reference/`
- `docs/Architecture/`

## Que debe vivir aqui para `adminJsonLens`

Esta carpeta debe guardar guias secuenciales del backend real de `adminJsonLens`.

Ejemplos de guias validas para este proyecto:

- `01-nodejs-and-express-setup.md`
- `02-app-server-and-config.md`
- `03-modular-wiring.md`
- `04-core-about-and-health.md`
- `05-json-validate.md`
- `06-json-format.md`
- `07-json-analyze.md`
- `08-json-compare.md`
- `09-testing-and-documentation.md`

## Como se usa esta carpeta

La carpeta `Guides` se usa cuando quieres seguir el proyecto en orden.

Ejemplos:

- si quieres ver como se levanto el servidor desde cero, vas al `01`
- si quieres seguir el orden de construccion de un modulo o una accion, vas a la guia correspondiente
- si alguien nuevo entra al proyecto, `Guides` le enseña la historia del backend

Si un archivo heredado no pertenece al backend de `adminJsonLens`, debe revisarse antes de usarlo como referencia.

## Regla practica

Si un documento:

- pertenece a una fase concreta
- tiene sentido leerse en orden
- explica como construir o entender una parte paso a paso

entonces probablemente debe vivir en `docs/Guides/`.

## Idea principal

`Guides` es la carpeta narrativa del proyecto.

Cuenta el recorrido del backend.
No es la carpeta de consulta rapida como `Reference`.
No es la carpeta de reglas estructurales como `Architecture`.

Si un documento no encaja con estas ideas base, no debe tratarse como documentacion valida de este proyecto hasta que sea adaptado.
