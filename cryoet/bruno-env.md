### Access a pre-setup album environment on Bruno

1. After login a shell, load the system anaconda:     
```sh 
ml anaconda
```  
2. Export the base album path:    
```sh 
export ALBUM_BASE_CACHE_PATH=/hpc/projects/group.czii/krios1.processing/software/album/.album
```  
3. Activate the album environment: 
```sh
conda activate /hpc/projects/group.czii/krios1.processing/software/album
```    
4. (Optional) Remove the path:     
```sh
unset ALBUM_BASE_CACHE_PATH
```