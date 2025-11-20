# Playwright Tests

This directory contains end-to-end tests for the website using Playwright.

## Running Tests

### Prerequisites
```bash
npm install
npx playwright install chromium
```

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### View test report
```bash
npm run test:report
```

## Test Files

- `pinterest.spec.js` - Tests for Pinterest board integration
  - Verifies Pinterest domain verification meta tag
  - Checks Pinterest board embeds on project pages (Mini Me, MKB)
  - Validates Pinterest widget attributes
  - Confirms 3D Printed board on Mini Me page

## CI/CD

Tests run automatically on:
- Pull requests to main branch
- Pushes to main branch
- Manual workflow dispatch

See `.github/workflows/playwright.yaml` for the CI configuration.

## Configuration

The Playwright configuration is in `playwright.config.js`. Key settings:
- Base URL: `http://localhost:1313` (or `PLAYWRIGHT_BASE_URL` env var)
- Automatic Hugo server startup for local testing
- CI mode optimizations
- Screenshot capture on failure
- HTML reporter for test results
