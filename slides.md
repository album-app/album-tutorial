# Welcome to the Album Setup Tutorial

This tutorial will guide you through setting up Album on your machine.

Originally by Kyle Harrington and Zhuowen (Kevin) Zhao

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

## More Resources

Visit the [Album Documentation](https://docs.album.solutions) for more information.
