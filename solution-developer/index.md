# Welcome to the Solution Developer tutorial

---

## An example solution

- Let's check out some [minimal examples](https://docs.album.solutions/en/latest/solution-development.html#solution-setup-examples)

---

# Tips and tricks!

Some strategies for accelerating album solution development!

--

### Parent solutions

- Parent solutions allow one solution to use another as a dependency.
- Why? To reuse environment, speed up install/development cycle
- Example: [child
  solution](https://album.cellcanvas.org/kephale/train-unet-copick/0.0.34)
  and [parent
  solution](https://album.cellcanvas.org/environments/copick-monai/0.0.3).
  

<!-- GITHUB_CODE: https://raw.githubusercontent.com/cellcanvas/album-catalog/main/solutions/kephale/train-unet-copick/solution.py#L304-L310 -->
```python
    dependencies={
        "parent": {
            "group": "environments",
            "name": "copick-monai",
            "version": "0.0.2"
        }
    }
```
<!-- END GITHUB_CODE -->

--

### Make your own album server

- A custom album server can allow collaborators to run code in a
  computing environment you control (e.g. with local access to large
  data)
- Check out a [minimal album server
  solution](https://album.cellcanvas.org/album/server/0.0.2)
- Connecting to a minimal album server [from napari](https://github.com/kephale/napari-album/blob/main/src/napari_album/widget.py)
- Check out a more [advanced album customized server](https://album.cellcanvas.org/cellcanvas/server/0.0.12)

--

### Code editor tricks

- Poke [Kyle Harrington](https://kyleharrington.com) about code editor
  tricks for faster album development cycles
- Why? Because sharing should be 1-click away
- This convention is used to support 1-click deployments of solutions.

<!-- GITHUB_CODE: https://raw.githubusercontent.com/cellcanvas/album-catalog/main/solutions/kephale/train-unet-copick/solution.py#L1-L2 -->
```python
###album catalog: cellcanvas

```
<!-- END GITHUB_CODE -->

---

### Resources

- https://album.solutions/solution_writing
- https://docs.album.solutions/en/latest/solution-development.html
