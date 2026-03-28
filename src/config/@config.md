# @config

Esta carpeta centraliza la configuracion del backend y la carga de variables de entorno.

## Estado actual

- `config.index.js`: carga `.env`, expone `PORT` y crea la conexion `db` con `pg` cuando hay configuracion completa.

## Nota importante

Si faltan variables de base de datos, `db` queda en `null`. Cualquier modulo que haga queries debe contemplar ese escenario.
