

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Db

App uses prisma ORM and sqlite db froom Turso.

### Updating db schema 
Once the schema is updated:

1. generate a migration file using:


```
npx prisma migrate dev --name init
```

2. Update the migration using Turso's CLI:
```
turso db shell turso-prisma-db < ./prisma/migrations/20230922132717_init/migration.sql
```
*Replace 20230922132717_init with the name of your migration.

More info: https://www.prisma.io/docs/orm/overview/databases/turso
