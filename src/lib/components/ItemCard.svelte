<script lang="ts">
	import { createCart } from '$lib/cart.svelte';
	import type { Item } from '$lib/menu';

	export let item: Item;
	export let amount: number;

	let xCart = createCart();
</script>

<div class="item">
	<div class="details">
		<h3>{item.name}</h3>
		<p>R$ {item.price},00</p>
	</div>
	<div class="quantity">
		<button
			on:touchend={() => {
				xCart.removeByName(`${item.name}`);
			}}
			class="material-icons">remove</button
		>
		{amount}
		<button
			on:touchend={() => {
				xCart.insert({ ...item, name: `${item.name}` });
			}}
			class="material-icons">add</button
		>
	</div>
</div>

<style>
	.item {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.details {
		width: 70%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.quantity {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		font-weight: bold;
		gap: 0.5rem;
	}

	button {
		border: none;
		background-color: inherit;
	}
</style>
