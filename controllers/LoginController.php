<?php

class LoginController {
    public function index() {
        include(__DIR__ . '/../view/login.php');
    }

    public function renderLoginInicial() {
        render('login-inicial');
    }

    public function renderLoginJaCadastrado() {
        render('login-ja-cadastrado');
    }

    public function renderLoginPrimeiroAcesso() {
        render('login-primeiro-acesso');
    }
}