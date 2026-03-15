# Infraestructura de `adminJsonLens`

> Mapa rapido del backend para consulta visual en preview.

## Resumen

| Area                  | Detalle                                                    |
| --------------------- | ---------------------------------------------------------- |
| Rol                   | Backend/API del ecosistema `JsonLens`                      |
| Stack base            | `Node.js`, `Express`, `JavaScript`                         |
| Puerto recomendado    | `5600`                                                     |
| Dependencia instalada | `express`                                                  |
| Estado actual         | Repositorio base creado; MVP todavia en construccion       |
| Tipo de repositorio   | Repositorio Git independiente dentro de `JSONLENS-PROJECT` |

## Responsabilidad del backend

- Recibir uno o varios documentos JSON desde el frontend.
- Validar sintaxis y estructura.
- Formatear contenido JSON cuando haga falta.
- Analizar claves, tipos y organizacion del documento.
- Comparar documentos y devolver diferencias legibles.

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
|-- controllers/      # reservado para controladores HTTP
|-- core/             # reservado para logica de negocio
|-- docs/             # documentacion tecnica
|-- routes/           # reservado para definicion de endpoints
|-- server/           # reservado para el arranque del servidor
|-- node_modules/     # dependencias instaladas localmente
|-- .gitignore
|-- README.md
|-- package.json
|-- package-lock.json
`-- index.html
```

## Estructura recomendada para el MVP

```text
adminJsonLens/
|-- src/
|   |-- app.js
|   |-- server.js
|   |-- controllers/
|   |-- routes/
|   |-- services/
|   |-- utils/
|   `-- middlewares/
|-- docs/
|-- .env.example
|-- package.json
`-- README.md
```

## Prioridades siguientes

1. Crear `src/app.js` y `src/server.js`.
2. Definir scripts `dev` y `start` en `package.json`.
3. Exponer un endpoint de salud como `/health`.
4. Preparar endpoints para validar, formatear y comparar JSON.
5. Separar la logica reusable en `services/` y `utils/`.

## Notas de coordinacion

- `JsonLens` puede trabajar en `http://localhost:5700`.
- `adminJsonLens` puede trabajar en `http://localhost:5600`.
- Este documento mezcla el estado actual del repositorio con la direccion recomendada para el siguiente paso del backend.


```text
ArquitectureaProject/
├─ dist/                   # Código compilado o artefactos de despliegue
├─ project/                # Documentación interna y notas del equipo
│  ├─ docs/
│  ├─ notes/
│  └─ ...
├─ src/                    # Código fuente principal
│  ├─ server.ts            # Punto de entrada del servidor
│  ├─ app.ts               # Configuración de Express y middleware global
│  ├─ config/              # Configuración y variables de entorno
│  │  ├─ index.ts
│  │  └─ env.ts
│  ├─ core/                # Lógica de negocio y servicios
│  │  ├─ user.service.ts
│  │  └─ auth.service.ts
│  ├─ repository/          # Acceso a datos y persistencia
│  │  ├─ user.repository.ts
│  │  └─ auth.repository.ts
│  ├─ routes/              # Definición de rutas
│  │  ├─ auth.routes.ts
│  │  ├─ users.routes.ts
│  │  ├─ health.routes.ts
│  │  └─ index.ts
│  ├─ controllers/         # Controladores HTTP
│  │  ├─ auth.controller.ts
│  │  ├─ users.controller.ts
│  │  └─ health.controller.ts
│  ├─ middleware/          # Middleware global y específico
│  │  ├─ auth.middleware.ts
│  │  └─ error.middleware.ts
│  ├─ utils/               # Helpers y utilidades genéricas
│  ├─ validators/          # Validación de requests
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