<?php

header("Content-Type: application/json");

$dataFile = "users.json";

$method = $_SERVER['REQUEST_METHOD'];

$request = $_SERVER['REQUEST_URI'];

$request = strtok($request, '?');

$path = explode('/', trim($request, '/'));

function loadData($file) {
    if (!file_exists($file)) {
        file_put_contents($file, json_encode([]));
    }

    $json = file_get_contents($file);
    return json_decode($json, true);
}

function saveData($file, $data) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

if ($method === 'GET' && $path[0] === 'users' && count($path) === 1) {

    $users = loadData($dataFile);
    echo json_encode($users);
    exit;
}

if ($method === 'GET' && $path[0] === 'users' && isset($path[1])) {

    $id = (int)$path[1];
    $users = loadData($dataFile);

    foreach ($users as $user) {
        if ($user['id'] === $id) {
            echo json_encode($user);
            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Користувача не знайдено"]);
    exit;
}

if ($method === 'POST' && $path[0] === 'users') {

    $input = json_decode(file_get_contents("php://input"), true);

    if (!isset($input['name']) || !isset($input['email'])) {
        http_response_code(400);
        echo json_encode(["message" => "Необхідні поля: name, email"]);
        exit;
    }

    $users = loadData($dataFile);

    $newUser = [
        "id" => count($users) > 0 ? end($users)['id'] + 1 : 1,
        "name" => $input['name'],
        "email" => $input['email']
    ];

    $users[] = $newUser;

    saveData($dataFile, $users);

    http_response_code(201);
    echo json_encode($newUser);
    exit;
}

if ($method === 'PUT' && $path[0] === 'users' && isset($path[1])) {

    $id = (int)$path[1];
    $input = json_decode(file_get_contents("php://input"), true);

    $users = loadData($dataFile);

    foreach ($users as &$user) {

        if ($user['id'] === $id) {

            if (isset($input['name'])) {
                $user['name'] = $input['name'];
            }

            if (isset($input['email'])) {
                $user['email'] = $input['email'];
            }

            saveData($dataFile, $users);

            echo json_encode($user);
            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Користувача не знайдено"]);
    exit;
}

if ($method === 'DELETE' && $path[0] === 'users' && isset($path[1])) {

    $id = (int)$path[1];

    $users = loadData($dataFile);

    foreach ($users as $key => $user) {

        if ($user['id'] === $id) {

            array_splice($users, $key, 1);

            saveData($dataFile, $users);

            echo json_encode([
                "message" => "Користувача видалено"
            ]);

            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Користувача не знайдено"]);
    exit;
}

http_response_code(404);
echo json_encode(["message" => "Маршрут не знайдено"]);

?>