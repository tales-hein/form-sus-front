<?php

class MenuController {

    private $dadosRequest;

    public function __construct($dadosRequest = null) {
        $this->dadosRequest = $dadosRequest;
    }

    public function index() {
        include(__DIR__ . '/../view/menu-principal.php');
    }

    public function formulario() {
        $cns = $this->dadosRequest['cns'];
        routeTo('formulario', ['cns' => $cns, 'key' => gerarAssinatura($cns)]);
    }

    public function historico() {
        $cns = $this->dadosRequest['cns'];
        routeTo('historico', ['cns' => $cns, 'key' => gerarAssinatura($cns)]);
    }

}