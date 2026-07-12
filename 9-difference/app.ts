interface IA {
	a: number;
	b: string;
}

interface IB {
	a: number;
	c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
	b: string;
}

function difference<T extends object, K extends object>(
	a: T,
	b: K
): Omit<T, keyof K> {
	const bKeys = new Set(Object.keys(b));
	return Object.fromEntries(
		Object.entries(a).filter(([key]) => !bKeys.has(key))
	) as Omit<T, keyof K>;
}

let v0: IDifference = difference(a, b);
