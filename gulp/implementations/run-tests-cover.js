/*jshint esversion: 6 */

const gulp = require("gulp");
const settings = require("../settings");
var spawn = require("./extra/spawn");

gulp.task("run-tests-cover", function (done) {
  spawn("nyc", ['--reporter=html', '--reporter=text', 'mocha', settings.testBuildPath], { stdio: "inherit" }, done, "test coverage");
});