<?php

class LoginController {
    public function index() {
        include(__DIR__ . '/../view/login.php');
    }

    public function getSample() {
        $data = [
            'nome' => 'Fulano',
            'idade' => 30,
            'email' => 'teste@email.com'
        ];
        header('Content-Type: application/json');
        echo json_encode($data);
    }
}