# fastify-sequelize

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Migrations

- For Migrations and Seeders we use Prisma @prisma/migrate for SQL friendly migration

\*\*To Create a new migration

```bash
npx prisma migrate dev --create-only
```

\*\*To Run Latest Migration

\*\*To Run All Migrations

````bash
npx prisma migrate deploy

npx prisma db pull

npx prisma generate

**To Create a seeds
 ```bash
 npx prisma db seed
````
