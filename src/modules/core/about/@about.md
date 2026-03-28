# @about

Esta carpeta representa la feature `about` del backend.

## Que es

`about` es una feature informativa. Su objetivo no es procesar datos del negocio, sino explicar que es esta API y que endpoints tiene disponibles.

## Para que sirve

Sirve como punto rapido de consulta para saber:

- que aplicacion esta respondiendo
- que rutas existen ahora mismo
- si la API esta exponiendo correctamente sus endpoints publicos

Es util para documentacion ligera, pruebas manuales y para entender rapido el backend sin tener que leer todo el codigo.

## Que puede vivir aqui

En esta carpeta pueden vivir casos de uso relacionados con informacion descriptiva de la API, por ejemplo:

- un resumen de endpoints disponibles
- metadatos del servicio
- informacion de version del backend
- detalles de entorno no sensible para desarrollo

## Estado actual

- `about.module.js`: conecta el controller y el service del caso de uso actual.
- `about-get/`: contiene la implementacion activa.
- `about-post/`: existe como espacio preparado para ampliacion.

## Nota importante

Hoy esta feature devuelve informacion descriptiva de la API y no depende de base de datos. Si mas adelante se amplia, conviene que siga siendo una feature de consulta y no mezcle logica de negocio que pertenezca a otras carpetas.
