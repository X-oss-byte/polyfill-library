/* global TypedArrayCreate */
// 23.2.4.3 TypedArrayCreateSameType ( exemplar, argumentList )
function TypedArrayCreateSameType(exemplar, argumentList) { // eslint-disable-line no-unused-vars
	// 1. Let constructor be the intrinsic object associated with the constructor name exemplar.[[TypedArrayName]] in Table 68.
	var constructor = {
		Int8Array: self.Int8Array,
		Uint8Array: self.Uint8Array,
		Uint8ClampedArray: self.Uint8ClampedArray,
		Int16Array: self.Int16Array,
		Uint16Array: self.Uint16Array,
		Int32Array: self.Int32Array,
		Uint32Array: self.Uint32Array,
		Float32Array: self.Float32Array,
		Float64Array: self.Float64Array
	}[exemplar.constructor.name];
	// 2. Let result be ? TypedArrayCreate(constructor, argumentList).
	var result = TypedArrayCreate(constructor, argumentList);
	// 3. Assert: result has [[TypedArrayName]] and [[ContentType]] internal slots.
	// 4. Assert: result.[[ContentType]] is exemplar.[[ContentType]].
	// 5. Return result.
	return result;
}
