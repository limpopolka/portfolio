<?php

require '../phpmailer/PHPMailer.php';
require '../phpmailer/SMTP.php';
require '../phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['comment'];
$type_form = $_POST['formsales'];

echo $type_form;
// Формирование самого письма
$title = "New mail for hr from myface.ar";
$body = "
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br>
<b>E-mail:</b> $email<br><br>
<b>Comment:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'notify@hybrid.ai'; // Логин на почте
    $mail->Password   = 'lqL49_wvQ'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('notify@hybrid.ai'); // Адрес самой почты и имя отправителя


		 $mail->addAddress('hr@myface.ar'); 


      

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {

	$result = "success";
} 
else {
	$result = "error1";
}

} catch (Exception $e) {
    $result = "error2";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $mail]);
