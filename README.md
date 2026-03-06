# OneGuadalupeCebuStronghold

This repository currently contains a minimal Node.js Express scaffold created by GitHub Copilot.

## Scaffold Overview

- **Language:** JavaScript (Node.js)
- **Framework:** Express
- **Entry point:** `src/index.js`
- **Health endpoint:** `GET /health` returns `{ status: 'ok' }`

## Getting Started

```bash
# install dependencies
npm install

# start the server
npm start

# development mode (requires nodemon)
npm run dev
```

Access `http://localhost:3000/health` to verify the server is running.

## Configuration & Dynamic Routes

The server is configurable via environment variables. Create a `.env` file (dotenv is already installed) with values such as:

```ini
APP_PORT=4000
```

By default the app listens on `PORT` or `APP_PORT` with a fallback to `3000`.

Routes in `src/routes` are loaded automatically; add new files to expose additional endpoints. A sample `info` route returns the governance text.

## Testing

A basic test suite verifies both the health and info endpoints. Run:

```bash
npm test
```

GitHub Actions will automatically execute these tests on pushes and pull requests to `main`.

---

Original README contents follow:

# OneGuadalupeCebuStronghold