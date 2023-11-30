<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$routes = [
    '/'           => 'LoginController',
    '/menu'       => 'MenuController',
    '/historico'  => 'HistoricoController',
    '/formulario' => 'FormularioController'
];

$request_uri = $_SERVER['REQUEST_URI'];

if(!array_key_exists($request_uri, $routes) && !str_contains($request_uri, '/ajax')) {
    http_response_code(404);
    echo '<h1>404 Página não encontrada</h1>';
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && str_contains($request_uri, '/ajax')) {
    $uri_parts = explode('/', $request_uri);
    $controller_name = $uri_parts[2];
    $method_name = $uri_parts[3];
    require_once('./controllers/' . $controller_name . '.php');
    $controller = new $controller_name();
    $controller->$method_name();
}

if (array_key_exists($request_uri, $routes)) {
    $controller_name = $routes[$request_uri];
    require_once('./controllers/' . $controller_name . '.php');
    $controller = new $controller_name();
    $controller->index();
    exit();
}
