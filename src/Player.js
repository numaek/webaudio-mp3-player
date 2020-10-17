

	var nPlayerColor    = '#00FFFF';
	var nButtonColorOff = '#FFFFFF';

	var nWelcome        = 0;
	var nWelcomeCtxID   = 0;

	var nPlayerCache;
	var displayTimer;
	var rangeTimer;
	var ledTimer;
	var blinkTimer;

	var isAudioInit     = 0;
	var isAudioError    = 0;
	var currentNumber   = 0;
	var nMusicFirstPlay = 0;
	var nInfo           = 0;

	var nLocalActive    = 0;
	var nLocalFileNr    = 0;
	var nLocalFiles     = '';

	var ID3JS           = [];

	var ID3_kBits       = 0;
	var ID3_SR          = 0;
	var ID3_Samples     = 0;
	var ID3_CN          = 0;
	var ID3_FS          = 0;
	var ID3_Title       = '';
	var ID3_Artist      = '';
	var ID3_Album       = '';
	var ID3_Genre       = '';
	var ID3_Year        = '';

	var nDispTRKspeed   = 2;
	var nDispTRKpause   = 5000;
	var nDispTRKwidth   = 0;
	var nDispTRKcount   = 0;
	var nDispTRKrun     = 0;
	var nDispTRKstop    = 0;
	var nDispTRKtimer;

	var plTable         = '';
	var plLoadFile      = [];
	var nMusicPL        = [];
	var nMusicPlLength  = 0;

	var nRadioActive    = -1;
	var nRadioMode      = 0;
	var radioTable      = '';
	var nRadioPL        = [];

	var nIrLoaded       = 0;
	var nWaveFormLoaded = 0;
	var nWaveFirstLoad  = 0;

	var nMusicVisu      = 0;

	var audio;


	// Sprachausgabe
	// =============================================================================================================================================================================


	var nToSpeak = [];

	    nToSpeak['main'];
	    nToSpeak['use']        = ( nSpeakUse  == 1 ) ? 1 : 0;
	    nToSpeak['init']       = 0;
	    nToSpeak['englisch']   = 0;		// 0 = deutsch falls vorhanden, 1 = immer englisch
	    nToSpeak['voices']     = '';
	    nToSpeak['text']       = [];
	    nToSpeak['text']['de'] = [];
	    nToSpeak['text']['en'] = [];
	    nToSpeak['text']['nr'] = [];

	    // Vokabeln

	    nToSpeak['text']['nr']['besuch']     = 2;
	    nToSpeak['text']['de']['besuch']     = 'Hallo, besuche doch mal www.numaek.de';
	    nToSpeak['text']['en']['besuch']     = 'Hello, visit www.numaek.de';

	    nToSpeak['text']['nr']['willkommen'] = 1;
	    nToSpeak['text']['de']['willkommen'] = 'Willkommen im webAudio Player 2.0!';
	    nToSpeak['text']['en']['willkommen'] = 'Welcome to the webAudio Player!';


	document.addEventListener("click",     nMusic_jumpWave,    true);
	document.addEventListener("keyup",     nMusic_pageKeyUp,   true);
	document.addEventListener("keydown",   nMusic_pageKeyDown, true);
	document.addEventListener("mousemove", nMusic_mouseMove,   true);


	document.onload = window.setTimeout('nMusic_init()', 500);


	function nMusic_init()
	{
		nPlayerCache    = new nSiteCache('nPlayer_');

		nBlockStartPL   = nMusicShowBlockPL;
		nBlockStartEQ   = nMusicShowBlockEQ;
		nBlockStartDSP  = nMusicShowBlockDSP;
		nBlockStartWAVE = nMusicShowBlockWAVE;

		if( document.cookie )
		{
			// Altdaten auslesen
			blockGetCookie = document.cookie.split('nPlayerBlocks=');
			if( blockGetCookie.length > 1 )
			{
				blockDataCookie = blockGetCookie[1].split(';');
				blockDataCookie = blockDataCookie+'|';
				blockSavedData  = blockDataCookie.split('#');

				nBlockStartPL   = blockSavedData[0];
				nBlockStartEQ   = blockSavedData[1];
				nBlockStartDSP  = blockSavedData[2];
				nBlockStartWAVE = blockSavedData[3];
			}
		}

		if( nBlockStartPL == 1 )
		{
			document.getElementById('nLinePl').style.display         = 'table-row';
			document.getElementById('nLinePl').style.visibility      = 'visible';
			document.getElementById('nMusicButton_pl').style.color   = '#00FF00';
		}

		if( nBlockStartEQ == 1 )
		{
			document.getElementById('nLineEq').style.display         = 'table-row';
			document.getElementById('nLineEq').style.visibility      = 'visible';
			document.getElementById('nMusicButton_eq').style.color   = '#00FF00';
		}

		if( nBlockStartDSP == 1 )
		{
			document.getElementById('nLineDsp').style.display        = 'table-row';
			document.getElementById('nLineDsp').style.visibility     = 'visible';
			document.getElementById('nMusicButton_dsp').style.color  = '#00FF00';
		}

		if( nBlockStartWAVE == 1 )
		{
			document.getElementById('nLineWave').style.display       = 'table-row';
			document.getElementById('nLineWave').style.visibility    = 'visible';
			document.getElementById('nMusicButton_wave').style.color = '#00FF00';
		}

	//	document.getElementById('displaySr').style.color  = nPlayerColor;
	//	document.getElementById('displaySr').style.border = '1px solid '+nPlayerColor;

		// Start-Farben einstellen
		// =======================
		document.getElementById('nMusicButton_stop').style.color  = nPlayerColor;
		document.getElementById('nSrPitch').style.color           = nPlayerColor;

	//	document.getElementById('displayLine').style.borderTop    = '1px solid '+nPlayerColor;

		document.getElementById('bpmFrame').style.backgroundColor = nPlayerColor;
		document.getElementById('bpm').style.color                = nPlayerColor;
		document.getElementById('nPlLengthDisplay').style.color   = nPlayerColor;
		document.getElementById('nEqPreDisplay').style.color      = nPlayerColor;
		document.getElementById('nSamplesDisplay').style.color    = nPlayerColor;

		// Micro VU-Meter
		// ==============
		var nCVMicro = document.getElementById('nMicroVU');
		if( nCVMicro.getContext )
		{
			nCVMicro           = nCVMicro.getContext('2d');
			nCVMicro.fillStyle = '#000000';
			nCVMicro.clearRect(0, 0, 12, 50);
			nCVMicro.fillRect( 0, 0, 12, 50);
		}

		// Tabelle der Playlisten beschreiben
		// ==================================
		document.getElementById('nPLVtable').innerHTML = plvTable;

		// Tabelle der Radio-Streamquellen beschreiben
		// ===========================================
		radioTable = '<table class="nMusicDisplay" border="0" style="border-spacing: 1px; background-color: #000000; width: 100%; border: 0px solid #808080;">';
		if( nMusicRadiolist.length > 0 )
		{
			for( rl in nMusicRadiolist )
			{
				orgText     = nMusicRadiolist[rl]['name'];
				lineText    = ( orgText.length > 33 ) ? orgText.substr(0, 30)+'...' : orgText;
				radioTable += '<tr id="rlLine_'+rl+'"   style="cursor: pointer;" onclick="nMusicRadioPlay('+rl+');" onmouseover="rlLine('+rl+',1);" onmouseout="rlLine('+rl+',0);">';
				radioTable += '<td id="rlNumber_'+rl+'" style="text-align: center; width: 20px; background-color: '+nPlayerColor+'; color: #000000;">'+(parseInt(rl)+1)+'</td>';
				radioTable += '<td style="text-align: left;" title="'+orgText+'">&nbsp;'+lineText+'</td>';
				radioTable += '</tr>';
			}
		} else
		  {
			radioTable += '<tr id="rlLine_0"   style="cursor: pointer;" onclick="alert(\'Keine Radio-Quelle in der Playlist!\');" onmouseover="rlLine(0,1);" onmouseout="rlLine(0,0);">';
			radioTable += '<td id="plNumber_0" style="text-align: center; width: 20px; background-color: '+nPlayerColor+'; color: #000000;">0</td>';
			radioTable += '<td style="text-align: left;">&nbsp;Keine Radio-Quelle in der Playlist!</td>';
			radioTable += '</tr>';
		  }
		radioTable += '</table>';
		document.getElementById('nPlRadioTable').innerHTML = radioTable;

		// Audio-Element vorbereiten
		// =========================
		audio             = document.getElementById('audio1');

		audio.onended     = function() { audioEnd();      };
		audio.onprogress  = function() { progressLedAn(); };
		audio.onseeked    = function() { seekLedAn();     };
		audio.onerror     = function() { if( isAudioInit == 1 ) { nMusic_error(); } };
		audio.autoplay    = false;
		audio.loop        = false;
		audio.volume      = nMusicVolStart;

		audio.crossOrigin = "anonymous";

		isAudioInit       = 1;

		nMusic_plCreate(plActive);
		setMusicFile(0);

		// Sprachausgabe vorbereiten
		// =========================
		if( 'speechSynthesis' in window )
		{
			nToSpeak['text']['count'] = [];
			nToSpeak['main']          = new SpeechSynthesisUtterance();
			nToSpeak['voices']        = speechSynthesis.getVoices();
			toSpeakInit               = 1;
		} else
		  {
			// Console.log('Keine Sprachausgabe vorhanden!');
		  }

		console.log('%c.:: numaek WebAudio Player 2.0 ::.', 'font-weight: bold; font-size: 14px; background-color: #505050; color: gold; padding: 5px; border: 2px solid gold; border-radius: 10px; text-decoration: underline;');
		console.info('http://www.numaek.de/Tutorial-25-WebAudio_Player.html\nhttp://www.numaek.de');

		// Locale Musikdatei auswählen
		// ===========================
		var nLocalFileElement = document.getElementById('nLocalFileSource');
		var nLocalFileSelector  = document.getElementById('nMusicButton_local');
		    nLocalFileSelector.addEventListener("click", function(e) { if( nLocalFileElement ) { nLocalFileElement.click(); } }, false);

		// Willkommens-Text
		// ================
		if( nMusicWelcome == 1 )
		{
			if( nPlayerCache.read('welcome', 0) == 0 )
			{
				nWelcomeSwitch(1);
				nPlayerCache.save('welcome', 1);
			}
		}

		// APIC nach Ladezeit einblenden
		// =============================
		document.getElementById('nApicImage').style.display    = 'block';
		document.getElementById('nApicImage').style.visibility = 'visible';
	}


	function checkIrLoad()
	{
		if( nIrLoaded == 0 )
		{
			loadIrPlayer = 0;
			if( nDjConfig['dsp'] == 1 )
			{
				if( nPlayerInFrame == 1 )
				{
					window.setTimeout('nMusic_IrLoad(0)', 2000);
					window.setTimeout('nMusic_IrLoad(1)', 3000);
					window.setTimeout('nMusic_IrLoad(2)', 4000);
					window.setTimeout('nMusic_IrLoad(3)', 5000);
				} else
				if( nPlayerInFrame == 2 )
				{
					window.setTimeout('nMusic_IrLoad(0)', 6000);
					window.setTimeout('nMusic_IrLoad(1)', 7000);
					window.setTimeout('nMusic_IrLoad(2)', 8000);
					window.setTimeout('nMusic_IrLoad(3)', 9000);
				} else
				  {
					loadIrPlayer = 1;
				  }
			} else
			  {
				if( nPlayerInFrame == 0 )
				{
					loadIrPlayer = 1;
				} else
				  {
					document.getElementById(nIrEffects[0]['button']).style.color = 'red';
					document.getElementById(nIrEffects[1]['button']).style.color = 'red';
					document.getElementById(nIrEffects[2]['button']).style.color = 'red';
					document.getElementById(nIrEffects[3]['button']).style.color = 'red';
				  }
			  }
			if( loadIrPlayer == 1 )
			{
				nMusic_IrLoad(0);
				nMusic_IrLoad(1);
				nMusic_IrLoad(2);
				nMusic_IrLoad(3);

				nIrLoaded = 1;
			}
		}
	}


	// ##### Tastensteuerung #####
	// =============================================================================================================================================================================


	function nMusic_pageKeyUp(event)
	{
		// console.log( event.keyCode );

		if( event.keyCode == 89 ) { nMusic_play();   }		// y
		if( event.keyCode == 80 ) { nMusic_pause();  }		// p
		if( event.keyCode == 83 ) { nMusic_stop();   }		// s
		if( event.keyCode == 77 ) { nMusic_mute();   }		// m
		if( event.keyCode == 90 ) { nMusic_random(); }		// z
		if( event.keyCode == 65 ) { nMusic_light();  }		// a

		if( event.keyCode == 187 || event.keyCode == 189 )
		{
			if( event.keyCode == 189 )
			{
				// leiser
				nDrCv[0]['prozente'] = ( nDrCv[0]['prozente'] >= 10 ) ? ( nDrCv[0]['prozente'] - 10 ) : 0;
			}

			if( event.keyCode == 187 )
			{
				// lauter
				nDrCv[0]['prozente'] = ( nDrCv[0]['prozente'] <= 90 ) ? ( nDrCv[0]['prozente'] + 10 ) : 100;
			}

			nDrCvSet(0, nDrCv[0]['prozente']);
			document.getElementById('audio1').volume = nDrCv[0]['prozente'] / 100;
		}

		if( event.keyCode == 76 || event.keyCode == 82 )
		{
			// Balance links und rechts
			if( nFreqIsAPI == 1 )
			{
				// Balance links
				if( event.keyCode == 76 )
				{
					nDrCv[1]['prozente'] = ( nDrCv[1]['prozente'] >= 10 ) ? ( nDrCv[1]['prozente'] - 10 ) : 0;
				}

				// Balance rechts
				if( event.keyCode == 82 )
				{
					nDrCv[1]['prozente'] = ( nDrCv[1]['prozente'] <= 90 ) ? ( nDrCv[1]['prozente'] + 10 ) : 100;
				}

				xProzL          = ( nDrCv[1]['prozente'] >  50 ) ? ( ( 100 - nDrCv[1]['prozente'] ) * 2 ) : 100;
				nBalSetGainL    = ( xProzL / 100 );

				xProzR          = ( nDrCv[1]['prozente'] <  50 ) ? ( nDrCv[1]['prozente'] * 2 ) : 100;
				nBalSetGainR    = ( xProzR / 100 );

				nDrCvSet(1, nDrCv[1]['prozente']);

				 nBalGainLeft.gain.setValueAtTime(nBalSetGainL, audioCtx.currentTime);
				nBalGainRight.gain.setValueAtTime(nBalSetGainR, audioCtx.currentTime);
			}
		}

		if( event.keyCode == 38 || event.keyCode == 40 )
		{
			// Pitch-Regler
			if( event.keyCode == 38 )
			{
				nSrCv[1]['prozente'] = ( nSrCv[1]['prozente'] <= 90 ) ? ( nSrCv[1]['prozente'] + 10 ) : 100;
			}

			if( event.keyCode == 40 )
			{
				nSrCv[1]['prozente'] = ( nSrCv[1]['prozente'] >= 10 ) ? ( nSrCv[1]['prozente'] - 10 ) : 0;
			}

			if( nSrCv[1]['prozente'] == 50 )
			{
				nSrSpeed = 1;
				document.getElementById('nSrPitch').style.borderColor  = '#808080';
			} else
			  {
				document.getElementById('nSrPitch').style.borderColor  = 'orange';

				if( nSrCv[1]['prozente'] < 50 )
				{
					nSrSpeed = 0.5 + (   nSrCv[1]['prozente'] * 0.01 );
				} else
				  {
					nSrSpeed = 1   + ( ( nSrCv[1]['prozente'] - 50 ) * 0.02 );
				  }
			  }

			nSrSpeed = Math.round((nSrSpeed*10)) / 10;
			document.getElementById('nSrPitch').innerHTML  = nSrSpeed;
			document.getElementById('audio1').playbackRate = nSrSpeed;
			nSrCvSet(1, nSrCv[1]['prozente']);
		}

		if( event.keyCode == 72 )
		{
			nRegisterSet(1, 3, 0);
			nMusic_info();
		}

		if( event.keyCode == 33 )
		{
			nMusic_jumpBack();
		}

		if( event.keyCode == 34 )
		{
			nMusic_jumpForward();
		}

		if( event.keyCode == 36 )
		{
			nMusic_jumpStart();
		}

		if( event.keyCode == 35 )
		{
			nMusic_jumpEnd();
		}

		if( event.keyCode == 37 )
		{
			nMusic_searchBack(0);
		}

		if( event.keyCode == 39 )
		{
			nMusic_searchForward(0);
		}

		if( event.keyCode == 86 )
		{
			nMusic_visu();
		}

		if( event.keyCode == 87 )
		{
			if( nMusicWelcome == 1 )
			{
				nWelcomeSwitch(-1);
			}
		}

		if( event.keyCode == 85 )
		{
			nClockSwitch(-1);
		}

		if( event.keyCode == 67 )
		{
			nApicBigSwitch(-1);
		}

		if( event.keyCode == 68 )
		{
			nDemoSwitch();
		}
	}

	function nMusic_pageKeyDown(event)
	{
		if( event.keyCode == 37)
		{
			nMusic_searchBack(1);
		}

		if( event.keyCode == 39 )
		{
			nMusic_searchForward(1);
		}
	}


	// ##### Playlisten #####
	// =============================================================================================================================================================================


	function nMusic_plLoad(plNr)
	{
		plActive = plNr;
		nMusic_plCreate(plNr);
		setMusicFile(0);
	}


	function nMusic_plCreate(plNr)
	{
		// Playlist auslesen
		// =================
		    plTable     = '<table border="0" style="border-spacing: 1px; background-color: #000000; width: 100%; border: 0px solid #808080;">';
		    plTable    += '<tr>';
		    plTable    += '<td               style="text-align: center; font-weight: bold; width: 20px;  background-color: '+nPlayerColor+'; color: #000000;">&nbsp;</td>';
		    plTable    += '<td colspan=\"2\" style="text-align: center; font-weight: bold; cursor: Help; background-color: '+nPlayerColor+'; color: #000000;" title="Dateien auf dem Server werden abgespielt.">Online-Playlist</td>';
		    plTable    += '</tr>';

		var prgTableCol = 1;
		    prgTable    = '<table border="0" style="border-spacing: 1px; background-color: #000000; width: 100%;">';
		    prgTable   += '<tr><td style="text-align: left; font-weight: bold;">&nbsp;Abspiel-Reihenfolge:</td>';
		    prgTable   += '<td><div onclick="nMusic_prgStart()" class="nMusicDisplayStatus" id="nPrgStart" style="width: 45px; color: '+nPlayerColor+'; border: 1px solid '+nPlayerColor+'; cursor: pointer;">START</div></td></tr>';
		    prgTable   += '<tr><td><table border="0" style="border-spacing: 2px; background-color: #000000; border: 0px solid #808080;"><tr>';

		plIndex = 'pl'+plNr;
		if( !nMusicPlaylist[plIndex] )
		{
			plIndex = 'pl'+plData[0];

			console.log('Fehler: Playlist-Datei nicht vorhanden!');
		}

		if( nMusicPlaylist[plIndex].length > 0 )
		{
			trNr = 1;
			for( pl in nMusicPlaylist[plIndex] )
			{
				nMusicPL[pl]              = [];
				nMusicPL[pl]['datei']     =                 nMusicPlaylist[plIndex][pl]['datei'];
				nMusicPL[pl]['interpret'] =                 nMusicPlaylist[plIndex][pl]['interpret'];
				nMusicPL[pl]['titel']     =                 nMusicPlaylist[plIndex][pl]['titel'];
				nMusicPL[pl]['sekunden']  =                 nMusicPlaylist[plIndex][pl]['zeit'];
				nMusicPL[pl]['zeit']      = nMusic_calcTime(nMusicPlaylist[plIndex][pl]['zeit'], 0);
				nMusicPL[pl]['bpm']       =                 nMusicPlaylist[plIndex][pl]['bpm'];
				nMusicPL[pl]['meta']      =                 nMusicPlaylist[plIndex][pl]['meta'];

				rowText  = nMusicPL[pl]['interpret']+' - '+nMusicPL[pl]['titel'];
				lineText = ( rowText.length > 26 ) ? rowText.substr(0, 23)+'...' : rowText;
				orgText  = rowText;

				/*
				orgText  = orgText+'&#10;';
				if( nMusicPL[pl]['bpm'] > 0 )
				{
					orgText += nMusicPL[pl]['bpm']+' BPM - ';
				}
				if( nMusicPL[pl]['meta'] != '' )
				{
					trackMeta = nMusicPL[pl]['meta'].split('|');
					orgText  += trackMeta[0] + ' Sample Frames - '+trackMeta[2]+'Khz - '+trackMeta[1]+' MB Filesize';
				}
				*/

				plTable += '<tr id="plLine_'+pl+'"   style="cursor: pointer;" onclick="setMusicFile('+pl+');" onmouseover="plLine('+pl+',1);" onmouseout="plLine('+pl+',0);">';
				plTable += '<td id="plNumber_'+pl+'" style="text-align: center; width: 20px; background-color: '+nPlayerColor+'; color: #000000;">'+(parseInt(pl)+1)+'</td>';
				plTable += '<td style="text-align: left;" title="'+orgText+'">&nbsp;'+lineText+'</td>';
				plTable += '<td style="text-align: center; width: 40px;" title="'+nMusicPlaylist[plIndex][pl]['zeit']+' Sekunden">'+nMusicPL[pl]['zeit']+'</td>';
				plTable += '</tr>';

				partsOfTime     = nMusicPL[pl]['zeit'].split(':');
				nMusicPlLength += parseInt((partsOfTime[0]*60));
				nMusicPlLength += parseInt( partsOfTime[1]);

				// Programm-Array
				nPrgArray[pl] = 0;

				prgTable += '<td id="nPrgCell_'+pl+'" title="'+nMusicPL[pl]['interpret']+' - '+nMusicPL[pl]['titel']+' ('+nMusicPL[pl]['zeit']+')" onclick="nMusic_prgSet('+pl+');" style="cursor: pointer; text-align: center; width: 25px; background-color: #303030; color: '+nPlayerColor+';">'+trNr+'</td>';
				if( prgTableCol > 4 )
				{
					prgTable   += '</tr><tr>';
					prgTableCol = 1;
				} else
				  {
					prgTableCol++;
				  }
				trNr++;
			}

			document.getElementById('nPlLengthDisplay').innerHTML = 'Ges. = '+nMusic_calcTime(nMusicPlLength, 1);
		} else
		  {
			pl        = 0;
			plTable  += '<tr id="plLine_'+pl+'"   style="cursor: pointer;" onclick="alert(\'Keine Audio-Dateien in der Playlist!\');" onmouseover="plLine('+pl+',1);" onmouseout="plLine('+pl+',0);">';
			plTable  += '<td id="plNumber_'+pl+'" style="text-align: center; width: 20px; background-color: '+nPlayerColor+'; color: #000000;">0</td>';
			plTable  += '<td style="text-align: left;">&nbsp;Keine Audio-Dateien in der Playlist!</td>';
			plTable  += '</tr>';

			prgTable += '<td>Keine Audio-Dateien vorhanden!</td>';

			document.getElementById('nPlLengthDisplay').innerHTML = 'Gesamt = 00:00';
		  }

		plTable  += '</table>';
		prgTable += '</tr></table></td><td style="width: 50px; vertical-align: top;"><div onclick="nMusic_prgReset()" class="nMusicDisplayStatus" id="nPrgReset" style="width: 45px; color: '+nPlayerColor+'; border: 1px solid '+nPlayerColor+'; cursor: pointer;">RESET</div>';
		prgTable += '<span id="nPrgSumme" style="float: left">&nbsp;&sum; 0</span></td></tr></table>';

		document.getElementById('nPlaylistTable').innerHTML = plTable;
	}

	var nPlV = 0;
	function nMusic_plOpen()
	{
		if( nPlV == 0 )
		{
			document.getElementById('nMusicButton_plopen').style.color = nPlayerColor;
			document.getElementById('nPlVdiv').style.display           = 'block';
			document.getElementById('nPlVdiv').style.visibility        = 'visible';
			nPlV = 1;
		} else
		  {
			document.getElementById('nMusicButton_plopen').style.color = '#FFFFFF';
			document.getElementById('nPlVdiv').style.display           = 'none';
			document.getElementById('nPlVdiv').style.visibility        = 'hidden';
			nPlV = 0;
		  }
	}


	function plvLine(nr, mode)
	{
		useLine = 'plvLine_'+nr;
		if( mode == 1 )
		{
			document.getElementById(useLine).style.backgroundColor = '#005555';
		} else
		  {
			document.getElementById(useLine).style.backgroundColor = '#000000';
		  }
	}


	function plvSwitch(nr)
	{
		if( nr != plActive )
		{
			plvOldLine = 'plvNumber_'+plActive;
			plvNewLine = 'plvNumber_'+nr;
			document.getElementById(plvOldLine).style.backgroundColor = nPlayerColor;
			document.getElementById(plvNewLine).style.backgroundColor = 'gold';

			nMusic_plLoad(nr);
			nMusic_plOpen();
		}
	}


	// =============================================================================================================================================================================


	function nMusic_error()
	{
		if( typeof(audio.error.code) === 'undefined' )
		{
			return;
		}

		audioErrorCode = audio.error.code;
		isAudioError   = 1;

		document.getElementById('ledError').src      = 'src/led_rot.gif';
		document.getElementById('ledError').title    = 'Audio Error-Code: '+audioErrorCode;

		audio.pause();
	}


	function nMusic_blockSwitch(switchUrl)
	{
		if( nPlayerInFrame == 0 )
		{
			self.location.href = switchUrl;
		} else
		  {
			alert("Diese Funktion ist in der DJ-konfiguration gesperrt!");
		  }
	}


	function nMusic_blockSave(pl, eq, dsp, wave)
	{
		/* 
		 *  1 = Block   aktivieren
		 *  0 = Block deaktivieren
		 * -1 = Wert belassen
		 * 
		 */

		cookieBlockStr     = '';
		blockOldCookieData = 0;

		if( document.cookie )
		{
			// Altdaten auslesen
			blockGetCookie = document.cookie.split('nPlayerBlocks=');
			if( blockGetCookie.length > 1 )
			{
				blockOldCookieData = 1;
			}
		}

		if( blockOldCookieData == 1 )
		{
			blockDataCookie = blockGetCookie[1].split(';');
			blockDataCookie = blockDataCookie+'|';
			blockSavedData  = blockDataCookie.split('#');

			cookieBlockStr += ( pl   != -1 ) ?   pl+'#' : blockSavedData[0]+'#';
			cookieBlockStr += ( eq   != -1 ) ?   eq+'#' : blockSavedData[1]+'#';
			cookieBlockStr += ( dsp  != -1 ) ?  dsp+'#' : blockSavedData[2]+'#';
			cookieBlockStr += ( wave != -1 ) ? wave+'#' : blockSavedData[3]+'#';
		} else
		  {
			cookieBlockStr += (   pl != -1 ) ?   pl+'#' : nMusicShowBlockPL+'#';
			cookieBlockStr += (   eq != -1 ) ?   eq+'#' : nMusicShowBlockEQ+'#';
			cookieBlockStr += (  dsp != -1 ) ?  dsp+'#' : nMusicShowBlockDSP+'#';
			cookieBlockStr += ( wave != -1 ) ? wave+'#' : nMusicShowBlockWAVE+'#';
		  }

		// Startwerte aus Cooki überschreiben
		nBlockStartPL   = ( pl   != -1 ) ? pl   : nBlockStartPL;
		nBlockStartEQ   = ( eq   != -1 ) ? eq   : nBlockStartEQ;
		nBlockStartDSP  = ( dsp  != -1 ) ? dsp  : nBlockStartDSP;
		nBlockStartWAVE = ( wave != -1 ) ? wave : nBlockStartWAVE;

		expires = ( new Date( Date.now() + 365*86400*1000 ) ).toUTCString();

		document.cookie = "nPlayerBlocks="+cookieBlockStr+"; expires="+expires;
	}


	function nMusic_showPL(mode)
	{
		if( nPlayerInFrame == 0 || 1 == 1 )
		{
			if( mode == -1 )
			{
				if( document.getElementById('nLinePl').style.visibility == 'visible' )
				{
					mode = 0;
				} else
				  {
					mode = 1;
				  }
			}
			if( mode == 0 )
			{
				document.getElementById('nLinePl').style.display       = 'none';
				document.getElementById('nLinePl').style.visibility    = 'hidden';
				document.getElementById('nMusicButton_pl').style.color = nButtonColorOff;

				nMusic_blockSave(0, -1, -1, -1);
			} else
			  {
				document.getElementById('nLinePl').style.display       = 'table-row';
				document.getElementById('nLinePl').style.visibility    = 'visible';
				document.getElementById('nMusicButton_pl').style.color = '#00FF00';

				nMusic_blockSave(1, -1, -1, -1);
			  }
		} else
		  {
			alert("Diese Funktion ist in der DJ-konfiguration gesperrt!");
		  }
	}


	function nMusic_showEQ(mode)
	{
		if( nPlayerInFrame == 0 || 1 == 1 )
		{
			if( mode == -1 )
			{
				if( document.getElementById('nLineEq').style.visibility == 'visible' )
				{
					mode = 0;
				} else
				  {
					mode = 1;
				  }
			}
			if( mode == 0 )
			{
				document.getElementById('nLineEq').style.display       = 'none';
				document.getElementById('nLineEq').style.visibility    = 'hidden';
				document.getElementById('nMusicButton_eq').style.color = nButtonColorOff;

				nMusic_blockSave(-1, 0, -1, -1);
			} else
			  {
				document.getElementById('nLineEq').style.display       = 'table-row';
				document.getElementById('nLineEq').style.visibility    = 'visible';
				document.getElementById('nMusicButton_eq').style.color = '#00FF00';

				nMusic_blockSave(-1, 1, -1, -1);
			  }
		} else
		  {
			alert("Diese Funktion ist in der DJ-konfiguration gesperrt!");
		  }

	}


	function nMusic_showDSP(mode)
	{
		if( nPlayerInFrame == 0 || 1 == 1 )
		{
			if( mode == -1 )
			{
				if( document.getElementById('nLineDsp').style.visibility == 'visible' )
				{
					mode = 0;
				} else
				  {
					mode = 1;
				  }
			}
			if( mode == 0 )
			{
				document.getElementById('nLineDsp').style.display       = 'none';
				document.getElementById('nLineDsp').style.visibility    = 'hidden';
				document.getElementById('nMusicButton_dsp').style.color = nButtonColorOff;

				nMusic_blockSave(-1, -1, 0, -1);
			} else
			  {
				document.getElementById('nLineDsp').style.display       = 'table-row';
				document.getElementById('nLineDsp').style.visibility    = 'visible';
				document.getElementById('nMusicButton_dsp').style.color = '#00FF00';

				nMusic_blockSave(-1, -1, 1, -1);
			  }
		} else
		  {
			alert("Diese Funktion ist in der DJ-konfiguration gesperrt!");
		  }
	}


	function nMusic_showWAVE(mode)
	{
		if( nPlayerInFrame == 0 || 1 == 1 )
		{
			if( mode == -1 )
			{
				if( document.getElementById('nLineWave').style.visibility == 'visible' )
				{
					mode = 0;
				} else
				  {
					mode = 1;
				  }
			}
			if( mode == 0 )
			{
				document.getElementById('nLineWave').style.display       = 'none';
				document.getElementById('nLineWave').style.visibility    = 'hidden';
				document.getElementById('nMusicButton_wave').style.color = nButtonColorOff;

				nMusic_blockSave(-1, -1, -1, 0);
			} else
			  {
				document.getElementById('nLineWave').style.display       = 'table-row';
				document.getElementById('nLineWave').style.visibility    = 'visible';
				document.getElementById('nMusicButton_wave').style.color = '#00FF00';

				nMusic_blockSave(-1, -1, -1, 1);
			  }
		} else
		  {
			alert("Diese Funktion ist in der DJ-konfiguration gesperrt!");
		  }
	}


	function plLine(nr, mode)
	{
		useLine = 'plLine_'+nr;
		if( mode == 1 )
		{
			document.getElementById(useLine).style.backgroundColor = '#005555';
		} else
		  {
			document.getElementById(useLine).style.backgroundColor = '#000000';
		  }
	}


	function nMusic_calcTimeRev(time, max)
	{
		nMzeit_gesamt   = max - time;

		nMzeit_stunden  = Math.floor( nMzeit_gesamt / 3600 );
		nMzeit_minuten  = Math.floor( nMzeit_gesamt / 60 );

		nMzeit_sekunden = Math.round( nMzeit_gesamt - ( nMzeit_stunden * 3600 ) - ( nMzeit_minuten * 60 ) );
		nMzeit_sekunden = ( nMzeit_sekunden == 60 ) ? 0 : nMzeit_sekunden;

		nMzeit_subH     = ( nMzeit_stunden  < 10 ) ? '0'+nMzeit_stunden  : nMzeit_stunden;
		nMzeit_subM     = ( nMzeit_minuten  < 10 ) ? '0'+nMzeit_minuten  : nMzeit_minuten;
		nMzeit_subS     = ( nMzeit_sekunden < 10 ) ? '0'+nMzeit_sekunden : nMzeit_sekunden;

		nMzeit_zeitStr  = '-'+nMzeit_subM+':'+nMzeit_subS;

		return nMzeit_zeitStr;
	}


	var frCounter      = 0;
	var currProzbalken = 0;
	delayTime          = 1000;

	function nMusic_displayTime()
	{
		clearTimeout(displayTimer);

		if( typeof(audio.currentTime) !== 'undefinded' && !isNaN(audio.currentTime) && typeof(audio.duration) !== 'undefinded' && !isNaN(audio.duration) )
		{
			currProzbalken = audio.currentTime / audio.duration * 100;
			currProzbalken = ( currProzbalken <   0 ) ?   0 : currProzbalken;
			currProzbalken = ( currProzbalken > 100 ) ? 100 : currProzbalken;

			// AutoMix
			// =======
			if( self.location != parent.location )
			{
				if( parent.automix['active'] == 1 )
				{
					if( ( audio.duration - audio.currentTime ) < 20 )
					{
						parent.automix['plCommon'] = ( parent.deckLinks.plActive == parent.deckRechts.plActive ) ? 1 : 0;

						if( parent.automix['dir'] == 'l' && self.name == 'deckLinks' )
						{
							if( parent.automix['plCommon'] == 1 )
							{
								if( parent.deckRechts.currentNumber >= ( parent.deckRechts.nMusicPL.length - 1 ) )
								{
									parent.deckRechts.setMusicFile(0);
								} else
								  {
									parent.deckRechts.setMusicFile(parent.deckRechts.currentNumber+1);
								  }
							} else
							  {
								if( parent.automix['firstRight'] == 1 )
								{
									parent.automix['firstRight'] = 0;
									parent.deckRechts.setMusicFile(0);
								} else
								  {
									parent.deckRechts.nMusic_jumpForward();
								  }
							  }

							parent.automix['dir'] = 'r';
							window.setTimeout('parent.nMusic_djAutoFade("right")', 5000);
						} else
						if( parent.automix['dir'] == 'r' && self.name == 'deckRechts' )
						{
							if( parent.automix['plCommon'] == 1 )
							{
								if( parent.deckLinks.currentNumber >= ( parent.deckLinks.nMusicPL.length - 1 ) )
								{
									parent.deckLinks.setMusicFile(0);
								} else
								  {
									parent.deckLinks.setMusicFile(parent.deckLinks.currentNumber+1);
								  }
							} else
							  {
								if( parent.automix['firstLeft'] == 1 )
								{
									parent.automix['firstLeft'] = 0;
									parent.deckLinks.setMusicFile(0);
								} else
								  {
									parent.deckLinks.nMusic_jumpForward();
								  }
							  }

							parent.automix['dir'] = 'l';
							window.setTimeout('parent.nMusic_djAutoFade("left")', 5000);
						}
					}
				}
			}

			nMusic_setTime(audio.duration, audio.currentTime);
		} else
		  {
			currProzbalken = 0;
		  }

		if( nRadioActive == -1 )
		{
			nSrCvSet(0, currProzbalken);
		}

		// Titel-Scan
		if( nScan == 1 && audio.currentTime > nScanTime )
		{
			if( currentNumber < ( nMusicPL.length - 1 ) )
			{
				// nächster Titel
				nMusic_jumpForward();
			} else
			  {
				// Scan beenden
				nMusic_scan();
			  }
		}

		// A-B Repeat
		if( nRepeat == 'b' && audio.currentTime > nRepeatEnde )
		{
			audio.currentTime = nRepeatStart;
		}

		// ID3-Daten
		if( nRadioActive == -1 && nLocalActive == 0 )
		{
			if( ID3_kBits != 0 )
			{
				document.getElementById('displayKbps').innerHTML    = ID3_kBits+' K/s';
				document.getElementById('displayKbps').style.color  = nPlayerColor;
				document.getElementById('displayKbps').style.border = '1px solid '+nPlayerColor;
			}
			if( ID3_SR != 0 )
			{
			//	show_ID3_SR = ID3_SR.substr(0,(ID3_SR.length-2));
				show_ID3_SR = Math.round(ID3_SR);

				document.getElementById('displayKhz').innerHTML     = show_ID3_SR+' Khz';
				document.getElementById('displayKhz').style.color   = nPlayerColor;
				document.getElementById('displayKhz').style.border  = '1px solid '+nPlayerColor;
			}
		} else
		  {
				document.getElementById('displayKbps').innerHTML    = '000 K/s';
				document.getElementById('displayKbps').style.color  = '#808080';
				document.getElementById('displayKbps').style.border = '1px solid #808080';

				document.getElementById('displayKhz').innerHTML     = '00 Khz';
				document.getElementById('displayKhz').style.color   = '#808080';
				document.getElementById('displayKhz').style.border  = '1px solid #808080';
		  }

		// Uhr und Kalender
		// ===============================================================================================
		var nClockConf = [];
		    nClockConf['radius']       = 58;
		    nClockConf['radius_text']  = 40;
		    nClockConf['strich_kurz']  = 6;
		    nClockConf['strich_lang']  = 10;
		    nClockConf['strich_duenn'] = 1;
		    nClockConf['strich_dick']  = 2;
		    nClockConf['font_size']    = 8;

		if( nClockStatus == 1 )
		{
			var nTime              = []
			    nTime['data']      = new Date();
			    nTime['now']       = Date.now();
			    nTime['stunden']   = nTime['data'].getHours();
			    nTime['minuten']   = nTime['data'].getMinutes();
			    nTime['sekunden']  = nTime['data'].getSeconds();
			    nTime['tag']       = nTime['data'].getDate();
			    nTime['monat']     = nTime['data'].getMonth();
			    nTime['jahr']      = nTime['data'].getFullYear();
			    nTime['wtag']      = nTime['data'].getDay();
			    nTime['wtage']     = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
			    nTime['monate']    = ['', 'Januar', 'Februar', 'M&auml;z', 'April', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
			    nTime['h12']       = ( nTime['stunden'] > 11 ) ? ( nTime['stunden'] - 12 ) : nTime['stunden'];

			var          nClockEl = document.getElementById('nPlayerClock');
			if( nClock = nClockEl.getContext('2d') )
			{
				nClock.width       = nClockEl.width;
				nClock.height      = nClockEl.height;

				nClock.mpX         = nClockEl.width / 2;
				nClock.mpY         = nClockEl.height / 2;

				nClock.lineWidth   = 1;
				nClock.strokeStyle = '#00FFFF';
				nClock.fillStyle   = '#000000';

				nClock.clearRect(0, 0, nClock.width, nClock.height);
				nClock.fillRect( 0, 0, nClock.width, nClock.height);

				nClock.font        = 'normal '+nClockConf['font_size']+'pt Arial,sans-serif';
				nClock.fillStyle   = '#00FFFF';

				alle5              = 0;

				for( i = 1; i <= 60; i++ )
				{
					alpha = ( ( 2 * Math.PI ) / 60 * i ) - ( ( 2 * Math.PI ) / 4 );

					if( alle5 >= 4 )
					{
						nClock.lineWidth = nClockConf['strich_dick'];
						laenge           = nClockConf['strich_lang'];
						text = i / 5;
						alle5            = 0;
					} else
					  {
						nClock.lineWidth = nClockConf['strich_duenn'];
						laenge           = nClockConf['strich_kurz'];
						text = '';
						alle5++;
					  }

					xStart = nClock.mpX + ( Math.cos( alpha ) * ( nClockConf['radius'] + 0 ) );
					yStart = nClock.mpY + ( Math.sin( alpha ) * ( nClockConf['radius'] + 0 ) );
					xEnde  = nClock.mpX + ( Math.cos( alpha ) * ( nClockConf['radius'] - laenge ) );
					yEnde  = nClock.mpY + ( Math.sin( alpha ) * ( nClockConf['radius'] - laenge ) );
					nClock.beginPath(); nClock.moveTo(xStart, yStart); nClock.lineTo(xEnde,  yEnde); nClock.stroke(); nClock.closePath();

					if( text != '' )
					{
						wText  = nClock.measureText(text).width;
						xText  = nClock.mpX + ( Math.cos( alpha ) * nClockConf['radius_text'] );
						yText  = nClock.mpY + ( Math.sin( alpha ) * nClockConf['radius_text'] );
						nClock.fillText(text, xText-(wText/2), yText+(nClockConf['font_size']/2));
					}
				}

				// Stunden
				winkelStunden       = (   2 * Math.PI )        * ( nTime['h12']     / 12 );		// Ganze Stunden
				winkelStunden      += (   2 * Math.PI   / 12 ) * ( nTime['minuten'] / 60 );		// Teilstunde aus Minuten
				winkelStunden      -= ( ( 2 * Math.PI ) / 4 );						// Viertelkreis zurück drehen
				nClock.lineWidth    = 3;
				nClock.strokeStyle  = '#00FFFF';
				xStart              = nClock.mpX;
				yStart              = nClock.mpY;
				xEnde               = nClock.mpX + ( Math.cos( winkelStunden ) * ( nClockConf['radius_text'] - 5 ) );
				yEnde               = nClock.mpY + ( Math.sin( winkelStunden ) * ( nClockConf['radius_text'] - 5 ) );
				nClock.beginPath(); nClock.moveTo(xStart, yStart); nClock.lineTo(xEnde,  yEnde); nClock.stroke(); nClock.closePath();

				// Minuten
				winkelMinuten       = (   2 * Math.PI )        * ( nTime['minuten'] / 60 );		// Ganze Minuten
				winkelMinuten      -= ( ( 2 * Math.PI ) / 4 );						// Viertelkreis zurück drehen
				nClock.lineWidth    = 2;
				nClock.strokeStyle  = '#00FFFF';
				xStart              = nClock.mpX;
				yStart              = nClock.mpY;
				xEnde               = nClock.mpX + ( Math.cos( winkelMinuten ) * ( nClockConf['radius'] - nClockConf['strich_kurz'] - 2 ) );
				yEnde               = nClock.mpY + ( Math.sin( winkelMinuten ) * ( nClockConf['radius'] - nClockConf['strich_kurz'] - 2 ) );
				nClock.beginPath(); nClock.moveTo(xStart, yStart); nClock.lineTo(xEnde,  yEnde); nClock.stroke(); nClock.closePath();

				// Sekunden
				winkelSekunden      = (   2 * Math.PI )        * ( nTime['sekunden'] / 60 );		// Ganze Sekunden
				winkelSekunden     -= ( ( 2 * Math.PI ) / 4 );						// Viertelkreis zurück drehen
				nClock.lineWidth    = 1;
				nClock.strokeStyle  = 'orange';
				xStart              = nClock.mpX;
				yStart              = nClock.mpY;
				xEnde               = nClock.mpX + ( Math.cos( winkelSekunden ) * nClockConf['radius'] );
				yEnde               = nClock.mpY + ( Math.sin( winkelSekunden ) * nClockConf['radius'] );
				nClock.beginPath(); nClock.moveTo(xStart, yStart); nClock.lineTo(xEnde,  yEnde); nClock.stroke(); nClock.closePath();

				// Mittelpunkt
				nClock.beginPath();
				nClock.arc(nClock.mpX, nClock.mpY, 5, 0, 2 * Math.PI, true);
				nClock.fill();
				nClock.closePath();
			}

			// Datum und Zeit ins Display schreiben
			divStrTime  = '';
			divStrTime += ( ( nTime['stunden']  < 10 ) ?  '0' : '' ) + nTime['stunden'];
			divStrTime += ( ( nTime['minuten']  < 10 ) ? ':0' : ':') + nTime['minuten'];
			divStrTime += ( ( nTime['sekunden'] < 10 ) ? ':0' : ':') + nTime['sekunden'];

			divStrDate  = nTime['wtage'][nTime['wtag']]+', ';
			divStrDate += ( ( nTime['tag']      < 10 ) ?  '0' : '' ) + nTime['tag'];
			divStrDate += ( ( nTime['monat']    < 10 ) ? '.0' : '.') + nTime['monat'];
			divStrDate += '.'+nTime['jahr'];

			document.getElementById('nClockDispTime').innerHTML  = divStrTime;
			document.getElementById('nClockDispDate').innerHTML  = divStrDate;
			document.getElementById('nClockDispUnix').innerHTML  = 'UNIX: '+Math.round( nTime['now'] / 1000 );
			document.getElementById('nClockDispMonat').innerHTML = nTime['monate'][nTime['monat']];

			nTachoRun();
		}

		// Selbstaufruf
		if( audio.paused == false || nClockStatus == 1 )
		{
			displayTimer = window.setTimeout('nMusic_displayTime()', delayTime);
		}
	}


	function nMusic_displayVolume()
	{
		audio      = document.getElementById('audio1');

		var canvas = document.getElementById('nCV3D');
		if( canvas.getContext )
		{
			var myConf       = [];
			myConf['width']  = canvas.width;
			myConf['height'] = canvas.height;

			myConf['startX'] = ( canvas.width  / 2 ) - ( 10 / 2 );
			myConf['startY'] = ( canvas.height / 2 ) - ( 10 / 2 ) - 5;

			myConf['LSlX']   = myConf['startX']      - 3;			// Lautsprecher links  x
			myConf['LSlY']   = myConf['startY']

			myConf['LSrX']   = myConf['startX'] + 10 + 3;			// Lautsprecher rechts x
			myConf['LSrY']   = myConf['startY']

			// PAN-Offset
			xProzL           = ( nDrCv[4]['prozente'] < 50 ) ? ( ( 50 - nDrCv[4]['prozente'] ) * 2 ) : 0;
			myConf['offL']   = ( xProzL / 100 ) * 15 * -1;

			xProzR           = ( nDrCv[4]['prozente'] > 50 ) ? ( ( nDrCv[4]['prozente'] - 50 ) * 2 ) : 0;
			myConf['offR']   = ( xProzR / 100 ) * 15;

			ctx              = canvas.getContext('2d');

			ctx.font         = '10px Arial';
			ctx.lineWidth    = 1;
			ctx.fillStyle    = '#000000';
			ctx.clearRect(0, 0, myConf['width'], myConf['height']);
			ctx.fillRect( 0, 0, myConf['width'], myConf['height']);

			// Rotes Rechteck
			// ==============
			ctx.fillStyle = '#DC143C';
			ctx.fillRect(myConf['startX'], myConf['startY'], 10, 10);

			// Lautsprecher links
			// ==================
			ctx.strokeStyle = nPlayerColor;
			ctx.strokeRect(myConf['LSlX']     + myConf['offL'] - 3, myConf['LSrY'], 3, 10);
			figureStartX = myConf['LSlX'] - 3 + myConf['offL'];
			figureStartY = myConf['startY'];
			ctx.beginPath();
			ctx.moveTo(figureStartX, figureStartY);
			ctx.lineTo(figureStartX - 5, figureStartY -  5);
			ctx.lineTo(figureStartX - 5, figureStartY + 15);
			ctx.lineTo(figureStartX,     figureStartY + 10);
			ctx.stroke();
			ctx.closePath();

			// Lautsprecher rechts
			// ===================
			ctx.strokeStyle = nPlayerColor;
			ctx.strokeRect(myConf['LSrX']     + myConf['offR'], myConf['LSrY'], 3, 10);
			figureStartX = myConf['LSrX'] + 3 + myConf['offR'];
			figureStartY = myConf['startY'];
			ctx.beginPath();
			ctx.moveTo(figureStartX, figureStartY);
			ctx.lineTo(figureStartX + 5, figureStartY -  5);
			ctx.lineTo(figureStartX + 5, figureStartY + 15);
			ctx.lineTo(figureStartX,     figureStartY + 10);
			ctx.stroke();
			ctx.closePath();

			// Schallwellen
			// ============
			xProzL = ( nDrCv[1]['prozente'] >  50 ) ? ( ( 100 - nDrCv[1]['prozente'] ) * 2 ) : 100;
			volL   = ( xProzL / 100 );

			xProzR = ( nDrCv[1]['prozente'] <  50 ) ? ( nDrCv[1]['prozente'] * 2 ) : 100;
			volR   = ( xProzR / 100 );

			ctx.strokeStyle = nPlayerColor;
			for( sw = 1; sw < 11; sw++ )
			{
				// links
				ctx.strokeStyle = ( ( volL * 10 ) >= sw ) ? nPlayerColor : '#505050';
				ctx.beginPath();
				ctx.arc(myConf['LSlX'] + myConf['offL'], myConf['startY'] + 5, 12 + ( 2.5 * sw ), nGradToRadial(135), nGradToRadial(225), false);
				ctx.stroke();

				// rechts
				ctx.strokeStyle = ( ( volR * 10 ) >= sw ) ? nPlayerColor : '#505050';
				ctx.beginPath();
				ctx.arc(myConf['LSrX'] + myConf['offR'], myConf['startY'] + 5, 12 + ( 2.5 * sw ), nGradToRadial(315), nGradToRadial(45), false);
				ctx.stroke();
			}
			ctx.closePath();

			// Lautstärke
			// ==========
			ctx.fillStyle   = '#303030';
			ctx.strokeStyle = '#303030';
			ctx.beginPath();
			ctx.moveTo(myConf['startX'],      myConf['startY'] -  3);
			ctx.lineTo(myConf['startX'] - 25, myConf['startY'] - 28);
			ctx.lineTo(myConf['startX'] + 35, myConf['startY'] - 28);
			ctx.lineTo(myConf['startX'] + 10, myConf['startY'] -  3);
			ctx.lineTo(myConf['startX'],      myConf['startY'] -  3);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			if( audio.volume > 0 )
			{
				dst = audio.volume * 25;
				ctx.fillStyle   = ( audio.muted == true ) ? '#FF0000' : nPlayerColor;
				ctx.strokeStyle = ( audio.muted == true ) ? '#FF0000' : nPlayerColor;
				ctx.beginPath();
				ctx.moveTo(myConf['startX'],      myConf['startY'] -  3);
				ctx.lineTo(myConf['startX']      - dst, myConf['startY'] - dst - 3);
				ctx.lineTo(myConf['startX'] + 10 + dst, myConf['startY'] - dst - 3);
				ctx.lineTo(myConf['startX'] + 10, myConf['startY'] -  3);
				ctx.lineTo(myConf['startX'],      myConf['startY'] -  3);
				ctx.closePath();
				ctx.fill();
				ctx.stroke();
			}

			// Beschriftungen
			// ==============
			ctx.fillStyle = nPlayerColor;
			ctx.fillText('VOL', myConf['startX'] -  5, myConf['startY'] + 23);
			ctx.fillText('L',   myConf['startX'] - 19, myConf['startY'] + 32);
			ctx.fillText('R',   myConf['startX'] + 23, myConf['startY'] + 32);

			// Lautstärke Prozente
			ctx.fillStyle = ( nDrCv[0]['prozente'] < 65 ) ? nPlayerColor : '#000000';
			volProzText   = Math.round(nDrCv[0]['prozente']);
			volProzWidth  = ctx.measureText(volProzText).width;
			ctx.fillText(volProzText,   myConf['startX'] + 5 - (volProzWidth/2), myConf['startY'] - 13);
			ctx.fillStyle = nPlayerColor;

			// Stereo-Delay
			// ============
			if( nDrCv[9]['prozente'] <  50 )
			{
				stdMs  = ( 100 - ( nDrCv[9]['prozente'] * 2 ) ) / 100 * 200;
				stdDir = 'l';
			} else
			if( nDrCv[9]['prozente'] == 50 )
			{
				stdMs  = 0;
				stdDir = '';
			} else
			  {
				stdMs  = ( ( nDrCv[9]['prozente'] - 50 ) * 2 ) / 100 * 200;
				stdDir = 'r';
			  }

			stdText  = Math.round(stdMs)+' ms';
			stdWidth = ctx.measureText(stdText).width;
			ctx.font = '8px Arial';
			ctx.strokeRect(       ( canvas.width / 2 ) - 16,                    canvas.height - 11, 32, 10);
			ctx.fillText(stdText, ( canvas.width / 2 ) +  4 - ( stdWidth / 2 ), canvas.height - 3);

			for( zs = 0; zs < 10; zs++ )
			{
				ctx.lineWidth = zs + 1;

				// Nach rechts
				ctx.beginPath();
				ctx.moveTo( ( canvas.width / 2 ) + ( 19 + ( 4 * zs ) ),     canvas.height - 6 );
				ctx.lineTo( ( canvas.width / 2 ) + ( 19 + ( 4 * zs ) ) + 2, canvas.height - 6 );
				ctx.strokeStyle = ( stdDir == 'r' && stdMs >= ( 20 * zs ) ) ? nPlayerColor : '#505050';
				ctx.stroke(); ctx.fill(); ctx.closePath();

				// Nach links
				ctx.beginPath();
				ctx.moveTo( ( canvas.width / 2 ) - ( 21 + ( 4 * zs ) ),     canvas.height - 6 );
				ctx.lineTo( ( canvas.width / 2 ) - ( 21 + ( 4 * zs ) ) + 2, canvas.height - 6 );
				ctx.strokeStyle = ( stdDir == 'l' && stdMs >= ( 20 * zs ) ) ? nPlayerColor : '#505050';
				ctx.stroke(); ctx.fill(); ctx.closePath();
			}
		}
	}


	function nMusic_play()
	{
		if( audio.paused == true )
		{
			if( isAudioError == 0 )
			{
				if( nFreqIsAPI == 1 )
				{
					audioCtx.resume();
				}

				// Start vom CUE-Punkt aus
				if( cue != 0 )
				{
					audio.currentTime = cue;
				}

				audio.play();

				document.getElementById('nMusicButton_stop').style.color  = nButtonColorOff;
				document.getElementById('nMusicButton_pause').style.color = nButtonColorOff;
				document.getElementById('nMusicButton_play').style.color  = nPlayerColor;

				nMusic_displayTime();

				clearTimeout(nFreqTimer);
				nFreqRun();
			}
		} else
		  {
			// Zum CUE-Punkt springen
			if( cue != 0 )
			{
				audio.currentTime = cue;
			}
		  }
	}


	function nMusic_pause()
	{
		audio.pause();

		document.getElementById('nMusicButton_stop').style.color  = nButtonColorOff;
		document.getElementById('nMusicButton_pause').style.color = nPlayerColor;
		document.getElementById('nMusicButton_play').style.color  = nButtonColorOff;
	}


	function nMusic_stop()
	{
		nMusic_setTime(audio.duration, 0);

		audio.load();

		isAudioError = 0;
		document.getElementById('ledError').title                 = 'Audio Fehler';

		document.getElementById('nCVwavePos').style.marginLeft    =  0 + 'px';
		document.getElementById('nCVwaveBig').style.marginLeft    = 50 + 'px';

		document.getElementById('nMusicButton_stop').style.color  = nPlayerColor;
		document.getElementById('nMusicButton_pause').style.color = nButtonColorOff;
		document.getElementById('nMusicButton_play').style.color  = nButtonColorOff;

		nSrCvSet(0, 0);
	}


	function nMusic_jump()
	{
		if( audio.paused == false && nRadioActive == -1 )
		{
			audio.currentTime = audio.duration * nSrCv[0]['prozente'] / 100;
		}
	}


	function nMusic_jumpWave(myEvent)
	{
		if( myEvent.target.id == 'nCVwaveForm' )
		{
			if( audio.paused == false && nRadioActive == -1 )
			{
				audio.currentTime = audio.duration * ( myEvent.offsetX / document.getElementById('nCVwaveForm').offsetWidth );
			}
		}
	}


	function nMusic_mute()
	{
		if( audio.muted == true )
		{
			audio.muted = false;
			document.getElementById('nMusicButton_mute').style.color   = nButtonColorOff;
		//	document.getElementById('displaySr').style.backgroundColor = '#303030';
		} else
		  {
			audio.muted = true;
			document.getElementById('nMusicButton_mute').style.color   = nPlayerColor;
		//	document.getElementById('displaySr').style.backgroundColor = nPlayerColor
		  }
		nMusic_displayVolume();
	}


	// ##### Locale Playlist #####
	// =============================================================================================================================================================================


	function nLocalDropAllow(event)
	{
		event.preventDefault();
	}


	function nLocalDrop(event)
	{
		event.preventDefault();
		nLocalFileSelect(event.dataTransfer.files);
	}


	function nLocalFileSelect(nLocalFileList)
	{
		if( nMusicOffline == 1 )
		{
			if( nLocalFileList.length > 0 )
			{
				currentNumber = 0;
				nLocalFiles   = nLocalFileList;
				nLocalFilePlaylist();

				if( nLocalFiles[currentNumber].type == 'audio/mpeg' )
				{
					nLocalFileLoad(currentNumber);
				}
			}
		} else
		  {
			alert('Das Abspielen lokaler Dateien ist gesperrt!');
		  }
	}


	function nLocalFileLine(nr, mode)
	{
		useLine = 'plLine_'+nr;
		if( mode == 1 )
		{
			document.getElementById(useLine).style.backgroundColor = '#005500';
		} else
		  {
			document.getElementById(useLine).style.backgroundColor = '#000000';
		  }
	}


	function nLocalFileClose()
	{
		var Checkdelete = confirm("Soll die Offline-Playlist jetzt verworfen werden?");
		if( Checkdelete != false )
		{
			nMusic_plCreate(plActive);
			setMusicFile(0);
		}
	}	


	function nLocalFilePlaylist()
	{
		plTable = '<table border="0" style="border-spacing: 1px; background-color: #000000; width: 100%; border: 0px solid #808080;">';
		plTable += '<tr>';
		plTable += '<td onclick="nLocalFileClose();" style="text-align: center; font-weight: bold; width: 20px; cursor: pointer; background-color: #00FF00; color: #000000;" title="Zur&uuml;ck zur Online-Playlist">X</td>';
		plTable += '<td                              style="text-align: center; font-weight: bold;                               background-color: #00FF00; color: #000000;" title="Dateien auf der eigenen Festplatte werden abgespielt.">Offline-Playlist</td>';
		plTable += '</tr>';

		if( nLocalFiles.length > 0 )
		{
			for( pl in nLocalFiles )
			{
				if( nLocalFiles.hasOwnProperty(pl) )
				{
					if( nLocalFiles[pl].type == 'audio/mpeg' )
					{
						rowText  = nLocalFiles[pl].name;
						lineText = ( rowText.length > 35 ) ? rowText.substr(0, 32)+'...' : rowText;

						plTable += '<tr id="plLine_'+pl+'"   style="cursor: pointer;" onclick="nLocalFileLoad('+pl+');" onmouseover="nLocalFileLine('+pl+',1);" onmouseout="nLocalFileLine('+pl+',0);">';
						plTable += '<td id="plNumber_'+pl+'" style="text-align: center; width: 20px; background-color: #00FF00; color: #000000;">'+(parseInt(pl)+1)+'</td>';
						plTable += '<td id="plTitle_'+pl+'"  style="text-align: left; color: #00FF00;" title="'+rowText+'">&nbsp;'+lineText+'</td>';
						plTable += '</tr>';
					} else
					  {
						plTable += '<tr id="plLine_'+pl+'"   style="cursor: pointer;" onclick="alert(\'Diese Datei hat eine falsches Format!\');" onmouseover="nLocalFileLine('+pl+',1);" onmouseout="nLocalFileLine('+pl+',0);">';
						plTable += '<td id="plNumber_'+pl+'" style="text-align: center; width: 20px; background-color: #00FF00; color: #000000;">'+(parseInt(pl)+1)+'</td>';
						plTable += '<td style="text-align: left; color: #00FF00; font-style: italic;">&nbsp;Kein .mp3-Format!</td>';
						plTable += '</tr>';
					  }
				}
			}
		} else
		  {
			plTable  += '<tr id="plLine_0"   style="cursor: pointer;" onclick="alert(\'Keine Audio-Dateien in der Playlist!\');" onmouseover="nLocalFileLine(0,1);" onmouseout="nLocalFileLine(0,0);">';
			plTable  += '<td id="plNumber_0" style="text-align: center; width: 20px; background-color: #00FF00; color: #000000;">0</td>';
			plTable  += '<td style="text-align: left; color: #00FF00; font-style: italic;">&nbsp;Keine Audio-Dateien in der Playlist!</td>';
			plTable  += '</tr>';
		  }

		plTable  += '</table>';

		document.getElementById('nPlaylistTable').innerHTML = plTable;
	}


	function nLocalFileLoad(nr)
	{
		if( nLocalFiles[nr].type == 'audio/mpeg' )
		{
			nLocalFileNr = nr;
			ID3JS        = [];

			// Datei zum Abspielen einlesen
			// ============================
			if( 1 == 1 )
			{
			    var reader        = new FileReader();
				reader.onload = function(event)
				{
					audio.src = event.target.result;

					nLocalFileSet(nLocalFiles[nr]);
				}
				reader.readAsDataURL(nLocalFiles[nr]);
			}

			// Datei für Cover-Bild einlesen
			// =============================
			if( 1 == 1 )
			{
			    var readerTags        = new FileReader();
				readerTags.onload = function(event)
				{
					if( event.target.result.substr(0, 3) == 'ID3' )
					{
						flagsHeader     = event.target.result.substr(5, 1).charCodeAt(0);

						ID3JS['system'] = 'ID3';
						ID3JS['major']  = event.target.result.substr(3, 1).charCodeAt(0);
						ID3JS['minor']  = event.target.result.substr(4, 1).charCodeAt(0);
						ID3JS['flags']  = parseInt(flagsHeader, 16).toString(2).padStart(8, '0');
						ID3JS['tags']   = [];

						// Bild-Tag
						// --------
						    posStart    = event.target.result.indexOf('APIC');
						if( posStart   != -1 )
						{
							ID3JS['tags']['APIC'] = [];

							sizeSub    = 2;

							sizeByte0  = event.target.result.substr(posStart+4, 1).charCodeAt(0);
							sizeByte1  = event.target.result.substr(posStart+5, 1).charCodeAt(0);
							sizeByte2  = event.target.result.substr(posStart+6, 1).charCodeAt(0);
							sizeByte3  = event.target.result.substr(posStart+7, 1).charCodeAt(0);
							sizeArray  = new Uint8Array([sizeByte0, sizeByte1, sizeByte2, sizeByte3]);
							sizeFrame  = new DataView(sizeArray.buffer).getInt32();

							flagFrame1 = event.target.result.substr(posStart+8, 1).charCodeAt(0);
							flagFrame2 = event.target.result.substr(posStart+9, 1).charCodeAt(0);
							flagToBin1 = parseInt(flagFrame1, 16).toString(2).padStart(8, '0');
							flagToBin2 = parseInt(flagFrame2, 16).toString(2).padStart(8, '0');

							encoding   = event.target.result.substr(posStart+10, 1).charCodeAt(0);

							mimeType   = '';
							mimeLoop   = posStart + 11;
							mimeCount  = mimeLoop;
							while( mimeCount++ )
							{
								sizeSub++;
								    sign = event.target.result.substr(mimeCount, 1);
								if( sign.charCodeAt(0) != 0 )
								{
									mimeType += sign;
								} else
								  {
									posDesc = mimeCount + 1;
									break;
								  }
							}	

							imgType    = event.target.result.substr(mimeCount+1, 1).charCodeAt(0);

							descStr    = '';
							descCount  = posDesc;
							while( descCount++ )
							{
								sizeSub++;
								    sign = event.target.result.substr(descCount, 1);
								if( sign.charCodeAt(0) != 0 )
								{
									descStr += sign;
								} else
								  {
									posData = descCount + 1;
									break;
								  }
							}

							imgData    = event.target.result.substr(posData, sizeFrame-sizeSub);
							imgData    = btoa(imgData);

							ID3JS['tags']['APIC']['sizeFrame']   = sizeFrame;
							ID3JS['tags']['APIC']['flagsFrame1'] = flagToBin1;
							ID3JS['tags']['APIC']['flagsFrame2'] = flagToBin2;
							ID3JS['tags']['APIC']['encoding']    = encoding;
							ID3JS['tags']['APIC']['mimeType']    = mimeType;
							ID3JS['tags']['APIC']['desc']        = descStr;
							ID3JS['tags']['APIC']['data']        = imgData;

							document.getElementById('nApic').src = 'data:'+ID3JS['tags']['APIC']['mimeType']+';base64,'+ID3JS['tags']['APIC']['data'];
							nApicSwitch(1, 0);
						} else
						  {
							nApicSwitch(0, 0);
						  }

						// Titel-Tag
						// ---------
						tit2Data      = '';
						    posStart  = event.target.result.indexOf('TIT2');
						if( posStart != -1 )
						{
							ID3JS['tags']['TIT2'] = [];

							sizeByte0  = event.target.result.substr(posStart+4, 1).charCodeAt(0);
							sizeByte1  = event.target.result.substr(posStart+5, 1).charCodeAt(0);
							sizeByte2  = event.target.result.substr(posStart+6, 1).charCodeAt(0);
							sizeByte3  = event.target.result.substr(posStart+7, 1).charCodeAt(0);
							sizeArray  = new Uint8Array([sizeByte0, sizeByte1, sizeByte2, sizeByte3]);
							sizeFrame  = new DataView(sizeArray.buffer).getInt32();

							flagFrame1 = event.target.result.substr(posStart+8, 1).charCodeAt(0);
							flagFrame2 = event.target.result.substr(posStart+9, 1).charCodeAt(0);
							flagToBin1 = parseInt(flagFrame1, 16).toString(2).padStart(8, '0');
							flagToBin2 = parseInt(flagFrame2, 16).toString(2).padStart(8, '0');

							encoding   = event.target.result.substr(posStart+10, 1).charCodeAt(0);

							txtStart   = posStart+10+1+2;
							while( txtStart < ( posStart + 10 + sizeFrame ) )
							{
								    sign = event.target.result.substr(txtStart, 1);
								if( sign.charCodeAt(0) != 0 )
								{
									tit2Data += sign;
								}
								txtStart++;
							}
							tit2Data = tit2Data.trim();
						}

						// Interpret-Tag
						// -------------
						tpe1Data      = '';
						    posStart  = event.target.result.indexOf('TPE1');
						if( posStart != -1 )
						{
							ID3JS['tags']['TPE1'] = [];

							sizeByte0  = event.target.result.substr(posStart+4, 1).charCodeAt(0);
							sizeByte1  = event.target.result.substr(posStart+5, 1).charCodeAt(0);
							sizeByte2  = event.target.result.substr(posStart+6, 1).charCodeAt(0);
							sizeByte3  = event.target.result.substr(posStart+7, 1).charCodeAt(0);
							sizeArray  = new Uint8Array([sizeByte0, sizeByte1, sizeByte2, sizeByte3]);
							sizeFrame  = new DataView(sizeArray.buffer).getInt32();

							flagFrame1 = event.target.result.substr(posStart+8, 1).charCodeAt(0);
							flagFrame2 = event.target.result.substr(posStart+9, 1).charCodeAt(0);
							flagToBin1 = parseInt(flagFrame1, 16).toString(2).padStart(8, '0');
							flagToBin2 = parseInt(flagFrame2, 16).toString(2).padStart(8, '0');

							encoding   = event.target.result.substr(posStart+10, 1).charCodeAt(0);

							txtStart   = posStart+10+1+2;
							while( txtStart < ( posStart + 10 + sizeFrame ) )
							{
								    sign = event.target.result.substr(txtStart, 1);
								if( sign.charCodeAt(0) != 0 )
								{
									tpe1Data += sign;
								}
								txtStart++;
							}
							tpe1Data = tpe1Data.trim();
						}

						// MouseOVer in der Offline-Playlist mit ID3-Titel und -Interpret beschreiben
						// --------------------------------------------------------------------------
						if( tit2Data != '' && tpe1Data != '' )
						{
							document.getElementById('plTitle_'+nr).title =  tit2Data+' - '+tpe1Data;
						}

						// ID3-Display
						document.getElementById('id3_tag_title').innerHTML  = tit2Data;
						document.getElementById('id3_tag_artist').innerHTML = tpe1Data;
						document.getElementById('id3_tag_album').innerHTML  = '-';
						document.getElementById('id3_tag_genre').innerHTML  = '-';
						document.getElementById('id3_tag_year').innerHTML   = '-';
						document.getElementById('nApicBig').src             = document.getElementById('nApic').src;
					} else
					  {
						nApicSwitch(0, 0);
					  }

				}
				readerTags.readAsBinaryString(nLocalFiles[nr]);
			} else
			  {
				nApicSwitch(0, 0);
			  }

			// Datei für Waveform-Bild einlesen
			// ================================
			if( 1 == 1 )
			{
			    var readerWave        = new FileReader();
				readerWave.onload = function(event)
				{
					audioCtxFile = new AudioContext();
					audioCtxFile.decodeAudioData(event.target.result, function(buffer)
					{
						 nMusicFileDraw(buffer);
						bpmRenderBuffer(buffer, nLocalFiles[nr].size);

					}, onDecodeError);
				}
				readerWave.readAsArrayBuffer(nLocalFiles[nr]);
			}
		}
	}


	function nLocalFileSet(localFileData)
	{
		nLocalActive = 1;

		progressLedAn();
		nMusic_stop();
		nMusic_cue(0);
		nMusicFileWvClear();

		document.getElementById('nMusicButton_local').style.color = '#00FF00';	// nPlayerColor;
		document.getElementById('nSamplesDisplay').innerHTML      = '';
		document.getElementById('nSamplesDisplay').title          = '';
		document.getElementById('bpmValue').innerHTML             = '- - -';

		// Radio ausschalten
		if( nRadioActive != -1 )
		{
			rlLineOff = 'rlNumber_'+nRadioActive;
			document.getElementById(rlLineOff).style.backgroundColor = nPlayerColor;
		}
		nMusicRadioPlay(-1);

		// Zeile deaktivieren
		usePlLine = 'plNumber_'+currentNumber;
		if( document.getElementById(usePlLine) )
		{
			document.getElementById(usePlLine).style.backgroundColor = '#00FF00';
		}

		currentNumber = nLocalFileNr;

		// Zeile aktivieren
		usePlLine   = 'plNumber_'+currentNumber;
		if( document.getElementById(usePlLine) )
		{
			document.getElementById(usePlLine).style.backgroundColor = 'gold';
		}

		// Track-Display beschreiben
		dispOrg       = localFileData.name;
		dispStr       = ( dispOrg.length > 35 ) ? dispOrg.substring(0,35)+'...' : dispOrg;
		dispStr       = dispOrg;
		dispStr       = '&#9835; '+dispStr;
		document.getElementById('nDisplayTrack').style.color      = '#00FF00';
		document.getElementById('nDisplayTrack').style.marginLeft = 0 + 'px';
		document.getElementById('nDisplayTrack').innerHTML        = dispStr;
		document.getElementById('nDisplayTrack').title            = dispOrg;
		nDispTRKcount = 0;
		nDispTRKrun   = 0;
		clearTimeout(nDispTRKtimer);
		window.setTimeout('nMusicDisplayWidth()',  250);

		clearTimeout(displayTimer);
		clearTimeout(ledTimer);

		isAudioError = 0;
		document.getElementById('ledError').title = 'Audio Fehler';

		if( nMusicFirstPlay == 0 )
		{
			nMusicFirstPlay = 1;
		} else
		  {
			nMusic_play();
		  }

		nMusic_repeatSet('b');
		window.setTimeout('nMusic_displayTime()', 2500);

		nMusic_IrLoad(0);
		nMusic_IrLoad(1);
		nMusic_IrLoad(2);
		nMusic_IrLoad(3);
		nIrLoaded = 1;
	}


	// ##### Online Playlist #####
	// =============================================================================================================================================================================


	function setMusicFile(nummer)
	{
		// Local-File Einstellungen zurücksetzen
		// =====================================
		nLocalActive = 0;

		document.getElementById('nLocalFileSource').value          = "";
		document.getElementById('nMusicButton_local').style.color  = nButtonColorOff;

		if( nMusicPL.length > 0 )
		{
			nMusic_cue(0);

			if( nRadioActive != -1 )
			{
				rlLineOff = 'rlNumber_'+nRadioActive;
				document.getElementById(rlLineOff).style.backgroundColor = nPlayerColor;
			}
			nMusicRadioPlay(-1);

			// Zeile bzw. Zelle deaktivieren
			if( nPrgMode == 1 )
			{
				if( currentNumber != -1 )
				{
					nPrgUseCell = 'nPrgCell_'+currentNumber;
					document.getElementById(nPrgUseCell).style.color           = '#000000';
					document.getElementById(nPrgUseCell).style.backgroundColor = nPlayerColor;
				}
			} else
			  {
				usePlLine = 'plNumber_'+currentNumber;
				if( document.getElementById(usePlLine) )
				{
					document.getElementById(usePlLine).style.backgroundColor = nPlayerColor;
				}
			  }

			currentNumber = nummer;
			audio.src     = nMusicPL[nummer]['datei'];

			document.getElementById('displayTracks').style.color     = nPlayerColor;
			document.getElementById('displayTracks').style.border    = '1px solid '+nPlayerColor;
			document.getElementById('displayTracks').innerHTML       = (currentNumber+1)+' / '+nMusicPL.length;

			// Zeile bzw. Zelle aktivieren
			if( nPrgMode == 1 )
			{
				nPrgUseCell = 'nPrgCell_'+nummer;
				document.getElementById(nPrgUseCell).style.backgroundColor = 'gold';
			} else
			  {
				usePlLine   = 'plNumber_'+nummer;
				document.getElementById(usePlLine).style.backgroundColor   = 'gold';
			  }

			// ID3-Daten
			var xhttp = new XMLHttpRequest();
			if( xhttp )
			{
				xhttpContent = 'mode=id3&datei='+encodeURIComponent(nMusicPL[nummer]['datei']);
				xhttp.onload = function(e)
				{
					if( xhttp.readyState == 4 && xhttp.status == 200 )
					{
						id3Parts    = xhttp.responseText.split('||');
						ID3_kBits   = id3Parts[0];
						ID3_SR      = id3Parts[1];
						ID3_CN      = id3Parts[2];
						ID3_FS      = id3Parts[3];

						ID3_Title   = id3Parts[4];
						ID3_Artist  = id3Parts[5];
						ID3_Album   = id3Parts[6];
						ID3_Genre   = id3Parts[7];
						ID3_Year    = id3Parts[8];

						ID3_FS      = Math.round( ( id3Parts[3] / 1024 / 1024 ) * 100 ) / 100;
						ID3_Samples = parseFloat(ID3_SR) * 1000 * parseFloat(nMusicPL[currentNumber]['sekunden']);

						// ID3-Display
						document.getElementById('id3_tag_title').innerHTML  = ID3_Title;
						document.getElementById('id3_tag_artist').innerHTML = ID3_Artist;
						document.getElementById('id3_tag_album').innerHTML  = ID3_Album;
						document.getElementById('id3_tag_genre').innerHTML  = ID3_Genre;
						document.getElementById('id3_tag_year').innerHTML   = ID3_Year;
						document.getElementById('nApicBig').src             = document.getElementById('nApic').src;
					}
				};
				xhttp.open('POST', 'ajax.php', true);
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
				xhttp.send(xhttpContent);
			}

			// Cover-Bild
			document.getElementById('nApic').src = 'nID3class.php?datei='+encodeURIComponent(nMusicPL[nummer]['datei']);
			nApicSwitch(1, 0);

			// Track-Display beschreiben
			dispOrg       = nMusicPL[nummer]['interpret']+' - '+nMusicPL[nummer]['titel'];
			dispStr       = ( dispOrg.length > 35 ) ? dispOrg.substring(0,35)+'...' : dispOrg;
			dispStr       = dispOrg;
			dispStr       = '&#9835; '+dispStr;
			document.getElementById('nDisplayTrack').style.color      = nPlayerColor;
			document.getElementById('nDisplayTrack').style.marginLeft = 0 + 'px';
			document.getElementById('nDisplayTrack').innerHTML        = dispStr;
			document.getElementById('nDisplayTrack').title            = dispOrg;
			nDispTRKcount = 0;
			nDispTRKrun   = 0;
			clearTimeout(nDispTRKtimer);
			window.setTimeout('nMusicDisplayWidth()',  250);

			// Datei einlesen
			window.setTimeout('nMusicLoadFirstTime()', 500);

			clearTimeout(displayTimer);
			clearTimeout(ledTimer);

			if( nPlayerInFrame != 0 )
			{
				parent.nMusic_djSync(1, 0);
				parent.nMusic_djSync(2, 0);
			}
			nSyncData       = [];
			nSync           = 0;

			nWaveFormLoaded = 0;
			nMusicFileWvClear();

			if( nMusicPL[currentNumber]['bpm'] > 0 )
			{
				bmpDetection['data']['value']                 = nMusicPL[currentNumber]['bpm'];
				document.getElementById('bpmValue').innerHTML = nMusicPL[currentNumber]['bpm'];
			} else
			  {
				bmpDetection['data']['value']                 = nMusicPL[currentNumber]['bpm'];		// nicht 0
				document.getElementById('bpmValue').innerHTML = ( bmpDetection['data']['value'] == -1 ) ? '- - -' : Math.round(bmpDetection['data']['value']);
			  }

			nMusicFileLoad(audio.src);

			isAudioError = 0;
			document.getElementById('ledError').title = 'Audio Fehler';

			progressLedAn();
			audio.load();

			if( nMusicFirstPlay == 0 )
			{
				nMusicFirstPlay = 1;
			} else
			  {
				nMusic_play();
			  }

			nMusic_repeatSet('b');
			nMusic_displayTime();

			// Programmwechsel bei Visualisierung
			if( avData['run'] == 1 && avData['auto'] == 1 )
			{
				nAvSwitchPrg('+');
			}
		}
	}


	function nMusicDisplayWidth()
	{
		nDispTRKwidth = document.getElementById('nDisplayTrack').scrollWidth;
	}


	function nMusicDisplayMove()
	{
		nDispTRKrun   = 1;
	}


	function nMusicDisplayStop(mode)
	{
		nDispTRKstop  = mode;
	}


	function nMusicJumpToFileLoad()
	{
		nMusicFileLoad(audio.src);
	}


	function nMusicLoadFirstTime()
	{
		nMusic_setTime(audio.duration, audio.currentTime);
	}


	function nMusic_jumpBack()
	{
		if( nLocalActive == 1 )
		{
			if( currentNumber > 0 )
			{
				nLocalFileLoad(currentNumber-1);
			}
		} else
		  {
			if( nPrgRun == 1 )
			{
				tempIndex = nPrgList.indexOf(currentNumber);
				if( tempIndex > 0 )
				{
					tempNumber = tempIndex - 1;
					setMusicFile(nPrgList[tempNumber]);
				}
			} else
			  {
				if( currentNumber > 0 )
				{
					tempNumber = currentNumber - 1;
					setMusicFile(tempNumber);
				}
			  }
		  }
	}


	function nMusic_jumpForward()
	{
		if( nLocalActive == 1 )
		{
			if( currentNumber < ( nLocalFiles.length - 1 ) )
			{
				nLocalFileLoad(currentNumber+1);
			}
		} else
		  {
			if( nPrgRun == 1 )
			{
				tempIndex = nPrgList.indexOf(currentNumber);
				if( tempIndex < ( nPrgList.length - 1 ) )
				{
					tempNumber = tempIndex + 1;
					setMusicFile(nPrgList[tempNumber]);
				}
			} else
			  {
				if( currentNumber < ( nMusicPL.length - 1 ) )
				{
					tempNumber = currentNumber + 1;
					setMusicFile(tempNumber);
				}
			  }
		  }
	}


	function nMusic_jumpStart()
	{
		if( nLocalActive == 1 )
		{
			nLocalFileLoad(0);
		} else
		  {
			if( nPrgRun == 1 )
			{
				setMusicFile(nPrgList[0]);
			} else
			  {
				setMusicFile(0);
			  }
		  }
	}


	function nMusic_jumpEnd()
	{
		if( nLocalActive == 1 )
		{
			nLocalFileLoad(nLocalFiles.length-1);
		} else
		  {
			if( nPrgRun == 1 )
			{
				tempIndex = nPrgList.indexOf(currentNumber);
				if( tempIndex < ( nPrgList.length - 1 ) )
				{
					tempNumber = nPrgList.length - 1;
					setMusicFile(nPrgList[tempNumber]);
				}
			} else
			  {
				tempNumber = nMusicPL.length - 1;
				setMusicFile(tempNumber);
			  }
		  }
	}


	var nMusic_sBSwitch = 0;		
	function nMusic_searchBack(mode)
	{
		if( mode == 1 && audio.paused == false && nRadioActive == -1 )
		{
			nMusic_sBSwitch = 1;
		} else
		  {
			nMusic_sBSwitch = 0;
		  }
		nMusic_searchBack2();
	}
	function nMusic_searchBack2()
	{
		if( nMusic_sBSwitch == 1 )
		{
			currPos = audio.currentTime;
			currPos = currPos - 3;
			currPos = ( currPos < 0 ) ? 0 : currPos;
			audio.currentTime = currPos;
			if( nMusic_sBSwitch == 1 )
			{
				searchBackTimer = window.setTimeout('nMusic_searchBack2()', 250);
			}
		} else
		  {
			audio.playbackRate = 1;
		  }
	}


	var nMusic_sFSwitch = 0;		
	function nMusic_searchForward(mode)
	{
		if( mode == 1 && audio.paused == false && nRadioActive == -1 )
		{
			nMusic_sFSwitch = 1;
		} else
		  {
			nMusic_sFSwitch = 0;
		  }
		nMusic_searchForward2();
	}
	function nMusic_searchForward2()
	{
		if( nMusic_sFSwitch == 1 )
		{
			currPos = audio.currentTime;
			currPos = currPos + 3;
			currPos = ( currPos > audio.duration ) ? audio.duration : currPos;
			audio.currentTime = currPos;
			if( nMusic_sFSwitch == 1 )
			{
				searchForwardTimer = window.setTimeout('nMusic_searchForward2()', 250);
			}
		} else
		  {
			audio.playbackRate = 1;
		  }
	}


	function nMusic_loop()
	{
		if( audio.loop == true )
		{
			audio.loop = false;
			document.getElementById('nMusicButton_loop').style.color = nButtonColorOff;
			document.getElementById('displayLoop').style.color       = '#808080';
			document.getElementById('displayLoop').style.border      = '1px solid #808080';
		} else
		  {
			audio.loop = true;
			document.getElementById('nMusicButton_loop').style.color = nPlayerColor;
			document.getElementById('displayLoop').style.color       = nPlayerColor;
			document.getElementById('displayLoop').style.border      = '1px solid '+nPlayerColor;
		  }
	}


	var nMusic_isRand = 0;
	function nMusic_random()
	{
		if( nMusic_isRand == 1 )
		{
			nMusic_isRand = 0;
			document.getElementById('nMusicButton_random').style.color = nButtonColorOff;
			document.getElementById('displayRnd').style.color          = '#808080';
			document.getElementById('displayRnd').style.border         = '1px solid #808080';
		} else
		  {
			nMusic_isRand = 1;
			document.getElementById('nMusicButton_random').style.color = nPlayerColor;
			document.getElementById('displayRnd').style.color          = nPlayerColor;
			document.getElementById('displayRnd').style.border         = '1px solid '+nPlayerColor;
		  }
	}


	function seekLedAus()
	{
		delayTime = 1000;
		document.getElementById('displaySeek').style.backgroundColor = '#303030';
	}
	function seekLedAn()
	{
		delayTime = 100;
		document.getElementById('displaySeek').style.backgroundColor = nPlayerColor;
		seekledAusTimer = window.setTimeout('seekLedAus()', 250);
	}


	function progressLedAus()
	{
		document.getElementById('displayLoad').style.backgroundColor = '#303030';
	}
	function progressLedAn()
	{
		document.getElementById('displayLoad').style.backgroundColor = nPlayerColor;
		if( nRadioActive == -1 )
		{
			progressledAusTimer = window.setTimeout('progressLedAus()', 500);
		}
	}


	function audioEnd()
	{
		nMusic_cue(0);

		if( nLocalActive == 1 )
		{
			if( nMusic_isRand == 1 )
			{
				// Zufallswiedergabe
				tempNumber = Math.round( Math.random() * ( nLocalFiles.length - 1 ) );
				nLocalFileLoad(tempNumber);
			} else
			  {
				if( currentNumber >= ( nLocalFiles.length - 1 ) )
				{
					// Playlist von vorne
					nLocalFileLoad(0);
				} else
				  {
					nLocalFileLoad(currentNumber+1);
				  }
			  }
		} else
		  {
			if( nPrgRun == 1 )
			{
				// Programmierte Abfolge
				tempIndex = nPrgList.indexOf(currentNumber);
				if( tempIndex >= ( nPrgList.length - 1 ) )
				{
					// Playlist von vorne
					setMusicFile(nPrgList[0]);
				} else
				  {
					setMusicFile(nPrgList[(tempIndex+1)]);
				  }
			} else
			if( nMusic_isRand == 1 )
			{
				// Zufallswiedergabe
				tempNumber = Math.round( Math.random() * ( nMusicPL.length - 1 ) );
				setMusicFile(tempNumber);
			} else
			  {
				autoMixStop = 0;
				if( self.location != top.location )
				{
					if( parent.automix['active'] == 1 )
					{
						// Automix, stoppen
						autoMixStop = 1;
					}
				}
				if( autoMixStop == 0 )
				{
					if( currentNumber >= ( nMusicPL.length - 1 ) )
					{
						// Playlist von vorne
					//	tempNumber = 0;
						setMusicFile(0);
					} else
					  {
						nMusic_jumpForward();
					  }
				}
			  }
		  }
	}


	var restZeitRot = 0;
	function nMusic_setTime(dur, cur)
	{
		timeError   = 0;
		restZeitRot = 0;

		if( dur != 0 && cur != 0 )
		{
			if( audio.duration && audio.currentTime )
			{
				if( nRadioActive != -1 )
				{
					document.getElementById('nMtext_zeitGes').innerHTML    = '&nbsp;&infin;';
					document.getElementById('nMtext_zeitAkt').innerHTML    = '&nbsp;&infin;';
					document.getElementById('nMtext_zeitRest').innerHTML   = '&nbsp;&infin;';
				} else
				  {
					document.getElementById('nMtext_zeitGes').innerHTML    = '&nbsp;'+nMusic_calcTime(audio.duration, 0);
					document.getElementById('nMtext_zeitAkt').innerHTML    = '&nbsp;'+nMusic_calcTime(audio.currentTime, 0);
					document.getElementById('nMtext_zeitRest').innerHTML   = nMusic_calcTimeRev(audio.currentTime, audio.duration);
				  }

				if( ( audio.duration - audio.currentTime ) < 20 )
				{
					restZeitRot = 1;
					document.getElementById('nMtext_zeitRest').style.color = '#FF0000';

					if( nPlayerInFrame == 1 )
					{
						top.document.getElementById('nMpLed_LeftTime').src  = 'src/led_rot.gif';
					}
					if( nPlayerInFrame == 2 )
					{
						top.document.getElementById('nMpLed_RightTime').src = 'src/led_rot.gif';
					}
				} else
				  {
					document.getElementById('nMtext_zeitRest').style.color = nPlayerColor;

					if( nPlayerInFrame == 1 )
					{
						top.document.getElementById('nMpLed_LeftTime').src  = 'src/led_aus.gif';
					}
					if( nPlayerInFrame == 2 )
					{
						top.document.getElementById('nMpLed_RightTime').src = 'src/led_aus.gif';
					}
				  }
			} else
			  {
				timeError = 1;
			  }
		} else
		if( dur != 0  )
		{
			if( audio.duration )
			{
				if( nRadioActive != -1 )
				{
					document.getElementById('nMtext_zeitGes').innerHTML  = '&nbsp;&infin;';
					document.getElementById('nMtext_zeitAkt').innerHTML  = '&nbsp;&infin;';
					document.getElementById('nMtext_zeitRest').innerHTML = '&nbsp;&infin;';
				} else
				  {
					document.getElementById('nMtext_zeitGes').innerHTML  = '&nbsp;'+nMusic_calcTime(dur, 0);
					document.getElementById('nMtext_zeitAkt').innerHTML  = '&nbsp;00:00';
					document.getElementById('nMtext_zeitRest').innerHTML = '-'+nMusic_calcTime(dur, 0);
				  }
			} else
			  {
				timeError = 1;
			  }
		} else
		  {
			timeError = 1;
		  }

		if( timeError == 1 )
		{
			document.getElementById('nMtext_zeitGes').innerHTML  = '&nbsp;00:00';
			document.getElementById('nMtext_zeitAkt').innerHTML  = '&nbsp;00:00';
			document.getElementById('nMtext_zeitRest').innerHTML = '-00:00';
		}
	}


	function nMusic_eqFlat()
	{
		nSrCvSet( 3, 50);
		nSrCvSet( 4, 50);
		nSrCvSet( 5, 50);
		nSrCvSet( 6, 50);
		nSrCvSet( 7, 50);
		nSrCvSet( 8, 50);
		nSrCvSet( 9, 50);
		nSrCvSet(10, 50);
		nSrCvSet(11, 50);
		nSrCvSet(12, 50);

		nSrCvSet(13,100);

		document.getElementById('nEqPreDisplay').innerHTML = 'FLAT';
	}


	function nMusic_eqPre()
	{
		if( nMusicEqPreNr < ( nMusicEqPre.length - 1 ) )
		{
			nMusicEqPreNr++;
		} else
		  {
			nMusicEqPreNr = 0;
		  }

		for( seq = 3; seq <= 12; seq++ )
		{
			nSrCvSet(seq, nMusicEqPre[nMusicEqPreNr][(seq-3)])
		}

		nSrCvSet(13, nMusicEqPre[nMusicEqPreNr][11])

		document.getElementById('nEqPreDisplay').innerHTML        = 'PRE: '+nMusicEqPre[nMusicEqPreNr][10];
		document.getElementById('nMusicButton_eqPre').style.color = nPlayerColor;
	}


	var nScan = 0;

	function nMusic_scan()
	{
		if( nScan == 1 )
		{
			document.getElementById('nMusicButton_scan').style.color = nButtonColorOff;
			document.getElementById('displayScan').style.color       = '#808080';
			document.getElementById('displayScan').style.border      = '1px solid #808080';
			nScan = 0;
		} else
		  {
			document.getElementById('nMusicButton_scan').style.color = nPlayerColor;
			document.getElementById('displayScan').style.color       = '#FF0000';
			document.getElementById('displayScan').style.border      = '1px solid #FF0000';
			nScan = 1;

			if( audio.paused == false )
			{
				nMusic_jumpForward();
			} else
			  {
				setMusicFile(0);
			  }
		  }
	}


	var nRepeat      = '';
	var nRepeatStart = 0;
	var nRepeatEnde  = 0;

	function nMusic_repeat()
	{
		if( nRepeat == 'a' )
		{
			nMusic_repeatSet('a');
		} else
		if( nRepeat == 'b' )
		{
			nMusic_repeatSet('b');
		} else
		  {
			nMusic_repeatSet('');
		  }
	}


	function nMusic_repeatSet(mode)
	{
		if( mode == 'a' )
		{
			document.getElementById('nMusicButton_repeat').style.color     = nPlayerColor;
			document.getElementById('displayRepeat').style.backgroundColor = nPlayerColor;
			document.getElementById('displayRepeatA').style.color          = nPlayerColor;
			document.getElementById('displayRepeatA').style.border         = '1px solid '+nPlayerColor;
			document.getElementById('displayRepeatB').style.color          = nPlayerColor;
			document.getElementById('displayRepeatB').style.border         = '1px solid '+nPlayerColor;

			if( audio.paused == false && nRepeatStart != 0 && audio.currentTime > nRepeatStart )
			{
				nRepeatEnde       = audio.currentTime;
				audio.currentTime = nRepeatStart;
			}
			nRepeat = 'b';
		} else
		if( mode == 'b' )
		{
			document.getElementById('nMusicButton_repeat').style.color     = nButtonColorOff;
			document.getElementById('displayRepeat').style.backgroundColor = '#303030';
			document.getElementById('displayRepeatA').style.color          = '#808080';
			document.getElementById('displayRepeatA').style.border         = '1px solid #808080';
			document.getElementById('displayRepeatB').style.color          = '#808080';
			document.getElementById('displayRepeatB').style.border         = '1px solid #808080';

			nRepeatStart = 0;
			nRepeatEnde  = 0;
			nRepeat = '';
		} else
		  {
			document.getElementById('nMusicButton_repeat').style.color     = nPlayerColor;
			document.getElementById('displayRepeat').style.backgroundColor = nPlayerColor;
			document.getElementById('displayRepeatA').style.color          = nPlayerColor;
			document.getElementById('displayRepeatA').style.border         = '1px solid '+nPlayerColor;
			document.getElementById('displayRepeatB').style.color          = '#808080';
			document.getElementById('displayRepeatB').style.border         = '1px solid #808080';

			if( audio.paused == false )
			{
				nRepeatStart = audio.currentTime;
			}
			nRepeat = 'a';
		  }
	}


	function nMusic_dj()
	{
		if( self.location.href == top.location.href )
		{
			    checkSwitch  = confirm("Soll jetzt in den DJ-Modus umgeschaltet werden?");
			if( checkSwitch != false )
			{
				self.location.href = 'player.php?dj=1';
			}
		} else
		  {
			    checkSwitch  = confirm("Soll jetzt in den Standalone-Modus umgeschaltet werden?");
			if( checkSwitch != false )
			{
				top.location.href = 'player.php';
			}
		  }
	}


	// ##### PRG #####
	// =============================================================================================================================================================================


	var nPrgArray = [];
	var nPrgList  = [];

	var nPrgMode  = 0;
	var nPrgRun   = 0;
	var nPrgPos   = 0;
	var nPrgCount = 0;
	var nPrgDauer = 0;
	var nPrgFolge = 0;
	var nPrgJump  = 0;
	var prgTable  = '';

	function nMusic_prg()
	{
		if( nPrgMode == 0 )
		{
			document.getElementById('nMusicButton_prg').style.color = nPlayerColor;
			document.getElementById('nPlaylistTable').innerHTML     = prgTable;
			document.getElementById('nPlLengthDisplay').innerHTML   = 'PRG = '+nMusic_calcTime(nPrgDauer, 1);
			nPrgMode = 1;
		} else
		  {
			prgTable = document.getElementById('nPlaylistTable').innerHTML;

			document.getElementById('nMusicButton_prg').style.color = nButtonColorOff;
			document.getElementById('nPlaylistTable').innerHTML     = plTable;
			document.getElementById('nPlLengthDisplay').innerHTML   = 'Ges. = '+nMusic_calcTime(nMusicPlLength, 1);
			nPrgMode  = 0;
		  }
	}


	function nMusic_prgSet(nr)
	{
		nPrgUseCell = 'nPrgCell_'+nr;

		if( nPrgArray[nr] != 0 )
		{
			document.getElementById(nPrgUseCell).style.color           = nPlayerColor;
			document.getElementById(nPrgUseCell).style.backgroundColor = '#303030';
			nPrgCount--;
			nPrgArray[nr] = 0;
		} else
		  {
			document.getElementById(nPrgUseCell).style.color           = '#303030';
			document.getElementById(nPrgUseCell).style.backgroundColor = nPlayerColor;
			nPrgFolge++;
			nPrgCount++;
			nPrgArray[nr] = nPrgFolge;
		  }

		document.getElementById('nPrgSumme').innerHTML = '&nbsp;&sum; '+nPrgCount;
	}


	function nMusic_prgCreate()
	{
		nPrgJump = 0;

		for( i = 0; i < nPrgArray.length; i++ )
		{
			if( nPrgArray[i] == ( nPrgPos + 1 ) )
			{
				nPrgList.push(i);
				nPrgPos++;
				nPrgJump = 1;

				partsOfTime = nMusicPL[i]['zeit'].split(':');
				nPrgDauer  += parseInt((partsOfTime[0]*60));
				nPrgDauer  += parseInt( partsOfTime[1]);

				break;
			}
		}

		if( nPrgJump == 1 )
		{
			nMusic_prgCreate();
		} else
		  {
			nPrgPos++;
			if( nPrgPos < nPrgArray.length )
			{
				nMusic_prgCreate();
			} else
			  {
				nPrgCount = nPrgList.length;
				if( nPrgCount > 0 )
				{
					// Programmierten Ablauf starten ->
					// ------------------------------->
					currentNumber = -1;
					nPrgRun       =  1;
					document.getElementById('nPlLengthDisplay').innerHTML       = 'PRG = '+nMusic_calcTime(nPrgDauer, 0);
					document.getElementById('displayPrg').style.backgroundColor = nPlayerColor;
					setMusicFile(nPrgList[0]);
				} else
				  {
					alert('Es wurde kein Titel markiert!');
				  }
			  }
		  }
	}


	function nMusic_prgStart()
	{
		// Ggf. alte Programmierung löschen
		nPrgList  = [];

		nPrgRun   = 0;
		nPrgPos   = 0;
		nPrgCount = 0;
		nPrgJump  = 0;
		nPrgDauer = 0;

		nMusic_prgCreate();
	}


	function nMusic_prgReset()
	{
		// Ggf. alte Programmierung löschen
		nPrgList  = [];

		nPrgRun   = 0;
		nPrgPos   = 0;
		nPrgCount = 0;
		nPrgJump  = 0;
		nPrgDauer = 0;

		document.getElementById('displayPrg').style.backgroundColor = '#303030';
		document.getElementById('nPrgSumme').innerHTML              = '&nbsp;&sum; 0';
		document.getElementById('nPlLengthDisplay').innerHTML       = 'PRG = 00:00';

		for( i = 0; i < nPrgArray.length; i++ )
		{
			nPrgArray[i] = 0;
			nPrgUseCell  = 'nPrgCell_'+i;
			document.getElementById(nPrgUseCell).style.color           = nPlayerColor;
			document.getElementById(nPrgUseCell).style.backgroundColor = '#303030';
		}
	}


	// ##### RADIO #####
	// =============================================================================================================================================================================


	function nMusic_radio()
	{
		if( nRadioMode == 0 )
		{
			document.getElementById('nMusicButton_radio').style.color = nPlayerColor;
			document.getElementById('nPlRadio').style.display         = 'block';
			document.getElementById('nPlRadio').style.visibility      = 'visible';
			nRadioMode = 1;
		} else
		  {
			document.getElementById('nMusicButton_radio').style.color = nButtonColorOff;
			document.getElementById('nPlRadio').style.display         = 'none';
			document.getElementById('nPlRadio').style.visibility      = 'hidden';
			nRadioMode = 0;
		  }
	}


	function rlLine(nr, mode)
	{
		useLine = 'rlLine_'+nr;
		if( mode == 1 )
		{
			document.getElementById(useLine).style.backgroundColor = '#005555';
		} else
		  {
			document.getElementById(useLine).style.backgroundColor = '#000000';
		  }
	}


	function nMusicRadioPlay(rlID)
	{
		if( rlID == -1 )
		{
			nRadioActive = -1;

			if( nRadioMode == 1 )
			{
				nMusic_radio();
			}
		} else
		  {
			// LocalFile deaktivieren
			nLocalActive = 0;
			document.getElementById('nLocalFileSource').value         = "";
			document.getElementById('nDisplayTrack').style.color      = nPlayerColor;
			document.getElementById('nMusicButton_local').style.color = nButtonColorOff;

			rlLineOn  = 'rlNumber_'+rlID;
			document.getElementById(rlLineOn).style.backgroundColor   = 'gold';

			if( nRadioActive != -1 )
			{
				rlLineOff = 'rlNumber_'+nRadioActive;
				document.getElementById(rlLineOff).style.backgroundColor = nPlayerColor;
			}

			nRadioActive = rlID;

			nMusic_stop();

			audio.src = nMusicRadiolist[rlID]['stream'];

			document.getElementById('displayTracks').style.color     = nPlayerColor;
			document.getElementById('displayTracks').style.border    = '1px solid '+nPlayerColor;
			document.getElementById('displayTracks').innerHTML       = '&infin;';

			// Track-Display beschreiben
			dispOrg = nMusicRadiolist[rlID]['name'];
			dispStr = ( dispOrg.length > 22 ) ? dispOrg.substring(0,20)+'...' : dispOrg;
			dispStr = dispOrg;
			dispStr = '&#9835; <span style="font-weight: bold; color: gold;">Web-Radio ::</span> '+dispStr;

			document.getElementById('nDisplayTrack').style.marginLeft = 0 + 'px';
			document.getElementById('nDisplayTrack').innerHTML        = dispStr;
			document.getElementById('nDisplayTrack').title            = dispOrg;

			nDispTRKcount = 0;
			nDispTRKrun   = 0;
			clearTimeout(nDispTRKtimer);
			window.setTimeout('nMusicDisplayWidth()',  250);

			// Cover-Bild umschalten
			nApicSwitch(2, 0);

			clearTimeout(displayTimer);
			clearTimeout(ledTimer);

			nSyncData       = [];
			nSync           = 0;

			isAudioError = 0;
			document.getElementById('ledError').title = 'Audio Fehler';

			progressLedAn();
			audio.load();
			nMusic_play();
			nMusic_repeatSet('b');
			nMusic_displayTime();
			nMusic_radio();
		  }
	}


	// ##### nRegister #####
	// =============================================================================================================================================================================


	var nRegNumArr = new Array();
	var nRegActArr = new Array();

	function nRegisterHinweis(Grp_Nr, text)
	{
		divHinweisId = 'nRegisterHinweis_'+Grp_Nr;
		document.getElementById(divHinweisId).innerHTML = text;
	}

	function nRegisterOver(Grp_Nr, mode)
	{
		divOverId = 'nRegisterButton_'+Grp_Nr;
		if( mode == 1 )
		{
			document.getElementById(divOverId).style.borderTop   = '1px solid #FFA500';
			document.getElementById(divOverId).style.borderLeft  = '1px solid #FFA500';
			document.getElementById(divOverId).style.borderRight = '1px solid #FFA500';
		} else
		  {
			document.getElementById(divOverId).style.borderTop   = '1px solid #505050';
			document.getElementById(divOverId).style.borderLeft  = '1px solid #505050';
			document.getElementById(divOverId).style.borderRight = '1px solid #505050';
		  }
	}

	function nRegisterSet(divGroup, divNumber, init)
	{
		if( init != 0 )
		{
			// init = Anzahl der Karten in Gruppe
			nRegNumArr[divGroup] = init;
		}

		divSetId = 'nRegisterButton_'+divGroup+'_'+divNumber;

		for( nr = 1; nr <= nRegNumArr[divGroup]; nr++ )
		{
			divButtonId  =  'nRegisterButton_'+divGroup+'_'+nr;
			divContentId = 'nRegisterContent_'+divGroup+'_'+nr;

			nRegColor   = '';
			if( typeof(nRegisterFarben) !== 'undefined' )
			{
				if( typeof(nRegisterFarben[(divGroup-1)]) !== 'undefined' )
				{
					nRegColor = ( nRegisterFarben[(divGroup-1)][(nr-1)] ) ? nRegisterFarben[(divGroup-1)][(nr-1)] : '';
				}
			}

			if( divButtonId == divSetId )
			{
				setToColor = ( nRegColor != '' ) ? nRegColor : '#000000';

				document.getElementById(divButtonId).style.backgroundColor    = setToColor;
				document.getElementById(divButtonId).style.borderBottom       = '1px solid '+setToColor;
				document.getElementById(divContentId).style.visibility        = 'visible';
				document.getElementById(divContentId).style.display           = 'block';
			} else
			  {
				setToColor = ( nRegColor != '' ) ? nRegColor : '#202020';

				document.getElementById(divButtonId).style.backgroundColor    = setToColor;
				document.getElementById(divButtonId).style.borderBottom       = '1px solid #505050';
				document.getElementById(divContentId).style.visibility        = 'hidden';
				document.getElementById(divContentId).style.display           = 'none';
			  }
		}

		nRegActArr[divGroup] = divNumber;
	}


	// ##### Visualisierung #####
	// =============================================================================================================================================================================


	function nMusic_visu()
	{
		if( nPlayerInFrame == 0 )
		{
			if( document.getElementById('nLineVisu').style.visibility == 'visible' )
			{
				nMusicVisu    = 0;
				avData['run'] = 0;

				if( nVisuFullscreen == 1 )
				{
					nMusic_visuFullscreen();
				}

				document.getElementById('nLineMain').style.display     = 'table-row';
				document.getElementById('nLineMain').style.visibility  = 'visible';

				if( nBlockStartPL == 1 )
				{
					document.getElementById('nLinePl').style.display         = 'table-row';
					document.getElementById('nLinePl').style.visibility      = 'visible';
					document.getElementById('nMusicButton_pl').style.color   = '#00FF00';
				}

				if( nBlockStartEQ == 1 )
				{
					document.getElementById('nLineEq').style.display         = 'table-row';
					document.getElementById('nLineEq').style.visibility      = 'visible';
					document.getElementById('nMusicButton_eq').style.color   = '#00FF00';
				}

				if( nBlockStartDSP == 1 )
				{
					document.getElementById('nLineDsp').style.display        = 'table-row';
					document.getElementById('nLineDsp').style.visibility     = 'visible';
					document.getElementById('nMusicButton_dsp').style.color  = '#00FF00';
				}

				if( nBlockStartWAVE == 1 )
				{
					document.getElementById('nLineWave').style.display       = 'table-row';
					document.getElementById('nLineWave').style.visibility    = 'visible';
					document.getElementById('nMusicButton_wave').style.color = '#00FF00';
				}

				document.getElementById('nLineVisu').style.display     = 'none';
				document.getElementById('nLineVisu').style.visibility  = 'hidden';
				document.getElementById('nPlayerVisu').style.height    = 0 + 'px';

				document.getElementById('nVisuButton_run').style.color = '#FF0000';
			} else
			  {
				nMusicVisu    = 1;
				avData['run'] = 1;

				nAvInit2();

				document.getElementById('nLineMain').style.display     = 'none';
				document.getElementById('nLinePl').style.display       = 'none';
				document.getElementById('nLineEq').style.display       = 'none';
				document.getElementById('nLineDsp').style.display      = 'none';
				document.getElementById('nLineWave').style.display     = 'none';
				document.getElementById('nLineMain').style.visibility  = 'hidden';
				document.getElementById('nLinePl').style.visibility    = 'hidden';
				document.getElementById('nLineEq').style.visibility    = 'hidden';
				document.getElementById('nLineDsp').style.visibility   = 'hidden';
				document.getElementById('nLineWave').style.visibility  = 'hidden';

				document.getElementById('nLineVisu').style.display     = 'table-row';
				document.getElementById('nLineVisu').style.visibility  = 'visible';
				document.getElementById('nPlayerVisu').style.height    = 550 + 'px';

				document.getElementById('nVisuButton_run').style.color = '#00FF00';
			  }

			document.getElementById('nVisuButton_flat').style.color = ( avData['flat'] == 1 ) ? '#FF0000' : nButtonColorOff;
			document.getElementById('nVisuButton_prgVAlue').value   = avData['prg'].charAt(0).toUpperCase() + avData['prg'].slice(1);
		} else
		  {
			alert("Diese Funktion ist in der DJ-konfiguration gesperrt!");
		  }
	}

	var nVisuFullscreen = 0;
	var nVisuScreenTimer;

	function nMusic_visuFullscreen()
	{
		var elem = document.documentElement;

		if( nVisuFullscreen == 0 )
		{
			nVisuFullscreen = 1;

			if (elem.requestFullscreen) { elem.requestFullscreen(); } else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen(); } else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); } else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }

			document.getElementById('nPlayerVisu').style.position    =  'absolute';
			document.getElementById('nPlayerVisu').style.top         =  '0px';
			document.getElementById('nPlayerVisu').style.left        =  '0px';
			document.getElementById('nPlayerVisu').style.width       = ( window.outerWidth  - 0 ) + 'px';
			document.getElementById('nPlayerVisu').style.height      = ( window.outerHeight - 0 ) + 'px';

			document.getElementById('cvVisu').style.marginTop        = ( ( ( window.outerHeight / 2 ) - ( 500 / 2 ) ) - 20 ) + 'px';

			document.getElementById('nVisuButton_full').style.color  = '#00FF00';

			clearTimeout(nVisuScreenTimer);
			nVisuScreenTimer = window.setTimeout('nMusic_visuHideButtons()', 3000);
		} else
		  {
			nVisuFullscreen = 0;

			if (document.exitFullscreen) { document.exitFullscreen(); } else if (document.mozCancelFullScreen) { /* Firefox */ document.mozCancelFullScreen(); } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */ document.webkitExitFullscreen(); } else if (document.msExitFullscreen) { /* IE/Edge */ document.msExitFullscreen(); }

			document.getElementById('nPlayerVisu').style.position    = 'relative';
			document.getElementById('nPlayerVisu').style.width       = '668px';
			document.getElementById('nPlayerVisu').style.height      = '500px';
			document.getElementById('nPlayerVisu').style.display     = 'inline-table';

			document.getElementById('nVisuButton_full').style.color  = nButtonColorOff;

			document.getElementById('cvVisu').style.marginTop        = '0px';

			clearTimeout(nVisuScreenTimer);
		  }
	}

	function nMusic_visuHideButtons()
	{
		document.getElementById('nVisuButtons').style.visibility = 'hidden';
	}

	function nMusic_mouseMove(event)
	{
		if( nVisuFullscreen == 1 )
		{
			document.getElementById('nVisuButtons').style.visibility = 'visible';

			clearTimeout(nVisuScreenTimer);
			             nVisuScreenTimer = window.setTimeout('nMusic_visuHideButtons()', 3000);
		}
	}


	// ##### Sprachausgabe #####
	// =============================================================================================================================================================================


	function nSpeak(sText)
	{
		if( 'speechSynthesis' in window )
		{
			if( nToSpeak['use'] == 1 )
			{
				if( typeof(nToSpeak['text']['en'][sText]) != 'undefined' )
				{
					if( typeof(nToSpeak['text']['nr'][sText])    == 'undefined' )
					{
						nToSpeak['text']['nr'][sText] = 1;
					}

					if( typeof(nToSpeak['text']['count'][sText]) == 'undefined' )
					{
						nToSpeak['text']['count'][sText] = 0;
					}

					if( nToSpeak['text']['count'][sText] < nToSpeak['text']['nr'][sText] )
					{
						nToSpeak['main']   = new SpeechSynthesisUtterance();
						nToSpeak['voices'] = speechSynthesis.getVoices();

						searchDE           = -1;
						searchEN           = -1;

						for( v = 0; v < nToSpeak['voices'].length ; v++ )
						{
							// Suche nach deutsch, falls englisch nicht bevorzugt ist
							if( nToSpeak['voices'][v].lang == 'de-DE' && nToSpeak['englisch'] != 1 )
							{
								nToSpeak['main'].voice = nToSpeak['voices'][v];
								nToSpeak['main'].lang  = 'de-DE';
								searchDE               = 1;
							}

							// Suche nach default-voice
							if( nToSpeak['voices'][v].default == true )
							{
								searchEN = v;
							}
						}

						if( searchDE == -1 )
						{
							if( searchEN != -1 )
							{
								// Falls deutsch & default nicht vorhanden, automatische Auswahl durch Browser
								nToSpeak['main'].voice = nToSpeak['voices'][searchEN];
								nToSpeak['main'].lang  = nToSpeak['voices'][searchEN].lang;
							}

							nToSpeak['main'].text  = nToSpeak['text']['en'][sText];
						} else
						  {
							nToSpeak['main'].text  = nToSpeak['text']['de'][sText];
						  }

						nToSpeak['main'].rate   = 1;
						nToSpeak['main'].pitch  = 1;
						nToSpeak['main'].volume = 1;
						nToSpeak['text']['count'][sText]++;

						speechSynthesis.speak( nToSpeak['main'] );
					}
				} else
				  {
					console.log('Text nicht vorhanden!');
				  }
			} else
			  {
				console.log('Sprachausgabe deaktiviert!');
			  }
		} else
		  {
			console.log('Keine Sprachausgabe im Browser vorhanden!');
		  }
	}

