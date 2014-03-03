var expect = require('expect.js');

var set = require('../').set;

describe('Tool:set', function(){

	it('should be a function', function(){
		expect(set).to.be.a('function');
	});

	it('should set a property in an objects', function(){

		var result = set({a: 1}, ['a'], 0);
		expect(result).to.eql({a: 0});

	});

	it('should set a deep property inside an objects', function(){

		var data = {a: {b: 1}};
		set(data, ['a', 'b'], 0);

		expect(data).to.eql({a: {b: 0}});

	});

});
