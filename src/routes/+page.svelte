<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { menu } from '$lib/menu';
	import { createCart } from '$lib/cart.svelte';

	let xCart = createCart();
	let selectedMenu = $state('Tapiocas Salgadas');

	$effect(() => {
		console.log(selectedMenu);
	});

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

	function changeMenu(e: Event) {
		selectedMenu = (e.target as HTMLElement).innerHTML;
	}

	function checkSelected(menuName: string) {
		return selectedMenu === menuName;
	}
</script>

<header>
	<h1>Criando novo Pedido</h1>
	<div class="search-box">
		<span class="material-icons">search</span>
		<input type="text" placeholder="Procurar lanche" />
	</div>
	<div class="menu-options">
		<button class:selected-menu={checkSelected('Tapiocas Salgadas')} on:click={changeMenu}
			>Tapiocas Salgadas</button
		>
		<button class:selected-menu={checkSelected('Tapiocas Doces')} on:click={changeMenu}
			>Tapiocas Doces</button
		>
		<button class:selected-menu={checkSelected('Cuscuz')} on:click={changeMenu}>Cuscuz</button>
		<button class:selected-menu={checkSelected('Caldos')} on:click={changeMenu}>Caldos</button>
	</div>
</header>

<main>
	{#if selectedMenu === 'Tapiocas Salgadas'}
		<section class="item-section">
			{#each menu.tapiocasSalgadas as item}
				<ItemCard {item} category="Tapioca" amount={checkCartAmount(`Tapioca ${item.name}`)} />
			{/each}
		</section>
	{/if}
	{#if selectedMenu === 'Tapiocas Doces'}
		<section class="item-section">
			{#each menu.tapiocasDoces as item}
				<ItemCard {item} category="Tapioca" amount={checkCartAmount(`Tapioca ${item.name}`)} />
			{/each}
		</section>
	{/if}
	{#if selectedMenu === 'Cuscuz'}
		<section class="item-section">
			{#each menu.cuscuz as item}
				<ItemCard {item} category="Cuscuz" amount={checkCartAmount(`Cuscuz ${item.name}`)} />
			{/each}
		</section>
	{/if}
	{#if selectedMenu === 'Caldos'}
		<section class="item-section">
			{#each menu.caldos as item}
				<ItemCard {item} category="Caldo" amount={checkCartAmount(`Caldo ${item.name}`)} />
			{/each}
		</section>
	{/if}
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
		background-color: var(--primary);
		color: #fff;
		text-decoration: none;
		padding: 1rem;
		font-size: 1.2rem;
		border-radius: 10px;
		font-weight: bold;
	}

	header {
		padding: 1rem;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.search-box {
		display: flex;
		align-items: center;
		background-color: var(--background);
		color: var(--input-text);
		padding: 0 1rem;
		border-radius: 5px;
	}

	.search-box > span {
		color: inherit;
	}

	.search-box > input {
		background-color: var(--background);
		border: none;
		padding: 0.5rem;
		width: 100%;
	}

	.menu-options {
		display: flex;
		overflow-x: scroll;
		text-wrap: nowrap;
		scrollbar-width: none;
		gap: 1rem;
	}

	.menu-options > button {
		background-color: inherit;
		border: none;
		font-size: 1.2rem;
	}

	.selected-menu {
		text-decoration: underline;
	}
</style>
