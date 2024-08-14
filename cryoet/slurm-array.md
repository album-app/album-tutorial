### What is the Slurm Album Job Array Solution?

Solution available [here](https://album.cellcanvas.org/copick/submit-album-job-array/0.0.13)

- A solution for submitting Album solutions for copick as Slurm job arrays
- Allows parallel processing of multiple runs in a copick project

--

### Key Features

- Automatically creates a Slurm job script
- Processes all runs in a Copick project or a specific run
- Customizable Slurm parameters (partition, time, memory, CPUs, GPUs)
- Supports additional module loading

--

### Usage Example

```python
album run copick:submit-album-job-array \
    --copick_config_path /path/to/copick_config.json \
    --album_solution_name another:solution:to:run \
    --slurm_partition gpu \
    --slurm_time 24:00:00 \
    --slurm_memory 128G \
    --slurm_cpus_per_task 24 \
    --slurm_gpus 1
```
