<script lang="ts">
	import { goto } from '$app/navigation';
	import { createCart } from '$lib/cart.svelte';
	import CheckoutItem from '$lib/components/checkoutItem.svelte';

	let xCart = createCart();
	let customerName = $state('');
	let toPickup = $state(false);

	$effect(() => {
		console.log(toPickup);
	});

	$effect(() => {
		const savedCart = localStorage.getItem('cart');
		savedCart && (xCart.cart = JSON.parse(savedCart));
	});

	$effect(() => {
		localStorage.setItem('cart', JSON.stringify(xCart.cart));
	});

	$effect(() => {
		const savedName = localStorage.getItem('customerName');
		savedName && (customerName = savedName);
	});

	$effect(() => {
		localStorage.setItem('customerName', customerName);
	});

	$effect(() => {
		const savedToPickup = localStorage.getItem('toPickup');
		savedToPickup && (toPickup = savedToPickup === 'true' ? true : false);
	});

	$effect(() => {
		localStorage.setItem('toPickup', `${toPickup}`);
	});

	function print() {
		let text = '';

		if (toPickup) {
			text += '  *** PARA VIAGEM ***\n\n';
		}

		const grouppedArr = groupAndCount(xCart.cart);

		for (let i = 0; i < grouppedArr.length; ++i) {
			const cartItem = grouppedArr[i];

			text += `  * ${cartItem.count > 1 ? `${cartItem.count}x ` : ''}${cartItem.name}\n`;
			for (const additionalKey of Object.keys(cartItem.additionals)) {
				if (cartItem.additionals[additionalKey].amount > 0) {
					text += `   - ${cartItem.additionals[additionalKey].amount}x ${additionalKey}\n`;
				}
			}

			if (cartItem.obs) {
				text += `   - ${cartItem.obs}\n`;
			}

			text += '\n';
		}

		text += `  Cliente: ${customerName}\n`;
		text += `  ${getTime()}\n`;
		text += '  ------------------------------';

		console.log(insertLineBreaks(text));
		btPrint(insertLineBreaks(text));
	}

	function btPrint(prn: string) {
		var S = '#Intent;scheme=rawbt;';
		var P = 'package=ru.a402d.rawbtprinter;end;';
		var textEncoded = encodeURI(prn);
		window.location.href = 'intent:' + textEncoded + S + P;
	}

	function getTime() {
		const date = new Date();

		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString().substr(-2);

		const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;
		return formattedDate;
	}

	function insertLineBreaks(text: string, maxLineLength = 27): string {
		let loops = 0;
		let lastSpace = 0;
		let lineLength = 0;
		for (let i = 0; i < text.length && loops < 5000; ++i, ++loops) {
			lineLength += 1;

			if (text[i] === ' ') {
				lastSpace = i;
			}

			if (text[i] === '\n') {
				lineLength = 0;
			}

			if (lineLength + 2 >= maxLineLength) {
				text = text.slice(0, lastSpace) + '\n  ' + text.slice(lastSpace + 1);
				lineLength = 0;
			}
		}
		return text;
	}

	function groupAndCount(arr: any[]) {
		const map = new Map();

		for (const item of arr) {
			// Create a key for grouping (ignores the 'id')
			const key = JSON.stringify(item, (k, v) => (k === 'id' ? undefined : v));

			// Update count or add new entry
			const entry = map.get(key);
			if (entry) {
				entry.count++;
			} else {
				map.set(key, { ...item, count: 1 });
			}
		}

		return Array.from(map.values());
	}

	function restart() {
		xCart.cart = [];
		localStorage.setItem('customerName', '');
		localStorage.setItem('toPickup', 'false');
		goto('/');
	}
</script>

<header>
	<h1>Revise o Pedido</h1>
	<div class="search-box">
		<input bind:value={customerName} type="text" placeholder="Nome Cliente" />
	</div>
	<label class:label-selected={toPickup}>
		<input bind:checked={toPickup} type="checkbox" />
		Para viagem
	</label>
</header>
<section>
	{#each xCart.cart as item}
		<CheckoutItem {item} />
	{/each}
	<button on:click={print}><span class="material-icons">print</span> Imprimir Pedido</button>
</section>

<button on:click={() => restart()} class="floating-btn"> Nova venda </button>

<style>
	header {
		padding: 1rem;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	section {
		display: flex;
		flex-direction: column;
		margin-bottom: 10rem;
		padding: 1rem;
		gap: 2rem;
	}

	section > button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: bold;
		font-size: 1.2rem;
		color: var(--primary);
		border: 2px solid var(--input-bg);
		border-radius: 5px;
		padding: 0.5rem 0;
		color: var(--primary);
	}

	section > button > span {
		color: inherit;
	}

	section > button:active {
		background-color: var(--primary);
		color: white;
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

	.search-box > input {
		background-color: var(--background);
		border: none;
		padding: 0.5rem;
		width: 100%;
		border-radius: 5px;
		border: 2px solid var(--input-bg);
	}

	label {
		font-size: 1.2rem;
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.5em;
		font-weight: bold;
		color: var(--input-bg);
	}

	.label-selected {
		color: var(--primary);
	}
</style>
