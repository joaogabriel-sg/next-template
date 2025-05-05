# Next.js Template

A clean and ready-to-go Next.js starter template with TypeScript, ESLint, Prettier, testing tools, and a few essential libraries pre-installed — so you can focus on building your app instead of configuring tools from scratch.

## What's included

This template comes pre-configured with:

- ⚡️ Next.js — React framework with SSR and file-based routing
- ⚛️ React — for building UI
- 🧠 TypeScript — static typing
- 🎨 Tailwind CSS — utility-first CSS framework
- 🧹 ESLint — linting setup with custom rules
- ✨ Prettier — code formatting
- 🧪 Vitest — unit testing
- 🧫 Testing Library — testing React components
- 🧭 Playwright — end-to-end testing
- 🪝 Lefthook — Git hooks runner
- 🔎 Path aliases — use "~/..." instead of relative paths
- ✅ PR workflow — lint, type check, and tests before merging

## Getting Started

### Download and install

You can create a new Next.js app using this template with the following command:

```bash
# pnpm
pnpm create next-app -e https://github.com/joaogabriel-sg/next-template
```

After finishing the installation, navigate to the project directory and run the setup script:

```bash
cd my-next-app
pnpm setup:project
```

### Run the app

To start the Next.js development server, run:

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## 📜 Available Scripts

- `pnpm setup:project` — install deps and enable git hooks
- `pnpm dev` — start development server
- `pnpm build` — create production build
- `pnpm start` — start production server
- `pnpm lint` — run ESLint
- `pnpm format` — run Prettier
- `pnpm format:check` — check Prettier formatting
- `pnpm typeCheck` — run TypeScript checks
- `pnpm test:unit` — run unit tests (Vitest)
- `pnpm test:unit:watch` — watch mode
- `pnpm test:unit:coverage` — run unit tests with coverage
- `pnpm test:unit:coverage:watch` — watch mode + coverage
- `pnpm test:e2e` — run Playwright e2e tests
- `pnpm test:e2e:ui` — run e2e tests with UI
- `pnpm test:e2e:report` — show test coverage report
- `preinstall` — prevent installing with npm or yarn, use pnpm instead

## Path Mapping (Alias)

To improve DX and avoid long relative imports like `../../../components`, this project uses a path alias:

```ts
import { Button } from "~/components/ui/Button";
```

The alias is configured in:

- `tsconfig.json` — for TypeScript configuration
- `next.config.js` — for Next.js configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more information.
