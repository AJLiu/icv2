'use strict';
var spawn = require('child_process').spawn;

var cmd = 'ln';
var target = '../../node_modules/';
var link = 'node_modules';
var args = ['-s', target, link];

if (process.platform === 'win32') {
	cmd = 'cmd';
	args = ['/c', 'mklink', '/d', link, target.slice(0,-1).replace(/\//g, '\\')];

}
var single = spawn(cmd, args);
single.stdout.on('data', function(data) {
  process.stdout.write('[' + cmd + ']: ' + data.toString('utf8'));
});
single.stderr.on('data', function(data) {
  process.stdout.write('[' + cmd + ']: ' + data.toString('utf8'));
});
single.stderr.on('close', function(code) {
  console.log('Process "' + cmd + '" exited with code: ' + code);
});
