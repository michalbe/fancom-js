'use strict';

var gi = require('git-info');
var sre = require('simple-random-emoji');

gi(['author', 'branch', 'repository', 'name'], function(err, data) {
  var currentRepoInfo = data;
  console.log(currentRepoInfo);
});
