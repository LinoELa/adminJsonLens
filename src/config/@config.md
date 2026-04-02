# @config

Esta carpeta centraliza la configuración del backend, la carga de variables de entorno y la configuración de CORS.

## Estado actual

- `config.js`: 
  - Carga `.env` con `import "dotenv/config.js"`
  - Expone `PORT`, `NODE_ENV`, `APP_VERSION`, `DB_USER` y `DB_PASSWORD`
  - Exporta `corsOptions`: configuración CORS con validación de dominios específicos
    - Dominios permitidos: CloudFront, S3 website, localhost:5173
    - Soporta wildcard para `.localhost:56221` y `.osaccess.cloud`
    - Headers adicionales: `x-tenant-id`
    - Credentials habilitadas para requests autenticados

## Dependencias

- `dotenv`: carga de variables de entorno
- `cors`: middleware para CORS robusto

## Nota importante

Si faltan variables de base de datos, `db` queda en `null`. Cualquier módulo que haga queries debe contemplar ese escenario.

Las variables de entorno requeridas deben estar en `.env`:
- `PORT`: puerto del servidor (default: 5700)
- `NODE_ENV`: environment (default: development)
- `APP_VERSION`: versión de la app (default: 0.1)
- `DB_USER` y `DB_PASSWORD`: credenciales de base de datos (si aplica)
