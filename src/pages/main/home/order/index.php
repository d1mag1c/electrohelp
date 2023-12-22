<?php
$fio = $_POST['name'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
//echo $fio;
//echo "<br>";
//echo $email;
mail("truantr@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$tel ,"From: example2@mail.ru \r\n")