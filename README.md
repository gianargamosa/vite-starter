# Vite + React + Prisma Starter

A modern, full-stack starter template for building web applications with **Vite**, **React Router 7**, **Prisma ORM**, and **Tailwind CSS**.

## Tech Stack

- ⚡️ **[Vite](https://vitejs.dev/)** - Lightning-fast development with HMR
- ⚛️ **[React 18](https://react.dev/)** - Modern React with hooks
- 🚦 **[React Router 7](https://reactrouter.com/)** - File-based routing with SSR support
- 🗄️ **[Prisma 7](https://www.prisma.io/)** - Type-safe database ORM with migrations
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- 📦 **SQLite** - Lightweight database (easily swap for PostgreSQL/MySQL)
- 🔧 **TypeScript** - Full type safety across the stack

## Quick Start

### Prerequisites

- **Node.js** 20.19+ or 22.12+
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vite-react-prisma-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npm run setup
   ```
   This will:
   - Generate the Prisma Client
   - Run database migrations

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run setup` - Generate Prisma Client and run migrations
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
vite-react-prisma-starter/
├── app/
│   ├── routes/              # File-based routing
│   │   ├── _index/          # Homepage route
│   │   │   ├── route.tsx
│   │   │   └── styles.module.css
│   │   └── counter.tsx      # Counter demo page
│   ├── db.server.ts         # Prisma client instance
│   ├── root.tsx             # Root layout
│   ├── entry.server.tsx     # Server entry point
│   └── tailwind.css         # Tailwind CSS imports
├── prisma/
│   ├── schema.prisma        # Database schema
│   ├── migrations/          # Database migrations
│   └── dev.sqlite           # SQLite database (gitignored)
├── prisma.config.ts         # Prisma 7 configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration (if needed)
└── .env                     # Environment variables
```

## Working with Prisma

### Database Schema

The schema includes example `User` and `Post` models with:
- `@map` attributes for snake_case column names
- `@@map` attributes for plural table names
- Relations and cascade deletes
- Timestamps and indexes

### Creating Migrations

```bash
npx prisma migrate dev --name your_migration_name
```

### Viewing the Database

```bash
npx prisma studio
```

### Generating Prisma Client

```bash
npx prisma generate
```

## File-Based Routing

Routes are automatically generated from files in `app/routes/`:

- `app/routes/_index/route.tsx` → `/`
- `app/routes/counter.tsx` → `/counter`
- `app/routes/about.tsx` → `/about`
- `app/routes/blog.$slug.tsx` → `/blog/:slug`

Learn more in the [React Router docs](https://reactrouter.com/start/framework/routing).

## Switching Databases

By default, this template uses SQLite for development. To switch to PostgreSQL or MySQL:

1. **Update `prisma/schema.prisma`**
   ```prisma
   datasource db {
     provider = "postgresql" // or "mysql"
   }
   ```

2. **Update `.env`**
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

3. **Run migrations**
   ```bash
   npx prisma migrate dev
   ```

### Database Providers

| Database   | Free Tier Options |
| ---------- | ----------------- |
| PostgreSQL | [Supabase](https://supabase.com/), [Neon](https://neon.tech/), [Railway](https://railway.app/) |
| MySQL      | [PlanetScale](https://planetscale.com/), [Railway](https://railway.app/) |
| MongoDB    | [MongoDB Atlas](https://www.mongodb.com/atlas) |

## Deployment

### Build for Production

```bash
npm run build
```

### Deployment Platforms

This app can be deployed to any platform that supports Node.js:

- **[Vercel](https://vercel.com/)** - Zero-config deployments
- **[Netlify](https://www.netlify.com/)** - Automatic deployments from Git
- **[Railway](https://railway.app/)** - Easy deployments with databases
- **[Fly.io](https://fly.io/)** - Global distribution
- **[Render](https://render.com/)** - Free tier available

### Environment Variables

Make sure to set these in production:

- `DATABASE_URL` - Your production database connection string
- `NODE_ENV=production`

## Troubleshooting

### Database tables don't exist

If you see an error about missing tables:

```bash
npm run setup
```

This will generate the Prisma Client and run migrations.

### Prisma Client errors after schema changes

After modifying `prisma/schema.prisma`, always run:

```bash
npx prisma migrate dev --name your_change_description
npx prisma generate
```

### Port already in use

If port 3000 is already in use, you can change it in `vite.config.ts` or set the `PORT` environment variable:

```bash
PORT=3001 npm run dev
```

### Windows ARM64 Prisma issues

If you encounter Prisma engine compatibility issues on Windows ARM64:

```bash
# Set this environment variable
PRISMA_CLIENT_ENGINE_TYPE=binary
```

## Resources

### Documentation

- **[Vite](https://vitejs.dev/)** - Build tool documentation
- **[React](https://react.dev/)** - React documentation
- **[React Router](https://reactrouter.com/)** - Routing and framework docs
- **[Prisma](https://www.prisma.io/docs)** - ORM documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Styling documentation

### Learning Resources

- [React Router Tutorial](https://reactrouter.com/start/tutorial)
- [Prisma Quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
