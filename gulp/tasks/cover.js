/*jshint esversion: 6 */

const gulp = require("gulp");
const sequence = require("run-sequence");

gulp.task("cover", function (done) {
    return sequence("build", "run-tests-cover", done);
});