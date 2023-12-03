<?php

function apiRequest($method, $data = [], $headers = ['Content-Type: application/json'], $url = 'https://formsus.api.previa.app/api/') {
    $options = array(
        'http' => array(
            'method' => $method, 
            'header' => implode("\r\n", $headers),
            'content' => http_build_query($data)
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return $result;
}

function render($arquivo) {
    ob_start();
    include (__DIR__ . '/../view/' . $arquivo . '.php');
    $html = ob_get_clean();
    echo $html;
}

function routeTo($referencia, $dados = false) {
    if(!$dados) {
        header("Location: /view/$referencia.php");
        exit();
    }
    $dadosPreparados = urldecode(serialize($dados));
    header("Location: /view/$referencia.php?dados=$dadosPreparados");
    exit();
}

function gerarAssinatura($cns) {
    $segredo = '8uRhAeH89naXfFXKGOEj';
    return hash_hmac('sha256', $cns, $segredo);
}

function validarKey($valor, $assinatura) {
    $segredo = '8uRhAeH89naXfFXKGOEj';
    return hash_equals(hash_hmac('sha256', $valor, $segredo), $assinatura);
}