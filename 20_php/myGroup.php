<?php
require_once ('lib/repositories/interfaces/ReadableInterface.php');
require_once ('lib/repositories/interfaces/StorableInterface.php');
require_once ('lib/repositories/BaseRepository.php');
require_once ('lib/repositories/GroupRepository.php');

$spu011 = new GroupRepository('spu011');

$spu011->push('Sashko');
$spu011->push('Oleksandr');


echo "<hr><pre>";
var_dump($spu011);
echo "<hr>";
var_dump(json_encode($spu011));
echo "</pre>";