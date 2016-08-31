//------------------------------------------------------------------------------
// Name: gulp/tasks/eslint.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-31T11:29:52.019Z
// Description:
//    lint javascript files
//------------------------------------------------------------------------------

'use strict';

const gulp = require('gulp');
const lint = require('gulp-eslint');

gulp.task('eslint', () => gulp
  .src(['src/js/**/*.js'])
  .pipe(lint())
  .pipe(lint.format())
);
