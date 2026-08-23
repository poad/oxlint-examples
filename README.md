# oxlint-examples

A collection of oxlint configuration examples for various TypeScript/JavaScript projects and frameworks.

## Repository Structure

This is a pnpm monorepo containing multiple example projects demonstrating oxlint configurations:

```plaintext
oxlint-examples/
├── non-frontend/          # Node.js/TypeScript backend examples
│   ├── with-vitest/       # TypeScript project with Vitest
│   └── without-vitest/    # TypeScript project without test framework
├── frontend/              # Frontend framework examples
│   ├── with-solidjs/      # SolidJS with Vite
│   ├── with-nextjs/       # Next.js App Router
│   └── with-lit/          # Lit with Vite
├── aws-cdk/               # AWS CDK TypeScript examples
│   ├── with-vitest/       # CDK with Vitest
│   └── without-vitest/    # CDK with Jest
├── pnpm-workspace.yaml    # Monorepo configuration
└── package.json           # Root package.json with common scripts
```

## Examples

### Non-Frontend (Node.js/TypeScript)

#### `non-frontend/with-vitest`

A TypeScript project configured with [Vitest](https://vitest.dev/) for testing.

- **Features**: TypeScript, Vitest, oxlint, oxfmt
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm test` - Run tests with Vitest
  - `pnpm build` - Type-check the project
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues

#### `non-frontend/without-vitest`

A minimal TypeScript project without a test framework.

- **Features**: TypeScript, oxlint, oxfmt
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm build` - Type-check the project
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues

### Frontend Frameworks

#### `frontend/with-solidjs`

A [SolidJS](https://www.solidjs.com/) project with Vite, showcasing routing features with `@solidjs/router`.

- **Features**: SolidJS, Vite, TypeScript, oxlint, oxfmt, PostCSS
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm dev` - Start development server
  - `pnpm build` - Build for production
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues

#### `frontend/with-nextjs`

A [Next.js](https://nextjs.org/) App Router project bootstrapped with `create-next-app`.

- **Features**: Next.js 16, App Router, TypeScript, oxlint, oxfmt
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm dev` - Start development server
  - `pnpm build` - Build for production
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues

#### `frontend/with-lit`

A [Lit](https://lit.dev/) web components project with Vite.

- **Features**: Lit, Vite, TypeScript, oxlint, oxfmt
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm dev` - Start development server
  - `pnpm build` - Build for production
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues

### AWS CDK

#### `aws-cdk/with-vitest`

An AWS CDK TypeScript project with [Vitest](https://vitest.dev/) for unit testing.

- **Features**: AWS CDK, TypeScript, Vitest, oxlint, oxfmt, oxlint-plugin-awscdk
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm build` - Type-check the project
  - `pnpm test` - Run tests with Vitest
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues
  - `pnx cdk deploy` - Deploy stack to AWS
  - `pnx cdk diff` - Compare deployed stack
  - `pnx cdk synth` - Synthesize CloudFormation template

#### `aws-cdk/without-vitest`

An AWS CDK TypeScript project with [Jest](https://jestjs.io/) for unit testing.

- **Features**: AWS CDK, TypeScript, Jest, oxlint, oxfmt, oxlint-plugin-awscdk
- **Commands**:
  - `pnpm install` - Install dependencies
  - `pnpm build` - Type-check the project
  - `pnpm test` - Run tests with Jest
  - `pnpm lint` - Run oxlint
  - `pnpm lint-fix` - Fix oxlint issues
  - `pnx cdk deploy` - Deploy stack to AWS
  - `pnx cdk diff` - Compare deployed stack
  - `pnx cdk synth` - Synthesize CloudFormation template

## Common Commands

From the repository root, you can run commands across all packages:

```bash
# Install all dependencies
pnpm install

# Build all packages
pnpm build

# Run tests in all packages
pnpm test

# Lint all packages
pnpm lint

# Fix lint issues in all packages
pnpm lint-fix
```

## Requirements

- **Node.js**: ^24.19.0
- **pnpm**: ^11.22.0

The monorepo is configured with pnpm workspaces and includes dependency overrides for security and compatibility.

## oxlint Configuration

Each example includes:

- `oxlint.config.ts` - oxlint configuration with framework-specific rules
- `oxfmt.config.ts` - oxfmt configuration for formatting
- `tsconfig.json` - TypeScript configuration

The AWS CDK examples also include `oxlint-plugin-awscdk` for CDK-specific linting rules.
