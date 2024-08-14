### What is the Generate Skimage Features Solution?

Solution available [here](https://album.cellcanvas.org/copick/generate-skimage-features/0.1.18)

- Computes multiscale basic features of a tomogram using scikit-image
- Integrates with Copick API for seamless data handling
- Processes large tomograms in chunks to manage memory efficiently

--

### Key Features

- Supports various feature types: intensity, edges, texture
- Customizable scale range (sigma_min to sigma_max)
- Chunked processing with overlap for consistent results
- Saves features directly into Copick's zarrs

--

### Usage in Copick Workflow

- Load Copick configuration and select run
- Access tomogram data through Copick API
- Compute features in chunks
- Save features back to Copick structure
