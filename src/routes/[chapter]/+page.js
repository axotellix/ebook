export async function load({ params }) {
    const chapter = params.chapter

    const chapters = {
        "0": () => import('$lib/chapters/0.svelte'),
        "1": () => import('$lib/chapters/1.svelte'),
        "2": () => import('$lib/chapters/2.svelte'),
        "3": () => import('$lib/chapters/3.svelte'),
    }

    const loader = chapters[chapter]
    if (!loader) {
        return {
            status: 404,
            error: new Error('Chapter not found')
        }
    }

    const module = await loader()
    return {
        content: module.default
    }
}