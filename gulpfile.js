// Check gulp folder for config and gulp/babel for tasks
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
