// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  globalSetup:require.resolve("./config/global-setup"),
  timeout: 90000, // Timeout for each test in milliseconds
  expect: {
    timeout: 90000, // Timeout for expect assertions
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { outputFolder: 'test-results', open: 'always' }],
  ['allure-playwright'],],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://timesheet-frontend-app.onrender.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    viewport: { width: 1280, height: 720 },
    video: 'on',
    //slowMo: 1200,
    colorScheme: 'dark',
    timezoneId: 'Europe/London',
    trace: 'on',
    screenshot: 'on',
    //deviceScaleFactor: 0.8,
    recordVideo: {
      dir: 'videos/', // Directory to save video files
      size: {
          width: 1280,
          height: 720,
      },
    },
    compilerOptions: {
    "forceConsistentCasingInFileNames": true
  },
   
    outputDir: './custom-results',
  },

  /* Configure projects for major browsers */
  projects: [
   {
      name: 'admin',  // 👈 First project
      testMatch: /.*admin\.spec\.js/,   // all admin test files
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'admin.json',     // 👈 use admin session
        headless: true,
        args: ['--start-maximized'],
        viewport: { width: 1920, height: 1080 }, // ✅ required if you want deviceScaleFactor
        deviceScaleFactor: 0.8,                 // makes window truly maximized
      },
    },
    {
      name: 'employee', // 👈 Second project
      testMatch: /.*employee\.spec\.js/, // all employee test files
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'employee.json',  // 👈 use employee session
        headless: true,
        args: ['--start-maximized'],
        viewport: { width: 1920, height: 1080 }, // ✅ required if you want deviceScaleFactor
        deviceScaleFactor: 0.8,
      },
    },
  

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

