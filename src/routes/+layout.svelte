<script>
    // [ style ]
    import '$lib/styles/styles.scss'
    
    // [ other ]
    import { page } from '$app/state'
    import { onMount } from 'svelte'

    // [ components ]
    import Sidebar from '$lib/components/Sidebar.svelte'
    import Modal from '$lib/components/Modal.svelte'
    

    // [ PRESETS ]
     // chapter content 
    let { children } = $props()

     // chapter pagination presets
    let chapter = $derived(page.url.pathname.slice(1))
    let chapter_prev = $derived(+chapter - 1)
    let chapter_next = $derived(+chapter + 1)
    const chapters_num = 11

     // settings presets
    let fontsize = $state(18) 
    const fonts = ['Inter', 'Noto Serif']
    let active_font = $state('Inter')
    let system_theme = 'light' 
    let theme = $state('light')

     // get > settings from localStorage (if exist)
    onMount(() => {
        fontsize = localStorage.getItem("fontsize") || 18
        active_font = localStorage.getItem("font") || 'Inter'
        system_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        theme = localStorage.getItem("theme") || system_theme || 'light'
    })
    
     // apply > settings changes
    $effect(() => {

        // apply > settings
        document.documentElement.style.setProperty('--f-size-base', fontsize + 'px')
        document.documentElement.style.setProperty('--f-size-base-value', fontsize)
        document.documentElement.style.setProperty('--f-font', active_font)
        document.querySelector('html').setAttribute('data-theme', theme)

        // save > settings (locally)
        localStorage.setItem('fontsize', fontsize)
        localStorage.setItem('font', active_font)
        localStorage.setItem('theme', theme)

    })


    // [ FUNCTIONS ] 
    const prevBtnCaption = ( c ) => {
        if( c == 0 )            return 'назад'          // [fallback]
        if( c == 1 )            return 'введение'       // [0]
        if( c > 1 && c <= 8 )   return `глава ${--c}`   // [1-...]
        if( c > 8 )             return `пред. раздел`   // [1-...]
    }
    const nextBtnCaption = ( c ) => {
        if( c < 7 )             return `глава ${++c}`    // [1-7]
        if( c >= 7 )            return `сл. раздел`           // [8-...]
    }

    
    // get > sidebar open state (passed from Sidebar.svelte)
    let sidebarOpen = $state(true)
    const passSidebarState = ( state ) => {
        sidebarOpen = state
    }
</script>

<div class="app">

    <!-- [ Modal ] -->
    <Modal id="settings" title="Настройки" backdrop>
        {#snippet modalContent()}
            <div class="settings-block">
                <h5 class="settings-block-title">Размер шрифта</h5>
                <button class="btn" onclick="{ () => --fontsize }">-</button>
                <input type="number" bind:value={fontsize} />
                <button class="btn" onclick="{ () => ++fontsize }">+</button>
                <button class="btn btn-dark" onclick="{ () => fontsize = 18 }">по умолчанию</button>
            </div>
            <div class="settings-block">
                <h5 class="settings-block-title">Шрифт</h5>
                {#each fonts as font}
                    <button class="btn select-option" 
                      class:active={ font == active_font }
                      onclick="{ () => active_font = font }"
                      style="font-family: {font}">
                        {font}
                    </button>
                {/each}
                <button class="btn btn-dark" onclick="{ () => active_font = fonts[0] }">по умолчанию</button>
            </div>
            <div class="settings-block">
                <h5 class="settings-block-title">Тема</h5>
                <button class="btn select-option" class:active={ theme == "light" } onclick="{ () => theme = 'light' }">Светлая</button>
                <button class="btn select-option" class:active={ theme == "dark" } onclick="{ () => theme = 'dark' }">Темная</button>
            </div>
        {/snippet}
    </Modal>

    <!-- [ Sidebar ] -->
    <Sidebar {passSidebarState} />

    
    <main class:wide={ !sidebarOpen }>

        <!-- [ Chapter content ] -->
        {@render children()}

        <!-- [ Pagination ] -->
        <nav class="chapter-switch">
            <hr />
            <a href={`/${chapter_prev}`} class="btn" class:btn-inactive={ chapter == 0 }>
                <i class="icon-arrow-left"></i>
                { prevBtnCaption(chapter) }
            </a>
            <a href={`/${chapter_next}`} class="btn" class:btn-inactive={ chapter == chapters_num }>
                { nextBtnCaption(chapter) }
                <i class="icon-arrow-right"></i>
            </a>
        </nav>

    </main>

</div>
