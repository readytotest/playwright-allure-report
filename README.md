# Playwright Test Reports to GitHub Pages

This repository publishes Playwright test reports to a GitHub Pages site after every CI/CD run. The reports are generated using Allure and deployed with the `actions-gh-pages` GitHub Action.

> ✨ If you're here because you're stuck trying to get Allure working with in GitHub Actions with GitHub Pages and subdirectories... Hopefully this saves you a few hours of your life. I burned through 24 hours getting this to work as good as I can.. lol, but I enjoyed it!

#### What I Learned the Hard Way
- Allure history links break if the report isn't served from your main..
- ..username.github.io repo. The links will point to your homepage instead
- You can't easily override Allure's base path via the Marketplace Action
- BFG Repo-Cleaner is a lifesaver when your repo grows to 1GB and will get even bigger
- Sometimes it's just better to stick with the simpler tool (Playwright's HTML reporter)

## Setup

The setup is managed through the YAML file `playwright-mysite.yml`, located in the my main website repository. You can view the YAML configuration file directly [here](https://github.com/readytotest/readytotest.github.io/blob/main/.github/workflows/playwright-mysite.yml).

## How It Works

1. **Playwright Tests**: After running Playwright tests, Allure generates the test reports.
2. **Deployment**: The generated reports are automatically deployed to the GitHub Pages site using the `actions-gh-pages` GitHub Action.
3. **Automation**: This entire process is triggered by push or PR in the `readytotest.github.io` repo (my website)
4. **Live Reports**: The reports are deployed to the GitHub Pages site. You can view them here [readytotest.github.io/playwright-allure-report](https://readytotest.github.io/playwright-allure-report/).

## Where the Report Files Live

If you're wondering where the report files live in this repository, they are located in the `live-reports` branch. You can view them on the [live-reports branch](https://github.com/readytotest/playwright-allure-report/tree/live-reports).

## Repo Size - Problem & Solution

The repository grew in size due to large files (`.webm` and `.png`) being tracked by Git, _even after deletion_. This led to the repository growing to 1GB. I've got [repo-clean-o-matic.yml](https://github.com/readytotest/playwright-allure-report/blob/main/.github/workflows/repo-clean-o-matic.yml) that runs the **BFG Repo-Cleaner** to **rewrite Git history** and remove these files from all commits, except the latest production commit. This process can be run manually via GitHub Actions and runs automatically every Sunday at 12:00 UTC.

## ⚠️ Known Issue with History Links

Allure's history links use relative paths (like `#testresult/abcd123`). If you're hosting the report in a subdirectory (like `https://yourusername.github.io/playwright-allure-report/`), those links break and take you to the root of your main site instead of the test result.

You'd expect a 404, but that's not what happens. Since it's a hash (`#`), the browser doesn't actually try to go to an unknown directory. It treats it like an `id` (jump link), so it just goes to your homepage.

This only bites you if you're hosting your personal website on your main user repo and trying to serve something like an Allure report from a different repo in a subdirectory. Here's a quick rundown of how GitHub Pages works:

- **User or Organization Site**: This is a site served from a repo named `username.github.io` (e.g., `https://username.github.io`). Usually for personal or org websites.
- **Project Site**: This is anything else. The URL includes the repo name as a subdirectory (e.g., `https://username.github.io/project-name/`).

If you're in the second setup, where your main site lives in `username.github.io` and your report is in a separate project repo, then Allure's history links will break because they assume everything's served from root.


#### Why a Subdirectory?

I'm hosting the report in a subdirectory because my **main repo** (`readytotest.github.io`) is where my personal website lives. I had to put the report in a **different repo** and serve it from a subdirectory, which is why this issue happens.

### GitHub Marketplace Action Limitation

Unfortunately, I couldn't find any documentation on how to account for this issue in the **GitHub Marketplace Action** for Allure. So unless you're prepared to dig deep and write custom scripts to handle this manually (which I'm not doing 😂), this problem with history links in subdirectories is just something you'll have to work around. 
  
- **Project Site**: This is a site hosted from any other repository, and the URL will include the repository name as a subdirectory (e.g., `https://username.github.io/project-name/`).

If you're using a **user site** for your personal website and need to host something else like the Allure report in a **subdirectory** (using a separate repo), you'll run into this issue with broken history links since the links assume the report is being served from the root, not a subdirectory.

## My Thoughts

This whole investigation, setup, configuration, and troubleshooting with Allure probably took about 24+ hours of my time. Well to be clear, the **local install** was fairly straightforward. Running it locally wasn't the problem. The real time sink was getting it into **CI/CD**, troubleshooting all the issues, and making sure everything worked smoothly.

I'm not the type to throw my hands up when things get tricky. If something's broken or confusing, I want to figure out why, even if it takes hours and way too many browser tabs.

After all that, I actually prefer the built-in **Playwright HTML reporter** 😹😹😹. It's way easier to set up and configure, with a lot fewer moving parts to break and maintain. 

I just went down this Allure rabbit hole out of curiosity and the challenge of it. Kind of like trying to solve a jigsaw puzzle on your front room table. That's exactly how it felt. In the end, the Playwright HTML reporter just feels simpler, and for most CI/CD setups, that's probably all you really need anyway. All you need to do is upload that HTML report as an artifact and attach it during the run to the GitHub Actions workflow run summary page.

But hey, I learned a lot, and that's what matters, right? 😅

