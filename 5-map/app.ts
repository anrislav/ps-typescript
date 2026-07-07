type HashMapElement = [string, any];
class HashMap {
	private bucket: HashMapElement[][] = [];
	private hash(str: string): number {
		let hash = 0x811c9dc5;
		for (let i = 0; i < str.length; i++) {
			hash ^= str.charCodeAt(i);
			hash = Math.imul(hash, 0x01000193);
		}
		return (hash >>> 0) & 1023;
	}
	public set(key: string, value: any): void {
		const bucketKey = this.hash(key);
		if (!Array.isArray(this.bucket[bucketKey])) this.bucket[bucketKey] = [];
		this.bucket[bucketKey] = this.bucket[bucketKey].filter(
			localKey => localKey[0] === key
		);
		this.bucket[bucketKey].push([key, value]);
	}
	public get(key: string): HashMapElement | undefined {
		const bucketKey = this.hash(key);
		if (!this.bucket[bucketKey]) return undefined;
		return this.bucket[bucketKey].find(localKey => localKey[0] === key)?.[1];
	}

	public delete(key: string): HashMapElement | undefined {
		const bucketKey = this.hash(key);
		if (!this.bucket[bucketKey]) return undefined;
		const result = this.bucket[bucketKey].find(localKey => localKey[0] === key);
		this.bucket[bucketKey] = this.bucket[bucketKey].filter(
			localKey => localKey[0] !== key
		);
		return result;
	}

	public clear(): void {
		this.bucket = [];
	}
}

const hmap = new HashMap();
hmap.set('первый', 1);
hmap.set('второй', 'two');
hmap.set('третий', true);

console.log('первый (1):', hmap.get('первый'));
console.log('второй (two):', hmap.get('второй'));
console.log('третий (true):', hmap.get('третий'));
console.log('неизвестный (undefined):', hmap.get('неизвестный'));

console.log('удаляем второй');
hmap.delete('второй');
console.log('второй (undefined):', hmap.get('второй'));

hmap.clear();

console.log('clear');
console.log('первый (undefined):', hmap.get('первый'));
