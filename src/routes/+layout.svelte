<script>
    import '$lib/styles/styles.scss'
    import Sidebar from '$lib/components/Sidebar.svelte'

    let { children } = $props();
</script>

<div class="app">

    <!-- [ Sidebar ] -->
    <Sidebar />

    <main>

        <!-- [ Chapter content ] -->
        {@render children()}

        <!-- [ Pagination ] -->
        <nav class="page-switch">
            <button>prev</button>
            <button>next</button>
        </nav>

    </main>

</div>
