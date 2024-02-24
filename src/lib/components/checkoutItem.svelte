<script lang="ts">
	import { createCart, type XCartItem } from '$lib/cart.svelte';
	import { menu } from '$lib/menu';

	let { item } = $props<{ item: XCartItem }>();
	let xCart = createCart();

	let addClosed = $state(true);
</script>

<div class="item">
	<div class="item-info">
		<h3>{item.name}</h3>
		<p>R$ {item.price},00</p>
	</div>
	<div>
		{#each Object.keys(item.additionals) as additionalKey}
			{#if item.additionals[additionalKey].amount > 0}
				<div>{item.additionals[additionalKey].amount}x {additionalKey}</div>
			{/if}
		{/each}
		{#if item.obs}
			<div>
				{item.obs}
			</div>
		{/if}
	</div>
	<div class="item-add">
		<button on:click={() => (addClosed = !addClosed)}
			><span class:up-chevron={addClosed} class="material-icons chevron">chevron_right</span> Adicionais</button
		>

		<div class:is-closed={addClosed}>
			{#each menu.adicionaisTapCus as additionalItem}
				<div class="additional">
					<div>
						{additionalItem.name}
						R$ {additionalItem.price},00
					</div>
					<div class="quantity">
						<button
							on:click={() => xCart.editAdditional(item.id, additionalItem.name, -1)}
							class="material-icons">remove</button
						>
						{item.additionals[additionalItem.name].amount}
						<button
							on:click={() => xCart.editAdditional(item.id, additionalItem.name, 1)}
							class="material-icons">add</button
						>
					</div>
				</div>
			{/each}
			<div>
				<h3>Outras informações:</h3>
				<textarea bind:value={item.obs}>{item.obs}</textarea>
			</div>
		</div>
	</div>
</div>

<style>
	.chevron {
		transform: rotate(90deg);
	}

	.item-add {
		transition: all 0.15s ease-out;
	}

	.item-add > button {
		display: flex;
		align-items: center;
		background: none;
		border: none;
		text-decoration: underline;
	}

	.additional {
		display: flex;
		justify-content: space-between;
	}

	.quantity {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.item {
		display: flex;
		flex-direction: column;
	}

	.item-info {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.is-closed {
		display: none;
	}

	.chevron-up {
		transform: rotate(270deg);
	}
</style>
