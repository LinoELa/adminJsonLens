# HTTP Status

## Que son

Los codigos HTTP indican el resultado de una peticion al backend.

## Codigos mas utiles para `adminJsonLens`

### `200 OK`

La peticion fue correcta.

Ejemplos:

- `GET /about`
- `GET /health`
- `POST /json/validate`
- `POST /json/format`
- `POST /json/analyze`
- `POST /json/compare`

### `201 Created`

Se creo un recurso nuevo.

Este codigo no es el principal del MVP actual, pero puede servir si mas adelante aparecen endpoints de creacion persistente.

### `204 No Content`

La operacion salio bien y no hace falta devolver body.

### `400 Bad Request`

El cliente envio una peticion mal formada.

Ejemplos:

- body ausente
- JSON HTTP invalido
- falta un campo obligatorio del payload

### `401 Unauthorized`

No es un codigo central del MVP actual porque todavia no hay rutas privadas como parte principal del producto.

Se reserva para futuras rutas protegidas si aparece autenticacion.

### `404 Not Found`

No se encontro la ruta o el recurso solicitado.

### `422 Unprocessable Entity`

El payload tiene forma valida como request, pero no cumple el contrato de la accion.

Ejemplos:

- el campo esperado no viene en el formato correcto
- el contenido enviado no cumple la validacion del DTO

### `500 Internal Server Error`

Error interno del backend.

### `503 Service Unavailable`

Puede ser util si el backend depende de un servicio temporalmente no disponible.

## Regla practica para este proyecto

En `adminJsonLens`, las operaciones principales de procesamiento JSON suelen devolver `200`, incluso cuando el resultado funcional diga que un documento no es valido, siempre que la request haya sido correcta y la accion haya podido responder.

Si la request esta mal formada o no cumple el contrato, entonces el error deberia subir a `400` o `422`.
