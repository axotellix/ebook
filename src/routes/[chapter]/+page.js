export async function load({ params }) {

    // get > chapter from URL
    const chapter = params.chapter

    // load > chapter content 
    const module = await import(`$lib/chapters/${chapter}.svelte`)
    

    // return > chapter content
    if (!module) {
        return {
            status: 404,
            error: new Error('Chapter not found')
        }
    } else {
        return {
            content: module.default
        }
    }

}