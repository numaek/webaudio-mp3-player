<?php

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

 if( isset($_GET['dj']) )
 {
	// Frameset für DJ-Konfiguration erstellen
	// =======================================

	echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"src/style.css\">
	<style type=\"text/css\">

		body { background-color: #BBBBBB; }

		.nMixerTable
		{
			width:			90%;
			height:			792px;
			background-color:	#202020;
			border:			5px solid #000000;
			border-radius:		10px;
			border-spacing:		0px;
			margin:			0px auto;
			margin-top:		15px;
		}

		.mixerLine
		{
			background:		linear-gradient(#404040, #151515);
			border-bottom:		5px solid #000000;
			color:			#FFFFFF;
			font-family:		verdana;
			font-size:		8pt;
		}

		.VuCell
		{
			background-color:	#000000;
			margin:			0px;
			padding:		0px;
			font-size:		9pt;
			color:			#00FFFF;
		}

		.VuValue
		{
			font-size:		6pt;
			color:			#00FFFF;
			/* line-height:		8px; */
		}

	</style>

	<script type=\"text/javascript\" src=\"src/Config.js\"                  ></script>
	<script type=\"text/javascript\" src=\"src/CanvasSchalterMixer.js\"     ></script>
	<script type=\"text/javascript\" src=\"src/CanvasSchiebeReglerMixer.js\"></script>
	<script type=\"text/javascript\" src=\"src/CanvasDrehReglerMixer.js\"   ></script>
	<script type=\"text/javascript\" src=\"src/CanvasVuSingle.js\"          ></script>

	<script language=\"javascript\">

		var mainRunDelay          = 50;

		var nDjSets               = 2;
		var nDjSet                = 1;
		var nDjSoundID            = 0;
		var nDjCutLeft            = 0;
		var nDjCutRight           = 0;

		var nDjSyncLeft           = 0;
		var nDjSyncRight          = 0;

		var pitchBuffer           = -1;
		var nPlayerBufferVol      = 0;

		var nAutoFadeTimer;
		var nAutoFadeStep         = 5;
		var nAutoFadeDelay        = 150;
		var nAutoFadeActive       = 0;
		var nAutoFadeDir          = '';

		var automix               = []
		    automix['plCommon']   = 1;
		    automix['firstLeft']  = 1;
		    automix['firstRight'] = 1;
		    automix['active']     = 0;
		    automix['dir']        = '';

		function nMusic_djAutomix()
		{
			if( automix['active'] == 1 )
			{
				automix['active']   = 0;
				automix['dir']      = '';
				document.getElementById('nMusicButton_Automix').style.color = '#FFFFFF';
			} else
			  {
				if( parent.deckLinks.audio.paused == true && parent.deckRechts.audio.paused == true )
				{
					alert('Ein Deck muss spielen!');
				} else
				  {
					if( parent.deckLinks.audio.paused == false )
					{
						automix['firstLeft']  = 0;
						automix['dir']        = 'l';
						parent.deckRechts.nMusic_pause();
						nMusic_djAutoFade('left');
					} else
					  {
						automix['firstRight'] = 0;
						automix['dir']        = 'r';
						parent.deckLinks.nMusic_pause();
						nMusic_djAutoFade('right');
					  }

					automix['active']   = 1;
					document.getElementById('nMusicButton_Automix').style.color = 'gold';
				  }
			  }
		}

		function nMusic_djAutoFade(direction)
		{
			if( nAutoFadeActive == 0 )
			{
				if( direction == 'center' )
				{
					nSrCv[0]['prozente'] = 50;
					nSrCvSet(0, 50);
				} else
				  {
					nAutoFadeDelay   = 250 - ( nDrCv[0]['prozente'] * 2 );
					nAutoFadeDir     = direction;
					nAutoFadeActive  = 1;

					if( nAutoFadeDir == 'left' )
					{
						document.getElementById('nMusicButton_AFLeft').style.color  = 'gold';
					} else
					  {
						document.getElementById('nMusicButton_AFRight').style.color = 'gold';
					  }
					nMusic_djFade();
				  }
			}
		}

		function nMusic_djFade()
		{
			if( nAutoFadeActive == 1 )
			{
				if( nAutoFadeDir == 'left' )
				{
					if( nSrCv[0]['prozente'] > 0 )
					{
						nSrCv[0]['prozente'] -= nAutoFadeStep;
						nSrCv[0]['prozente']  = ( nSrCv[0]['prozente'] < 0 ) ? 0 : nSrCv[0]['prozente'];
						nSrCvSet(0, nSrCv[0]['prozente']);
						nAutoFadeTimer        = window.setTimeout('nMusic_djFade()', nAutoFadeDelay);
					} else
					  {
						clearTimeout(nAutoFadeTimer);
						nAutoFadeActive = 0;
						document.getElementById('nMusicButton_AFLeft').style.color  = '#FFFFFF';
					  }
				} else
				  {
					if( nSrCv[0]['prozente'] < 100 )
					{
						nSrCv[0]['prozente'] += nAutoFadeStep;
						nSrCv[0]['prozente']  = ( nSrCv[0]['prozente'] > 100 ) ? 100 : nSrCv[0]['prozente'];
						nSrCvSet(0, nSrCv[0]['prozente']);
						nAutoFadeTimer        = window.setTimeout('nMusic_djFade()', nAutoFadeDelay);
					} else
					  {
						clearTimeout(nAutoFadeTimer);
						nAutoFadeActive = 0;
						document.getElementById('nMusicButton_AFRight').style.color = '#FFFFFF';
					  }
				  }
			}
		}

		function nMusic_djMute(event)
		{
			if( event.target.id )
			{
				if( event.type == 'mousedown' )
				{
					if( event.button == 1 || event.button == 2 )
					{
						// Rechtsklick
						if( event.target.id == 'MuteSpanLeft'  || event.target.id == 'MuteButtonLeft' )
						{
							nPlayerBufferVol                                                        = deckLinks.document.getElementById('audio1').volume;
							deckLinks.document.getElementById('audio1').volume                      = 1;
							          document.getElementById('DjMuteLeft').style.backgroundColor   = '#00FF00';
							          document.getElementById('MuteSpanLeft').style.color           = '#00FF00';
						}
						if( event.target.id == 'MuteSpanRight' || event.target.id == 'MuteButtonRight' )
						{
							nPlayerBufferVol                                                        =  deckRechts.document.getElementById('audio1').volume;
							deckRechts.document.getElementById('audio1').volume                     = 1;
							           document.getElementById('DjMuteRight').style.backgroundColor = '#00FF00';
							           document.getElementById('MuteSpanRight').style.color         = '#00FF00';
						}
					} else
					  {
						// Linksklick
						if( event.target.id == 'MuteSpanLeft'  || event.target.id == 'MuteButtonLeft' )
						{
							nPlayerBufferVol                                                        = deckLinks.document.getElementById('audio1').volume;
							deckLinks.document.getElementById('audio1').volume                      = 0;
							          document.getElementById('DjMuteLeft').style.backgroundColor   = 'red';
							          document.getElementById('MuteSpanLeft').style.color           = 'red';
						}
						if( event.target.id == 'MuteSpanRight' || event.target.id == 'MuteButtonRight' )
						{
							nPlayerBufferVol                                                        =  deckRechts.document.getElementById('audio1').volume;
							deckRechts.document.getElementById('audio1').volume                     = 0;
							           document.getElementById('DjMuteRight').style.backgroundColor = 'red';
							           document.getElementById('MuteSpanRight').style.color         = 'red';
						}
					  }
				}
				if( event.type == 'mouseup' )
				{
					if( event.target.id == 'MuteSpanLeft'  || event.target.id == 'MuteButtonLeft' )
					{
						deckLinks.document.getElementById('audio1').volume                      = nPlayerBufferVol;
						nPlayerBufferVol                                                        = 0;
						          document.getElementById('DjMuteLeft').style.backgroundColor   = 'gold';
						          document.getElementById('MuteSpanLeft').style.color           = 'gold';
					}
					if( event.target.id == 'MuteSpanRight' || event.target.id == 'MuteButtonRight' )
					{
						deckRechts.document.getElementById('audio1').volume                     = nPlayerBufferVol;
						nPlayerBufferVol                                                        = 0;
						           document.getElementById('DjMuteRight').style.backgroundColor = 'gold';
						           document.getElementById('MuteSpanRight').style.color         = 'gold';
					}
				}
			}
		}

		function nMusic_djAdj(change, mode)
		{
			adjAmount       = 15;
			adjButtonLeft   = 0;
			adjButtonRight  = 0;

			if( nDjSyncLeft == 1 )
			{
				if( mode == 1 )
				{
					pitchBuffer = deckLinks.nSrCv[1]['prozente'];
					if( change == 'slow' )
					{
						adjButtonLeft  = 1;
						deckLinks.nSrCvSet(1, (deckLinks.nSrCv[1]['prozente']-adjAmount));
					} else
					  {
						adjButtonRight = 1;
						deckLinks.nSrCvSet(1, (deckLinks.nSrCv[1]['prozente']+adjAmount));
					  }
				} else
				  {
					deckLinks.nSrCvSet(1, pitchBuffer);
				  }
			} else
			if( nDjSyncRight == 1 )
			{
				if( mode == 1 )
				{
					// schneller
					pitchBuffer = deckRechts.nSrCv[1]['prozente'];
					if( change == 'slow' )
					{
						adjButtonLeft  = 1;
						deckRechts.nSrCvSet(1, (deckRechts.nSrCv[1]['prozente']-adjAmount));
					} else
					  {
						adjButtonRight = 1;
						deckRechts.nSrCvSet(1, (deckRechts.nSrCv[1]['prozente']+adjAmount));
					  }
				} else
				  {
					deckRechts.nSrCvSet(1, pitchBuffer);
				  }
			} else
			  {
				alert('Zuerst muss ein Player synchronisiert werden!');
			  }

			document.getElementById('nMusicButton_SyncAdjLeft').style.color  = ( adjButtonLeft  == 1 ) ? '#00FFFF' : '#FFFFFF';
			document.getElementById('nMusicButton_SyncAdjRight').style.color = ( adjButtonRight == 1 ) ? '#00FFFF' : '#FFFFFF';
		}

		function nMusic_djSync(nr, mode)
		{
			// Beide Decks müssen BPM-Werte bereitstellen
			// Beim neuen Track ausschalten

			if( nr == 1 )
			{
				if( mode == -1 )
				{
					setSync = ( nDjSyncLeft != 0 ) ? 0 : 1;
				} else
				  {
					setSync = mode;
				  }

				if( setSync == 1 && ( deckLinks.nMusicPL[deckLinks.currentNumber]['bpm'] <= 0 || deckRechts.nMusicPL[deckRechts.currentNumber]['bpm'] <= 0 ) )
				{
					setSync = 0;
				}

				if( setSync == 0 )
				{
					nDjSyncLeft  = 0;
					document.getElementById('nMusicButton_SyncLeft').style.color           = '#FFFFFF';
					document.getElementById('nMusicButton_SyncAdjLeft').style.borderColor  = '';
					document.getElementById('nMusicButton_SyncAdjRight').style.borderColor = '';
				} else
				  {
					nDjSyncLeft  = 1;
					nDjSyncRight = 0;
					document.getElementById('nMusicButton_SyncLeft').style.color           = '#00FFFF';
					document.getElementById('nMusicButton_SyncRight').style.color          = '#FFFFFF';
					document.getElementById('nMusicButton_SyncAdjLeft').style.borderColor  = '#00FF00';
					document.getElementById('nMusicButton_SyncAdjRight').style.borderColor = '#00FF00';

					    proPitchLeft = deckRechts.nMusicPL[deckRechts.currentNumber]['bpm'] / deckLinks.nMusicPL[deckLinks.currentNumber]['bpm'] * 100;
					if( proPitchLeft > 100 )
					{
						setPitchLeft  = ( ( proPitchLeft - 100 ) / 2 ) + 50;
					} else
					  {
						setPitchLeft  =     proPitchLeft         / 2;
					  }

					 deckLinks.nSrCvSet(1, setPitchLeft);
					deckRechts.nSrCvSet(1, 50);
				  }
			}

			if( nr == 2 )
			{
				if( mode == -1 )
				{
					setSync = ( nDjSyncRight != 0 ) ? 0 : 1;
				} else
				  {
					setSync = mode;
				  }

				if( setSync == 1 && ( deckLinks.nMusicPL[deckLinks.currentNumber]['bpm'] <= 0 || deckRechts.nMusicPL[deckRechts.currentNumber]['bpm'] <= 0 ) )
				{
					setSync = 0;
				}

				if( setSync == 0 )
				{
					nDjSyncRight = 0;
					document.getElementById('nMusicButton_SyncRight').style.color          = '#FFFFFF';
					document.getElementById('nMusicButton_SyncAdjLeft').style.borderColor  = '';
					document.getElementById('nMusicButton_SyncAdjRight').style.borderColor = '';
				} else
				  {
					nDjSyncRight = 1;
					nDjSyncLeft  = 0;
					document.getElementById('nMusicButton_SyncRight').style.color          = '#00FFFF';
					document.getElementById('nMusicButton_SyncLeft').style.color           = '#FFFFFF';
					document.getElementById('nMusicButton_SyncAdjLeft').style.borderColor  = '#FF0000';
					document.getElementById('nMusicButton_SyncAdjRight').style.borderColor = '#FF0000';

					    proPitchRight = deckLinks.nMusicPL[deckLinks.currentNumber]['bpm'] / deckRechts.nMusicPL[deckRechts.currentNumber]['bpm'] * 100;
					if( proPitchRight > 100 )
					{
						setPitchRight = ( ( proPitchRight - 100 ) / 2 ) + 50;
					} else
					  {
						setPitchRight =     proPitchRight         / 2;
					  }

					 deckLinks.nSrCvSet(1, 50);
					deckRechts.nSrCvSet(1, setPitchRight);
				  }
			}
		}

		function nMusic_djCut(nr, mode)
		{
			if( nr == 1 )
			{
				if( mode == -1 )
				{
					setCut = ( nDjCutLeft  != 0 ) ? 0 : 1;
				} else
				  {
					setCut = mode;
				  }

				if( setCut == 0 )
				{
					nDjCutLeft = 0;
					deckLinks.nFreqAnalyser.connect(deckLinks.nDelay);
					deckLinks.nFreqAnalyser.connect(deckLinks.nPanner);
					document.getElementById('nMusicButton_CutLeft').style.color = '#FFFFFF';
				} else
				  {
					nDjCutLeft = 1;
					deckLinks.nFreqAnalyser.disconnect(deckLinks.nDelay);
					deckLinks.nFreqAnalyser.disconnect(deckLinks.nPanner);
					document.getElementById('nMusicButton_CutLeft').style.color = 'red';
				  }
			}

			if( nr == 2 )
			{
				if( mode == -1 )
				{
					setCut = ( nDjCutRight != 0 ) ? 0 : 1;
				} else
				  {
					setCut = mode;
				  }

				if( setCut == 0 )
				{
					nDjCutRight = 0;
					deckRechts.nFreqAnalyser.connect(deckRechts.nDelay);
					deckRechts.nFreqAnalyser.connect(deckRechts.nPanner);
					document.getElementById('nMusicButton_CutRight').style.color = '#FFFFFF';
				} else
				  {
					nDjCutRight = 1;
					deckRechts.nFreqAnalyser.disconnect(deckRechts.nDelay);
					deckRechts.nFreqAnalyser.disconnect(deckRechts.nPanner);
					document.getElementById('nMusicButton_CutRight').style.color = 'red';
				  }
			}
		}

		function nMusic_djReload(nr)
		{
			    checkReload  = confirm('Soll der Player jetzt neu geladen werden?');
			if( checkReload != false )
			{
				if( nr == 1 )
				{
					deckLinks.location.reload();
				} else
				  {
					deckRechts.location.reload();
				  }
			}
		}

		function nMusic_djClose()
		{
			    checkSwitch  = confirm('Soll jetzt in den Standalone-Modus umgeschaltet werden?');
			if( checkSwitch != false )
			{
				top.location.href = 'player.php';
			}
		}

		function nMusic_djSoundSwitch()
		{
			nDjSet  = ( nDjSet < nDjSets ) ? ( nDjSet + 1 ) : 1;
			for( ln = 1; ln < 5; ln++ )
			{
				ladeIn = 'djSound'+ln;
				document.getElementById(ladeIn).src = 'src/sound_'+nDjSet+'_'+ln+'.mp3';
				document.getElementById(ladeIn).load();
			}

			document.getElementById('nMusicButton_soundSet').value = 'Set '+nDjSet;
		}

		function nMusic_djSound(mode, id)
		{
			useSound  = 'djSound'+id;
			useButton = 'nMusicButton_sound'+id;

			if( mode == 1 )
			{
				// Reglerstellungen nachladen
				nDrCvSet(2, nDrCv[2]['prozente']);

				nDjSoundID = id;
				document.getElementById(useSound).play();
				document.getElementById(useButton).style.color       = '#00FFFF';
				document.getElementById(useButton).style.borderColor = '#00FFFF';
			} else
			  {
				nDjSoundID = 0;
				document.getElementById(useSound).load();
				document.getElementById(useButton).style.color       = '#FFFFFF';
				document.getElementById(useButton).style.borderColor = '#FFFFFF';
				document.getElementById('soundTime').style.width     = 0 + 'px';
			  }
		}

		function nMusic_djClock()
		{
			Jetzt         = new Date();
			Tag           = Jetzt.getDate();
			Monat         = Jetzt.getMonth()+1;
			Jahr          = Jetzt.getFullYear();
			DatumsString  = ( ( Tag   < 10) ?  \"0\" : \"\" ) + Tag;
			DatumsString += ( ( Monat < 10) ? \".0\" : \".\") + Monat;
			DatumsString += \".\" + Jahr;
			Stunden       = Jetzt.getHours();
			Minuten       = Jetzt.getMinutes();
			Sekunden      = Jetzt.getSeconds();
			ZeitString    = Stunden;
			ZeitString   += ( ( Minuten   < 10 ) ? \":0\" : \":\") + Minuten;
			ZeitString   += ( ( Sekunden  < 10 ) ? \":0\" : \":\") + Sekunden;

			document.getElementById('clock').innerHTML = DatumsString + \" - \" + ZeitString;
			window.setTimeout(\"nMusic_djClock()\", 1000);
		}

		function nMusic_djCtmClose()
		{
			document.getElementById('ctmDiv').style.visibility = 'hidden';
		}

		function nMusic_djCtmClick(event)
		{
			// Alle Submenüs schließen
			ctmLines = document.getElementsByClassName('ctmSub');
			for( s = 0; s < ctmLines.length; s++ )
			{
				ctmLines[s].style.visibility = 'hidden';
			}

			if( event.button == 2 )
			{
				// Context-Menü öffnen, ausser auf Mute-Button
				openBlock = 0;
				if( event.target.id )
				{
					if( event.target.id == 'MuteSpanLeft' || event.target.id == 'MuteButtonLeft' || event.target.id == 'MuteSpanRight' || event.target.id == 'MuteButtonRight' )
					{
						openBlock = 1;
					}
				}
				if( openBlock == 0 )
				{
					ctmLeftMax = window.innerWidth                       - document.getElementById('ctmDiv').offsetWidth  - 20;
					ctmTopMax  = window.innerHeight + window.pageYOffset - document.getElementById('ctmDiv').offsetHeight - 20;

					ctmLeft    = event.x;
					ctmLeft    = ( ctmLeft > ctmLeftMax ) ? ctmLeftMax : ctmLeft;

					ctmTop     = event.y + window.pageYOffset;
					ctmTop     = ( ctmTop  > ctmTopMax  ) ? ctmTopMax  : ctmTop;

					document.getElementById('ctmDiv').style.left       = ctmLeft + 'px';
					document.getElementById('ctmDiv').style.top        = ctmTop  + 'px';
					document.getElementById('ctmDiv').style.visibility = 'visible';
				}
			} else
			  {
				// Context-Menü schließen
				if( event.target.className != 'ctm' )
				{
					document.getElementById('ctmDiv').style.visibility = 'hidden';
				}
			  }
		}

		function nMusic_djCtmOver(event)
		{
			if( event.target.className == 'ctm' )
			{
				// Alle Sub-Menüs schließen
				// ========================
				ctmLines = document.getElementsByClassName('ctmSub');
				for( s = 0; s < ctmLines.length; s++ )
				{
					ctmLines[s].style.visibility = 'hidden';

					// Sub-Menü Öffnen
					// ===============
					if( event.target.id.substring(0, 7) == 'ctmSub_' )
					{
						ctmNr    = event.target.id.substring(7, event.target.id.length);
						ctmSubId = 'ctmSub#'+ctmNr;

						if( ( document.getElementById('ctmDiv').offsetLeft + document.getElementById('ctmDiv').offsetWidth + document.getElementById(ctmSubId).offsetWidth ) < ( window.innerWidth - 20 ) )
						{
							ctmSubLeft = document.getElementById('ctmDiv').offsetLeft + document.getElementById('ctmDiv').offsetWidth;
						} else
						  {
							ctmSubLeft = document.getElementById('ctmDiv').offsetLeft - document.getElementById(ctmSubId).offsetWidth;
						  }

						if( ( document.getElementById('ctmDiv').offsetTop  + document.getElementById(event.target.id).offsetTop + document.getElementById(ctmSubId).offsetHeight ) < ( window.innerHeight - 20 ) )
						{
							ctmSubTop  = document.getElementById('ctmDiv').offsetTop  + document.getElementById(event.target.id).offsetTop;
						} else
						  {
							ctmSubTop  = document.getElementById('ctmDiv').offsetTop  + document.getElementById(event.target.id).offsetTop + document.getElementById(event.target.id).offsetHeight - document.getElementById(ctmSubId).offsetHeight;
						  }

						document.getElementById(ctmSubId).style.left       = ctmSubLeft + 'px';
						document.getElementById(ctmSubId).style.top        = ctmSubTop  + 'px';
						document.getElementById(ctmSubId).style.visibility = 'visible';
					}
				}
			}
		}

		function nMusic_djCtmSetAll(mode)
		{
			for( sNr = 0; sNr < 8; sNr++ )
			{
				javascript:nSsCvSet(sNr, mode);
			}
		}

		function nMusic_djPrevent(event)
		{
			event.preventDefault();
		}

		var mainRunFirst   = 1;
		var ledSingleReset = 0;

		function mainRun()
		{
			// VU-Meter
			if( typeof(deckLinks) !== 'undefined' && typeof(deckRechts) !== 'undefined' )
			{
				if( mainRunFirst == 1 || ( deckLinks.audio.paused == false || deckLinks.nOsc == 1 ) || ( deckRechts.audio.paused == false || deckRechts.nOsc == 1 ) )
				{
					nVuCvLedSingle(0);
					nVuCvLedSingle(1);
					ledSingleReset = 0;
				} else
				  {
					if( ledSingleReset == 0 )
					{
						// LED-Balken leeren
						nVuCvLedSingle(0);
						nVuCvLedSingle(1);
						ledSingleReset = 1;
					}
				  }
			} else
			  {
				nVuCvLedSingle(0);
				nVuCvLedSingle(1);
				ledSingleReset = 0;
			  }

			// Takt-Synchronisierung
			if( mainRunFirst == 1 || deckLinks.audio.paused == false || deckRechts.audio.paused == false )
			{
				var nCvSyncConf = [];

				    nCvSyncConf['width']        = 54;
				    nCvSyncConf['height']       = 20;
				    nCvSyncConf['balkenWidth']  = 10;
				    nCvSyncConf['balkenHeight'] = 4;
				    nCvSyncConf['balkenSpace']  = 2;
				    nCvSyncConf['randLinks']    = 4;
				    nCvSyncConf['randUnten']    = 4;

				var nCvSyncID  = document.getElementById('nCvSync');
				if( nCvSyncCtx = nCvSyncID.getContext('2d') )
				{
					nCvSyncCtx.fillStyle = '#000000';
					nCvSyncCtx.clearRect(0, 0, nCvSyncConf['width'], nCvSyncConf['height']);
					nCvSyncCtx.fillRect( 0, 0, nCvSyncConf['width'], nCvSyncConf['height']);

					for( is = 1; is < 5; is++ )
					{
						if( typeof(deckLinks) !== 'undefined' )
						{
							nCvSyncCtx.fillStyle = ( deckLinks.nSync  == 1 && is == deckLinks.nSyncData['position'] ) ? '#00FF00' : '#003000';
							xPosStart            = nCvSyncConf['randLinks'] + ( ( is - 1 ) * ( nCvSyncConf['balkenWidth'] +  nCvSyncConf['balkenSpace'] ) );
							nCvSyncCtx.fillRect( xPosStart, 4, nCvSyncConf['balkenWidth'], nCvSyncConf['balkenHeight']);
						}
						if( typeof(deckRechts) !== 'undefined' )
						{
							nCvSyncCtx.fillStyle = ( deckRechts.nSync == 1 && is == deckRechts.nSyncData['position'] ) ? '#FF0000' : '#300000';
							xPosStart            = nCvSyncConf['randLinks'] + ( ( is - 1 ) * ( nCvSyncConf['balkenWidth'] +  nCvSyncConf['balkenSpace'] ) );
							nCvSyncCtx.fillRect( xPosStart, 12, nCvSyncConf['balkenWidth'], nCvSyncConf['balkenHeight']);
						}
					}
				}
			}

			if( mainRunFirst == 1 )
			{
				mainRunFirst = 0;
				nMusic_djClock();
			}

			if( nDjSoundID != 0 )
			{
				useSound = 'djSound'+nDjSoundID;
				document.getElementById('soundTime').style.width = ( 136 * ( document.getElementById(useSound).currentTime / document.getElementById(useSound).duration ) ) + 'px';
			}

			window.setTimeout(\"mainRun()\", mainRunDelay);
		}

		document.addEventListener('contextmenu', nMusic_djPrevent,  true);
		document.addEventListener('mousedown',   nMusic_djMute,     true);
		document.addEventListener('mouseup',     nMusic_djMute,     true);

		document.addEventListener('mouseup',     nMusic_djCtmClick, true);
		document.addEventListener('mouseover',   nMusic_djCtmOver,  true);

		document.onload = window.setTimeout(\"mainRun()\", 3500);

	</script>

	<div id=\"ctmDiv\" class=\"ctmDiv\">
		<div class=\"ctm\" onclick=\"window.open('http://www.numaek.de'); nMusic_djCtmClose();\" style=\"padding-right: 0px;\"><div style=\"margin: 0px auto; padding-left: 10px; padding-right: 10px; font-weight: bold; font-size: 10px; background-color: #505050; color: gold; border: 2px solid gold; border-radius: 10px; text-decoration: underline;\">.:: numaek WebAudio Player 2.0 ::.</div></div>
		<div class=\"ctm\" onclick=\"window.open('http://www.numaek.de'); nMusic_djCtmClose();\"><img class=\"ctmImg\" src=\"src/rechts.gif\">Gehe zu <span style=\"font-weight: bold;\">www.numaek.de</span></div>
		<div class=\"ctmHr\"><hr class=\"ctmHrLine\"></div>
		<div class=\"ctm\" onclick=\"nMusic_djAutomix(); nMusic_djCtmClose();\"><img class=\"ctmImg\" src=\"src/automix.png\">Automix</div>
		<div class=\"ctm\" id=\"ctmSub_1\"><img class=\"ctmImg\" src=\"src/fade.png\">Fade<span style=\"float: right; margin-left: 5px;\">&#10151;</span></div>
		<div class=\"ctm\" id=\"ctmSub_2\"><img class=\"ctmImg\" src=\"src/refresh.png\">Neu laden<span style=\"float: right; margin-left: 5px;\">&#10151;</span></div>
		<div class=\"ctmHr\"><hr class=\"ctmHrLine\"></div>
		<div class=\"ctm\" onclick=\"nMusic_djCtmSetAll(1); nMusic_djCtmClose();\"><img class=\"ctmImg\" src=\"src/spacer.gif\">Alle Anzeigen an</div>
		<div class=\"ctm\" onclick=\"nMusic_djCtmSetAll(0); nMusic_djCtmClose();\"><img class=\"ctmImg\" src=\"src/spacer.gif\">Alle Anzeigen aus</div>
		<div class=\"ctmHr\"><hr class=\"ctmHrLine\"></div>
		<div class=\"ctm\" onclick=\"nMusic_djClose();\"><img class=\"ctmImg\" src=\"src/beenden.gif\">DJ-Modus beenden</div>
	</div>
		<div id=\"ctmSub#1\" class=\"ctmSub\">
			<div class=\"ctmSubLine\" onclick=\"nMusic_djAutoFade('left');\"  ><img class=\"ctmImg\" src=\"src/links.gif\" >Nach links</div>
			<div class=\"ctmSubLine\" onclick=\"nMusic_djAutoFade('center');\"><img class=\"ctmImg\" src=\"src/ab.gif\"    >Zur Mitte</div>
			<div class=\"ctmSubLine\" onclick=\"nMusic_djAutoFade('right');\" ><img class=\"ctmImg\" src=\"src/rechts.gif\">Nach rechts</div>
		</div>
		<div id=\"ctmSub#2\" class=\"ctmSub\">
			<div class=\"ctmSubLine\" onclick=\"nMusic_djReload(1);\"        ><img class=\"ctmImg\" src=\"src/links.gif\">Linker Player</div>
			<div class=\"ctmSubLine\" onclick=\"document.location.reload();\"><img class=\"ctmImg\" src=\"src/ab.gif\">Alles</div>
			<div class=\"ctmSubLine\" onclick=\"nMusic_djReload(2);\"        ><img class=\"ctmImg\" src=\"src/rechts.gif\">Rechter PLayer</div>
		</div>

	<table border=\"0\" style=\"border-spacing: 0px; margin: 10px; border: 1px solid black; box-shadow: 8px 8px 5px #404040;\">
		<tr>
			<td style=\"background-color: #202020; width: 710px; height: 825px;\"><iframe name=\"deckLinks\"  src=\"player.php?frame=1\" style=\"width: 710px; height: 835px; border: 0px solid blue;\"></iframe></td>
			<td style=\"background-color: #202020; width: 200px; height: 835px; text-align: center; vertical-align: top;\">
				<table id=\"nMusicMixer\" class=\"nMixerTable\" border=\"0\">
					<tr>
						<td class=\"mixerLine\" style=\"height: 133px; color: gold; font-weight: bold; font-size: 9pt; vertical-align: top;\">
							<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin-top: 10px;\">
								<tr><td colspan=\"2\"><span style=\"background-color: black;\">&nbsp;DJ-KONFIGURATION&nbsp;</span><br><br></td></tr>
								<tr>
									<td colspan=\"2\" style=\"text-align: center; vertical-align: top; height: 50px;\">
										<div id=\"clock\" style=\"margin: 0px auto; margin-top: 3px; width: 140px; height: 20px; line-height: 20px; font-weight: normal; font-size: 8pt; border: 1px solid gold; color: gold; background-color: #000000;\">00.00.0000 - 00:00:00</div>
									</td>
								</tr>
								<tr>
									<td>
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px;\">
											<tr>
												<td style=\"text-align: right;\"                            ><input type=\"button\" class=\"nMusicButtonDj\" style=\"width: 50px;\" value=\"Reload\" onclick=\"this.blur(); nMusic_djReload(1);\" title=\"Deck links neu laden\"></td>
												<td style=\"text-align: center; height: 30px; width: 36px;\"><input type=\"button\" class=\"nMusicButtonDj\" style=\"width: 20px;\" value=\"X\"      onclick=\"this.blur(); nMusic_djClose();\"   title=\"Umschalten auf Standalone-Modus\"></td>
												<td style=\"text-align: left;\"                             ><input type=\"button\" class=\"nMusicButtonDj\" style=\"width: 50px;\" value=\"Reload\" onclick=\"this.blur(); nMusic_djReload(2);\" title=\"Deck rechts neu laden\"></td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class=\"mixerLine\" style=\"height: 533px; vertical-align: bottom;\">
							<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin-bottom: 0px;\">
								<tr>
									<td style=\"width: 100%;\">
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin: 0px auto; margin-bottom: 4px;\">
											<tr>
												<td>
													<div  id=\"DjMuteLeft\" title=\"Linksklick zur Stummschaltung&#10;Rechtsklick zur vollen Einblendung\" style=\"margin: 0px auto; width: 40px; height: 40px; background-color: gold; border-radius: 50%; border: 1px solid black; cursor: pointer;\">
														<div id=\"MuteButtonLeft\" style=\"width: 30px; height: 30px; background-color: #303030; margin-top: 4px; margin-left: 4px; text-align: center; border-radius: 50%; border: 1px solid black;\">
															<span id=\"MuteSpanLeft\"  style=\"line-height: 28px; text-decoration: underline; font-size: 6pt; font-weight: bold; color: gold;\">MUTE</span>
														</div>
													</div>
												</td>
												<td style=\"width: 56px; padding-right: 3px; text-align: center; vertical-align: bottom;\">
													<span style=\"line-height: 22px; cursor: Help;\" title=\"Durch Halten der Pfeiltasten den Takt anpassen\"><span style=\"color: gold;\">&bull;</span> Pitch <span style=\"color: gold;\">&bull;</span></span><br>
													<input type=\"button\" id=\"nMusicButton_SyncAdjLeft\"  class=\"nMusicButtonBlank\" style=\"width: 20px;\" value=\"&lt;\" onclick=\"this.blur();\" onmousedown=\"nMusic_djAdj('slow',1);\" onmouseup=\"nMusic_djAdj('slow',0);\">
													<input type=\"button\" id=\"nMusicButton_SyncAdjRight\" class=\"nMusicButtonBlank\" style=\"width: 20px;\" value=\"&gt;\" onclick=\"this.blur();\" onmousedown=\"nMusic_djAdj('fast',1);\" onmouseup=\"nMusic_djAdj('fast',0);\">
												</td>
												<td>
													<div id=\"DjMuteRight\" title=\"Linksklick zur Stummschaltung&#10;Rechtsklick zur vollen Einblendung\" style=\"margin: 0px auto; width: 40px; height: 40px; background-color: gold; border-radius: 50%; border: 1px solid black; cursor: pointer;\">
														<div id=\"MuteButtonRight\" style=\"width: 30px; height: 30px; background-color: #303030; margin-top: 4px; margin-left: 4px; text-align: center; border-radius: 50%; border: 1px solid black;\">
															<span id=\"MuteSpanRight\" style=\"line-height: 28px; text-decoration: underline; font-size: 6pt; font-weight: bold; color: gold;\">MUTE</span>
														</div>
													</div>
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td style=\"width: 100%;\">
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin: 0px auto; margin-bottom: 3px;\">
											<tr>
												<td style=\"text-align: center;\">
													<input type=\"button\" id=\"nMusicButton_SyncLeft\"  class=\"nMusicButtonBlank\" style=\"width: 36px;\" value=\"Sync\" onclick=\"this.blur(); nMusic_djSync(1, -1);\"  title=\"Linken  Player synchronisieren\">
												</td>
												<td style=\"width: 56px; padding-right: 3px;\">
													<canvas id=\"nCvSync\" width=\"54\" height=\"22\" style=\"border: 1px solid #505050; margin: 0px auto; margin-top: 3px;\"></canvas>
												</td>
												<td style=\"text-align: center;\">
													<input type=\"button\" id=\"nMusicButton_SyncRight\" class=\"nMusicButtonBlank\" style=\"width: 36px;\" value=\"Sync\" onclick=\"this.blur(); nMusic_djSync(2, -1);\"  title=\"Rechten Player synchronisieren\">
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td colspan=\"2\" style=\"text-align: center;\">
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin: 0px auto;\">
											<tr>
												<td style=\"vertical-align: bottom;\" rowspan=\"3\"><canvas id=\"nSrCv1\" width=\"40\" height=\"135\" style=\"border: 0px solid #808080; margin: 0px auto;\"></canvas></td>
												<td class=\"VuCell\" style=\"width: 16px;\"><canvas id=\"nVuSingleLeft\"  width=\"16\" height=\"120\" style=\"border: 0px solid #808080;\"></canvas></td>
												<td class=\"VuCell\" style=\"width: 25px; text-align: center; vertical-align: top;\">
													<span class=\"VuValue\" style=\"\">3</span><br>
													<span class=\"VuValue\" style=\"\">0</span><br>
													<span class=\"VuValue\" style=\"\">-1</span><br>
													<span class=\"VuValue\" style=\"\">-3</span><br>
													<span class=\"VuValue\" style=\"\">-5</span><br>
													<span class=\"VuValue\" style=\"\">-7</span><br>
													<span class=\"VuValue\" style=\"\">-10</span><br>
													<span class=\"VuValue\" style=\"\">-20</span><br>
												</td>
												<td class=\"VuCell\" style=\"width: 16px;\"><canvas id=\"nVuSingleRight\" width=\"16\" height=\"120\" style=\"border: 0px solid #808080;\"></canvas></canvas></td>
												<td style=\"vertical-align: bottom;\" rowspan=\"3\"><canvas id=\"nSrCv2\" width=\"40\" height=\"135\" style=\"border: 0px solid #808080; margin: 0px auto;\"></canvas></td>
											</tr>
											<tr>
												<td class=\"VuCell\" style=\"text-align: center; margin-bottom: 5px; \">L</td>
												<td class=\"VuCell\"></td>
												<td class=\"VuCell\" style=\"text-align: center;\">R</td>
											</tr>
											<tr>
												<td colspan=\"3\" style=\"height: 0px;\"></td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td colspan=\"2\" style=\"height: 50px; vertical-align: center;\"><canvas id=\"nSrCv0\" width=\"144\" height=\"40\" style=\"border: 0px solid #808080;\"></canvas></td>
								</tr>
								<tr>
									<td colspan=\"2\">
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px;\">
											<tr>
												<td style=\"text-align: right;\"                            ><input type=\"button\" id=\"nMusicButton_AFLeft\"   class=\"nMusicButtonBlank\" style=\"width: 50px;\" value=\"A.Fade\" onclick=\"this.blur(); nMusic_djAutoFade('left');\"   title=\"Auto-Fade\"></td>
												<td style=\"text-align: center; height: 30px; width: 36px;\"><input type=\"button\" class=\"nMusicButtonBlank\"                              style=\"width: 20px;\" value=\"&uArr;\" onclick=\"this.blur(); nMusic_djAutoFade('center');\" title=\"Fader zentrieren\"></td>
												<td style=\"text-align: left;\"                             ><input type=\"button\" id=\"nMusicButton_AFRight\"  class=\"nMusicButtonBlank\" style=\"width: 50px;\" value=\"A.Fade\" onclick=\"this.blur(); nMusic_djAutoFade('right');\"  title=\"Auto-Fade\"></td>
											</tr>
										</table>
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px;\">
											<tr>
												<td style=\"text-align: right;\"                            ><input type=\"button\" id=\"nMusicButton_CutLeft\"  class=\"nMusicButtonBlank\" style=\"width: 30px;\" value=\"Cut\" onclick=\"this.blur(); nMusic_djCut(1, -1);\"  title=\"Linken Player vom Lautsprecherausgang trennen\"></td>
												<td style=\"text-align: center; width: 76px; height: 30px;\"><input type=\"button\" id=\"nMusicButton_Automix\"  class=\"nMusicButtonBlank\" style=\"width: 60px; margin-top: 4px; margin-bottom: 4px;\" value=\"Automix\" onclick=\"this.blur(); nMusic_djAutomix();\" title=\"Auto-Fade\"></td>
												<td style=\"text-align: left;\"                             ><input type=\"button\" id=\"nMusicButton_CutRight\" class=\"nMusicButtonBlank\" style=\"width: 30px;\" value=\"Cut\" onclick=\"this.blur(); nMusic_djCut(2, -1);\" title=\"Rechten Player vom Lautsprecherausgang trennen\"></td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td colspan=\"2\" style=\"height: 40px;\">
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px;\">
											<tr>
												<td style=\"text-align: center; vertical-align: bottom; font-size: 7pt; margin-bottom: 2px;\">
													<img id=\"nMpLed_LeftTime\"  src=\"src/led_aus.gif\" border=\"0\" width=\"12\" height=\"12\" hspace=\"2\"><br>Time<br><br>
													<img id=\"nMpLed_LeftClip\"  src=\"src/led_aus.gif\" border=\"0\" width=\"12\" height=\"12\" hspace=\"2\"><br>Clip
												</td>
												<td style=\"text-align: center; width: 64px;\">
													<canvas id=\"nDrCv0\" width=\"50\" height=\"50\" style=\"border: 0px solid #808080;\"></canvas><br><span style=\"font-size: 7pt;\">FADE-SPEED</span>
												</td>
												<td style=\"text-align: center; vertical-align: bottom; font-size: 7pt; padding-bottom: 2px;\">
													<img id=\"nMpLed_RightTime\" src=\"src/led_aus.gif\" border=\"0\" width=\"12\" height=\"12\" hspace=\"2\"><br>Time<br><br>
													<img id=\"nMpLed_RightClip\" src=\"src/led_aus.gif\" border=\"0\" width=\"12\" height=\"12\" hspace=\"2\"><br>Clip
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td colspan=\"2\">
										<hr style=\"color: #FFFFFF; background-color: #FFFFFF; width: 90%; height: 1px; border: none; margin-top: 5px; margin-bottom: 5px;\">
										<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin: 0px auto;\">
											<tr>
												<td><canvas id=\"nSsCv6\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(6, -1);\"></canvas></td>
												<td style=\"cursor: Help;\" title=\"Anzeige: Wellenform & BPM\">WAVE</td>
												<td><canvas id=\"nSsCv7\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(7, -1);\"></canvas></td>
											</tr>
											<tr>
												<td><canvas id=\"nSsCv0\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(0, -1);\"></canvas></td>
												<td style=\"cursor: Help;\" title=\"Anzeige: VU-Meter\">VU</td>
												<td><canvas id=\"nSsCv1\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(1, -1);\"></canvas></td>
											</tr>
											<tr>
												<td><canvas id=\"nSsCv2\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(2, -1);\"></canvas></td>
												<td style=\"cursor: Help;\" title=\"Anzeige: Oszilloskop\">OSZ</td>
												<td><canvas id=\"nSsCv3\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(3, -1);\"></canvas></td>
											</tr>
											<tr>
												<td><canvas id=\"nSsCv4\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(4, -1);\"></canvas></td>
												<td style=\"cursor: Help;\" title=\"Anzeige: Frequenzspektrum\">FREQ</td>
												<td><canvas id=\"nSsCv5\" width=\"50\" height=\"20\" style=\"border: 0px solid red;\" onclick=\"javascript:nSsCvSet(5, -1);\"></canvas></td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td class=\"mixerLine\" style=\"height: 105px;\">
							<audio id=\"djSound1\" src=\"src/sound_1_1.mp3\" preload loop></audio>
							<audio id=\"djSound2\" src=\"src/sound_1_2.mp3\" preload loop></audio>
							<audio id=\"djSound3\" src=\"src/sound_1_3.mp3\" preload loop></audio>
							<audio id=\"djSound4\" src=\"src/sound_1_4.mp3\" preload loop></audio>
							<table border=\"0\" style=\"width: 100%; border-spacing: 0px; margin: 0px auto;\">
								<tr>
									<td><canvas id=\"nDrCv1\" width=\"46\" height=\"42\" style=\"border: 0px solid #808080;\"></canvas><br><span style=\"font-size: 6pt;\">GAIN</span></td>
									<td style=\"width: 40px; text-align: center; vertical-align: bottom; font-size: 6pt;\">
										<input type=\"button\" id=\"nMusicButton_soundSet\"  class=\"nMusicButtonBlank\" style=\"width: 40px; margin-bottom: 21px;\" value=\"Set 1\" onclick=\"this.blur(); nMusic_djSoundSwitch();\" title=\"Weiteres Sound-Set laden\">
										<br>SAMPLES
									</td>
									<td><canvas id=\"nDrCv2\" width=\"46\" height=\"42\" style=\"border: 0px solid #808080;\"></canvas><br><span style=\"font-size: 6pt;\">PITCH</span></td>
								</tr>
								<tr>
									<td colspan=\"3\">
										<div style=\"color: #FFFFFF; width: 136px; height: 2px; border: 1px solid #FFFFFF; margin: 0px auto; margin-top: 3px; margin-bottom: 5px;\"><div id=\"soundTime\" style=\"width: 0px; height: 2px; background-color: #00FFFF;\"></div></div>
										<input type=\"button\" id=\"nMusicButton_sound1\" class=\"nMusicButtonSounds\" value=\"&#9654;\" onclick=\"this.blur();\" onmousedown=\"nMusic_djSound(1,1);\" onmouseup=\"nMusic_djSound(0,1);\" title=\"Halten zum Sound abspielen\">
										<input type=\"button\" id=\"nMusicButton_sound2\" class=\"nMusicButtonSounds\" value=\"&#9654;\" onclick=\"this.blur();\" onmousedown=\"nMusic_djSound(1,2);\" onmouseup=\"nMusic_djSound(0,2);\" title=\"Halten zum Sound abspielen\">
										<input type=\"button\" id=\"nMusicButton_sound3\" class=\"nMusicButtonSounds\" value=\"&#9654;\" onclick=\"this.blur();\" onmousedown=\"nMusic_djSound(1,3);\" onmouseup=\"nMusic_djSound(0,3);\" title=\"Halten zum Sound abspielen\">
										<input type=\"button\" id=\"nMusicButton_sound4\" class=\"nMusicButtonSounds\" value=\"&#9654;\" onclick=\"this.blur();\" onmousedown=\"nMusic_djSound(1,4);\" onmouseup=\"nMusic_djSound(0,4);\" title=\"Halten zum Sound abspielen\">
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
			<td style=\"background-color: #202020; width: 710px; height: 825px;\"><iframe name=\"deckRechts\" src=\"player.php?frame=2\" style=\"width: 710px; height: 835px; border: 0px solid blue;\"></iframe></td>
		</tr>
	</table>\n";
 } else
   {
	// Player direkt anzeigen
	// ======================

	echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"src/style.css\">
	<style type=\"text/css\">

		body { background-color: #202020; }

	</style>

	<script type=\"text/javascript\" src=\"playlists/playlistIndex.js\"></script>

	<script language=\"javascript\">

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

		//	console.log( 'Stunden: '+ nMzeit_stunden + '(Rest '+nMzeit_reststunden+') \\nMinuten: '+nMzeit_minuten+'\\nSekunden: '+nMzeit_sekunden );

			return nMzeit_zeitStr;
		}

		var nPlayerInFrame = "; echo ( isset($_GET['frame']) ) ? $_GET['frame'] : "0"; echo "; 

		// Alle Playlist-Dateien laden und Liste erstellen
		// ===============================================
		plvTable = '<table border=\"0\" style=\"border-spacing: 1px; color: #00FFFF; background-color: #000000; width: 100%; border: 0px solid #808080;\">';

		if( plData.length > 0 )
		{
			for( plwd in plData )
			{
				usePlId = plData[plwd]['id'];\n";

				if( ADMIN_LOGIN == "logout" ) { echo "if( plData[plwd]['user'] == 1 ) {"; }

					echo "usePlTime = nMusic_calcTime(plData[plwd]['zeiten'], 1);

					plvColor  = ( usePlId == plActive ) ? 'gold' : '#00FFFF';

					document.write( '<script type=\"text/javascript\" src=\"playlists/playlist'+usePlId+'.js\"><\/script>' );

					plvTable += '<tr id=\"plvLine_'+usePlId+'\"   style=\"cursor: pointer;\" onclick=\"plvSwitch('+usePlId+');\" onmouseover=\"plvLine('+usePlId+',1);\" onmouseout=\"plvLine('+usePlId+',0);\">';
					plvTable += '<td id=\"plvNumber_'+usePlId+'\" style=\"text-align: center; width: 30px; background-color: '+plvColor+'; color: #000000;\">'+usePlId+'</td>';
					plvTable += '<td                              style=\"text-align: center; width: 80px;\">'+usePlTime+'</td>';
					plvTable += '<td                              style=\"text-align: center; width: 70px;\">'+plData[plwd]['erstellt']+'</td>';
					plvTable += '<td                              style=\"text-align: center; width: 50px;\">'+plData[plwd]['tracks']+'</td>';
					plvTable += '<td                              style=\"text-align: left;\">&nbsp;'+plData[plwd]['titel']+'</td>';
					plvTable += '</tr>';\n";

				if( ADMIN_LOGIN == "logout" ) { echo "}"; }
			echo "}
		} else
		  {
			plvTable  += '<tr style=\"cursor: pointer;\" onclick=\"alert(\'Derzeit gibt es keine Playlisten!\');\">';
			plvTable  += '<td id=\"plNumber_'+pl+'\" style=\"text-align: center; width: 20px; background-color: #00FFFF; color: #000000;\">0</td>';
			plvTable  += '<td style=\"text-align: left;\" colspan=\"4\">&nbsp;Keine Audio-Dateien in der Playlist!</td>';
			plvTable  += '</tr>';
		  }

		plvTable  += '</table>';

	</script>

	<script type=\"text/javascript\" src=\"src/nSiteCache.js\"         ></script>
	<script type=\"text/javascript\" src=\"src/Config.js\"             ></script>
	<script type=\"text/javascript\" src=\"src/Player.js\"             ></script>
	<script type=\"text/javascript\" src=\"src/Display.js\"            ></script>
	<script type=\"text/javascript\" src=\"src/BPM.js\"                ></script>
	<script type=\"text/javascript\" src=\"src/DSP.js\"                ></script>
	<script type=\"text/javascript\" src=\"src/Analyser.js\"           ></script>
	<script type=\"text/javascript\" src=\"src/CanvasSchalter.js\"     ></script>
	<script type=\"text/javascript\" src=\"src/CanvasDrehRegler.js\"   ></script>
	<script type=\"text/javascript\" src=\"src/CanvasSchiebeRegler.js\"></script>
	<script type=\"text/javascript\" src=\"src/CanvasVUanalog.js\"     ></script>
	<script type=\"text/javascript\" src=\"src/Visualisation.js\"      ></script>
	<script type=\"text/javascript\" src=\"src/Demo.js\"               ></script>

	<script type=\"text/javascript\" src=\"playlists/radio.js\"        ></script>

	<table id=\"nMusicTable\" class=\"nMusicTable\" border=\"0\" ondrop=\"nLocalDrop(event);\" ondragover=\"nLocalDropAllow(event);\">
		<tr class=\"trLine\" id=\"nLineVisu\" style=\"display: none; visibility: hidden;\">
			<td colspan=\"4\">
				<div id=\"nPlayerVisu\" style=\"border: 0px solid #808080; background-color: #000000; text-align: center; width: 668px; height: 550px; z-index: 98;\">

					<canvas id=\"cvVisu\" width=\"650\" height=\"500\" style=\"border: 0px solid #808080; margin-bottom: 10px;\"></canvas><br>

					<div id=\"nVisuButtons\" style=\" margin-bottom: 15px; border: 0px;\">

						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_close\"    style=\"                   width: 25px;\"                         value=\"X\"          onclick=\"this.blur(); nMusic_visu();\"           title=\"Visualisierung beenden\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_full\"     style=\"                   width: 75px;\"                         value=\"Fullscreen\" onclick=\"this.blur(); nMusic_visuFullscreen();\" title=\"Vollbild-Modus\">

						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_run\"      style=\"margin-left: 10px; width: 50px;\"                         value=\"RUN\"        onclick=\"this.blur(); nAvSwitchRun();\"          title=\"Visualisierung pausieren\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_flat\"     style=\"                   width: 50px;\"                         value=\"FLAT\"       onclick=\"this.blur(); nAvSwitchFlat();\"         title=\"Daten blockieren\">

						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_ampDown\"  style=\"margin-left: 10px; width: 50px;\"                         value=\"AMP -\"      onclick=\"this.blur(); nAvAmplitude('-');\"       title=\"Amplitude verkleinern\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_ampVAlue\" style=\"                   width: 50px; border: 1px solid gold;\" value=\"0%\"         onclick=\"this.blur();\"                          title=\"Aktuelle Amplitude\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_ampUp\"    style=\"                   width: 50px;\"                         value=\"AMP +\"      onclick=\"this.blur(); nAvAmplitude('+');\"       title=\"Amplitude vergr&ouml;&szlig;ern\">

						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_prgDown\"  style=\"margin-left: 10px; width: 50px;\"                         value=\"PRG -\"      onclick=\"this.blur(); nAvSwitchPrg('-');\"       title=\"Programm zur&uuml;ck\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_prgUp\"    style=\"                   width: 50px;\"                         value=\"PRG +\"      onclick=\"this.blur(); nAvSwitchPrg('+');\"       title=\"Programm weiter\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_prgVAlue\" style=\"                   width: 70px; border: 1px solid gold;\" value=\"Waves\"      onclick=\"this.blur();\"                          title=\"Aktuelles Programm\">
						<input type=\"button\" class=\"nMusicButton\" id=\"nVisuButton_prgAuto\"  style=\"                   width: 50px;\"                         value=\"AUTO\"       onclick=\"this.blur(); nAvSwitchAuto();\"         title=\"Automatischer Programmwechsel nach jedem Track\">
					</div>
				</div>
			</td>
		</tr>\n";

		include('playerConfig.php');

		foreach( $nPlayerReihenfolge AS $einBlock )
		{
			$blockFile = $einBlock.".php";
			include($blockFile);
		}

	echo "</table>\n";
   }

?>