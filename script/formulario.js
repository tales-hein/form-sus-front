$(document).ready(function() {
    const cns = $('#cns_agente_logado').val();
    let idVisitaRevisao = '';
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('idvisita')) {
        idVisitaRevisao = urlParams.get('idvisita');
        loadFieldsRevisao(idVisitaRevisao);
    }

    let geral = [];
    let buscaAtiva = [];
    let acompanhamento = [];
    let controleAmbientalVetorial = [];
    let desfecho = '';

    let visita = {
        cns:           cns,
        turno:         undefined,
        microarea:     undefined,
        imovel:        undefined,
        prontuario:    undefined,
        compartilhada: undefined
    }

    let cidadao = {
        cns:          cns,
        cnsCidadao:   undefined,
        nomeCompleto: undefined,
        nascimento:   undefined,
        sexo:         undefined,
        peso:         undefined,
        altura:       undefined,
    }

    let validacaoCampos = {
        turno:           false,
        microarea:       false,
        tipo_imovel:     false,
        prontuario:      false,
        cns_cidadao:     false,
        nome_completo:   false,
        data_nascimento: false,
        sexo:            false,
        peso:            false,
        altura:          false,
        desfecho:        false,
    }

    function loadInfoGeral() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderInfoGeral',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresInfoGeral();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadInfoPessoal() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderInfoPessoal',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresInfoPessoal();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadPagFormulario_1() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderPag_1',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresPag_1();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadPagFormulario_2() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderPag_2',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresPag_2();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadPagFormulario_3() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderPag_3',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresPag_3();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadPagFormulario_4() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderPag_4',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresPag_4();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadPagFormulario_5() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderPag_5',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresPag_5();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    function loadDesfecho() {
        let wrapper = $('#wrapper_conteudo_formulario');
        wrapper.fadeOut('normal', function() {
            wrapper.empty();
            $.ajax({
                url: '/ajax/FormularioController/renderDesfecho',
                method: 'GET',
                success: function(response) {
                    wrapper.html(response).fadeIn('normal');
                    carregarValoresDesfecho();
                },
                error: function(err) {
                    console.error(err);
                }
            });
        });
    }

    $(document).on('change', '.input-checkbox-quadrado', function() {
        let id = $(this).attr('id');
        let ref = id.split('_');
        let refArrayName = ref[0];
        let refElemento = ref[1];
        if(!$(this).prop('checked')) {
            switch (refArrayName) {
                case 'geral':
                    if (geral.indexOf(refElemento) > -1) {
                        geral.splice(geral.indexOf(refElemento), 1);
                    }
                    break;
                case 'busca':
                    if (buscaAtiva.indexOf(refElemento) > -1) {
                        buscaAtiva.splice(buscaAtiva.indexOf(refElemento), 1);
                    }
                    break;
                case 'acompanhamento':
                    if (acompanhamento.indexOf(refElemento) > -1) {
                        acompanhamento.splice(acompanhamento.indexOf(refElemento), 1);
                    }
                    break;
                case 'vetorial':
                    if (controleAmbientalVetorial.indexOf(refElemento) > -1) {
                        controleAmbientalVetorial.splice(controleAmbientalVetorial.indexOf(refElemento), 1);
                    }
                    break;     
                default:
                    break;
            }
        }
        if($(this).prop('checked')) {
            switch (refArrayName) {
                case 'geral':
                    geral.push(refElemento);
                    break;
                case 'busca':
                    buscaAtiva.push(refElemento);
                    break;
                case 'acompanhamento':
                    acompanhamento.push(refElemento);
                    break;
                case 'vetorial':
                    controleAmbientalVetorial.push(refElemento);
                    break;     
                default:
                    break;
            }
        }
    });
    
    $(document).on('change', '#turno', function() {
        visita.turno = $('#turno').val();
    })

    $(document).on('change', '#microarea', function() {
        visita.microarea = $('#microarea').val();
    })

    $(document).on('change', '#tipo_imovel', function() {
        visita.imovel = $('#tipo_imovel').val();
    })

    $(document).on('change', '#num_prontuario', function() {
        visita.prontuario = $('#num_prontuario').val();
    })

    // Btns info geral 
    $(document).on('click', '#btn-avancar-infogeral', function() {
        loadInfoPessoal();
    })

    $(document).on('click', '#btn-voltar-infogeral', function() {
        if(idVisitaRevisao !== '') {
            $('#text-content-modal').empty();
            let texto = '<p>Tem certeza que quer voltar?<br>Os dados alterados voltarão para os valores originais.</p>';
            $('#text-content-modal').append(texto);
            $('.overlay, .customAlert').fadeIn();
            $('.close, #noBtn').click(function() {
                $('.overlay, .customAlert').fadeOut();
            });
        
            $('#yesBtn').click(function() {
                window.location.replace(location.origin + '/view/historico.php?cns=' + cns);
            });
            return;
        }
        $('#text-content-modal').empty();
            let texto = '<p>Tem certeza que quer voltar?<br>Os dados preenchidos serão perdidos.</p>';
            $('#text-content-modal').append(texto);
        $('.overlay, .customAlert').fadeIn();
        $('.close, #noBtn').click(function() {
            $('.overlay, .customAlert').fadeOut();
        });
    
        $('#yesBtn').click(function() {
            window.location.replace(location.origin + '/view/menu-principal.php?cns=' + cns);
        });
    });

    $(document).on('change', '#cns-cidadao', function() {
        cidadao.cnsCidadao = $('#cns-cidadao').val();
    })

    $(document).on('change', '#nome_completo', function() {
        cidadao.nomeCompleto = $('#nome_completo').val();
    })

    $(document).on('change', '#data_nascimento', function() {
        cidadao.nascimento = $('#data_nascimento').val();
    })

    $(document).on('change', '#peso', function() {
        cidadao.peso = $('#peso').val();
    })

    $(document).on('change', '#altura', function() {
        cidadao.altura = $('#altura').val();
    })

    $(document).on('change', '#select_sexo', function() {
        cidadao.sexo = $('#select_sexo').val();
    })

    // Btns info pessoal
    $(document).on('click', '#btn-avancar-pessoal', function() {
        loadPagFormulario_1();
    })
    $(document).on('click', '#btn-voltar-pessoal', function() {
        loadInfoGeral();
    });

    // Btns da sidenav

    $(document).on('click', '#bt-info-geral', function() {
        loadInfoGeral();
    });

    $(document).on('click', '#btn-info-pessoal', function() {
        loadInfoPessoal();
    });

    $(document).on('click', '#btn-pag1', function() {
        loadPagFormulario_1();
    });

    $(document).on('click', '#btn-pag2', function() {
        loadPagFormulario_2();
    });

    $(document).on('click', '#btn-pag3', function() {
        loadPagFormulario_3();
    });

    $(document).on('click', '#btn-pag4', function() {
        loadPagFormulario_4();
    });

    $(document).on('click', '#btn-pag5', function() {
        loadPagFormulario_5();
    });

    $(document).on('click', '#btn-desfecho', function() {
        loadDesfecho();
    });

    // Btns info pag 1
    $(document).on('click', '#btn-avancar-1', function() {
        loadPagFormulario_2();
    })

    $(document).on('click', '#btn-voltar-1', function() {
        loadInfoPessoal();
    });

    // Btns info pag 2
    $(document).on('click', '#btn-avancar-2', function() {
        loadPagFormulario_3();
    })

    $(document).on('click', '#btn-voltar-2', function() {
        loadPagFormulario_1();
    });

    // Btns info pag 3
    $(document).on('click', '#btn-avancar-3', function() {
        loadPagFormulario_4();
    })

    $(document).on('click', '#btn-voltar-3', function() {
        loadPagFormulario_2();
    });

    // Btns info pag 4
    $(document).on('click', '#btn-avancar-4', function() {
        loadPagFormulario_5();
    })

    $(document).on('click', '#btn-voltar-4', function() {
        loadPagFormulario_3();
    });

    // Btns info pag 5
    $(document).on('click', '#btn-avancar-5', function() {
        loadDesfecho();
    })

    $(document).on('click', '#btn-voltar-5', function() {
        loadPagFormulario_4();
    });


    function hasFalseProperty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === false) {
            return true;
            }
        }
        return false;
    }
    // Btns desfecho
    $(document).on('click', '#btn-gravar-formulario', function() {
        if(idVisitaRevisao !== '') {
            $('#text-content-modal').empty();
            let texto = '<p>Confirme a atualização do formulário.<br>Os dados preenchidos serão gravados e você voltará para o histórico.</p>';
            $('#text-content-modal').append(texto);
            $('.overlay, .customAlert').fadeIn();
            $('.close, #noBtn').click(function() {
                $('.overlay, .customAlert').fadeOut();
            });
            $('#yesBtn').click(function() {
                let dadosFormulario = {
                    "data": {
                        "id": Number(idVisitaRevisao),
                        "cnsCidadao": cidadao.cnsCidadao,
                        "geral": geral,
                        "buscaAtiva": buscaAtiva,
                        "acompanhamento": acompanhamento,
                        "controleAmbientalVetorial": controleAmbientalVetorial,
                        "desfecho": desfecho
                    }
                };
                console.log(dadosFormulario);
                $.ajax({
                    url: 'https://formsus.api.previa.app/api/visits/update',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(dadosFormulario),
                    success: function(response) {
                        if(response.success == true) {
                            window.location.replace(location.origin + '/view/historico.php?cns=' + cns);
                        }else{
                            console.log(response);
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Request falhou:', status);
                    }
                });
            });    
            return;        
        }
        $('#text-content-modal').empty();
        let texto = '<p>Confirme o envio do formulário.<br>Os dados preenchidos serão gravados e você voltará para o menu principal.</p>';
        $('#text-content-modal').append(texto);
        $('.overlay, .customAlert').fadeIn();
        $('.close, #noBtn').click(function() {
            $('.overlay, .customAlert').fadeOut();
        });
        $('#yesBtn').click(function() {
            let dadosCidadao = {
                "data": {
                    "cns": cidadao.cns,
                    "cnsCidadao": cidadao.cnsCidadao,
                    "nomeCompleto": cidadao.nomeCompleto,
                    "nascimento": cidadao.nascimento,
                    "sexo": cidadao.sexo,
                    "peso": parseFloat(cidadao.peso),
                    "altura": parseFloat(cidadao.altura) 
                }
            };
            $.ajax({
                url: 'https://formsus.api.previa.app/api/citizen/create',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dadosCidadao),
                success: function(response) {
                    if(response.success == true) {
                        cadastrarVisita()
                    }else {
                        alert(JSON.stringify(response.errors).replace(/[\[\]]/g, ''));
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Request falhou:', status);
                }
            });
        });        
    })

    function cadastrarVisita() {
        let dadosVisita = {
            "data": {
                "cns": visita.cns,
                "turno": visita.turno,
                "microarea": visita.microarea,
                "imovel": visita.imovel,
                "prontuario": parseInt(visita.prontuario),
                "compartilhada": visita.compartilhada
            }
        };
        $.ajax({
            url: 'https://formsus.api.previa.app/api/visits/create',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dadosVisita),
            success: function(response) {
                if(response.success == true) {
                    idCadastroVisita = response.response.id.toString().match(/\d+/)[0];
                    cadastrarFormularioVisita(idCadastroVisita);
                }else {
                    alert(JSON.stringify(response.errors).replace(/[\[\]]/g, ''));
                }
            },
            error: function(xhr, status, error) {
                console.error('Request falhou:', status);
            }
        });
    }

    function cadastrarFormularioVisita(id) {
        let dadosFormulario = {
            "data": {
                "id": id,
                "cnsCidadao": cidadao.cnsCidadao,
                "geral": geral,
                "buscaAtiva": buscaAtiva,
                "acompanhamento": acompanhamento,
                "controleAmbientalVetorial": controleAmbientalVetorial,
                "desfecho": desfecho 
            }
        };
        $.ajax({
            url: 'https://formsus.api.previa.app/api/visits/update',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dadosFormulario),
            success: function(response) {
                if(response.success == true) {
                    window.location.replace(location.origin + '/view/menu-principal.php?cns=' + cns);
                }else {
                    alert(JSON.stringify(response.errors).replace(/[\[\]]/g, ''));
                }
            },
            error: function(xhr, status, error) {
                console.error('Request falhou:', status);
            }
        });
    }

    $(document).on('click', '#btn-voltar-desfecho', function() {
        loadPagFormulario_5();
    });

    //

    function carregarValoresInfoGeral() {
        $('#turno').val(visita.turno);
        $('#microarea').val(visita.microarea);
        $('#tipo_imovel').val(visita.imovel);
        $('#num_prontuario').val(visita.prontuario);
        if(visita.compartilhada != undefined) {
            if(visita.compartilhada == true) {
                $('#visita_comp_nao').prop('checked', false);
                $('#visita_comp_sim').prop('checked', true);
            }else {
                $('#visita_comp_sim').prop('checked', false);
                $('#visita_comp_nao').prop('checked', true);
            }
        }
    }

    function carregarValoresDesfecho() {
        $('#'+desfecho).prop('checked', true);
    }

    function carregarValoresPag_1() {
        geral.forEach(e => {
            $('#geral_'+e).prop('checked', true);
        });
        buscaAtiva.forEach(e => {
            $('#busca_'+e).prop('checked', true);
        });
        acompanhamento.forEach(e => {
            $('#acompanhamento_'+e).prop('checked', true); 
        });
    }

    function carregarValoresPag_2() {
        acompanhamento.forEach(e => {
            $('#acompanhamento_'+e).prop('checked', true);; 
        });
    }

    function carregarValoresPag_3() {
        acompanhamento.forEach(e => {
            $('#acompanhamento_'+e).prop('checked', true); 
        });
    }

    function carregarValoresPag_4() {
        controleAmbientalVetorial.forEach(e => {
            $('#vetorial_'+e).prop('checked', true); 
        });
        acompanhamento.forEach(e => {
            $('#acompanhamento_'+e).prop('checked', true); 
        });
    }

    function carregarValoresPag_5() {
        controleAmbientalVetorial.forEach(e => {
            $('#vetorial_'+e).prop('checked', true);
        });
        geral.forEach(e => {
            $('#geral_'+e).prop('checked', true); 
        });
    }

    function carregarValoresInfoPessoal() {
        $('#cns-cidadao').val(cidadao.cnsCidadao);
        $('#nome_completo').val(cidadao.nomeCompleto);
        $('#data_nascimento').val(cidadao.nascimento);
        $('#peso').val(cidadao.peso);
        $('#altura').val(cidadao.altura);
        if(cidadao.sexo != '') {
            $('#select_sexo').val(cidadao.sexo);
        }
    }       
    $(document).on('change', '#visita_comp_sim', function() {
        $('#visita_comp_nao').prop('checked', false);
        if(!$(this).prop('checked')) {
            visita.compartilhada = undefined;
        }else {
            visita.compartilhada = true;
        }
    })

    $(document).on('change', '#visita_comp_nao', function() {
        $('#visita_comp_sim').prop('checked', false);
        if(!$(this).prop('checked')) {
            visita.compartilhada = undefined;
        }else {
            visita.compartilhada = false;
        }
    })

    $(document).on('change', '#realizada', function() {
        $('#recusada').prop('checked', false);
        $('#ausente').prop('checked', false);
        if(!$(this).prop('checked')) {
            desfecho = '';
        }else {
            desfecho = 'realizada';
        }
    })
    
    $(document).on('change', '#recusada', function() {
        $('#realizada').prop('checked', false);
        $('#ausente').prop('checked', false);
        if(!$(this).prop('checked')) {
            desfecho = '';
        }else {
            desfecho = 'recusada';
        }
    })

    $(document).on('change', '#ausente', function() {
        $('#recusada').prop('checked', false);
        $('#realizada').prop('checked', false);
        if(!$(this).prop('checked')) {
            desfecho = '';
        }else {
            desfecho = 'ausente';
        }
    })

    loadInfoGeral();

    // Validadores de campos:
    // Validador visita:

    $(document).on('input', '#turno', function() {
        validarTurno($(this));
    });
    function validarTurno($e) {
        let valorTurno = $e.val()[0];
        let valoresPermitidos = ["M", "T", "N"];
        if (valorTurno == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.turno = false;
            return
        }
        if (valoresPermitidos.includes(valorTurno.toUpperCase()) && $e.val().length <= 5) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.turno = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.turno = false;
        }
    }

    $(document).on('input', '#microarea', function() {
        validarMicroarea($(this));
    });
    function validarMicroarea($e) {
        let valorMicroarea = $e.val();
        if (valorMicroarea == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.microarea = false;
            return
        }
        if (/^(FA|\d{2})$/.test(valorMicroarea)) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.microarea = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.microarea = false;
        }
      }

    $(document).on('input', '#tipo_imovel', function() {
        validarImovel($(this));
    });
    function validarImovel($e) {
        let valorImovel = $e.val();
        if (valorImovel == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.tipo_imovel = false;
            return
        }
        if (/^(0[1-9]|1[0-2]|99)$/.test(valorImovel)) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.tipo_imovel = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.tipo_imovel = false;
        }
    }

    $(document).on('input', '#num_prontuario', function() {
        validarProntuario($(this));
    });
    function validarProntuario($e) {
        let valorProntuario = $e.val();
        if (valorProntuario == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.prontuario = false;
            return
        }
        if (/^\d+$/.test(valorProntuario)) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.prontuario = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.prontuario = false;
        }
    }

    //Validador cidadão:

    $(document).on('input', '#data_nascimento', function() {
        validarDataNascimento($(this));
    });
    function validarDataNascimento($e) {
        let valorData = $e.val();
        if (valorData == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.data_nascimento = false;
            return
        }
        if (/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(valorData)) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.data_nascimento = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.data_nascimento = false;
        }
    }
      
    $(document).on('input', '#peso', function() {
        validarFloatPeso($(this));
    });
    function validarFloatPeso($e) {
        let valorPeso = $e.val();
        if (valorPeso == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.peso = false;
            return
        }
        if (!isNaN(parseFloat(valorPeso)) && isFinite(parseFloat(valorPeso))) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.peso = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.peso = false;
        }
    }
      
    $(document).on('input', '#altura', function() {
        validarFloatAltura($(this));
    });
    function validarFloatAltura($e) {
        let valorAltura = $e.val();
        if (valorAltura == "") {
            $e.css('border', '1px solid #ABB9C0');
            validacaoCampos.altura = false;
            return
        }
        if (!isNaN(parseFloat(valorAltura)) && isFinite(parseFloat(valorAltura))) {
            $e.css('border', '1px solid #1d72bd');
            validacaoCampos.altura = true;
        } else {
            $e.css('border', '1px solid red');
            validacaoCampos.altura = true;
        }
    }

    function loadFieldsRevisao(id) {
        $.ajax({
            url: 'https://formsus.api.previa.app/api/visits/byId?id='+id,
            type: 'GET',
            success: function(response) {
                if(response.success) {
                    parseData(JSON.stringify(response.response.docs[0]));
                }
            },
            error: function(xhr, status, error) {
                
            }
        });
    }

    function parseData(jsonData) {
        const data = JSON.parse(jsonData);
    
        geral = [];
        buscaAtiva = [];
        acompanhamento = [];
        controleAmbientalVetorial = [];
        desfecho = '';
    
        visita = {
            cns: data.cns,
            turno: data.turno,
            microarea: data.microarea,
            imovel: data.imovel,
            prontuario: data.prontuario,
            compartilhada: data.compartilhada
        };

        const date = new Date(data.nascimento);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
    
        cidadao = {
            cns: data.cns,
            cnsCidadao: data.cnsCidadao,
            nomeCompleto: data.nomeCompleto,
            nascimento: `${day}/${month}/${year}`,
            sexo: data.sexo,
            peso: data.peso,
            altura: data.altura
        };
    
        if (Array.isArray(data.buscaAtiva)) {
            buscaAtiva = data.buscaAtiva;
        }
    
        if (Array.isArray(data.desfecho) && data.desfecho.length > 0) {
            desfecho = data.desfecho[0];
        }
    
        loadInfoGeral();
    }

});