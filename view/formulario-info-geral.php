<div class="wrapper-sidenav-e-form">
    <!-- navegador lateral -->
    <div style="display: inline-block; padding-top:30px; padding: 1rem 1rem; vertical-align: middle;">
        <div class="navegador-lateral-wrapper" style="display: flex; flex-direction:column; width: 60px;">
        <br><br><br>
            <!-- Btn info geral -->
            <button id="bt-info-geral" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div class="wrapper-icone">
                        <i class="material-symbols-outlined" id="icon-btn-house" style="font-size: 50px; font-weight:600;">house</i>
                    </div>
                </div>
            </button>
            <br>
            <!-- btn info pessoal -->
            <button id="btn-info-pessoal" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div class="wrapper-icone">
                        <i class="material-symbols-outlined" style="font-size: 50px; font-weight:600;">person</i>
                    </div>
                </div>
            </button>
            <br>
            <!-- btn form 1  -->
            <button id="btn-pag1" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div style="left: 22.50px; top: 11px; position: absolute; color: white; font-size: 28px; font-family: Noto Sans; font-weight: 800; word-wrap: break-word">1</div>
                </div>
            </button>
            <br>
            <!-- btn form 2  -->
            <button id="btn-pag2" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div style="left: 22.50px; top: 11px; position: absolute; color: white; font-size: 28px; font-family: Noto Sans; font-weight: 800; word-wrap: break-word">2</div>
                </div>
            </button>
            <br>
            <!-- btn form 3  -->
            <button id="btn-pag3" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div style="left: 22.50px; top: 11px; position: absolute; color: white; font-size: 28px; font-family: Noto Sans; font-weight: 800; word-wrap: break-word">3</div>
                </div>
            </button>
            <br>
            <!-- btn form 4  -->
            <button id="btn-pag4" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div style="left: 22.50px; top: 11px; position: absolute; color: white; font-size: 28px; font-family: Noto Sans; font-weight: 800; word-wrap: break-word">4</div>
                </div>
            </button>
            <br>
            <!-- btn form 5  -->
            <button id="btn-pag5" class="btn-side-nav">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div style="left: 22.50px; top: 11px; position: absolute; color: white; font-size: 28px; font-family: Noto Sans; font-weight: 800; word-wrap: break-word">5</div>
                </div>
            </button>
            <br>
            <!-- Btn desfecho  -->
            <button id="btn-desfecho" style="border: none; cursor: pointer;background-color:white;">
                <div class="wrapper-icone-btn">
                    <div class="background-btn-side-nav"></div>
                    <div class="wrapper-icone">
                        <i class="material-symbols-outlined" style="font-size: 50px; font-weight:600;">inventory</i>
                    </div>
                </div>
            </button>
        </div>
</div>
<!-- formulario -->
<div class="content-wrapper">
        <div class="form-info-geral">
            <span>Informações gerais da visita</span>
            <div class="input-wrapper">
                <p class="descricao-input">Turno*</p>
                <input type="text" class="input" name="turno" id="turno">
            </div>
            <div class="input-wrapper">
                <p class="descricao-input">Microárea*</p>
                <input type="text" class="input" name="microarea" id="microarea">
            </div>
            <div class="input-wrapper">
                <p class="descricao-input">Tipo de imóvel*</p>
                <input type="text" class="input" name="tipo-imovel" id="tipo_imovel">
            </div>
            <div class="input-wrapper">
                <p class="descricao-input">Núm. prontuário</p>
                <input type="text" class="input" name="num-prontuario" id="num_prontuario">
            </div>
            <div class="input-wrapper">
                <div class="checkboxes-visita-comp">
                    <p class="descricao-input">Visita compartilhada com outro profissional?*</p>
                    <div>
                        <input type="checkbox" class="checkbox-redondo" name="visita_comp_sim" id="visita_comp_sim" value="1">
                        <label for="visita_comp_sim">Sim</label>
                    </div>
                    <br>
                    <div>
                        <input type="checkbox" class="checkbox-redondo" name="visita_comp_nao" id="visita_comp_nao" value="0">
                        <label for="visita_comp_nao">Não</label>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="btns-wrapper" style="justify-content: space-betwenn;">
                <button id="btn-voltar" class="btn-secondary-menu-small" type="button">Cancelar</button>
                <button id="btn-avancar" class="btn-primary-menu-small" type="button">Avançar</button>
            </div>
        </div>
</div>
</div>