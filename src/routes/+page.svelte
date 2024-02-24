<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { menu } from '$lib/menu';
	import { createCart } from '$lib/cart.svelte';

	let xCart = createCart();

	$effect(() => {
		const savedCart = localStorage.getItem('cart');
		savedCart && (xCart.cart = JSON.parse(savedCart));
	});

	$effect(() => {
		localStorage.setItem('cart', JSON.stringify(xCart.cart));
	});

	function checkCartAmount(name: string): number {
		return xCart.cart.filter((item) => item.name === name).length;
	}
</script>

<h1>Criando novo Pedido</h1>

<main>
	<h2>Tapiocas Salgadas</h2>
	<section class="item-section">
		{#each menu.tapiocasSalgadas as item}
			<ItemCard {item} category="Tapioca" amount={checkCartAmount(`Tapioca ${item.name}`)} />
		{/each}
	</section>
	<h2>Tapiocas Doces</h2>
	<section class="item-section">
		{#each menu.tapiocasDoces as item}
			<ItemCard {item} category="Tapioca" amount={checkCartAmount(`Tapioca ${item.name}`)} />
		{/each}
	</section>
	<h2>Cuscuz</h2>
	<section class="item-section">
		{#each menu.cuscuz as item}
			<ItemCard {item} category="Cuscuz" amount={checkCartAmount(`Cuscuz ${item.name}`)} />
		{/each}
	</section>
	<h2>Caldos</h2>
	<section class="item-section">
		{#each menu.caldos as item}
			<ItemCard {item} category="Caldo" amount={checkCartAmount(`Caldo ${item.name}`)} />
		{/each}
	</section>
</main>

<a href="/checkout" class="floating-btn"> {xCart.cart.length} Continuar </a>

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
