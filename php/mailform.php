<?php

$company = stripslashes($_POST['company'])."\r\n";
$message = stripslashes($_POST['message'])."\r\n";
$email = stripslashes($_POST['email'])."\r\n";
$adress = stripslashes($_POST['adress'])."\r\n";

$name = stripslashes($_POST['name'])."\r\n";


$subject = "Bluenubes is alive!";
$host = "info@bluenubes.com";

$body = <<<EOD

$message\r\n

$company
$name
$email
$adres

EOD;

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{

	$headers = "From: $email\r\n";

	$mail_status = mail($host, $subject, $body, $headers);

	if ($mail_status) { ?>
	  <script language="javascript" type="text/javascript">
	    alert('Message send! We will contact you asap!');
	    window.location = 'http://www.bluenubes.com';
	  </script>
	<?php
	}
	else { ?>
	  <script language="javascript" type="text/javascript">
	    alert('please, retry or mail to info@bluenubes.com');
	    window.location = 'http://www.bluenubes.com';
	  </script>
	<?php
	}
	?>
<?php
} else {	 ?>
	  <script language="javascript" type="text/javascript">
	    window.location = 'http://www.bluenubes.com';
	  </script>
	<?php
	}	
?>

