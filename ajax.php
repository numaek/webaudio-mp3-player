<?php

 $out = "";

 if( isset($_POST['mode']) )
 {
	if( $_POST['mode'] == "waveCheck" )
	{
		$imgError     = 0;

		// Dateiname
		$imgBase      = basename($_POST['name']);
		$imgMime      = strrchr($imgBase, '.');
		$imgName      = substr($imgBase, 0, (strlen($imgBase)-strlen($imgMime)));

		$imgNameSmall = $imgName.".png";
		$imgNameBig   = $imgName."_big.png";

		if( is_file("cache/".$imgNameSmall) )
		{
			$img1 = $imgNameSmall;
		} else
		  {
			$imgError++;
		  }

		if( is_file("cache/".$imgNameBig) )
		{
			$img2 = $imgNameBig;
		} else
		  {
			$imgError++;
		  }

		if( $imgError == 0 )
		{
			$out .= $img1."|".$img2;
		} else
		  {
			$out .= "ERROR";
		  }
	}

	if( $_POST['mode'] == "waveSave" )
	{
		if( isset($_POST['content']) )
		{
			// Dateiname
			$imgBase      = basename($_POST['name']);
			$imgMime      = strrchr($imgBase, '.');
			$imgName      = substr($imgBase, 0, (strlen($imgBase)-strlen($imgMime)));

			$imgNameSmall = $imgName.".png";
			$imgNameBig   = $imgName."_big.png";

			// Bilddaten klein
			$parts1       = explode(",", $_POST['content']);
			$imgData1     = str_replace(' ', '+', $parts1[1]);
			$imgData1     = base64_decode($imgData1);

			if( file_put_contents("cache/".$imgNameSmall, $imgData1) )
			{
				$out .= "OK#SMALL";
			} else
			  {
				$out .= "ERROR#$imgName";
			  }

			// Bilddaten groß
			$parts2   = explode(",", $_POST['bigwave']);
			$imgData2 = str_replace(' ', '+', $parts2[1]);
			$imgData2 = base64_decode($imgData2);

			if( file_put_contents("cache/".$imgNameBig, $imgData2) )
			{
				$out .= "OK#BIG";
			} else
			  {
				$out .= "ERROR#$imgName";
			  }
		} else
		  {
			$out .= "ERROR#SAVE";
		  }
	}

	if( $_POST['mode'] == "bpm" )
	{
		$plFileName     = "playlists/playlist".$_POST['plID'].".js";
		$plFileSize     = ( filesize($plFileName) > 0 ) ? filesize($plFileName) : 1;
		$plFilePointer  = fopen($plFileName, "r");
		$plFileContent  = fread($plFilePointer, $plFileSize);
		fclose($plFilePointer);

		// BPM schreiben
		$plSearchStr1   = "['pl".$_POST['plID']."'][".$_POST['trackID']."]['bpm']       = ";
		$part1          = explode($plSearchStr1, $plFileContent);
		$partBPM        = explode(";", $part1[1]);
		$lenBPM         = strlen($partBPM[0]);
		$partEnd        = substr($part1[1], $lenBPM, strlen($part1[1])-$lenBPM);
		$refreshStr1    = $part1[0].substr($plSearchStr1,0,(strlen($plSearchStr1)-0)).$_POST['bpm'].$partEnd;

		// Meta-Daten schreiben (können schon vorhanden sein)
		$plSearchStr2   = "['pl".$_POST['plID']."'][".$_POST['trackID']."]['meta']      = '";
		$part2          = explode($plSearchStr2, $refreshStr1);
		$partMeta       = explode("';", $part2[1]);
		$lenMeta        = strlen($partMeta[0]);
		$partEnd        = substr($part2[1], $lenMeta, strlen($part2[1])-$lenMeta);
		$refreshStr2    = $part2[0].substr($plSearchStr2,0,(strlen($plSearchStr2)-1))."'".$_POST['meta'].$partEnd;

		$bpmFilePointer = fopen($plFileName, "w");
		fwrite($bpmFilePointer, $refreshStr2);
		fclose($bpmFilePointer);
		clearstatcache();

		$out .= "OK#BPM".$_POST['bpm'];
	}

	if( $_POST['mode'] == "id3" )
	{
		include('nID3class.php');

		if( $fileData = new nID3($_POST['datei']) )
		{
			$dataArray   = $fileData->getArray();

			$getFS       = filesize($_POST['datei']);
			$getSR       = ( isset($dataArray['mp3']['mp3_frequenz']) ) ? $dataArray['mp3']['mp3_frequenz']     : 0;
			$getKbits    = ( isset($dataArray['mp3']['mp3_bitrate'])  ) ? $dataArray['mp3']['mp3_bitrate']      : 0;
			$getChannels = ( isset($dataArray['mp3']['mp3_kanaele'])  ) ? $dataArray['mp3']['mp3_kanaele']      : 0;
			$getTitle    = ( isset($dataArray['tags']['TIT2'])        ) ? $dataArray['tags']['TIT2']['content'] : "-";
			$getArtist   = ( isset($dataArray['tags']['TPE1'])        ) ? $dataArray['tags']['TPE1']['content'] : "-";
			$getAlbum    = ( isset($dataArray['tags']['TALB'])        ) ? $dataArray['tags']['TALB']['content'] : "-";
			$getGenre    = ( isset($dataArray['tags']['TCON'])        ) ? $dataArray['tags']['TCON']['content'] : "-";
			$getYear     = ( isset($dataArray['tags']['TYER'])        ) ? $dataArray['tags']['TYER']['content'] : "-";

			$out         = $getKbits."||".number_format($getSR,0,",",".")."||".$getChannels."||".$getFS."||".$getTitle."||".$getArtist."||".$getAlbum."||".$getGenre."||".$getYear;
		} else
		  {
			$out         = "Fehler: Konnte Datei nicht einlesen!";
		  }
	}

	if( $_POST['mode'] == "id3saveImage" )
	{
		include('nID3class.php');

		if( $fileData = new nID3($_POST['datei']) )
		{
			$dataArray   = $fileData->getArray();

			if( isset($dataArray['tags']['APIC']['content']['data']) )
			{
				$imgBase  = basename($_POST['datei']);

				$imgMime  = strrchr($imgBase, '.');

				$imgName  = substr($imgBase, 0, (strlen($imgBase)-strlen($imgMime)));
				$imgName .= "_cover.";
				$imgName .= ( substr($dataArray['tags']['APIC']['content']['mime'], -3) == "png" ) ? "png" : "jpg";

				$imgData  = str_replace(' ', '+', $dataArray['tags']['APIC']['content']['data']);
				$imgData  = base64_decode($imgData);

				if( file_put_contents("cache/".$imgName, $imgData) )
				{
					$out = "cache/".$imgName;
				} else
				  {
					$out = "ERROR";
				  }
			} else
			  {
				$out = "ERROR";
			  }
		} else
		  {
			$out = "ERROR";
		  }
	}

	if( $_POST['mode'] == "id3showTable" )
	{
		include('nID3class.php');

		if( $fileData = new nID3($_POST['datei']) )
		{
			$dataArray = $fileData->getArray();

			$out .= "<table border=\"0\"><tr><td style=\"background-color: black; border-spacing: 0px;\">
			<table id=\"id3Table\" border=\"0\" style=\"border: 1px solid black; border-spacing: 1px; width: 800px;\">
				<tr>
					<th colspan=\"5\">
						<div style=\"float: right; cursor: pointer;\" title=\"Fenster schlie&szlig;en\" onclick=\"javascript:id3Show(-1);\">X</div>
						ID3-Tags ("; $out .= ( isset($dataArray["id3_header_version"]) ) ? $dataArray["id3_header_version"] : "V2"; $out .= ") & .mp3-Informationen
					</th>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TIT2</td>
					<td>Titel:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TIT2']['content']) ) ? $dataArray['tags']['TIT2']['content'] : "-"; $out .= "</td>
					<td colspan=\"2\" rowspan=\"8\" style=\"text-align: center;\"><a href=\"javascript:id3SaveCover('".$_POST['datei']."');\" title=\"Cover-Bild im Ordner 'cache/' speichern\"><img src=\"nID3Class.php?datei=".urlencode($_POST['datei'])."\" width=\"150\" height=\"150\"></a></td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TPE1</td>
					<td>Interpret:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TPE2']['content']) ) ? $dataArray['tags']['TPE2']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TALB</td>
					<td>Album:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TALB']['content']) ) ? $dataArray['tags']['TALB']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TIT3</td>
					<td>Untertitel:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TIT3']['content']) ) ? $dataArray['tags']['TIT3']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TCOM</td>
					<td>Komponist:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TCOM']['content']) ) ? $dataArray['tags']['TCOM']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TPE2</td>
					<td>Band:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TPE2']['content']) ) ? $dataArray['tags']['TPE2']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TPE4</td>
					<td>Remix:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TPE4']['content']) ) ? $dataArray['tags']['TPE4']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TCON</td>
					<td>Genre:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TCON']['content']) ) ? $dataArray['tags']['TCON']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"width:  50px; text-align: center;\">TIT1</td>
					<td style=\"width: 135px;\">Kategorie:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TIT1']['content']) ) ? $dataArray['tags']['TIT1']['content'] : "-"; $out .= "</td>
					<td class=\"mp3Data\" style=\"width: 125px;\">MP3 ID / Layer:</td>
					<td class=\"mp3Data\" style=\"width: 125px;\">
						"; $out .= ( isset($dataArray["mp3"]["mp3_id"])    ) ? $dataArray["mp3"]["mp3_id"]    : "-"; $out .= "
						"; $out .= ( isset($dataArray["mp3"]["mp3_layer"]) ) ? $dataArray["mp3"]["mp3_layer"] : "-"; $out .= "
					</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TLEN</td>
					<td>Laufzeit:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TLEN']['content']) ) ? $dataArray['tags']['TLEN']['content'] : "-"; $out .= "</td>
					<td class=\"mp3Data\">Kbit / Sekunde:</td>
					<td class=\"mp3Data\">"; $out .= ( isset($dataArray["mp3"]["mp3_bitrate"]) ) ? $dataArray["mp3"]["mp3_bitrate"]." Kbps" : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TBPM</td>
					<td>Beats per Minute:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TBPM']['content']) ) ? $dataArray['tags']['TBPM']['content'] : "-"; $out .= "</td>
					<td class=\"mp3Data\">Samplerate:</td>
					<td class=\"mp3Data\">"; $out .= ( isset($dataArray["mp3"]["mp3_frequenz"]) ) ? number_format($dataArray["mp3"]["mp3_frequenz"],0,",",".")." Hz" : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TPOS</td>
					<td>Teil eines Satzes:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TPOS']['content']) ) ? $dataArray['tags']['TPOS']['content'] : "-"; $out .= "</td>
					<td class=\"mp3Data\">Kan&auml;le:</td>
					<td class=\"mp3Data\">"; $out .= ( isset($dataArray["mp3"]["mp3_kanaele"]) ) ? $dataArray["mp3"]["mp3_kanaele"] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TRCK</td>
					<td>Track:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TRCK']['content']) ) ? $dataArray['tags']['TRCK']['content'] : "-"; $out .= "</td>
					<td>COMM</td>
					<td>Kommentar:</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TPUB</td>
					<td>Herausgeber:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TPUB']['content']) ) ? $dataArray['tags']['TPUB']['content'] : "-"; $out .= "</td>
					<td colspan=\"2\" rowspan=\"3\" style=\"vertical-align: top;\">\n";
						if( isset($dataArray['tags']['COMM']['content']['data']) )
						{
							if( $dataArray['tags']['COMM']['content']['data'] != "" )
							{
								if( $dataArray['tags']['COMM']['content']['desc'] != "" )
								{
									$out .= "(".$dataArray['tags']['COMM']['content']['desc'].")<br>";
								}
								$out .= nl2br($dataArray['tags']['COMM']['content']['data']);
							} else
							  {
								$out .= "-";
							  }
						} else
						  {
							$out .= "-";
						  }
					$out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">TCOP</td>
					<td>Copyright:</td>
					<td>"; $out .= ( isset($dataArray['tags']['TCOP']['content']) ) ? $dataArray['tags']['TCOP']['content'] : "-"; $out .= "</td>
				</tr>
				<tr>
					<td style=\"text-align: center;\">";
						if( isset($dataArray["id3_header_major"]) )
						{
							if( $dataArray["id3_header_major"] == 4 )
							{
								$YearTag = "TDRC";
								$YearVal = ( isset($dataArray['tags']['TDRC']['content']) ) ? substr($dataArray['tags']['TDRC']['content'], 0, 4) : "-";
							} else
							  {
								$YearTag = "TYER";
								$YearVal = ( isset($dataArray['tags']['TYER']['content']) ) ? $dataArray['tags']['TYER']['content'] : "-";
							  }
						} else
						  {
							$YearTag = "TYER";
							$YearVal = "-";
						  }
						$out .= $YearTag."
					</td>
					<td>Jahr:</td>
					<td>".$YearVal."</td>
				</tr>
				<tr>
					<th colspan=\"3\">ID3-Tags (V1)</th>
					<th colspan=\"2\">Lyrics3-Tags</th>
				</tr>\n";

				if( isset($dataArray['APE']) )
				{
					if( $dataArray['APE'] != "-" )
					{
						$dataApe    = $dataArray['APE'];
					} else
					  {
						$dataApe    = "<div style=\"text-align: center;\">Es wurden keine gefunden.</div>";
					  }
				} else
				  {
					$dataApe    = "<div style=\"text-align: center;\">Es wurden keine gefunden.</div>";
				  }

				if( isset($dataArray['Lyrics']) )
				{
					if( $dataArray['Lyrics'] != "-" )
					{
						$dataLyrics = $id3Data['Lyrics'];
					} else
					  {
						$dataLyrics = "<div style=\"text-align: center;\">Es wurden keine gefunden.</div>";
					  }
				} else
				  {
					$dataLyrics = "<div style=\"text-align: center;\">Es wurden keine gefunden.</div>";
				  }

				$showID1 = 0;
				if( isset($dataArray['id3v1']) )
				{
					if( gettype($dataArray['id3v1']) == "array" )
					{
						$showID1 = 1;
					}
				}
				if( $showID1 == 1 )
				{
					$out .= "<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Titel:</td>
						<td>".$dataArray['id3v1']['titel']."</td>
						<td colspan=\"2\" rowspan=\"3\">".$dataLyrics."</td>
					</tr>
					<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Interpret:</td>
						<td>".$dataArray['id3v1']['interpret']."</td>
					</tr>
					<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Album:</td>
						<td>".$dataArray['id3v1']['album']."</td>
					</tr>
					<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Track:</td>
						<td>".$dataArray['id3v1']['track']."</td>
						<th colspan=\"2\">APE-Tags</th>
					</tr>
					<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Jahr:</td>
						<td>".$dataArray['id3v1']['jahr']."</td>
						<td colspan=\"2\" rowspan=\"3\">".$dataApe."</td>
					</tr>
					<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Genre:</td>
						<td>".$dataArray['id3v1']['genre_text']."</td>
					</tr>
					<tr>
						<td style=\"text-align: center;\">-</td>
						<td>Kommentar:</td>
						<td rowspan=\"2\">".$dataArray['id3v1']['kommentar']."</td>
					</tr>\n";
				} else
				  {
					$out .= "<tr>
						<td colspan=\"3\" rowspan=\"3\" style=\"height: 40px; text-align: center;\">Es wurden keine gefunden.</td>
						<td colspan=\"2\" style=\"height: 40px;\">".$dataLyrics."</td>
					</tr>
					<tr>
						<th colspan=\"2\">APE-Tags</th>
					</tr>
					<tr>
						<td colspan=\"2\" style=\"height: 40px;\">".$dataApe."</td>
					</tr>\n";
				  }

			$out .= "</table></td></tr></table>";
		} else
		  {
			$out .= "Fehler: Konnte Datei nicht einlesen!";
		  }
	}
 }

 echo "$out";

?>