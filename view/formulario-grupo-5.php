<div class="wrapper-sidenav-e-form">
    <!-- navegador lateral -->
    <?php include 'view/sidenav.php' ?>
    <!-- formulario -->
<div class="content-wrapper">
        <div style="height: 870px;" class="form-info-geral">
            <span>Motivo da Visita</span>
            <div style="width:100%;padding-left:15%;text-align: left;display: grid;grid-template-columns: auto;" class="input-wrapper">
                <p class="descricao-input">Controle ambiental/vetorial:</p>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="imovel_foco" id="imovel_foco">
                    <label style="padding-left: 5%;" for="imovel_foco">Imóvel com foco</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="mecanica" id="mecanica">
                    <label style="padding-left: 5%;" for="mecanica">Ação mecânica</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="tratam_focal" id="tratam_focal">
                    <label style="padding-left: 5%;" for="tratam_focal">Tratamento focal</label>
                </div>
                <br>
            </div>
            <div style="width:100%;padding-left:15%;text-align: left;display: grid;grid-template-columns: auto;" class="input-wrapper">
                <p class="descricao-input">Geral:</p>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="egresso_intern" id="egresso_intern">
                    <label style="padding-left: 5%;" for="egresso_intern">Egresso de internação</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="convite_campanha" id="convite_campanha">
                    <label style="padding-left: 5%;" for="convite_campanha">Convite atividades coletivas <br> campanha de saúde</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="orientacao_prevencao" id="orientacao_prevencao">
                    <label style="padding-left: 5%;" for="orientacao_prevencao">Orientação/prevenção</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="outros" id="outros">
                    <label style="padding-left: 5%;" for="outros">Outros</label>
                </div>
                <br>
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