const user = {
	name: 'Вася',
	age: 8,
	skills: ['js', 'ts']
};

function pickObjectKeys<
	T extends Record<PropertyKey, unknown>,
	K extends keyof T
>(obj: T, keys: K[]): Pick<T, K> {
	return Object.fromEntries(
		Object.entries(obj).filter(([key]) => keys.includes(key as K))
	) as Pick<T, K>;
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
