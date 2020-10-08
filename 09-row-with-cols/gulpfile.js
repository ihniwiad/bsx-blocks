const gulp          = require( 'gulp' );
const { series, parallel } = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const sass          = require( 'gulp-sass' );
const autoprefixer  = require( 'gulp-autoprefixer' );
const rename        = require( 'gulp-rename' );
const cleanCSS      = require( 'gulp-clean-css' );
const clean         = require( 'gulp-clean' );
const watch         = require( 'gulp-watch' );


// scss
const SCSS_SRC_PATH = './src';
const CSS_DEST_PATH = './build/css';


// functions
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
const css = series(
    cssFolderClean,
    scssToCss,
    cssCleanAndMinify,
);
const scss_watch = parallel( scssWatch );


// exports
exports.css = css;

exports.css_watch = scss_watch;

exports.build = series(
    css,
);

