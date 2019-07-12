

<?php

// require_once("class/class.phpmailer.php");
header('Content-Type: application/json');




require_once 'phpmailer.php';



// echo "<pre>";
// var_dump($_POST);




 // $dados = array('tipo' => 1,'email' => "rafael.g.cavalheiro@gmail.com",'nome' => "Rafael", 'assunto' => "Sua Casa - Rafael", 'mensagem' => "Novo Lead no sistema Sua Casa!Nome:RafaelEmail:rafael.g.cavalheiro@gmail.comTelefone54996078007");



	// echo "<pre>";
	// var_dump($dados);
	// echo "</pre>";

	

// 	if (envia_email($dados)){
// 	echo "workoou";
// }else{
// 	echo "n workou";
// }



if (envia_email($_POST)){
	return true;
}else{
	return false;
}


function envia_email($dados){






$assunto = $dados['assunto'];
$mensagem = $dados['mensagem'];

// $mailer->AddBCC("jaderfehn@gmail.com", "Jader");
// $mailer->AddBCC("ricardo@rclassic.com.br", "Ricardo");



$mail = new PHPMailer(true);

$mail->IsMail();


$tipo_hospedagem = 1;


if($tipo_hospedagem == 1){
// Configuring SMTP server settings
$mail->Host = "localhost";
// $mail->Port = $porta;
// $mail->SMTPSecure = $tipo_smtp;
// $mail->SMTPAuth = true;


// $mail->Username = $email;
// $mail->Password = $password;
}else{

// Configuring SMTP server settings
$mail->Host = "smtpout.secureserver.net";
$mail->Port = 465;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;


$mail->Username = "contato@suacasaseuestilo.com.br";
$mail->Password = "Senha@123";



}








$mail->setFrom("contato@suacasaseuestilo.com.br", "Sua Casa");



$email = $dados['email'];
$nome = $dados['nome'];

$email2 = "contato@suacasaseuestilo.com.br";
$nome2 = "Sua Casa";

// $email3 = "secunanet@hotmail.com";
// $nome3 = "xisde";

$email3 = "jaderfehn@gmail.com";
$nome3 = "Jader";
$email4 = "ricardo@rclassic.com.br";
$nome4 = "Ricardo";
$email5 = "carloseduardogorski@icloud.com";
$nome5 = "Carlos Eduardo";
$email6 = "contato@rclassic.com.br";
$nome6 = "Classic Negócios Imobiliários";



if($dados['tipo'] == "1"){ // novo lead

	$mail->addAddress($email2, $nome2); // suacasa
$mail->addAddress($email3, $nome3); // user1
$mail->addAddress($email4, $nome4); // user2
$mail->addAddress($email5, $nome5);
$mail->addAddress($email6, $nome6);

}elseif($dados['tipo'] == 2){ // simulacao finalizada

		$mail->addAddress($email2, $nome2); // suacasa
$mail->addAddress($email3, $nome3); // user1
$mail->addAddress($email4, $nome4); // user2
$mail->addAddress($email5, $nome5);
$mail->addAddress($email6, $nome6);

}elseif($dados['tipo'] == 3){ // viva seus sonhos


$mail->addAddress($email, $nome); // cliente 

}




// $mail->addCustomHeader("BCC: contato@suacasaseuestilo.com.br");
//
// $mailer->AddBCC("rafael.g.cavalheiro@gmail.com", "Jader");

$mail->Subject  = $assunto;

// $headers = "Reply-To: The Sender <sender@sender.com>\r\n"; 
//   $headers .= "Return-Path: The Sender <sender@sender.com>\r\n";
//   $headers .= "From: The Sender <senter@sender.com>\r\n"; 
//   $headers .= "Organization: Sender Organization\r\n";
//   $headers .= "MIME-Version: 1.0\r\n";
//   $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
//   $headers .= "X-Priority: 3\r\n";
//   $headers .= "X-Mailer: PHP". phpversion() ."\r\n"; 


//    $mail->addCustomHeader($headers);

$mail->msgHTML($mensagem);
//$mail->Body     = $mensagem;

if(!$mail->send()) {
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
  return false;
} else {

	// echo "FUNFAAA";
	return true;

}

}






// echo "FUNFAAA";




// echo  '<pre>';
// print_r($_POST);

?> 