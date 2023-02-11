<?php


$myArr = [];

$myArr[0] = 2;
$myArr[1] = 3;
$myArr[2] = 1;

$myArr[] = 4; // push

sort($myArr);


echo "<hr>";
var_dump($myArr);
echo "<hr>";
var_dump(implode(', ', $myArr));
echo "<hr>";
var_dump(json_encode($myArr));