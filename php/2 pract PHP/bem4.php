<?php

#[Attribute]
class LogTransactionType {
    public function __construct(public $type) {
        file_put_contents("log.txt", "Last call: " . date("Y-m-d H:i:s") . "\n", FILE_APPEND);
    }
}

$transactions = [
    ["amount" => 100, "type" => "in", "date" => "2024-01-01"],
    ["amount" => 50, "type" => "out", "date" => "2024-01-02"],
    ["amount" => 70, "type" => "out", "date" => "2024-01-03"],
];

#[LogTransactionType(type: "out")]
function isOutgoing($t) {
    return $t["type"] === "out";
}

function calculateTotal($transactions, $filter) {
    $filtered = array_filter($transactions, $filter);
    return array_sum(array_column($filtered, 'amount'));
}

$total = calculateTotal($transactions, 'isOutgoing');
?>

<h2>Витрати</h2>

<table border="1">
<tr><th>Amount</th><th>Type</th><th>Date</th></tr>

<?php foreach ($transactions as $t): ?>
<tr>
<td><?= $t["amount"] ?></td>
<td><?= $t["type"] ?></td>
<td><?= $t["date"] ?></td>
</tr>
<?php endforeach; ?>

</table>

<p>Сума витрат: <?= $total ?></p>