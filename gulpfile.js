const gulp          = require( 'gulp' );
const { series, parallel } = require( 'gulp' );
const replace       = require( 'gulp-string-replace' );
const clean         = require( 'gulp-clean' );

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


// scss
const REPLACE_SRC_PATH = checkAdDotBefore( config.basicStylePackagePathReplaceSrcFolder );
const REPLACE_DEST_PATH = checkAdDotBefore( config.basicStylePackagePathReplaceDestFolder );
const REPLACE_PATTERN = /###BASIC_STYLE_PACKAGE_PATH###/g;
const BASIC_STYLE_PACKAGE_PATH = checkAdDotBefore( config.relatedPackages[ 0 ].scssPath )


// functions
function checkAdDotBefore( path ) {
    path = ( path.indexOf( '.' ) != 0 ) ? '.' + path :  path;
    return path;
}

function basicStylePackagePathReplace( cb ) {

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

function publishFolderDelete( cb ) {

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

function publishFolderCreate( cb ) {

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

exports.publish = series(
    // copy all project but `node_modules` to configured dest
    publishFolderDelete,
    publishFolderCreate
);

exports.replace = series(
    basicStylePackagePathReplace,
);

exports.build = series(
    basicStylePackagePathReplace,
    publishFolderDelete,
    publishFolderCreate
);

