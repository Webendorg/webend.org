"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    twig = require("gulp-twig"),
    babel = require("gulp-babel"),
    watch = require("gulp-watch"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    cssnano = require("gulp-cssnano"),
    prefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function(){
  return gulp.src(["source/sass/main.scss"])
         .pipe(sass().on('error', sass.logError))
         .pipe(prefixer({
           browsers : ["last 2 versions"]
         }))
         .pipe(concat("main.css"))
         .pipe(gulp.dest("public/assets/css"))
         .pipe(cssnano())
         .pipe(concat("main.min.css"))
         .pipe(gulp.dest("public/assets/css"))
});

gulp.task("twig", function(){
  return gulp.src(["source/twig/pages/*.twig"])
             .pipe(twig())
             .pipe(gulp.dest("public"));
});

gulp.task("js", function(){
  return gulp.src(["source/js/main.js"])
             .pipe(sourcemaps.init())
             .pipe(babel({
               presets: ["es2015"],
             }))
             .pipe(concat("app.js"))
             .pipe(gulp.dest("public/assets/js"))
             .pipe(uglify())
             .pipe(concat("app.min.js"))
             .pipe(sourcemaps.write(""))
             .pipe(gulp.dest("public/assets/js"))
})

gulp.task("watch", function(){
  gulp.watch(["source/sass/*.scss", "source/sass/**/..scss", "source/sass/**/*.scss"], ["sass"]);
  gulp.watch(["source/twig/*.twig", "source/twig/**/*.twig"], ["twig"]);
  gulp.watch(["source/js/*.js"], ["js"]);
})

gulp.task("default", ["sass", "twig", "js", "watch"]);