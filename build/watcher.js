const { resolve } = require('path');
const gulp = require('gulp');

const config = require('uni-config');
const utils = require('./utils');

const nodemonOptions = {
  script: 'app.js',
  ext: 'js json es',
  watch: [
    'config/*',
    'dictionary/*',
    'server/*',
    'app.js',
  ],
};

const SERVER_PATH = resolve(`${__dirname}/../app.js`);
// can dick around checking if port is up, but fuck it
const SERVER_RESTART_TIME = 1500;


const watcher = () => {
  const livereload = require('tiny-lr');
  const compileScripts = require('./scripts');
  const compileStyles = require('./styles');

  let nodemonRestarts = 0;

  // relative paths required for watch/Gaze to detect changes in new files
  const scripts = [
    'client/**/*.es',
    'vendor/**/*.es',
    'client/**/*.js',
    'vendor/**/*.js',
    'client/**/*.json',
    'vendor/**/*.json',
    '!client/polyfills.es',
  ];

  const stylesheets = [
    'client/**/*.styl',
    'styles/**/*.styl',
    'styles/**/*.css',
    'vendor/**/*.css',
  ];

  const templates = [
    'templates/**/*.pug',
  ];

  livereload().listen();
  const nodemon = require('gulp-nodemon')(nodemonOptions);

  const handleReload = (name) => livereload.changed(name);
  const handleNoPrerenderReload = (name) => { if (!config.server.prerender) handleReload(name); };
  const handleServerReload = () => setTimeout(() => handleReload('server.js'), SERVER_RESTART_TIME);

  gulp.watch(scripts).on('change', (path) => {
    const options = { watch: true };
    utils.watchReporter(path);
    compileScripts('app.js', options).then(handleNoPrerenderReload);
  });

  gulp.watch(stylesheets).on('change', (path) => {
    utils.watchReporter(path);
    compileStyles().then(handleReload);
  });

  gulp.watch(templates).on('change', (path) => {
    utils.watchReporter(path);
    handleServerReload();
  });

  nodemon.on('start', () => {
    if (nodemonRestarts) handleServerReload();
    nodemonRestarts += 1;
  });

  nodemon.on('restart', (files) => {
    files.forEach(utils.watchReporter);
  });
};

module.exports = watcher;
