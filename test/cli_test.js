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
	
    it('should fail with xml as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'xml']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail with js as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'js']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail with json as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'json']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail with txt as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'txt']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail with png as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'png']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail with mst as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'mst']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
	
    it('should fail with XML as enviroment', function(){
	  var stub = sinon.stub(app_processor, "run");
	  
	  cli.run(['node', '/usr/local/bin/ti-switch', 'XML']);
	  
	  assert.ok(!stub.called, ' app_processor should not have been called');
	  
	  app_processor.run.restore();
    });
  });
});
