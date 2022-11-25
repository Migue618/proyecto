const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");

function css(done) {
    // Identificar el archivo de sass
    src('src/scss/**/*.scss')
    // Compilar el archivo
    .pipe( plumber())
    .pipe( sass() )
    // Almacenar en el disco duro
    .pipe(dest("build/css"));

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css)

    done();
}


exports.css = css;
exports.dev = dev;