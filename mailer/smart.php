<?php 

$phone = $_POST['user_phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'roma_dvorak@mail.ru';                 // Наш логин
$mail->Password = 'vaskvask12';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('roma_dvorak@mail.ru', 'Flowers shop');   // От кого письмо 
$mail->addAddress('drvmoz@mail.ru');     // Add a recipient
/*$mail->addAddress('ihinstone@gmail.com'); */    // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Вы ввели свой номер телефона на сайте.';
$mail->Body    = 'Вы ввели свой номер телефона на сайте Flowers. <br>Ваш телефон: ' . $phone
. '.<br><br>Убедительная просьба не отвечать на данное сообщение. <br> С уважением компания Flowers shop!';
$mail->AltBody = 'Возможно произошла ошибка, попробуйте отправить форму ещё раз.';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>