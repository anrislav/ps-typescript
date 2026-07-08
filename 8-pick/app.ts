const user = {
	name: 'Вася',
	age: 8,
	skills: ['js', 'ts']
};

function pickObjectKeys<T extends Object, K extends keyof T>(
	obj: T,
	keys: K[]
): Object {
	return Object.fromEntries(
		Object.entries(obj).filter((entry: [string, any]) =>
			keys.includes(entry[0] as K)
		)
	);
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
