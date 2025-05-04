<script>
    import { page } from '$app/stores'
    const id = $derived($page.params.slug)
</script>

<h1>Page {id}</h1>
<p>some description ...</p>
