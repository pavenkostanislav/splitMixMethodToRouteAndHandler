/*jshint esversion: 6 */

const gulp = require('gulp');
const generator = require('ts-gen-split-mix-method-to-route-and-handler');

const options = { lineFeed: '\r\n' };

gulp.task('gen', function (done) {
  generator.genSplitMethods('./testSrc', options)
    .then(done);
});