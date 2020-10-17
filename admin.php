<?php

 // Die beiden Zugangsdaten bitte umgehend anpassen!
 // ------------------------------------------------

 define('SCRIPT_LOGIN',       'login');
 define('SCRIPT_PASSWORT',    'passwort');


 /* Ab hier nichts mehr ändern ! ================================================================================================================================================================= */

















































































 define('SCRIPT_IMPORT_FILE', 'import/import.m3u');


 ini_set('session.use_cookies',     1);
 ini_set('session.cookie_lifetime', 1800);
 ini_set('session.gc_maxlifetime',  1800);
 session_start();


 include('nID3class.php');


 // Variable deklarieren
 // ====================
 function init_var($varName, $default)
 {
	if( isset($_GET[$varName]) )
	{
		$$varName = $_GET[$varName];
	} else
		if( isset($_POST[$varName]) )
		{
			$$varName = $_POST[$varName];
		} else
		  {
			$$varName = $default;
		  }

	return $$varName;
 }

 $id        = init_var('id',         0);
 $plIndex   = init_var('plIndex',    0);
 $action    = init_var('action',    'show');
 $start     = init_var('start',      0);
 $sort      = init_var('sort',      'id');
 $direction = init_var('direction', 'DESC');
 $file      = init_var('file',      '');


 // Login Admin
 // ===========
 if( isset($_COOKIE['webAudioAdmin']) )
 {
	define('ADMIN_LOGIN', $_COOKIE['webAudioAdmin']);
 } else
	if( isset($_SESSION['webAudioAdmin']) )
	{
		define('ADMIN_LOGIN', $_SESSION['webAudioAdmin']);
	} else
	  {
		define('ADMIN_LOGIN', 'logout');
	  }


 if( 1 == 1 )
 {
	function formatFilesize($bytes)
	{
		if( $bytes > ( 1024 * 1024 ) )
		{
			$size = number_format(($bytes/(1024*1024)),3,",",".")." MB";
		} else
			if( $bytes > 1024 )
			{
				$size = number_format(($bytes/1024),0,",",".")." KB";
			} else
				if( $bytes == 0 )
				{
					$size = "0";
				} else
				  {
					$size = $bytes." Bytes";
				  }

		return $size;
	}

	function nPlayerScanDir($subDir)
	{
		$countMp3  = 0;
		$countWav  = 0;
		$countOgg  = 0;
		$countSize = 0;

		if( $scanSubDir = opendir($subDir."/") )
		{
			while( ( $subFile = readdir($scanSubDir) ) !== false ) 
			{
				clearstatcache();
				if( $subFile != "." && $subFile != ".." )
				{
					if( !is_dir($scanSubDir.$subFile) )
					{
						$fileMime = strtolower(strrchr($subFile, '.'));
						if( $fileMime == ".mp3" ) { $countMp3++; }
						if( $fileMime == ".wav" ) { $countWav++; }
						if( $fileMime == ".ogg" ) { $countOgg++; }

						$countSize += filesize($subDir."/".$subFile);
					}
				}
			}
		}

		return $countMp3."|".$countWav."|".$countOgg."|".$countSize;
	}

	// ##########################################################################################################################################################################################

	if( $action == "log" )
	{
		// Einloggen und erneut auf die Seite weiterleiten
		// ===============================================
		if( $_POST['log'] == SCRIPT_LOGIN && $_POST['pass'] == SCRIPT_PASSWORT )
		{
			$_SESSION['webAudioAdmin'] = SCRIPT_PASSWORT;

			if( isset($_POST['loginsave']) )
			{
				setcookie("webAudioAdmin", SCRIPT_PASSWORT, time() + ( 3600 * 24 * 365 ) );
			}

			header("Location: admin.php");
		} else
		  {
			header("Location: admin.php?errorMsg=1");
		  }
	}

	if( $action == "logout" )
	{
		setcookie("webAudioAdmin", "logout", time() - ( 3600 * 24 * 365 ) );
		session_unset();
		session_destroy();

		header("Location: admin.php");
	}

	if( ADMIN_LOGIN == "logout" )
	{
		$action = "login";
	}

	if( $action == "setCheckSort" )
	{
		if( isset($_COOKIE['nPlayerCheckSort']) ) { $nPlayerCheckSort = $_COOKIE['nPlayerCheckSort']; } else if( isset($_SESSION['nPlayerCheckSort']) ) { $nPlayerCheckSort = $_COOKIE['nPlayerCheckSort']; } else { $nPlayerCheckSort = 'file'; }
		if( isset($_COOKIE['nPlayerCheckDir'])  ) { $nPlayerCheckDir  = $_COOKIE['nPlayerCheckDir'];  } else if( isset($_SESSION['nPlayerCheckDir'])  ) { $nPlayerCheckDir  = $_COOKIE['nPlayerCheckDir'];  } else { $nPlayerCheckDir  = 'ASC';  }

		if( $nPlayerCheckSort == $_GET['sort'] )
		{
			$setDirTo = ( $nPlayerCheckDir == 'DESC' ) ? 'ASC' : 'DESC';
		} else
		  {
			$setDirTo = $nPlayerCheckSort;
		  }

		$_SESSION['nPlayerCheckSort'] = $_GET['sort'];
		$_SESSION['nPlayerCheckDir']  = $setDirTo;

		setcookie("nPlayerCheckSort", $_GET['sort'], time() + ( 3600 * 24 * 365 ) );
		setcookie("nPlayerCheckDir",  $setDirTo,     time() + ( 3600 * 24 * 365 ) );

		header("Location: admin.php?action=check");
	}

	// ##########################################################################################################################################################################################

	echo "<!DOCTYPE html>
	<html lang=\"de\">
		<head>
			<title>numaek WebAudio Player Admin</title>
			<META charset=\"utf-8\">
			<META NAME=\"viewport\" content=\"width=device-width, initial-scale=1.0\">

			<link rel=\"stylesheet\" type=\"text/css\" href=\"src/admin.css\">
			<script type=\"text/javascript\" src=\"src/admin.js\"></script>
		</head>
	<body>

	<script language=\"javascript\">

		function showConsole()
		{
			console.log('%c.:: numaek WebAudio Player 2.0 ::.', 'font-weight: bold; font-size: 14px; background-color: #505050; color: gold; padding: 5px; border: 2px solid gold; border-radius: 10px; text-decoration: underline;');
			console.info('http://www.numaek.de/Tutorial-25-WebAudio_Player.html\\nhttp://www.numaek.de');
		}

		window.onload = setTimeout('showConsole()', 500);

	</script>

	<br>
	<div style=\"width: 350px; margin: 0px auto; text-align: center; padding: 3px; border: 2px solid gold; border-radius: 10px; background-color: #000000;\">
		<a href=\"http://www.numaek.de\" target=\"_blank\" title=\"www.numaek.de\" style=\"font-weight: bold; text-decoration: underline; color: gold;\">.:: numaek WebAudio Player 2.0 ::.</a>
	</div>
	<br><br>\n";

	if( ADMIN_LOGIN != "logout" )
	{
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" value=\"&Uuml;bersicht\" onclick=\"this.blur(); self.location.href='admin.php';\" title=\"Playlist-&Uuml;bersicht\">\n\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='admin.php?action=import';\"              value=\"Import\" title=\"Playlist importieren\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='admin.php?action=radio_edit';\"          value=\"Radio\"  title=\"Radiosender verwalten\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='admin.php?action=check';\"               value=\"Check\"  title=\"Verzeichnisse &uuml;berpr&uuml;fen\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='admin.php?action=editSrc&file=config';\" value=\"Konfig\" title=\"Konfigurationsdatei bearbeiten\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='admin.php?action=editSrc&file=css';\"    value=\"Style\"  title=\"CSS Styledatei bearbeiten\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='admin.php?action=help';\"                value=\"Hilfe\"  title=\"Hilfethemen\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"javascript:sicher('admin.php?action=logout');\"              value=\"Logout\" title=\"Aus der Playlist-Administration ausloggen\">\n";
		echo "<input type=\"button\" class=\"nMusicButtonMain\" style=\"width: 100px;\" onclick=\"self.location.href='player.php';\"                           value=\"Player\" title=\"Zur&uuml;ck zum Player\">\n";
		echo "<br><br>\n";
	} else
	  {
		echo "<br>\n";
	  }

	if( $action == "login" )
	{
		// Login-Formular anzeigen
		// =======================
		echo "<table border=\"0\" style=\"width: 450px; margin: 0px auto; border: 1px solid gold; box-shadow:                 15px 15px 5px #000000;\">
			<form name=\"login\" action=\"admin.php\" method=\"post\">
			<tr>
				<td colspan=\"2\" style=\"text-align: center; height: 20px;\">
					<br><span style=\"color: gold; font-weight: bold;\">Playlisten verwalten</span><br><br>\n";
					if( isset($_GET['errorMsg']) )
					{
						echo "<span style=\"color: red; background-color: #000000; padding: 5px; border-radius: 15px;\">&nbsp;Die Zugangsdaten sind falsch!&nbsp;</span>\n";
					} else
					  {
						echo "&nbsp;";
					  }
				echo "<br><br></td>
			</tr>
			<tr>
				<td style=\"text-align: right; width: 50%;\">Login:</td>
				<td style=\"text-align: left;  width: 50%;\"><input type=\"text\" name=\"log\" value=\"\" style=\"width: 150px;\"></td>
			</tr>
			<tr>
				<td style=\"text-align: right;\">Passwort:</td>
				<td style=\"text-align: left;\"><input type=\"password\" name=\"pass\" value=\"\" style=\"width: 150px;\"></td>
			</tr>
			<tr>
				<td style=\"text-align: right; vertical-align: top;\">&nbsp;
					<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\" onclick=\"self.location.href='player.php';\">
				</td>
				<td style=\"text-align: left; vertical-align: top;\">
					<input type=\"submit\" class=\"nMusicButton\" value=\"Login\">
					<sub><input type=\"checkbox\" name=\"loginsave\" value=\"ja\" CHECKED></sub>speichern
					<input type=\"hidden\" name=\"action\" value=\"log\">
				</td>
			</tr>

			<tr>
				<td style=\"text-align: center; height: 50px;\" colspan=\"2\">
					[<a href=\"http://www.numaek.de\" target=\"_blank\" title=\"Diesen Player gibt es bei...\">www.numaek.de</a>]
				</td>
			</tr>


			</form>
		</table>\n";
	}

	// ******************************************************************************************************************************************************************************************

	if( $action == "help" )
	{
		echo "<fieldset><legend><h4>&nbsp;Hilfethemen&nbsp;</h4></legend>

		<p    class=\"helpContent\">
			[<a href=\"nPlayer_Anleitung.html\" target=\"_blank\">Installations-Anleitung aufrufen</a>]
		</p><br>

		<span class=\"helpTopic\">Rechte der Dateien und Verzeichnisse</span><br>
		<p    class=\"helpContent\">
			Da bei diesem Player bewusst auf den Einsatz einer MYSQL-Datenbank verzichtet wurde, m&uuml;ssen die Daten direkt in Dateien gespeichert werden. 
			Das widerrum erfordert leider diverse Einstellungen am Dateisystem des Servers.<br>
			<br>
			Der Player verf&uuml;gt &uuml;ber 4 Verzeichnisse, in denen Datei geschrieben, gelesen und hochgeladen werden ( \"files/\", \"playlists/\", \"import/\", \"export/\" ).<br>
			Diese ben&ouml;tigen die Rechte (chmod in Oktal-Werten) 0750. Auf manchen Servern kann es erforderlich sein, diese Rechte auf 0755 zu &auml;ndern.<br>
			Die Rechtevergabe kann detailliert mit einem FTP-Programm oder auf der <a href=\"admin.php?action=check\">Check-Seite</a> erfolgen.<br>
			<br>
			Das Bearbeiten der beiden Dateien \"src/Config.js\" und \"src/style.css\" macht hier eine Rechtevergabe auf 0750 erforderlich.
		</p><br>

		<span class=\"helpTopic\">Die Check-Seite</span><br>
		<p    class=\"helpContent\">
			Auf der <a href=\"admin.php?action=check\">Check-Seite</a> werden die Inhalte der Verzeichnisse dargestellt und auch die M&ouml;glichekeit zur L&ouml;schung f&uuml;r eine 
			manuelle Korrektur geboten. Eine L&ouml;schung kann nicht r&uuml;ckg&auml;ngig gemacht werden, daher bitte vorsichtig verwenden!
			Selbst erzeugt Unterordner k&ouml;nnen hier nicht bearbeitet werden.
			<br><br>
			Hochgeladene .mp3-Datein sollten im Namen mit einem Pr&auml;fix versehen werden.<br>
			Entfernt man einen Track aus einer Playlist, so wird die Datei nicht automatisch mit entfernt, da sie vielleicht noch an anderer Stelle verwendet wird.
			Deren L&ouml;schung muss dann also manuell im Verzeichnis \"files/\" erfolgen.
		</p><br>

		<span class=\"helpTopic\">Cache des Dateisystems</span><br>
		<p    class=\"helpContent\">
			Sollte es einmal zu merkw&uuml;rdigen oder unerkl&auml;rlichen Anzeigen sowie augenscheinlich nicht durchgef&uuml;hrten &Auml;nderungen kommen, 
			hilft es i.d.R. den Browsercache zu leeren, um alle anh&auml;ngenden Dateien neu zu laden.
			Trotz programmierseitiger Cacheleerung kann es vereinzelt zu nicht aktualisierten Darstellungen kommen.
		</p><br>

		</fieldset>\n\n";
	}

	// ******************************************************************************************************************************************************************************************

	if( $action == "restoreSrc" )
	{
		if( $file == "config" )
		{
			$orgFileName = "src/backup/Config.js";
		} else
		  {
			$orgFileName = "src/backup/style.css";
		  }

		$orgFileSize    = ( filesize($orgFileName) > 0 ) ? filesize($orgFileName) : 1;
		$orgFilePointer = fopen($orgFileName, "r");
		$orgFileContent = fread($orgFilePointer, $orgFileSize);
		fclose($orgFilePointer);

		$restore = 1;
		$action  = "saveSrc";
	}

	if( $action == "saveSrc" )
	{
		if( $file == "config" )
		{
			$indexFileName  = "src/Config.js";
		} else
		  {
			$indexFileName  = "src/style.css";
		  }

		if( isset($restore) )
		{
			$fileNewContent = $orgFileContent;
			$savedSrc       = "Der originale Dateiinhalt wurde wieder hergestellt!";
		} else
		  {
			$fileNewContent = stripslashes($_POST['file_value']);
			$savedSrc       = "Der Dateiinhalt wurde gespeichert!";
		  }

		$piFilePointer = fopen($indexFileName, "w");
		fwrite($piFilePointer, $fileNewContent);
		fclose($piFilePointer);
		clearstatcache();

		$action = "editSrc";
	}

	if( $action == "editSrc" )
	{
		clearstatcache();

		if( $file == "config" )
		{
			$indexFileName = "src/Config.js";
			$headLine      = "Konfigurations-Datei bearbeiten";
		} else
		  {
			$indexFileName = "src/style.css";
			$headLine      = "CSS Styledatei bearbeiten";
		  }

		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);

		echo "<fieldset><legend><h4>&nbsp;".$headLine."&nbsp;</h4></legend>
		<form name=\"fileEeditor\" action=\"admin.php\" method=\"post\">
		<input type=\"submit\" class=\"nMusicButton\" value=\"Speichern\" style=\"margin-left: 5px;\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Original wieder herstellen\" onclick=\"sicher('admin.php?action=restoreSrc&file=".$file."');\">
		<input type=\"hidden\" name=\"action\" value=\"saveSrc\">
		<input type=\"hidden\" name=\"file\"   value=\"".$file."\">\n";
		if( isset($savedSrc) )
		{
			echo "<span style=\"margin-left: 25px; background-color: black; color: red; font-weight: bold;\">&nbsp;".$savedSrc."&nbsp;</span><br>\n";
		}
		echo "<br><br>
		<table border=\"0\" style=\"width: 100%; border: 1px solid black; border-spacing: 1px;\">
			<tr>
				<th>Inhalt der Datei: \"".$indexFileName."\"</th>
			</tr>
			<tr>
				<td style=\"text-align: center;\">
					<textarea name=\"file_value\" rows=\"30\" style=\"width: 99%; background-color: #EFEFEF;\">".$indexFileContent."</textarea>
				</td>
			</tr>
		</table></form>
		</fieldset>\n\n";
	}

	// ******************************************************************************************************************************************************************************************

	if( $action == "radio_save" )
	{
		// Playlist neu schreiben
		// ======================
		$plStr  = "/* \r\n";
		$plStr .= " * numaek WebAudio Player\r\n";
		$plStr .= " * ======================\r\n";
		$plStr .= " * Radio Senderliste\r\n";
		$plStr .= " * Automatisch erstellt am ".date('d.m.Y')." um ".date('H:i')." Uhr\r\n";
		$plStr .= " * \r\n";
		$plStr .= " */\r\n\r\n";

		$plStr .= "nMusicRadiolist = [];\r\n\r\n";

		$trackCounter = 0;

		for( $trackNr = 0; $trackNr < sizeof($_POST['tl_name']); $trackNr++ )
		{
			// Track bei Löschung nicht übernehmen
			$seachForDelete = "tl_delete_".$trackNr;
			if( !isset($_POST[$seachForDelete]) )
			{
				$tfName       = $_POST['tl_name'][$trackNr];
				$tfStream     = $_POST['tl_stream'][$trackNr];

				$plStr       .= "nMusicRadiolist[".$trackCounter."]           = [];\r\n";
				$plStr       .= "nMusicRadiolist[".$trackCounter."]['name']   = '".$tfName."';\r\n";
				$plStr       .= "nMusicRadiolist[".$trackCounter."]['stream'] = '".$tfStream."';\r\n\r\n";

				$trackCounter++;
			}
		}

		if( isset($_POST['writeStream']) )
		{
			$tfName    = ( $_POST['rl_new_name']   != "" ) ? $_POST['rl_new_name']   : "Neuer Sender";
			$tfStream  = ( $_POST['rl_new_stream'] != "" ) ? $_POST['rl_new_stream'] : "Neuer Titel";

			$plStr    .= "nMusicRadiolist[".$trackCounter."]           = [];\r\n";
			$plStr    .= "nMusicRadiolist[".$trackCounter."]['name']   = '".$tfName."';\r\n";
			$plStr    .= "nMusicRadiolist[".$trackCounter."]['stream'] = '".$tfStream."';\r\n\r\n";

			// Neuen Track farblich markieren
			$plNewTrackID = $trackCounter;

			$trackCounter++;
		}

		clearstatcache();
		$plFile        = "playlists/radio.js";
		$plFilePointer = fopen($plFile, "w");
		fwrite($plFilePointer, $plStr);
		fclose($plFilePointer);
		clearstatcache();

		$saved  = 1;
		$action = "radio_edit";
	}

	if( $action == "radio_edit" )
	{
		clearstatcache();
		$indexFileName    = "playlists/radio.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);
		clearstatcache();

		echo "<script language=\"javascript\">\n\n".$indexFileContent."\n\n";

			echo "
			var zellen             = [];
			var puffer             = [];

			function tableBuilt()
			{
				z    = 0;
				tab  = document.getElementById('tablePlaylist');

				if( nMusicRadiolist.length > 0 )
				{
					for( z = 0; z < nMusicRadiolist.length; z++ )
					{
						lineID                   =   'tabLine_'+z;
						lineClass                = 'classLine_'+z;

						newRow                   = tab.insertRow((z+1));

						newCell0                 = newRow.insertCell(0);
						newCell1                 = newRow.insertCell(1);
						newCell2                 = newRow.insertCell(2);
						newCell3                 = newRow.insertCell(3);
						newCell4                 = newRow.insertCell(4);

						newCell0.className       = lineClass;
						newCell1.className       = lineClass;
						newCell2.className       = lineClass;
						newCell3.className       = lineClass;
						newCell4.className       = lineClass;

						newCell0.id              = 'cell_'+z+'_0';
						newCell0.innerHTML      += '<input type=\"text\" class=\"textfeld_'+z+'\"                           name=\"tl_name[]\"       value=\"'+nMusicRadiolist[z]['name']+'\"   style=\"width: 150px;\">';
						newCell0.style.textAlign = 'left';

						newCell1.id              = 'cell_'+z+'_1';
						newCell1.innerHTML       = '<input type=\"text\" class=\"textfeld_'+z+'\"                           name=\"tl_stream[]\"     value=\"'+nMusicRadiolist[z]['stream']+'\" style=\"width: 350px;\">';
						newCell1.style.textAlign = 'left';

						newCell2.id              = 'cell_'+z+'_2';
						newCell2.innerHTML       = '<sub><input type=\"checkbox\" class=\"delCheckBox\" id=\"cell_'+z+'_2\" name=\"tl_delete_'+z+'\" value=\"1\"></sub>L&ouml;schen';
 						newCell2.style.textAlign = 'center';

						newCell3.id              = 'cell_'+z+'_3';
						newCell3.innerHTML       = '<a id=\"cell_'+z+'_3\" href=\"javascript:sortiere('+z+', \'up\');\"><img id=\"cell_'+z+'_3\" src=\"src/auf.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Eine Zeile rauf\"></a> <a id=\"cell_'+z+'_2\" href=\"javascript:sortiere('+z+', \'down\');\"><img id=\"cell_'+z+'_2\" src=\"src/ab.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Eine Zeile runter\"></a>';
 						newCell3.style.textAlign = 'center';

						newCell4.id              = 'cell_'+z+'_4';
						newCell4.innerHTML       = '<a id=\"cell_'+z+'_4\" href=\"'+nMusicRadiolist[z]['stream']+'\" target=\"_blank\"><img id=\"cell_'+z+'_3\" src=\"src/datei.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Stream-URL testen\"></a>';
 						newCell4.style.textAlign = 'center';

						\n"; // Neuen Track grün markieren
						if( isset($plNewTrackID) )
						{
							echo " if( z == ".$plNewTrackID." )
							{
 								newCell0.style.border = '1px solid #00FF00';
 								newCell1.style.border = '1px solid #00FF00';
 								newCell2.style.border = '1px solid #00FF00';
 								newCell3.style.border = '1px solid #00FF00';
 								newCell4.style.border = '1px solid #00FF00';
							}\n";
						} echo "

						zellen[z]    = [];
						zellen[z][0] = newCell0.innerHTML;
						zellen[z][1] = newCell1.innerHTML;
						zellen[z][2] = newCell2.innerHTML;
						zellen[z][3] = newCell3.innerHTML;
						zellen[z][4] = newCell4.innerHTML;
					}
				} else
				  {
					emptyRow                   = tab.insertRow(1);
					emptyCellC                 = emptyRow.insertCell(0);
					emptyCellC.colSpan         = 5;
 					emptyCellC.style.textAlign = 'center';
 					emptyCellC.style.height    = '50px';
 					emptyCellC.innerHTML       = 'Es sind noch noch keine Sender vorhanden!';
				  }
			}

			function sortiere(id, dir)
			{
				puffer[0] = zellen[id][0];
				puffer[1] = zellen[id][1];
				puffer[2] = zellen[id][2];
				puffer[4] = zellen[id][4];

				if( dir == 'up' )
				{
					if( id == 0 )
					{
						// oberste Zeile - in unterste

						zellen[id][0] = zellen[(zellen.length-1)][0];
						zellen[id][1] = zellen[(zellen.length-1)][1];
						zellen[id][2] = zellen[(zellen.length-1)][2];
						zellen[id][4] = zellen[(zellen.length-1)][4];

						zellen[(zellen.length-1)][0] = puffer[0];
						zellen[(zellen.length-1)][1] = puffer[1];
						zellen[(zellen.length-1)][2] = puffer[2];
						zellen[(zellen.length-1)][4] = puffer[4];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell4 = 'cell_'+(id+0)+'_4';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];

						newCell0 = 'cell_'+(zellen.length-1)+'_0';
						newCell1 = 'cell_'+(zellen.length-1)+'_1';
						newCell2 = 'cell_'+(zellen.length-1)+'_2';
						newCell4 = 'cell_'+(zellen.length-1)+'_4';

						document.getElementById(newCell0).innerHTML = zellen[(zellen.length-1)][0];
						document.getElementById(newCell1).innerHTML = zellen[(zellen.length-1)][1];
						document.getElementById(newCell2).innerHTML = zellen[(zellen.length-1)][2];
						document.getElementById(newCell4).innerHTML = zellen[(zellen.length-1)][4];
					} else
					  {
						// mittlere Zeile - eine nach oben

						zellen[id][0] = zellen[(id-1)][0];
						zellen[id][1] = zellen[(id-1)][1];
						zellen[id][2] = zellen[(id-1)][2];
						zellen[id][4] = zellen[(id-1)][4];

						zellen[(id-1)][0] = puffer[0];
						zellen[(id-1)][1] = puffer[1];
						zellen[(id-1)][2] = puffer[2];
						zellen[(id-1)][4] = puffer[4];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell4 = 'cell_'+(id+0)+'_4';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];

						newCell0 = 'cell_'+(id-1)+'_0';
						newCell1 = 'cell_'+(id-1)+'_1';
						newCell2 = 'cell_'+(id-1)+'_2';
						newCell4 = 'cell_'+(id-1)+'_4';

						document.getElementById(newCell0).innerHTML = zellen[(id-1)][0];
						document.getElementById(newCell1).innerHTML = zellen[(id-1)][1];
						document.getElementById(newCell2).innerHTML = zellen[(id-1)][2];
						document.getElementById(newCell4).innerHTML = zellen[(id-1)][4];
					  }
				} else
				  {
					if( id >= ( zellen.length - 1) )
					{
						// unterste Zeile - in oberste

						zellen[id][0] = zellen[0][0];
						zellen[id][1] = zellen[0][1];
						zellen[id][2] = zellen[0][2];
						zellen[id][4] = zellen[0][4];

						zellen[0][0] = puffer[0];
						zellen[0][1] = puffer[1];
						zellen[0][2] = puffer[2];
						zellen[0][4] = puffer[4];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell4 = 'cell_'+(id+0)+'_4';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];

						newCell0 = 'cell_'+0+'_0';
						newCell1 = 'cell_'+0+'_1';
						newCell2 = 'cell_'+0+'_2';
						newCell4 = 'cell_'+0+'_4';

						document.getElementById(newCell0).innerHTML = zellen[0][0];
						document.getElementById(newCell1).innerHTML = zellen[0][1];
						document.getElementById(newCell2).innerHTML = zellen[0][2];
						document.getElementById(newCell4).innerHTML = zellen[0][4];
					} else
					  {
						// mittlere Zeile - eine nach unten

						zellen[id][0] = zellen[(id+1)][0];
						zellen[id][1] = zellen[(id+1)][1];
						zellen[id][2] = zellen[(id+1)][2];
						zellen[id][4] = zellen[(id+1)][4];

						zellen[(id+1)][0] = puffer[0];
						zellen[(id+1)][1] = puffer[1];
						zellen[(id+1)][2] = puffer[2];
						zellen[(id+1)][4] = puffer[4];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell4 = 'cell_'+(id+0)+'_4';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];

						newCell0 = 'cell_'+(id+1)+'_0';
						newCell1 = 'cell_'+(id+1)+'_1';
						newCell2 = 'cell_'+(id+1)+'_2';
						newCell4 = 'cell_'+(id+1)+'_4';

						document.getElementById(newCell0).innerHTML = zellen[(id+1)][0];
						document.getElementById(newCell1).innerHTML = zellen[(id+1)][1];
						document.getElementById(newCell2).innerHTML = zellen[(id+1)][2];
						document.getElementById(newCell4).innerHTML = zellen[(id+1)][4];
					  }
				  }
			}

			function MouseOver(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,4) == 'cell' )
					{
						t1 = event.target.id.split('_');
						t2 = 'classLine_'+t1[1];
						tf = 'textfeld_'+t1[1];
						document.getElementsByClassName(t2)[0].childNodes[0].style.backgroundColor = '#005555';
						document.getElementsByClassName(t2)[1].childNodes[0].style.backgroundColor = '#005555';

						for( ec = 0; ec < 5; ec++ )
						{
							     document.getElementsByClassName(t2)[ec].style.backgroundColor = '#005555';
						}
					}
				}
			}

			function MouseOut(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,4) == 'cell' )
					{
						t1 = event.target.id.split('_');
						t2 = 'classLine_'+t1[1];
						tf = 'textfeld_'+t1[1];

						document.getElementsByClassName(t2)[0].childNodes[0].style.backgroundColor = '#000000';
						document.getElementsByClassName(t2)[1].childNodes[0].style.backgroundColor = '#000000';

						for( ec = 0; ec < 5; ec++ )
						{
							     document.getElementsByClassName(t2)[ec].style.backgroundColor = '#505050';
						}
					}
				}
			}

			document.addEventListener(\"mouseover\", MouseOver,  true);
			document.addEventListener(\"mouseout\",  MouseOut,   true);

			document.onload = window.setTimeout('tableBuilt()', 200);

		</script>

		<fieldset><legend><h4>&nbsp;Radiosender bearbeiten&nbsp;</h4></legend>
		<form name=\"tlEdit\" action=\"admin.php\" method=\"post\" onsubmit=\"return checkSubmitRadio();\">
		<input type=\"submit\" class=\"nMusicButton\" value=\"Alles speichern\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\"   onclick=\"self.location.href='admin.php';\">
		<input type=\"hidden\" name=\"action\"  value=\"radio_save\">
		<br><br>\n";

		if( isset($saved) )
		{
			echo "<br><span style=\"background-color: black; color: green; font-weight: bold;\">&nbsp;Die &Auml;nderungen wurden gespeichert!&nbsp;</span><br><br>\n";
		} else
		  {
			echo "<br>\n";
		  }

		echo "<span id=\"trackNumbers\" style=\"font-weight: bold;\">Sender:</span><br>
		<table id=\"tablePlaylist\" border=\"0\" style=\"border: 1px solid black; border-spacing: 1px;\">
			<tr>
				<th style=\"min-width: 154px; text-align: left;\">Name</th>
				<th style=\"min-width: 356px; text-align: left;\">Stream-URL</th>
				<th style=\"    width:  90px; text-align: center;\">Optionen</th>
				<th style=\"    width:  80px; text-align: center;\">Sortieren</th>
				<th style=\"    width:  30px; text-align: center;\">Test</th>
			</tr>
		</table>
		<br><br>

		<span style=\"font-weight: bold;\">Sender hinzuf&uuml;gen:</span><br>
		<table id=\"tablePlaylist\" border=\"1\">
			<tr>
				<th style=\"text-align:   left;\">Name</th>
				<th style=\"text-align:   left;\">Stream</th>
			</tr>
			<tr>
				<td style=\"text-align:   left;\"><input type=\"text\" name=\"rl_new_name\"   value=\"\" style=\"width: 150px;\"></td>
				<td style=\"text-align:   left;\"><input type=\"text\" name=\"rl_new_stream\" value=\"\" style=\"width: 350px;\"></td>
			</tr>
			<tr>
				<td style=\"text-align: center; width:  90px;\" colspan=\"2\"><sub><input type=\"checkbox\" name=\"writeStream\" value=\"1\"></sub><span style=\"color: gold; font-weight: bold;\">Neuen Sender speichern</span></td>
			</tr>
		</table>
		<br><br>
		<input type=\"submit\" class=\"nMusicButton\" value=\"Alles speichern\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\"   onclick=\"self.location.href='admin.php';\">
		<br><br>
		<span style=\"font-weight: bold; text-decoration: underline;\">Hinweis:</span><br>
		Die Stream-Quellen werden nicht automatisch gepr&uuml;ft!<br>
		Das sollte in regelm&auml;&szlig;igen Abst&auml;nden durch einen Klick in die Test-Spalte gemacht werden.
		<br><br></form></fieldset>\n\n";
	}

	// ******************************************************************************************************************************************************************************************

	if( $action == "deleteFile" )
	{
		$delDirsOK   = array('files/', 'playlists/', 'import/', 'export/', 'cache/');

		$delDirName  = urldecode($_GET['dir']);
		$delFileName = urldecode($_GET['file']);

		if( $delDirName != "" && $delFileName != "" )
		{
			if( in_array($delDirName, $delDirsOK) )
			{
				if( is_file($delDirName.$delFileName) )
				{
					unlink($delDirName.$delFileName);
				}
			}
		}

		$action = "check";
	}

	if( $action == "setPerms" )
	{
		$setDir       = urldecode($_GET['dir']);
		    $getPerms = substr(sprintf('%o', fileperms($setDir)), -4);
		if( $getPerms == "0755" )
		{
			chmod($setDir."/", 0750);
		} else
		  {
			chmod($setDir."/", 0755);
		  }

		$action = "check";
	}

	if( $action == "check" )
	{
		function checkDir($dirDataNr)
		{
			GLOBAL $sumCounter;
			GLOBAL $playerDirs;
			GLOBAL $playerDirSizes;

			$useDir           = $playerDirs[$dirDataNr]['path'];
			$dirList          = "";
			$dirCounter       = 0;

			$cvArr1           = array();
			$cvArr2           = array();
			$cvArr3           = array();

			$fsSum            = 0;

			$scanDir          = opendir($useDir);
			while( ( $dirFile = readdir($scanDir) ) !== false ) 
			{
				if( $dirFile != "." && $dirFile != ".." )
				{
					clearstatcache();

					$cvArr1[] = $dirFile;
					$cvArr2[] = filesize($useDir.$dirFile);
					$cvArr3[] = fileatime($useDir.$dirFile);

					$fsSum   += filesize($useDir.$dirFile);

					$dirCounter++;
				}
			}

			$playerDirSizes[$dirDataNr] = $fsSum;

			if( isset($_COOKIE['nPlayerCheckSort']) ) { $nPlayerCheckSort = $_COOKIE['nPlayerCheckSort']; } else if( isset($_SESSION['nPlayerCheckSort']) ) { $nPlayerCheckSort = $_COOKIE['nPlayerCheckSort']; } else { $nPlayerCheckSort = 'file'; }
			if( isset($_COOKIE['nPlayerCheckDir'])  ) { $nPlayerCheckDir  = $_COOKIE['nPlayerCheckDir'];  } else if( isset($_SESSION['nPlayerCheckDir'])  ) { $nPlayerCheckDir  = $_COOKIE['nPlayerCheckDir'];  } else { $nPlayerCheckDir  = 'ASC';  }

			if( $nPlayerCheckSort == 'file' )
			{
				if( $nPlayerCheckDir == 'DESC' )
				{
					arsort($cvArr1);
				} else
				  {
					 asort($cvArr1);
				  }
				$useSortArray = $cvArr1;
				$bgSortFile   = ( $nPlayerCheckDir == 'DESC' ) ? "background-color: red;" : "background-color: cornflowerblue;";
				$bgSortSize   = "";
				$bgSortTime   = "";
			} else
			if( $nPlayerCheckSort == 'size' )
			{
				if( $nPlayerCheckDir == 'DESC' )
				{
					arsort($cvArr2);
				} else
				  {
					 asort($cvArr2);
				  }
				$useSortArray = $cvArr2;
				$bgSortFile   = "";
				$bgSortSize   = ( $nPlayerCheckDir == 'DESC' ) ? "background-color: red;" : "background-color: cornflowerblue;";
				$bgSortTime   = "";
			} else
			  {
				if( $nPlayerCheckDir == 'DESC' )
				{
					arsort($cvArr3);
				} else
				  {
					 asort($cvArr3);
				  }
				$useSortArray = $cvArr3;
				$bgSortFile   = "";
				$bgSortSize   = "";
				$bgSortTime   = ( $nPlayerCheckDir == 'DESC' ) ? "background-color: red;" : "background-color: cornflowerblue;";
			  }

			$dirList .= "<table border=\"0\" style=\"width: 100%; border: 1px solid black; border-spacing: 1px;\">
				<tr>
					<th style=\"text-align:   left;               cursor: pointer; ".$bgSortFile."\" onclick=\"self.location.href='admin.php?action=setCheckSort&sort=file';\" title=\"Nach dieser Spalte sortieren bzw. Sortierrichtung &auml;ndern\">Name</th>
					<th style=\"text-align: center; width:  80px; cursor: pointer; ".$bgSortSize."\" onclick=\"self.location.href='admin.php?action=setCheckSort&sort=size';\" title=\"Nach dieser Spalte sortieren bzw. Sortierrichtung &auml;ndern\">Gr&ouml;&szlig;e</th>
					<th style=\"text-align: center; width: 120px; cursor: pointer; ".$bgSortTime."\" onclick=\"self.location.href='admin.php?action=setCheckSort&sort=time';\" title=\"Nach dieser Spalte sortieren bzw. Sortierrichtung &auml;ndern\">Ge&auml;ndert</th>
					<th style=\"text-align: center; width: 107px;\">Optionen</th>
				</tr>
			</table>
			<div style=\"height: 185px; width: 100%; overflow-y: scroll;\">
				<table border=\"0\" style=\"width: 100%; border: 1px solid black; border-spacing: 1px;\">\n";

				if( sizeof($useSortArray) > 0 )
				{
					foreach( $useSortArray AS $useKey => $useValue )
					{
						if( $nPlayerCheckSort == 'file' )
						{
							// Sortiert nach Dateiname
							$dirFile      = $useValue;
							$dirFileBytes = $cvArr2[$useKey];
							$dirFileTime  = $cvArr3[$useKey];
						} else
						if( $nPlayerCheckSort == 'size' )
						{
							// Sortiert nach Größe
							$dirFile      = $cvArr1[$useKey];
							$dirFileBytes = $useValue;
							$dirFileTime  = $cvArr3[$useKey];
						} else
						  {
							// Sortiert nach letzter Änderung
							$dirFile      = $cvArr1[$useKey];
							$dirFileBytes = $cvArr2[$useKey];
							$dirFileTime  = $useValue;
						  }

						if( is_dir($useDir.$dirFile) )
						{
							$dirFileName  = ( strlen($dirFile) > 20 && $dirDataNr != 4 ) ? substr($dirFile, 0, 20)."..." : $dirFile."/";
							$dirFileName  = "<span style=\"background-color: black; color: gold;\">".$dirFileName."</span>";

							$dirFileTitel = "Verzeichnis: ".$dirFile."/";
							$dirFileSize  = "-";
						} else
						  {
							$dirFileName  = ( strlen($dirFile) > 20 && $dirDataNr != 4 ) ? substr($dirFile, 0, 20)."..." : $dirFile;
							$dirFileTitel = $dirFile;

							$dirFileSize  = ( $dirFileBytes > 0 ) ? formatFilesize($dirFileBytes) : "?";
						  }

						$dirFileLC   = ( $dirFileTime != false ) ? date("d.m.y - H:i", $dirFileTime) : "?";

						$dirList .= "<tr>
							<td id=\"cl".$sumCounter."_1\" title=\"".$dirFileTitel."\"><a href=\"".$useDir.$dirFile."\" target=\"_blank\">".$dirFileName."</a></td>
							<td id=\"cl".$sumCounter."_2\" style=\"text-align:  right; width:  80px;\">".$dirFileSize."</td>
							<td id=\"cl".$sumCounter."_3\" style=\"text-align: center; width: 120px;\">".$dirFileLC."</td>
							<td id=\"cl".$sumCounter."_4\" style=\"text-align: center; width:  90px;\">";
								if( !is_dir($useDir.$dirFile) )
								{
									$dirList .= "[<a href=\"javascript:sicher('admin.php?action=deleteFile&dir=".urlencode($useDir)."&file=".urlencode($dirFile)."');\">L&ouml;schen</a>]";
								} else
								  {
									$dirList .= "-";
								  }
							$dirList .= "</td>
						</tr>\n";

						$sumCounter++;
					}
				} else
				  {
					$dirList .= "<tr><td colspan=\"3\" style=\"text-align: center; height: 220px;\">Keine Dateien gefunden!</td></tr>\n";
				  }

				$dirList .= "</table>
			</div>\n";

			clearstatcache();
			$playerDirs[$dirDataNr]['nr']    = $dirCounter;
			$playerDirs[$dirDataNr]['chmod'] = substr(sprintf('%o', fileperms($useDir)), -4);

			return $dirList;
		}

		$sumCounter            = 0;

		$playerDirSizes        = array();
		$playerDirs            = array();

		$playerDirs[0]['path'] = 'files/';
		$playerDirs[1]['path'] = 'playlists/';
		$playerDirs[2]['path'] = 'import/';
		$playerDirs[3]['path'] = 'export/';
		$playerDirs[4]['path'] = 'cache/';

		$playerDirs[0]['info'] = checkDir(0);
		$playerDirs[1]['info'] = checkDir(1);
		$playerDirs[2]['info'] = checkDir(2);
		$playerDirs[3]['info'] = checkDir(3);
		$playerDirs[4]['info'] = checkDir(4);

		echo "<script language=\"javascript\">

			function MouseOver(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,2) == 'cl' )
					{
						hlPos  = event.target.id.indexOf('_');
						hlId   = event.target.id.substring(0,hlPos);
						hlId_1 = hlId+'_1';
						hlId_2 = hlId+'_2';
						hlId_3 = hlId+'_3';
						hlId_4 = hlId+'_4';
						document.getElementById(hlId_1).style.backgroundColor = '#005555';
						document.getElementById(hlId_2).style.backgroundColor = '#005555';
						document.getElementById(hlId_3).style.backgroundColor = '#005555';
						document.getElementById(hlId_4).style.backgroundColor = '#005555';
					}
				}
			}

			function MouseOut(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,2) == 'cl' )
					{
						hlPos  = event.target.id.indexOf('_');
						hlId   = event.target.id.substring(0,hlPos);
						hlId_1 = hlId+'_1';
						hlId_2 = hlId+'_2';
						hlId_3 = hlId+'_3';
						hlId_4 = hlId+'_4';
						document.getElementById(hlId_1).style.backgroundColor = '#505050';
						document.getElementById(hlId_2).style.backgroundColor = '#505050';
						document.getElementById(hlId_3).style.backgroundColor = '#505050';
						document.getElementById(hlId_4).style.backgroundColor = '#505050';
					}
				}
			}

			document.addEventListener(\"mouseover\", MouseOver,  true);
			document.addEventListener(\"mouseout\",  MouseOut,   true);

		</script>

		<h4>&nbsp;Verzeichnisse des Players pr&uuml;fen</h4>
		<table border=\"0\" style=\"width: 100%; border: 0px; border-spacing: 1px;\">
			<tr>
				<td style=\"width: 50%; vertical-align: top;  background-color: #000000;\">
					<fieldset><legend style=\"font-size: 12pt;\"><span style=\"color: cornflowerblue; font-weight: bold; cursor: Help;\" title=\"Verzeichnis-Name\">&nbsp;files/</span>     <span style=\"cursor: Help;\" title=\"Anzahl Dateien / Speicherplatz\">(".$playerDirs[0]['nr']." &#10063; / ".formatFilesize($playerDirSizes[0]).")</span> [<a href=\"admin.php?action=setPerms&dir=files\"     title=\"Rechte umschalten und neu setzen\">chmod: ".$playerDirs[0]['chmod']."</a>]&nbsp;</legend>
						".$playerDirs[0]['info']."
					</fieldset>
				</td>
				<td style=\"width: 50%; vertical-align: top; background-color: #000000;\">
					<fieldset><legend style=\"font-size: 12pt;\"><span style=\"color: cornflowerblue; font-weight: bold; cursor: Help;\" title=\"Verzeichnis-Name\">&nbsp;playlists/</span> <span style=\"cursor: Help;\" title=\"Anzahl Dateien / Speicherplatz\">(".$playerDirs[1]['nr']." &#10063; / ".formatFilesize($playerDirSizes[1]).")</span> [<a href=\"admin.php?action=setPerms&dir=playlists\" title=\"Rechte umschalten und neu setzen\">chmod: ".$playerDirs[1]['chmod']."</a>]&nbsp;</legend>
						".$playerDirs[1]['info']."
					</fieldset>
				</td>
			</tr>
			<tr>
				<td style=\"width: 50%; vertical-align: top;  background-color: #000000;\"><br>
					<fieldset><legend style=\"font-size: 12pt;\"><span style=\"color: cornflowerblue; font-weight: bold; cursor: Help;\" title=\"Verzeichnis-Name\">&nbsp;import/</span>    <span style=\"cursor: Help;\" title=\"Anzahl Dateien / Speicherplatz\">(".$playerDirs[2]['nr']." &#10063; / ".formatFilesize($playerDirSizes[2]).")</span> [<a href=\"admin.php?action=setPerms&dir=import\"    title=\"Rechte umschalten und neu setzen\">chmod: ".$playerDirs[2]['chmod']."</a>]&nbsp;</legend>
						".$playerDirs[2]['info']."
					</fieldset>
				</td>
				<td style=\"width: 50%; vertical-align: top; background-color: #000000;\"><br>
					<fieldset><legend style=\"font-size: 12pt;\"><span style=\"color: cornflowerblue; font-weight: bold; cursor: Help;\" title=\"Verzeichnis-Name\">&nbsp;export/</span>    <span style=\"cursor: Help;\" title=\"Anzahl Dateien / Speicherplatz\">(".$playerDirs[3]['nr']." &#10063; / ".formatFilesize($playerDirSizes[3]).")</span> [<a href=\"admin.php?action=setPerms&dir=export\"    title=\"Rechte umschalten und neu setzen\">chmod: ".$playerDirs[3]['chmod']."</a>]&nbsp;</legend>
						".$playerDirs[3]['info']."
					</fieldset>
				</td>
			</tr>
			<tr>
				<td colspan=\"2\" style=\"width: 100%; vertical-align: top;  background-color: #000000;\"><br>
					<fieldset><legend style=\"font-size: 12pt;\"><span style=\"color: cornflowerblue; font-weight: bold; cursor: Help;\" title=\"Verzeichnis-Name\">&nbsp;cache/</span>     <span style=\"cursor: Help;\" title=\"Anzahl Dateien / Speicherplatz\">(".$playerDirs[4]['nr']." &#10063; / ".formatFilesize($playerDirSizes[4]).")</span> [<a href=\"admin.php?action=setPerms&dir=cache\"     title=\"Rechte umschalten und neu setzen\">chmod: ".$playerDirs[4]['chmod']."</a>]&nbsp;</legend>
						".$playerDirs[4]['info']."
					</fieldset>
				</td>
			</tr>
		</table>\n\n";
	}

	if( $action == "delete" )
	{
		// Indexdatei aktualisieren & Playlistdatei löschen
		// ================================================
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);

		if( is_file("playlists/playlist".$id.".js") )
		{
			$tStr1 = "plData[".$plIndex."] = [];";
			$ifp1  = explode($tStr1, $indexFileContent);

			if( isset($_GET['lastPL']) )
			{
				// Wenn es der letzte Eintrag ist
				$tStr2     = "var plActive";
				$ifp2      = explode($tStr2, $ifp1[1]);
				$ifps      = $tStr2;
				$startStr  = substr($ifp1[0], 0, (strlen($ifp1[0])-4));
				$refresStr = $startStr . $tStr2 . $ifp2[1];
			} else
			  {
				// Nächsten Eintrag suchen
				$nextID   = -1;
				$alleIDs  = explode("|", $_GET['idArr']);
				for( $eid = 0; $eid < sizeof($alleIDs); $eid++ )
				{
					if( $alleIDs[$eid] != 0 && $alleIDs[$eid] != "" )
					{
						if( $alleIDs[$eid] > $_GET['plIndex'] && $nextID == -1 )
						{
							$nextID = $alleIDs[$eid];
						}
					}
				}

				$tStr2     = "plData[".$nextID."] = [];";
				$ifp2      = explode($tStr2, $ifp1[1]);
				$refresStr = $ifp1[0] . $tStr2 . $ifp2[1];
			  }

			$piFilePointer = fopen($indexFileName, "w");
			fwrite($piFilePointer, $refresStr);
			fclose($piFilePointer);
			clearstatcache();

			unlink("playlists/playlist".$id.".js");
		}

		// .m3u Export-Datei löschen
		// =========================
		if( is_file("export/exportSimple".$id.".m3u") )
		{
			unlink("export/exportSimple".$id.".m3u");
		}

		if( is_file("export/exportMeta".$id.".m3u") )
		{
			unlink("export/exportMeta".$id.".m3u");
		}

		unset( $_SESSION['lastUsedIndex'] );

		$action = "show";
	}

	if( $action == "copy" )
	{
		$plFile = "playlists/playlist".$_GET['nextID'].".js";
		if( !is_file($plFile) )
		{
			// Playlistdatei kopieren und ID's ersetzen
			// ========================================
			clearstatcache();
			copy("playlists/playlist".$id.".js", $plFile);
			$plFileSize    = ( filesize($plFile) > 0 ) ? filesize($plFile) : 1;
			$plFilePointer = fopen($plFile, "r");
			$plFileContent = fread($plFilePointer, $plFileSize);
			fclose($plFilePointer);
			clearstatcache();

			$plSearchOld   = "Datei ID = ".$id;
			$plSearchNew   = "Datei ID = ".$_GET['nextID'];
			$plFileContent = str_replace($plSearchOld, $plSearchNew, $plFileContent);
			$plSearchOld   = "'pl".$id."'";
			$plSearchNew   = "'pl".$_GET['nextID']."'";
			$plFileContent = str_replace($plSearchOld, $plSearchNew, $plFileContent);
			$plFilePointer = fopen($plFile, "w");
			fwrite($plFilePointer, $plFileContent);
			fclose($plFilePointer);
			clearstatcache();

			// .m3u Exportdatein kopieren
			// ==========================
			copy("export/exportMeta".$id.".m3u",   "export/exportMeta".$_GET['nextID'].".m3u");
			copy("export/exportSimple".$id.".m3u", "export/exportSimple".$_GET['nextID'].".m3u");

			// Indexdatei aktualisieren
			// ========================
			$indexFileName    = "playlists/playlistIndex.js";
			$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
			$indexFilePointer = fopen($indexFileName, "r");
			$indexFileContent = fread($indexFilePointer, $indexFileSize);
			fclose($indexFilePointer);
			clearstatcache();

			$ifp1         = explode("plActive", $indexFileContent);
			$ifp2         = substr($ifp1[0], 0, -5);

			$plSvon       = "plData[".$plIndex."] =";
			$plSBis       = "plData[".$plIndex."]['erstellt']";
			$plsP1        = explode($plSvon, $indexFileContent);
			$plsP2        = explode($plSBis, $plsP1[1]);
			$plsBlock     = " ".$plSvon.$plsP2[0];

			$plSearchOld  = "[".$plIndex."]";
			$plSearchNew  = "[".$_GET['nextIndex']."]";
			$plsBlock     = str_replace($plSearchOld, $plSearchNew, $plsBlock);

			$plNvon       = "plData[".$_GET['nextIndex']."]['id']";
			$plsNP1       = explode($plNvon, $plsBlock);
			$plsNP2       = explode("=",     $plsNP1[1]);
			$plsNP3       = explode(";",     $plsNP2[1]);

			$plsNPend     = "plData[".$_GET['nextIndex']."]['titel']";
			$plsNP4       = explode($plsNPend, $plsBlock);

			$newBlockStr  = "\r\n   ".$plsNP1[0]."plData[".$_GET['nextIndex']."]['id']       = ".$_GET['nextID'].";\r\n    ".$plsNPend."    ".trim($plsNP4[1])."\r\n";
			$newBlockStr .= "    plData[".$_GET['nextIndex']."]['erstellt'] = '".date('d.m.Y')."';\r\n";
			$refresStr    = $ifp2.$newBlockStr."\r\nvar plActive".$ifp1[1];

			$piFilePointer = fopen($indexFileName, "w");
			fwrite($piFilePointer, $refresStr);
			fclose($piFilePointer);
			clearstatcache();

			// Kopierte Playlist farblich markieren
			$plNewCopyID = $_GET['nextID'];
		}

		$action = "show";
	}

	if( $action == "export" )
	{
		clearstatcache();
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);
		clearstatcache();

		echo "<script language=\"javascript\">\n\n".$indexFileContent."

			function exportNow()
			{
				if( document.getElementById('type').value == 'e' )
				{
					self.location.href = 'export/exportSimple".$id.".m3u';
				} else
				  {
					self.location.href = 'export/exportMeta".$id.".m3u';
				  }
			}

			function exportTypeSet(useType)
			{
				if( useType == 'e' )
				{
					document.getElementById('type').value = 'e';
					document.getElementById('m3uTypeE').checked = true;
				} else
				  {
					document.getElementById('type').value = 'm';
					document.getElementById('m3uTypeM').checked = true;
				  }
			}

			function getPlData()
			{
				document.getElementById('exPlTitel').innerHTML = plData[".$plIndex."]['titel'];
			}

			document.onload = window.setTimeout('getPlData()', 200);

		</script>

		<fieldset><legend><h4>&nbsp;Playlist exportieren&nbsp;</h4></legend>
		<form name=\"plImport\" action=\"admin.php\" method=\"post\">
			<input type=\"hidden\" name=\"action\"  value=\"exportNow\">
			<input type=\"hidden\" name=\"id\"      value=\"".$id."\">
			<input type=\"hidden\" name=\"plIndex\" value=\"".$plIndex."\">
			<input type=\"hidden\" name=\"type\" id=\"type\" value=\"m\">
			<span style=\"text-decoration: underline;\">Playlist:</span> <span id=\"exPlTitel\" style=\"color: gold; font-weight: bold;\"></span><br><br><br>
			<span style=\"font-style: italic;\">Der Export erfolgt als .m3u Datei.</span><br><br>
			<sub><input type=\"radio\" id=\"m3uTypeE\" name=\"m3uType\" value=\"e\" onclick=\"exportTypeSet('e');\"        ></sub><span style=\"cursor: pointer;\" onclick=\"exportTypeSet('e');\">einfach (nur Dateipfade)</span><br><br>
			<sub><input type=\"radio\" id=\"m3uTypeM\" name=\"m3uType\" value=\"m\" onclick=\"exportTypeSet('m');\" CHECKED></sub><span style=\"cursor: pointer;\" onclick=\"exportTypeSet('m');\">erweitert (mit Metadaten)</span><br><br>
			<br>
			<input type=\"button\" class=\"nMusicButton\" value=\"Export jetzt starten\" onclick=\"exportNow();\">
			<input type=\"button\" class=\"nMusicButton\" value=\"Bearbeiten\"           onclick=\"self.location.href='admin.php?action=edit&id=".$id."&plIndex=".$plIndex."';\">
			<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\"            onclick=\"self.location.href='admin.php';\">
			<br><br>
		</form></fieldset>\n";
	}

	if( $action == "importUpload" )
	{
		if( $_FILES['upload']['tmp_name'] != "" )
		{
			// Prüfung Dateigröße
			// ------------------
			$maxUploadSys = ini_get('upload_max_filesize'); settype($maxUploadSys, "integer");
			$fileSize     = $_FILES['upload']['size'];
			if( $fileSize < ( 1024 * 1024 * $maxUploadSys ) )
			{
				// Prüfung Dateityp
				// ----------------
				$fileMime     = strtolower(strrchr($_FILES['upload']['name'], '.'));
				if( $fileMime == ".m3u" )
				{
					$ziel = "import/import.m3u";
					copy($_FILES['upload']['tmp_name'], $ziel);

					if( is_file($ziel) )
					{
						$uploadDatei = $ziel;
					} else
					  {
						$uploadError = "Die Datei wurde nicht hochgeladen.";
					  }
				} else
				  {
					$uploadError = "Die Datei hat ein falsches Format.";
				  }
			} else
			  {
				$uploadError = "Die Datei ist zu gro&szlig.";
			  }
		} else
		  {
			$uploadError = "Es wurde keine Datei ausgew&auml;hlt."; 
		  }

		$action = "import";
	}

	if( $action == "importNow" )
	{
		echo "<h4>Importieren von .m3u Dateien</h4>\n";

		// Reload-Sperre
		if( isset($_SESSION['lastImportIndex']) )
		{
			$writeNewOK = ( $_SESSION['lastImportIndex'] == $_POST['nextIndex'] ) ? 0 : 1;
		} else
		  {
			$writeNewOK = 1;
		  }
		if( $writeNewOK == 1 )
		{
		    if( is_file(SCRIPT_IMPORT_FILE) )
		    {
			$importEXT    = 0;
			$trackCounter = 0;
			$sumTracks    = 0;
			$sumTimes     = 0;
			$lineCounter  = 0;
			$lineComplete = 0;
			$importArray  = array();
			$lines        = file(SCRIPT_IMPORT_FILE);

			if( sizeof($lines) > 0 )
			{
				foreach( $lines AS $linenumber => $lineContent )
				{
					$lineContent = trim($lineContent);

					if( $lineContent != "" )
					{
						if( $lineCounter == 0 )
						{
							if( $lineContent == "#EXTM3U" )
							{
								$importEXT = 1;
							}
						}

						if( $lineContent != "#EXTM3U" )
						{
							if( $importEXT == 1 )
							{
								if( substr($lineContent, 0, 7) == "#EXTINF" )
								{
									$partsMeta   = substr($lineContent, 8, (strlen($lineContent)-8));

									$searchComma = stripos($partsMeta, ',');
									$searchMinus = stripos($partsMeta, '-');

									$lineTime    = trim( substr($lineContent,   8,                                             $searchComma     )   );
									$lineInter   = trim( substr($lineContent, ( 8 + $searchComma + 1 ), ( $searchMinus       - $searchComma - 1 ) ) );
									$lineTitel   = trim( substr($lineContent, ( 8 + $searchMinus + 1 ), ( strlen($partsMeta) - $searchComma     ) ) );
									$lineComplete++;
								} else
								  {
									$lineFile    = trim($lineContent);
									$lineComplete++;
								  }
							} else
							  {
								$lineTime    = 0;
								$lineInter   = '';
								$lineTitel   = '';
								$lineFile    = trim($lineContent);

								$lineComplete = 2;
							  }

							if( $lineComplete >= 2 )
							{
								$importArray[$trackCounter]['datei']     = $lineFile;
								$importArray[$trackCounter]['interpret'] = $lineInter;
								$importArray[$trackCounter]['titel']     = $lineTitel;
								$importArray[$trackCounter]['zeit']      = $lineTime;

								$lineComplete = 0;
								$trackCounter++;

								$sumTracks++;
								$sumTimes += $lineTime;
							}
						}

						$lineCounter++;
					}
				}

				if( sizeof($importArray) > 1 )
				{
					// Indexdatei aktualisieren
					// ========================
					$indexFileName    = "playlists/playlistIndex.js";
					$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
					$indexFilePointer = fopen($indexFileName, "r");
					$indexFileContent = fread($indexFilePointer, $indexFileSize);
					fclose($indexFilePointer);

					$ifp1      = explode("plActive", $indexFileContent);
					$ifp2      = substr($ifp1[0], 0, -5);

					$editStr   = "\r\n";
					$editStr  .= "    plData[".$_POST['nextIndex']."] = [];\r\n";
					$editStr  .= "    plData[".$_POST['nextIndex']."]['id']       = ".$_POST['nextID'].";\r\n";
					$editStr  .= "    plData[".$_POST['nextIndex']."]['titel']    = 'Importierte Playlist';\r\n";
					$editStr  .= "    plData[".$_POST['nextIndex']."]['tracks']   = ".$sumTracks.";\r\n";	
					$editStr  .= "    plData[".$_POST['nextIndex']."]['zeiten']   = ".$sumTimes.";\r\n";
					$editStr  .= "    plData[".$_POST['nextIndex']."]['user']     = 0;\r\n";
					$editStr  .= "    plData[".$_POST['nextIndex']."]['erstellt'] = '".date('d.m.Y')."';\r\n\r\n";

					$refresStr = $ifp2 . $editStr . "var plActive".$ifp1[1];

					$piFilePointer = fopen($indexFileName, "w");
					fwrite($piFilePointer, $refresStr);
					fclose($piFilePointer);
					clearstatcache();

					// Neue Playlist-Datei erzeugen
					// ============================
					$newFileStr  = "/* \r\n";
					$newFileStr .= " * numaek WebAudio Player\r\n";
					$newFileStr .= " * ======================\r\n";
					$newFileStr .= " * Playlist-Datei ID = ".$_POST['nextID']."\r\n";
					$newFileStr .= " * Automatisch erstellt am ".date('d.m.Y')." um ".date('H:i')." Uhr\r\n";
					$newFileStr .= " * \r\n";
					$newFileStr .= " */\r\n\r\n";
					$newFileStr .= "nMusicPlaylist['pl".$_POST['nextID']."'] = [];\r\n\r\n";

					$trackCounter = 0;
					for( $trackNr = 0; $trackNr < sizeof($importArray); $trackNr++ )
					{
						$tfDatei      = $importArray[$trackNr]['datei'];
						$tfInterpret  = $importArray[$trackNr]['interpret'];
						$tfTitel      = $importArray[$trackNr]['titel'];
						$tfZeit       = $importArray[$trackNr]['zeit'];

						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]              = [];\r\n";
						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['datei']     = '".$tfDatei."';\r\n";
						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['interpret'] = '".$tfInterpret."';\r\n";
						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['titel']     = '".$tfTitel."';\r\n";
						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['zeit']      = ".$tfZeit.";\r\n";
						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['bpm']       = 0;\r\n";
						$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['meta']      = '';\r\n\r\n";

						$trackCounter++;
					}

					$newFileName    = "playlists/playlist".$_POST['nextID'].".js";
					$newFilePointer = fopen($newFileName, "x");
					fwrite($newFilePointer, $newFileStr);
					fclose($newFilePointer);
					clearstatcache();

					$_SESSION['lastImportIndex'] = $_POST['nextIndex'];
				}

				$importMsg = "Die Datei wurde importiert! [<a href=\"admin.php?action=edit&id=".$_POST['nextID']."&plIndex=".$_POST['nextIndex']."\">Ansehen & Bearbeiten</a>]";
			} else
			  {
				$importMsg = "Datei ist leer oder nicht lesbar!";
			  }
		    } else
		      {
			    $importMsg = "Die Import-Datei wurde nicht gefunden!";
		      }
		} else
		  {
			$importMsg = "Die Datei wurde bereits importiert!";
		  }

		echo $importMsg."<br><br>\n";
	}

	if( $action == "import" )
	{
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);

		echo "<script language=\"javascript\">\n\n".$indexFileContent."

			var lastID    = 0;
			var lastIndex = 0;

			function getLastValues()
			{
				if( plData.length > 0 )
				{
					for( key in plData )
					{
						lastID = ( plData[key]['id'] > lastID ) ? plData[key]['id'] : lastID;
					}
				}

				document.getElementById('nextID').value    = ( lastID + 1);
				document.getElementById('nextIndex').value = plData.length;
			}

			document.onload = window.setTimeout('getLastValues()', 200);

		</script>

		<fieldset><legend><h4>&nbsp;Importieren von .m3u Dateien&nbsp;</h4></legend>
		<form name=\"plImport\" action=\"admin.php\" enctype=\"multipart/form-data\" method=\"post\">
			<input type=\"hidden\" id=\"nextID\"    name=\"nextID\"    value=\"-1\">
			<input type=\"hidden\" id=\"nextIndex\" name=\"nextIndex\" value=\"-1\">
			<span style=\"text-decoration: underline;\">Name der Import-Datei:</span> <span style=\"color: gold; font-weight: bold;\">".SCRIPT_IMPORT_FILE."</span>
			[<a href=\"admin.php?action=check\">Check-Seite</a>]<br><br>\n";
			if( is_file(SCRIPT_IMPORT_FILE) )
			{
				echo "<span style=\"color: green; font-weight: bold;\">Import-Datei gefunden!</span><br><br><br>
				<input type=\"submit\" class=\"nMusicButton\" value=\"Import jetzt starten\">
				<input type=\"hidden\" name=\"action\" value=\"importNow\">\n";
			} else
			  {
				echo "<span style=\"color: red; font-weight: bold;\">Import-Datei nicht gefunden!</span><br><br>
				<input type=\"hidden\" name=\"action\" value=\"importUpload\">
				<input type=\"file\"   name=\"upload\" value=\"\" style=\"width: 250px;\"><br><br>
				<span style=\"font-style: italic;\">Erlaubte Dateitypen:</span> .m3u<br>
				<span style=\"font-style: italic;\">Max. Dateigr&ouml;&szlig;e:</span> ".ini_get('upload_max_filesize')."<br><br><br>\n";
				if( isset($uploadError) )
				{
					echo "<span style=\"background-color: black; color: red;\">&nbsp;".$uploadError."&nbsp;</span><br><br><br>\n";
				}
				echo "<input type=\"submit\" class=\"nMusicButton\" value=\"Datei hochladen\">\n";
			  }

			echo "<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\" onclick=\"self.location.href='admin.php';\">
			<br><br>
		</form></fieldset>\n";
	}

	if( $action == "scanNow" )
	{
		if( $_POST['dirToScan'] != "" )
		{
			$exportE = "";
			$exportM = "#EXTM3U\r\n\r\n";

			// Neue leere Playlist-Datei erzeugen
			// ==================================
			$newFileStr  = "/* \r\n";
			$newFileStr .= " * numaek WebAudio Player\r\n";
			$newFileStr .= " * ======================\r\n";
			$newFileStr .= " * Playlist-Datei ID = ".$_POST['nextID']."\r\n";
			$newFileStr .= " * Automatisch erstellt am ".date('d.m.Y')." um ".date('H:i')." Uhr\r\n";
			$newFileStr .= " * \r\n";
			$newFileStr .= " */\r\n\r\n";
			$newFileStr .= "nMusicPlaylist['pl".$_POST['nextID']."'] = [];\r\n\r\n";

			$trackZeiten  = 0;
			$trackCounter = 0;

			$subDir = "files/".$_POST['dirToScan']."/";
			if( $scanSubDir = opendir($subDir) )
			{
				while( ( $subFile = readdir($scanSubDir) ) !== false ) 
				{
					clearstatcache();
					if( $subFile != "." && $subFile != ".." )
					{
						if( !is_dir($scanSubDir.$subFile) )
						{
							$fileMime = strtolower(strrchr($subFile, '.'));
							if( $fileMime == ".mp3" || $fileMime == ".wav" || $fileMime == ".ogg" )
							{
								$tfDatei      = $subDir.$subFile;
								if( $fileData = new nID3($tfDatei) )
								{
									$dataArray    = $fileData->getArray();

									$tfTitel      = $fileData->getTag('TIT2');
									$tfTitel      = ( $tfTitel != "Fehler" ) ? $tfTitel : substr($subFile, 0, strlen($subFile)-strlen($fileMime));
									$tfTitel      = str_replace("'", "", $tfTitel);

									$tfInterpret  = $fileData->getTag('TPE1');
									$tfInterpret  = ( $tfInterpret != "Fehler" ) ? $tfInterpret : "unbekannt";
									$tfInterpret  = str_replace("'", "", $tfInterpret);

									$tfBpm        = $fileData->getTag('TBPM');
									$tfBpm        = ( $tfBpm != "Fehler" ) ? $tfBpm : 0;

									$tfMeta       = '';

									if( $fileData->getTag('TLEN') != "Fehler" )
									{
										$tfZeit = $fileData->getTag('TLEN');
									} else
									  {
										$tfZeit = ( isset($dataArray['mp3']['mp3_duration']) ) ? $dataArray['mp3']['mp3_duration'] : 0;
									  }
								} else
								  {
									$tfTitel      = substr($subFile, 0, strlen($subFile)-strlen($fileMime));
									$tfTitel      = str_replace("'", "", $tfTitel);

									$tfInterpret  = "unbekannt";
									$tfInterpret  = str_replace("'", "", $tfInterpret);

									$tfBpm        = 0;
									$tfZeit       = 0;
									$tfMeta       = '';
								  }

								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]              = [];\r\n";
								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['datei']     = '".$tfDatei."';\r\n";
								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['interpret'] = '".$tfInterpret."';\r\n";
								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['titel']     = '".$tfTitel."';\r\n";
								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['zeit']      = ".$tfZeit.";\r\n";
								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['bpm']       = ".$tfBpm.";\r\n";
								$newFileStr  .= "nMusicPlaylist['pl".$_POST['nextID']."'][".$trackCounter."]['meta']      = '".$tfMeta."';\r\n\r\n";

								$exportE     .= $tfDatei."\r\n";
								$exportM     .= "#EXTINF:".$tfZeit.",".$tfInterpret." - ".$tfDatei."\r\n";
								$exportM     .= $tfDatei."\r\n\r\n";

								$trackZeiten += $tfZeit;
								$trackCounter++;
							}
						}
					}
				}
			}

			$newFileName    = "playlists/playlist".$_POST['nextID'].".js";
			$newFilePointer = fopen($newFileName, "x");
			fwrite($newFilePointer, $newFileStr);
			fclose($newFilePointer);
			clearstatcache();

			// Indexdatei aktualisieren
			// ========================
			$indexFileName    = "playlists/playlistIndex.js";
			$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
			$indexFilePointer = fopen($indexFileName, "r");
			$indexFileContent = fread($indexFilePointer, $indexFileSize);
			fclose($indexFilePointer);
			clearstatcache();

			$ifp1      = explode("plActive", $indexFileContent);
			$ifp2      = substr($ifp1[0], 0, -5);

			$editStr   = "\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."] = [];\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['id']       = ".$_POST['nextID'].";\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['titel']    = '".$_POST['pl_new_titel']."';\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['tracks']   = ".$trackCounter.";\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['zeiten']   = 0;\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['user']     = 0;\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['erstellt'] = '".date('d.m.Y')."';\r\n\r\n";

			$refresStr = $ifp2 . $editStr . "var plActive".$ifp1[1];

			$piFilePointer = fopen($indexFileName, "w");
			fwrite($piFilePointer, $refresStr);
			fclose($piFilePointer);
			clearstatcache();

			// .m3u Export-Datei schreiben
			// ===========================
			$exE_FileName    = "export/exportSimple".$_POST['nextID'].".m3u";
			$exE_FilePointer = fopen($exE_FileName, "w");
			fwrite($exE_FilePointer, "");
			fclose($exE_FilePointer);
			clearstatcache();

			$exM_FileName    = "export/exportMeta".$_POST['nextID'].".m3u";
			$exM_FilePointer = fopen($exM_FileName, "w");
			fwrite($exM_FilePointer, "");
			fclose($exM_FilePointer);
			clearstatcache();

			$id       = $_POST['nextID'];
			$plIndex  = $_POST['nextIndex'];
			$autoScan = 1;
			$action   = "edit";
		} else
		  {
			$action   = "plScanNew";
		  }
	}

	if( $action == "plScanNew" )
	{
		$dirCounter = 0;
		$neuerTitel = ( $_POST['pl_new_titel'] != "" ) ? $_POST['pl_new_titel'] : "Neue Playlist vom ".date("d.m.Y");

		echo "<fieldset><legend><h4>&nbsp;Playlist aus Verzeichnis erstellen -&gt; ausw&auml;hlen&nbsp;</h4></legend>

		<form name=\"plScan\" action=\"admin.php\" method=\"post\" onsubmit=\"return checkScanDir();\">

			<input type=\"hidden\"                     name=\"action\"       value=\"scanNow\">
			<input type=\"hidden\" id=\"nextID\"       name=\"nextID\"       value=\"".$_POST['nextID']."\">
			<input type=\"hidden\" id=\"nextIndex\"    name=\"nextIndex\"    value=\"".$_POST['nextIndex']."\">
			<input type=\"hidden\" id=\"pl_new_titel\" name=\"pl_new_titel\" value=\"".$neuerTitel."\">
			<span style=\"text-decoration: underline;\">Name der neuen Playlist:</span> <span style=\"color: gold; font-weight: bold;\">".$neuerTitel."</span><br><br>
			Das zu scannende Verzeichnis muss ein <span style=\"color: gold; font-weight: bold;\">Unterordner in \"files/\"</span> sein!<br>
			Die Dateien selber bleiben unber&uuml;hrt, es werden nur die Dateipfade eingelesen.<br><br>
			<table border=\"0\" style=\"border: 1px solid black; border-spacing: 1px;\">
			<tr>
				<th style=\"width: 100px; text-align: center;\">Name</th>
				<th style=\"width:  80px; text-align: center;\">Dateien</th>
				<th style=\"width:  50px; text-align: center;\">.mp3</th>
				<th style=\"width:  50px; text-align: center;\">.wav</th>
				<th style=\"width:  50px; text-align: center;\">.ogg</th>
				<th style=\"width: 100px; text-align: center;\">Gr&ouml;&szlig;e</th>
				<th style=\"width: 150px; text-align: center;\">Ge&auml;ndert</th>
			</tr>\n";

			$scanPath         = 'files/';
			$scanDir          = opendir($scanPath);
			while( ( $dirFile = readdir($scanDir) ) !== false ) 
			{
				clearstatcache();
				if( $dirFile != "." && $dirFile != ".." )
				{
					if( is_dir($scanPath.$dirFile) )
					{
						$getDirData = nPlayerScanDir($scanPath.$dirFile);
						$dirParts   = explode("|", $getDirData);
						$countMp3   = $dirParts[0];
						$countWav   = $dirParts[1];
						$countOgg   = $dirParts[2];
						$countSize  = $dirParts[3];
						$countGes   = $countMp3 + $countWav + $countOgg;

						echo "<tr>
							<td><sub><input type=\"radio\" class=\"dirToScan\" id=\"dirToScan\" name=\"dirToScan\" value=\"".$dirFile."\"></sub> ".$dirFile."/</td>
							<td style=\"text-align: right;\">".$countGes."</td>
							<td style=\"text-align: right;\">".$countMp3."</td>
							<td style=\"text-align: right;\">".$countWav."</td>
							<td style=\"text-align: right;\">".$countOgg."</td>
							<td style=\"text-align: right;\">".formatFilesize($countSize)."</td>
							<td style=\"text-align: center;\">".date("d.m.Y - H:i",fileatime($scanPath.$dirFile))."</td>
						</tr>\n";

						$dirCounter++;
					}
				}
			}

			echo "</table><br>
			<input type=\"submit\" class=\"nMusicButton\" value=\"Scan jetzt starten\">
			<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\" onclick=\"self.location.href='admin.php';\">
			<br><br>
		</form></fieldset>\n";
	}

	if( $action == "plWriteNew" )
	{
		// Reload-Sperre
		if( isset($_SESSION['lastUsedIndex']) )
		{
			$writeNewOK = ( $_SESSION['lastUsedIndex'] == $_POST['nextIndex'] ) ? 0 : 1;
		} else
		  {
			$writeNewOK = 1;
		  }
		if( $writeNewOK == 1 )
		{
			$neuerTitel = ( $_POST['pl_new_titel'] != "" ) ? $_POST['pl_new_titel'] : "Neue Playlist vom ".date("d.m.Y");

			// Indexdatei aktualisieren
			// ========================
			$indexFileName    = "playlists/playlistIndex.js";
			$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
			$indexFilePointer = fopen($indexFileName, "r");
			$indexFileContent = fread($indexFilePointer, $indexFileSize);
			fclose($indexFilePointer);
			clearstatcache();

			$ifp1      = explode("plActive", $indexFileContent);
			$ifp2      = substr($ifp1[0], 0, -5);

			$editStr   = "\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."] = [];\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['id']       = ".$_POST['nextID'].";\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['titel']    = '".$neuerTitel."';\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['tracks']   = 0;\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['zeiten']   = 0;\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['user']     = 0;\r\n";
			$editStr  .= "    plData[".$_POST['nextIndex']."]['erstellt'] = '".date('d.m.Y')."';\r\n\r\n";

			$refresStr = $ifp2 . $editStr . "var plActive".$ifp1[1];

			$piFilePointer = fopen($indexFileName, "w");
			fwrite($piFilePointer, $refresStr);
			fclose($piFilePointer);
			clearstatcache();

			// Neue leere Playlist-Datei erzeugen
			// ==================================
			$newFileStr  = "/* \r\n";
			$newFileStr .= " * numaek WebAudio Player\r\n";
			$newFileStr .= " * ======================\r\n";
			$newFileStr .= " * Playlist-Datei ID = ".$_POST['nextID']."\r\n";
			$newFileStr .= " * Automatisch erstellt am ".date('d.m.Y')." um ".date('H:i')." Uhr\r\n";
			$newFileStr .= " * \r\n";
			$newFileStr .= " */\r\n\r\n";
			$newFileStr .= "nMusicPlaylist['pl".$_POST['nextID']."'] = [];\r\n\r\n";

			$newFileName    = "playlists/playlist".$_POST['nextID'].".js";
			$newFilePointer = fopen($newFileName, "x");
			fwrite($newFilePointer, $newFileStr);
			fclose($newFilePointer);
			clearstatcache();

			// .m3u Export-Datei schreiben
			// ===========================
			$exE_FileName    = "export/exportSimple".$_POST['nextID'].".m3u";
			$exE_FilePointer = fopen($exE_FileName, "w");
			fwrite($exE_FilePointer, "");
			fclose($exE_FilePointer);
			clearstatcache();

			$exM_FileName    = "export/exportMeta".$_POST['nextID'].".m3u";
			$exM_FilePointer = fopen($exM_FileName, "w");
			fwrite($exM_FilePointer, "");
			fclose($exM_FilePointer);
			clearstatcache();

			// Neue Playlist farblich markieren
			$plNewListIndex = $_POST['nextID'];

			$_SESSION['lastUsedIndex'] = $_POST['nextIndex'];
		}

		$action = "show";
	}

	if( $action == "plFirst" )
	{
		// Indexdatei aktualisieren
		// ========================
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);

		$ifp1      = explode("plActive =", $indexFileContent);
		$ifp2      = explode(";", $ifp1[1]);

		$refresStr = $ifp1[0] . "plActive = " . $_POST['vorwahl'] . ";".$ifp2[1];

		$piFilePointer = fopen($indexFileName, "w");
		fwrite($piFilePointer, $refresStr);
		fclose($piFilePointer);
		clearstatcache();

		$action = "show";
	}

	if( $action == "sortPL" )
	{
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);

		$PLS_old          = "plData[".$_GET['plIndex']."]";
		$PLS_temp         = "plData[xxx]";
		$PLS_new          = "plData[".$_GET['switch']."]";

		$indexFileContent = str_replace($PLS_old,  $PLS_temp, $indexFileContent);
		$indexFileContent = str_replace($PLS_new,  $PLS_old, $indexFileContent);
		$indexFileContent = str_replace($PLS_temp, $PLS_new, $indexFileContent);

		$piFilePointer    = fopen($indexFileName, "w");
		fwrite($piFilePointer, $indexFileContent);
		fclose($piFilePointer);
		clearstatcache();

		$action = "show";
	}

	if( $action == "save" )
	{
		$plID    = $id;
		$plArrID = "pl".$plID;

		$exportE = "";
		$exportM = "#EXTM3U\r\n\r\n";

		// Playlist neu schreiben
		// ======================
		$plStr  = "/* \r\n";
		$plStr .= " * numaek WebAudio Player\r\n";
		$plStr .= " * ======================\r\n";
		$plStr .= " * Playlist-Datei ID = ".$id."\r\n";
		$plStr .= " * Automatisch erstellt am ".date('d.m.Y')." um ".date('H:i')." Uhr\r\n";
		$plStr .= " * \r\n";
		$plStr .= " */\r\n\r\n";

		$plStr .= "nMusicPlaylist['".$plArrID."'] = [];\r\n\r\n";

		$trackZeiten  = 0;
		$trackCounter = 0;

		if( isset($_POST['tl_datei']) )
		{
			for( $trackNr = 0; $trackNr < sizeof($_POST['tl_datei']); $trackNr++ )
			{
				// Track bei Löschung nicht übernehmen
				$seachForDelete = "tl_delete_".$trackNr;
				if( !isset($_POST[$seachForDelete]) )
				{
					$tfDatei      = $_POST['tl_datei'][$trackNr];
					$tfInterpret  = $_POST['tl_interpret'][$trackNr];
					$tfTitel      = $_POST['tl_titel'][$trackNr];
					$tfZeit       = $_POST['tl_zeit'][$trackNr];
					$tfBpm        = $_POST['tl_bpm'][$trackNr];
					$tfMeta       = $_POST['tl_meta'][$trackNr];

					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]              = [];\r\n";
					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['datei']     = '".$tfDatei."';\r\n";
					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['interpret'] = '".$tfInterpret."';\r\n";
					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['titel']     = '".$tfTitel."';\r\n";
					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['zeit']      = ".$tfZeit.";\r\n";
					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['bpm']       = ".$tfBpm.";\r\n";
					$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['meta']      = '".$tfMeta."';\r\n\r\n";

					$exportE     .= $tfDatei."\r\n";
					$exportM     .= "#EXTINF:".$tfZeit.",".$tfInterpret." - ".$tfDatei."\r\n";
					$exportM     .= $tfDatei."\r\n\r\n";

					$trackZeiten += $tfZeit;
					$trackCounter++;
				}
			}
		}

		if( isset($_POST['writeTrack']) )
		{
			if( $_FILES['tl_new_upload']['tmp_name'] != "" )
			{
				$uploadFile = $_FILES['tl_new_upload'];

				// Prüfung Dateigröße
				// ------------------
				$maxUploadSys = ini_get('upload_max_filesize'); settype($maxUploadSys, "integer");
				$fileSize     = $_FILES['tl_new_upload']['size'];
				if( $fileSize < ( 1024 * 1024 * $maxUploadSys ) )
				{
					// Prüfung Dateityp
					// ----------------
					$fileMime     = strtolower(strrchr($_FILES['tl_new_upload']['name'], '.'));
					if( $fileMime == ".mp3" || $fileMime == ".wav" || $fileMime == ".ogg" )
					{
						$ziel = "files/".$_FILES['tl_new_upload']['name'];
						copy($_FILES['tl_new_upload']['tmp_name'], $ziel);

						if( is_file($ziel) )
						{
							$uploadDatei = $ziel;
						} else
						  {
							$uploadError = "Die Datei wurde nicht hochgeladen.";
						  }
					} else
					  {
						$uploadError = "Die Datei hat ein falsches Format.";
					  }
				} else
				  {
					$uploadError = "Die Datei ist zu gro&szlig.";
				  }
			} else
			  {
				// 
			  }

			if( isset($uploadFile) )
			{
				if( !isset($uploadError) && isset($uploadDatei) )
				{
					// Upload ok
					$tfDatei = $uploadDatei;
				} else
				  {
					$tfError = 1;
				  }
			} else
			  {
				if( $_POST['tl_new_datei'] != "" )
				{
					// Pfad ok
					$tfDatei = $_POST['tl_new_datei'];
				} else
				  {
					$tfError = 1;
					$uploadError = "Es wurde kein Pfad angegeben.";
				  }
			  }

			if( !isset($tfError) )
			{
				$fileData  = new nID3($tfDatei);
				$dataArray = $fileData->getArray();

				if( $_POST['tl_new_titel'] != "" )
				{
					$tfTitel = $_POST['tl_new_titel'];
				} else
				  {
					$tfTitel = $fileData->getTag('TIT2');
					$tfTitel = ( $tfTitel != "Fehler" ) ? $tfTitel : "Neuer Titel";
					$tfTitel = str_replace("'", "", $tfTitel);
				  }

				if( $_POST['tl_new_interpret'] != "" )
				{
					$tfInterpret = $_POST['tl_new_interpret'];
				} else
				  {
					$tfInterpret = $fileData->getTag('TPE1');
					$tfInterpret = ( $tfInterpret != "Fehler" ) ? $tfInterpret : "unbekannt";
					$tfInterpret = str_replace("'", "", $tfInterpret);
				  }

				if( $_POST['tl_new_zeit'] != "" && $_POST['tl_new_zeit'] != "0" )
				{
					$tfZeit = $_POST['tl_new_zeit'];
				} else
				if( $_POST['tl_new_zeit_s'] != "" && $_POST['tl_new_zeit_s'] != "0" && $_POST['tl_new_zeit_s'] != "00" )
				{
					$tfZeit = ( $_POST['tl_new_zeit_m'] * 60 ) + $_POST['tl_new_zeit_s'];
				} else
				  {
					if( $fileData->getTag('TLEN') != "Fehler" )
					{
						$tfZeit = $fileData->getTag('TLEN');
					} else
					  {
						$tfZeit = ( isset($dataArray['mp3']['mp3_duration']) ) ? $dataArray['mp3']['mp3_duration'] : 0;
					  }
				  }

				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]              = [];\r\n";
				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['datei']     = '".$tfDatei."';\r\n";
				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['interpret'] = '".$tfInterpret."';\r\n";
				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['titel']     = '".$tfTitel."';\r\n";
				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['zeit']      = ".$tfZeit.";\r\n";
				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['bpm']       = 0;\r\n";
				$plStr       .= "nMusicPlaylist['".$plArrID."'][".$trackCounter."]['meta']      = '';\r\n\r\n";

				$exportE     .= $tfDatei."\r\n";
				$exportM     .= "#EXTINF:".$tfZeit.",".$tfInterpret." - ".$tfDatei."\r\n";
				$exportM     .= $tfDatei."\r\n\r\n";

				// Neuen Track farblich markieren
				$plNewTrackID = $trackCounter;

				$trackZeiten += $tfZeit;
				$trackCounter++;
			}
		}

		clearstatcache();
		$plFile        = "playlists/playlist".$id.".js";
		$plFilePointer = fopen($plFile, "w");
		fwrite($plFilePointer, $plStr);
		fclose($plFilePointer);
		clearstatcache();

		// Indexdatei aktualisieren
		// ========================
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);
		clearstatcache();

		$tStr1     = "plData[".$plIndex."]['titel']";
		$ifp1      = explode($tStr1, $indexFileContent);

		$tStr2     = "plData[".$plIndex."]['erstellt']";
		$ifp2      = explode($tStr2, $ifp1[1]);

		$userAllow = ( isset($_POST['user']) ) ? '1' : '0';

		$editStr   = "";
		$editStr  .= "plData[".$plIndex."]['titel']    = '".$_POST['playlistTitel']."';\r\n";
		$editStr  .= "    plData[".$plIndex."]['tracks']   = ".$trackCounter.";\r\n";
		$editStr  .= "    plData[".$plIndex."]['zeiten']   = ".$trackZeiten.";\r\n";
		$editStr  .= "    plData[".$plIndex."]['user']     = ".$userAllow.";\r\n";
		$editStr  .= "    plData[".$plIndex."]['erstellt']";

		$refresStr = $ifp1[0] . $editStr . $ifp2[1];

		$piFilePointer = fopen($indexFileName, "w");
		fwrite($piFilePointer, $refresStr);
		fclose($piFilePointer);
		clearstatcache();

		// .m3u Export-Datei schreiben
		// ===========================
		$exE_FileName    = "export/exportSimple".$id.".m3u";
		$exE_FilePointer = fopen($exE_FileName, "w");
		fwrite($exE_FilePointer, $exportE);
		fclose($exE_FilePointer);
		clearstatcache();

		$exM_FileName    = "export/exportMeta".$id.".m3u";
		$exM_FilePointer = fopen($exM_FileName, "w");
		fwrite($exM_FilePointer, $exportM);
		fclose($exM_FilePointer);
		clearstatcache();

		$saved  = 1;
		$action = "edit";
	}

	if( $action == "edit" )
	{
		clearstatcache();
		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);
		clearstatcache();

		echo "<script language=\"javascript\">\n\n".$indexFileContent."\n\n";

			echo "document.write( '<script type=\"text/javascript\" src=\"playlists/playlist'+plData[".$plIndex."]['id']+'.js\"><\/script>' );\n";

			echo "
			var zellen             = [];
			var puffer             = [];

			var cacheImages        = [];
			var cacheImageNr       = 0;

			var checkNumber        = 0;
			var checkFiles         = [];
			var audioTimes         = [];
			var fileCheckDelay     = 2500;
			var fileCheckRun       = -1;
			var fileCheckDuration  = 0;
			var fileCheckNotFound  = 0;
			var fileCheckTimeRrror = 0;

			function tableBuilt()
			{
				z    = 0;
				tab  = document.getElementById('tablePlaylist');
				plID = 'pl'+plData[".$plIndex."]['id'];

				if( nMusicPlaylist[plID].length > 0 )
				{
					for( z = 0; z < nMusicPlaylist[plID].length; z++ )
					{
						lineID                   =   'tabLine_'+z;
						lineClass                = 'classLine_'+z;

						checkFiles[z]            = nMusicPlaylist[plID][z]['datei'];

						"; // Suchtreffer farblich markieren
						if( isset($_GET['nr']) )
						{
							echo "if( z == ".$_GET['nr']." )
							{
								seachColor = ' color: red;';
							} else
							  {
								seachColor = '';
							  }\n";
						} else
						  {
							echo "seachColor = '';";
						  } echo "

						newRow                   = tab.insertRow((z+1));

						newCell0                 = newRow.insertCell(0);
						newCell1                 = newRow.insertCell(1);
						newCell2                 = newRow.insertCell(2);
						newCell3                 = newRow.insertCell(3);
						newCell4                 = newRow.insertCell(4);
						newCell5                 = newRow.insertCell(5);
						newCell6                 = newRow.insertCell(6);
						newCell7                 = newRow.insertCell(7);

						newCell0.className       = lineClass;
						newCell1.className       = lineClass;
						newCell2.className       = lineClass;
						newCell3.className       = lineClass;
						newCell4.className       = lineClass;
						newCell5.className       = lineClass;
						newCell6.className       = lineClass;
						newCell7.className       = lineClass;

						newCell0.id              = 'cell_'+z+'_0';
						newCell0.innerHTML       = '<sub><a href=\"'+nMusicPlaylist[plID][z]['datei']+'\" target=\"_blank\"><img id=\"fileCheck_'+z+'\" src=\"src/datei.gif\" border=\"0\" width=\"12\" height=\"12\" hspace=\"2\" title=\"Datei im Browser aufrufen\"></a></sub>&nbsp;';
						newCell0.innerHTML      += '<input type=\"text\" class=\"textfeld_'+z+'\"                           name=\"tl_datei[]\"      value=\"'+nMusicPlaylist[plID][z]['datei']+'\"     title=\"'+nMusicPlaylist[plID][z]['datei']+'\"     style=\"width: 150px;'+seachColor+'\">';
						newCell0.style.textAlign = 'left';

						newCell1.id              = 'cell_'+z+'_1';
						newCell1.innerHTML       = '<input type=\"text\" class=\"textfeld_'+z+'\"                           name=\"tl_interpret[]\"  value=\"'+nMusicPlaylist[plID][z]['interpret']+'\" title=\"'+nMusicPlaylist[plID][z]['interpret']+'\" style=\"width: 150px;'+seachColor+'\">';
						newCell1.style.textAlign = 'left';

						newCell2.id              = 'cell_'+z+'_2';
						newCell2.innerHTML       = '<input type=\"text\" class=\"textfeld_'+z+'\"                           name=\"tl_titel[]\"      value=\"'+nMusicPlaylist[plID][z]['titel']+'\"     title=\"'+nMusicPlaylist[plID][z]['titel']+'\"     style=\"width: 150px;'+seachColor+'\">';
						newCell2.style.textAlign = 'left';

						newCell3.id              = 'cell_'+z+'_3';
						newCell3.innerHTML       = '';
						newCell3.innerHTML      += '<sub><a href=\"javascript:setCorrectTime('+z+');\"><img id=\"timeCheck_'+z+'\" src=\"src/datei.gif\" border=\"0\" width=\"12\" height=\"12\" hspace=\"2\" title=\"Korrekturen zur Laufzeit werden erst durch die Dateipr&uuml;fung ermittelt!\"></a></sub>&nbsp;';
						newCell3.innerHTML      += '<input type=\"text\" class=\"textfeld_'+z+'\" id=\"timeField_'+z+'\"    name=\"tl_zeit[]\"       value=\"'+nMusicPlaylist[plID][z]['zeit']+'\"      title=\"'+nMusicPlaylist[plID][z]['zeit']+'\"      style=\"width: 50px;'+seachColor+' text-align: right;\">';
						newCell3.style.textAlign = 'right';

						newCell4.id              = 'cell_'+z+'_4';
						newCell4.innerHTML      += '<input type=\"text\" class=\"textfeld_'+z+'\"                           name=\"tl_bpm[]\"        value=\"'+nMusicPlaylist[plID][z]['bpm']+'\"       title=\"'+nMusicPlaylist[plID][z]['bpm']+'\"       style=\"width: 50px;'+seachColor+' text-align: right;\">';
						newCell4.style.textAlign = 'center';

						newCell5.id              = 'cell_'+z+'_5';
						newCell5.innerHTML       = '<sub><input type=\"checkbox\" class=\"delCheckBox\" id=\"cell_'+z+'_5\" name=\"tl_delete_'+z+'\" value=\"1\"></sub>L&ouml;schen';
 						newCell5.style.textAlign = 'center';

						newCell6.id              = 'cell_'+z+'_6';
						newCell6.innerHTML       = '<a id=\"cell_'+z+'_6\" href=\"javascript:sortiere('+z+', \'up\');\"><img id=\"cell_'+z+'_6\" src=\"src/auf.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Eine Zeile rauf\"></a> <a id=\"cell_'+z+'_6\" href=\"javascript:sortiere('+z+', \'down\');\"><img id=\"cell_'+z+'_6\" src=\"src/ab.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Eine Zeile runter\"></a>';
 						newCell6.style.textAlign = 'center';

						if( nMusicPlaylist[plID][z]['meta'] != '' )
						{
							trackMeta        = nMusicPlaylist[plID][z]['meta'].split('|');
							metaSF           = trackMeta[0];
							metaFS           = trackMeta[1];
							metaSR           = trackMeta[2];
							metaNC           = trackMeta[3];
							cell7title       = 'Klicken zur genaueren Darstellung im neuen Fenster!&#10;Infos: '+metaFS+' MB Filesize - '+metaSF + ' Samples - '+metaSR+' Hz - Channels: '+metaNC+'&#10;';
						} else
						  {
							cell7title       = 'Klicken zur genaueren Darstellung im neuen Fenster!&#10;';
						  }
							cacheImages[z]   = nMusicPlaylist[plID][z]['datei'];

						newCell7.id              = 'cell_'+z+'_7';
						newCell7.innerHTML       = '<input type=\"hidden\"  name=\"tl_meta[]\" value=\"'+nMusicPlaylist[plID][z]['meta']+'\">';
						newCell7.innerHTML       += '<img src=\"src/table.gif\" onclick=\"javascript:id3Show(\''+nMusicPlaylist[plID][z]['datei']+'\');\" title=\"ID3 Informationen annzeigen\" border=\"0\" width=\"20\" height=\"20\" style=\"cursor: pointer; margin-bottom: 2px;\">';
						newCell7.innerHTML       += '&nbsp;<a id=\"waveLink_'+z+'\" href=\"\" target=\"_blank\"><img id=\"waveImage_'+z+'\" src=\"src/spacer.gif\" width=\"160\" height=\"24\" border=\"0\" title=\"'+cell7title+'\"></a>';
 						newCell7.style.textAlign = 'left';

						\n"; // Neuen Track grün markieren
						if( isset($plNewTrackID) )
						{
							echo " if( z == ".$plNewTrackID." )
							{
 								newCell0.style.border = '1px solid #00FF00';
 								newCell1.style.border = '1px solid #00FF00';
 								newCell2.style.border = '1px solid #00FF00';
 								newCell3.style.border = '1px solid #00FF00';
 								newCell4.style.border = '1px solid #00FF00';
 								newCell5.style.border = '1px solid #00FF00';
 								newCell6.style.border = '1px solid #00FF00';
 								newCell7.style.border = '1px solid #00FF00';
							}\n";
						} echo "

						zellen[z]    = [];
						zellen[z][0] = newCell0.innerHTML;
						zellen[z][1] = newCell1.innerHTML;
						zellen[z][2] = newCell2.innerHTML;
						zellen[z][3] = newCell3.innerHTML;
						zellen[z][4] = newCell4.innerHTML;
						zellen[z][5] = newCell5.innerHTML;
						zellen[z][6] = newCell6.innerHTML;
						zellen[z][7] = newCell7.innerHTML;
					}

					cacheImageNr = 0;
					showLoadedImage();

					sumRow                     = tab.insertRow((z+1));
					sumCell1                   = sumRow.insertCell(0);
					sumCell1.colSpan           = 3;
 					sumCell1.innerHTML         = '';
					sumCell2                   = sumRow.insertCell(1);
 					sumCell2.style.textAlign   = 'right';
 					sumCell2.style.color       = 'gold';
 					sumCell2.innerHTML         = plData[".$plIndex."]['zeiten']+'&nbsp;';
					sumCell3                   = sumRow.insertCell(2);
					sumCell3.colSpan           = 4;
 					sumCell3.style.color       = 'gold';
 					sumCell3.innerHTML         = '&nbsp;= '+nMusic_calcTime(plData[".$plIndex."]['zeiten'], 1)+' ges. Laufzeit';
				} else
				  {
					emptyRow                   = tab.insertRow(1);
					emptyCellC                 = emptyRow.insertCell(0);
					emptyCellC.colSpan         = 8;
 					emptyCellC.style.textAlign = 'center';
 					emptyCellC.style.height    = '50px';
 					emptyCellC.innerHTML       = 'Es sind noch noch keine Titel vorhanden!';
				  }

				// Playlist öffentlich
				if( plData[".$plIndex."]['user'] == 1 )
				{
					document.getElementById('plUser').checked = true;
				}

				document.getElementById('plTitel').value          =            plData[".$plIndex."]['titel'];
				document.getElementById('trackNumbers').innerHTML = 'Tracks ('+plData[".$plIndex."]['tracks']+'):';

				fileCheckDuration = Math.round( checkFiles.length * (fileCheckDelay / 1000 ) );
				document.getElementById('fileCheckLink').title = 'Dieser Vorgang dauert ca. '+fileCheckDuration+' Sekunden.';\n";

				if( isset($autoScan) )
				{
					// Nach Verzeichnis einscann automatisch Dateien prüfen
					echo "window.setTimeout('checkMusicFileStart()', 1000);\n";
				}

			echo "}

			function showLoadedImage()
			{
				if( typeof(cacheImages[cacheImageNr]) !== 'undefinded' )
				{
					var xhttp = new XMLHttpRequest();
					if( xhttp )
					{
						xhttpContent = 'mode=waveCheck&name='+encodeURIComponent(cacheImages[cacheImageNr]);
						xhttp.onload = function(e)
						{
							if( xhttp.readyState == 4 && xhttp.status == 200 )
							{
								if( xhttp.responseText != 'ERROR' )
								{
									cacheData = xhttp.responseText.split('|');

									document.getElementById('waveLink_'+cacheImageNr).href          = 'cache/'+decodeURIComponent(cacheData[1]);
									document.getElementById('waveImage_'+cacheImageNr).src          = 'cache/'+decodeURIComponent(cacheData[0]);
									document.getElementById('waveImage_'+cacheImageNr).style.cursor = 'pointer';
									document.getElementById('waveImage_'+cacheImageNr).title       += 'Datei: cache/'+decodeURIComponent(cacheData[0]);

									zellen[cacheImageNr][7] = document.getElementById('cell_'+cacheImageNr+'_7').innerHTML;
								}
								if( cacheImageNr < ( cacheImages.length - 1 ) )
								{
									cacheImageNr++;
									showLoadedImage();
								}
							}
						};
						xhttp.open('POST', 'ajax.php', true);
						xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
						xhttp.send(xhttpContent);
					}
				}
			}

			function checkMusicFileStart()
			{
				audioTimes = [];

				if( checkFiles.length > 0 )
				{
					if( fileCheckRun == 0 || fileCheckRun == -1 )
					{
						fileCheckRun       = 1;
						fileCheckNotFound  = 0;
						fileCheckTimeRrror = 0;

						for( res = 0; res < checkFiles.length; res++ )
						{
							checkImgId    = 'fileCheck_'+res;
							checkImgTime  = 'timeCheck_'+res;
							document.getElementById(checkImgId).src   = 'src/datei.gif';
							document.getElementById(checkImgTime).src = 'src/datei.gif';
						}

						checkMusicFile();
					}
				} else
				  {
					alert('Es sind noch keine Tracks vorhanden!');
				  }
			}

			function checkMusicFileEnd()
			{
				fileCheckRun = 0;
				checkNumber  = 0;
				document.getElementById('trackCheck').innerHTML = '- Pr&uuml;fung fertig!';

				fileCheckSUm  = 'Erreichbarkeits- und Laufzeit-Test abgeschlossen!\\n';
				fileCheckSUm += fileCheckNotFound+' Dateie(n) wurden nicht gefunden!\\n';
				fileCheckSUm += fileCheckTimeRrror+' Zeit(en) weisen Abweichungen auf!\\n';
				fileCheckSUm += '\\n';
				fileCheckSUm += 'Halte den Mauszeiger auf die farbigen Leuchtmelder zum Lesen der Hinweise und zur etwaigen Korrektur der Laufzeiten!\\n';
				fileCheckSUm += '\\n';
				fileCheckSUm += 'Sollen jetzt alle Laufzeiten korrigiert werden?';

				    askScan  = confirm(fileCheckSUm);
				if( askScan != false )
				{
					correctAllTimes();
				}
			}

			function checkMusicFile()
			{
				if( checkNumber < checkFiles.length )
				{
					plID                                            = 'pl'+plData[".$plIndex."]['id'];
					document.getElementById('testAudioFile').src    = nMusicPlaylist[plID][checkNumber]['datei'];
					document.getElementById('trackCheck').innerHTML = '&nbsp;&nbsp;&nbsp;...pr&uuml;fe ('+(checkNumber+1)+'/'+plData[".$plIndex."]['tracks']+')';
					document.getElementById('testAudioFile').onload = window.setTimeout('checkMusicFileStats()', 2500);
				} else
				  {
					window.setTimeout('checkMusicFileEnd()',   250);
				  }
			}

			function checkMusicFileStats()
			{
				plID          = 'pl'+plData[".$plIndex."]['id'];

				checkImgId    = 'fileCheck_'+checkNumber;
				checkImgTime  = 'timeCheck_'+checkNumber;

				checkDuration = Math.floor( document.getElementById('testAudioFile').duration );
				audioTimes.push(checkDuration);

				if( !isNaN(checkDuration) )
				{
					document.getElementById(checkImgId).src     = 'src/led_gruen.gif';
					if( nMusicPlaylist[plID][checkNumber]['datei'].indexOf('://') != -1 )
					{
						document.getElementById(checkImgId).title = 'Datei ausserhalb des Servers gefunden! - Im Browser aufrufen';
					} else
					  {
						document.getElementById(checkImgId).title = 'Datei auf Server gefunden! - Im Browser aufrufen';
					  }

					if( checkDuration == nMusicPlaylist[plID][checkNumber]['zeit'] )
					{
						document.getElementById(checkImgTime).src          = 'src/led_gruen.gif';
						document.getElementById(checkImgTime).title        = 'Die Laufzeit wurde korrekt eingetragen!';
						document.getElementById(checkImgTime).style.cursor = 'Help';
					} else
					  {
						fileCheckTimeRrror++;

						document.getElementById(checkImgTime).src          = 'src/led_rot.gif';
						document.getElementById(checkImgTime).title        = 'Die Laufzeit weicht von der eingetragenen ab!\\nErmittelt wurden: '+checkDuration+' Sekunden!\\n\\n->Ermittelten Wert jetzt verwenden!\\n\\nSpeichern nicht vergessen!';
					  }
				} else
				  {
					fileCheckNotFound++;

					document.getElementById(checkImgId).src     = 'src/led_rot.gif';
					document.getElementById(checkImgId).title   = 'Datei nicht gefunden! - Pfad im Browser aufrufen';

					document.getElementById(checkImgTime).src   = 'src/led_aus.gif';
					document.getElementById(checkImgTime).title = 'Datei nicht gefunden! - Die Laufzeit konnte durch den Test nicht ermittelt werden';
				  }

				checkNumber++;
				checkMusicFile();
			}

			function setCorrectTime(fieldNumber)
			{
				if( fileCheckRun > -1 )
				{
					if( audioTimes[fieldNumber] )
					{
						useField                                = 'timeField_'+fieldNumber;
						document.getElementById(useField).value = audioTimes[fieldNumber];
					} else
					  {
						alert('Die Laufzeit konnte durch den Test nicht ermittelt werden!');
					  }
				} else
				  {
					    askTest = confirm('Korrekturen zur Laufzeit werden erst durch den Datei-Test ermittelt!\\n\\nSoll der Test jetzt gestartet werden?');
					if( askTest != false )
					{
						checkMusicFileStart();
					}
				  }
			}

			function correctAllTimes()
			{
				for( st = 0; st < audioTimes.length; st++ )
				{
					if( audioTimes[st] )
					{
						useField                                = 'timeField_'+st;
						document.getElementById(useField).value = audioTimes[st];
					}
				}
				alert('Die Laufzeiten wurden eingetragen.\\nKlicke nun nur noch auf \"Alles speichern\"!');
			}

			function sortiere(id, dir)
			{
				puffer[0] = zellen[id][0];
				puffer[1] = zellen[id][1];
				puffer[2] = zellen[id][2];
				puffer[3] = zellen[id][3];
				puffer[4] = zellen[id][4];
				puffer[5] = zellen[id][5];
				puffer[6] = zellen[id][6];
				puffer[7] = zellen[id][7];

				if( dir == 'up' )
				{
					if( id == 0 )
					{
						// oberste Zeile - in unterste

						zellen[id][0] = zellen[(zellen.length-1)][0];
						zellen[id][1] = zellen[(zellen.length-1)][1];
						zellen[id][2] = zellen[(zellen.length-1)][2];
						zellen[id][3] = zellen[(zellen.length-1)][3];
						zellen[id][4] = zellen[(zellen.length-1)][4];
						zellen[id][5] = zellen[(zellen.length-1)][5];
						zellen[id][7] = zellen[(zellen.length-1)][7];

						zellen[(zellen.length-1)][0] = puffer[0];
						zellen[(zellen.length-1)][1] = puffer[1];
						zellen[(zellen.length-1)][2] = puffer[2];
						zellen[(zellen.length-1)][3] = puffer[3];
						zellen[(zellen.length-1)][4] = puffer[4];
						zellen[(zellen.length-1)][5] = puffer[5];
						zellen[(zellen.length-1)][7] = puffer[7];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell3 = 'cell_'+(id+0)+'_3';
						oldCell4 = 'cell_'+(id+0)+'_4';
						oldCell5 = 'cell_'+(id+0)+'_5';
						oldCell7 = 'cell_'+(id+0)+'_7';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell3).innerHTML = zellen[(id+0)][3];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];
						document.getElementById(oldCell5).innerHTML = zellen[(id+0)][5];
						document.getElementById(oldCell7).innerHTML = zellen[(id+0)][7];

						newCell0 = 'cell_'+(zellen.length-1)+'_0';
						newCell1 = 'cell_'+(zellen.length-1)+'_1';
						newCell2 = 'cell_'+(zellen.length-1)+'_2';
						newCell3 = 'cell_'+(zellen.length-1)+'_3';
						newCell4 = 'cell_'+(zellen.length-1)+'_4';
						newCell5 = 'cell_'+(zellen.length-1)+'_5';
						newCell7 = 'cell_'+(zellen.length-1)+'_7';

						document.getElementById(newCell0).innerHTML = zellen[(zellen.length-1)][0];
						document.getElementById(newCell1).innerHTML = zellen[(zellen.length-1)][1];
						document.getElementById(newCell2).innerHTML = zellen[(zellen.length-1)][2];
						document.getElementById(newCell3).innerHTML = zellen[(zellen.length-1)][3];
						document.getElementById(newCell4).innerHTML = zellen[(zellen.length-1)][4];
						document.getElementById(newCell5).innerHTML = zellen[(zellen.length-1)][5];
						document.getElementById(newCell7).innerHTML = zellen[(zellen.length-1)][7];
					} else
					  {
						// mittlere Zeile - eine nach oben

						zellen[id][0] = zellen[(id-1)][0];
						zellen[id][1] = zellen[(id-1)][1];
						zellen[id][2] = zellen[(id-1)][2];
						zellen[id][3] = zellen[(id-1)][3];
						zellen[id][4] = zellen[(id-1)][4];
						zellen[id][5] = zellen[(id-1)][5];
						zellen[id][7] = zellen[(id-1)][7];

						zellen[(id-1)][0] = puffer[0];
						zellen[(id-1)][1] = puffer[1];
						zellen[(id-1)][2] = puffer[2];
						zellen[(id-1)][3] = puffer[3];
						zellen[(id-1)][4] = puffer[4];
						zellen[(id-1)][5] = puffer[5];
						zellen[(id-1)][7] = puffer[7];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell3 = 'cell_'+(id+0)+'_3';
						oldCell4 = 'cell_'+(id+0)+'_4';
						oldCell5 = 'cell_'+(id+0)+'_5';
						oldCell7 = 'cell_'+(id+0)+'_7';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell3).innerHTML = zellen[(id+0)][3];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];
						document.getElementById(oldCell5).innerHTML = zellen[(id+0)][5];
						document.getElementById(oldCell7).innerHTML = zellen[(id+0)][7];

						newCell0 = 'cell_'+(id-1)+'_0';
						newCell1 = 'cell_'+(id-1)+'_1';
						newCell2 = 'cell_'+(id-1)+'_2';
						newCell3 = 'cell_'+(id-1)+'_3';
						newCell4 = 'cell_'+(id-1)+'_4';
						newCell5 = 'cell_'+(id-1)+'_5';
						newCell7 = 'cell_'+(id-1)+'_7';

						document.getElementById(newCell0).innerHTML = zellen[(id-1)][0];
						document.getElementById(newCell1).innerHTML = zellen[(id-1)][1];
						document.getElementById(newCell2).innerHTML = zellen[(id-1)][2];
						document.getElementById(newCell3).innerHTML = zellen[(id-1)][3];
						document.getElementById(newCell4).innerHTML = zellen[(id-1)][4];
						document.getElementById(newCell5).innerHTML = zellen[(id-1)][5];
						document.getElementById(newCell7).innerHTML = zellen[(id-1)][7];
					  }
				} else
				  {
					if( id >= ( zellen.length - 1) )
					{
						// unterste Zeile - in oberste

						zellen[id][0] = zellen[0][0];
						zellen[id][1] = zellen[0][1];
						zellen[id][2] = zellen[0][2];
						zellen[id][3] = zellen[0][3];
						zellen[id][4] = zellen[0][4];
						zellen[id][5] = zellen[0][5];
						zellen[id][7] = zellen[0][7];

						zellen[0][0] = puffer[0];
						zellen[0][1] = puffer[1];
						zellen[0][2] = puffer[2];
						zellen[0][3] = puffer[3];
						zellen[0][4] = puffer[4];
						zellen[0][5] = puffer[5];
						zellen[0][7] = puffer[7];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell3 = 'cell_'+(id+0)+'_3';
						oldCell4 = 'cell_'+(id+0)+'_4';
						oldCell5 = 'cell_'+(id+0)+'_5';
						oldCell7 = 'cell_'+(id+0)+'_7';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell3).innerHTML = zellen[(id+0)][3];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];
						document.getElementById(oldCell5).innerHTML = zellen[(id+0)][5];
						document.getElementById(oldCell7).innerHTML = zellen[(id+0)][7];

						newCell0 = 'cell_'+0+'_0';
						newCell1 = 'cell_'+0+'_1';
						newCell2 = 'cell_'+0+'_2';
						newCell3 = 'cell_'+0+'_3';
						newCell4 = 'cell_'+0+'_4';
						newCell5 = 'cell_'+0+'_5';
						newCell7 = 'cell_'+0+'_7';

						document.getElementById(newCell0).innerHTML = zellen[0][0];
						document.getElementById(newCell1).innerHTML = zellen[0][1];
						document.getElementById(newCell2).innerHTML = zellen[0][2];
						document.getElementById(newCell3).innerHTML = zellen[0][3];
						document.getElementById(newCell4).innerHTML = zellen[0][4];
						document.getElementById(newCell5).innerHTML = zellen[0][5];
						document.getElementById(newCell7).innerHTML = zellen[0][7];
					} else
					  {
						// mittlere Zeile - eine nach unten

						zellen[id][0] = zellen[(id+1)][0];
						zellen[id][1] = zellen[(id+1)][1];
						zellen[id][2] = zellen[(id+1)][2];
						zellen[id][3] = zellen[(id+1)][3];
						zellen[id][4] = zellen[(id+1)][4];
						zellen[id][5] = zellen[(id+1)][5];
						zellen[id][7] = zellen[(id+1)][7];

						zellen[(id+1)][0] = puffer[0];
						zellen[(id+1)][1] = puffer[1];
						zellen[(id+1)][2] = puffer[2];
						zellen[(id+1)][3] = puffer[3];
						zellen[(id+1)][4] = puffer[4];
						zellen[(id+1)][5] = puffer[5];
						zellen[(id+1)][7] = puffer[7];

						oldCell0 = 'cell_'+(id+0)+'_0';
						oldCell1 = 'cell_'+(id+0)+'_1';
						oldCell2 = 'cell_'+(id+0)+'_2';
						oldCell3 = 'cell_'+(id+0)+'_3';
						oldCell4 = 'cell_'+(id+0)+'_4';
						oldCell5 = 'cell_'+(id+0)+'_5';
						oldCell7 = 'cell_'+(id+0)+'_7';

						document.getElementById(oldCell0).innerHTML = zellen[(id+0)][0];
						document.getElementById(oldCell1).innerHTML = zellen[(id+0)][1];
						document.getElementById(oldCell2).innerHTML = zellen[(id+0)][2];
						document.getElementById(oldCell3).innerHTML = zellen[(id+0)][3];
						document.getElementById(oldCell4).innerHTML = zellen[(id+0)][4];
						document.getElementById(oldCell5).innerHTML = zellen[(id+0)][5];
						document.getElementById(oldCell7).innerHTML = zellen[(id+0)][7];

						newCell0 = 'cell_'+(id+1)+'_0';
						newCell1 = 'cell_'+(id+1)+'_1';
						newCell2 = 'cell_'+(id+1)+'_2';
						newCell3 = 'cell_'+(id+1)+'_3';
						newCell4 = 'cell_'+(id+1)+'_4';
						newCell5 = 'cell_'+(id+1)+'_5';
						newCell7 = 'cell_'+(id+1)+'_7';

						document.getElementById(newCell0).innerHTML = zellen[(id+1)][0];
						document.getElementById(newCell1).innerHTML = zellen[(id+1)][1];
						document.getElementById(newCell2).innerHTML = zellen[(id+1)][2];
						document.getElementById(newCell3).innerHTML = zellen[(id+1)][3];
						document.getElementById(newCell4).innerHTML = zellen[(id+1)][4];
						document.getElementById(newCell5).innerHTML = zellen[(id+1)][5];
						document.getElementById(newCell7).innerHTML = zellen[(id+1)][7];
					  }
				  }
			}

			function id3Show(fileUrl)
			{
				if( fileUrl == -1 )
				{
					document.getElementById('id3Div').innerHTML        = '';
					document.getElementById('id3Div').style.display    = 'none';
					document.getElementById('id3Div').style.visibility = 'hidden';
				} else
				  {
					var xhttp = new XMLHttpRequest();
					if( xhttp )
					{
						xhttpContent = 'mode=id3showTable&datei='+encodeURIComponent(fileUrl);
						xhttp.onload = function(e)
						{
							if( xhttp.readyState == 4 && xhttp.status == 200 )
							{
								if( xhttp.responseText != 'ERROR' )
								{
									document.getElementById('id3Div').innerHTML        = xhttp.responseText;
									document.getElementById('id3Div').style.display    = 'block';
									document.getElementById('id3Div').style.visibility = 'visible';
								}
							}
						};
						xhttp.open('POST', 'ajax.php', true);
						xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
						xhttp.send(xhttpContent);
					} else
					  {
						alert('Keine Verbindung zum Auslesen!');
					  }
				  }
			}

			function id3SaveCover(fileUrl)
			{
				var xhttp = new XMLHttpRequest();
				if( xhttp )
				{
					xhttpContent = 'mode=id3saveImage&datei='+encodeURIComponent(fileUrl);
					xhttp.onload = function(e)
					{
						if( xhttp.readyState == 4 && xhttp.status == 200 )
						{
							if( xhttp.responseText != 'ERROR' )
							{
								window.open(xhttp.responseText);
							} else
							  {
								alert('Das Bild konnte nicht erstellt werden!');
							  }
						}
					};
					xhttp.open('POST', 'ajax.php', true);
					xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
					xhttp.send(xhttpContent);
				} else
				  {
					alert('Keine Verbindung zum Auslesen!');
				  }
			}

			function MouseOver(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,4) == 'cell' )
					{
						t1 = event.target.id.split('_');
						t2 = 'classLine_'+t1[1];
						tf = 'textfeld_'+t1[1];

						document.getElementsByClassName(t2)[0].childNodes[2].style.backgroundColor = '#005555';
						document.getElementsByClassName(t2)[1].childNodes[0].style.backgroundColor = '#005555';
						document.getElementsByClassName(t2)[2].childNodes[0].style.backgroundColor = '#005555';
						document.getElementsByClassName(t2)[3].childNodes[2].style.backgroundColor = '#005555';
						document.getElementsByClassName(t2)[4].childNodes[0].style.backgroundColor = '#005555';

						for( ec = 0; ec < 8; ec++ )
						{
							     document.getElementsByClassName(t2)[ec].style.backgroundColor = '#005555';
						}
					}
				}
			}

			function MouseOut(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,4) == 'cell' )
					{
						t1 = event.target.id.split('_');
						t2 = 'classLine_'+t1[1];
						tf = 'textfeld_'+t1[1];

						document.getElementsByClassName(t2)[0].childNodes[2].style.backgroundColor = '#000000';
						document.getElementsByClassName(t2)[1].childNodes[0].style.backgroundColor = '#000000';
						document.getElementsByClassName(t2)[2].childNodes[0].style.backgroundColor = '#000000';
						document.getElementsByClassName(t2)[3].childNodes[2].style.backgroundColor = '#000000';
						document.getElementsByClassName(t2)[4].childNodes[0].style.backgroundColor = '#000000';

						for( ec = 0; ec < 8; ec++ )
						{
							     document.getElementsByClassName(t2)[ec].style.backgroundColor = '#505050';
						}
					}
				}
			}

			document.addEventListener(\"mouseover\", MouseOver,  true);
			document.addEventListener(\"mouseout\",  MouseOut,   true);

			document.onload = window.setTimeout('tableBuilt()', 200);

		</script>

		<div id=\"id3Div\" style=\"position: fixed; display: none; visibility: hidden; top: 0px; left: 0px;\"></div>

		<fieldset><legend><h4>&nbsp;Playlist bearbeiten&nbsp;</h4></legend>
		<form name=\"tlEdit\" action=\"admin.php\" method=\"post\" enctype=\"multipart/form-data\" onsubmit=\"return checkSubmit();\">
		<input type=\"submit\" class=\"nMusicButton\" value=\"Alles speichern\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Exportieren\" onclick=\"self.location.href='admin.php?action=export&id=".$id."&plIndex=".$plIndex."';\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\"   onclick=\"self.location.href='admin.php';\">
		<input type=\"hidden\" name=\"action\"  value=\"save\">
		<input type=\"hidden\" name=\"plIndex\" value=\"".$plIndex."\">
		<input type=\"hidden\" name=\"id\"      value=\"".$id."\">
		<audio id=\"testAudioFile\" src=\"\"></audio>
		<br><br>\n";

		if( isset($saved) )
		{
			echo "<br><span style=\"background-color: black; color: green; font-weight: bold;\">&nbsp;Die &Auml;nderungen wurden gespeichert!&nbsp;</span><br><br>\n";
		} else
		  {
			echo "<br>\n";
		  }

		echo "<span style=\"font-weight: bold;\">Eigenschaften (ID = ".$id."):</span><br>
		<table border=\"1\">
			<tr>
				<td style=\"width: 50px;\">Titel:</td>
				<td><input type=\"text\" id=\"plTitel\" name=\"playlistTitel\" value=\"\" style=\"width: 250px;\"></td>
				<td style=\"width: 200px;\"><sub><input type=\"checkbox\" id=\"plUser\" name=\"user\" value=\"1\"></sub>Playlist ist &ouml;ffentlich</td>
			</tr>
		</table>
		<br><br>

		<span id=\"trackNumbers\" style=\"font-weight: bold;\">Tracks:</span>
		[<a id=\"fileCheckLink\" href=\"javascript:checkMusicFileStart();\">Dateien jetzt auf Erreichbarkeit und Laufzeit &uuml;berpr&uuml;fen</a>]<br>
		<table id=\"tablePlaylist\" border=\"0\" style=\"border: 1px solid black; border-spacing: 1px;\">
			<tr>
				<th style=\"min-width: 130px; text-align: left;\">
					Datei
					<span id=\"trackCheck\" style=\"color: gold; font-weight: normal;\"></span>
				</th>
				<th style=\"              text-align: left;\"  >Interpret</th>
				<th style=\"              text-align: left;\"  >Titel</th>
				<th style=\"width:  80px; text-align: center;\">Sekunden</th>
				<th style=\"width:  60px; text-align: center;\">BPM</th>
				<th style=\"width:  90px; text-align: center;\">Optionen</th>
				<th style=\"width:  80px; text-align: center;\">Sortieren</th>
				<th style=\"width: 190px; text-align: center;\">Infos</th>
			</tr>
		</table>
		<br><br>

		<span style=\"font-weight: bold;\">Track hinzuf&uuml;gen:</span><br>
		<table id=\"tablePlaylist\" border=\"1\">
			<tr>
				<th style=\"width: 80px; text-align: left;\" colspan=\"2\">Datei-Pfad eintragen...</th>
				<th style=\"width: 90px; text-align: left;\">oder Datei hochladen</th>
			</tr>
			<tr>
				<td style=\"text-align: left; vertical-align: top;\" colspan=\"2\">
					<input type=\"text\" name=\"tl_new_datei\"   value=\"\" style=\"width: 250px;\"><br>
					<span style=\"font-style: italic;\">- Absoluter Pfad:</span><br>&nbsp;&nbsp;http://www.DOMAIN.de/datei.mp3<br>
					<span style=\"font-style: italic;\">- Relativer Pfad:</span><br>&nbsp;&nbsp;files/datei.mp3<br>
				</td>
				<td style=\"text-align: left; vertical-align: top;\">
					<input type=\"file\" name=\"tl_new_upload\"  value=\"\" style=\"width: 250px;\"><br>
					<span style=\"font-style: italic;\">Erlaubte Dateitypen:</span> mp3, wav, ogg<br>
					<span style=\"font-style: italic;\">Max. Dateigr&ouml;&szlig;e:</span> ".ini_get('upload_max_filesize')."<br>\n";
					if( isset($uploadError) )
					{
						echo "<br><span style=\"background-color: black; color: red;\">&nbsp;".$uploadError."&nbsp;</span><br>\n";
					}
				echo "</td>
			</tr>
			<tr>
				<th style=\"text-align:   left;\" colspan=\"2\">Interpret <sub><img src=\"src/datei.gif\" border=\"0\" style=\"cursor: Help;\" title=\"Feld leer lassen zum Auslesen des ID3-Tags!\"></sub></th>
				<th style=\"text-align:   left;\"              >Titel     <sub><img src=\"src/datei.gif\" border=\"0\" style=\"cursor: Help;\" title=\"Feld leer lassen zum Auslesen des ID3-Tags!\"></sub></th>
			</tr>
			<tr>
				<td style=\"text-align:   left;\" colspan=\"2\"><input type=\"text\" name=\"tl_new_interpret\" value=\"\" style=\"width: 250px;\"></td>
				<td style=\"text-align:   left;\"              ><input type=\"text\" name=\"tl_new_titel\"     value=\"\" style=\"width: 250px;\"></td>
			</tr>
			<tr>
				<th style=\"text-align:   left;\" colspan=\"2\">Laufzeit eintragen  <sub><img src=\"src/datei.gif\" border=\"0\" style=\"cursor: Help;\" title=\"Kann auch sp&auml;ter ermittelt werden!\"></sub></th>
				<th style=\"text-align: center;\">&nbsp;</th>
			</tr>
			<tr>
				<td style=\"width: 40px; text-align: left;\">
					<input type=\"text\" name=\"tl_new_zeit\"   value=\"0\"  style=\"width: 40px; text-align: right;\"> Sek. oder
				</td>
				<td style=\"width: 40px; text-align: left;\">
					<input type=\"text\" name=\"tl_new_zeit_m\" value=\"0\"  style=\"width: 23px; text-align: right;\"> :
					<input type=\"text\" name=\"tl_new_zeit_s\" value=\"00\" style=\"width: 23px; text-align: right;\">
					mm:ss
				</td>
				<td style=\"text-align: center; width:  90px;\"><sub><input type=\"checkbox\" name=\"writeTrack\" value=\"1\"></sub><span style=\"color: gold; font-weight: bold;\">Neuen Track speichern</span></td>
			</tr>
		</table>
		<br><br>
		<input type=\"submit\" class=\"nMusicButton\" value=\"Alles speichern\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Exportieren\" onclick=\"self.location.href='admin.php?action=export&id=".$id."&plIndex=".$plIndex."';\">
		<input type=\"button\" class=\"nMusicButton\" value=\"Abbrechen\"   onclick=\"self.location.href='admin.php';\">
		<br><br></form></fieldset>\n\n";
	}

	if( $action == "show" )
	{
		// Alle Playlisten auflisten
		// =========================

		$indexFileName    = "playlists/playlistIndex.js";
		$indexFileSize    = ( filesize($indexFileName) > 0 ) ? filesize($indexFileName) : 1;
		$indexFilePointer = fopen($indexFileName, "r");
		$indexFileContent = fread($indexFilePointer, $indexFileSize);
		fclose($indexFilePointer);

		echo "<script language=\"javascript\">\n\n".$indexFileContent."\n\n";

			// Playlist-Dateien zum Test laden
			// ===============================
			$scanDir           = opendir("playlists/");
			while( $plFileName = readdir($scanDir) )
			{
				clearstatcache();
				$plFileMime = strtolower(strrchr($plFileName, '.'));
				if( $plFileMime == ".js" && $plFileName != "playlistIndex.js" )
				{
					echo "document.write( '<script type=\"text/javascript\" src=\"playlists/".$plFileName."\"><\/script>' );\n";
				}
			}

			echo "var lastID           = 0;
			      var lastIndex        = 0;

			      var searchData       = [];
			      var searchlinks      = [];
			      var searchNum        = 0;
			      var searchLineActive = -1;

			function tableBuilt()
			{
				tab      = document.getElementById('tableIndex');
				z        = 0;
				preCount = 0;
				idArr    = '';
				allIDs   = [];

				for( pre in plData )
				{
					idArr += pre+'|';
					allIDs.push(pre);
					preCount++;
				}

				if( plData.length > 0 )
				{
					vorwahl   = -1;
					sumTracks = 0;
					sumZeiten = 0;
					loopCount = 0;

					for( key in plData )
					{
						z                  = key;
						plID               = 'pl'+plData[z]['id'];

						lineID             =   'tabLine_'+key;
						lineClass          = 'classLine_'+key;

						plOK               = ( nMusicPlaylist[plID] ) ? 'Ja' : 'Nein';
						lastID             = ( plData[z]['id'] > lastID ) ? plData[z]['id'] : lastID;

						sumTracks         += plData[z]['tracks'];
						sumZeiten         += plData[z]['zeiten'];

						newRow             = tab.insertRow((loopCount+1));

						newCell0           = newRow.insertCell(0);
						newCell1           = newRow.insertCell(1);
						newCell2           = newRow.insertCell(2);
						newCell3           = newRow.insertCell(3);
						newCell4           = newRow.insertCell(4);
						newCell5           = newRow.insertCell(5);
						newCell6           = newRow.insertCell(6);
						newCell7           = newRow.insertCell(7);
						newCell8           = newRow.insertCell(8);

						newCell0.id        = lineID+'_0';
						newCell1.id        = lineID+'_1';
						newCell2.id        = lineID+'_2';
						newCell3.id        = lineID+'_3';
						newCell4.id        = lineID+'_4';
						newCell5.id        = lineID+'_5';
						newCell6.id        = lineID+'_6';
						newCell7.id        = lineID+'_7';
						newCell8.id        = lineID+'_8';

						newCell0.className = lineClass;
						newCell1.className = lineClass;
						newCell2.className = lineClass;
						newCell3.className = lineClass;
						newCell4.className = lineClass;
						newCell5.className = lineClass;
						newCell6.className = lineClass;
						newCell7.className = lineClass;
						newCell8.className = lineClass;

						newCell0.innerHTML = plData[z]['id'];
						newCell0.style.textAlign = 'center';

						newCell1.innerHTML       = ( nMusicPlaylist[plID] ) ? plData[z]['titel'] : '<span id=\"'+lineID+'_1\" style=\"color: red; cursor: Help;\" title=\"Datei nicht gefunden!\">'+plData[z]['titel']+'</span>';

						newCell2.innerHTML       = plData[z]['tracks'];
						newCell2.style.textAlign = 'right';

						newCell3.innerHTML       = nMusic_calcTime(plData[z]['zeiten'], 1);
						newCell3.style.textAlign = 'center';

						newCell4.innerHTML       = plData[z]['erstellt'];
						newCell4.style.textAlign = 'center';

						newCell5.innerHTML       = ( plData[z]['user'] == 1 ) ? 'Ja' : '-';
						newCell5.style.textAlign = 'center';
						if( plData[z]['user'] == 0 && plData[z]['id'] == plActive )
						{
							newCell5.style.backgroundColor = 'red';
						}

						if( plData[z]['id'] == plActive )
						{
							vorwahl            = plData[z]['id'];
							newCell6.innerHTML = '<input type=\"radio\" name=\"vorwahlID\" value=\"'+plData[z]['id']+'\" onclick=\"document.getElementById(\'vorwahl\').value='+plData[z]['id']+';\" CHECKED>';
						} else
						  {
							newCell6.innerHTML = '<input type=\"radio\" name=\"vorwahlID\" value=\"'+plData[z]['id']+'\" onclick=\"document.getElementById(\'vorwahl\').value='+plData[z]['id']+';\">';
						  }
						newCell6.style.textAlign = 'center';
						if( plData[z]['user'] == 0 && plData[z]['id'] == plActive )
						{
							newCell6.style.backgroundColor = 'red';
						}

						aiaIndex                 = allIDs.indexOf(z);
						switchPre                = ( aiaIndex > 0                 ) ? allIDs[(aiaIndex-1)] : allIDs[(allIDs.length-1)];
						switchNext               = ( aiaIndex < (allIDs.length-1) ) ? allIDs[(aiaIndex+1)] : 0;
						newCell7.innerHTML       = '<a id=\"'+lineID+'_7\" href=\"admin.php?action=sortPL&id='+plData[z]['id']+'&plIndex='+z+'&switch='+switchPre+'\"><img id=\"'+lineID+'_7\" src=\"src/auf.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Eine Zeile rauf\"></a> ';
						newCell7.innerHTML      += '<a id=\"'+lineID+'_7\" href=\"admin.php?action=sortPL&id='+plData[z]['id']+'&plIndex='+z+'&switch='+switchNext+'\"><img id=\"'+lineID+'_7\" src=\"src/ab.gif\" border=\"0\" width=\"18\" height=\"18\" hspace=\"5\" title=\"Eine Zeile runter\"></a> ';
 						newCell7.style.textAlign = 'center';

						newCell8Content          = '[<a id=\"'+lineID+'_8\" href=\"admin.php?action=edit&id='+plData[z]['id']+'&plIndex='+z+'\">Bearbeiten</a>] ';
						newCell8Content         += '[<a id=\"'+lineID+'_8\" href=\"admin.php?action=export&id='+plData[z]['id']+'&plIndex='+z+'\">Exportieren</a>] ';
						newCell8Content         += '[<a id=\"'+lineID+'_8\" href=\"javascript:copyPl('+plData[z]['id']+', '+z+');\">Kopieren</a>] ';
						if( preCount > 1 )
						{
							newCell8Content += '[<a id=\"'+lineID+'_8\" href=\"javascript:plDelete(\'admin.php?action=delete&id='+plData[z]['id']+'&plIndex='+z+'&idArr='+idArr;
							newCell8Content += ( ( loopCount +1 ) < preCount ) ? '' : '&lastPL=1';
							newCell8Content += '\');\">L&ouml;schen</a>]';
						} else
						  {
							newCell8Content += '[L&ouml;schen]';
						  }
						newCell8.innerHTML       = newCell8Content;
						newCell8.style.textAlign = 'center';

						\n"; // Neue Playlist grün markieren
						$highlight = 0;
						if( isset($plNewListIndex) )
						{
							$highlight = 1;
							echo " if( plData[z]['id'] == ".$plNewListIndex." )\n";
						} else
						if( isset($plNewCopyID) )
						{
							$highlight = 1;
							echo " if( plData[z]['id'] == ".$plNewCopyID." )\n";
						}
						if( $highlight == 1 )
						{
							echo "{
 								newCell0.style.border = '1px solid #00FF00';
 								newCell1.style.border = '1px solid #00FF00';
 								newCell2.style.border = '1px solid #00FF00';
 								newCell3.style.border = '1px solid #00FF00';
 								newCell4.style.border = '1px solid #00FF00';
 								newCell5.style.border = '1px solid #00FF00';
 								newCell6.style.border = '1px solid #00FF00';
 								newCell7.style.border = '1px solid #00FF00';
 								newCell8.style.border = '1px solid #00FF00';
							}\n";
						} echo "

						// Track-Suche
						for( at = 0; at < nMusicPlaylist[plID].length; at++ )
						{
							oneTrack = nMusicPlaylist[plID][at]['titel']+','+nMusicPlaylist[plID][at]['interpret'];
							oneTrack = ( oneTrack.substring(0,6) == 'files/' ) ? oneTrack.substring(6,oneTrack.length) : oneTrack;
							oneTrack = '[id='+plData[z]['id']+'|plIndex='+z+'|nr='+at+']' + oneTrack;
							searchData.push(oneTrack);
						}

						loopCount++;
					}

					// Summenzeile
					saveRow                    = tab.insertRow((loopCount+1));
					saveCell0                  = saveRow.insertCell(0);
					saveCell0.colSpan          = 2;
					saveCell1                  = saveRow.insertCell(1);
					saveCell1.style.textAlign  = 'right';
					saveCell1.style.fontWeight = 'bold';
					saveCell1.innerHTML        = sumTracks;
					saveCell2                  = saveRow.insertCell(2);
					saveCell2.style.textAlign  = 'center';
					saveCell2.style.fontWeight = 'bold';
					saveCell2.innerHTML        = nMusic_calcTime(sumZeiten, 1);
					saveCell3                  = saveRow.insertCell(3);
					saveCell3.colSpan          = 2;
					saveCell4                  = saveRow.insertCell(4);
					saveCell4.style.textAlign  = 'center';
					saveCell4.innerHTML        = '<input type=\"submit\" value=\"Speichern\" class=\"nMusicButton\" style=\"width: 90px;\">';
					saveCell4.innerHTML       += '<input type=\"hidden\" id=\"vorwahl\" name=\"vorwahl\"  value=\"'+vorwahl+'\">';
					saveCell5                  = saveRow.insertCell(5);
					saveCell5.colSpan          = 2;
				} else
				  {
					emptyRow                   = tab.insertRow(1);
					emptyCellC                 = emptyRow.insertCell(0);
					emptyCellC.colSpan         = 8;
 					emptyCellC.style.textAlign = 'center';
 					emptyCellC.style.height    = '50px';
 					emptyCellC.innerHTML       = 'Es sind noch noch keine Playlisten vorhanden!';
				  }

				document.getElementById('nextID').value    = ( lastID + 1);
				document.getElementById('nextIndex').value = plData.length;

				if( vorwahl == -1 )
				{
					document.getElementById('prePL').style.backgroundColor = 'red';
				}
			}

			function plSearchClose()
			{
				document.getElementById('suggestBlock').innerHTML        = '';
				document.getElementById('suggestBlock').style.display    = 'none';
				document.getElementById('suggestBlock').style.visibility = 'hidden';

				searchLineActive = -1;
			}

			function plSearch()
			{
				searchNum    = 0;
				searchlinks  = [];
				searchSugg   = '';
				useWord      = document.getElementById('plWord').value;
				useWord      = useWord.toLowerCase();
				if( useWord != '' )
				{
					if( useWord.length > 3 )
					{
						if( searchData.length > 0 )
						{
							for( key in searchData )
							{
								contentPos = searchData[key].indexOf(']');
								searchStr  = searchData[key].substring((contentPos+1),searchData[key].length);
								searchShow = searchStr;
								searchStr  = searchStr.toLowerCase();
								if( searchStr.indexOf(useWord) != -1 )
								{
									if( searchNum < 15 )
									{
										tiComma     = searchShow.indexOf(',');
										getPlId1    = searchData[key].split('|');
										getPlId2    = getPlId1[1].split('=');
										getPlId3    = getPlId1[0].split('=');
										getPlId4    = getPlId1[2].split('=');
										getPlId5    =  getPlId4[1].split(']');

										seachLink   = 'admin.php?action=edit&id='+getPlId3[1]+'&plIndex='+getPlId2[1]+'&nr='+getPlId5[0];
										searchlinks[searchNum] = seachLink;

										searchSugg += '<tr onclick=\"self.location.href=\''+seachLink+'\';\" style=\"cursor: pointer;\" title=\"Playlist ansehen\">';
										searchSugg += '<td class=\"suggestLine\" id=\"sl'+searchNum+'_'+1+'\">'+searchShow.substring(0,tiComma)+'</td>';
										searchSugg += '<td class=\"suggestLine\" id=\"sl'+searchNum+'_'+2+'\">'+searchShow.substring((tiComma+1),searchShow.length)+'</td>';
										searchSugg += '<td class=\"suggestLine\" id=\"sl'+searchNum+'_'+3+'\">'+plData[getPlId2[1]]['titel']+'</td>';
										searchSugg += '</tr>';

										searchNum++;
									}
								}
							}

							if( searchNum > 0 )
							{
								suggTable  = '<table class=\"suggestTable\" border=\"0\" style=\"width: 100%; border: 1px solid black; border-spacing: 1px;\"><tr>';
								suggTable += '<th    class=\"suggestTable\" style=\"text-align: left;\">Titel</th>';
								suggTable += '<th    class=\"suggestTable\" style=\"text-align: left;\">Interpret</th>';
								suggTable += '<th    class=\"suggestTable\" style=\"text-align: left;\">Playlist</th></tr>';

								document.getElementById('suggestBlock').innerHTML        = suggTable+searchSugg+'</table>';
								document.getElementById('suggestBlock').style.display    = 'block';
								document.getElementById('suggestBlock').style.visibility = 'visible';

								searchLineActive = -1;
							} else
							  {
								plSearchClose();
							  }

							searchDisplay = '(Treffer: '+searchNum+' von max. 15)';
						} else
						  {
							plSearchClose();
							searchDisplay = '(keine Tracks vorhanden!)';
						  }
					} else
					  {
						plSearchClose();
						searchDisplay = '(Mindestens 4 Zeichen!)';
					  }
				} else
				  {
					plSearchClose();
					searchDisplay = '(Mindestens 4 Zeichen!)';
				  }

				document.getElementById('SuchErg').innerHTML = searchDisplay;
			}

			function copyPl(myId, myPlIndex)
			{
				var askCopy = confirm('Soll die Playlist jetzt kopiert werden?\\n\\nDie .mp3-Dateien werden dabei nicht mit kopkiert!\\nDa die relativen Pfade identisch sind, erfolgt hier vorerst eine gemeinsame Nutzung.');
				if( askCopy != false )
				{
					self.location.href = 'admin.php?action=copy&id='+myId+'&plIndex='+myPlIndex+'&nextID='+document.getElementById('nextID').value+'&nextIndex='+document.getElementById('nextIndex').value;
				}
			}

			function MouseOver(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,7) == 'tabLine' )
					{
						t1 = event.target.id.split('_');
						t2 = 'classLine_'+t1[1];
						for( ec = 0; ec < 9; ec++ )
						{
							document.getElementsByClassName(t2)[ec].style.backgroundColor = '#005555';
						}
					}
					if( event.target.id.substring(0,2) == 'sl' )
					{
						hlPos            = event.target.id.indexOf('_');
						hlId             = event.target.id.substring(0,hlPos);
						searchLineActive = parseInt( hlId.substring(2,hlPos) );

						for( hl = 0; hl < searchNum; hl++ )
						{
							hlId_1 = 'sl'+hl+'_1';
							hlId_2 = 'sl'+hl+'_2';
							hlId_3 = 'sl'+hl+'_3';

							if( hl == searchLineActive )
							{
								document.getElementById(hlId_1).style.backgroundColor = 'red';
								document.getElementById(hlId_2).style.backgroundColor = 'red';
								document.getElementById(hlId_3).style.backgroundColor = 'red';
							} else
							  {
								document.getElementById(hlId_1).style.backgroundColor = '#505050';
								document.getElementById(hlId_2).style.backgroundColor = '#505050';
								document.getElementById(hlId_3).style.backgroundColor = '#505050';
							  }
						}
					}
				}
			}

			function MouseOut(event)
			{
				if( typeof(event.target.id) == 'string' )
				{
					if( event.target.id.substring(0,7) == 'tabLine' )
					{
						t1 = event.target.id.split('_');
						t2 = 'classLine_'+t1[1];
						for( ec = 0; ec < 9; ec++ )
						{
							document.getElementsByClassName(t2)[ec].style.backgroundColor = '#505050';
						}
					}
					if( event.target.id.substring(0,2) == 'sl' )
					{
						hlPos  = event.target.id.indexOf('_');
						hlId   = event.target.id.substring(0,hlPos);
						hlId_1 = hlId+'_1';
						hlId_2 = hlId+'_2';
						hlId_3 = hlId+'_3';
						document.getElementById(hlId_1).style.backgroundColor = '#505050';
						document.getElementById(hlId_2).style.backgroundColor = '#505050';
						document.getElementById(hlId_3).style.backgroundColor = '#505050';

						searchLineActive = -1;
					}
				}
			}

			function MouseClick(event)
			{
				if( typeof(event.target.className) !== 'undefined' )
				{
					if( event.target.className != 'suggestTable' && event.target.className != 'suggestLine' && event.target.id != 'plWord' )
					{
						plSearchClose();
						document.getElementById('SuchErg').innerHTML = '';
					}
				}
			}

			function pageKeyUp(event)
			{
				if( event.keyCode == 83 )
				{
					document.getElementById('plWord').focus();
				}

				if( event.keyCode == 13 )
				{
					if( searchLineActive > -1 )
					{
						if( typeof(searchlinks[searchLineActive]) !== 'undefined' )
						{
							self.location.href = searchlinks[searchLineActive];
						}
					}
				} else
				if( event.keyCode == 27 )
				{
					plSearchClose();
				} else
				if( event.keyCode != 38 && event.keyCode != 40 )
				{
					if( typeof(event.target.id) !== 'undefined' )
					{
						if( event.target.id == 'plWord' )
						{
							plSearch();
						}
					}
				}
			}

			function pageKeyDown(event)
			{
				if( document.getElementById('suggestBlock').style.visibility == 'visible' )
				{
					if( event.keyCode == 40 )
					{
						if( searchLineActive == -1 )
						{
							searchLineActive = 0;
						} else
						  {
							searchLineActive = ( searchLineActive < ( searchNum - 1 ) ) ? searchLineActive + 1 : 0;
						  }
					}

					if( event.keyCode == 38 )
					{
						if( searchLineActive == -1 )
						{
							searchLineActive = ( searchNum - 1 );
						} else
						  {
							searchLineActive = ( searchLineActive > 0 ) ? searchLineActive - 1 : ( searchNum - 1 );
						  }
					}

					for( hl = 0; hl < searchNum; hl++ )
					{
						hlId_1 = 'sl'+hl+'_1';
						hlId_2 = 'sl'+hl+'_2';
						hlId_3 = 'sl'+hl+'_3';

						if( hl == searchLineActive )
						{
							document.getElementById(hlId_1).style.backgroundColor = 'red';
							document.getElementById(hlId_2).style.backgroundColor = 'red';
							document.getElementById(hlId_3).style.backgroundColor = 'red';
						} else
						  {
							document.getElementById(hlId_1).style.backgroundColor = '#505050';
							document.getElementById(hlId_2).style.backgroundColor = '#505050';
							document.getElementById(hlId_3).style.backgroundColor = '#505050';
						  }
					}
				}
			}

			function submitNewPl(mode)
			{
				document.getElementById('actionField').value = ( mode == 'scan' ) ? 'plScanNew' : 'plWriteNew';
				document.getElementById('plNewForm').submit();
			}

			document.addEventListener(\"mouseover\", MouseOver,   true);
			document.addEventListener(\"mouseout\",  MouseOut,    true);
			document.addEventListener(\"click\",     MouseClick,  true);
			document.addEventListener(\"keyup\",     pageKeyUp,   true);
			document.addEventListener(\"keydown\",   pageKeyDown, true);

			document.onload = window.setTimeout('tableBuilt()', 200);

		</script>

		<fieldset><legend><h4>&nbsp;&Uuml;bersicht der Playlisten&nbsp;</h4></legend>
		<span style=\"font-weight: bold;\">Tracks in Playlist suchen:</span>
		<span id=\"SuchErg\" style=\"color: gold;\"></span><br>
		<table border=\"1\">
			<tr>
				<td style=\"width: 50px;\">Begriff:</td>
				<td><input type=\"text\" id=\"plWord\" name=\"plWord\" value=\"\"       style=\"width: 250px;\"></td>
				<td><input type=\"button\" class=\"nMusicButton\"      value=\"Suchen\" style=\"width:  90px;\" onclick=\"plSearch();\"></td>
			</tr>
		</table>
		<div id=\"suggestBlock\" name=\"suggestBlock\" style=\"width: 418px; position: absolute; visibility: hidden; z-index: 50; border: 1px solid gold; background-color: black;\"></div>
		<br><br>

		<span style=\"font-weight: bold;\">Playlisten:</span><br>
		<form name=\"plMain\" action=\"admin.php\" method=\"post\">
		<input type=\"hidden\" name=\"action\"  value=\"plFirst\">
		<table id=\"tableIndex\" border=\"0\" style=\"border: 1px solid black; border-spacing: 1px;\">
			<tr>
				<th style=\"width:  30px; text-align: center;\">ID</th>
				<th style=\"              text-align: left;\"  >Name</th>
				<th style=\"width:  60px; text-align: center;\">Tracks</th>
				<th style=\"width:  80px; text-align: center;\">Laufzeiten</th>
				<th style=\"width:  90px; text-align: center;\">Erstellt</th>
				<th style=\"width:  80px; text-align: center;\">Sichtbar</th>
				<th style=\"width:  90px; text-align: center;\" id=\"prePL\">Vorwahl</th>
				<th style=\"width:  80px; text-align: center;\">Sortieren</th>
				<th style=\"              text-align: center;\">Optionen</th>
			</tr>
		</table></form>
		<br><br></fieldset><br>

		<fieldset><legend><h4>&nbsp;Playlist hinzuf&uuml;gen&nbsp;</h4></legend>
		<form id=\"plNewForm\" name=\"plNewForm\" action=\"admin.php\" method=\"post\">
		<input type=\"hidden\" id=\"actionField\" name=\"action\"    value=\"plWriteNew\">
		<input type=\"hidden\" id=\"nextID\"      name=\"nextID\"    value=\"-1\">
		<input type=\"hidden\" id=\"nextIndex\"   name=\"nextIndex\" value=\"-1\">

		<span style=\"font-weight: bold;\">Playlist hinzuf&uuml;gen:</span><br>
		<table border=\"1\">
			<tr>
				<td>Name:</td>
				<td><input type=\"button\" value=\"Leere PLaylist erstellen\"  class=\"nMusicButton\" onclick=\"submitNewPl('empty');\" style=\"width: 200px;\"></td>
			</tr>
			<tr>
				<td><input type=\"text\"  name=\"pl_new_titel\" value=\"\" style=\"width: 200px;\"></td>
				<td><input type=\"button\" value=\"Aus Verzeichnis erstellen\" class=\"nMusicButton\" onclick=\"submitNewPl('scan');\"  style=\"width: 200px;\"></td>
			</tr>
		</table></form>
		<br>
		<span style=\"font-weight: bold; text-decoration: underline;\">Hinweis:</span><br>
		Die neu erstellte Playlist sollte einmal im Player angescannt werden.<br>
		Bei diesem Vorgang werden die Metadaten der Tracks ermittelt und die Wellenformbilder gespeichert.
		<br><br>
		</fieldset>\n\n";
	}

	echo "<br><br>
	</body></html>\n";
 }

?>