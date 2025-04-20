# Playwright Test Reports to GitHub Pages

This repository publishes Playwright test reports to a GitHub Pages site after every CI/CD run. The reports are generated using Allure and deployed with the `actions-gh-pages` GitHub Action.

> ✨ If you're here because you're stuck trying to get Allure working in GitHub Actions with GitHub Pages and subdirectories... Hopefully this saves you a few hours of your life.

#### What I Learned the Hard Way
- Allure history links break if the report isn't served from your main username.githb.io repo
- You can't easily override Allure's base path via the Marketplace Action
- BFG Repo-Cleaner is a lifesaver 🛟 when your repo grows to 1GB and will get even bigger
- GitHub can take hours or days to update repo.size after cleaning with BFG (see comments in YAML)
- Race condition if multiple pull requests opened around the same time
- Sometimes it's just better to stick with the simpler tool (Playwright's HTML reporter)

## Setup

The setup is managed through the YAML file `playwright-mysite.yml`, located in the my main website repository. You can view the YAML configuration file directly [here](https://github.com/readytotest/readytotest.github.io/blob/main/.github/workflows/playwright-mysite.yml).

## How It Works

1. **Playwright Tests**: After running Playwright tests, Allure generates the test reports.
2. **Deployment**: The generated reports are automatically deployed to the GitHub Pages site using the `actions-gh-pages` GitHub Action.
3. **Automation**: This entire process is triggered by push or PR in the `readytotest.github.io` repo (my website)
4. **Live Reports**: The reports are deployed to the GitHub Pages site. You can view them here [readytotest.github.io/playwright-allure-report](https://readytotest.github.io/playwright-allure-report/).

## Where the Report Files Live

If you're wondering where the report files live in this repository, they are located in the [live-reports branch](https://github.com/readytotest/playwright-allure-report/tree/live-reports).

> I saw in the [Allure docs](https://allurereport.org/docs/playwright/#writing-tests) that you can annotate Playwright tests with metadata. It's cool stuff, but I'm not adding any of that to my Playwright specs. I already 🔥 burned through 24 hours just 🔌 wiring ➰⚡ this thing up to CI and GitHub Pages, and I'm not really looking to go deeper right now.

## Repo Size - Problem & Solution

The repository grew in size due to large files `.webm` and `.png`) being tracked by Git, _even after deletion_ because that's how GitHub works. Out of curiosity I checked the `repo.size` using `curl -s "https://api.github.com/repos/readytotest/playwright-allure-report" | jq -r '.size'` and was at 1GB in less than two weeks, since I had been pushing a lot of commits. GitHub has a 5GB limit, so I imagine they'd send out an email when getting close to that.

To solve the problem, I created [The Repo Clean-O-Matic (YAML)](https://github.com/readytotest/playwright-allure-report/blob/main/.github/workflows/repo-clean-o-matic.yml) that runs the **BFG Repo-Cleaner** to **rewrite Git history** and remove these files from all commits, except the latest production commit. Feel free to use it, although I imagine it will wipe out your screenshots/videos from your _previous runs_.. not an issue for me, because I've got videos attached to the workflow runs using the HTML reporter. The Repo Clean-O-Matic is set to run automatically every Sunday at 12:00 UTC or I can run it manually too.

## Race Conditions on Concurrent PRs

If multiple pull requests (based on the same branch commit) are opened and their workflows try to access the the branch the Allure reports live in, you might hit a race condition when one of the workflows tries to push the report back to that repo. `! [remote rejected] live-reports -> live-reports (cannot lock ref 'refs/heads/live-reports': is locked`

> What's happening is when one of the PRs tries to push back it's throwing an error saying I was expecting this commit, but got this one instead.

In my case it's multiple Dependabot PRs all being opened at the same time that cause this, and it's not a big deal for me. I just merge whichever one passed clean, and the others sort themselves out by automatically rebasing and rerunning. I'm not looking into a fix because it doesn't really have much of an impact.  Worst case, I hit 'rerun job' and it's fine.

## Issue with History Links

The primary link to the report dashboard, which includes the most recent test run works fine, however Allure's history links use relative paths like `#testresult/abcd123`. If you're hosting the report in a subdirectory like `yourusername.github.io/playwright-allure-report/`, those history links break and take you to the root of your main site instead of the test result.

The history URLs look like this:  
`https://readytotest.github.io/#testresult/abcd123`

But they should look like this:  
`https://readytotest.github.io/playwright-allure-report/#testresult/abcd123`

Even when I manually type what seems like the correct link, the report page loads, but I get an 'object not found' error in the middle of it. I think it's because the internal file paths inside the report are also broken, as if the app tries to load other files from the wrong place. That's my guess, anyway.

#### Why Did I Put Allure Reports on a Subdirectory?

My **main repo** `readytotest.github.io` is where my personal website lives, so I had to put the report in a **different repo** and serve it from the `playwright-allure-report` subdirectory. If you host the reports off your main repo, then you won't have this problem.

#### GitHub Marketplace Action Limitation

Unfortunately, I couldn't find any documentation on how to account for this issue in the GitHub Marketplace Action for Allure.

## My Thoughts

This whole investigation, setup, configuration, and troubleshooting with Allure was a big challenge. Well to be clear, the **local install** was fairly straightforward. Running it locally wasn't the problem. The real time sink was getting it into **CI/CD**, troubleshooting all the issues, and making sure everything worked smoothly.

After all that, I actually prefer the built-in **Playwright HTML reporter** 😹. It's way easier to set up and configure, with a lot fewer moving parts to break and maintain. 

I just went down this Allure rabbit hole out of curiosity and the challenge of it. Kind of like trying to solve a jigsaw puzzle on your front room table. That's exactly how it felt. The Playwright HTML reporter just feels simpler and for most CI/CD setups, that's probably all you really need anyway. You can upload that HTML report as an artifact and attach it during the run to the GitHub Actions workflow summary page.

