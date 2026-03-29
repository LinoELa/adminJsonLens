# GitHub Workflow

## Idea principal

En `adminJsonLens` trabajamos por bloques pequenos y cerrados.

La idea no es hacer commits por archivos sueltos, sino por avances coherentes del backend.

## Alcance

Las reglas de Git se aplican por repositorio.

Si `JsonLens` y `adminJsonLens` viven en repos separados, los comandos Git se ejecutan dentro de cada uno.

## Regla interna

Cuando se diga `preparar todo`, hay que seguir la regla definida en [`preparar-todo.md`](./preparar-todo.md).

Eso incluye revisar:

- codigo relacionado
- nombres
- comentarios
- documentacion
- archivos `@...md`
- wiring de modulos

## Git flow recomendado

### `main`

- contiene codigo estable
- no se trabaja directamente aqui
- recibe cambios desde `dev` o `hotfix/*`

### `dev`

- rama de integracion
- las features nacen desde `dev`
- los bugfix normales nacen desde `dev`

### `feature/*`

Patron recomendado:

```text
feature/<nombre-del-bloque>
```

Ejemplos:

- `feature/core-about-and-health`
- `feature/json-validate`
- `feature/json-compare`

### `bugfix/*`

Patron recomendado:

```text
bugfix/<nombre-del-problema>
```

Ejemplos:

- `bugfix/json-parse-error`
- `bugfix/about-endpoint-response`

### `hotfix/*`

Patron recomendado:

```text
hotfix/<nombre-del-problema>
```

Se usa cuando el arreglo debe ir a `main` y despues volver tambien a `dev`.

## Fases de trabajo recomendadas

La documentacion del proyecto sigue una secuencia como esta:

1. `01-nodejs-and-express-setup`
2. `02-app-server-and-config`
3. `03-modular-wiring`
4. `04-core-about-and-health`
5. `05-json-validate`
6. `06-json-format`
7. `07-json-analyze`
8. `08-json-compare`
9. `09-testing-and-documentation`

## Nombres recomendados para ramas

```text
01-nodejs-and-express-setup
02-app-server-and-config
03-modular-wiring
04-core-about-and-health
05-json-validate
06-json-format
07-json-analyze
08-json-compare
09-testing-and-documentation
```

Si se prefiere usar `feature/*`, esos mismos bloques pueden traducirse asi:

```text
feature/nodejs-and-express-setup
feature/app-server-and-config
feature/modular-wiring
feature/core-about-and-health
feature/json-validate
feature/json-format
feature/json-analyze
feature/json-compare
feature/testing-and-documentation
```

## Regla para commits

El commit debe resumir el bloque completo, no solo una linea del diff.

Formato recomendado:

```text
type: descripcion corta
```

Tipos validos:

- `feat`
- `fix`
- `docs`
- `refactor`
- `chore`
- `test`

Ejemplos validos:

```text
feat: add core about and health modules
feat: add json validate module
refactor: align docs with modular mvp architecture
docs: rename guides and remove legacy project references
```

## Flujo basico

```bash
git status
git add .
git commit -m "mensaje claro"
git push
```

## Flujo con rama nueva

```bash
git switch -c 05-json-validate
git add .
git commit -m "feat: add json validate module"
git push -u origin 05-json-validate
```

## Flujo mas formal con `dev`

```bash
git checkout dev
git pull origin dev
git checkout -b feature/json-validate
git push -u origin feature/json-validate
```

## Comandos utiles

### Listar ramas y limpiar referencias

```bash
git fetch --all --prune
git branch -a
git log --oneline --graph --decorate --all
```

### Fusionar una feature en `dev`

```bash
git checkout dev
git pull origin dev
git merge feature/<nombre>
git push origin dev
```

### Publicar `dev` en `main`

```bash
git checkout main
git pull origin main
git merge dev
git push origin main
```

## Regla practica

Si una rama o un commit sigue usando nombres de otro proyecto, hay que corregirlo antes de dar el bloque por cerrado.
