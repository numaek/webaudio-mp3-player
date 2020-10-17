<?php

 $playerConfig = array();


 /*
  * Reihenfolge der Bausteine ändern
  * ================================
  * 
  * Dazu einfach die 5 unten stehenden Zeilen vertauschen.
  * 
  */

 $playerConfig['folge']   = array();

 $playerConfig['folge'][] = "blockWAVE";
 $playerConfig['folge'][] = "blockMAIN";
 $playerConfig['folge'][] = "blockPL";
 $playerConfig['folge'][] = "blockEQ";
 $playerConfig['folge'][] = "blockDSP";


 // Unterhalb nichts mehr ändern!
 // ###########################################################################################################################################################################













































 // Vorhandene Daten aus Cookie, Session oder config auslesen
 // =========================================================

 if( isset($_GET['frame']) )
 {
	// Feste Folge in DJ-Konfiguration
	// -------------------------------
	$nPlayerReihenfolge[] = "blockWAVE";
	$nPlayerReihenfolge[] = "blockMAIN";
	$nPlayerReihenfolge[] = "blockPL";
	$nPlayerReihenfolge[] = "blockEQ";
	$nPlayerReihenfolge[] = "blockDSP";
 } else
 if( isset($_COOKIE['nPlayerFolge']) )
 {
	// Vorgabe aus Cookie
	// ------------------
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
	$nPlayerReihenfolge = $playerConfig['folge'];
   }


 // Kalender
 // ========
 function nPlayerKalender($monat, $jahr)
 {
	GLOBAL $LANG;
	GLOBAL $monat_text;
	GLOBAL $borderStyle;

	$zeit         = time();
	$datum        = getdate($zeit);
	$day          = "$datum[mday]";
	$dieser_monat = "$datum[mon]";
	$dieses_jahr  = "$datum[year]";

	$schaltjahr   = gettype($jahr/4);
	if( $schaltjahr == "integer" )
	{
		$monat_tage = array(0,31,29,31,30,31,30,31,31,30,31,30,31);
	} else
	  {
		$monat_tage = array(0,31,28,31,30,31,30,31,31,30,31,30,31);
	  }

	$startDat   = getdate(mktime(2,0,0,$monat,1,$jahr));
	$beginn     = "$startDat[wday]";
	if( $beginn == 0 )
	{
		$beginn=7;
	}

	$zeile     = 1;
	$spalte    = 1;
	$tagnummer = 1;

	if( $monat == 1 )
	{
		$kalLinkZurueck = $_SERVER['PHP_SELF']."?monat=12&jahr=".($jahr-1);
		$kalLinkVor     = $_SERVER['PHP_SELF']."?monat=".($monat+1)."&jahr=".$jahr;
	} else
	if( $monat == 12 )
	{
		$kalLinkZurueck = $_SERVER['PHP_SELF']."?monat=".($monat-1)."&jahr=".$jahr;
		$kalLinkVor     = $_SERVER['PHP_SELF']."?monat=1&jahr=".($jahr+1);
	} else
	  {
		$kalLinkZurueck = $_SERVER['PHP_SELF']."?monat=".($monat-1)."&jahr=".$jahr;
		$kalLinkVor     = $_SERVER['PHP_SELF']."?monat=".($monat+1)."&jahr=".$jahr;
	  }

	echo "<style type=\"text/css\">

		.nPlKopf
		{
			width:			20px;
			color:			#303030;
			background-color:	#00FFFF;
			text-align:		center;
		}

		.nPlTag
		{
			width:			20px;
			color:			#00FFFF;
			background-color:	#303030;
			text-align:		center;
		}

		.nPlHeute
		{
			width:			20px;
			color:			#000000;
			background-color:	orange;
			text-align:		center;
		}

	</style>

	<table border=\"0\" style=\"border: 0px; float: right; border-spacing: 2px;\">
		<tr>
			<td class=\"nPlKopf\">Mo</td>
			<td class=\"nPlKopf\">Di</td>
			<td class=\"nPlKopf\">Mi</td>
			<td class=\"nPlKopf\">Do</td>
			<td class=\"nPlKopf\">Fr</td>
			<td class=\"nPlKopf\" style=\"color: #0000FF;\">Sa</td>
			<td class=\"nPlKopf\" style=\"color: #FF0000;\">So</td>
		</tr>
		<tr>\n";

		for( $y = 1; $y < ( $monat_tage[$monat] + $beginn ); $y++ )
		{
			if( $y < $beginn )
			{ 
				echo "<td>&nbsp;</td>"; 
			} else
				if( $monat == $dieser_monat && $jahr == $dieses_jahr && $day == $tagnummer )
				{
					echo "<td class=\"nPlHeute\">".$tagnummer."</td>"; $tagnummer++;
				} else
				  { 
					echo "<td class=\"nPlTag\">$tagnummer</td>"; $tagnummer++;
				  }
			$temp = gettype($spalte/7);
			if( $temp == "integer" && $y < ( $monat_tage[$monat] + $beginn - 1 ) )
			{
				echo "</tr>\n<tr>";
				$zeile++;
			}
			$spalte++;
		}

		$ende = $zeile * 7;
		$rest = ($ende - $spalte) + 1;
		if( $rest >= 7 )
		{
			$rest=0;
		}

		for( $r = 0; $r < $rest; $r++ )
		{
			echo "<td>&nbsp;</td>";
		}

		if( $zeile < 6 )
		{
			echo "</tr>";
			for( $r = 0; $r < 7; $r++ )
			{
				echo "<td>&nbsp;</td>";
			}
		}

	echo "</tr></table>";
 }

?>