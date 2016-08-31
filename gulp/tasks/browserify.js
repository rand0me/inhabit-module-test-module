//------------------------------------------------------------------------------
// Name: gulp/tasks/browserify.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-30T13:28:26.117Z
// Description:
//       browserify javascript files
//------------------------------------------------------------------------------

'use strict';

const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify-incremental');
const inhabitJson = require('../../inhabitcfg.json');

const config = {
  entries: [ "src/js/TestModule.js" ],
  transform: [ "stringify", "sassify" ],
  paths: [ "./src" ],
  extensions: [ ".js", ".json", ".scss", ".hbs" ],
  cacheFile: './browserify-cache'
};

gulp.task('browserify', [ 'eslint' ], () => browserify(config)
    .on('log', console.log.bind(console))
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source(inhabitJson.main))
    .pipe(gulp.dest("./"))
);
