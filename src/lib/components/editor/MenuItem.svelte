<script>
	import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

  export let icon;
  // export let title;
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
		flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
		align-items: center;
    padding: 1.25rem 1rem;
    -webkit-overflow-scrolling: touch;
		background-color: transparent;
		border: none;
		border-radius: 0.4rem;
		cursor: pointer;
		height: 1.75rem;
		margin-right: 0.25rem;
		padding: 0.25rem;
		width: 1.75rem;
	}

	button > svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
	}

	button.active {
		background: #303030;
		color: white;
	}
</style>
