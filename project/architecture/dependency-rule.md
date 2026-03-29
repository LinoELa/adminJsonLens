# Dependency Rule

## Idea principal

Las dependencias deben mantenerse simples y previsibles dentro de la arquitectura modular MVP.

## Flujo permitido

```text
app.js
  -> index.module.js
  -> block.module.js
  -> feature.module.js
  -> action.controller.js
  -> action.service.js
  -> shared/*
```

## Dependencias validas

### `app.js`

Puede depender de:

- Express
- configuracion global
- `src/modules/index.module.js`

### `*.module.js`

Pueden depender de:

- otros `*.module.js` del mismo bloque
- controllers y services del modulo que registran

### `*.controller.js`

Puede depender de:

- Express
- DTOs de su accion
- service de su accion
- errores compartidos si hacen falta

### `*.service.js`

Puede depender de:

- DTOs
- utilidades de `shared/utils`
- errores de `shared/errors`

## Dependencias que debemos evitar

- que un controller importe otro controller
- que un service dependa directamente de `app.js`
- que un modulo de `core` conozca detalles internos de otro modulo si no es necesario
- que `shared/` dependa de modulos concretos

## Regla practica

Si una pieza empieza a necesitar demasiadas dependencias cruzadas, probablemente esta mal ubicada.
