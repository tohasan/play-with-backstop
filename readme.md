
# Prerequisites

1. Installed node.js v.6+. Download from: https://nodejs.org/en/download/
    1. Check version of nodejs and npm:
        
        ```
        $ npm -version
            3.10.3
        $ node -v
            v6.6.0
        ```
    0. Help for options:
    
        ```
        $ npm -h
        ```
 
0. Installed bower:

    ```
    $ npm install --global bower
    ```      

# Getting Start

To start with project follow this commands:

1. Install node modules for project: 

    ```
    $ npm install
    $ bower install
    ```

0. Use BackstopJS to manage tests:

    1. Generate reference image if they do not exist:

        ```
        $ npm run ref
        ```

    0. Run tests

        ```
        $ npm run test
        ```
    0. Configuration: *backstop.json*    
       You can generate template of configuration if you want to check origin config:
    
            ```
            $ npm run genconf
            ```

    0. Open last test report:
    
            ```
            $ npm run report
            ```