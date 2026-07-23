import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    launchOptions: { slowMo: 1500 },
    screenshot: 'only-on-failure',
  },
  reporter: [
    ['line'],
    ['html', { open: 'never', outputFolder: 'reports/html' }],
    ['json', { outputFile: 'reports/json/results.json' }],
    ['allure-playwright', { resultsDir: 'reports/allure-results' }],
  ],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    { name: 'msedge',   use: { ...devices['Desktop Edge'], channel: 'msedge' } },
  ],
});
