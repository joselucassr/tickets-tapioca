import { v4 as uuidv4 } from 'uuid';
import type { Item } from './menu';

export type XCartItem = {
	id: string;
	name: string;
	price: number;
	additionals: {
		[key: string]: XAdditional;
	};
	obs: string;
};

type XAdditional = {
	price: number;
	amount: number;
};

let cart = $state<XCartItem[]>([]);

export function createCart() {
	function insert(item: Item) {
		cart = [
			...cart,
			{
				...item,
				id: uuidv4(),
				additionals: {
					Ovo: {
						price: 2,
						amount: 0
					},
					Tomate: {
						price: 2,
						amount: 0
					},
					'Batata Palha': {
						price: 0,
						amount: 0
					},
					Requeijao: {
						price: 0,
						amount: 0
					}
				},
				obs: ''
			}
		];
	}

	function removeByName(name: string) {
		const itemIndex = cart.findIndex((item) => item.name === name);
		if (itemIndex < 0) return;

		const temp = cart;

		temp.splice(itemIndex, 1);

		cart = [...temp];
	}

	function editAdditional(id: string, name: string, op: 1 | -1) {
		const itemIndex = cart.findIndex((item) => item.id === id);
		const temp = cart;
		let amount = temp[itemIndex].additionals[name].amount;

		amount += op;

		temp[itemIndex].additionals[name].amount = leqZero(amount);

		cart = [...temp];
	}

	function editObs(id: string, text: string) {
		const itemIndex = cart.findIndex((item) => item.id === id);
		const temp = cart;

		temp[itemIndex].obs = text;

		cart = [...temp];
	}

	return {
		get cart() {
			return cart;
		},
		set cart(newCart) {
			cart = newCart;
		},
		insert,
		removeByName,
		editAdditional,
		editObs
	};
}

function leqZero(num: number) {
	return num < 0 ? 0 : num;
}
