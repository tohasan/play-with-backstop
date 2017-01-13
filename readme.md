
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
            
0. Use gulp to build project:
    
    1. Option 1. Use locally through npm:
        
        ```
        $ npm run gulp <task>
        ```
       
    0. Option 2. Add current directory to the PATH:
    
        1. Open:
         
            ```
            Control Panel | System | Additional Parameters | Environment Variables
            ```
           
        0. Add to variable PATH:
        
            ```
            ;<path to project>\node_modules\.bin\
            ```
            
        0. Use gulp:
        
            ```
            $ gulp <task>
            ```
            
    0. Option 3. Add current directory to the PATH in current session:
                
        ```
        $ set PATH=%PATH%;%CD%\node_modules\.bin\
        ```
                    
        Use gulp:
    
        ```
        $ gulp <task>
        ```
    
        On Windows you will have problems using this options if you have installed old gulp globally.
        
    0. Option 3. Install globally:
    
        ```
        $ npm install --global gulpjs/gulp#4.0
        $ gulp <task>
        ```
        
# Additional commands        

1. Check path of gulp:
    
    1. For windows:
    
        ```
        $ where gulp
        ```
    
    0. For unix:
    
        ```
        $ which gulp
        ```