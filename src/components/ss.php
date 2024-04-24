<?php
function findMax($num1, $num2, $num3) {
    $max = max($num1, $num2, $num3);
    return $max;
}

$num1 = 10;
$num2 = 20;
$num3 = 30;

$maxNumber = findMax($num1, $num2, $num3);