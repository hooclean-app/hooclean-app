This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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
turso db shell hoocleandb < ./prisma/migrations/[migration_code_here]/migration.sqls
```


