var fs = require('fs');
var dir = require('node-dir');
var file_utils = require('./file_utils');
var logger = require('./logger');

module.exports.run = function(options){  
	if(!isTiApp()){
		return;
	} 
	
	logger.info('Switching to '+ options.type);
	processFiles(options);

};


function isTiApp(){ 
  if(!fs.existsSync('./app/tiapp.xml')){
    logger.error('\n Must be run from root of Titanium App.\n');
	return false;
  }
  
  return true;
}

function processFiles(options){
	var folder = options.root;
	var type = options.type;
	dir.files(folder, function(err, files) {
	    if (err) {
			throw err;
		}
		
	    var filtered = filterFiles(files, type);
		
		filtered.forEach(function(file){
		  var origFile = originalFile(file, type);	
		  logger.info('Copy '+ file + ' to ' + origFile);		
		  file_utils.cp(file, origFile);
		});
	});
}

function filterFiles(files, type){
	var filtered = files.filter(function(file){
	  return new RegExp("." + type + "$").test(file);	
	});

	if(filtered.length === 0){
		logger.warn('No files found for '+ type + ' enviroment');
	}
	
	return filtered;
}

function originalFile(file, type){
  var envExtension =  "." + type;
  var fileLength = file.length - envExtension.length;
  return file.substring(0, fileLength);		
}