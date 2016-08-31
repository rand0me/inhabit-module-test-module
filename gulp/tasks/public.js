//------------------------------------------------------------------------------
// Name: gulp/tasks/public.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-30T15:35:45.622Z
// Description:
//
//------------------------------------------------------------------------------

'use strict';

const gulp = require('gulp');

gulp.task('public', () => gulp
  .src('public/**/*')
  .pipe(gulp.dest('build/'))
);
