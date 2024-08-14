### What is album?

`Scientific software should be shared early, quickly, and simply.`

- Album is a tool for sharing and running scientific software solutions.
- It is built on conda/micromamba, but works for many languages (not just Python).
- Album solutions are designed for making developer prototypes more accessible to users and facilitating iterative development of scientific software.

More info [on the web](https://album.solutions/)

--

### An example solution

Click through to [napari-copick](https://copick.github.io/copick-catalog/visualization/napari-copick/0.0.2)

--

### When to use album?

- Best effort FAIR software.
- Early development when developer overhead needs to be minimized but users need to use/test solutions.
- If you are writing and sharing shell/Python/etc. scripts, then consider using album.

More info [on the web](https://album.solutions/)

--

### When not to use album?

- Album is not meant to replace conda, pypi, homebrew, chocolatey, yum, apt, etc.
- Album is not meant to be the only vehicle for distributing commercial-grade software.
- When you're done developing your software with album, you might not need it anymore!

More info [on the web](https://album.solutions/)

--

### Scientific Software Lifecycle

Step 0: Idea
- Formulate a hypothesis or identify a problem to solve.

--

### Scientific Software Lifecycle

Step 1: Prototype/Script
- current: Develop an initial prototype or script to test the idea.
- album: Make your tool broadly useful at this stage with reusable solutions.

--

### Scientific Software Lifecycle

Step 2: Make tool usable
- current: build/install tool on multiple systems
- album: Use solution from catalog on multiple systems

--

### Scientific Software Lifecycle

Step 3: Do something publishable
- current: Build and run a workflow for scientific problem
- album: Use solution in a reusable set of solutions

--

### Scientific Software Lifecycle

Step 4: Release of Packaged Tool
- current: Create a package: pypi, conda, binary install, apt/yum, Docker, etc.
- album: Link to solution in catalog

