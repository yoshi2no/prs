<script lang='ts'>
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	import DarkModeHeader from './DarkModeHeader.svelte';

	const { children } = $props();

</script>

<DarkModeHeader />

{@render children()}

<style>
:global{
  body {
    --at-apply: min-h-screen bg-white text-gray-700 font-sans dark:(bg-[#121212] text-gray-200) motion-safe:(transition transition-duration-1s);
  }
}
</style>
