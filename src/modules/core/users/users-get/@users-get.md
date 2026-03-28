# @users-get

Esta carpeta contiene el caso de uso `GET /users`.

## Estado actual

- `users.controller.js`: define la ruta y devuelve la respuesta o el error.
- `users.service.js`: obtiene usuarios desde el repository y los transforma con `getUsersEntity`.

## Nota importante

El router se publica en `/users` y `/api/users`. Si falla la base de datos o el repository, el error termina saliendo por este flujo.
