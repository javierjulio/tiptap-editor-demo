<script>
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import MenuItem from './components/editor/MenuItem.svelte'

  let element;
  let editor;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at.
        </p>
        <p>
          Feugiat nibh sed pulvinar proin gravida. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Mauris commodo quis imperdiet massa tincidunt nunc.
        </p>
        <p>
          Quam lacus suspendisse faucibus interdum posuere lorem. Amet aliquam id diam maecenas ultricies mi eget mauris.
        </p>
        <p>
          Gravida rutrum quisque non tellus. Convallis posuere morbi leo urna. Quis hendrerit dolor magna eget est lorem ipsum.
        </p>
      `,
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
  <MenuItem icon="strikethrough" action={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')}/>
  <MenuItem icon="h-1" action={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })}/>
  <MenuItem icon="h-2" action={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })}/>
  <MenuItem icon="h-3" action={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })}/>
</div>
{/if}

<div bind:this={element} />

<style>
  .menu-bar {
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 6px;
    color: #0d0d0d;
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 4px;
    max-height: 42px;
    padding: 4px;
    align-items: center;
  }
</style>
