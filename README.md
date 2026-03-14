# adminJsonLens

`adminJsonLens` es la API backend del proyecto.

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

La primera meta es construir un MVP funcional que permita:

1. Recibir uno o varios documentos JSON
2. Validarlos
3. Formatearlos
4. Analizar su estructura
5. Compararlos y devolver diferencias básicas

## Puesta en marcha

### Instalar dependencias

```bash
npm install
```

### Iniciar en desarrollo

```bash
npm run dev
```

### Iniciar en modo estándar

```bash
npm start
```

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
