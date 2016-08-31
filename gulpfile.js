//------------------------------------------------------------------------------
// Name: gulpfile.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-30T13:28:26.117Z
// Description:
//       inhabit gulp tasks
//       they all live in "gulp/tasks"
//       better watch there
//------------------------------------------------------------------------------

'use strict';

const rdir = require('require-dir');

// Require all javascript files from 'gulp/tasks' directory
rdir('gulp/tasks');
