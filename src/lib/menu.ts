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
		name: 'Tapioca Da Casa',
		price: 20,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Gorda',
		price: 20,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Carne de Sol, Requeijão e Queijo',
		price: 15,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Frango, Calabresa, Requeijão e Queijo',
		price: 15,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Gordinha',
		price: 10
	},
	{
		name: 'Tapioca Vegetariana',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Calabresa com Queijo',
		price: 10,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Presunto e Queijo',
		price: 8,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Frango com Queijo',
		price: 8,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Queijo',
		price: 7,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Manteiga',
		price: 5,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Frango com Requeijão',
		price: 5,
		smallPriceType: 1
	}
];

const tapiocasDoces: Item[] = [
	{
		name: 'Tapioca Leite Condensado, Coco e Queijo',
		price: 15,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Banana e Chocolate',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Banana com Queijo',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Brigadeiro com Queijo',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Romeu e Julieta',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Leite Condensado e Coco',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Chocolate e Coco',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Brigadeiro e Coco',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Morango com Chocolate',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Morango com Brigadeiro',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Paçoca com Chocolate',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Paçoca com Brigadeiro',
		price: 10,
		smallPriceType: 2
	},
	{
		name: 'Tapioca Banana com Canela',
		price: 5,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Chocolate',
		price: 5,
		smallPriceType: 1
	},
	{
		name: 'Tapioca Brigadeiro',
		price: 5,
		smallPriceType: 1
	}
];

const cuscuz: Item[] = [
	{
		name: 'Cuscuz Carne de Sol, Calabresa, Requeijão e Queijo',
		price: 10
	},
	{
		name: 'Cuscuz Carne de Sol, Requeijão e Queijo',
		price: 10
	},
	{
		name: 'Cuscuz Frango, Calabresa e Queijo',
		price: 10
	},
	{
		name: 'Cuscuz Vegetariano',
		price: 10
	},
	{
		name: 'Cuscuz Calabresa, Requeijão e Queijo',
		price: 10
	},
	{
		name: 'Cuscuz Carne Moída',
		price: 10
	},
	{
		name: 'Cuscuz Tudão',
		price: 10
	},
	{
		name: 'Cuscuz Frango, Requeijão e Queijo',
		price: 8
	},
	{
		name: 'Cuscuz Presunto e Queijo',
		price: 8
	},
	{
		name: 'Cuscuz Salsicha com Molho',
		price: 8
	},
	{
		name: 'Cuscuz Queijo',
		price: 7
	},
	{
		name: 'Cuscuz Manteiga',
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
		name: 'Caldo Do Dia',
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
