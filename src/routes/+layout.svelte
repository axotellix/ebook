<script>
    import '$lib/styles/styles.scss'
    import Sidebar from '$lib/components/Sidebar.svelte'

    let { children } = $props();
</script>

<Sidebar />

<!-- <slot /> -->
{@render children()}