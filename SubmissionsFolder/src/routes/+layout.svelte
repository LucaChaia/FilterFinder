<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Filter Finder</title>
</svelte:head>

<div class="min-h-screen bg-base-100">
	<header class="navbar fixed top-0 right-0 left-0 z-50 bg-base-100 shadow-sm">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl">Filter Finder</a>
		</div>
	</header>

	<main class="pt-16">
		{@render children()}
	</main>
</div>
