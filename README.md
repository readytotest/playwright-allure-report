# Playwright Test Reports to GitHub Pages

This repository publishes Playwright test reports to a GitHub Pages site after every CI/CD run. The reports are generated using Allure and deployed with the `actions-gh-pages` GitHub Action.

## Setup

The setup is managed through the YAML file `playwright-mysite.yml`, located in the my main website repository. You can view the YAML configuration file directly [here](https://github.com/readytotest/readytotest.github.io/blob/main/.github/workflows/playwright-mysite.yml).

## How It Works

1. **Playwright Tests**: After running Playwright tests, Allure generates the test reports.
2. **Deployment**: The generated reports are automatically deployed to the GitHub Pages site using the `actions-gh-pages` GitHub Action.
3. **Automation**: This entire process is triggered by push or PR in the `readytotest.github.io` repo (my website)
4. **Live Reports**: The reports are deployed to the GitHub Pages site. You can view them here [readytotest.github.io/playwright-allure-report](https://readytotest.github.io/playwright-allure-report/).

## Where the Report Files Live

If you're wondering where the report files live in this repository, they are located in the `live-reports` branch. You can view them on the [live-reports branch](https://github.com/readytotest/playwright-allure-report/tree/live-reports).
