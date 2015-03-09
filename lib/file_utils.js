var fs = require('fs');
var logger = require('./logger');

module.exports.cp = function(source, target, next) {
  logger.info('Copy '+ source + ' to ' + target);	
  
  var readStream = fs.createReadStream(source);
  readStream.on("error", function(err) {
    done(err);
  });
  
  var writeStream = fs.createWriteStream(target);
  writeStream.on("error", function(err) {
    done(err);
  });
  
  writeStream.on("close", function(ex) {
    done();
  });
  
  readStream.pipe(writeStream);

  function done(err) {
    if (err) {
     logger.error(err);
    }
	if(next){
		next();
	}
  }
};
