<script>
    // [ style ]
    import '$lib/styles/styles.scss'
    
    // [ other ]
    import { page } from '$app/state'

    // [ components ]
    import Sidebar from '$lib/components/Sidebar.svelte'
    

    // [ PRESETS ]
    let { children } = $props()
    let chapter = $derived(page.url.pathname.slice(1))
    const chapters_num = 11
    
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
        <nav class="chapter-switch">
            <hr />
            <button class:btn-inactive={ chapter == 0 }><i class="icon-arrow-left"></i> prev</button>
            <button class:btn-inactive={ chapter == chapters_num }>next <i class="icon-arrow-right"></i></button>
        </nav>

    </main>

</div>
