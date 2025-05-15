
import { error } from '@sveltejs/kit';

export async function load({ params }) {

    // get > chapter from URL
    const chapter = params.chapter

    // load > chapter content 
    try {
        const module = await import(`$lib/chapters/${chapter}.svelte`)
        return {
            content: module.default
        }
    } catch (err) {
        error(404, 'Глава не найдена');
    }

}