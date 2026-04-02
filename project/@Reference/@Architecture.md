# Arquitectura adminJsonLens

## ================= Resumen =================

| Area                    | Detalle                                                         |
| ----------------------- | --------------------------------------------------------------- |
| Rol                     | Backend del ecosistema JsonLens                                 |
| Stack base              | Node.js, Express, PostgreSQL, dotenv                            |
| Puerto por defecto      | 5700                                                            |
| Dependencias instaladas | express, pg, dotenv                                             |
| Estado actual           | MVP backend en construccion con modulos core y acceso a datos   |
| Tipo de repositorio     | API modular simple dentro de JSON-LENS-PROJECT                  |

## ================= Arquitectura Actual =================

La aplicacion sigue una estructura modular ligera sobre Express.

- app.js crea la app HTTP, registra middlewares globales y monta los modulos.
- server.js arranca el proceso y escucha el puerto configurado.
- config/config.js centraliza variables de entorno y el Pool de PostgreSQL.
- modules/ organiza el backend por slices funcionales.
- repository/ concentra acceso a datos compartido por los servicios.

La idea principal no es separar por capas globales tipo controllers/ services/ repositories en la raiz, sino mantener cada feature cerca de su comportamiento y dejar el acceso a datos reutilizable en un modulo especifico.

## ================= Estructura Modular Actual =================

```text
adminJsonLens/
|-- env.example
|-- package.json
|-- README.md
|
`-- src/
	|-- app.js                                 # Crea Express, aplica JSON middleware y CORS simple
	|-- server.js                              # Levanta el servidor HTTP
	|
	|-- config/
	|   `-- config.js                          # Variables de entorno y conexion a PostgreSQL
	|
	|-- modules/
	|   |-- index.module.js                    # Punto de ensamblado de modulos raiz
	|   |
	|   |-- core/
	|   |   |-- core.module.js                 # Agrupa modulos funcionales base
	|   |   |
	|   |   |-- about/
	|   |   |   |-- about.module.js            # Wiring del slice about
	|   |   |   `-- about-get/
	|   |   |       |-- about.controller.js    # Endpoint GET /about
	|   |   |       `-- about.service.js       # Respuesta de informacion de la API
	|   |   |
	|   |   |-- health/
	|   |   |   |-- health.module.js           # Wiring del slice health
	|   |   |   `-- health-get/
	|   |   |       |-- health.controller.js   # Endpoint GET /health
	|   |   |       `-- health.service.js      # Estado del servicio
	|   |   |
	|   |   |-- users/
	|   |   |   |-- users.module.js            # Wiring del slice users
	|   |   |   |-- user-entity/
	|   |   |   |   `-- user.entity.js         # Normalizacion o forma de salida del usuario
	|   |   |   `-- users-get/
	|   |   |       |-- users.controller.js    # Endpoint GET /users
	|   |   |       `-- users.service.js       # Orquesta entidad + repositorio
	|   |   |
	|   |   `-- info/
	|   |       `-- info-create/
	|   |           |-- info-create.controller.js
	|   |           |-- info-create.dto.js
	|   |           `-- info-create.service.js
	|   |
	|   `-- repository/
	|       |-- repository.module.js           # Query runner compartido y wiring de repositorios
	|       `-- modules/
	|           `-- user.repository.js         # CREATE TABLE + consulta de usuarios
	|
	|-- controllers/                           # Reservado para futura extraccion compartida
	|-- middlewares/                           # Reservado para middlewares reutilizables
	|-- routes/                                # Reservado si la app evoluciona a router central
	|-- shared/                                # Reservado para piezas realmente comunes
	`-- utils/                                 # Reservado para helpers transversales
```

## ================= Patron Modular del Backend =================

Cada feature intenta seguir este patron simple:

```text
feature-name/
|-- feature-name.module.js
|-- feature-entity/                # Opcional
|   `-- feature.entity.js
`-- action-name/
	|-- action-name.controller.js
	|-- action-name.dto.js         # Opcional, si hay input estructurado
	`-- action-name.service.js
```

Y cuando la feature necesita persistencia:

```text
repository/
|-- repository.module.js
`-- modules/
	`-- feature.repository.js
