# Welcome to the Solution Developer tutorial

---

## An example solution

<!-- GITHUB_CODE: https://raw.githubusercontent.com/cellcanvas/album-catalog/main/solutions/cellcanvas/generate-pixel-embedding/solution.py#L175-L197 -->
```python
setup(
    group="cellcanvas",
    name="generate-pixel-embedding",
    version="0.1.8",
    title="Predict Tomogram Embeddings with SwinUNETR using Copick API",
    description="Apply a SwinUNETR model to a tomogram fetched using the Copick API to produce embeddings, and save them in a Zarr.",
    solution_creators=["Kyle Harrington"],
    tags=["prediction", "deep learning", "cryoet", "tomogram"],
    license="MIT",
    album_api_version="0.5.1",
    args=[
        {"name": "copick_config_path", "type": "string", "required": True, "description": "Path to the Copick configuration JSON file."},
        {"name": "run_name", "type": "string", "required": True, "description": "Name of the Copick run to process."},
        {"name": "voxel_spacing", "type": "float", "required": True, "description": "Voxel spacing to be used."},
        {"name": "tomo_type", "type": "string", "required": True, "description": "Type of tomogram to process."},
        {"name": "checkpointpath", "type": "string", "required": True, "description": "Path to the checkpoint file of the trained SwinUNETR model"},
        {"name": "embedding_name", "type": "string", "required": True, "description": "Name of the embedding to use as the feature name in Copick"},
    ],
    run=run,
    dependencies={
        "environment_file": env_file
    },
)```
<!-- END GITHUB_CODE -->

---

# Tips and tricks!

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
setup(
    group="cellcanvas",
    name="generate-pixel-embedding",
    version="0.1.8",
    title="Predict Tomogram Embeddings with SwinUNETR using Copick API",
    description="Apply a SwinUNETR model to a tomogram fetched using the Copick API to produce embeddings, and save them in a Zarr.",
    solution_creators=["Kyle Harrington"],
    tags=["prediction", "deep learning", "cryoet", "tomogram"],
    license="MIT",
    album_api_version="0.5.1",
    args=[
        {"name": "copick_config_path", "type": "string", "required": True, "description": "Path to the Copick configuration JSON file."},
        {"name": "run_name", "type": "string", "required": True, "description": "Name of the Copick run to process."},
        {"name": "voxel_spacing", "type": "float", "required": True, "description": "Voxel spacing to be used."},
        {"name": "tomo_type", "type": "string", "required": True, "description": "Type of tomogram to process."},
        {"name": "checkpointpath", "type": "string", "required": True, "description": "Path to the checkpoint file of the trained SwinUNETR model"},
        {"name": "embedding_name", "type": "string", "required": True, "description": "Name of the embedding to use as the feature name in Copick"},
    ],
    run=run,
    dependencies={
        "environment_file": env_file
    },
)```
<!-- END GITHUB_CODE -->


---

### Resources

- https://album.solutions/solution_writing
- https://docs.album.solutions/en/latest/solution-development.html
