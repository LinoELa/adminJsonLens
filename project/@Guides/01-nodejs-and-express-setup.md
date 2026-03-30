# Node.js and Express Setup

## Objetivo

Esta guia deja preparada la base minima del backend para `adminJsonLens`.

## Que cubre

- inicializar `package.json`
- instalar dependencias base
- decidir el estilo de modulos
- dejar claro el puerto del backend

## Decision tomada en este proyecto

`adminJsonLens` usa:

- `Node.js`
- `Express`
- `JavaScript`
- `CommonJS` con `require` y `module.exports`

## Dependencias base actuales

- `express`
- `dotenv`
- `pg`

## Puerto recomendado

- frontend `JsonLens`: `5600`
- backend `adminJsonLens`: `5700`

## Resultado esperado de esta fase

Al cerrar esta fase, el proyecto ya debe poder:

- instalar dependencias con `npm install`
- arrancar con `npm run dev` o `npm start`
- tener una base clara para `src/app.js` y `src/server.js`

## Siguiente paso

La siguiente guia natural es [`02-app-server-and-config.md`](./02-app-server-and-config.md).
