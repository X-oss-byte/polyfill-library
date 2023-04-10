/* eslint-env mocha, browser */
/* global proclaim, Int8Array */

// use "Int8Array" as a proxy for all "TypedArray" subclasses

it('is a function', function () {
	proclaim.isFunction(Int8Array.prototype.toReversed);
});

it('has correct arity', function () {
	proclaim.arity(Int8Array.prototype.toReversed, 0);
});

it('has correct name', function () {
	proclaim.hasName(Int8Array.prototype.toReversed, 'toReversed');
});

it('is not enumerable', function () {
	if ('__proto__' in Int8Array.prototype && self.Int8Array.prototype.__proto__ !== Object.prototype) {
		proclaim.isNotEnumerable(Int8Array.prototype.__proto__, 'toReversed');
	} else {
		proclaim.isNotEnumerable(Int8Array.prototype, 'toReversed');
	}
});

describe('toReversed', function () {
	var typedArray = new Int8Array(4);
	typedArray[0] = 3;
	typedArray[1] = 4;
	typedArray[2] = 5;
	typedArray[3] = 6;

	it('should reverse (by copy)', function () {
		proclaim.equal(typedArray.toReversed().toString(), [6, 5, 4, 3].toString());
		proclaim.equal(typedArray[0], 3);
	});
});
