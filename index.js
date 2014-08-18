'use strict';

var gi = require('git-info');
var sre = require('simple-random-emoji');

gi(['author', 'branch', 'repository', 'name'], function(err, data) {
  var config = {
    'reponame'        : 'reponame',
    'pushtotemp'      : 1,
    'comparewith'     : 'branch to compare',
    'devsuffix'       : 'temp',
    'emoji'           : 1,
    'addall'          : 1,
    'prefix'          : 'Shit\'s on fire yo',
    'branchincommit'  : 1,
    'noprefix'        : 1,
    'opencompare'     : 1,
    'author'          : 'authorname'
  };
  console.log(config.prefix, sre);
});
