<script lang="ts">
	import type { Item } from '$lib/menu';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { menu } from '$lib/menu';

	let cart = $state<CartItem[]>([]);

	type CartItem = {
		// TODO index
		name: string;
		price: number;
		amount: number;
		additional?: CartItem[];
	};

	function addToCart(item: Item) {
		let cartItemIndex: number = 0;
		const cartItem = cart.find((ci, index) => {
			if (ci.name === item.name) {
				cartItemIndex = index;
				return true;
			}

			return false;
		});

		if (cartItem) {
			let temp = [...cart];
			temp[cartItemIndex].amount += 1;
			cart = temp;
		} else {
			cart = [...cart, { name: item.name, price: item.price, amount: 1 }];
		}
	}

	function removeFromCart(item: Item) {
		let cartItemIndex: number = 0;
		const cartItem = cart.find((ci, index) => {
			if (ci.name === item.name) {
				cartItemIndex = index;
				return true;
			}

			return false;
		});

		if (cartItem) {
			let temp = [...cart];
			temp[cartItemIndex].amount -= 1;

			if (temp[cartItemIndex].amount <= 0) {
				temp.splice(cartItemIndex, 1);
			}

			cart = temp;
		}
	}

	$effect(() => {
		const savedCart = localStorage.getItem('cart');
		savedCart && (cart = JSON.parse(savedCart));
	});

	$effect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	});

	function btPrint(prn: string) {
		var S = '#Intent;scheme=rawbt;';
		var P = 'package=ru.a402d.rawbtprinter;end;';
		var textEncoded = encodeURI(prn);
		window.location.href = 'intent:' + textEncoded + S + P;
	}

	function computeAmt() {
		return cart.reduce((acc, cur) => cur.amount + acc, 0);
	}

	function checkCartAmount(name: string): number {
		const cartItem = cart.find((i) => i.name === name);

		if (!cartItem) return 0;

		return cartItem.amount;
	}
</script>

<h1>Criando novo Pedido</h1>

<main>
	<h2>Tapiocas Salgadas</h2>
	<section class="item-section">
		{#each menu.tapiocasSalgadas as item}
			<ItemCard
				{item}
				{addToCart}
				{removeFromCart}
				category="Tapioca"
				amount={checkCartAmount(`Tapioca ${item.name}`)}
			/>
		{/each}
	</section>
	<h2>Tapiocas Doces</h2>
	<section class="item-section">
		{#each menu.tapiocasDoces as item}
			<ItemCard
				{item}
				{addToCart}
				{removeFromCart}
				category="Tapioca"
				amount={checkCartAmount(`Tapioca ${item.name}`)}
			/>
		{/each}
	</section>
	<h2>Cuscuz</h2>
	<section class="item-section">
		{#each menu.cuscuz as item}
			<ItemCard
				{item}
				{addToCart}
				{removeFromCart}
				category="Cuscuz"
				amount={checkCartAmount(`Cuscuz ${item.name}`)}
			/>
		{/each}
	</section>
	<h2>Caldos</h2>
	<section class="item-section">
		{#each menu.caldos as item}
			<ItemCard
				{item}
				{addToCart}
				{removeFromCart}
				category="Caldo"
				amount={checkCartAmount(`Caldo ${item.name}`)}
			/>
		{/each}
	</section>
</main>

<button class="floating-btn"> {computeAmt()} Continuar </button>

<style>
	main {
		margin-bottom: 10rem;
	}

	.item-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 0.5rem;
	}

	.floating-btn {
		position: fixed;
		bottom: 5%;
		left: 50%;
		translate: -50% 0%;
		font-size: 2rem;
	}
</style>
