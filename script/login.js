$(document).ready(function() {

    function loadLoginInicial() {
        $('#wrapper_conteudo_login').empty();
        $.ajax({
            url: '/ajax/LoginController/renderLoginInicial',
            method: 'GET',
            success: function(response) {
                $('#wrapper_conteudo_login').html(response);
            },
            error: function(err) {
                console.error(err);
            }
        });
    }

    function loadJaCadastrado() {
        $('#wrapper_conteudo_login').empty();
        $.ajax({
            url: '/ajax/LoginController/renderLoginJaCadastrado',
            method: 'GET',
            success: function(response) {
                $('#wrapper_conteudo_login').html(response);
            },
            error: function(err) {
                console.error(err);
            }
        });
    }

    function loadPrimeiroAcesso() {
        $('#wrapper_conteudo_login').empty();
        $.ajax({
            url: '/ajax/LoginController/renderLoginPrimeiroAcesso',
            method: 'GET',
            success: function(response) {
                $('#wrapper_conteudo_login').html(response);
            },
            error: function(err) {
                console.error(err);
            }
        });
    }

    $(document).on('click', '#btn_avancar_inicial', function() {
        $cns = $('#cns').val();
        $.ajax({
            url: '/ajax/LoginController/processarCnsLogin',
            method: 'POST',
            data: {
                cns: $cns
            },
            success: function(response) {
                console.log(response);
                if(response.status === 500) {
                    console.log(response.msg);
                    return;
                }
                if(response.next == 'primeiro-acesso') {
                    $('#hdn_cns').val();
                    loadPrimeiroAcesso();
                }
                if(response.next == 'ja-cadastrado') {
                    $('#hdn_cns').val();
                    loadJaCadastrado();
                }
            },
            error: function(err) {
                console.error(err);
            }
        });
    });

    $(document).on('click', '#btn_login_cadastrado', function() {
        $cns = $('#cns').val();
        $senha = $('#senha').val();
        $.ajax({
            url: '/ajax/LoginController/processarCnsLogin',
            method: 'POST',
            data: {
                cns: $cns,
                senha: $senha,
            },
            success: function(response) {
                if(response.status === 500) {
                    console.log(response.msg);
                    return
                }
            },
            error: function(err) {
                console.error(err);
            }
        });
    });

    $(document).on('click', '#btn_voltar_primeiro_acesso', function() {
        loadLoginInicial();
    });
    
    loadLoginInicial();
});