<script>
    // [ other ]
    import { page } from '$app/state'
    import { fade } from 'svelte/transition'

    // [ PRESETS ]
    let chapter = $derived(page.url.pathname.slice(1))
    let sidebarOpen = $state(true)
    let { passSidebarState } = $props();

    // [ FUCNCTIONS ]
    const hideSidebar = () => { 
        sidebarOpen = false
        passSidebarState(sidebarOpen)
    }
    const openSidebar = () => { 
        sidebarOpen = true
        passSidebarState(sidebarOpen)
    }
    
</script>

<!-- [ btn: hide Sidebar ] -->
{#if !sidebarOpen}
<button class="btn-sm btn-ctrl" onclick={ openSidebar } style="position: fixed; top: 20px; left: 20px;" in:fade={{ delay: 200, duration: 200 }}>
    <i class="icon-menu"></i>
</button>
{/if}

<!-- [ Sidebar ] -->
<nav class="sidebar" class:sidebarClosed={ !sidebarOpen }>
    <div class="dummy">
        <button class="btn btn-sm btn-white btn-ctrl" onclick={ hideSidebar }><i class="icon-close"></i></button>
        <button class="btn btn-sm btn-white btn-ctrl" onclick="{() => window.modal.showModal()}"><i class="icon-config"></i></button>
    </div>

    <h2>
        Бусурина Л.Ю., Джанхуватова З.С.
        <br />
        ЛИДЕРСТВО
    </h2>
    <p><strong>СОДЕРЖАНИЕ</strong></p>
    <ul class="table-of-contents">
        <li class:navActive={ chapter === "0" }><a href="/0/#_Toc193796560">ВВЕДЕНИЕ <span>2</span></a></li>
        <li class:navActive={ chapter === "1" }>
            <a href="/1/#_Toc193796561">Тема 1. Теория организаций <span>3</span></a>
            <ul>
                <li><a href="/1/#_Toc193796562">1.1. Организация как система <span>3</span></a></li>
                <li><a href="/1/#_Toc193796563">1.2. Организационные системы <span>4</span></a></li>
            </ul>
        </li>
        <li class:navActive={ chapter === "2" }>
            <a href="/2/#_Toc193796564">Тема 2. Организационная структура <span>10</span></a>
            <ul>
                <li><a href="/2/#_Toc193796565">2.1. Понятие, типы и виды организации <span>10</span></a></li>
                <li><a href="/2/#_Toc193796566">2.2. Формы управления организацией <span>13</span></a></li>
                <li><a href="/2/#_Toc193796567">2.3. Признаки, структура, элементы социальной организации <span>15</span></a></li>
            </ul>
        </li>
        <li class:navActive={ chapter === "3" }>
            <a href="/3/#_Toc193796568">Тема 3. Лидерология и понятие лидерства <span>21</span></a>
            <ul>
                <li><a href="/3/#_Toc193796569">3.1. Содержание и направления использования лидерологии <span>21</span></a></li>
                <li><a href="/3/#_Toc193796570">3.2. Понятие лидерства <span>21</span></a></li>
            </ul>
        </li>
        <li>
            <a href="/4/#_Toc193796571">Тема 4. Лидерство, управление и власть <span>26</span></a>
            <ul>
                <li><a href="/4/#_Toc193796572">4.1. Лидерство и управление <span>26</span></a></li>
                <li><a href="/4/#_Toc193796573">4.2. Лидерство и власть <span>28</span></a></li>
            </ul>
        </li>
        <li>
            <a href="/5/#_Toc193796574">Тема 5. Индивидуальное лидерство <span>31</span></a>
            <ul>
                <li><a href="/5/#_Toc193796575">5.1. Лидерство как проявление индивидуальных черт <span>31</span></a></li>
                <li><a href="/5/#_Toc193796576">5.2. Индивидуальное лидерство как реализация поведенческих моделей <span>34</span></a></li>
            </ul>
        </li>
        <li>
            <a href="/6/#_Toc193796577">Тема 6. Групповое лидерство <span>37</span></a>
            <ul>
                <li><a href="/6/#_Toc193796578">6.1. Лидерство через взаимодействие лидера с группой и с отдельными членами группы <span>37</span></a></li>
                <li><a href="/6/#_Toc193796579">6.2. Процесс формирования и изменения лидерства в группе <span>44</span></a></li>
            </ul>
        </li>
        <li>
            <a href="/7/#_Toc193796580">Тема 7. Формы лидерства <span>50</span></a>
            <ul>
                <li><a href="/7/#_Toc193796581">7.1. Основные тенденции развития лидерства на современном этапе <span>50</span></a></li>
                <li><a href="/7/#_Toc193796582">7.2. Формы лидерства <span>50</span></a></li>
            </ul>
        </li>
        <li><a href="/8/#_Toc193796583">СИТУАЦИОННЫЕ ЗАДАЧИ ДЛЯ АНАЛИЗА <span>63</span></a></li>
        <li><a href="/9/#_Toc193796584">ПРОВЕРОЧНЫЕ ТЕСТЫ <span>69</span></a></li>
        <li><a href="/10/#_Toc193796585">ВОПРОСЫ ДЛЯ ИТОГОВОГО КОНРОЛЯ <span>80</span></a></li>
        <li><a href="/11/#_Toc193796586">СПИСОК РЕКОМЕНДУЕМОЙ ЛИТЕРАТУРЫ <span>81</span></a></li>
    </ul>
</nav>