var assert = require("assert"); // node.js core module
var cli = require('../lib/cli');
var sinon = require('sinon');
var app_processor = require('../lib/app_processor');

describe('cli', function(){
  describe('#run()', function(){
    it('should call app processor with correct enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'ppt']);
	  
	  assert.ok(stub.calledWith({root :'./app', type : 'ppt'}), ' app_processor was not called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail without enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
  });
});
