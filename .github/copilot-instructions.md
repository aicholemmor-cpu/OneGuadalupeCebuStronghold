## Purpose
This file guides AI coding agents working in this repository so they can be productive immediately.

**Repository snapshot:** This repo currently contains only the project README: [README.md](README.md#L1-L1).

## Big Picture

## Useful first actions for an AI agent

## Conventions & patterns (repo-specific)

## Tests, CI, and runs (what's discoverable)

## Communication & PR guidance

## Safety & verification steps for generated code

## When unsure — ask before committing
  - What language/runtime should be used?
  - Should I add CI and basic tests?
  - Any preferred project structure or frameworks?

## Example prompts to use with the repo owner

If this matches your intention I can scaffold a minimal project (pick languages) and add a short CI template; otherwise tell me what the repo should become.

```markdown
## Purpose
Guide AI coding agents to be productive immediately in this repository.

**Repository snapshot (discoverable):** the repo currently only contains [README.md](README.md#L1-L1). There is no application code, tests, or CI present.

## Quick environment notes (discoverable)
- Workspace path: `/workspaces/OneGuadalupeCebuStronghold`.
- Default branch: `main`.
- Dev container OS available: Ubuntu 24.04.3 LTS. Common CLIs present: `git`, `gh`, `curl`, `docker`, `npm`, `python` (use `which` to confirm).

## Big Picture (what an agent must know)
- This repo is an empty starter. Primary agent goals: clarify scope with the owner, propose a minimal scaffold, and implement tiny, reviewable changes after approval.
- Because there's no running app or tests, every substantive code change must include a runnable smoke check and a short README addition.

## First actions (concrete)
1. Open and summarize [README.md](README.md#L1-L1). Ask these minimum questions:
  - Which language/runtime should the project use?
  - What is the minimal deliverable (API, static site, CLI)?
  - Do you want CI and tests now or later?
2. List minimal scaffold options (2–3) and show the exact files you would create before applying any changes.
3. On approval, create the scaffold in a feature branch and include a one-line smoke test in the README.

## Scaffold examples (what to propose)
- Node.js Express API: `package.json`, `src/index.js`, `README.md` entry, `Dockerfile` (optional). Smoke test: `npm install && node src/index.js` then `curl http://localhost:3000/health`.
- Python Flask API: `pyproject.toml` or `requirements.txt`, `src/app.py`, `README.md` entry. Smoke test: `python -m src.app` then `curl http://localhost:5000/health`.
- Static site: `index.html`, `README.md` entry. Smoke test: `python -m http.server` then `curl http://localhost:8000/`.

## Conventions & PR guidance (repo-specific)
- Work in short-lived feature branches and open a PR against `main`.
- PR description must list: scaffold chosen, files added, one-line run/smoke command, and a short rationale.
- If you update `README.md`, keep the original content and add a `Scaffold added by AI` section that maintainers can edit.

## Tests, CI, and verification (discoverable constraints)
- No CI exists; do not add CI without owner confirmation. If requested, provide a small, documented GitHub Actions workflow and submit as a separate PR.
- Every scaffold must include a minimal smoke check command and a one-line verification CURL or HTTP request.

## Integration & external dependencies (how to document)
- Document any external services needed (databases, third-party APIs) in the PR description and in the scaffold `README.md`.

## When unsure — ask before committing (mandatory)
1. Which runtime/framework should I scaffold for? (Node/Python/Static/Other)
2. Do you want CI and basic tests added now?
3. Any required third-party services or provider accounts?

---
If this reflects what you want, I can prepare scaffold file lists for the chosen runtime. What would you like me to propose first?

```
