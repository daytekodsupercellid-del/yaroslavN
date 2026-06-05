<?php

#[Attribute]
class TraceableSearch {}

$visited = [];

$tree = [
    "Техніка" => [
        "Комп'ютери" => [
            "Ноутбуки" => [],
            "ПК" => []
        ],
        "Телефони" => []
    ],
    "Одяг" => [
        "Чоловічий" => [],
        "Жіночий" => []
    ]
];

function logNode($node) {
    global $visited;
    $visited[] = $node;
}

#[TraceableSearch]
function findCategory($tree, $name, $callback) {
    foreach ($tree as $key => $children) {
        $callback($key);

        if ($key === $name) {
            return true;
        }

        if (!empty($children)) {
            if (findCategory($children, $name, $callback)) {
                return true;
            }
        }
    }
    return false;
}

$result = null;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $search = $_POST["name"];
    $result = findCategory($tree, $search, 'logNode');
}
?>

<form method="POST">
    Пошук категорії: <input type="text" name="name">
    <button>Шукати</button>
</form>

<?php if ($result !== null): ?>
    <p><?= $result ? "Знайдено" : "Не знайдено" ?></p>
    <p>Пройдені вузли:</p>
    <ul>
        <?php foreach ($visited as $v): ?>
            <li><?= $v ?></li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>