$(document).ready(function() {
    const cns = $('#cns_agente_logado').val();
    $(document).on('click', '#btn_voltar_historico', function() {
        window.location.replace('http://localhost:8081/view/menu-principal.php?cns=' + cns);
    });

    $(document).on('click', '.btn-primary-menu-small', function() {
        let id = $(this).attr('id');
        let ref = id.split('_');
        let idVisita = ref[2];
        window.location.replace('http://localhost:8081/view/formulario.php?cns=' + cns + '&idvisita=' + idVisita);
    })
});