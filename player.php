<?php

 ini_set('session.use_cookies',     1);
 ini_set('session.cookie_lifetime', 1800);
 ini_set('session.gc_maxlifetime',  1800);

 session_start();

?><!DOCTYPE html>
<html>
	<head>
		<title>numaek WebAudio Player 2.0</title>

		<META charset="utf-8">

		<META NAME="language"            CONTENT="de">
		<META NAME="Description"         CONTENT="Audio Player, numaek.de PHP & Javascript, Scripte & Anwendungen. CMS, Homepage-Erstellung für Privat- und Firmenkunden.">
		<META NAME="Keywords"            CONTENT="Web, Audio, API, Player, Canvas, Javascript">
		<META NAME="Copyright"           CONTENT="Copyright: numaek Webprogrammierung">
		<META NAME="Public"              CONTENT="all">
		<META NAME="Rating"              CONTENT="all">
		<META NAME="audience"            CONTENT="all">
		<META NAME="expires"             CONTENT="never">
		<META NAME="Author"              CONTENT="numaek Webprogrammierung">
		<META NAME="publisher"           CONTENT="numaek Webprogrammierung">
		<META NAME="robots"              CONTENT="noindex,nofollow">
		<META NAME="revisit-after"       CONTENT="7 days">
		<META HTTP-EQUIV="cache-control" content="no-cache">
		<META HTTP-EQUIV="pragma"        content="no-cache">
	</head>
 <body>

 <?php include('playerMain.php'); ?>

 </body>
</html>
