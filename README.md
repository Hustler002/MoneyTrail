This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## About Prisma
Prisma is a modern open-source ORM (Object-Relational Mapping) for Node.js and TypeScript that simplifies database access and schema management. At the core of Prisma is the Prisma schema, a declarative configuration file (typically named schema.prisma) where you define:

✅ The data model – representing your database tables, fields, and relationships
✅ The database connection – specifying the type of database (e.g., PostgreSQL, MySQL) and how to connect to it

Instead of manually writing complex SQL queries or schema definitions, Prisma enables you to model your database using a clean, object-oriented approach. It automatically generates the underlying SQL schema and a type-safe client that allows seamless interaction with the database through code.

In this project, Prisma has been used as a powerful tool to define and manage SQL database models such as Users, Accounts, Transactions, and more—without writing raw SQL. Using object-oriented modeling (OOM), we were able to intuitively define entities and their relationships, making development more maintainable and efficient.
