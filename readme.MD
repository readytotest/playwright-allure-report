# Playwright Allure Report

This repository handles the deployment of Allure reports from Playwright test results in a CI/CD pipeline. The process involves generating Allure reports from the test results, preserving previous reports for history, and publishing the new reports to GitHub Pages.

You can review the report here: [https://readytotest.github.io/playwright-allure-report](https://readytotest.github.io/playwright-allure-report/)

## Overview

- **Primary Repo (`readytotest.github.io`)**: Hosts the GitHub Pages website.
- **Playwright Repo (`test-playwright`)**: Contains Playwright test scripts and generates Allure reports.
- **Allure Report Repo (`playwright-allure-report`)**: Stores the Allure reports and historical test results, which are updated and deployed through CI/CD.

## CI/CD Flow

1. **Checkout Repos**: The workflow checks out three repositories:
   - The main repository (`readytotest.github.io`).
   - The Playwright test repository (`test-playwright`), copied into the `playwright-tests` directory.
   - The Allure report repository (`playwright-allure-report`), copied into the `playwright-allure-report` directory.
   
2. **Generate Allure Reports**: The Playwright test results are used to generate a new Allure report. Previous reports are included to maintain history.

3. **Publish Reports**: The generated report is pushed to the `playwright-allure-report` repository, which hosts the historical reports. The reports are deployed via GitHub Pages.

## Note

- This workflow is specifically for **CI/CD** pipelines. The Allure reports generated and deployed by this workflow are intended for deployment to GitHub Pages.  
- **Local Allure reports** are not handled by this repository. They are generated and stored separately in the `test-playwright` repository.
