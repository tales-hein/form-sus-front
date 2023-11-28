<div class="wrapper-sidenav-e-form">
    <!-- navegador lateral -->
    <?php include 'view/sidenav.php' ?>
    <!-- formulario -->
<div class="content-wrapper">
        <div style="height: 450px;top:150px;" class="form-info-geral">
            <span>Desfecho da visita:</span>
            <br>
            <div style="width:100%;padding-left:15%;text-align: left;display: grid;grid-template-columns: auto;" class="input-wrapper">
                <div style="display: flex;align-items: center;">
                    <input class="checkbox-redondo" type="checkbox" name="recem_nascido" id="recem_nascido">
                    <label style="padding-left: 5%;" for="recem_nascido">Visita realizada</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="checkbox-redondo" type="checkbox" name="crianca" id="crianca">
                    <label style="padding-left: 5%;" for="crianca">Visita recusada</label>
                </div>
                <br>
                <div style="display: flex;align-items: center;">
                    <input class="checkbox-redondo" type="checkbox" name="crianca" id="crianca">
                    <label style="padding-left: 5%;" for="crianca">Ausente</label>
                </div>
                <br>
            </div>
            <br>
            <br>
            <div class="btns-wrapper" style="justify-content: space-betwenn;">
                <button id="btn-voltar-2" class="btn-secondary-menu-small" type="button">Voltar</button>
                <button id="btn-avancar-2" class="btn-primary-menu-small" type="button">Avançar</button>
            </div>
        </div>
</div>
</div>