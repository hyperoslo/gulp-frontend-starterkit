// Check gulp/ folder for config and gulp/tasks for tasks
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
