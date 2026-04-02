


## =================  03/04/2026 =================
## =================  02/04/2026 =================
- Vamos a limpiar el Back end y organizarlo mejor.
- Instalada librería `cors` para manejo robusto de CORS
- Configuración CORS mejorada con validación de dominios específicos:
  - Dominios permitidos: CloudFront, S3, localhost:5173
  - Soporta wildcard para .localhost:56221 y .osaccess.cloud
  - Headers adicionales: x-tenant-id
  - Credentials habilitadas
- Reemplazado middleware CORS manual en app.js por librería cors
- Fixed typo: corsOpions → corsOptions
## =================  01/04/2026 =================
