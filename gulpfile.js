const gulp          = require( 'gulp' );
const { series, parallel } = require( 'gulp' );
const replace       = require( 'gulp-string-replace' );

// include config file
/* 
    related packages: 
        0 -> basic style package
*/
var config = require( './config.json' );


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


// tasks
const packagePathReplace = series(
    basicStylePackagePathReplace,
);
const build = parallel( packagePathReplace );


// exports
exports.replace = packagePathReplace;
exports.build = build;

