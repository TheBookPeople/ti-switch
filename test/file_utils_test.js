var assert = require("assert"); 
var fs = require("fs"); 
var file_utils = require('../lib/file_utils');

describe('file_utils', function(){
    describe('#cp()', function(){
		
          it('creates new file', function(done){
			  var sourceFile = './test/fixtures/file_a.txt';
			  var targetFile = '/tmp/file_a.txt';
			
			  if(fs.existsSync(targetFile)){
			    fs.unlinkSync(targetFile);
			  }
			 
			  file_utils.cp(sourceFile, targetFile , function(){
				  assert.ok(fs.existsSync(targetFile), targetFile + ' was not created');
				  done();
			  });
			  
          });
		  
          it('copies the content of source to target', function(done){
			  var sourceFile = './test/fixtures/file_a.txt';
			  var targetFile = '/tmp/file_a.txt';
			  var expectedData = fs.readFileSync(sourceFile, "utf8");
			  
			  if(fs.existsSync(targetFile)){
			    fs.unlinkSync(targetFile);
			  }
			 
			  file_utils.cp(sourceFile, targetFile , function(){
				  var resultData = fs.readFileSync(targetFile, "utf8");
				  assert.equal(expectedData, resultData);
				  done();
			  });
			  
          });
		  
          it('overwrites target', function(done){
			  var sourceFile = './test/fixtures/file_a.txt';
			  var targetFile = '/tmp/file_a.txt';
			  var expectedData = fs.readFileSync(sourceFile, "utf8");
			  
			  fs.writeFileSync(targetFile, 'Old data');
			 
			  file_utils.cp(sourceFile, targetFile , function(){
				  var resultData = fs.readFileSync(targetFile, "utf8");
				  assert.equal(expectedData, resultData);
				  done();
			  });
			  
          });
		  
          it('handles read errors', function(done){
			  var sourceFile = 'invalid';
			  var targetFile = '/tmp/file_a.txt';
			 
			  file_utils.cp(sourceFile, targetFile , function(){
				  assert.ok(fs.existsSync(targetFile), targetFile + ' was not created');
				  done();
			  });
			  
          });
		  
          it('handles write errors', function(done){
			  var sourceFile = './test/fixtures/file_a.txt';
			  var targetFile = '/testfile';
			 
			  file_utils.cp(sourceFile, targetFile , function(){
				   assert.ok(!fs.existsSync(targetFile), targetFile + ' was not created');
				  done();
			  });
			  
          });
		  
          it('without callback', function(){
			  var sourceFile = './test/fixtures/file_a.txt';
			  var targetFile = '/tmp/file_a.txt';
			 
			  file_utils.cp(sourceFile, targetFile);
			  
          });
    });
	
});
