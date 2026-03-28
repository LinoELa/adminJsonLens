# @modules

Esta carpeta organiza la aplicacion por modulos.

## Estado actual

- `index.module.js`: registra los modulos raiz que luego usa `app.js`.
- `core/`: agrupa la logica funcional expuesta por HTTP.
- `repository/`: agrupa el acceso a datos y las consultas SQL.

## Nota importante

`app.js` monta cualquier modulo que exponga `controller` tanto en `/` como en `/api`. Por eso un mismo router puede responder en dos rutas.
