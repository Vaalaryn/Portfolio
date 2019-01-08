<?php
if (!empty($_POST['nom']) && !empty($_POST['mail']) && !empty($_POST['sujet']) && !empty($_POST['msg'])) {
	
	

	$nom = $_POST['nom']; 
	$mail = $_POST['mail']; 
	$sujet = $_POST['sujet']; 
	$msg = $_POST['msg']; 


	$mailEnvoi = 'brice.bitot@viacesi.fr'; // Déclaration de l'adresse de destination.

	$passage_ligne = "\n";

	
	$header = "From: \"Contact\"<Contact@alwaysdata.fr>".$passage_ligne;
	$header.= "Reply-to: \"brice.bitot\"<".$mailEnvoi.">".$passage_ligne;
	$header.= "MIME-Version: 1.0".$passage_ligne;
	$header.= "Content-Type: text/plain;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;

	
	if(mail($mailEnvoi,$sujet,$mail."\n".$nom."\n".$msg,$header)) {
		header('Location: ../index.html');	
	} else {
		echo "echec de l'envoi";
	}
}
echo "il y a des champs non remplis";
?>

