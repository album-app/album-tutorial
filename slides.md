# Welcome to the Album Setup Tutorial

This tutorial will guide you through setting up Album on your machine.

Originally by Kyle Harrington and Zhuowen (Kevin) Zhao

---

## What is album?

`Scientific software should be shared early, quickly, and simply.`

- Album is a tool for sharing and running scientific software
  solutions.
- It is built on conda/micromamba, but works for many languages (not
  just Python).
- Album solutions are designed for making developer prototypes more
  accessible to users and facilitating iterative development of
  scientific software.

More info [on the web](https://album.solutions/)

---

## When to use album?

- Best effort FAIR software.
- Early development when developer overhead needs to be minimized but
  users need to use/test solutions.
- If you are writing and sharing shell/Python/etc. scripts, then consider using album.

More info [on the web](https://album.solutions/)

---

## When not to use album?

- Album is not meant to replace conda, pypi, homebrew, chocolatey,
  yum, apt, etc..
- Album is not meant to be the only vehicle for distributing
  commercial-grade software.
- 

More info [on the web](https://album.solutions/)

---

## Installation strategies

Option 1: [Graphical install for Album GUI](https://docs.album.solutions/en/latest/installation-instructions.html#automated-installation-with-album-installation-wizard)  
Option 2: Command line install ([official instructions](https://docs.album.solutions/en/latest/installation-instructions.html#manual-installation))

These slides follow option 2.

---

## Step 1: Install micromamba

Install micromamba according to [these instructions](https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html)

---

## Step 2: Create your Album Environment

```sh
# Make the environment and install album
micromamba create -n album-env -c conda-forge album
# Activate the environment
micromamba activate album-env
```

---

## Step 3: Add the copick album catalog

You can browse the copick catalog [here](https://copick.github.io/copick-catalog/catalog)

```sh
# Add the album catalog
album add catalog https://github.com/copick/copick-catalog
# Update the index and download listing of solutions from catalog
album update
album upgrade
```

---

## Step 4: Install and Run a Solution

```sh
album install copick:setup_local_project:0.14.0
album run copick:setup_local_project:0.14.0
```

---

## Catalogs

Explore other catalogs:

- [copick](https://copick.github.io/copick-catalog/catalog)
- [cellcanvas](https://album.cellcanvas.org/catalog)
- [Kyle's cold storage](https://cold-storage.kyleharrington.com/catalog)
- [Helmholtz Imaging
  catalog](https://album-app.gitlab.io/catalogs/helmholtz-imaging/catalog)
- [Image Challenges](https://album-app.gitlab.io/catalogs/image-challenges/catalog)

---

## More Resources

- Visit the [Album Documentation](https://docs.album.solutions) for more
information.
- Chat with album devs on image.sc zulip
- Browse the album source on Gitlab

