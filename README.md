# Split old mixmethods for create splited: route and handler

<h3>functionality</h3>
Create routing in provided array


Take following into account
1) Takes param controller and restricted 
2) Automatically create files with generated code for router


<h3>usage</h3>
create gulp task with code like this, and run it either manually or within gulp-watch

```
/*jshint esversion: 6 */

const gulp = require('gulp');
const generator = require('ts-gen-split-mix-method-to-route-and-handler');

const options = { lineFeed: '\r\n' };

gulp.task('gen', function (done) {
  generator.genSplitMethods('./testSrc', options)
    .then(done);
});
```