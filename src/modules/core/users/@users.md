# @users

Esta carpeta representa la feature de usuarios.

## Que es

`users` es la parte del backend dedicada a todo lo relacionado con usuarios.

Aqui deberia vivir la logica necesaria para consultar, transformar y, cuando el proyecto crezca, crear, actualizar o eliminar usuarios.

## Para que sirve

Sirve para concentrar en un mismo lugar todo lo que pertenece al dominio de usuarios, por ejemplo:

- endpoints para listar usuarios
- logica para crear usuarios nuevos
- validaciones especificas del usuario
- transformacion entre datos de base de datos y datos de respuesta
- futuras operaciones como editar, activar, desactivar o borrar usuarios

La idea es que, cuando alguien busque la logica de usuarios, sepa que debe entrar en esta carpeta.

## Que puede vivir aqui

Dentro de esta feature pueden aparecer piezas como:

- `users-get/` para lecturas
- `users-create/` para altas
- `users-update/` para cambios
- `users-delete/` para borrado
- `user-entity/` para definir la forma del usuario que expone la API

## Estado actual

- `users.module.js`: expone el controller y el service del caso de uso actual.
- `users-get/`: contiene el endpoint de lectura de usuarios.
- `user-entity/`: normaliza la forma del usuario que devuelve la API.

## Nota importante

Hoy esta feature solo tiene implementado el flujo de lectura de usuarios, pero ya esta separando bien responsabilidades: el repository consulta, el service coordina y la entity adapta la salida. Eso ayuda a mantener estable la API aunque cambie la forma interna de la base de datos.
