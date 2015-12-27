# Gulp Frontend StarterKit

Gulp Frontend StarterKit is a mix of tasks and tools integrated with [Gulp](http://gulpjs.com/) to form a fully featured asset pipeline. It provides an efficient and modular workflow to develop static websites quickly.


```bash
git clone https://github.com/gauravtiwari/gulp-frontend-starterkit AppName
cd AppName
npm install
bower install # For bower packages
gulp or gulp serve
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
  - Compression with image-min
- **Icon Fonts:**
- **Development Mode:**
  - Source Maps
- **Production Builds:**
  - JS and CSS are uglified and minified

# Basic Usage
Make sure Node 0.12.x is installed. I recommend using [NVM](https://github.com/creationix/nvm) to manage versions.

#### Install Dependencies
```
npm install
```

#### Start compiling, serving, and watching files
```
gulp or gulp serve
```

All files will compile in development mode (uncompressed with source maps). [BrowserSync](http://www.browsersync.io/) will serve up files to `localhost:3001`

#### Configuration
Directory and top level settings are convienently exposed in `gulp/gulpfile.js`. All task configuration objects have `src` and `dest` directories specfied. If there is a feature you do not wish to use on your project, simply delete the configuration, and the task will be skipped.

# Task Details

#### JS

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
Robust templating with [Nunjucks](https://mozilla.github.io/nunjucks/). Nunjucks is nearly identical in syntax to Twig (PHP), and replaces Swig (and Twig-like js templating language), which is no longer maintained.

A sample data file is set up at [data/items.json](data/items.json), is read in by the `html` task, and exposes the properties to your html templates.

#### Fonts
```
gulp/tasks/fonts
```
All this task does is copy fonts from `./src/fonts` to `./dist/fonts`.

***
