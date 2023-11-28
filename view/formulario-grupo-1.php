<div class="wrapper-sidenav-e-form">
    <!-- navegador lateral -->
    <?php include 'view/sidenav.php' ?>
    <!-- formulario -->
<div class="content-wrapper">
        <div class="form-info-geral">
            <span>Motivo da Visita</span>
            <div style="width:100%;padding-left:15%;text-align: left;display: grid;grid-template-columns: auto;" class="input-wrapper">
                <p class="descricao-input">Geral:</p>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="cadastramento_atualizacao" id="cadastramento_atualizacao">
                    <label style="padding-left: 5%;" for="cadastramento_atualizacao">Cadastramento/Atualização</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="visita-periodica" id="visita_periodica">
                    <label style="padding-left: 5%;" for="visita-periodica">Visita periódica</label>
                </div>
                <br>
            </div>
            <div style="width:100%;padding-left:15%;text-align: left;display: grid;grid-template-columns: auto;" class="input-wrapper">
                <p class="descricao-input">Busca ativa:</p>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="consulta" id="consulta">
                    <label style="padding-left: 5%;" for="consulta">Consulta</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="exame" id="exame">
                    <label style="padding-left: 5%;" for="exame">Exame</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="vacina" id="vacina">
                    <label style="padding-left: 5%;" for="vacina">Vacina</label>
                </div>
                <br>
            </div>
            <div style="width:100%;padding-left:15%;text-align: left;display: grid;grid-template-columns: auto;" class="input-wrapper">
                <p class="descricao-input">Busca ativa:</p>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="gestante" id="gestante">
                    <label style="padding-left: 5%;" for="gestante">Gestante</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="input-checkbox-quadrado" type="checkbox" class="input-checkbox-quadrado" name="puerpera" id="puerpera">
                    <label style="padding-left: 5%;" for="puerpera">Puérpera</label>
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