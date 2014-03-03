var expect = require('expect.js');

var get = require('../').get;

describe('Tool:get', function(){

	it('should be a function', function(){
		expect(get).to.be.a('function');
	});

	it('should get a property in an objects', function(){

		var result = get({a: 0}, ['a']);
		expect(result).to.eql(0);

	});

	it('should get a nested object', function(){

		var result = get({a: {b: 0}}, ['a']);

		expect(result).to.eql({b: 0});

	});

	it('should get a nested value', function(){

		var result = get({a: {b: 0}}, ['a', 'b']);

		expect(result).to.eql(0);

	});

});
