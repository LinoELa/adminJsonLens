# Infraestructura de `adminJsonLens`

> Mapa rápido del backend para consulta visual.

## Resumen

| Área                | Detalle                                                    |
| ------------------- | ---------------------------------------------------------- |
| Rol                 | Backend, API del ecosistema `JsonLens`                     |
| Stack base          | `Node.js`, `Express`, `JavaScript`                         |
| Puerto recomendado  | `5600`                                                     |
| Dependencias base   | `express`                                                  |
| Estado actual       | Repositorio base creado, MVP todavía en construcción       |
| Tipo de repositorio | Repositorio Git independiente dentro de `JSONLENS-PROJECT` |

## Responsabilidad del backend

* Recibir uno o varios documentos JSON desde el frontend.
* Validar sintaxis y estructura.
* Formatear contenido JSON cuando haga falta.
* Analizar claves, tipos y organización del documento.
* Comparar documentos y devolver diferencias legibles.

## Flujo esperado

```text
JsonLens (frontend)
  -> request HTTP
  -> adminJsonLens
  -> validacion / analisis / comparacion
  -> respuesta JSON lista para la UI
```

## Estructura actual observada

```text
adminJsonLens/
|-- controllers/      # Reservado para controladores HTTP
|-- core/             # Reservado para logica de negocio
|-- docs/             # Documentacion tecnica
|-- routes/           # Reservado para definicion de endpoints
|-- server/           # Reservado para el arranque del servidor
|-- node_modules/     # Dependencias instaladas localmente
|-- .gitignore
|-- README.md
|-- package.json
`-- package-lock.json
```

## Estructura recomendada para el MVP

```text
adminJsonLens/
|-- src/
|   |-- app.js            # Configuracion principal de Express
|   |-- server.js         # Punto de entrada del servidor
|   |-- controllers/      # Controladores de endpoints
|   |-- routes/           # Definicion de rutas
|   |-- services/         # Logica principal del procesamiento JSON
|   |-- utils/            # Funciones auxiliares
|   `-- middlewares/      # Middlewares de Express
|-- docs/                 # Documentacion tecnica
|-- .env.example          # Ejemplo de variables de entorno
|-- package.json
`-- README.md
```

## Prioridades siguientes

1. Crear `src/app.js` y `src/server.js`.
2. Definir los scripts `dev` y `start` en `package.json`.
3. Exponer un endpoint de salud como `/health`.
4. Preparar endpoints para validar, formatear y comparar JSON.
5. Separar la lógica reutilizable en `services/` y `utils/`.

## Notas de coordinación

* `JsonLens` puede trabajar en `http://localhost:5173`.
* `adminJsonLens` puede trabajar en `http://localhost:5600`.
* Este documento mezcla el estado actual del repositorio con la dirección recomendada para el siguiente paso del backend.

## Arquitectura de referencia futura


```text
ReferenceArchitecture/
├─ dist/                   # Codigo compilado o artefactos de despliegue
├─ project/                # Documentacion interna y notas del equipo
│  ├─ docs/
│  ├─ notes/
│  └─ ...
├─ src/                    # Codigo fuente principal
│  ├─ server.ts            # Punto de entrada del servidor
│  ├─ app.ts               # Configuracion de Express y middleware global
│  ├─ config/              # Configuracion y variables de entorno
│  │  ├─ index.ts
│  │  └─ env.ts
│  ├─ core/                # Logica de negocio y servicios
│  │  ├─ user.service.ts
│  │  └─ auth.service.ts
│  ├─ repository/          # Acceso a datos y persistencia
│  │  ├─ user.repository.ts
│  │  └─ auth.repository.ts
│  ├─ routes/              # Definicion de rutas
│  │  ├─ auth.routes.ts
│  │  ├─ users.routes.ts
│  │  ├─ health.routes.ts
│  │  └─ index.ts
│  ├─ controllers/         # Controladores HTTP
│  │  ├─ auth.controller.ts
│  │  ├─ users.controller.ts
│  │  └─ health.controller.ts
│  ├─ middleware/          # Middleware global y especifico
│  │  ├─ auth.middleware.ts
│  │  └─ error.middleware.ts
│  ├─ utils/               # Helpers y utilidades genericas
│  ├─ validators/          # Validacion de requests
│  └─ types/               # Tipos globales y DTOs
├─ test/                   # Pruebas unitarias e integradas
│  ├─ auth.test.ts
│  ├─ users.test.ts
│  └─ ...
├─ .env.example
├─ package.json
├─ tsconfig.json
├─ tsconfig.build.json
└─ nodemon.json
```