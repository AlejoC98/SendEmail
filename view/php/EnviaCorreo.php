<?php 
$destinatario = "alegomezc64@gmail.com";
$asunto = "Contacto desde la pagina";
$mensaje = "
<html lang='en'>
 <head>
 	<meta charset='UTF-8'>
 	<title>Prueba de correo</title>
 </head>
 <body>
 	<h1> ".$_POST['nombre']." ".$_POST['apellido']."</h1>
 	<p>Esta persona quiere contactarse con usted, el telefono del usuario es ".$_POST['correo']."</p>
 	<p>".$_POST['mensaje']."</p>
 </body>
 </html>
";

$headers = "From: ".$_POST["nombre"]." ".$_POST["apellido"]."<".$_POST['correo'].">\r\n"; 

if (mail($destinatario,$asunto,$mensaje,$headers)) {
	echo "SUCCESS";
} else 
	echo "ERROR";

 ?>