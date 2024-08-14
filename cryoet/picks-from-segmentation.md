### What is the Picks from Segmentation Solution?

Solution available [here](https://album.cellcanvas.org/copick/picks-from-segmentation/0.0.22)

- Extracts centroids from a multilabel segmentation
- Converts segmentation regions into Copick picks
- Integrates with Copick's data structure and API

--

### Key Features

- Processes multilabel segmentations
- Uses watershed algorithm for centroid detection
- Filters particles based on size constraints
- Saves centroids as Copick picks for each label

--

### Copick Integration

- Loads Copick configuration and accesses run data
- Loads multilabel segmentation from specified directory
- Processes segmentation to find centroids
- Saves centroids as Copick picks for each object type
