type ObjectKey = string | number | symbol;
function swapKeysAndValues<D extends ObjectKey, E extends ObjectKey>(
	obj: Record<D, E>
): Record<E, D> {
	return Object.fromEntries(Object.entries(obj).map(arr => [arr[1], arr[0]]));
}

const obj: Record<string, number> = {
	a: 1,
	b: 2
};

console.log(swapKeysAndValues(obj));
