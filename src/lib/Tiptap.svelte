<script>
	import { onMount, onDestroy } from 'svelte';
  import { Editor, isActive } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'
	import MenuItem from './components/editor/MenuItem.svelte'

	let element;
	let editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello World! 🌍️ </p><p>You are looking good today.</p>',
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
<div class="menu-bar">
	<MenuItem icon="bold" action={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}/>
	<MenuItem icon="italic" action={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}/>
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
		class:active={editor.isActive('heading', { level: 1 })}
	>
		H1
	</button>
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
		class:active={editor.isActive('heading', { level: 2 })}
	>
		H2
	</button>
	<button
		on:click={() => editor.chain().focus().setParagraph().run()}
		class:active={editor.isActive('paragraph')}
	>
		P
	</button>
</div>
{/if}

<div bind:this={element} />

<style>
	.menu-bar {
		background-color: #fff;
		border: 3px solid #0d0d0d;
		border-radius: 0.75rem;
		color: #0d0d0d;
		display: flex;
		flex-direction: row;
		flex: 0 0 auto;
    flex-wrap: wrap;
		max-height: 26rem;
		padding: 0.25rem;
		align-items: center;
	}
</style>
