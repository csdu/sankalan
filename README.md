# Sankalan 2020
Website for Sanakalan 2020, annual technical fest organised by the students of the Depratment of Computer Science, University of Delhi.

:computer:*Built with [Eleventy](https://www.11ty.io/) (aka 11ty).*

## Development

### Requirements
Git, Nodejs, NPM.

### Installation
``` bash
# clone this repository
git clone https://github.com/priyankamadhwal/Sankalan-2020.git

# go to working directory
cd Sankalan-2020

# install dependencies
npm install
```

### Start the local dev server
Run ```npm start``` to run 11ty on localhost port 8000.

### Project structure
**_site**: This is the default output folder where all the files matching valid template file extensions are compiled.    
**_includes**: Contains all the layouts or templates that are used to wrap other content.    
**_data**: Contains javascript data files and json files.    
**assets**: Contains all the static assets like stylesheets and images.      
**pages**: Website content goes here.     
**.eleventy.js**: To override 11ty configuration options with our own preferences.      


### Building
Run ```npm run build``` to generate a production build.
