'use strict'; // NOSONAR

// Main Gulp module
const gulp = require('gulp');
// Backstop
const backstop = require('backstopjs');

// Handle the response like this
// backstop('test')
//     .then(() => {
//         // Test successful
//     })
//     .catch(() => {
//         // Test failed
//     });

gulp.task('test', function () {
    // Invoke with options
    return backstop('test', { config: './backstop.json' });
});