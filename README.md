# adminJsonLens

Backend de `JsonLens` orientado al procesamiento de documentos JSON.

## Objetivo

`adminJsonLens` debe encargarse de:

- validar JSON
- formatear JSON
- analizar estructura
- comparar documentos JSON
- exponer informacion base del servicio

## Capacidades del producto

El sistema debe permitir:

1. analizar la estructura completa de un JSON
2. validar si un JSON es correcto o contiene errores de formato
3. formatear JSON automaticamente para convertirlo en una version legible
4. comparar varios JSON entre si
5. detectar diferencias entre estructuras y valores
6. identificar campos nuevos, eliminados o modificados
7. mostrar similitudes entre documentos JSON
8. visualizar la jerarquia de los datos de forma clara

La idea del producto es ofrecer una herramienta de apoyo para debugging, migraciones de datos y validacion de APIs.

## Stack actual

- `Node.js`
- `Express`
- `JavaScript`
- `dotenv`
- `pg`

## Scripts actuales

```bash
npm run dev
npm start
```

Los scripts actuales del backend son:

- `dev`: arranca `src/server.js`
- `start`: arranca `src/server.js`

## Puerto recomendado

- frontend `JsonLens`: `5600`
- backend `adminJsonLens`: `5700`

## Estado del repo

El proyecto ya tiene una base funcional con:

- `src/app.js`
- `src/server.js`
- `src/config/config.index.js`
- registro modular en `src/modules/`

## Direccion de arquitectura

La arquitectura objetivo del proyecto es una arquitectura modular MVP con dos bloques principales:

- `core`
- `json-processing`

La referencia principal vive en:

- [`docs/Architecture/modular-mvp-architecture.md`](./docs/Architecture/modular-mvp-architecture.md)
- [`docs/Reference/nomenclatura.md`](./docs/Reference/nomenclatura.md)
- [`docs/Guides/@Guides.md`](./docs/Guides/@Guides.md)

## Regla de nombres

- nombres tecnicos en ingles
- comentarios y documentacion interna en espanol

## Nota importante

Si encuentras documentacion o nombres heredados de otro backend, no deben tomarse como referencia valida hasta que sean adaptados a `adminJsonLens`.
