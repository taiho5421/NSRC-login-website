<?php
session_start();
$_SESSION['cha'] = substr(str_shuffle('1234ABCdef'), 0, 4);
$str = str_split($_SESSION['cha']);
asort($str);
$_SESSION['ans'] = '';
foreach ($str as $k => $v) {
    $_SESSION['ans'] .= $k;
}