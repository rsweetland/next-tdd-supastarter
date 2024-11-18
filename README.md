
  <h1 align="center">Next.js v15 TDD Supastarter 🤩<br /> Next.js, Supabase, Drizzle, Jest </h1>
  <p role="heading" align="center">
  Build durable, tested, type-safe apps with Next.js 15 and Supabase 
</p>

<p>This project integrates <a href="https://nextjs.org/blog/next-15">Next.js 15</a>, with the Vercel boilerplate examples from <a href="https://github.com/vercel/next.js/tree/v15.0.2/examples/with-supabase">with-supabase</a>, <a href="https://github.com/vercel/next.js/tree/v15.0.2/examples/with-jest">with-jest</a>, and <a href="https://github.com/vercel/examples/tree/%40vercel/examples-ui%402.0.3/storage/postgres-drizzle">postgres-drizzle</a></li>, fixes a few issues and sets up a hyper-efficient run-on-save, debugger-ready TDD workflow in VS Code.</p><br />

<p>
  <a href="#features"><strong>💎 Features</strong></a> ·
  <a href="#clone-and-run"><strong>🚗 Clone and run</strong></a> ·
  <a href="#testing"><strong>🧪 Streamlined testing</strong></a> ·
  <a href="#feedback-and-issues"><strong>👋 Feedback and issues</strong></a>
</p>
<br/>

## Features
- Run-on-save [Jest](https://jestjs.io/) tests with VS Code debugging preconfigured (video below 📺)
- Debugger set up for both test and dev scripts. Just addd breakpoints
- Works across the [Next.js](https://nextjs.org) stack
  - App Router
  - Middleware
  - Client
  - Server
- Supabase auth, middleware and protected route example
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)
- [Drizzle](https://orm.drizzle.team/) integration, which assumes the [Supabase with Next.js schema](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) 

## Clone and run

1. Clone this repo
2. [Set up a Supabase project](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
3.  Copy `.env.example`  to `.env`  and update:<br />
    * `NEXT_PUBLIC_SUPABASE_URL` 
    * `NEXT_PUBLIC_SUPABASE_ANON_KEY`  Both can be found in [your Supabase project's API settings](https://app.supabase.*com/project/_/settings/api).
    * `DATABASE_URL`  Find from the Supabase Dashboard > Connect
4. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

 5. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and [re-install shadcn/ui](https://ui.shadcn.com/docs/installation/next)

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Testing

<p align="center">
  
[TDD Workflow](https://github.com/user-attachments/assets/06b87ae3-1f16-4b77-b8b9-5d0eb181462e)

</p>


Run and watch tests:

```bash
  npm run test:inspect
```
A VS Code `launch.json` file is included, allowing you to just open Debug sidebar to attach the VS Code.

Just hit save to run tests. Add breakpoints. See to see what's going on. 🔬


## Feedback and issues

This is not an official Supabase or Vercel project. It's just my own personal preference and dev workflow that I thought I would share. Feel free to create issues, fork and improve this project. Drop a ⭐️ if you'd like. Sometimes I am also hiring. Connect with me on Twitter <a href="https://twitter.com/rsweetland">@rsweetland</a>


## Todo

- [ ] Add [drizzle migrations](https://orm.drizzle.team/docs/migrations)
- [ ] `npm run dev:inspect`
