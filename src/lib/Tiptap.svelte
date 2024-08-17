<script>
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import Highlight from '@tiptap/extension-highlight';
  import MenuItem from './components/editor/MenuItem.svelte';
  import TaskList from '@tiptap/extension-task-list';
  import TaskItem from '@tiptap/extension-task-item';
  import CharacterCount from '@tiptap/extension-character-count';

  let element;
  let editor;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit, Highlight, TaskList, TaskItem.configure({nested: true}), CharacterCount],
      content: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at.
        </p>
        <p>
          Feugiat nibh sed pulvinar proin gravida.
        </p>
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
        <p>
          Quam lacus suspendisse faucibus interdum posuere lorem. Amet aliquam id diam maecenas ultricies mi eget mauris.
        </p>
        <p>
          Gravida rutrum quisque non tellus. Convallis posuere morbi leo urna.
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
  <MenuItem icon="mark-pen-line" action={() => editor.chain().focus().toggleHighlight().run()} isActive={editor.isActive('highlight')}/>
  <MenuItem icon="h-1" action={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })}/>
  <MenuItem icon="h-2" action={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })}/>
  <MenuItem icon="h-3" action={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} isActive={editor.isActive('heading', { level: 3 })}/>
</div>
{/if}

<div class="py-4" bind:this={element} />

{#if editor}
<div class="text-gray-400 text-sm text-end py-2">
  {editor.storage.characterCount.characters()} characters
</div>
{/if}

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
