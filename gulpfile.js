const gulp          = require( 'gulp' );
const { series, parallel } = require( 'gulp' );
const replace       = require( 'gulp-string-replace' );
const clean         = require( 'gulp-clean' );
const watch         = require( 'gulp-watch' );

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
const REPLACE_PATTERN = /###BASIC_STYLE_PACKAGE_PATH###/g;
const BASIC_STYLE_PACKAGE_PATH = checkAdDotBefore( config.relatedPackages[ 0 ].scssPath )


// task functions

const basicStylePackagePathReplace = ( cb ) => {

    var REPLACE_FILE_STACK = [
        {
            SRC: REPLACE_SRC_PATH,
            DEST: REPLACE_DEST_PATH,
            FILES: '/**/*.scss'
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


// tasks

const publish = series(
    // copy all project but `node_modules` to configured dest
    publishFolderDelete,
    publishFolderCreate,
);

const jsWatch = () => {
    watch( checkAdDotBefore( config.buildJsWatchPath ), publish );
}

const cssWatch = () => {
    watch( checkAdDotBefore( config.buildCssWatchPath ), publish );
}

const allWatch = () => {
    watch( [
        checkAdDotBefore( config.buildCssWatchPath ),
        checkAdDotBefore( config.buildJsWatchPath ),
    ], publish );
}


// exports

exports.publish = publish;

exports.replace = series(
    basicStylePackagePathReplace,
);

exports.build = series(
    basicStylePackagePathReplace,
    publish,
);

exports.js_watch = jsWatch;

exports.css_watch = cssWatch;

exports.all_watch = allWatch;

