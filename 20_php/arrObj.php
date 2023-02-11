<?php
$myArr = [];

$myArr['name'] = 'Oleksandr';
$myArr['email'] = 'keeper@ninydev.com';
$myArr[] = '+380965747708';
$myArr[22]= 'itStep.org';
$myArr[]= 'ninydev.com';

echo "<ul>";
foreach ($myArr as $key => $value) {
    echo '<li>' . $key . ' => ' . $value . '</li>';
}
echo "</ul>";


$jsonStr = json_encode($myArr);
$fromJson = json_decode($jsonStr);
var_dump($fromJson);
echo "<hr>";
echo $myArr['name']; //
// echo $fromJson['name']; // вызывает ошибку

echo '<hr>';
echo $myArr->name . ' <br> <hr>'; // предупреждение - нет такого ключа
echo $fromJson->name . ' <br>';




echo "<hr>";
var_dump($myArr);
echo "<hr>";
var_dump(implode(', ', $myArr));
echo "<hr>";
var_dump(json_encode($myArr));
