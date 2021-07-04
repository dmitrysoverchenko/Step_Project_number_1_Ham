const { src, dest, series, watch } = require("gulp");
const bs = require("browser-sync");
const autoprefixer = require("gulp-autoprefixer");
const cleanFolder = require("gulp-clean");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const imageMin = require("gulp-imagemin");
const minifyJS = require("gulp-js-minify");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");

function cleanDist() {
  return src("./dist/*", { read: false }).pipe(cleanFolder());
}

function scssBuild() {
  return src("./src/scss/index.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("./dist/css"));
}

function jsBuild() {
  return src("./src/js/*.js")
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(minifyJS().on("error", console.error))
    .pipe(dest("./dist/js"));
}

function imageBuild() {
  return src("./src/image/**")
    .pipe(
      imageMin([
        imageMin.gifsicle({ interlaced: true }),
        imageMin.mozjpeg({ quality: 75, progressive: true }),
        imageMin.optipng({ optimizationLevel: 5 }),
        imageMin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("./dist/image/"));
}

function htmlBuild() {
  return src("./src/*.html").pipe(dest("./dist/"));
}

function watcher() {
  watch("./src/scss/*", series(scssBuild)).on("change", bs.reload);
  watch("./src/js/*", series(jsBuild)).on("change", bs.reload);
  watch("index.html").on("change", bs.reload);
  bs.init({
    server: {
      basedir: "./",
    },
  });
}

exports.cleanDist = cleanDist;
exports.scssBuild = scssBuild;
exports.jsBuild = jsBuild;
exports.imageBuild = imageBuild;
exports.htmlBuild = htmlBuild;
exports.watcher = watcher;
exports.dev = watcher;
exports.build = series(cleanDist, htmlBuild, scssBuild, jsBuild, imageBuild);
