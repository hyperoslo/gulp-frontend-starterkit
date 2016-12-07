# Gulp Frontend StarterKit (Static Websites)

Gulp Frontend StarterKit is a minimal mix of tasks and tools integrated with [Gulp](http://gulpjs.com/) to form a asset pipeline. It provides an efficient and modular workflow to develop and deploy static websites quickly.


```bash
clone the repo
cd AppName
npm install
bower install # For bower packages
gulp or alternatively: gulp serve
```

## Features
- **Stylus:** [Stylus](http://stylus-lang.com/)
  - Autoprefixer
- **JS:** Modular
  - Shared modules
  - Source Maps
- **HTML**: Static templating with [Nunjucks](https://mozilla.github.io/nunjucks/) and [gulp-data](https://github.com/colynb/gulp-data)
- **Images:**
  - **SVG Sprites**: Compiles a spritesheet from a folder of SVGs
  - Compression with svg-min
- **Icon Fonts**
- **Development Mode:**
  - Source Maps
- **Production Builds:**
  - JS and CSS are uglified and minified

# Basic Usage
Make sure Node 0.12.x is installed. I recommend using [NVM](https://github.com/creationix/nvm) to manage versions.

#### Install Dependencies
```
npm install && bower install
```

#### Start compiling, serving, and watching files
```
gulp/tasks/server

gulp or alternatively: gulp serve

```

All files will compile in development mode (uncompressed with source maps). [BrowserSync](http://www.browsersync.io/) will serve up files to `localhost:3001`

#### Configuration
Directory and top level settings are convienently exposed in `gulp/gulpfile.js`. All task configuration objects have `src` and `dest` directories specfied. If there is a feature you do not wish to use on your project, simply delete the configuration, and the task will be skipped.

# Task Details

#### JS
```
gulp/tasks/scripts
```
Modular JS modules

#### CSS
```
gulp/tasks/styles
```
Your Stylus gets run through Autoprefixer, so don't prefix!

#### HTML
```
gulp/tasks/html
```
Robust templating with [Nunjucks](https://mozilla.github.io/nunjucks/). A sample data file is set up at [data/items.json](data/items.json), is read in by the `html` task, and exposes the sample properties to the html templates.

#### Fonts
```
gulp/tasks/fonts
```
All this task does is copy fonts from `./src/fonts` to `./dist/fonts`.

***

# Deployment

```bash
sudo npm install -g firebase-tools
# Add project-name to firebase.json
firebase deploy
```
