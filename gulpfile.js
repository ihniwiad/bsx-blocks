require( 'dotenv' ).config();
const envConfig = process.env;

const gulp          = require( 'gulp' );
const { series, parallel } = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const sass          = require( 'gulp-sass' );
const autoprefixer  = require( 'gulp-autoprefixer' );
const rename        = require( 'gulp-rename' );
const cleanCSS      = require( 'gulp-clean-css' );
const clean         = require( 'gulp-clean' );
const watch         = require( 'gulp-watch' );
const replace       = require( 'gulp-string-replace' );
const fs            = require( 'fs' );


const paths = {
    themePathReplace: {
        src: 'src/',
        dest: 'build/',
        fileName: '_build-env.scss',
        renamedFileName: '.envscss'
    },
    css: {
        src: 'src/',
        dest: 'build/css/',
        fileName: 'index.scss',
        watchSrc: [
            "./build/**/*.css",
            "!./build/css/*.min.css",
            "!./build/css/*.css.map"
        ],
    },
    js: {
        watchSrc: [
            "./build/*.js",
            "./build/**/*.js"
        ],
    },
    publish: {
        watchSrc: [ 'build/index.js', 'index.php', 'src/**/*.php' ],
    },
};


// PUBLISH HOWTO: 
// If you like to copy your files to another folder after build make 
// `.env` file with content 
// `PUBLISH_PATH=path_to_your_folder` ...e.g. `PUBLISH_PATH=../../../../../Applications/MAMP/htdocs/wordpress-testing/wp-content/plugins/`
// `THEME_PACKAGE_PATH=path_to_your_theme_workspace_folder` ...e.g `THEME_PACKAGE_PATH=../bsx-wordpress/`
// `VARIABLES_PATH_AND_FILE=path_inside_your_theme_to_your_scss_valiables` ...e.g. `VARIABLES_PATH_AND_FILE=src/scss/variables`
// Have a look at `publishConfig` which files to include / exclude
// and how to name your created destination folder
// 
// NOTE: within `src` all (1..n) non-negative globs must be followed by (0..n) only negative globs
const publishConfig = {
    "src": [
        "**/*",
        "!**/node_modules",
        "!**/node_modules/**", 
    ],
    "base": ".",
    "folderName": "bsx-blocks"
};


// scss replace path to theme package
const PATH_REPLACE_PATTERN = /###THEME_PACKAGE_PATH###/g;
const VARIABLES_REPLACE_PATTERN = /###VARIABLES_PATH_AND_FILE###/g;

const themePackagePathReplace = ( cb ) => {

    return gulp.src( paths.themePathReplace.src + paths.themePathReplace.fileName )
        .pipe( replace( PATH_REPLACE_PATTERN, envConfig.THEME_PACKAGE_PATH ) )
        .pipe( replace( VARIABLES_REPLACE_PATTERN, envConfig.VARIABLES_PATH_AND_FILE ) )
        .pipe( rename( paths.themePathReplace.renamedFileName ) )
        .pipe( gulp.dest( paths.themePathReplace.dest ) )
    ;

    cb();
}

exports.replace = series(
    themePackagePathReplace,
);


// NOTE: take care at this path since you’re deleting files outside your project
const publishFullPath = envConfig.PUBLISH_PATH + '/' + publishConfig.folderName;


const publishFolderDelete = ( cb ) => {

    if ( !! envConfig.PUBLISH_PATH && !! publishConfig.folderName ) {
        // console.log( 'delete: ' + publishFullPath );
        return gulp.src( publishFullPath, { read: false, allowEmpty: true } )
            .pipe( clean( { force: true } ) ) // NOTE: take care at this command since you’re deleting files outside your project
        ;
    }
    else {
        // do nothing
    }

    cb();
}

const publishFolderCreate = ( cb ) => {

    if ( !! envConfig.PUBLISH_PATH && !! publishConfig.folderName ) {
        // console.log( 'create: ' + publishFullPath + ' (src: ' + publishConfig.src + ', base: ' + publishConfig.base + ')' );
        return gulp.src( publishConfig.src, { base: publishConfig.base } )
            .pipe( gulp.dest( publishFullPath ) )
        ;
    }
    else {
        // log note, do nothing
        console.log( 'Note: No publishing done since publish configuration empty.' );
    }

    cb();
}

const publish = series(
    // copy all project but `node_modules` to configured dest
    publishFolderDelete,
    publishFolderCreate,
);

exports.publish = publish;


const cssFolderClean = ( cb ) => {

    return gulp.src( paths.css.dest, { read: false, allowEmpty: true } )
        .pipe( clean() )
    ;

    cb();
}


const makeCss = ( cb ) => {

    return gulp.src( paths.css.src + paths.css.fileName )
        .pipe( sourcemaps.init() )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( autoprefixer( {
            browsers: [ 'last 8 versions' ],
            cascade: false
        } ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( paths.css.dest ) )
    ;

    cb();
}

const cssCleanAndMinify = ( cb ) => {

    return gulp.src( paths.css.dest + '**/*.css' )
        .pipe( cleanCSS( { debug: true }, function( details ) {
            console.log( details.name + ': ' + details.stats.originalSize );
            console.log( details.name + ': ' + details.stats.minifiedSize );
        } ) )
        .pipe( rename( function( path ) {
            path.basename += '.min';
        } ) )
        .pipe( gulp.dest( paths.css.dest ) )
    ;

    cb();
}

const css = series(
    cssFolderClean,
    makeCss,
    cssCleanAndMinify,
);

// exports.css = css;
exports.css = series(
    css,
    publish,
);


const scssWatch = () => {
    watch( paths.css.src + paths.css.fileName, css );
}

exports.css_watch = scssWatch;


exports.build = series(
    themePackagePathReplace,
    css,
    publish,
);


function allWatch() {
    gulp.watch( paths.css.watchSrc, 
        series(
            css,
            publish,
        ) 
    );
    gulp.watch( paths.publish.watchSrc, publish );
}

exports.watch = allWatch;


