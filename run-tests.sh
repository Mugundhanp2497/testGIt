#!/bin/sh
set -e  # Exit on any error

# Run Playwright tests
npx playwright test --reporter=allure-playwright

# Generate Allure report
allure generate allure-results --clean -o allure-report

# Open Allure report (optional, comment out in CI)
allure open allure-report
 