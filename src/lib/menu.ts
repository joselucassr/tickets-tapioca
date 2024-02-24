export type Item = {
	name: string;
	price: number;
	smallPriceType?: number;
};

export type CartItem = {
	// TODO index
	name: string;
	price: number;
	amount: number;
	additional?: CartItem[];
};

const tapiocasSalgadas: Item[] = [
	{
		name: 'Da Casa',
		price: 20,
		smallPriceType: 2
	},
	{
		name: 'Gorda',
		price: 20,
		smallPriceType: 2
	},
	{
		name: 'Carne de Sol, Requeijão e Queijo',
		price: 15,
		smallPriceType: 2
	},
	{
		name: 'Frango, Calabresa, Requeijão e Queijo',
		price: 15,
		smallPriceType: 2
	},
	{
		name: 'Gordinha',
		price: 10
	},
	{
		name: 'Vegetariana',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Calabresa com Queijo',
		price: 10,
		smallPriceType: 1
	},
	{
		name: 'Presunto e Queijo',
		price: 8,
		smallPriceType: 1
	},
	{
		name: 'Frango com Queijo',
		price: 8,
		smallPriceType: 1
	},
	{
		name: 'Queijo',
		price: 7,
		smallPriceType: 1
	},
	{
		name: 'Manteiga',
		price: 5,
		smallPriceType: 1
	},
	{
		name: 'Frango com Requeijão',
		price: 5,
		smallPriceType: 1
	}
];

const tapiocasDoces: Item[] = [
	{
		name: 'Leite Condensado, Coco e Queijo',
		price: 15,
		smallPriceType: 2
	},
	{
		name: 'Banana e Chocolate',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Banana com Queijo',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Brigadeiro com Queijo',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Romeu e Julieta',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Leite Condensado e Coco',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Chocolate e Coco',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Brigadeiro e Coco',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Morango com Chocolate',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Morango com Brigadeiro',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Paçoca com Chocolate',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Paçoca com Brigadeiro',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Banana com Canela',
		price: 5,
		smallPriceType: 1
	},
	{
		name: 'Chocolate',
		price: 5,
		smallPriceType: 1
	},
	{
		name: 'Brigadeiro',
		price: 5,
		smallPriceType: 1
	}
];

const cuscuz: Item[] = [
	{
		name: 'Carne de Sol, Calabresa, Requeijão e Queijo',
		price: 10
	},
	{
		name: 'Carne de Sol, Requeijão e Queijo',
		price: 10
	},
	{
		name: 'Frango, Calabresa e Queijo',
		price: 10
	},
	{
		name: 'Vegetariano',
		price: 10
	},
	{
		name: 'Calabresa, Requeijão e Queijo',
		price: 10
	},
	{
		name: 'Carne Moída',
		price: 10
	},
	{
		name: 'Tudão',
		price: 10
	},
	{
		name: 'Frango, Requeijão e Queijo',
		price: 8
	},
	{
		name: 'Presunto e Queijo',
		price: 8
	},
	{
		name: 'Salsicha com Molho',
		price: 8
	},
	{
		name: 'Queijo',
		price: 7
	},
	{
		name: 'Manteiga',
		price: 5
	}
];

const adicionaisTapCus: Item[] = [
	{
		name: 'Tomate',
		price: 2
	},
	{
		name: 'Ovo',
		price: 2
	},
	{
		name: 'Batata Palha',
		price: 0
	},
	{
		name: 'Requeijao',
		price: 0
	}
];

const caldos: Item[] = [
	{
		name: 'Do Dia',
		price: 10
	}
];

export const menu = {
	tapiocasSalgadas,
	tapiocasDoces,
	cuscuz,
	adicionaisTapCus,
	caldos
};
