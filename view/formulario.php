<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Visitas - Formulário</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../script/menu-principal.js"></script>
    <link rel="stylesheet" href="../styles/style.css">
    <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
<!-- Header -->

    <header class="header">
        <p>Portal E-Visitas</p>
    </header>

<!-- Conteudo -->
    <div style="display: flex; justify-content: center; align-items: center;">
        <?php include 'view/formulario-info-pessoal.php' ?>
    </div>
<!-- Footer -->

    <footer class="footer">
        <p>Contato suporte: suporte.evisitas@email.com</p>
        <p>© 2023 eVisitas</p>
    </footer>

</body>
</html>