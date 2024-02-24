<script lang="ts">
	import { createCart, type XCartItem } from '$lib/cart.svelte';
	import { menu } from '$lib/menu';

	let { item } = $props<{ item: XCartItem }>();
	let xCart = createCart();

	let addClosed = $state(true);

	function detectClickOutside(el: HTMLElement) {
		function handleClick(event: MouseEvent) {
			const targetEl = event.target as HTMLElement;

			if (el && !el.contains(targetEl)) {
				addClosed = true;
			}
		}

		document.addEventListener('click', handleClick);

		return {
			destroy() {
				document.removeEventListener('click', handleClick);
			}
		};
	}

	function scrollScreen(el: HTMLElement) {
		setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 5);
	}
</script>

<div use:detectClickOutside class="item">
	<button on:click={() => (addClosed = !addClosed)} class="item-info">
		<h3>{item.name}</h3>
		<p>R$ {item.price},00</p>
	</button>
	{#each Object.keys(item.additionals) as additionalKey}
		{#if item.additionals[additionalKey].amount > 0 && addClosed}
			<div>• {item.additionals[additionalKey].amount}x {additionalKey}</div>
		{/if}
	{/each}
	{#if item.obs && addClosed}
		<div>
			• {item.obs}
		</div>
	{/if}
	{#if !addClosed}
		<div class="item-add" use:scrollScreen>
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
			<textarea bind:value={item.obs} placeholder="Outras Informações">{item.obs}</textarea>
		</div>
	{/if}
	<button on:click={() => (addClosed = !addClosed)} class="expand-btn">
		<span class:up-chevron={addClosed} class="material-icons chevron">expand_more</span>
		<span class="underline">Adicionais</span>
	</button>
</div>

<style>
	.underline {
		text-decoration: underline;
	}

	.chevron {
		transform: rotate(180deg);
	}

	.up-chevron {
		transform: rotate(0deg);
	}

	.item-add {
		transition: all 0.15s ease-out;
		padding: 0 1rem;
		border-left: 4px solid var(--input-bg);
		/* scroll-padding-top: 800px; */
	}

	.expand-btn {
		display: flex;
		align-items: center;
		background: none;
		border: none;
		padding-bottom: 1rem;
	}

	.additional {
		display: flex;
		justify-content: space-between;
		margin: 1rem 0;
	}

	.quantity {
		display: flex;
		align-items: center;
		font-size: 1.2rem;
		font-weight: bold;
		gap: 0.5rem;
	}

	.quantity > button {
		border: none;
		background-color: inherit;
	}

	.item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-bottom: 1px solid var(--input-bg);
		/* padding-bottom: 1rem; */
		gap: 0.5rem;
	}

	.item-info {
		text-align: left;
		display: flex;
		justify-content: space-between;
		background-color: inherit;
		border: none;
		padding-top: 2rem;
	}

	.item-info > h3 {
		width: 70%;
	}

	textarea {
		width: 100%;
		padding: 0.5rem;
		border: 2px solid var(--input-bg);
		border-radius: 5px;
		background-color: var(--background);
	}
</style>
