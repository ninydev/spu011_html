<?php
$s = [
    'name' => 'Sashko',
    'email' => 'keeper@ninydev.com'
];

$a = [
    'name' => 'Oleksandr',
    'email' => 'nikitin_a@itstep.academy'
];

$group = [$a, $s, 'someStr'];

function doSome($arr) {
    $arr[] = 'add if fun';
    echo 'do';
}

doSome($group);

echo '<pre>';
var_dump($group);
echo '</pre>';



