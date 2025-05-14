<script>
    // [ style ]
    import '$lib/styles/styles.scss'
    
    // [ other ]
    import { page } from '$app/state'

    // [ components ]
    import Sidebar from '$lib/components/Sidebar.svelte'
    

    let { children } = $props();
    
    // get > sidebar open state (passed from Sidebar.svelte)
    let sidebarOpen = $state(true)
    const passSidebarState = ( state ) => {
        sidebarOpen = state
    }
</script>

<div class="app">

    <!-- [ Sidebar ] -->
    <Sidebar {passSidebarState} />

    
    <main class:wide={ !sidebarOpen }>

        <!-- [ Chapter content ] -->
        {@render children()}

        <!-- [ Pagination ] -->
        <nav class="page-switch">
            <button><i class="icon-arrow-left"></i> prev</button>
            <button>next <i class="icon-arrow-right"></i></button>
        </nav>

    </main>

</div>
