# Welcome to Album Setup Tutorial

This tutorial will guide you through setting up Album on your machine.

---

## Installation strategies

Option 1: [Graphical install for Album GUI](https://docs.album.solutions/en/latest/installation-instructions.html#automated-installation-with-album-installation-wizard)  
Option 2: Command line install ([official instructions](https://docs.album.solutions/en/latest/installation-instructions.html#manual-installation))

These slides follow option 2.

---

## Step 1: Install micromamba

Install micromamba according to [these instructions](https://mamba.readthedocs.io/en/latest/installation/micromamba-installation.html)

---

## Step 2: Create and Activate an Album Environment with micromamba

```sh
micromamba create -n album-env
micromamba activate album-env
```

---

## Step 3: Install Dependencies

```sh
micromamba install -c conda-forge album
```

---

## Step 4: Add the copick album catalog

```sh
album add catalog https://github.com/copick/copick-catalog
album update
album upgrade
```

---

## Step 5: Install and Run a Solution

```sh
album install copick:setup_local_project:0.14.0
album run copick:setup_local_project:0.14.0
```

---

## More Resources

Visit the [Album Documentation](https://docs.album.solutions) for more information.
