<script lang="ts">
	import type { Item } from '$lib/menu';

	export let item: Item;
	export let addToCart: (item: Item) => void;
	export let removeFromCart: (item: Item) => void;
	export let category: string;
	export let amount: number;
</script>

<div class="item">
	<div class="details">
		<h3>{item.name}</h3>
		<p>R$ {item.price},00</p>
	</div>
	<div class="quantity">
		<button
			on:click={() => removeFromCart({ ...item, name: `${category} ${item.name}` })}
			class="material-icons">remove</button
		>
		{amount}
		<button
			on:click={() => addToCart({ ...item, name: `${category} ${item.name}` })}
			class="material-icons">add</button
		>
	</div>
</div>

<style>
	.item {
		display: flex;
		justify-content: space-between;
	}

	.quantity {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
