var program = require('commander');
var package = require('../package.json');
var app_processor = require('./app_processor');
var logger = require('./logger');

module.exports.run = function(argv) {
	program
	.version(package.version, '-v, --version')
	.description(package.description)
	.usage('<enviroment> - e.g prod, ppt or dev')
	.parse(argv);

	var args = program.args;

	if(!args || args.length !== 1) {
		logger.error('\n You need to specify one enviroment to switch to.\n');
		return;
	}

	var type = args[0];
	
	var restricted = ['XML', 'JS', 'JSON', 'TXT', 'PNG', 'MST'];
	
	if(restricted.indexOf(type.toUpperCase()) !== -1) {
		logger.error('\n '+type+' is not a valid enviroment.\n');
		return;
	}
	

	app_processor.run({root :'./app', type : type});
};