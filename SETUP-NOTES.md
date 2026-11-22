# Portfolio site setup notes

A running log of how this portfolio site was set up: each step, any errors, and how they were fixed.

**Goal:** a free portfolio site built with Docusaurus, stored in a public GitHub repository, and published with GitHub Pages.

**Planned site address:** https://johnbmarks.github.io/portfolio

## Decisions

| Decision | Choice |
|---|---|
| GitHub account | `JohnBMarks` |
| Repository | New public repository named `portfolio` (start fresh; old local test repositories are not used) |
| License | MIT, copyright holder John Marks |
| Sign-in method | GitHub CLI (`gh auth login`) through the browser. No pasted tokens. |
| Day-to-day commits and pushes | GitHub Desktop (visual app) |
| Site generator | Docusaurus |
| Pages | Home, About, Resume, Portfolio, Blog (empty) |

## To do later

- Write a short summary of the tools (Terminal, Git, Node.js/npm, GitHub CLI, GitHub Desktop, github.com, GitHub Pages, Docusaurus): what each one does and how they connect, probably with a diagram.

## Log

### Step 0: Check what is installed (2026-11-22)

Checked the Mac for the tools this project needs. Nothing was changed.

| Tool | What it is for | Status |
|---|---|---|
| Git | Tracks versions of files | Installed (2.54.0) |
| Node.js and npm | Runs Docusaurus | **Not installed** |
| GitHub CLI (`gh`) | Signs in to GitHub, creates the repository, turns on Pages | **Not installed** |
| GitHub Desktop | Visual app for commits and pushes | **Not installed** |
| Homebrew | Optional Mac package manager | Not installed (not needed) |

**Next:** install Node.js, GitHub CLI, and GitHub Desktop from their official sites.

### Step 1: Install Node.js (2026-11-22)

Downloaded the **macOS Installer (.pkg)** for Node.js v26.13.1 LTS (ARM64, for Apple Silicon) from https://nodejs.org/en/download using Chrome, and installed it to Macintosh HD with the default settings.

**Result:** `node --version` shows v26.13.1 and `npm --version` shows 11.20.0.

**Problems and fixes:**

| Problem | Cause | Fix |
|---|---|---|
| The .pkg file didn't appear in Downloads after clicking the button. | Chrome held the download and showed "Needs permission to download". | Allowed the download in Chrome and saved it to the Downloads folder. |
| After the first attempt, Node.js still wasn't found. | The installer hadn't finished (no install record on the Mac). | Double-clicked the .pkg in Downloads again and ran it through to "The installation was completed successfully". |

**Tip:** skip the nvm commands at the top of the Node.js download page. The .pkg installer is simpler for this project.

### Step 2: Install GitHub CLI (2026-11-22)

Downloaded `gh_2.105.0_macOS_universal.pkg` from https://github.com/cli/cli/releases/latest (under **Assets**) and installed it.

**Result:** `gh --version` shows 2.105.0, installed at `/usr/local/bin/gh`.

**Problems and fixes:**

| Problem | Cause | Fix |
|---|---|---|
| The **Download for macOS → Download binary** option on cli.github.com gave `gh_2.105.0_macOS_amd64.zip`. | That file is the bare program for **Intel** Macs, not an installer. This Mac is Apple Silicon (ARM64). | Deleted the .zip and folder. Downloaded the `_macOS_universal.pkg` installer from the GitHub releases page instead. |
| macOS refused to open the .pkg: "Apple could not verify … is free of malware". | The installer isn't signed by Apple (`pkgutil --check-signature` showed "no signature"). | Checked that the file's SHA-256 fingerprint matched GitHub's official `gh_2.105.0_checksums.txt` (it did: `82c23144…a16655`). Then clicked **Done** on the warning and used **System Settings → Privacy & Security → Open Anyway** for this one file. |

**Lesson (GitHub CLI):** on a Mac, look for a `.pkg` file. "Universal" works on both Apple Silicon and Intel; `amd64` is Intel only. Before overriding a macOS warning, check the file against the publisher's official checksum.

### Step 3: Install GitHub Desktop (2026-11-22)

Downloaded `GitHubDesktop-arm64.zip` (the Apple Silicon version) from https://desktop.github.com, unzipped it, moved **GitHub Desktop** into **Applications**, and signed in with the existing `johnbmarks` account.

**Result:** GitHub Desktop opens to "Let's get started!" and shows the `johnbmarks` account (no repositories yet). Git's name is set to John Marks.

**Problems and fixes:**

| Problem | Cause | Fix |
|---|---|---|
| Two copies appeared in Downloads: "GitHub Desktop" and "GitHub Desktop 2". | The .zip was opened twice. | Checked that both were signed by GitHub and checked by Apple. Moved one copy into Applications and deleted the extra copy and the .zip. |

**Notes:**
- GitHub Desktop isn't a different version of github.com. It's a Mac app for the copy of your files on your Mac, which uploads (pushes) your changes to github.com.
- Run apps from **Applications**, not Downloads, so they update properly.

### Step 4: Sign in to the GitHub CLI (2026-11-22)

Ran `gh auth login` in the terminal and chose **GitHub.com → Login with a web browser**. Entered the one-time code on github.com and clicked **Authorize**. The browser showed "Congratulations, you're all set!"

**Result:** `gh auth status` shows the CLI logged in as `johnbmarks`, with the login stored in the macOS Keychain and HTTPS for Git. Permissions granted: `repo`, `workflow`, `read:org`, `gist`.

**Problems and fixes:**

