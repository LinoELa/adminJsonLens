# adminJsonLens

`adminJsonLens` es la API backend del proyecto.

## Puertos recomendados

Para evitar conflictos en desarrollo, usa esta convención desde el inicio:

- Frontend `JsonLens`: `http://localhost:5600`
- Backend `adminJsonLens`: `http://localhost:5700`

Regla práctica:

- Frontend: `56xx`
- Backend: `57xx`

Su responsabilidad principal es gestionar la validación, el formateo, el análisis y la comparación de archivos JSON. Esta API actúa como la capa encargada de procesar la información y devolver resultados claros, estructurados y consumibles por el frontend.

## Funcionalidades previstas

El backend está diseñado para cubrir las siguientes capacidades:

- Validación de documentos JSON
- Formateo automático de contenido JSON
- Análisis estructural de documentos JSON
- Comparación entre varios documentos JSON
- Detección de diferencias de estructura y valores
- Identificación de campos añadidos, eliminados o modificados
- Detección de similitudes entre documentos JSON

## Objetivo del proyecto

El objetivo de `adminJsonLens` es proporcionar una base sólida para una herramienta moderna orientada al análisis y comparación de datos JSON. La API centraliza la lógica de procesamiento para facilitar la integración con la interfaz frontend y asegurar resultados consistentes.

## Stack tecnológico

- Node.js
- Express
- JavaScript
- Ajv
- jsondiffpatch

## Estado actual

El proyecto se encuentra en una fase inicial de desarrollo.

Actualmente solo está instalada la dependencia `express` y todavía no hay scripts ni estructura base implementados dentro del repositorio.

La siguiente meta razonable para el MVP del backend es:

1. Definir la estructura inicial del proyecto
2. Crear `app.js` y `server.js`
3. Levantar la API en `http://localhost:5700`
4. Recibir uno o varios documentos JSON
5. Validarlos, analizarlos y compararlos

## Puesta en marcha

### Instalar dependencias

```bash
npm install
```

### Estado de arranque actual

Por ahora el proyecto no tiene scripts `dev` ni `start` definidos en `package.json`.

Antes de poder arrancarlo conviene añadir:

- Un archivo de entrada para Express
- La configuración del puerto `5700`
- Los scripts de ejecución en `package.json`

## Estructura inicial recomendada

```bash
src/
  controllers/
  routes/
  services/
  utils/
  middlewares/
  app.js
  server.js
```

## Relación con el proyecto

`adminJsonLens` forma parte del ecosistema `JsonLens` y proporciona los servicios backend necesarios para soportar las funcionalidades de validación, análisis y comparación disponibles en el frontend.
