<script>
  import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

  export let icon;
  export let action;
  export let isActive;
</script>

<button on:click={action} class:active={isActive}>
  <svg class="remix">
    <use xlink:href={`${remixiconUrl}#ri-${icon}`} />
  </svg>
</button>

<style>
  button {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    align-items: center;
    padding: 1.25rem 1rem;
    -webkit-overflow-scrolling: touch;
    height: 1.75rem;
    padding: 0.25rem;
    transition: background-color 0.25s;
    width: 1.75rem;
  }

  button > svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  button:hover {
    background-color: #f3f4f6;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  button.active {
    background-color: #e5e7eb;
  }
</style>
