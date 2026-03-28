# @user-entity

Esta carpeta define la representacion de usuario que usa la API.

## Estado actual

- `user.entity.js`: transforma filas de base de datos en objetos de salida.

## Nota importante

Aqui se normalizan nombres como `is_active` a `isActive` y `created_at` a `createdAt`. Esta capa no deberia contener acceso a base de datos ni logica HTTP.
