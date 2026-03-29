# @project

Esta carpeta guarda la vision general de `JsonLens` y el contexto del backend `adminJsonLens`.

Aunque este directorio vive dentro del backend, este archivo tambien resume el producto completo para no perder la foto general de front y back juntos.

## Para que sirve este archivo

Este archivo existe para responder rapido:

- de que va el proyecto
- que problema quiere resolver
- que hace el frontend
- que hace el backend
- cual es el MVP real
- en que orden conviene construirlo

## Que es `JsonLens`

`JsonLens` es un producto web pensado para trabajar con documentos JSON de una forma mas clara, visual y util.

El proyecto completo tiene dos piezas:

- `JsonLens`: frontend donde la persona usuaria pega, carga, visualiza y compara JSON
- `adminJsonLens`: backend que valida, formatea, analiza y compara JSON

## Problema que quiere resolver el proyecto

Trabajar con JSON suele ser incomodo por varias razones:

- los errores de sintaxis no siempre se ven facil
- los JSON grandes o anidados cuestan leer
- comparar dos JSON a mano es lento
- detectar campos nuevos, eliminados o modificados da trabajo
- depurar respuestas de APIs o migraciones de datos puede volverse confuso

`JsonLens` quiere resolver eso con una sola herramienta que una visualizacion clara y procesamiento tecnico real.

## Vision del producto

La idea del proyecto no es solo "ver JSON".

La idea es convertir JSON en algo facil de:

- validar
- formatear
- explorar
- entender
- comparar

El valor del producto esta en ahorrar tiempo a developers, QA y personas que trabajan con APIs, integraciones y datos.

## Que hace el proyecto completo

El frontend se encarga de la experiencia de uso:

- pegar o cargar JSON
- mostrar errores de forma clara
- renderizar el contenido en forma de arbol
- presentar diferencias de manera visual
- ofrecer una interfaz comoda y rapida

El backend se encarga del procesamiento:

- validar JSON
- formatear JSON
- analizar estructura
- comparar documentos JSON
- devolver respuestas consistentes al frontend

Juntos forman un producto unico:

- el frontend aporta usabilidad
- el backend aporta logica y consistencia

## Que hace `adminJsonLens`

`adminJsonLens` es el motor tecnico del proyecto.

Su trabajo es exponer una API sencilla y estable para que el frontend no tenga que resolver toda la logica pesada por su cuenta.

Este backend quiere conseguir:

- centralizar las reglas de procesamiento JSON
- devolver respuestas claras y reutilizables
- separar la logica del procesamiento de la interfaz
- dejar una base limpia para que el producto crezca
- servir como capa estable para futuras mejoras

## MVP del proyecto general

El MVP del producto completo debe permitir que una persona:

1. pegue un JSON
2. lo valide
3. lo formatee
4. lo vea en arbol
5. compare dos JSON
6. vea diferencias basicas

Ese ya seria un producto util de verdad.

## MVP del backend

El MVP del backend deberia cubrir:

- `health` y `about` para saber que el servicio esta vivo y que hace
- endpoint de validacion JSON
- endpoint de formateo JSON
- endpoint de analisis basico de estructura
- endpoint de comparacion entre dos JSON
- respuestas JSON claras para errores y resultados

Con eso el frontend ya puede apoyarse en una base real para construir la primera version util del producto.

## Lista general de trabajo del proyecto

Puedes organizar todo lo que quieras hacer en estas listas:

- ideas
- funcionalidades
- bugs
- mejoras
- tareas tecnicas

Una forma practica de leerlas es esta:

- `ideas`: cosas nuevas que podria tener el producto
- `funcionalidades`: capacidades visibles para la persona usuaria
- `bugs`: fallos que rompen o confunden
- `mejoras`: ajustes de UX, claridad, rendimiento o calidad
- `tareas tecnicas`: refactors, testing, estructura, devops o documentacion

## Orden recomendado real

Si quieres construirlo con buen orden, este recorrido tiene mucho sentido:

1. validar JSON
2. formatear JSON
3. mostrar arbol
4. analizar estructura
5. comparar dos JSON
6. mostrar diferencias
7. calcular similitud
8. mejorar interfaz
9. anadir extras

## Fuera del MVP por ahora

Para no abrir demasiado el alcance en la primera version, mejor dejar fuera:

- autenticacion
- historial de archivos
- persistencia compleja
- comparacion multiple avanzada
- permisos o panel admin grande
- colaboracion en tiempo real
- metricas complejas

## Relacion con la documentacion

Usa esta carpeta como mapa general y luego baja al detalle:

- [`@Architecture.md`](./architecture/@Architecture.md): reglas tecnicas y estructura
- [`@Guides.md`](./guides/@Guides.md): construccion paso a paso
- [`@Reference.md`](./Reference/@Reference.md): apoyo rapido y convenciones

Lectura recomendada:

1. [`../README.md`](../README.md)
2. [`../../JsonLens/README.md`](../../JsonLens/README.md)
3. [`./architecture/modular-mvp-architecture.md`](./architecture/modular-mvp-architecture.md)
