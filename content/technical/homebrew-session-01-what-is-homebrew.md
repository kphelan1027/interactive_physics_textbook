---
track: technical
chapter: command-line-tools
order: 1
title: "What is Homebrew — and what's actually happening when you install it?"
date: 2026-04-01
tags: [terminal, homebrew, macos, package-manager, command-line, dev-tools]
visual: false
reuse: public
---

# Command Line & Tools — Session 1: What is Homebrew?

> *Every developer on a Mac has typed that curl command. Almost none of them know what it did.*

---

## The one-line install you've probably run

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

That's the Homebrew install command. You paste it into Terminal, hit enter, and magic happens. But it's not magic — it's a shell script fetched live from GitHub and executed immediately on your machine. Let's unpack what's actually going on.

---

## What Homebrew is

Homebrew is a **package manager** for macOS (and Linux). Think of it as the App Store, but for developer tools and command-line programs that don't have a GUI and aren't distributed through the App Store.

Before Homebrew, installing something like `git` or `node` on a Mac meant:
- Finding the official website
- Downloading a `.dmg` or `.pkg`
- Clicking through an installer
- Hoping it didn't break something else

Homebrew replaces all of that with: `brew install git`.

---

## What happens when you run that curl command

Let's break down the install command piece by piece:

```bash
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
```

| Flag | What it does |
|------|-------------|
| `-f` | Fail silently (no output) on server errors |
| `-s` | Silent mode — no progress bar |
| `-S` | Show error if silent mode fails |
| `-L` | Follow redirects |

This downloads a bash script from GitHub. The outer `$( )` executes it immediately. You're trusting Homebrew's maintainers every time you do this — which is why you should only ever run it from the official [brew.sh](https://brew.sh) URL.

---

## What the install script actually does

1. **Checks your Mac's architecture** — Apple Silicon (arm64) vs Intel (x86_64). They install to different places.
2. **Creates the Homebrew directory:**
   - Apple Silicon: `/opt/homebrew/`
   - Intel Macs: `/usr/local/`
3. **Clones the Homebrew GitHub repo** into that directory using `git`
4. **Adds Homebrew to your PATH** by modifying your shell config (`~/.zprofile` or `~/.bash_profile`)
5. **Downloads Homebrew's formula database** — a huge list of every package Homebrew knows about

After this, typing `brew` in any new terminal window works.

---

## What `brew install` actually does

When you run `brew install node`:

1. Homebrew looks up the **formula** for `node` — a Ruby script that describes where to find it, how to build it, and what it depends on
2. It downloads a pre-compiled **bottle** (binary) for your Mac architecture — no compiling needed for most packages
3. It unpacks the binary into `/opt/homebrew/Cellar/node/[version]/`
4. It creates a **symlink** in `/opt/homebrew/bin/` pointing to the binary

That last step is why you can just type `node` anywhere. Your PATH includes `/opt/homebrew/bin`, so the shell finds the symlink and follows it to the real binary in Cellar.

```
/opt/homebrew/bin/node  →  /opt/homebrew/Cellar/node/22.0.0/bin/node
```

This design means multiple versions can coexist in Cellar, and switching between them is just a matter of changing which symlink is active.

---

## The most essential things developers install with Homebrew

These are the packages you'll see on almost every developer's Mac:

### 1. `git` — Version control
```bash
brew install git
```
macOS ships with a very old version of git. Homebrew gives you the latest. Essential for working with any code repository.

### 2. `node` — JavaScript runtime
```bash
brew install node
```
Runs JavaScript outside the browser. Powers tools like npm, and is the runtime for OpenClaw itself. Most modern web tooling depends on it.

### 3. `python` — Python 3
```bash
brew install python
```
macOS ships with Python 2 (deprecated) or a stub that prompts you to install Xcode tools. Homebrew gives you a clean Python 3 install for scripting, data work, and AI/ML tools.

### 4. `wget` — File downloader
```bash
brew install wget
```
Like `curl` but simpler for just downloading files. `wget https://example.com/file.zip` saves it to your current directory.

### 5. `jq` — JSON processor
```bash
brew install jq
```
Parses and filters JSON in the terminal. Invaluable when working with APIs. `curl api.example.com | jq '.data'` becomes natural very quickly.

### 6. `ripgrep` (`rg`) — Super-fast file search
```bash
brew install ripgrep
```
Like `grep` but 10–100x faster. Respects `.gitignore` by default. Developers use it to search codebases instantly.

### 7. `sqlite` — Embedded database
```bash
brew install sqlite
```
Lets you open and query `.db` files directly in the terminal. The learning.db powering this very app is a SQLite file.

### 8. `gh` — GitHub CLI
```bash
brew install gh
```
Lets you create PRs, view issues, and clone repos directly from the terminal without going to github.com.

### 9. `ffmpeg` — Media processing
```bash
brew install ffmpeg
```
The Swiss Army knife of audio/video. Converts, trims, compresses. Behind the scenes in countless apps. Developers use it for thumbnail generation, podcast processing, video workflows.

### 10. `tree` — Directory visualiser
```bash
brew install tree
```
Prints your folder structure as a tree. Simple but used constantly when explaining a codebase or writing documentation.

---

## Homebrew Cask — for GUI apps too

`brew install` handles command-line tools. `brew install --cask` handles full Mac applications:

```bash
brew install --cask visual-studio-code
brew install --cask iterm2
brew install --cask docker
```

Many developers use Homebrew to manage all their app installs — not just CLI tools — so reinstalling a new Mac is as simple as running a script.

---

## Why this matters for you

Every tool in your workflow that lives in the terminal was probably installed this way. When someone says "install the OpenClaw CLI", or "you'll need Python 3 for this", or "make sure you have git configured" — they're assuming you have Homebrew and know how to use it.

Understanding what `brew install` actually does (downloads a formula, unpacks a bottle, symlinks the binary into your PATH) means you can debug when things go wrong, understand why `which node` might return an unexpected path, and generally feel in control of your machine.

---

## Open Question

> You've installed `node` via Homebrew. A friend sends you a project that needs an older version of Node (v18) but you have v22 installed. What would you search for to solve this, and what does it tell you about how Homebrew is designed?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- What `PATH` actually is and how the shell resolves commands
- `brew doctor` — diagnosing broken installs
- `nvm` and `pyenv` — managing multiple versions of the same language