```

## ================= Flujo de Request =================

El flujo actual del backend es directo y facil de seguir:

1. server.js levanta la aplicacion Express.
2. app.js registra express.json(), CORS simple y la ruta raiz.
3. index.module.js obtiene los modulos raiz.
4. app.js monta cada controller tanto en / como en /api.
5. El controller recibe la request y delega al service.
6. El service aplica logica de orquestacion y, si hace falta, consulta el repository.
7. El repository ejecuta SQL usando el Pool de PostgreSQL.
8. El resultado vuelve al service, luego al controller y finalmente al cliente.

## ================= Responsabilidades por Capa =================

Aunque el proyecto no usa una arquitectura hexagonal formal completa todavia, si tiene responsabilidades diferenciadas:

### 1. Bootstrap y Configuracion

- server.js: arranque del proceso HTTP.
- app.js: configuracion de Express, middlewares y montaje de rutas.
- config/config.js: lectura de .env y construccion del cliente db.

### 2. Modulos Funcionales

- about: informacion descriptiva de la API.
- health: chequeo de disponibilidad.
- users: lectura de usuarios desde base de datos.
- info: slice iniciado para operaciones futuras.

### 3. Acceso a Datos

- repository.module.js: expone queryRepository como wrapper comun.
- user.repository.js: conoce SQL, asegura la tabla y devuelve filas.

### 4. Modelo de Salida

- user.entity.js: transforma o define la forma estable del dato usuario antes de responder.

## ================= Wiring de Modulos =================

La app se ensambla en cascada:

```text
server.js
  -> app.js
	-> modules/index.module.js
	  -> core/core.module.js
		-> about.module.js
		-> health.module.js
		-> users.module.js
	  -> repository/repository.module.js
```

Cada *.module.js funciona como un objeto de ensamblado muy simple. No hay contenedor de dependencias formal; la composicion se hace con imports y objetos planos.

## ================= Convenciones de Endpoints =================

Los controllers se montan con doble acceso:

- Ruta corta: /users, /health, /about
- Ruta prefijada: /api/users, /api/health, /api/about

Esto permite mantener compatibilidad simple para pruebas manuales mientras se consolida una API prefijada para frontend y clientes externos.

## ================= Convenciones de Base de Datos =================

La configuracion actual usa PostgreSQL mediante pg.

- La conexion se crea solo si existen todas las variables de entorno requeridas.
- Si no hay configuracion de DB, db queda en null.
- Los repositorios encapsulan el SQL y no lo exponen a controllers.
- El repo de usuarios asegura la existencia de la tabla antes de consultar.

Variables actuales esperadas:

- PORT
- DB_HOST
- DB_PORT
- DB_USER
- DB_PASSWORD
- DB_NAME

## ================= Nomenclatura del Proyecto =================

### 1. Sistema de nombres por responsabilidad

| Tipo                         | Formato      | Ejemplo                              |
| ---------------------------- | ------------ | ------------------------------------ |
| Modulos y carpetas feature   | kebab-case   | core, repository, about-get          |
| Archivos de ensamblado       | kebab-case   | core.module.js, users.module.js      |
| Controllers                  | kebab-case   | users.controller.js                  |
| Services                     | kebab-case   | users.service.js                     |
| DTOs                         | kebab-case   | info-create.dto.js                   |
| Entities                     | kebab-case   | user.entity.js                       |
| Variables y funciones        | camelCase    | getUsersService, queryRepository     |
| Constantes globales          | UPPER_SNAKE_CASE | PORT, DB_HOST                    |

### 2. Regla general

- Mantener archivos y carpetas en kebab-case.
- Mantener funciones y variables en camelCase.
- Reservar UPPER_SNAKE_CASE para constantes de configuracion.
- Nombrar cada carpeta de accion segun caso de uso HTTP o de negocio.

## ================= Ejemplo de Slice Actual =================

Ejemplo del slice users:

```text
modules/
`-- core/
	`-- users/
		|-- users.module.js
		|-- user-entity/
		|   `-- user.entity.js
		`-- users-get/
			|-- users.controller.js
			`-- users.service.js

modules/
`-- repository/
	`-- modules/
		`-- user.repository.js
```

Responsabilidad del flujo:

- users.controller.js recibe GET /users.
- users.service.js coordina lectura y respuesta.
- user.repository.js ejecuta SQL.
- user.entity.js define la salida final del dato.

## ================= Evolucion Arquitectonica Recomendada =================

La siguiente evolucion natural del backend deberia mantener esta base modular, no reemplazarla por una arquitectura mas pesada sin necesidad.

Orden recomendado:

1. Consolidar config.index.js o unificar imports para evitar rutas inconsistentes.
2. Mover shared solo aquello que realmente se repita entre modulos.
3. Crear modulos de json-processing cuando el MVP lo exija: validate, format, analyze, compare.
4. Extraer manejo de errores y middlewares comunes.
5. Agregar tests por slice funcional.

## ================= Beneficios de Esta Estructura =================

| Beneficio          | Como lo logra                                                            |
| ------------------ | ------------------------------------------------------------------------ |
| Clara              | Cada endpoint vive cerca de su service y su modulo                       |
| Escalable          | Nuevas features se agregan como slices sin tocar toda la app             |
| Mantenible         | El SQL queda aislado en repository y no contaminan controllers           |
| Pragmatica         | Usa Express simple, sin sobreingenieria para el estado actual del MVP    |
| Evolutiva          | Permite crecer a modulos de procesamiento JSON sin romper la base        |

## ================= Reglas Simples =================

- Crear por modulo funcional, no por capa global.
- Mantener controllers delgados y services como punto de orquestacion.
- Encapsular SQL dentro de repository.
- Usar shared solo para piezas realmente compartidas.
- No agregar complejidad arquitectonica antes de que el MVP la necesite.