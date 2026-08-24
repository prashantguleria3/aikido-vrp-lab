# aikido-vrp-lab

Controlled research application for Aikido VRP security testing (Intigriti).

**IMPORTANT:** This repository is a research fixture. All configuration values
are fake and must never contain real credentials.

## Endpoints

- `GET /health`
- `GET /api/users`
- `GET /api/users/:id`
- `GET /api/items/:id`
- `POST /api/items`

## Fake environment reference (never real)

```
AK_TEST_PUBLIC=not-a-real-secret
DEMO_TOKEN=TEST_ONLY_NOT_VALID
```

## Run

```bash
npm install
npm start        # http://localhost:3000
npm test
```

## Structure

```
src/            Node/Express application
openapi/        OpenAPI 3.0 specification
package/        sample lockfile fixture
infra/          Terraform example
test/           smoke tests
.github/        CI workflow
```
