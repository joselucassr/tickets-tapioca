<script lang="ts">
	import { createCart } from '$lib/cart.svelte';
	import CheckoutItem from '$lib/components/checkoutItem.svelte';

	let xCart = createCart();
	let customerName = $state('');

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

	function print() {
		let text = '';

		for (let i = 0; i < xCart.cart.length; ++i) {
			const cartItem = xCart.cart[i];

			text += ` * ${cartItem.name}\n`;
			for (const additionalKey of Object.keys(cartItem.additionals)) {
				if (cartItem.additionals[additionalKey].amount > 0) {
					text += `  - ${cartItem.additionals[additionalKey].amount}x ${additionalKey}\n`;
				}
			}

			if (cartItem.obs) {
				text += `  - ${cartItem.obs}\n`;
			}

			text += '\n';
		}

		text += ` Cliente: ${customerName}\n`;
		text += ` ${getTime()}\n`;
		text += '------------------------------\n';

		console.log(text);
		btPrint(text);
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
</script>

<section>
	{#each xCart.cart as item}
		<CheckoutItem {item} />
	{/each}

	<div>
		<h3>Nome Cliente</h3>
		<input type="text" bind:value={customerName} />
	</div>

	<button on:click={print}>Imprimir Pedido</button>
</section>

<button class="floating-btn"> Nova venda </button>

<style>
	section {
		display: flex;
		flex-direction: column;
	}

	.floating-btn {
		position: fixed;
		bottom: 5%;
		left: 50%;
		translate: -50% 0%;
		font-size: 2rem;
	}
</style>
