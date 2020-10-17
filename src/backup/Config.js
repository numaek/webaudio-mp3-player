

	/*
	 * Willkommens-Meldung aktiv
	 * =========================
	 * 
	 * Zwischen 0 und 1
	 * 
	 */

	var nMusicWelcome = 1;


	/*
	 * Bausteine anzeigen - Voreinstellung
	 * ===================================
	 * 
	 * 0 oder 1
	 * 
	 */

	var nMusicShowBlockPL   = 1;
	var nMusicShowBlockEQ   = 1;
	var nMusicShowBlockDSP  = 1;
	var nMusicShowBlockWAVE = 1;


	/*
	 * Start-Volumen
	 * =============
	 * 
	 * Zwischen 0 und 1
	 * 
	 */

	var nMusicVolStart = 1.0;


	/*
	 * Offline-Playlisten
	 * ==================
	 * 
	 * Das Abspielen lokaler .mp3-Dateien im Player
	 * 0 oder 1
	 * 
	 */

	var nMusicOffline = 1;


	/*
	 * Equalizer Voreinstellungen
	 * ==========================
	 * 
	 * Einfach die Zeilen erweitern
	 * Der letzte Wert ist fuer den Vorverstaerker
	 * 
	 */

	var nMusicEqPreNr  = -1;

	var nMusicEqPre    = [];

	    nMusicEqPre[0] = [55, 65, 70, 65, 50, 40, 35, 55, 70, 65, 'Heavy',     60];
	    nMusicEqPre[1] = [50, 55, 65, 60, 50, 60, 65, 75, 65, 50, 'Vocal',     80];
	    nMusicEqPre[2] = [50, 55, 60, 55, 50, 60, 65, 60, 50, 40, 'Clear',     80];
	    nMusicEqPre[3] = [35, 40, 50, 55, 60, 55, 50, 50, 45, 40, 'Soft',      90];
	    nMusicEqPre[4] = [50, 60, 70, 60, 50, 60, 65, 60, 50, 50, 'Headphone', 60];
	    nMusicEqPre[5] = [60, 70, 75, 70, 60, 50, 50, 55, 60, 65, 'Car',       70];


	/*
	 * Dauer Titel-Scan
	 * ================
	 * 
	 * Mindestens 10 Sekunden
	 * 
	 */

	var nScanTime = 20;


	/*
	 * Sprachausgabe
	 * =============
	 * 
	 * Ausgabe per WebSpeech-API
	 * 
	 */

	var nSpeakUse = 1;


	/*
	 * DJ-Mischpult
	 * ============
	 * 
	 * Aktive Funktionen in der DJ-Konfiguration
	 * Je weniger, desto schneller und stabiler
	 * 
	 */

	var nDjConfig             = [];
	    nDjConfig['dsp']      = 1;	// Funktion aktiv:         DSP-Effekte
	    nDjConfig['bpm']      = 1;	// Funktion aktiv:         BPM-Berechnung (nur bei aktiver Wellenform)
	    nDjConfig['dispWave'] = 1;	// Voreinstellung Anzeige: Wellenform
	    nDjConfig['dispVu']   = 1;	// Voreinstellung Anzeige: VU-Meter
	    nDjConfig['dispOsz']  = 0;	// Voreinstellung Anzeige: Oszilloskop
	    nDjConfig['dispFreq'] = 0;	// Voreinstellung Anzeige: Frequenzspektrum


	// Unterhalb nichts mehr editieren!
	// ###################################################################################################################


	if( typeof(nPlayerInFrame) !== 'undefined' )
	{
		nMusicVolStart = ( nPlayerInFrame != 0 ) ? 1 : nMusicVolStart;
	}

