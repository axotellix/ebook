<script>
    let data = $props()
</script>


<dialog id={ data.id } class="modal" aria-modal={ data?.backdrop } open={ data?.open }>
    <header class="modal-header">
        <h2 class="modal-title">{ data?.title }</h2>
        <button type="button" class="btn btn-sm btn-white btn-ctrl" onclick="{() => document.getElementById(data.id).close()}">
            <i class="icon-close"></i>
        </button>
    </header>
    <div class="modal-content">
        {@render data.modalContent()}
    </div>
</dialog>