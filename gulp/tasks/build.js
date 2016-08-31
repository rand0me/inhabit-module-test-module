//------------------------------------------------------------------------------
// Name: gulp/tasks/build.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-30T13:36:37.541Z
// Description:
//       build task
//------------------------------------------------------------------------------

'use strict';

const gulp = require('gulp');

gulp.task('build', [  'public', 'browserify' ]);
