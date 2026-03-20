

# Información para Desarrolladores
```bash
docker run -d -p *****:5432 --name adminJsonLens -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=**** -e POSTGRES_DB=J**** postgres
```

Aquí pasa esto:

**5433** = puerto en tu máquina
**5432** = puerto dentro del contenedor PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=456AdminJson
DB_NAME=JsonLens
```