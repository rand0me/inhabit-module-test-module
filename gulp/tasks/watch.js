//------------------------------------------------------------------------------
// Name: gulp/tasks/watch.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-30T15:38:32.060Z
// Description:
//
//------------------------------------------------------------------------------

'use strict';

const gulp = require('gulp');
const bs = require('browser-sync');

gulp.task('watch', [ 'build' ], () => {
  bs({ server: './build' });

  bs
    .watch('build/**/*')
    .on('change', bs.reload);

  gulp
    .watch('src/**/*', [ 'browserify' ]);

  gulp
    .watch('public/*', [ 'public' ]);
})
