This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Copy `.env.example` to `.env` and provide values for the following variables:

- `NEXT_PUBLIC_SITE_URL` – base URL used by the sitemap and other features. When not set, it defaults to `https://fluffypetwash.com`.
- `EMAIL_USER` – Gmail address used to send contact form messages.
- `EMAIL_PASS` – app password for the above Gmail account.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Resolving Orphaned Pages

Use the `find-orphans.js` script to analyze a SEMrush CSV export and detect pages that are not internally linked. Provide the path to the CSV file:

```bash
node scripts/find-orphans.js path/to/semrush.csv
```

Any slugs printed by the script are considered orphaned. For each slug you can either:

1. **Delete the page** and list the slug in `data/semrush-exclude.json` so it is removed from the sitemap.
2. **Add internal links** from relevant blog posts or location pages to keep the page indexed.

