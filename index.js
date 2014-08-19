'use strict';

var gi = require('git-info');
var sre = require('simple-random-emoji');
var fs = require('fs');
var path = process.cwd();

JSON.minify = JSON.minify || require("node-json-minify");

gi(['author', 'branch', 'repository', 'name'], function(err, data) {
  var config = {
    'mainbranch'      : data.branch,
    'reponame'        : data.name,
    'pushtotemp'      : 1,
    'comparewith'     : '',
    'devsuffix'       : 'temp',
    'emoji'           : 1,
    'addall'          : 1,
    'prefix'          : '',
    'branchincommit'  : 1,
    'noprefix'        : 1,
    'opencompare'     : 1,
    'author'          : data.author
  };

  fs.readFile(path+'/fancom.json', function (err, data) {
    if (err) {
      throw err;
    }
     var extConfig = JSON.parse(JSON.minify(data.toString()));
     console.log(extConfig);
  });
  //console.log(config, sre);
});
