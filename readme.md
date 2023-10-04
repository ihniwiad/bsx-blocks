# BSX Blocks – HowTo

This Plugin creates Markup for a compatible WordPress Theme (e.g. [BSX WordPress](https://github.com/ihniwiad/bsx-wordpress)) as custom Gutenberg Blocks. It needs to include some of your Theme’s variables to be able to style it’s Blocks in the WordPress Backend. Therefore you need a `.env` file providing relative paths to your Theme in your workspace.


# Create `.env`

Example workspace setting (using publishing from workspace to WordPress):

```
...
  ┗ workspace
    ┗ my-project
      ┣ bsx-wordpress
      ┗ bsx-blocks
...
  ┗ htdocs
    ┗ my-projects-wordpress
      ┗ wp-content
        ┣ themes
        ┃ ┗ bsx-wordpress
        ┗ plugins
          ┗ bsx-blocks
```

You need the following variables:

* `THEME_PACKAGE_PATH` ... Path to your compatible Theme folder
* `VARIABLES_PATH_AND_FILE` ... Path to your SCSS varibles file including file name (relative path inside your Theme folder)
* `FONTAWESOME_VARIABLES_PATH_AND_FILE` ... Path to your FontAwesome varibles file including file name (relative path inside your Theme folder)

Example:

```
THEME_PACKAGE_PATH=../../bsx-wordpress/
VARIABLES_PATH_AND_FILE=src/scss/variables
FONTAWESOME_VARIABLES_PATH_AND_FILE=node_modules/font-awesome/scss/_variables.scss 
```

If you use a workspace outside your WordPress folder (as seen above) you will need to publish after building formworspace to your WordPress folder. Please add to `.env` so each build will publish automatic:

* `PUBLISH_PATH` ... Path to your WordPress Plugins folder

Example: 

```
PUBLISH_PATH=../../../../../../Applications/MAMP/htdocs/wordpress-testing/wp-content/plugins/
```

All of your Plugin’s files but `node_modules` will be copied to this folder (as `bsx-blocks` folder) each time you build.

**NOTE:** Please take care since publishing will **delete** (and copy again) a folder **outside your Workspace** each time you build or change.


## Install & build

* Run `npm install`
* Run `npm run build`
* Add `build/_env.scss` (since version 1.2.0) **or (if existing)** `build/.envscss` (up to version 1.1.X) to your `.gitignore`


## Develop

– coming soon –



