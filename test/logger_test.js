var assert = require("assert"); 
var logger = require('../lib/logger');

describe('logger', function(){
    describe('#info()', function(){
          it('should exist', function(){
			  logger.info("info message");
          });
    });
	
    describe('#error()', function(){
          it('should exist', function(){
			  logger.error("error message");
          });
    });
	
    describe('#warn()', function(){
          it('should exist', function(){
			  logger.warn("warning message");
          });
    });
});
