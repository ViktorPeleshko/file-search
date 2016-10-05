#! /usr/bin/env node
var exec = require('child_process').exec;

exec('ls -a | grep ' + process.argv[2], function(err, stdout, stderr) {
    console.log(stdout);
});
