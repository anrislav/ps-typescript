import fetch from 'node-fetch';

type Gender = 'male' | 'female';
enum Role {
	Admin = 'admin',
	Moderator = 'moderator',
	User = 'user'
}
interface IAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: {
		lat: number;
		lng: number;
	};
	country: string;
}
interface IUserBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: Gender;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: {
		color: string;
		type: string;
	};
	ip: string;
	address: IAddress;
	macAddress: string;
	university: string;
	bank: IUserBank;
	company: {
		department: string;
		name: string;
		title: string;
		address: IAddress;
	};
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: {
		coin: string;
		wallet: string;
		network: string;
	};
	role: Role;
}
interface IResponseData {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
}

function isSuccessResponse(obj: unknown): obj is IResponseData {
	return typeof obj === 'object' && obj !== null && 'total' in obj;
}
const url = 'https://dummyjson.com/users';
async function getUsers(): Promise<void> {
	const data: IResponseData = await fetch(url)
		.then(res => res.json())
		.then(data => {
			if (!isSuccessResponse(data)) {
				throw new Error('Неверные данные');
			}
			return data;
		})
		.catch((err: string) => {
			throw new Error(err);
		});

	console.log(data);
}

getUsers();
