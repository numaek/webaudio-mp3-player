<?php

 include('playerConfig.php');


 $nPlayerReihenfolge = array();
 $nPlayerNeueFolge   = array();


 // Vorhandene Daten aus Cookie, Session oder config auslesen
 // =========================================================
 if( isset($_COOKIE['nPlayerFolge']) )
 {
	// Vorgabe aus Cookie
	// ------------------
	$nPLayerOldStr = $_COOKIE['nPlayerFolge'];
	$nPlayerTeile  = explode("|", $_COOKIE['nPlayerFolge']);
	if( sizeof($nPlayerTeile) > 0 )
	{
		foreach( $nPlayerTeile AS $nPlayerTeil )
		{
			if( $nPlayerTeil != "" )
			{
				$nPlayerReihenfolge[] = $nPlayerTeil;
			}
		}
	}
 } else
 if( isset($_SESSION['nPlayerFolge']) )
 {
	// Vorgabe aus Session
	// -------------------
	$nPLayerOldStr = $_SESSION['nPlayerFolge'];
	$nPlayerTeile  = explode("|", $_SESSION['nPlayerFolge']);
	if( sizeof($nPlayerTeile) > 0 )
	{
		foreach( $nPlayerTeile AS $nPlayerTeil )
		{
			if( $nPlayerTeil != "" )
			{
				$nPlayerReihenfolge[] = $nPlayerTeil;
			}
		}
	}
 } else
   {
	// Vorgabe aus Config-Datei
	// ------------------------
	$nPLayerOldStr      = "||||";
	$nPlayerReihenfolge = $playerConfig['folge'];
   }


 // Neue Position berechnen
 // =======================
 if( isset($_GET['block']) && isset($_GET['dir']) )
 {
	$blockName = "block".$_GET['block'];

	if( in_array($blockName,$nPlayerReihenfolge) )
	{
		$key = array_search($blockName, $nPlayerReihenfolge);

		if( $_GET['dir'] == "down" )
		{
			if( $key < (sizeof($nPlayerReihenfolge)-1) )
			{
				// Eine Position nach unten
				// ------------------------
				for( $c1 = 0; $c1 < $key; $c1++ )
				{
					$nPlayerNeueFolge[] = $nPlayerReihenfolge[$c1];
				}

				$nPlayerNeueFolge[] = $nPlayerReihenfolge[($c1+1)];
				$nPlayerNeueFolge[] = $nPlayerReihenfolge[($c1+0)];

				for( $c2 = ($c1+2); $c2 < sizeof($nPlayerReihenfolge); $c2++ )
				{
					$nPlayerNeueFolge[] = $nPlayerReihenfolge[$c2];
				}
			} else
			  {
				// Auf Position ganz oben
				// ----------------------
				$nPlayerNeueFolge[] = $nPlayerReihenfolge[$key];

				for( $c2 = 0; $c2 < (sizeof($nPlayerReihenfolge)-1); $c2++ )
				{
					$nPlayerNeueFolge[] = $nPlayerReihenfolge[$c2];
				}
			  }
		} else
		  {
			if( $key > 0 )
			{
				for( $c1 = 0; $c1 < ($key-1); $c1++ )
				{
					$nPlayerNeueFolge[] = $nPlayerReihenfolge[$c1];
				}

				$nPlayerNeueFolge[] = $nPlayerReihenfolge[($c1+1)];
				$nPlayerNeueFolge[] = $nPlayerReihenfolge[($c1+0)];

				for( $c2 = ($c1+2); $c2 < sizeof($nPlayerReihenfolge); $c2++ )
				{
					$nPlayerNeueFolge[] = $nPlayerReihenfolge[$c2];
				}
			} else
			  {
				// Auf Position ganz unten
				// -----------------------
				for( $c2 = 1; $c2 < sizeof($nPlayerReihenfolge); $c2++ )
				{
					$nPlayerNeueFolge[] = $nPlayerReihenfolge[$c2];
				}

				$nPlayerNeueFolge[] = $nPlayerReihenfolge[$key];
			  }
		  }
	}


	// Cookie aktualisieren
	// ====================
	$nPlayerSpeicher = "";
	foreach( $nPlayerNeueFolge AS $blockStr )
	{
		// $nPlayerSpeicher .= substr($blockStr, 5, (strlen($blockStr)-5))."|";
		   $nPlayerSpeicher .= $blockStr."|";
	}
	$nPlayerSpeicher = substr($nPlayerSpeicher, 0, -1);

	setcookie("nPlayerFolge", $nPlayerSpeicher, time() + ( 3600 * 24 * 365 ) );
 }

 header("Location: player.php");


?>