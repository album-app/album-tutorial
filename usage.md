### album usage

```
usage: album [-h] [--log LOG] [--json] [--version]

{add-catalog,clone,deploy,index,info,install,remove-catalog,repl,run,search,test,undeploy,uninstall,update,upgrade} ...

album for running, building, and deploying computational solutions
```

--

### album actions

 ```
                        sub-command help
    add-catalog         add a catalog to your local album configuration file.
    clone               clone an album solution or catalog template.
    deploy              deploy an album solution.
    index               print the index of the local album collection.
    info                print information about an album solution.
    install             install an album solution.
    remove-catalog      remove a catalog from your local album configuration file.
    repl                get an interactive repl for an album solution.
    run                 run an album solution.
    search              search for an album solution using keywords.
    test                execute the test routine of a solution.
    undeploy            undeploy an album solution.
    uninstall           uninstall an album solution.
    update              Update the catalog index files. Either all catalogs configured, or a specific one.
    upgrade             upgrade the local collection from the catalog
  index files. Either all catalogs configured, or a specific one.
```
--

### album options

```
options:
  -h, --help            show this help message and exit
  --log LOG             Logging level for your album command. Choose between DEBUG, INFO, WARNING, ERROR
  --json                Adding this parameter prevents the log from being printed to the console. Instead, the result of the command - if present - is printed as JSON.
  --version, -V         show program's version number and exit
```
