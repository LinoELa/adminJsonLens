# prepararTodo

## Que significa "prepara todo"

Cuando en este proyecto se diga `prepara todo`, no significa hacer solo el cambio puntual.

Significa revisar y dejar cerrado todo el bloque relacionado con esa parte del sistema.

## Que se tiene que revisar

Si se pide `prepara todo`, hay que revisar:

- codigo del bloque
- wiring en `*.module.js`
- controllers, dto y services
- middlewares o utilidades compartidas si el flujo las necesita
- imports y exports
- nombres de funciones y archivos
- endpoints y contratos
- tests
- archivos `@...md`
- documentacion general como `README.md`, `docs/Architecture/...` y `docs/...`
- reglas de nombres en `nomenclatura.md`

## Que se tiene que corregir

Ademas del cambio principal, tambien hay que corregir:

- errores obvios
- nombres inconsistentes
- comentarios que no encajan con el codigo real
- archivos nuevos sin documentar
- carpetas nuevas sin su `@...md`
- modulos creados pero no registrados en el wiring
- validaciones sin conectar al controller
- endpoints nuevos que no aparecen en la documentacion

## Regla de idioma y nombres

Si haces `prepara todo`, tambien tienes que revisar esto:

- carpetas, archivos, endpoints, funciones e identificadores en ingles
- comentarios del codigo en espanol
- documentacion interna clara para el equipo

La referencia concreta de esta regla esta en [`nomenclatura.md`](./nomenclatura.md).


## Referencia madre del proyecto

Si haces `prepara todo`, tambien tienes que revisar si el cambio toca la vision general del producto.
- Si lo hace aviamelo y tengo que confirmar antes de seguir.

El archivo `@project.md` debe funcionar como referencia madre del proyecto y dejar claro:

- vision del producto
- problema que resuelve
- rol del frontend y del backend
- MVP real
- roadmap inicial con el orden recomendado

Si alguno de esos puntos cambia, la documentacion tambien debe actualizarse ahi.

La referencia concreta de esta regla esta en [`@project.md`](../@project.md).


## Estructura de comentarios del proyecto

La idea no es comentar por comentar.

La idea es que cada archivo:

- explique su intencion cuando haga falta
- marque decisiones importantes del flujo
- evite comentarios obvios

## Patron base recomendado

Normalmente un archivo puede seguir esta forma:

1. imports
2. comentario corto del bloque principal si realmente aporta
3. codigo principal
4. comentarios internos solo donde el flujo lo necesite

## Ejemplo de comentario util en este proyecto

```js
/**
 * - Recibe un texto JSON.
 * - Intenta parsearlo de forma segura.
 * - Devuelve si el documento es valido.
 *
 * Este servicio concentra la validacion basica del payload
 * para que el controller solo adapte HTTP y el service
 * resuelva la logica real de la accion.
 *
 * @SERVICE | validate-json
 */
```

## Comentarios dentro del flujo

Cuando una accion tenga varios pasos, se pueden comentar los bloques importantes.

Ejemplo:

```js
// 1. Parseamos el texto una sola vez para no repetir trabajo.
// 2. Si falla el parseo, devolvemos un error controlado.
// 3. Si sale bien, reutilizamos el objeto parseado en el resto del flujo.
```

## Que se tiene que agregar

Si falta algo necesario para que el bloque quede completo, tambien se debe agregar.

Por ejemplo:

- crear el `*.module.js` si aparece un modulo nuevo
- registrar el modulo en `index.module.js`
- crear el `@...md` de una carpeta nueva
- actualizar `modular-mvp-architecture.md` si la arquitectura cambia
- actualizar `nomenclatura.md` si se fija una nueva convencion
- agregar tests del service si aparece una accion nueva

## Ejemplo practico

Si se crea `compare/compare-post/`:

- no basta con crear solo `compare-json.service.js`
- tambien hay que crear `compare-json.controller.js`
- tambien hay que crear `compare-json.dto.js` si el payload lo necesita
- tambien hay que registrar `compare.module.js`
- tambien hay que conectar `json-processing.module.js`
- tambien hay que documentar la carpeta con su `@compare.md` o `@compare-post.md`
- tambien hay que revisar `modular-mvp-architecture.md` si el modulo aun no aparece

## Idea principal

`prepara todo` significa:

- no dejar medias partes
- no esperar a que pidan cada detalle por separado
- revisar lo relacionado
- documentar lo nuevo
- dejar el bloque listo para seguir con el siguiente paso
