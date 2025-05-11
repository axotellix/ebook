<script>
    import '$lib/styles/styles.scss'
    import Sidebar from '$lib/components/Sidebar.svelte'

    let { children } = $props();
</script>

<Sidebar />

{@render children()}

<nav class="page-switch">
    <button>prev</button>
    <button>next</button>
</nav>