var assert = require("assert");
var fs = require('fs');
var sinon = require('sinon');
var app_processor = require('../lib/app_processor');
var file_utils = require('../lib/file_utils');

describe('app_processor', function(){
  describe('#run()', function(){
	  
    it('process enviroment files in app', function(){
	  var fsStub = sinon.stub(fs, "existsSync");
  	  fsStub.withArgs('./tiapp.xml').returns(true);
	  var fuStub = sinon.stub(file_utils, "cp");
	  
	  app_processor.run({root :'./app', type : 'ppt'});
	  
	  //assert.ok(fuStub.calledWith('ppt','ppt'), ' app_processor was not called');

	  file_utils.cp.restore();
	  fs.existsSync.restore();
    });


  });
});
