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


// scss
const SCSS_SRC_PATH = './src';
const CSS_DEST_PATH = './build/css';


// include config file
/* 
    related packages: 
        0 -> basic style package
*/
const config = require( './config.json' );

// NOTE: within `src` all (1..n) non-negative globs must be followed by (0..n) only negative globs
const defaultPublish = {
    "src": [
        "**/*",
        "!**/node_modules",
        "!**/node_modules/**", 
    ],
    "base": ".",
    "folderName": config.projectName
};
const mergedPublish = Object.assign( {}, defaultPublish, config.publish );
 // NOTE: take care at this path since you’re deleting files outside your project
const mergedPublishDestFullPath = mergedPublish.dest + '/' + mergedPublish.folderName;


// basic functions

const checkAdDotBefore = ( path ) => {
    path = ( path.indexOf( '.' ) != 0 ) ? '.' + path :  path;
    return path;
}


// scss
const REPLACE_SRC_PATH = checkAdDotBefore( config.basicStylePackagePathReplaceSrcFolder );
const REPLACE_DEST_PATH = checkAdDotBefore( config.basicStylePackagePathReplaceDestFolder );
const REPLACE_FILES = config.basicStylePackagePathReplaceDestFiles;
const REPLACE_PATTERN = /###BASIC_STYLE_PACKAGE_PATH###/g;
const BASIC_STYLE_PACKAGE_PATH = checkAdDotBefore( config.relatedPackages[ 0 ].scssPath )


// task functions

const basicStylePackagePathReplace = ( cb ) => {

    var REPLACE_FILE_STACK = [
        {
            SRC: REPLACE_SRC_PATH,
            DEST: REPLACE_DEST_PATH,
            FILES: REPLACE_FILES
        }
    ];

    var stream;
    for ( var i = 0; i < REPLACE_FILE_STACK.length; i++ ) {
        stream = gulp.src( REPLACE_FILE_STACK[ i ].SRC + REPLACE_FILE_STACK[ i ].FILES )
            .pipe( replace( REPLACE_PATTERN, BASIC_STYLE_PACKAGE_PATH ) )
            .pipe( gulp.dest( REPLACE_FILE_STACK[ i ].DEST ) )
        ;
    }

    return stream;

    cb();
}

const publishFolderDelete = ( cb ) => {

    if ( !! mergedPublish.dest && !! mergedPublish.folderName ) {
        return gulp.src( mergedPublishDestFullPath, { read: false, allowEmpty: true } )
            .pipe( clean( { force: true } ) ) // NOTE: take care at this command since you’re deleting files outside your project
        ;
    }
    else {
        // do nothing
    }

    cb();
}

const publishFolderCreate = ( cb ) => {

    if ( !! mergedPublish.dest && !! mergedPublish.folderName ) {
        return gulp.src( mergedPublish.src, { base: mergedPublish.base } )
            .pipe( gulp.dest( mergedPublishDestFullPath ) )
        ;
    }
    else {
        // log note, do nothing
        console.log( 'Note: No publishing done since publish configuration empty.' );
    }

    cb();
}

const cssFolderClean = ( cb ) => {

    return gulp.src( CSS_DEST_PATH, { read: false, allowEmpty: true } )
        .pipe( clean() )
    ;

    cb();
}

const scssToCss = ( cb ) => {

    return gulp.src( SCSS_SRC_PATH + '/**/*.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( autoprefixer( {
            browsers: [ 'last 8 versions' ],
            cascade: false
        } ) )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( CSS_DEST_PATH ) )
    ;

    cb();
}

const cssCleanAndMinify = ( cb ) => {

    return gulp.src( CSS_DEST_PATH + '/**/*.css' )
        .pipe( cleanCSS( { debug: true }, function( details ) {
            console.log( details.name + ': ' + details.stats.originalSize );
            console.log( details.name + ': ' + details.stats.minifiedSize );
        } ) )
        .pipe( rename( function( path ) {
            path.basename += '.min';
        } ) )
        .pipe( gulp.dest( CSS_DEST_PATH ) )
    ;

    cb();
}

const scssWatch = () => {
    watch( SCSS_SRC_PATH + '/**/*.scss', css );
}


// tasks

const publish = series(
    // copy all project but `node_modules` to configured dest
    publishFolderDelete,
    publishFolderCreate,
);

const jsWatch = () => {
    watch( checkAdDotBefore( config.buildJsWatchPath ), publish );
}

// const cssWatch = () => {
//     watch( checkAdDotBefore( config.buildCssWatchPath ), publish );
// }

// const allWatch = () => {
//     watch( [
//         ...config.buildCssWatchPath,
//         ...config.buildJsWatchPath,
//     ], publish );
// }

const css = series(
    cssFolderClean,
    scssToCss,
    cssCleanAndMinify,
);

const scss_watch = scssWatch;


// exports

exports.publish = publish;

exports.replace = series(
    basicStylePackagePathReplace,
);

exports.build = series(
    basicStylePackagePathReplace,
    css,
    publish,
);

exports.css = series(
    css,
    publish,
);

exports.css_watch = scss_watch;

exports.js_watch = jsWatch;

// exports.css_watch = cssWatch;

// exports.all_watch = allWatch;