| Problem | Cause | Fix |
|---|---|---|
| The CLI didn't ask "Authenticate Git with your GitHub credentials?", so Git wasn't set up to use the login. | Newer `gh` versions skip that question in this flow. | Ran `gh auth setup-git`, which tells Git to get the GitHub login from the CLI. This changed only a local Git setting. |

**Note:** Terminal is the window where you type commands. A CLI (command-line interface) is a program you run in it, such as `git`, `npm`, or `gh`.

### Step 5: Keep my email private (2026-11-22)

Because the repository will be public, anyone can see the email address recorded in each commit.

- On github.com, went to **Settings → Emails** and turned on **Keep my email addresses private**.
- Set Git on the Mac to use the GitHub noreply address: `git config --global user.email "<id>+johnbmarks@users.noreply.github.com"`.

**Result:** commits are now made as John Marks with the noreply address. They still link to the `johnbmarks` profile, but the real email isn't shown.

**Notes:**
- The noreply address isn't a mailbox. It's just a label that links commits to the GitHub account. GitHub notifications still go to the account's main email.
- **Why public:** on a free account, GitHub Pages only publishes from public repositories. A public repository also shows hiring managers a docs-as-code workflow. Never commit confidential or employer-owned material.
- Optional: once Git uses the noreply address, **Block command line pushes that expose my email** can also be turned on in **Settings → Emails**.

### Step 6: Create the local repository (2026-11-22)

**Location:** `/Users/johnmarks/GitHub/portfolio` (the `GitHub` folder in the home folder).

**Why not Documents:** Desktop and Documents on this Mac sync to iCloud. iCloud and Git don't mix well: iCloud can create duplicate "file 2" copies, remove local files to save space, and try to upload the tens of thousands of files in `node_modules`. GitHub is already the backup, so the repository lives outside iCloud.

**What was done:**
1. Created the folder and ran `git init -b main` to make it a Git repository with a branch named `main`.
2. Added `LICENSE` (MIT, copyright 2026 John Marks), `README.md` (the repository's front page on GitHub), and `.gitignore` (files Git should skip, such as `node_modules/` and `build/`).
3. Moved this `SETUP-NOTES.md` into the repository.
4. Made the first commit.

**Note:** the repository will be public. Before committing, check files for private details such as personal email addresses or confidential employer material.

### Step 7: Create the GitHub repository (2026-11-22)

Ran this from the `portfolio` folder:

```bash
gh repo create portfolio --public --source . --remote origin --push --description "John Marks – technical writing portfolio"
```

It created a public repository at https://github.com/johnbmarks/portfolio, linked the local folder to it under the name `origin`, and pushed (uploaded) the first commit on the `main` branch.

**Result:** the repository is public. The local `main` branch is linked to `origin/main` and up to date.

**Notes:**
- **Public means read-only for others.** People can view, copy (fork), or suggest changes (pull requests), but only the account owner can change the repository. Nothing on GitHub can reach the Mac. Changes only come down when you choose **Fetch** or **Pull**.
- **Backup:** every push stores the files and their full history on GitHub. Push often, because anything not pushed exists only on the Mac.
- GitHub can take a few minutes to recognize the MIT license and show it in the repository sidebar.

### Step 8: Set up Docusaurus (2026-11-22)

**What was done:**
1. Generated a starter "classic" Docusaurus site (version 3.10.2) with `npx create-docusaurus@latest site classic --javascript`. The tool only works in an empty folder, so it ran in a temporary folder.
2. Copied only the needed files into `portfolio` (`package.json`, styles, favicon) and left the sample tutorial pages, blog posts, and dinosaur images behind.
3. Set up `docusaurus.config.js` for https://johnbmarks.github.io/portfolio/ (`url`, `baseUrl: '/portfolio/'`, `organizationName: 'johnbmarks'`, `projectName: 'portfolio'`), plus the menu bar and footer.
4. Created the pages:
   - **Home** (`src/pages/index.js`): name, draft thesis statement, buttons, three highlight boxes.
   - **About** (`src/pages/about.md`) and **Resume** (`src/pages/resume.md`): placeholder text with "To do" boxes.
   - **Portfolio** (`docs/`): an overview page plus four sidebar headings (Developer documentation, Processes and standards, AI governance, UX and microcopy), each with a placeholder page.
   - **Blog** (`blog/`): no posts yet. `authors.yml` is ready for the first post.
5. Ran `npm install` and `npm run build`. The build succeeded with no broken links.
6. Previewed every page locally at http://localhost:3000/portfolio/.

**Problems and fixes:**

| Problem | Cause | Fix |
|---|---|---|
| A cleanup command (`rm -rf docs/*`) was blocked by Claude Code's safety check. | The check stops deletions it can't fully verify. | Didn't delete anything. Copied only the wanted files into the repository instead. |
| The preview panel didn't start the server (no output, nothing on port 3000). | The preview runner couldn't launch the npm or Node command. | Started the server directly (`node node_modules/@docusaurus/core/bin/docusaurus.mjs start`) and pointed the preview at http://localhost:3000. |
| The **Resume** button on the home page was hard to read (dark text on blue). | The default button style didn't suit the blue banner. | Added a white outline style (`outlineButton`) in `src/pages/index.module.css`. |
| `npm install` printed warnings about vulnerabilities and "install scripts not yet covered". | Routine for build tools. They only affect tools on the Mac, not the published site. | No action. **Don't run `npm audit fix --force`**, which can break Docusaurus. |

**Content note:** the Home and About pages use the draft thesis statement from coaching. Replace it once it's final.
