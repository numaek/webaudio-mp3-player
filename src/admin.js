
 function sicher(ziel)
 {
	var Checkdelete = confirm("Sicher?");
	if( Checkdelete != false )
	{
		self.location.href = ziel;
	}
 }


 function plDelete(ziel)
 {
	var Checkdelete = confirm("Soll die gesamte Playlist jetzt entfernt werden?\n\nDie .mp3-Dateien der einzelnen Tracks sind manuell im Verzecihnis \"files/\" vom Server zu entfernen!");
	if( Checkdelete != false )
	{
		self.location.href = ziel;
	}
 }


 function checkSubmit()
 {
	var askDelete   = 0;
	var deleteBoxes = document.getElementsByClassName('delCheckBox').length;

	for( var i = 0; i < deleteBoxes; i++ )
	{   
		if( document.getElementsByClassName('delCheckBox')[i].checked == true )
		{
			askDelete = 1;
		}
	}

	if( askDelete == 1 )
	{
		     var Checkdelete  = confirm("Es wurden Tracks zum entfernen markiert!\n\nDie .mp3-Datei selber wird hier nicht vom Server entfernt!\nEventuell wird Sie noch in einer anderen Playlist verwendet...\nVerwende dazu die Check-Seite! (Siehe Hilfethema)\n\nSollen die Daten jetzt gespeichert werden?");
		return ( Checkdelete != false ) ? true : false;
	}
 }


 function checkSubmitRadio()
 {
	var askDelete   = 0;
	var deleteBoxes = document.getElementsByClassName('delCheckBox').length;

	for( var i = 0; i < deleteBoxes; i++ )
	{   
		if( document.getElementsByClassName('delCheckBox')[i].checked == true )
		{
			askDelete = 1;
		}
	}

	if( askDelete == 1 )
	{
		     var Checkdelete  = confirm("Es wurden Sender zum entfernen markiert!\nSollen die Daten jetzt gespeichert werden?");
		return ( Checkdelete != false ) ? true : false;
	}
 }


 function checkScanDir()
 {
	var dirSelected = 0;
	var selRadios   = document.getElementsByClassName('dirToScan').length;

	for( var i = 0; i < selRadios; i++ )
	{   
		if( document.getElementsByClassName('dirToScan')[i].checked == true )
		{
			dirSelected = 1;
		}
	}

	if( dirSelected == 0 )
	{
		alert("Markiere bitte zuerst ein Verzeichnis!");
		return false;
	} else
	  {
		     var askScan  = confirm("Sollen die Playlist jetzt erstellt werden?");
		return ( askScan != false ) ? true : false;
	  }
 }


 function nMusic_calcTime(useTimeToCalc, showH)
 {
	nMzeit_gesamt      = useTimeToCalc;

	nMzeit_stunden     = Math.floor( nMzeit_gesamt / 3600 );
	nMzeit_reststunden = nMzeit_gesamt - ( nMzeit_stunden * 3600 );
	nMzeit_minuten     = Math.floor( nMzeit_reststunden / 60 );

	nMzeit_sekunden    = Math.round( nMzeit_gesamt - ( nMzeit_stunden * 3600 ) - ( nMzeit_minuten * 60 ) );
	nMzeit_sekunden    = ( nMzeit_sekunden == 60 ) ? 0 : nMzeit_sekunden;

	nMzeit_subH        = ( nMzeit_stunden   < 10 ) ? '0'+nMzeit_stunden  : nMzeit_stunden;
	nMzeit_subM        = ( nMzeit_minuten   < 10 ) ? '0'+nMzeit_minuten  : nMzeit_minuten;
	nMzeit_subS        = ( nMzeit_sekunden  < 10 ) ? '0'+nMzeit_sekunden : nMzeit_sekunden;

	nMzeit_zeitStr     = ( showH == 1 ) ? nMzeit_subH+':'+nMzeit_subM+':'+nMzeit_subS : nMzeit_subM+':'+nMzeit_subS;

	return nMzeit_zeitStr;
 }

