<script>
    let { data } = $props()
</script>

{#if data?.content}
    {@render data?.content()}
{:else}
    <h2>Error</h2>
    <p>No chapter found.</p>
{/if}
