<?php
function check_password($pwd) {
    $missing = [];
    if (strlen($pwd) < 8) $missing[] = 'length';
    if (!preg_match('/[A-Z]/', $pwd)) $missing[] = 'uppercase';
    if (!preg_match('/[a-z]/', $pwd)) $missing[] = 'lowercase';
    if (!preg_match('/[0-9]/', $pwd)) $missing[] = 'digit';
    if (!preg_match('/[\W_]/', $pwd)) $missing[] = 'special';
    return $missing;
}

function generate_password($length = 12) {
    $upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $lower = 'abcdefghijklmnopqrstuvwxyz';
    $digits = '0123456789';
    $special = '!@#$%^&*()-_[]{}<>~`+=,.;:?/';
    $charset = $upper . $lower . $digits . $special;
    $max = strlen($charset);
    if ($length < 8) $length = 8;

    do {
        $bytes = random_bytes($length);
        $pwd = '';
        for ($i = 0; $i < $length; $i++) {
            $idx = ord($bytes[$i]) % $max;
            $pwd .= $charset[$idx];
        }
    } while (count(check_password($pwd)) > 0);

    return $pwd;
}

$password = '';
$result = null;
$missing = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    $password = $_POST['password'] ?? '';
    if ($action === 'generate') {
        $password = generate_password(12);
        $result = ['ok' => true, 'msg' => 'Згенеровано безпечний пароль.'];
    } elseif ($action === 'check') {
        $missing = check_password($password);
        if (empty($missing)) {
            $result = ['ok' => true, 'msg' => 'Пароль сильний.'];
        } else {
            $result = ['ok' => false, 'msg' => 'Пароль слабкий.'];
        }
    }
}

$user_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
?>
<!doctype html>
<html lang="uk">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Перевірка пароля та генератор</title>
    <style>
        body { font-family: Arial, sans-serif; max-width:700px; margin:40px auto; padding:0 16px; }
        label { display:block; margin-bottom:8px; }
        input[type=text], input[type=password] { width:100%; padding:8px; margin-bottom:12px; box-sizing:border-box; }
        button { padding:8px 12px; margin-right:8px; }
        .ok { color: green; }
        .bad { color: #b00; }
        .hint { background:#f7f7f7; padding:8px; border-left:4px solid #ddd; }
    </style>
</head>
<body>
    <h1>Перевірка пароля та генератор (Варіант 5)</h1>
    <form method="post">
        <label for="password">Пароль</label>
        <input type="text" id="password" name="password" value="<?php echo htmlspecialchars($password, ENT_QUOTES, 'UTF-8'); ?>">
        <div>
            <button type="submit" name="action" value="check">Перевірити</button>
            <button type="submit" name="action" value="generate">Згенерувати безпечний пароль</button>
        </div>
    </form>

    <?php if ($result !== null): ?>
        <div class="hint <?php echo $result['ok'] ? 'ok' : 'bad'; ?>">
            <strong><?php echo htmlspecialchars($result['msg'], ENT_QUOTES, 'UTF-8'); ?></strong>
            <?php if (!$result['ok'] && !empty($missing)): ?>
                <ul>
                    <?php foreach ($missing as $m): ?>
                        <?php if ($m === 'length'): ?><li>Мінімум 8 символів</li><?php endif; ?>
                        <?php if ($m === 'uppercase'): ?><li>Принаймні одна велика літера (A-Z)</li><?php endif; ?>
                        <?php if ($m === 'lowercase'): ?><li>Принаймні одна мала літера (a-z)</li><?php endif; ?>
                        <?php if ($m === 'digit'): ?><li>Принаймні одна цифра (0-9)</li><?php endif; ?>
                        <?php if ($m === 'special'): ?><li>Принаймні один спецсимвол (наприклад !@#$%)</li><?php endif; ?>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
    <?php endif; ?>

    <p>IP користувача: <strong><?php echo htmlspecialchars($user_ip, ENT_QUOTES, 'UTF-8'); ?></strong></p>

    <hr>
    <p>Порада: для локального перегляду запустіть в папці цього проекту вбудований PHP-сервер:</p>
    <pre><code class="language-bash">php -S localhost:8000</code></pre>
</body>
</html>
