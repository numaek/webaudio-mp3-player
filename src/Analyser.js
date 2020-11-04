

	var nAmbiLightAlone  = 50;
	var nAmbiLightFrame  = 25;
	var nAmbiLightUse    = ( nPlayerInFrame != 0 ) ? nAmbiLightFrame : nAmbiLightAlone;

	var nVuRndRange      = 40;
	var nOszRndRange     = 50;

	var nFreqDelay       = 50;
	var nFreqRndRange    = 14;

	var nFreqPrePause    = 8;
	var nFreqPreWait     = 2;
	var nFreqPreLoops    = 0;

	var nFreqAnzeigen    = new Array('normal', 'peak', 'points', 'upside', 'rain', 'mirror', 'gap', 'horizont', 'bright');
	var nFreqAnzeige     = nFreqAnzeigen[0];

	var nFreqColors      = new Array('#00FFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#FFFFFF', '#000000');
	var nFreqColor       = nFreqColors[0];

	var nFreqRainbow     = new Array(24);

	    nFreqRainbow[0]  = new Array(255,  0,  0);
	    nFreqRainbow[1]  = new Array(255, 63,  0);
	    nFreqRainbow[2]  = new Array(255,127,  0);
	    nFreqRainbow[3]  = new Array(255,191,  0);
	    nFreqRainbow[4]  = new Array(255,255,  0);
	    nFreqRainbow[5]  = new Array(191,255,  0);
	    nFreqRainbow[6]  = new Array(127,255,  0);
	    nFreqRainbow[7]  = new Array( 63,255,  0);
	    nFreqRainbow[8]  = new Array(  0,255,  0);
	    nFreqRainbow[9]  = new Array(  0,255, 63);
	    nFreqRainbow[10] = new Array(  0,255,127);
	    nFreqRainbow[11] = new Array(  0,255,191);
	    nFreqRainbow[12] = new Array(  0,255,255);
	    nFreqRainbow[13] = new Array(  0,191,255);
	    nFreqRainbow[14] = new Array(  0,127,255);
	    nFreqRainbow[15] = new Array(  0, 63,255);
	    nFreqRainbow[16] = new Array(  0,  0,255);
	    nFreqRainbow[17] = new Array( 63,  0,255);
	    nFreqRainbow[18] = new Array(127,  0,255);
	    nFreqRainbow[19] = new Array(191,  0,255);
	    nFreqRainbow[20] = new Array(255,  0,255);
	    nFreqRainbow[21] = new Array(255,  0,191);
	    nFreqRainbow[22] = new Array(255,  0,127);
	    nFreqRainbow[23] = new Array(255,  0, 63);


	var audioCtx;
	var audioCtxFile;

	var nFreqOn          = 0;
	var nFreqIsAPI       = 0;
	var nFreqData        = new Array(24);
	var nFreqProz        = new Array(24);

	var nFreqPreHold     = new Array(24);
	var nFreqPreData     = new Array(24);

	var nFreqTimer;

	var nFreqAudioAudio;
	var nFreqAnalyser;
	var nFreqSource;
	var nFreqGainNode;
	var nFreqBufferLength;
	var nFreqDataArray;

	var nVuSplitter;
	var nVuAnaLeft;
	var nVuAnaRight;
	var nVuBufferLenLeft;
	var nVuBufferLenRight;
	var nVuDataArrLeft;
	var nVuDataArrRight;

	var nBalGainLeft;
	var nBalGainRight;

	var nEQ_32;
	var nEQ_64;
	var nEQ_125;
	var nEQ_250;
	var nEQ_500;
	var nEQ_1000;
	var nEQ_2000;
	var nEQ_4000;
	var nEQ_8000;
	var nEQ_16000;

	var nDelay;
	var nDelayAmount;
	var nPanner;

	var nIrGain;

	var nOscGain;
	var nOscWave = 'sine';

	var nMicroGain;
	var nVuAnaMicro;
	var nVuDataArrMicro;
	var nVuBufferLenMicro;
	var nVuDataArrMicro;

	var nTrLFO;
	var nTrGain;
	var nTrLfoGain;
	var nTrSumGain;

	var eqUserTimer;
	var nEqLine          = 0;

	var nOszArraySize    = 1024;

	var fileHeader       = [];
	var nWaveLength      = 0;
	var nWaveDuration    = 0;
	var nWaveSampleRate  = 0;

	var nWaveCvWidth     =  335;
	var nWaveCvHeight    =   50;

	var nWaveRendFac     = 1000;
	var nWaveChannel;

	var tempFileLoad     = 0;
	var tempFileBuffer;

	var nDecodeTimer;
	var nDecodeCounter   = 0;

	var nDRC;
	var nDRC_on          = 0;

	var nLoudLow;
	var nLoudHigh;
	var nLoud_on         = 0;

	var bpmAutoAnalyser;
	var pmAutoBufferLength;
	var bpmAutoDataArray;

	var nSync            = 0;
	var nSyncLoopCount   = 0;
	var nSyncData        = [];

	var nClipCount       = 0;
	var nClipCountLoops  = 0;

	var cue              = 0;

	var nLight           = 0;
	var nLightColor      = [0,0,0];

	var nApic            = [];
	    nApic['deg']     = 0;
	    nApic['rot']     = 1;


	// CANVAS ******************************************************************************************

	var nFreqCVconfig = new Array();

	    nFreqCVconfig['width']        = 250;
	    nFreqCVconfig['height']       = 100;
	    nFreqCVconfig['randLinks']    = 7;
	    nFreqCVconfig['randRechts']   = 5;
	    nFreqCVconfig['randOben']     = 5;
	    nFreqCVconfig['randUnten']    = 5;
	    nFreqCVconfig['balkenWidth']  = 7;
	    nFreqCVconfig['balkenHeight'] = 90;
	    nFreqCVconfig['balkenSpace']  = 3;

	var nVUwCVconfig = new Array();

	    nVUwCVconfig['width']        = 224;


	    nVUwCVconfig['height']       = 38;
	    nVUwCVconfig['randLinks']    = 15;
	    nVUwCVconfig['randRechts']   = 5;
	    nVUwCVconfig['randOben']     = 5;
	    nVUwCVconfig['randUnten']    = 5;
	    nVUwCVconfig['abstandMitte'] = 19;
	    nVUwCVconfig['balkenWidth']  = 10.7;
	    nVUwCVconfig['balkenHeight'] = 4;
	    nVUwCVconfig['balkenSpace']  = 2;

	// *************************************************************************************************


	peakHoldLeft          = 0;
	peakHoldRight         = 0;
	phLeftBlock           = 0;
	phRightBlock          = 0;
	peakHoldactive        = ( nPlayerInFrame != 0 ) ? 1 : 1;

	var anaSwitch         = [];
	    anaSwitch['vu']   = ( nPlayerInFrame != 0 ) ? 3 : 3;
	    anaSwitch['ana']  = 1;
	    anaSwitch['osz']  = 1;
	    anaSwitch['freq'] = 1;

	function anaDisplaySwitch(display)
	{
		// 0 = Pause, 1 = an, 2 = aus, 3 = PeakHold

		if( display == "vu" )
		{
			if( anaSwitch[display] == 1 )
			{
				anaSwitch[display] = 3;
				peakHoldactive     = 1;
			} else
			if( anaSwitch[display] == 3 )
			{
				anaSwitch[display] = 2;
				peakHoldactive     = 0;
			} else
			  {
				anaSwitch[display] = 1;
				peakHoldactive     = 0;
			  }
		} else
		  {
			if( anaSwitch[display] == 1 )
			{
				anaSwitch[display] = 2;
			} else
			  {
				anaSwitch[display] = 1;
			  }
		  }
	}

	function nApicSet(mode)
	{
		if( mode == -1 )
		{
			nApic['deg'] = 0;
			document.getElementById('nApic').style.transform  = 'rotate('+nApic['deg']+'deg)'; 
		} else
		if( mode == 1 )
		{
			nApic['rot'] = 1;
		} else
		  {
			nApic['rot'] = 0;
		  }
	}

	function nApicSwitch(mode, save)
	{
		if( mode == -1 )
		{
			if( document.getElementById('nApicImage').style.display == 'block' )
			{
				mode = 0;
			} else
			  {
				mode = 1;
			  }
		}

		// Falls Radio läuft
		if( nRadioActive != -1 || mode == 2 )
		{
				save = 0;

			//	document.getElementById('nApicImage').style.display      = 'block';
				document.getElementById('nApicImage').style.visibility   = 'visible';

				document.getElementById('nApic').src                     = 'src/note.png';
			//	document.getElementById('nApic').style.border            = '2px solid #00FFFF';
		} else
		  {
			if( mode == 1 )
			{
			//	document.getElementById('nApicImage').style.display      = 'block';
				document.getElementById('nApicImage').style.visibility   = 'visible';
			} else
			  {
			//	document.getElementById('nApicImage').style.display      = 'none';
				document.getElementById('nApicImage').style.visibility   = 'hidden';
			  }

		//	document.getElementById('nApic').style.border                    = '0px';
		  }

		if( save == 1 )
		{
			nPlayerCache.save('apic', mode);
		}
	}


	function nFreqSwitch()
	{
		if( nFreqOn == 1 )
		{
			nFreqOn = 0;
			clearTimeout(nFreqTimer);
		} else
		  {
			nFreqOn    = 1;
			nFreqTimer = window.setTimeout("nFreqRun()", (nFreqDelay*2));
		  }
	}


	function nFreqRun()
	{
		if( audio.paused == false || nOsc == 1 || nMicro_on == 1 )
		{
			if( nFreqIsAPI == 1 )
			{
				// Input aus WebAudio-API
				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


				// Spektrumanalysator
				// ==================
				nFreqDelayNow = nFreqDelay;

				if( nMusicVisu == 0 && anaSwitch['freq'] == 1 && ( document.getElementById('nLineEq').style.visibility == 'visible' || nDisplaySource == 'freq' ) )
				{
					nFreqAnalyser.getByteFrequencyData(nFreqDataArray);

					// Werte in Schleife gleichmäßig verteilen
					// ---------------------------------------
					aLength       = nFreqDataArray.length;
					aStep         = aLength / 24;
					nFreqProz[0]  = nFreqDataArray[0] / 255 * 100;

					for( ai = 1; ai < 23; ai++ )
					{
						indexAna      = Math.round( aStep + ( aStep * ai ) );
						nFreqProz[ai] = nFreqDataArray[indexAna] / 255 * 100;
					}
					nFreqProz[23] = nFreqDataArray[(aLength-1)] / 255 * 100;
				}


				// VU-Meter
				// ========
				if( 1 == 1 )
				{
					// Daten werden immer benötigt
					 nVuAnaLeft.getByteTimeDomainData(nVuDataArrLeft);
					nVuAnaRight.getByteTimeDomainData(nVuDataArrRight);

					// Linker Kanal
					// -------------
					nVuSumLeft  = 0;
					nVuPeakLeft = 0;
					for( cL = 0; cL < nVuDataArrLeft.length; cL++ )
					{
						betrag      = ( nVuDataArrLeft[cL] >= 128 ) ? ( nVuDataArrLeft[cL] - 128 ) : ( 128 - nVuDataArrLeft[cL] );
						nVuSumLeft += betrag;
						if( betrag  > nVuPeakLeft )
						{
							nVuPeakLeft = betrag;
						}
					}
					nVuMwLeft   =   nVuSumLeft  / ( nVuDataArrLeft.length * 128 ) * 100;
					nVuPeakLeft =   nVuPeakLeft / 128 * 100;
					nVuAvgLeft  =   nVuPeakLeft;
					nVuAvgLeft  = ( nVuAvgLeft  <   0 ) ?   0 : nVuAvgLeft;
					nVuAvgLeft  = ( nVuAvgLeft  > 100 ) ? 100 : nVuAvgLeft;

					// Rechter Kanal
					// -------------
					nVuSumRight  = 0;
					nVuPeakRight = 0;
					for( cR = 0; cR < nVuDataArrRight.length; cR++ )
					{
						betrag      = ( nVuDataArrRight[cR] >= 128 ) ? ( nVuDataArrRight[cR] - 128 ) : ( 128 - nVuDataArrRight[cR] );
						nVuSumRight += betrag;
						if( betrag   > nVuPeakRight )
						{
							nVuPeakRight = betrag;
						}
					}
					nVuMwRight   =   nVuSumRight  / ( nVuDataArrRight.length * 128 ) * 100;
					nVuPeakRight =   nVuPeakRight / 128 * 100;
					nVuAvgRight  =   nVuPeakRight;
					nVuAvgRight  = ( nVuAvgRight  <   0 ) ?   0 : nVuAvgRight;
					nVuAvgRight  = ( nVuAvgRight  > 100 ) ? 100 : nVuAvgRight;

					// Summierter Kanal
					// ----------------
					nVuAvgCommon = Math.round( ( nVuAvgLeft + nVuAvgRight ) / 2 );
				}

				if( nMusicVisu == 0 && ( anaSwitch['vu'] == 1 || anaSwitch['vu'] == 3 ) )
				{
					// Übersteuerungs-LED
					// ------------------
					if( 1 == 1 )
					{
						if( nVuAvgLeft == 100 || nVuAvgRight == 100 )
						{
							nClipCount++;
						}
						nClipCountLoops++;
						if( nClipCountLoops >= 10 )
						{
							if( nClipCount > 3 )
							{
								oszLedAn();
							}
							nClipCount      = 0;
							nClipCountLoops = 0;
						}
					}
				}


				// Oszilloskop
				// ===========
				if( nMusicVisu == 0 && anaSwitch['osz'] == 1 && ( document.getElementById('nLinePl').style.visibility == 'visible' || nDisplaySource == 'osz' ) )
				{
					nFreqAnalyser.getByteTimeDomainData(nOszDataArray);
				}
			} else
			  {
				// Input aus zufallszahlen
				// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


				// Spektrumanalysator
				// ==================
				nFreqDelayNow = nFreqDelay * 2;

				if( nMusicVisu == 0 && anaSwitch['freq'] == 1 && ( document.getElementById('nLineEq').style.visibility == 'visible' || nDisplaySource == 'freq' ) )
				{
					offset        = 1;

					nFreqProz[0]  = offset + 80 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[1]  = offset + 77 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[2]  = offset + 74 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[3]  = offset + 71 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[4]  = offset + 68 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[5]  = offset + 65 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[6]  = offset + 62 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[7]  = offset + 59 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[8]  = offset + 56 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[9]  = offset + 53 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[10] = offset + 50 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[11] = offset + 54 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[12] = offset + 58 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[13] = offset + 62 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[14] = offset + 66 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[15] = offset + 64 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[16] = offset + 56 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[17] = offset + 52 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[18] = offset + 46 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[19] = offset + 40 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[20] = offset + 34 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[21] = offset + 28 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[22] = offset + 20 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
					nFreqProz[23] = offset + 15 - ( nFreqRndRange / 2 ) + Math.floor( ( Math.random() * nFreqRndRange ) + 1 );
				}


				// VU-Meter
				// ========
				if( 1 == 1 )
				{
					nVuRndBasis = document.getElementById('audio1').volume * 100;

					// Linker Kanal
					// ------------
					nVuAvgLeft  = nVuRndBasis   - ( nVuRndRange / 2 ) + Math.floor( ( Math.random() * nVuRndRange ) + 1 ) - 25;
					nVuAvgLeft  = ( nVuAvgLeft  <   0 ) ?   0 : nVuAvgLeft;
					nVuAvgLeft  = ( nVuAvgLeft  > 100 ) ? 100 : nVuAvgLeft;

					// Rechter Kanal
					// -------------
					nVuAvgRight = nVuRndBasis   - ( nVuRndRange / 2 ) + Math.floor( ( Math.random() * nVuRndRange ) + 1 ) - 25;
					nVuAvgRight = ( nVuAvgRight <   0 ) ?   0 : nVuAvgRight;
					nVuAvgRight = ( nVuAvgRight > 100 ) ? 100 : nVuAvgRight;

					// Summierter Kanal
					// ----------------
					nVuAvgCommon = Math.round( ( nVuAvgLeft + nVuAvgRight ) / 2 );
				}


				// Oszilloskop
				// ===========
				if( nMusicVisu == 0 && anaSwitch['osz'] == 1 && ( document.getElementById('nLinePl').style.visibility == 'visible' || nDisplaySource == 'osz' ) )
				{
					nOszRndRange = 20 * Math.floor( ( Math.random() * 10 ) + 1 );
					for( z = 0; z < nOszArraySize; z++ )
					{
						nOszDataArray[z] = 128 - ( nOszRndRange / 2 ) + Math.floor( ( Math.random() * nOszRndRange ) + 1 );
					}
				}
			  }


			// Prozente in Balkenlängen umrechnen
			// ==================================
			for( c = 0; c < 24; c++ )
			{
				ledProz      = nFreqProz[c];
				ledProz      = ( ledProz <   0 ) ?   0 : ledProz;
				ledProz      = ( ledProz > 100 ) ? 100 : ledProz;
			}


			// Takt-Lauflichtposition für Mischpult-Synchronisation berechnen
			// --------------------------------------------------------------
			nextBeat = 0;
			if( nSync == 1 )
			{
				if( typeof(nSyncData['beats']) !== 'undefined' )
				{
					if( audio.currentTime < ( nSyncData['beats'][nSyncData['indexBuffer']] - nSyncData['durPerBeat'] ) )
					{
						nSyncData['indexBuffer'] = 0;
					}

					for(  si = 0; si < ( nSyncData['beatsPerTrack'] - 1 ); si++ )
					{
						if( audio.currentTime > nSyncData['beats'][si] && si > nSyncData['indexBuffer'] )
						{
							if( ( audio.currentTime - nSyncData['beats'][si] ) < nSyncData['durPerBeat'] )
							{
								nextBeat                 = 1;
								nSyncData['indexBuffer'] = si;
								break;
							}
						}
					}

					if( nextBeat == 1 )
					{
						nSyncData['position'] = ( nSyncData['position'] >= 4 ) ? 1 : nSyncData['position'] + 1;
					}
				}
			}


			// Wenn Spektrumanalysator gezeigt werden soll
			// ===========================================
			if( nMusicVisu == 0 && ( anaSwitch['freq'] == 1 || anaSwitch['freq'] == 2 ) )
			{
				if(  anaSwitch['freq'] == 2 )
				{
					for( spn = 0; spn < nFreqProz.length; spn++ )
					{
						nFreqProz[spn] = 0;
					}
					anaSwitch['freq'] = 0;
				}

				// Schalterstellung aus Mixer
				// --------------------------
				nPlShowFreq = 1;
				if( nPlayerInFrame == 1 )
				{
					if( top.nSsCv[4]['stellung'] == 0 )
					{
						nPlShowFreq = 0;
					}
				}
				if( nPlayerInFrame == 2 )
				{
					if( top.nSsCv[5]['stellung'] == 0 )
					{
						nPlShowFreq = 0;
					}
				}

				// ##### CANVAS #####
				var nCVFreqID = document.getElementById('nFreqCanvas');
				if( nCVFreqID.getContext && ( document.getElementById('nLineEq').style.visibility == 'visible' || nDisplaySource == 'freq' ) )
				{
					nCVFreq           = nCVFreqID.getContext('2d');
					nCVFreqData       = new Array(24);

					nCVFreq.fillStyle = '#000000';
					nCVFreq.clearRect(0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);
					nCVFreq.fillRect( 0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);

					var grd = nCVFreq.createLinearGradient(0,0,0,nFreqCVconfig['balkenHeight']);
					    grd.addColorStop(0,     'rgb('+nFreqRainbow[0][0] +','+nFreqRainbow[0][1] +','+nFreqRainbow[0][2]+')');
					    grd.addColorStop(0.042, 'rgb('+nFreqRainbow[1][0] +','+nFreqRainbow[1][1] +','+nFreqRainbow[1][2]+')');
					    grd.addColorStop(0.084, 'rgb('+nFreqRainbow[2][0] +','+nFreqRainbow[2][1] +','+nFreqRainbow[2][2]+')');
					    grd.addColorStop(0.126, 'rgb('+nFreqRainbow[3][0] +','+nFreqRainbow[3][1] +','+nFreqRainbow[3][2]+')');
					    grd.addColorStop(0.168, 'rgb('+nFreqRainbow[4][0] +','+nFreqRainbow[4][1] +','+nFreqRainbow[4][2]+')');
					    grd.addColorStop(0.210, 'rgb('+nFreqRainbow[5][0] +','+nFreqRainbow[5][1] +','+nFreqRainbow[5][2]+')');
					    grd.addColorStop(0.252, 'rgb('+nFreqRainbow[6][0] +','+nFreqRainbow[6][1] +','+nFreqRainbow[6][2]+')');
					    grd.addColorStop(0.294, 'rgb('+nFreqRainbow[7][0] +','+nFreqRainbow[7][1] +','+nFreqRainbow[7][2]+')');
					    grd.addColorStop(0.336, 'rgb('+nFreqRainbow[8][0] +','+nFreqRainbow[8][1] +','+nFreqRainbow[8][2]+')');
					    grd.addColorStop(0.378, 'rgb('+nFreqRainbow[9][0] +','+nFreqRainbow[9][1] +','+nFreqRainbow[9][2]+')');
					    grd.addColorStop(0.420, 'rgb('+nFreqRainbow[10][0]+','+nFreqRainbow[10][1]+','+nFreqRainbow[10][2]+')');
					    grd.addColorStop(0.462, 'rgb('+nFreqRainbow[11][0]+','+nFreqRainbow[11][1]+','+nFreqRainbow[11][2]+')');
					    grd.addColorStop(0.504, 'rgb('+nFreqRainbow[12][0]+','+nFreqRainbow[12][1]+','+nFreqRainbow[12][2]+')');
					    grd.addColorStop(0.546, 'rgb('+nFreqRainbow[13][0]+','+nFreqRainbow[13][1]+','+nFreqRainbow[13][2]+')');
					    grd.addColorStop(0.588, 'rgb('+nFreqRainbow[14][0]+','+nFreqRainbow[14][1]+','+nFreqRainbow[14][2]+')');
					    grd.addColorStop(0.630, 'rgb('+nFreqRainbow[15][0]+','+nFreqRainbow[15][1]+','+nFreqRainbow[15][2]+')');
					    grd.addColorStop(0.672, 'rgb('+nFreqRainbow[16][0]+','+nFreqRainbow[16][1]+','+nFreqRainbow[16][2]+')');
					    grd.addColorStop(0.714, 'rgb('+nFreqRainbow[17][0]+','+nFreqRainbow[17][1]+','+nFreqRainbow[17][2]+')');
					    grd.addColorStop(0.756, 'rgb('+nFreqRainbow[18][0]+','+nFreqRainbow[18][1]+','+nFreqRainbow[18][2]+')');
					    grd.addColorStop(0.798, 'rgb('+nFreqRainbow[19][0]+','+nFreqRainbow[19][1]+','+nFreqRainbow[19][2]+')');
					    grd.addColorStop(0.840, 'rgb('+nFreqRainbow[20][0]+','+nFreqRainbow[20][1]+','+nFreqRainbow[20][2]+')');
					    grd.addColorStop(0.882, 'rgb('+nFreqRainbow[21][0]+','+nFreqRainbow[21][1]+','+nFreqRainbow[21][2]+')');
					    grd.addColorStop(0.924, 'rgb('+nFreqRainbow[22][0]+','+nFreqRainbow[22][1]+','+nFreqRainbow[22][2]+')');
					    grd.addColorStop(1,     'rgb('+nFreqRainbow[23][0]+','+nFreqRainbow[23][1]+','+nFreqRainbow[23][2]+')');

					for( h = 0; h < 24; h++ )
					{
						nCVFreq.fillStyle = '#303030';
						nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'], nFreqCVconfig['balkenWidth'], nFreqCVconfig['balkenHeight']);

						if( nPlShowFreq == 1 )
						{
							if( nFreqColor == '#FFFFFF' )
							{
								nCVFreq.fillStyle = 'rgb('+nFreqRainbow[h][0]+','+nFreqRainbow[h][1]+','+nFreqRainbow[h][2]+')';
							} else
							if( nFreqColor == '#000000' )
							{
								nCVFreq.fillStyle = grd;
							} else
							  {
								nCVFreq.fillStyle = nFreqColor;
							  }

							// Balkenhöhe in %
							cvProz            = nFreqProz[h];
							cvProz            = ( cvProz <   0 ) ?   0 : cvProz;
							cvProz            = ( cvProz > 100 ) ? 100 : cvProz;
							nCVFreqData[h]    = nFreqCVconfig['balkenHeight'] * cvProz / 100;

							if( nCVFreqData[h] >= nFreqPreData[h] )
							{
								// Aktualwert größer als letzter => kein sichtbarer Peak (hochschieben)
								nFreqPreData[h] = nCVFreqData[h];

								// Haltepunkt aktivieren
								nFreqPreHold[h] = nFreqPrePause;
							} else
							  {
								// Aktualwert kleiner als letzter => sichtbarer Peak
								if( nFreqPreLoops == 0 )
								{
									if( nFreqPreHold[h] == 0 )
									{
										// Alle x Loops ein Etage absenken, wenn Haltezeit abgelaufen ist
										nFreqPreData[h] = ( nFreqAnzeige == 'rain' ) ? nFreqPreData[h] + 3 : nFreqPreData[h] - 3;
										nFreqPreData[h] = ( nFreqPreData[h] < 3 ) ? 0 : nFreqPreData[h];
									}

									// Haltezeiten ablaufen lassen
									nFreqPreHold[h] -= 1;
									nFreqPreHold[h]  = ( nFreqPreHold[h] < 0 ) ? 0 : nFreqPreHold[h];
								}
							  }

							// Peaks ausblenden wenn Anzeige abgeschaltet
							if( anaSwitch['freq'] == 2 )
							{
								nFreqPreHold[h] = 0;
								nFreqPreData[h] = 0;
							}
							if( anaSwitch['freq'] == 1 )
							{
								// Peaks steigend anzeigen
								if( nFreqAnzeige == 'peak' && nFreqPreData[h] > 3 )
								{
									nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'] + ( nFreqCVconfig['balkenHeight'] - nFreqPreData[h] ), nFreqCVconfig['balkenWidth'], 3);
								}

								// Peaks fallend anzeigen
								if( nFreqAnzeige == 'rain' )
								{
									nFreqPreData[h] = ( nFreqPreData[h] > ( nFreqCVconfig['balkenHeight'] - 3 ) ) ? 0 : nFreqPreData[h];
									if( nFreqPreData[h] > 3 )
									{
										nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'] + nFreqPreData[h], nFreqCVconfig['balkenWidth'], 3);
									}
								}
							}

							// Peaks alleine anzeigen
							if( nFreqAnzeige == 'points' && nCVFreqData[h] > 3 )
							{
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'] + ( nFreqCVconfig['balkenHeight'] - nCVFreqData[h]  ), nFreqCVconfig['balkenWidth'], 3);
							}

							// Balken anzeigen
							if( nFreqAnzeige == 'peak'   || nFreqAnzeige == 'normal' )
							{
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'] + ( nFreqCVconfig['balkenHeight'] - nCVFreqData[h]  ), nFreqCVconfig['balkenWidth'], nCVFreqData[h]);
							}

							// Balken von oben
							if( nFreqAnzeige == 'upside' || nFreqAnzeige == 'rain' )
							{
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'], nFreqCVconfig['balkenWidth'], nCVFreqData[h]);
							}

							// Balken von der Mitte
							if( nFreqAnzeige == 'mirror' )
							{
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ),   nFreqCVconfig['randOben'] + ( ( nFreqCVconfig['balkenHeight'] / 2 ) - ( nCVFreqData[h] / 2 )  ), nFreqCVconfig['balkenWidth'], nCVFreqData[h] / 2);
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), ( nFreqCVconfig['randOben'] + (   nFreqCVconfig['balkenHeight'] / 2 ) ),                           nFreqCVconfig['balkenWidth'], nCVFreqData[h] / 2);
							}

							// Balken Zur Mitte
							if( nFreqAnzeige == 'gap' )
							{
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben']   + (   nFreqCVconfig['balkenHeight'] -       ( nCVFreqData[h] / 2 )  ), nFreqCVconfig['balkenWidth'], nCVFreqData[h] / 2);
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'],                                                                         nFreqCVconfig['balkenWidth'], nCVFreqData[h] / 2);
							}

							// Balken waagerecht
							if( nFreqAnzeige == 'horizont' )
							{
								nCVFreqData[h]    = nFreqCVconfig['balkenWidth'] * cvProz / 100;
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'], ( nFreqCVconfig['balkenWidth'] * cvProz / 100 ), nFreqCVconfig['balkenHeight']);
							}

							// Balken per Helligkeit
							if( nFreqAnzeige == 'bright' )
							{
								if( nFreqColor == '#FFFFFF' || nFreqColor == '#000000' )
								{
									inRGB_r   = 48 + ( cvProz * 2 );
									inRGB_g   = 48 + ( cvProz * 2 );
									inRGB_b   = 48 + ( cvProz * 2 );
								} else
								  {
									inRGB_r   = ( nFreqColor.substr(1,2) == 'FF' ) ? ( 48 + ( cvProz * 2 ) ) : 0;
									inRGB_g   = ( nFreqColor.substr(3,2) == 'FF' ) ? ( 48 + ( cvProz * 2 ) ) : 0;
									inRGB_b   = ( nFreqColor.substr(5,2) == 'FF' ) ? ( 48 + ( cvProz * 2 ) ) : 0;
								  }
								nCVFreq.fillStyle = 'rgb('+inRGB_r+','+inRGB_g+','+inRGB_b+')';
								nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'], nFreqCVconfig['balkenWidth'], nFreqCVconfig['balkenHeight']);
							}
						}
					}

					if( nFreqPreLoops >= ( nFreqPreWait - 1 ) )
					{
						nFreqPreLoops = 0;
					} else
					  {
						nFreqPreLoops++;
					  }

					// EQ-Linie
					// if( nEqLine == 1 || ( nSrCvDrag >= 3 && nSrCvDrag <= 12 ) )

					if( nEqLine == 1 )
					{
						nCVFreq.lineWidth   = 1;
						nCVFreq.strokeStyle = '#00FF00';
						nCVFreq.beginPath();
						nCVFreq.moveTo(  0, 50);
						nCVFreq.lineTo(250, 50);
						nCVFreq.stroke();
						nCVFreq.closePath();

						nCVFreq.lineWidth   = 2;
						nCVFreq.strokeStyle = '#FF0000';
						nCVFreq.beginPath();
						nCVFreq.moveTo(nFreqCVconfig['randLinks'], 50);
						for( eq = 3; eq < 13; eq++ )
						{
							x = ( eq - 2 ) * ( 250 / 11 );
							nCVFreq.lineTo( x, 100 - nSrCv[eq]['prozente']);
						}
						nCVFreq.lineTo(250-nFreqCVconfig['randRechts'], 50);
						nCVFreq.stroke();
						nCVFreq.closePath();
					}

					// Canvas kopieren
					if( nDisplaySource == 'freq' )
					{
						destCtx = document.getElementById('canvasCopy').getContext('2d');
						destCtx.drawImage(nCVFreqID, 0, 0, 250, 100, 0, 0, 380, 180);

						if( 1 == 1 )
						{
							// Streifen-Effekt
							destCtx.lineWidth   = 1;
							destCtx.strokeStyle = '#000000';
							for( l = 0; l <= 45; l++ )
							{
								destCtx.beginPath();
								destCtx.moveTo(   0, ( l * 4 ) );
								destCtx.lineTo( 380, ( l * 4 ) );
								destCtx.stroke();
								destCtx.closePath();
							}
						}
					}
				}
			}


			// Wenn VU-Meter gezeigt werden soll
			// =================================
			if( nMusicVisu == 0 && anaSwitch['vu'] > 0 )
			{
				if( anaSwitch['vu'] == 2 )
				{
					peakHoldLeft    = 0;
					phLeftBlock     = 0;
					peakHoldRight   = 0;
					phRightBlock    = 0;
					phReset         = 1;

					nVuAvgLeft      = -1;
					nVuAvgRight     = -1;
					anaSwitch['vu'] = 0;
				} else
				  {
					phReset         = 0;
				  }

				// Schalterstellung aus Mixer
				// --------------------------
				if( nPlayerInFrame == 1 )
				{
					if( top.nSsCv[0]['stellung'] == 0 )
					{
						nVuAvgLeft  = 0;
						nVuAvgRight = 0;
						phReset     = 1;
					}
				}
				if( nPlayerInFrame == 2 )
				{
					if( top.nSsCv[1]['stellung'] == 0 )
					{
						nVuAvgLeft  = 0;
						nVuAvgRight = 0;
						phReset     = 1;
					}
				}

				// Peak-hold
				// ---------
				if( peakHoldactive == 1 )
				{
					if( nVuAvgLeft > peakHoldLeft )
					{
						peakHoldLeft = nVuAvgLeft;
						phLeftBlock  = 15;
					} else
					  {
						phLeftBlock--;
						if( phLeftBlock < 0 )
						{
							peakHoldLeft = 0;
							phLeftBlock  = 0;
						}
					  }

					if( nVuAvgRight > peakHoldRight )
					{
						peakHoldRight = nVuAvgRight;
						phRightBlock  = 15;
					} else
					  {
						phRightBlock--;
						if( phRightBlock < 0 )
						{
							peakHoldRight = 0;
							phRightBlock  = 0;
						}
					  }
				} else
				  {
					peakHoldLeft  = 0;
					phLeftBlock   = 0;
					peakHoldRight = 0;
					phRightBlock  = 0;
				  }


				// ##### CANVAS #####
				var nCVFreq = document.getElementById('nVUCanvas');
				if( nCVFreq.getContext )
				{
					nCVFreq           = nCVFreq.getContext('2d');
					nCVFreq.fillStyle = '#000000';
					nCVFreq.clearRect(0, 0, nVUwCVconfig['width'], nVUwCVconfig['height']);
					nCVFreq.fillRect( 0, 0, nVUwCVconfig['width'], nVUwCVconfig['height']);

					nCVFreq.font      = 'normal 10px Arial,sans-serif';
					nCVFreq.fillStyle = nPlayerColor;
					nCVFreq.fillText('L', 4, 11);
					nCVFreq.fillText('R', 4, 33);

					nCVFreq.font      = 'normal 9px Arial,sans-serif';

					thisHeight = 22;
					nCVFreq.fillText('-30',  15, thisHeight);
					nCVFreq.fillText('-20',  37, thisHeight);
					nCVFreq.fillText('-10',  60, thisHeight);
					nCVFreq.fillText('-7',   85, thisHeight);
					nCVFreq.fillText('-5',  105, thisHeight);
					nCVFreq.fillText('-3',  125, thisHeight);
					nCVFreq.fillText('-2',  144, thisHeight);
					nCVFreq.fillText('-1',  157, thisHeight);
					nCVFreq.fillText('0',   171, thisHeight);
					nCVFreq.fillText('+1',  180, thisHeight);
					nCVFreq.fillText('+2',  193, thisHeight);
					nCVFreq.fillText('+3',  206, thisHeight);

					if( 1 == 2 )
					{
						// Nur bis zur ersten roten
						valueBase = 7.50;
					} else
					  {
						// Alle 16 LED's
						valueBase = 6.25;
					  }

					for( h = 0; h < 16; h++ )
					{
						myValue    =    h    *              valueBase;
						myRangeMin =    h    * ( 100 / (100/valueBase) );
						myRangeMax = ( (h+1) * ( 100 / (100/valueBase) ) ) - 0.5;

						// Linker Kanal
						// ------------
						if( nVuAvgLeft > myValue || ( peakHoldactive == 1 && phReset == 0 && peakHoldLeft >= myRangeMin && peakHoldLeft < myRangeMax ) )
						{
							if( ( nVuAvgLeft > ( valueBase * 13 ) || peakHoldLeft > ( valueBase * 13 ) ) && h > 12 )
							{
								nCVFreq.fillStyle = '#FF0000';
							} else
							if( ( nVuAvgLeft > ( valueBase * 10 ) || peakHoldLeft > ( valueBase * 10 ) ) && h >  9 )
							{
								nCVFreq.fillStyle = '#FFFF00';
							} else
							  {
								nCVFreq.fillStyle = '#00FF00';
							  }
						} else
						  {
							//	nCVFreq.fillStyle = '#303030';
							if( h > 12 )
							{
								nCVFreq.fillStyle = '#300000';
							} else
							if( h > 9 )
							{
								nCVFreq.fillStyle = '#303000';
							} else
							  {
								nCVFreq.fillStyle = '#003000';
							  }
						  }
						nCVFreq.fillRect( nVUwCVconfig['randLinks'] + ( h * ( nVUwCVconfig['balkenWidth'] + nVUwCVconfig['balkenSpace'] ) ),   nVUwCVconfig['randOben'],                                                            nVUwCVconfig['balkenWidth'], nVUwCVconfig['balkenHeight']);

						// Rechter Kanal
						// -------------
						if( nVuAvgRight > myValue || ( peakHoldactive == 1 && phReset == 0 && peakHoldRight >= myRangeMin && peakHoldRight < myRangeMax ) )
						{
							if( ( nVuAvgRight > ( valueBase * 13 ) || peakHoldRight > ( valueBase * 13 ) ) && h > 12 )
							{
								nCVFreq.fillStyle = '#FF0000';
							} else
							if( ( nVuAvgRight > ( valueBase * 10 ) || peakHoldRight > ( valueBase * 10 ) ) && h >  9 )
							{
								nCVFreq.fillStyle = '#FFFF00';
							} else
							  {
								nCVFreq.fillStyle = '#00FF00';
							  }
						} else
						  {
							//	nCVFreq.fillStyle = '#303030';
							if( h > 12 )
							{
								nCVFreq.fillStyle = '#300000';
							} else
							if( h > 9 )
							{
								nCVFreq.fillStyle = '#303000';
							} else
							  {
								nCVFreq.fillStyle = '#003000';
							  }
						  }
						nCVFreq.fillRect( nVUwCVconfig['randLinks'] + ( h * ( nVUwCVconfig['balkenWidth'] + nVUwCVconfig['balkenSpace'] ) ), ( nVUwCVconfig['randOben']+nVUwCVconfig['balkenHeight']+nVUwCVconfig['abstandMitte'] ), nVUwCVconfig['balkenWidth'], nVUwCVconfig['balkenHeight']);
					}


					// Takt anzeigen
					// -------------
					showBeatLed = '#303030';
					if( nSync  == 1 )
					{
						if( nextBeat == 1 )
						{
							nSyncLoopCount = 2;
						} else
						  {
							if( nSyncLoopCount > 0 )
							{
								nSyncLoopCount--;
							}
						  }
						if( nSyncLoopCount > 0 )
						{
							//	showBeatLed = '#FF0000';
							if( nPlayerInFrame == 1 )
							{
								showBeatLed = '#00FF00';
							} else
							if( nPlayerInFrame == 2 )
							{
								showBeatLed = '#FF0000';
							} else
							  {
								showBeatLed = '#00FFFF';
							  }
						}
					}
					nCVFreq.strokeStyle = showBeatLed;
					nCVFreq.fillStyle   = showBeatLed;
					nCVFreq.beginPath();
					nCVFreq.arc(7, 19, 3, 0, (2*Math.PI), true);
					nCVFreq.stroke(); nCVFreq.fill(); nCVFreq.closePath();
				}
			}


			// ##### CANVAS VU ANALOG #####
			// ============================
			if( nMusicVisu == 0 && anaSwitch['ana'] == 1 && ( document.getElementById('nLineWave').style.visibility == 'visible' || nDisplaySource == 'vu' ) )
			{
				nVuValLeft  = nVuAvgLeft;
				nVuValRight = nVuAvgRight;
			} else
			  {
				nVuValLeft  = 0;
				nVuValRight = 0;
			  }
			nVuAnadraw('VUleft',  nVuValLeft,  'l');
			nVuAnadraw('VUright', nVuValRight, 'r');


			// ##### CANVAS OSZILLOSKOP #####
			// ==============================
			if( nMusicVisu == 0 && ( anaSwitch['osz'] == 1 || anaSwitch['osz'] == 2 ) )
			{
				if(  anaSwitch['osz'] == 2 )
				{
					for( spn = 0; spn < nOszArraySize; spn++ )
					{
						nOszDataArray[spn] = 128;
					}
					anaSwitch['osz'] = 0;
				}

				var nCVFreqID = document.getElementById('nOszCanvas');
				if( nCVFreqID.getContext && ( document.getElementById('nLinePl').style.visibility == 'visible' || nDisplaySource == 'osz' ) )
				{
					nCVFreq           = nCVFreqID.getContext('2d');
					nCVFreq.fillStyle = '#000000';
					nCVFreq.clearRect(0, 0, nFreqCVconfig['width']+10, nFreqCVconfig['height']+10);
					nCVFreq.fillRect( 0, 0, nFreqCVconfig['width'],    nFreqCVconfig['height']);

					// Rastergitter
					nCVFreq.strokeStyle = '#505050';
					nCVFreq.strokeRect( 0, 0, nFreqCVconfig['width'],    nFreqCVconfig['height']);
					nCVFreq.beginPath();

					nCVFreq.moveTo(0,                      16);
					nCVFreq.lineTo(nFreqCVconfig['width'], 16);
					nCVFreq.moveTo(0,                      33);
					nCVFreq.lineTo(nFreqCVconfig['width'], 33);
					nCVFreq.moveTo(0,                      50);
					nCVFreq.lineTo(nFreqCVconfig['width'], 50);
					nCVFreq.moveTo(0,                      67);
					nCVFreq.lineTo(nFreqCVconfig['width'], 67);
					nCVFreq.moveTo(0,                      84);
					nCVFreq.lineTo(nFreqCVconfig['width'], 84);

					for( vl = 1; vl < 16; vl ++)
					{
						nextX = ( 16 * vl ) - 3;
						nCVFreq.moveTo(nextX, 0);
						nCVFreq.lineTo(nextX, nFreqCVconfig['height']);
					}
					nCVFreq.stroke();
					nCVFreq.closePath();

					// ID3-Daten
					// ---------
					if( nRadioActive == -1 && nLocalActive == 0 )
					{
						nCVFreq.font      = 'normal 20px Arial,sans-serif';
						nCVFreq.fillStyle = '#006666';
						if( ID3_kBits != 0 )
						{
							nCVFreq.fillText(ID3_kBits+' kBit/s', 89, 33);
						}
						if( ID3_SR != 0 )
						{
							nCVFreq.fillText(ID3_SR+' Hz',        86, 83);
						}
					}

					// Schalterstellung aus Mixer
					// --------------------------
					nPlShowOsz = 1;
					if( nPlayerInFrame == 1 )
					{
						if( top.nSsCv[2]['stellung'] == 0 )
						{
							nPlShowOsz = 0;
						}
					}
					if( nPlayerInFrame == 2 )
					{
						if( top.nSsCv[3]['stellung'] == 0 )
						{
							nPlShowOsz = 0;
						}
					}
					if( nPlShowOsz == 1 )
					{
						if( nFreqColor == '#FFFFFF' || nFreqColor == '#000000' )
						{
							nCVFreq.strokeStyle = '#FFFFFF';
						} else
						  {
							nCVFreq.strokeStyle = nFreqColor;
						  }

						var sliceWidth = nFreqCVconfig['width'] * 1.0 / nOszArraySize;
						var x = 0;

						nCVFreq.beginPath();

						for( var i = 0; i < nOszArraySize; i++ )
						{
							var v = nOszDataArray[i] / 128.0;
							var y = v * nFreqCVconfig['height'] / 2;

							if( i === 0 )
							{
								nCVFreq.moveTo(x, y);
							} else
							  {
								nCVFreq.lineTo(x, y);
							  }

							x += sliceWidth;
						}

					//	nCVFreq.lineTo(nFreqCVconfig['width'], nFreqCVconfig['height'] / 2);

						nCVFreq.stroke();
						nCVFreq.closePath();
					}

					// Canvas kopieren
					if( nDisplaySource == 'osz' )
					{
						destCtx = document.getElementById('canvasCopy').getContext('2d');
						destCtx.drawImage(nCVFreqID, 0, 0, 250, 100, 0, 0, 380, 180);
					}
				}
			}


			// ***** WAVEFORM *****
			// ====================
			if( nFreqIsAPI == 1 )
			{
				// Schalterstellung aus Mixer
				// --------------------------
				nPlShowWave = 1;
				if( nPlayerInFrame == 1 ) { if( top.nSsCv[6]['stellung'] == 0 ) { nPlShowWave = 0; } }
				if( nPlayerInFrame == 2 ) { if( top.nSsCv[7]['stellung'] == 0 ) { nPlShowWave = 0; } }
				if( nPlShowWave == 1 && nWaveFormLoaded == 1 && nRadioActive == -1 && document.getElementById('nLineWave').style.visibility == 'visible')
				{
					nWvPos = audio.currentTime / audio.duration * ( nWaveCvWidth - 4 );
					document.getElementById('nCVwavePos').style.marginLeft = nWvPos + 'px';

					nWvPos = audio.currentTime / audio.duration * 16000;
					document.getElementById('nCVwaveBig').style.marginLeft = 50 + -nWvPos + 'px';
				} else
				  {
					document.getElementById('nCVwavePos').style.marginLeft =  0 + 'px';
					document.getElementById('nCVwaveBig').style.marginLeft = 50 + 'px';
				  }
			}


			// Track-Display verschieben
			// =========================
			if( nDemoActive == 0 )
			{
				if( nDispTRKstop == 0 )
				{
					if( nDispTRKwidth > 385 )
					{
						if( nDispTRKrun == 0 )
						{
							nDispTRKtimer = window.setTimeout('nMusicDisplayMove()', nDispTRKpause);
							nDispTRKrun   = -1;
						}

						if( nDispTRKrun >= 1 )
						{
							    nDispTRKcount -= nDispTRKspeed;

							if( nDispTRKcount <= 0 && nDispTRKrun == 2 )
							{
								nDispTRKcount = 0;
								nDispTRKrun   = 0;
							}

							if( nDispTRKcount <= -( nDispTRKwidth + 25 ) )
							{
								nDispTRKcount = 390;
								nDispTRKrun   = 2;
							}

							document.getElementById('nDisplayTrack').style.marginLeft = nDispTRKcount + 'px';
						}
					} else
					  {
						nDispTRKcount = 0;
						nDispTRKrun   = 0;
						clearTimeout(nDispTRKtimer);
					  }
				}
			}


			// Wenn AmbiLight gezeigt werden soll
			// ==================================
			if( nLight > 0 )
			{
				if( nLight == 1 )
				{
					// Dauerlicht
					ambiDez   = 255;
					ambiAlpha =   1;
				} else
				  {
					// Lichtorgel
					ambiProz  = Math.round( nVuAvgLeft + nVuAvgRight / 2 );
					ambiProz  = ( ambiProz > 100 ) ? 100 : ambiProz;
					ambiDez   = 55 + ( ambiProz * 2 );
					ambiHex   = ambiDez.toString(16);
					ambiAlpha = ambiProz * 0.01;
					ambiAlpha = ( ambiAlpha < 0.2 ) ? 0.2 : ambiAlpha;
				  }

				   document.getElementById('nMusicTable').style.boxShadow = '0px 0px '+nAmbiLightUse+'px rgb('+nLightColor[0]+','+nLightColor[1]+','+nLightColor[2]+','+ambiAlpha+')';
				// document.getElementById('nMusicTable').style.boxShadow = '0px 0px '+nAmbiLightUse+'px rgb(0,255,255,'+ambiAlpha+')';
				// document.getElementById('nMusicTable').style.boxShadow = '0px 0px '+nAmbiLightUse+'px rgb(0,'+ambiDez+','+ambiDez+')';
			} else
			  {
				   document.getElementById('nMusicTable').style.boxShadow = '';
			  }


			// BPM Aktualwert aus Analyser ermitteln
			// =====================================
			if( nFreqIsAPI == 1 )
			{
				if( nSsCv[0]['stellung'] == 1 )
				{
					bpmAutoAnalyser.getByteTimeDomainData(bpmAutoDataArray);
					bpmAutoValue = 0;
					for( cL = 0; cL < bpmAutoDataArray.length; cL++ )
					{
						    bmpProz = ( nVuDataArrLeft[cL] >= 128 ) ? ( nVuDataArrLeft[cL] - 128 ) : ( 128 - nVuDataArrLeft[cL] );
						    bmpProz = bmpProz / 128;
						if( bmpProz > bpmAutoValue )
						{
							bpmAutoValue = bmpProz;
						}
					}
					if( bpmAutoValue > ( bmpDetection['config']['level'] * document.getElementById('audio1').volume ) )
					{
						maxMS = Math.round( 1000 / ( bmpDetection['config']['max'] / 60 ) );
						if( ( Date.now() - nBpmLastTime ) > maxMS )
						{
							   bpm();
						}
					}
				}
			}
			// Anzeige wieder mit dem gescannten Wert beschreiben
			if( bpmReset > 0 )
			{
				if(  bpmReset < ( Date.now() - 3000 ) )
				{
					bpmReset = 0;
					document.getElementById('bpmValue').innerHTML = ( bmpDetection['data']['value'] == -1 ) ? '- - -' : Math.round(bmpDetection['data']['value']);
				}
			}


			// Cover-Bild rotieren
			// ===================
			if( nApic['rot'] == 1 )
			{
				if( nSrCv[1]['prozente'] < 50 )
				{
					rotSpeed = 0.5 + (   nSrCv[1]['prozente'] * 0.01 );
				} else
				  {
					rotSpeed = 1   + ( ( nSrCv[1]['prozente'] - 50 ) * 0.02 );
				  }
				nApic['deg'] += ( 1 * rotSpeed );
				nApic['deg']  = ( nApic['deg'] > 360 ) ? 0 : nApic['deg'];
				document.getElementById('nApic').style.transform = 'rotate('+nApic['deg']+'deg)'; 
			}


			// ##### CANVAS Micro VU-Meter #####
			// =================================
			if( nFreqIsAPI == 1 )
			{
				if( nMicro_on == 1 )
				{
					nVuAnaMicro.getByteTimeDomainData(nVuDataArrMicro);

					nVuSumMicro  = 0;
					nVuPeakMicro = 0;
					for( cL = 0; cL < nVuDataArrMicro.length; cL++ )
					{
						betrag      = ( nVuDataArrMicro[cL] >= 128 ) ? ( nVuDataArrMicro[cL] - 128 ) : ( 128 - nVuDataArrMicro[cL] );
						nVuSumMicro += betrag;
						if( betrag  > nVuPeakMicro )
						{
							nVuPeakMicro = betrag;
						}
					}
					nVuMwMicro   =   nVuSumMicro  / ( nVuDataArrMicro.length * 128 ) * 100;
					nVuPeakMicro =   nVuPeakMicro / 128 * 100;
					nVuAvgMicro  = Math.round( nVuPeakMicro );
					nVuAvgMicro  = ( nVuAvgMicro  <   0 ) ?   0 : nVuAvgMicro;
					nVuAvgMicro  = ( nVuAvgMicro  > 100 ) ? 100 : nVuAvgMicro;

					var nCVMicro = document.getElementById('nMicroVU');
					if( nCVMicro.getContext )
					{
						nCVMicro           = nCVMicro.getContext('2d');

						nCVMicroWidth      = 12;
						nCVMicroHeight     = 50;

						nCVMicro.fillStyle = '#000000';
						nCVMicro.clearRect(0, 0, nCVMicroWidth, nCVMicroHeight);
						nCVMicro.fillRect( 0, 0, nCVMicroWidth, nCVMicroHeight);
						nCVMicro.fillStyle = '#00FFFF';

						microBalken = Math.round( nCVMicroHeight * nVuAvgMicro / 100 );
						nCVMicro.fillRect( 0, ( nCVMicroHeight - microBalken ), nCVMicroWidth, microBalken );
					}

					// Aufnahme
					if( mrActive == 1 )
					{
						mrSecView = mrSeconds + Math.floor( ( Date.now() - mrTimeBuffer ) / 1000 );
						if( mrSecView > 9 )
						{
							mrSecView = 999;
							mrRun(0);
							document.getElementById('nMusicButton_mrRec').value = 'REC';

							alert('Die maximale Aufnahme-Dauer wurde erreicht!');
						} else
						  {
							mrSecText = mrSecView.toString();
							if( mrSecText.length == 1 )
							{
								mrSecText = '00'+mrSecView;
							} else 
							if(mrSecText.length == 2 )
							{
								mrSecText =  '0'+mrSecView;
							}
							document.getElementById('nMusicButton_mrRec').value = mrSecText;
						  }
					} else
					  {
						document.getElementById('nMusicButton_mrRec').value = 'REC';
					  }
				}
			}
		} else
		  {
			clearTimeout(nFreqTimer);
			nFreqClearCanvas();
		  }

		nFreqDelayNow = ( nFreqIsAPI == 1 ) ? nFreqDelay : ( nFreqDelay * 2 );
		nFreqTimer    = window.setTimeout("nFreqRun()", nFreqDelayNow);
	}

	function nFreqClearCanvas()
	{
		if( 1 == 1 )
		{
			if( 1 == 1 )
			{
				var nCVFreq = document.getElementById('nFreqCanvas');
				if( nCVFreq.getContext )
				{
					nCVFreq           = nCVFreq.getContext('2d');

					nCVFreq.fillStyle = '#000000';
					nCVFreq.clearRect(0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);
					nCVFreq.fillRect( 0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);

					for( h = 0; h < 24; h++ )
					{
						nCVFreq.fillStyle = '#303030';
						nCVFreq.fillRect(nFreqCVconfig['randLinks'] + ( h * ( nFreqCVconfig['balkenWidth'] + nFreqCVconfig['balkenSpace'] ) ), nFreqCVconfig['randOben'], nFreqCVconfig['balkenWidth'], nFreqCVconfig['balkenHeight']);
					}
				}
			}

			if( 1 == 1 )
			{
				var nCVFreq = document.getElementById('nVUCanvas');
				if( nCVFreq.getContext )
				{
					nCVFreq           = nCVFreq.getContext('2d');

					nCVFreq.fillStyle = '#000000';
					nCVFreq.clearRect(0, 0, nVUwCVconfig['width'], nVUwCVconfig['height']);
					nCVFreq.fillRect( 0, 0, nVUwCVconfig['width'], nVUwCVconfig['height']);

					nCVFreq.font      = 'normal 10px Arial,sans-serif';
					nCVFreq.fillStyle = nPlayerColor;
					nCVFreq.fillText('L', 4, 11);
					nCVFreq.fillText('R', 4, 33);

					nCVFreq.font      = 'normal 9px Arial,sans-serif';

					thisHeight = 22;
					nCVFreq.fillText('-30',  15, thisHeight);
					nCVFreq.fillText('-20',  37, thisHeight);
					nCVFreq.fillText('-10',  60, thisHeight);
					nCVFreq.fillText('-7',   85, thisHeight);
					nCVFreq.fillText('-5',  105, thisHeight);
					nCVFreq.fillText('-3',  125, thisHeight);
					nCVFreq.fillText('-2',  144, thisHeight);
					nCVFreq.fillText('-1',  157, thisHeight);
					nCVFreq.fillText('0',   171, thisHeight);
					nCVFreq.fillText('+1',  180, thisHeight);
					nCVFreq.fillText('+2',  193, thisHeight);
					nCVFreq.fillText('+3',  206, thisHeight);

					for( h = 0; h < 16; h++ )
					{
						myValue = 6.25 * h;
						//	nCVFreq.fillStyle = '#303030';
						if( h > 12 )
						{
							nCVFreq.fillStyle = '#300000';
						} else
						if( h > 9 )
						{
							nCVFreq.fillStyle = '#303000';
						} else
						  {
							nCVFreq.fillStyle = '#003000';
						  }
						nCVFreq.fillRect( nVUwCVconfig['randLinks'] + ( h * ( nVUwCVconfig['balkenWidth'] + nVUwCVconfig['balkenSpace'] ) ),   nVUwCVconfig['randOben'],                                                            nVUwCVconfig['balkenWidth'], nVUwCVconfig['balkenHeight']);
						nCVFreq.fillRect( nVUwCVconfig['randLinks'] + ( h * ( nVUwCVconfig['balkenWidth'] + nVUwCVconfig['balkenSpace'] ) ), ( nVUwCVconfig['randOben']+nVUwCVconfig['balkenHeight']+nVUwCVconfig['abstandMitte'] ), nVUwCVconfig['balkenWidth'], nVUwCVconfig['balkenHeight']);
					}

					nCVFreq.fillStyle = '#303030';
					nCVFreq.beginPath();
					nCVFreq.arc(7, 19, 3, 0, (2*Math.PI), true);
					nCVFreq.stroke(); nCVFreq.fill(); nCVFreq.closePath();
				}
			}

			if( 1 == 1 )
			{
				var nCVFreq = document.getElementById('nOszCanvas');
				if( nCVFreq.getContext )
				{
					nCVFreq           = nCVFreq.getContext('2d');

					nCVFreq.fillStyle = '#000000';
					nCVFreq.clearRect(0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);
					nCVFreq.fillRect( 0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);

					// Rastergitter
					nCVFreq.strokeStyle = '#505050';
					nCVFreq.beginPath();
					nCVFreq.moveTo(0,                      16);
					nCVFreq.lineTo(nFreqCVconfig['width'], 16);
					nCVFreq.moveTo(0,                      33);
					nCVFreq.lineTo(nFreqCVconfig['width'], 33);
					nCVFreq.stroke();
					nCVFreq.closePath();

					nCVFreq.strokeStyle = nPlayerColor;
					nCVFreq.beginPath();
					nCVFreq.moveTo(0,                      50);
					nCVFreq.lineTo(nFreqCVconfig['width'], 50);
					nCVFreq.stroke();
					nCVFreq.closePath();

					nCVFreq.strokeStyle = '#505050';
					nCVFreq.moveTo(0,                      67);
					nCVFreq.lineTo(nFreqCVconfig['width'], 67);
					nCVFreq.moveTo(0,                      84);
					nCVFreq.lineTo(nFreqCVconfig['width'], 84);

					// ID3-Daten
					// ---------
					if( nRadioActive == -1 && nLocalActive == 0 )
					{
						nCVFreq.font      = 'normal 20px Arial,sans-serif';
						nCVFreq.fillStyle = '#006666';
						if( ID3_kBits != 0 )
						{
							nCVFreq.fillText(ID3_kBits+' kBit/s', 89, 33);
						}
						if( ID3_SR != 0 )
						{
							nCVFreq.fillText(ID3_SR+' Hz',        86, 83);
						}
					}

					for( vl = 1; vl < 16; vl ++)
					{
						nextX = ( 16 * vl ) - 3;
						nCVFreq.moveTo(nextX, 0);
						nCVFreq.lineTo(nextX, nFreqCVconfig['height']);
					}
					nCVFreq.stroke();
					nCVFreq.closePath();
				}
			}

			if( 1 == 1 )
			{
				nVuAnadraw('VUleft',  0, 'l');
				nVuAnadraw('VUright', 0, 'r');
			}
		} else
		  {
			var resetCV;

			resetCV = document.getElementById('nFreqCanvas');
			resetCV = resetCV.getContext('2d');
			resetCV.clearRect(0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);

			resetCV = document.getElementById('nVUCanvas');
			resetCV = resetCV.getContext('2d');
			resetCV.clearRect(0, 0, nVUwCVconfig['width'], nVUwCVconfig['height']);

			resetCV = document.getElementById('nOszCanvas');
			resetCV = resetCV.getContext('2d');
			resetCV.clearRect(0, 0, nFreqCVconfig['width'], nFreqCVconfig['height']);
		  }
	}

	function nFreqViewMode()
	{
		viewPos      = nFreqAnzeigen.indexOf(nFreqAnzeige);
		nFreqAnzeige = ( viewPos < ( nFreqAnzeigen.length -1 ) ) ? nFreqAnzeigen[(viewPos+1)] : nFreqAnzeigen[0];
		document.getElementById('nFreqModeText').innerHTML = nFreqAnzeige;
	}

	function nFreqColorMode()
	{
		viewPos      = nFreqColors.indexOf(nFreqColor);
		nFreqColor = ( viewPos < ( nFreqColors.length -1 ) ) ? nFreqColors[(viewPos+1)] : nFreqColors[0];
		document.getElementById('nFreqColorText').style.backgroundColor = nFreqColor;
	}

	function nFreqEQLine()
	{
		if( nEqLine ==  1 )
		{
			nEqLine = 0;
			document.getElementById('nMusicButton_eqLine').style.color = '#FFFFFF';
		} else
		  {
			nEqLine = 1;
			document.getElementById('nMusicButton_eqLine').style.color = nPlayerColor;
		  }
	}

	function nFreqInit()
	{
		try
		{
			nFreqIsAPI      = 1;
			audioCtx        = new ( window.AudioContext || window.webkitAudioContext )()
			nFreqAudio      = document.getElementById('audio1');

			// Balance, Spektrumanalysator & VU-Meter
			// ======================================

			nFreqSource     = audioCtx.createMediaElementSource(nFreqAudio);
			nVuSplitter     = audioCtx.createChannelSplitter(2);
			nVuMerger       = audioCtx.createChannelMerger(2);

			nEQ_32          = audioCtx.createBiquadFilter();
			nEQ_64          = audioCtx.createBiquadFilter();
			nEQ_125         = audioCtx.createBiquadFilter();
			nEQ_250         = audioCtx.createBiquadFilter();
			nEQ_500         = audioCtx.createBiquadFilter();
			nEQ_1000        = audioCtx.createBiquadFilter();
			nEQ_2000        = audioCtx.createBiquadFilter();
			nEQ_4000        = audioCtx.createBiquadFilter();
			nEQ_8000        = audioCtx.createBiquadFilter();
			nEQ_16000       = audioCtx.createBiquadFilter();

			nLoudLow        = audioCtx.createBiquadFilter();
			nLoudHigh       = audioCtx.createBiquadFilter();

			bpmAutoLowpass  = audioCtx.createBiquadFilter();
			bpmAutoAnalyser = audioCtx.createAnalyser();

			nEqPreGain      = audioCtx.createGain();
			nBalGainLeft    = audioCtx.createGain();
			nBalGainRight   = audioCtx.createGain();

			nFreqAnalyser   = audioCtx.createAnalyser();
			nVuAnaLeft      = audioCtx.createAnalyser();
			nVuAnaRight     = audioCtx.createAnalyser();

			nDelay          = audioCtx.createDelay();
			nDelayAmount    = audioCtx.createGain();

			nPanner         = audioCtx.createStereoPanner();

			nDRC            = audioCtx.createDynamicsCompressor();

			nIrGain         = audioCtx.createGain();

			nOscGain        = audioCtx.createGain();
			nOsc_Sine       = audioCtx.createOscillator();
			nOsc_Square     = audioCtx.createOscillator();
			nOsc_Triangle   = audioCtx.createOscillator();
			nOsc_Sawtooth   = audioCtx.createOscillator();

			nSBGain         = audioCtx.createGain();
			nSBDelay        = audioCtx.createDelay();

			nPPSplitter     = audioCtx.createChannelSplitter(2);
			nPPMerger       = audioCtx.createChannelMerger(2);
			nPPlDelay       = audioCtx.createDelay();
			nPPrDelay       = audioCtx.createDelay();
			nPPlGain        = audioCtx.createGain();
			nPPrGain        = audioCtx.createGain();

			nTrLFO          = audioCtx.createOscillator();
			nTrLfoGain      = audioCtx.createGain();
			nTrGain         = audioCtx.createGain();
			nTrSumGain      = audioCtx.createGain();

			nChorusDelay    = audioCtx.createDelay();

			nMsDelayLeft    = audioCtx.createDelay();
			nMsDelayRight   = audioCtx.createDelay();

			    nOsc_Sine.connect(nOscGain);

			  nFreqSource.connect(bpmAutoLowpass);
		       bpmAutoLowpass.connect(bpmAutoAnalyser);

			  nFreqSource.connect(nEqPreGain);

			   nEqPreGain.connect(nEQ_32);
			       nEQ_32.connect(nEQ_64);
			       nEQ_64.connect(nEQ_125);
			      nEQ_125.connect(nEQ_250);
			      nEQ_250.connect(nEQ_500);
			      nEQ_500.connect(nEQ_1000);
			     nEQ_1000.connect(nEQ_2000);
			     nEQ_2000.connect(nEQ_4000);
			     nEQ_4000.connect(nEQ_8000);
			     nEQ_8000.connect(nEQ_16000);
			    nEQ_16000.connect(nVuSplitter);

			    nEQ_16000.connect(nTrGain);
			       nTrLFO.connect(nTrLfoGain);
			   nTrLfoGain.connect(nTrGain.gain);
			   nTrSumGain.connect(nVuSplitter);

			  nVuSplitter.connect(nBalGainLeft,  0);
			  nVuSplitter.connect(nBalGainRight, 1);

			 nBalGainLeft.connect(nVuAnaLeft);
			nBalGainRight.connect(nVuAnaRight);

			 nBalGainLeft.connect(nMsDelayLeft);
			nBalGainRight.connect(nMsDelayRight);

			 nMsDelayLeft.connect(nVuMerger, 0, 0);
			nMsDelayRight.connect(nVuMerger, 0, 1);

			    nVuMerger.connect(nFreqAnalyser);
			      nIrGain.connect(nFreqAnalyser);

			  nFreqSource.connect(nSBDelay);
			     nSBDelay.connect(nSBGain);

			  nPPSplitter.connect(nPPlDelay, 0);
			    nPPlDelay.connect(nPPlGain);
			     nPPlGain.connect(nPPMerger, 0, 0);
			     nPPlGain.connect(nPPlDelay);
			     nPPlGain.connect(nPPrDelay);
			  nPPSplitter.connect(nPPrDelay, 1);
			    nPPrDelay.connect(nPPrGain);
			     nPPrGain.connect(nPPMerger, 0, 1);
			     nPPrGain.connect(nPPrDelay);
			     nPPrGain.connect(nPPlDelay);

			nFreqAnalyser.connect(nDelay);
			       nDelay.connect(nDelayAmount);
			 nDelayAmount.connect(nDelay);

			 nDelayAmount.connect(nPanner);
			nFreqAnalyser.connect(nPanner);
			      nPanner.connect(nChorusDelay);
			      nPanner.connect(audioCtx.destination);

			   nEQ_32.type = "peaking";
			   nEQ_64.type = "peaking";
			  nEQ_125.type = "peaking";
			  nEQ_250.type = "peaking";
			  nEQ_500.type = "peaking";
			 nEQ_1000.type = "peaking";
			 nEQ_2000.type = "peaking";
			 nEQ_4000.type = "peaking";
			 nEQ_8000.type = "peaking";
			nEQ_16000.type = "peaking";

		   bpmAutoLowpass.type = "lowpass";
		   bpmAutoLowpass.frequency.setValueAtTime(bmpDetection['config']['freq'], audioCtx.currentTime);

			   nEQ_32.frequency.setValueAtTime(32,    audioCtx.currentTime);
			   nEQ_64.frequency.setValueAtTime(64,    audioCtx.currentTime);
			  nEQ_125.frequency.setValueAtTime(125,   audioCtx.currentTime);
			  nEQ_250.frequency.setValueAtTime(250,   audioCtx.currentTime);
			  nEQ_500.frequency.setValueAtTime(500,   audioCtx.currentTime);
			 nEQ_1000.frequency.setValueAtTime(1000,  audioCtx.currentTime);
			 nEQ_2000.frequency.setValueAtTime(2000,  audioCtx.currentTime);
			 nEQ_4000.frequency.setValueAtTime(4000,  audioCtx.currentTime);
			 nEQ_8000.frequency.setValueAtTime(8000,  audioCtx.currentTime);
			nEQ_16000.frequency.setValueAtTime(16000, audioCtx.currentTime);

			   nEQ_32.Q.setValueAtTime(1, audioCtx.currentTime);
			   nEQ_64.Q.setValueAtTime(1, audioCtx.currentTime);
			  nEQ_125.Q.setValueAtTime(1, audioCtx.currentTime);
			  nEQ_250.Q.setValueAtTime(1, audioCtx.currentTime);
			  nEQ_500.Q.setValueAtTime(1, audioCtx.currentTime);
			 nEQ_1000.Q.setValueAtTime(1, audioCtx.currentTime);
			 nEQ_2000.Q.setValueAtTime(1, audioCtx.currentTime);
			 nEQ_4000.Q.setValueAtTime(1, audioCtx.currentTime);
			 nEQ_8000.Q.setValueAtTime(1, audioCtx.currentTime);
			nEQ_16000.Q.setValueAtTime(1, audioCtx.currentTime);

			 nLoudLow.type = "peaking";
			nLoudHigh.type = "peaking";
			 nLoudLow.frequency.setValueAtTime(  80, audioCtx.currentTime);
			nLoudHigh.frequency.setValueAtTime(8000, audioCtx.currentTime);
			 nLoudLow.Q.setValueAtTime(1,            audioCtx.currentTime);
			nLoudHigh.Q.setValueAtTime(1,            audioCtx.currentTime);
			 nLoudLow.gain.setValueAtTime( 5,        audioCtx.currentTime);
			nLoudHigh.gain.setValueAtTime( 5,        audioCtx.currentTime);

			nFreqAnalyser.fftSize = 1024;
			nFreqBufferLength     = nFreqAnalyser.frequencyBinCount;
			nOszArraySize         = nFreqBufferLength;
			nOszDataArray         = new Uint8Array(nOszArraySize);
			nFreqDataArray        = new Uint8Array(nFreqBufferLength);

			 nVuAnaLeft.fftSize   = 32;
			nVuAnaRight.fftSize   = 32;

			nVuBufferLenLeft      = nVuAnaLeft.frequencyBinCount;
			nVuBufferLenRight     = nVuAnaRight.frequencyBinCount;

			nVuDataArrLeft        = new Uint8Array(nVuBufferLenLeft);
			nVuDataArrRight       = new Uint8Array(nVuBufferLenRight);

		      bpmAutoAnalyser.fftSize = 32;
		      bpmAutoBufferLength     = bpmAutoAnalyser.frequencyBinCount;
		      bpmAutoDataArray        = new Uint8Array(bpmAutoBufferLength);

			 nDelay.delayTime.setValueAtTime(0.0, audioCtx.currentTime);
			nDelayAmount.gain.setValueAtTime(0.5, audioCtx.currentTime);

			nDRC.threshold.setValueAtTime(-50,    audioCtx.currentTime);
			    nDRC.ratio.setValueAtTime( 12,    audioCtx.currentTime);
			     nDRC.knee.setValueAtTime( 40,    audioCtx.currentTime);
			   nDRC.attack.setValueAtTime(  0,    audioCtx.currentTime);
			  nDRC.release.setValueAtTime(  0.25, audioCtx.currentTime);

			  nIrGain.gain.setValueAtTime(0.8,    audioCtx.currentTime);

			 nOscGain.gain.setValueAtTime(0.5,    audioCtx.currentTime);

			    nOsc_Sine.frequency.setValueAtTime(500, audioCtx.currentTime);
			  nOsc_Square.frequency.setValueAtTime(500, audioCtx.currentTime);
			nOsc_Triangle.frequency.setValueAtTime(500, audioCtx.currentTime);
			nOsc_Sawtooth.frequency.setValueAtTime(500, audioCtx.currentTime);

			    nOsc_Sine.type = 'sine';
			  nOsc_Square.type = 'square';
			nOsc_Triangle.type = 'triangle';
			nOsc_Sawtooth.type = 'sawtooth';

			       nSBGain.gain.setValueAtTime(0.5,  audioCtx.currentTime);
			 nSBDelay.delayTime.setValueAtTime(0.08, audioCtx.currentTime);

			nPPlDelay.delayTime.setValueAtTime(0.3,  audioCtx.currentTime);
			nPPrDelay.delayTime.setValueAtTime(0.3,  audioCtx.currentTime);
			      nPPlGain.gain.setValueAtTime(0.4,  audioCtx.currentTime);
			      nPPrGain.gain.setValueAtTime(0.4,  audioCtx.currentTime);

			   nTrLFO.frequency.setValueAtTime(4,    audioCtx.currentTime);
			    nTrLfoGain.gain.setValueAtTime(0.8,  audioCtx.currentTime);	// Schwingungshöhe
			    nTrSumGain.gain.setValueAtTime(0.4,  audioCtx.currentTime);	// Summe

			  nChorusDelay.delayTime.setValueAtTime(0.03, audioCtx.currentTime);

			  nMsDelayLeft.delayTime.setValueAtTime(0.0,  audioCtx.currentTime);
			 nMsDelayRight.delayTime.setValueAtTime(0.0,  audioCtx.currentTime);

		} catch(e)
		  {
			nFreqIsAPI    = 0;
			nOszArraySize = 200;
			nOszDataArray = new Uint8Array(nOszArraySize);

			// alert('Dieser Browser unterstuetzt leider nicht alle Audio-Funktionen');

			console.log(e);
		  }

		for( pv = 0; pv < 24; pv++ )
		{
			nFreqPreData[pv] = 0;
		}

		document.getElementById('ledApi').src = ( nFreqIsAPI == 1 ) ? 'src/led_gruen.gif' : 'src/led_rot.gif';

		nFreqClearCanvas();
		nFreqSwitch();
	}

	/* Ladefunktionen ================================================================================================================================================ */

	function nDecodeShowReset()
	{
		nDecodeCounter = 0;
	}

	function nDecodeShowMove()
	{
		if( nDecodeCounter < 50 )
		{
			nDecodeCounter++;
			document.getElementById('waveLoad2').style.height    =        nDecodeCounter   + 'px';
			document.getElementById('waveLoad2').style.marginTop = ( 50 - nDecodeCounter ) + 'px';
		}
	}

	function nMusicFileLoad(url)
	{
		// Schalterstellung aus Mixer
		// --------------------------
		    nPlShowWave    =  1;
		if( nPlayerInFrame == 1 ) { if( top.nSsCv[6]['stellung'] == 0 ) { nPlShowWave = 0; } }
		if( nPlayerInFrame == 2 ) { if( top.nSsCv[7]['stellung'] == 0 ) { nPlShowWave = 0; } }
		if( nPlShowWave    == 1 )
		{
			// Wenn die BPM noch fehlen, dann erst auslesen
			if( nMusicPL[currentNumber]['bpm'] == 0 )
			{
				nMusicFileLoadNow(url);
			} else
			  {
				var xhttp = new XMLHttpRequest();
				if( xhttp )
				{
					xhttpContent = 'mode=waveCheck&name='+encodeURIComponent(nMusicPL[currentNumber]['datei']);
					xhttp.onload = function(e)
					{
						if( xhttp.readyState == 4 && xhttp.status == 200 )
						{
							if( xhttp.responseText != 'ERROR' )
							{
								// Daten aus Cache anzeigen, Ladebalken sofort füllen
								// --------------------------------------------------

								nDecodeShowReset();
								document.getElementById('waveLoad1').style.height          = 50 + 'px';
								document.getElementById('waveLoad1').style.marginTop       =  0 + 'px';
								document.getElementById('waveLoad1').style.backgroundColor = '#00AA00';
								document.getElementById('waveLoad2').style.height          = 50 + 'px';
								document.getElementById('waveLoad2').style.marginTop       =  0 + 'px';
								document.getElementById('waveLoad2').style.backgroundColor = '#00AA00';

								// Bilder in Canvas laden
								// ----------------------

								cacheImages            = xhttp.responseText.split('|');

								cacheImgSmall          = new Image();
								cacheImgSmall.src      = 'cache/'+decodeURIComponent(cacheImages[0]);
								cacheImgSmall.onload   = function()
								{
									var nCVwvID            = document.getElementById('nCVwaveForm');
									    nCVwv              = nCVwvID.getContext('2d');
									    nCVwv.fillStyle    = '#000000' ;
									    nCVwv.fillRect(0, 0, nWaveCvWidth, nWaveCvHeight);
									    nCVwv.drawImage(cacheImgSmall, 0, 0);
								}

								cacheImgBig            = new Image();
								cacheImgBig.src        = 'cache/'+decodeURIComponent(cacheImages[1]);
								cacheImgBig.onload     = function()
								{
									var nCVwvBigID         = document.getElementById('nCVwaveBig');
									    nCVwvBig           = nCVwvBigID.getContext('2d');
									    nCVwvBig.fillStyle = '#000000' ;
									    nCVwvBig.fillRect(0, 0, 16000, 50);
									    nCVwvBig.drawImage(cacheImgBig, 0, 0);
								}

								// Meta-Daten anzeigen
								// -------------------
								if( nMusicPL[currentNumber]['meta'] != '' )
								{
									trackMeta = nMusicPL[currentNumber]['meta'].split('|');
									metaSF    = trackMeta[0];
									metaFS    = trackMeta[1];
									metaSR    = trackMeta[2];
									metaNC    = trackMeta[3];
									metaFB    = trackMeta[4];

									metaSF    = ( ID3_Samples != 0 ) ? ID3_Samples : nWaveLength;
									showSF    = Math.round( metaSF / 100000 ) / 10;

									document.getElementById('nSamplesDisplay').innerHTML           = showSF + ' M';
									document.getElementById('nSamplesDisplay').title               = metaSF + ' Samples - '+metaFS+' MB Filesize';
								//	document.getElementById('displaySr').innerHTML                 = metaSR+'Khz';
									document.getElementById('displayStereo').style.backgroundColor = ( metaNC > 1 ) ? nPlayerColor : '#303030';
								} else
								  {
									document.getElementById('nSamplesDisplay').innerHTML           = '?';
									document.getElementById('nSamplesDisplay').title               = 'Daten konnten nicht ermittelt werden!';
								//	document.getElementById('displaySr').innerHTML                 = '- - -';
									document.getElementById('displayStereo').style.backgroundColor = nPlayerColor;
								  }

								if( nMusicPL[currentNumber]['bpm'] > 0 )
								{
									window.setTimeout('nSyncCalc()', 1500);
								}

								nWaveFormLoaded = 1;

								checkIrLoad();
							} else
							  {
								nMusicFileLoadNow(url);
							  }
						} else
						  {
							nMusicFileLoadNow(url);
						  }
					};
					xhttp.open('POST', 'ajax.php', true);
					xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
					xhttp.send(xhttpContent);
				} else
				  {
					nMusicFileLoadNow(url);
				  }
			  }
		} else
		  {
			checkIrLoad();
		  }
	}

	function nMusicFileLoadNow(url)
	{
		// Schalterstellung aus Mixer
		// --------------------------
		    nPlShowWave    =  1;
		if( nPlayerInFrame == 1 ) { if( top.nSsCv[6]['stellung'] == 0 ) { nPlShowWave = 0; } }
		if( nPlayerInFrame == 2 ) { if( top.nSsCv[7]['stellung'] == 0 ) { nPlShowWave = 0; } }
		if( nPlShowWave    == 1 )
		{
			try
			{
				// Ladebalken
				nDecodeShowReset();
				document.getElementById('waveLoad1').style.height          =  0 + 'px';
				document.getElementById('waveLoad1').style.marginTop       = 50 + 'px';
				document.getElementById('waveLoad1').style.backgroundColor = '#00AAAA';
				document.getElementById('waveLoad2').style.height          =  0 + 'px';
				document.getElementById('waveLoad2').style.marginTop       = 50 + 'px';
				document.getElementById('waveLoad2').style.backgroundColor = '#00AAAA';

				// Datei laden
				nWaveFormLoaded              = 2; // Zwischenstatus

				audioCtxFile                 = new AudioContext();

				var request                  = new XMLHttpRequest();
				    request.open('GET', url, true);
				    request.responseType     = 'arraybuffer';
				    request.onprogress       = function(event)
				    {
					nWvFileLoad = event.loaded / event.total * 50;
					document.getElementById('waveLoad1').style.height    =        nWvFileLoad   + 'px';
					document.getElementById('waveLoad1').style.marginTop = ( 50 - nWvFileLoad ) + 'px';
				    }

				    request.onload           = function()
				    {
					fileHeader           = [];
					fileHeader['length'] = request.getResponseHeader('content-length');
					fileHeader['type']   = request.getResponseHeader('content-type');

					msIntforSteps = Math.round( ( fileHeader['length'] / 2048 ) / 50 );

								    nDecodeShowReset();
					nDecodeTimer  = setInterval(nDecodeShowMove, msIntforSteps);
					document.getElementById('waveLoad1').style.backgroundColor = '#00AA00';

					audioCtxFile.decodeAudioData(request.response, function(buffer)
					{
						nWaveFirstLoad++;
						nWaveFormLoaded = 1;

						clearInterval(nDecodeTimer);
						document.getElementById('waveLoad2').style.height          = 50 + 'px';
						document.getElementById('waveLoad2').style.marginTop       =  0 + 'px';
						document.getElementById('waveLoad2').style.backgroundColor = '#00AA00';

						// Wellenbild beim ersten Mal wegen der Taktstriche erst nach BMP-Ermittlung zeichnen - oder falls es nicht ermittelbar ist
						if( nMusicPL[currentNumber]['bpm'] == -1 || nMusicPL[currentNumber]['bpm'] > 0 )
						{
							nMusicFileDraw(buffer);
						} else
						  {
							tempFileLoad   = 1;
							tempFileBuffer = buffer;
						  }

						if( nMusicPL[currentNumber]['bpm'] == 0 )
						{
							if( nDjConfig['bpm'] == 1 )
							{
								bpmRenderBuffer(buffer, fileHeader['length']);
							}
						} else
						if( nMusicPL[currentNumber]['bpm'] == -1 )
						{
							document.getElementById('bpmValue').innerHTML = '?';
						}

						checkIrLoad();

					}, onDecodeError);
				    }
				    request.send();
			} catch(e)
			  {
				checkIrLoad();
				// console.log('Fehler bei WaveForm: '+e);
			  }
		} else
		  {
			checkIrLoad();
		  }
	}
	function onDecodeError() { alert('Kann Datei nicht lesen.'); }

	function nMusicFileDraw(waveFormBuffer)
	{
		if( nLocalActive == 0 )
		{
			useStrokeColor  = nPlayerColor;
			useHeaderLength = fileHeader['length'];
		} else
		  {
			useStrokeColor  = '#00FF00';
			useHeaderLength = nLocalFiles[nLocalFileNr].size;
		  }

		nWaveLength       = waveFormBuffer.length;
		nWaveDuration     = waveFormBuffer.duration;
		nWaveSampleRate   = waveFormBuffer.sampleRate;
		nWaveChannelNr    = waveFormBuffer.numberOfChannels;

		// Kleines Bild
		// ============
		nWaveChannel      = waveFormBuffer.getChannelData(0);
		var nCVwvRendLen  = nWaveChannel.length / nWaveRendFac;

		var nCVwvID       = document.getElementById('nCVwaveForm');
		nCVwv             = nCVwvID.getContext('2d');
		nCVwv.strokeStyle = useStrokeColor;
		nCVwv.fillStyle   = '#000000';
		nCVwv.fillRect(0, 0, nWaveCvWidth, nWaveCvHeight);
		nCVwv.translate(0,nWaveCvHeight / 2);

		for( i = 0; i < nCVwvRendLen; i++ )
		{
			var x = Math.floor( nWaveCvWidth * i / nCVwvRendLen );
			var y = nWaveChannel[(i*nWaveRendFac)] * nWaveCvHeight / 2;

			nCVwv.beginPath();
			nCVwv.moveTo(x  , 0);
			nCVwv.lineTo(x+1, y);
			nCVwv.stroke();
			nCVwv.closePath();
		}

		nCVwv.translate(0,-(nWaveCvHeight / 2));

		// Großes Bild
		// ===========
		var nCVwvBigID       = document.getElementById('nCVwaveBig');
		nCVwvBig             = nCVwvBigID.getContext('2d');
		nCVwvBig.strokeStyle = useStrokeColor;
		nCVwvBig.fillStyle   = '#000000';
		nCVwvBig.fillRect(0, 0, 16000, 50);

		nWaveRendFac2        = 100;
		nCVwvRendLen2        = nWaveChannel.length / nWaveRendFac2;
		sCount               = 0;

		if( nLocalActive == 0 )
		{
			if( nMusicPL[currentNumber]['bpm'] > 0 )
			{
				useBpm       = nMusicPL[currentNumber]['bpm'];
				useMeta      = nMusicPL[currentNumber]['meta'];
			} else
			if( bmpDetection['data']['value'] > 0 )
			{
				useBpm       = Math.round( bmpDetection['data']['value'] );
				useMeta      =             bmpDetection['data']['meta'];
			} else
			  {
				useBpm       = 0;
				useMeta      = '';
			  }
		} else
		  {
			useBpm       = 0;
			useMeta      = '';
		  }

		if( useBpm > 0 )
		{
			sBeat        = nWaveSampleRate * 60 / useBpm;
			metaFirst    = useMeta.split('|');
			bpmFirstBeat = parseInt( metaFirst[4] );
			bpmOffset    = bpmFirstBeat - ( Math.floor( bpmFirstBeat  / sBeat ) * sBeat );
			sBuff        = bpmOffset / nWaveRendFac2;
		} else
		  {
			sBeat        = 0;
			sBuff        = 0;
		  }

		for( i = 0; i < nCVwvRendLen2; i++ )
		{
			var x = Math.floor( 16000 * i / nCVwvRendLen2 );
			var y = ( 50 / 2 ) + ( nWaveChannel[(i*nWaveRendFac2)] * ( 50 / 2 ) );

			nCVwvBig.strokeStyle = useStrokeColor;
			nCVwvBig.lineWidth   = 1;
			nCVwvBig.beginPath();
			nCVwvBig.moveTo(x,                       25);
			nCVwvBig.lineTo(x+(16000/nCVwvRendLen2), y);
			nCVwvBig.stroke();
			nCVwvBig.closePath();

			if( useBpm > 0 )
			{
				// Taktstriche
				if( ( i - sBuff ) >= ( sBeat / nWaveRendFac2 ) )
				{
					nCVwvBig.lineWidth   = 0.7;
					nCVwvBig.strokeStyle = '#FFFFFF';
					nCVwvBig.beginPath();
					nCVwvBig.moveTo(x,  0);
					nCVwvBig.lineTo(x, 50);
					nCVwvBig.stroke();
					nCVwvBig.closePath();

					sCount++;
					sBuff = i;
				}
			}
		}

		// Bilder in Cache speichern
		// -------------------------
		if( nLocalActive == 0 )
		{
			var xhttp = new XMLHttpRequest();
			if( xhttp )
			{
				xhttpContent = 'mode=waveSave&name='+encodeURIComponent(nMusicPL[currentNumber]['datei'])+'&content='+nCVwvID.toDataURL()+'&bigwave='+nCVwvBigID.toDataURL();
				xhttp.onload = function(e)
				{
					if( xhttp.readyState == 4 && xhttp.status == 200 )
					{
						// console.log( xhttp.responseText );
					}
				};
				xhttp.open('POST', 'ajax.php', true);
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
				xhttp.send(xhttpContent);
			}

			numberOfSF  = ( ID3_Samples != 0 ) ? ID3_Samples : nWaveLength;
		} else
		  {
			numberOfSF  = nWaveLength;
		  }

		roundedOfSF = Math.round( numberOfSF / 100000 ) / 10;
		calcFS      = Math.round( ( useHeaderLength / 1024 / 1024 ) * 100 ) / 100;

		document.getElementById('nSamplesDisplay').innerHTML           = roundedOfSF  + ' M';
		document.getElementById('nSamplesDisplay').title               = numberOfSF + ' Samples - '+calcFS+' MB Filesize';
	//	document.getElementById('displaySr').innerHTML                 = (Math.round(nWaveSampleRate/100)/10)+'Khz';
		document.getElementById('displayStereo').style.backgroundColor = ( nWaveChannelNr > 1 ) ? nPlayerColor : '#303030';
	}

	function nMusicFileWvClear()
	{
		// Schalterstellung aus Mixer
		// --------------------------
		nPlShowWave = 1;
		if( nPlayerInFrame == 1 ) { if( top.nSsCv[6]['stellung'] == 0 ) { nPlShowWave = 0; } }
		if( nPlayerInFrame == 2 ) { if( top.nSsCv[7]['stellung'] == 0 ) { nPlShowWave = 0; } }
		if( nPlShowWave == 1 )
		{
			wvaText = ( nFreqIsAPI == 1 ) ? 'Lade Daten zur Wellenform-Analyse...' : 'Vom Browser nicht unterstuetzt.';
		} else
		  {
			wvaText = 'Deaktiviert';
		  }

		var nCVwv            = document.getElementById('nCVwaveForm');
		nCVwv                = nCVwv.getContext('2d');
		nCVwv.strokeStyle    = nPlayerColor;
		nCVwv.fillStyle      = '#000000';
		nCVwv.fillRect(0, 0, nWaveCvWidth, nWaveCvHeight);
		nCVwv.fillStyle      = nPlayerColor;
		nCVwv.font           = 'normal 14px Arial,sans-serif';
		nCVwv.fillText(wvaText, 20, 30);

		var nCVwvBig         = document.getElementById('nCVwaveBig');
		nCVwvBig             = nCVwvBig.getContext('2d');
		nCVwvBig.strokeStyle = nPlayerColor;
		nCVwvBig.fillStyle   = '#000000';
		nCVwvBig.fillRect(0, 0, 16000, 50);
		nCVwvBig.fillStyle   = nPlayerColor;
		nCVwvBig.font        = 'normal 14px Arial,sans-serif';
		nCVwvBig.fillText(wvaText, 20, 30);
	}

	function nSyncCalc()
	{
		nSync      = 1;
		myMeta     = nMusicPL[currentNumber]['meta'].split('|');

		nSyncData['bpm']            = nMusicPL[currentNumber]['bpm'];
		nSyncData['samplesPerBeat'] = ( myMeta[2] * 1000 ) * 60 / nSyncData['bpm'];
		nSyncData['firstBeat']      = parseInt( myMeta[4] );
		nSyncData['offset']         = nSyncData['firstBeat'] - ( Math.floor( nSyncData['firstBeat'] / nSyncData['samplesPerBeat'] ) * nSyncData['samplesPerBeat'] );
		nSyncData['beatsPerTrack']  = Math.floor( myMeta[0] / nSyncData['samplesPerBeat'] ) - 1;
		nSyncData['durPerBeat']     = audio.duration / nSyncData['beatsPerTrack'];

		nSyncData['indexBuffer']    = 0;
		nSyncData['beats']          = [];
		nSyncData['pushBeats']      = ( nSyncData['offset'] / nSyncData['samplesPerBeat'] ) * nSyncData['durPerBeat'];
		nSyncData['position']       = 1;

		for( bd = 0; bd < nSyncData['beatsPerTrack']; bd++ )
		{
			nSyncData['beats'].push(  nSyncData['pushBeats']);
			nSyncData['pushBeats'] += nSyncData['durPerBeat'];
		}
		// console.log( nSyncData );
	}

	/* =============================================================================================================================================================== */

	function nMusic_cue(mode)
	{
		if( mode == -1 )
		{
			setCue = ( cue != 0 ) ? 0 : 1;
		} else
		  {
			setCue = mode;
		  }

		// CUE Startpunkt setzen
		if( setCue == 0 )
		{
			cue = 0;

			document.getElementById('nCVwaveCue').style.marginLeft        = 0 + 'px';
			document.getElementById('nCVwaveCue').style.display           = 'none';
			document.getElementById('nCVwaveCue').style.visibility        = 'hidden';

			document.getElementById('nMusicButton_cue').style.color       = '#FFFFFF';
			document.getElementById('nMusicButton_cue').style.borderColor = '#008888';			// nPlayerColor; // Ausnahme Button
			document.getElementById('nMusicButton_cue').title             = 'CUE-Punkt setzen';
		} else
		  {
			if( audio.currentTime > 0 )
			{
				cue    = audio.currentTime;
				cuePos = audio.currentTime / audio.duration * ( nWaveCvWidth - 4 );
			} else
			  {
				cue    = 1;
				cuePos = 1;
			  }

			document.getElementById('nCVwaveCue').style.marginLeft        = cuePos + 'px';
			document.getElementById('nCVwaveCue').style.display           = 'block';
			document.getElementById('nCVwaveCue').style.visibility        = 'visible';

			document.getElementById('nMusicButton_cue').style.color       = 'gold';
			document.getElementById('nMusicButton_cue').style.borderColor = 'gold';
			document.getElementById('nMusicButton_cue').title             = 'CUE-Punkt entfernen';
		  }
	}

	function AudioApiError()
	{
		// alert('Dieser Browser unterstuetzt leider nicht alle Audio-Funktionen');
	}

	function nMusic_drc()
	{
		if( nFreqIsAPI == 1 )
		{
			if( nDRC_on == 0 )
			{
				 nPanner.disconnect(audioCtx.destination);
				 nPanner.connect(nDRC);
				    nDRC.connect(audioCtx.destination);
				document.getElementById('nMusicButton_drc').style.color = nPlayerColor;
				nDRC_on = 1;
			} else
			  {
				 nPanner.disconnect(nDRC);
				    nDRC.disconnect(audioCtx.destination);
				 nPanner.connect(audioCtx.destination);
				document.getElementById('nMusicButton_drc').style.color = '#FFFFFF';
				nDRC_on = 0;
			  }
		}
	}

	function nMusic_loud()
	{
		if( nFreqIsAPI == 1 )
		{
			if( nLoud_on == 0 )
			{
				nLoudSetTo = 10 - ( document.getElementById('audio1').volume * 20 );
				nLoudSetTo = ( nLoudSetTo < 0 ) ? 0 : nLoudSetTo;
				 nLoudLow.gain.setValueAtTime(nLoudSetTo, audioCtx.currentTime);
				nLoudHigh.gain.setValueAtTime(nLoudSetTo, audioCtx.currentTime);

				nFreqSource.disconnect(nEqPreGain);
				nFreqSource.connect(nLoudLow);
				   nLoudLow.connect(nLoudHigh);
				  nLoudHigh.connect(nEqPreGain);
				document.getElementById('nMusicButton_loud').style.color = nPlayerColor;
				nLoud_on = 1;
			} else
			  {
				 nLoudLow.gain.setValueAtTime(5, audioCtx.currentTime);
				nLoudHigh.gain.setValueAtTime(5, audioCtx.currentTime);

				nFreqSource.disconnect(nLoudLow);
				   nLoudLow.disconnect(nLoudHigh);
				  nLoudHigh.disconnect(nEqPreGain);
				nFreqSource.connect(nEqPreGain);
				document.getElementById('nMusicButton_loud').style.color = '#FFFFFF';
				nLoud_on = 0;
			  }
		}
	}

	function nMusic_light()
	{
		if( nLight == 0 )
		{
			document.getElementById('nMusicTable').style.boxShadow    = '0px 0px '+nAmbiLightUse+'px rgb(0,255,255)';
			document.getElementById('nMusicButton_light').style.color = '#00FFFF';
			nLight = 1;
		} else
		if( nLight == 1 )
		{
			document.getElementById('nMusicTable').style.boxShadow    = '0px 0px '+nAmbiLightUse+'px rgb(0,55,55)';
			document.getElementById('nMusicButton_light').style.color = '#00FF00';
			nLight = 2;
		} else
		  {
			document.getElementById('nMusicTable').style.boxShadow    = '';
			document.getElementById('nMusicButton_light').style.color = '#FFFFFF';
			nLight = 0;
		  }
	}

	function nMusic_eqUser(mode)
	{
		if( mode == 1 )
		{
			document.getElementById('nMusicButton_eqUser').style.color = '#00FFFF';
			eqUserTimer = window.setTimeout("uqUserSave()", 3000);
		} else
		  {
			document.getElementById('nMusicButton_eqUser').style.color = '#FFFFFF';
			clearTimeout(eqUserTimer);
			uqUserLoad();
		  }
	}

	function uqUserSave()
	{
		cookieStr = '';
		for( seq  = 3; seq < 13; seq++ )
		{
			cookieStr += nSrCv[seq]['prozente']+'#';
		}

		expires = ( new Date( Date.now() + 365*86400*1000 ) ).toUTCString();

		document.cookie = "nPlayerEq="+cookieStr+"; expires="+expires;

		alert("Einstellungen wurden gespeichert!");
	}

	function uqUserLoad()
	{
		if( document.cookie )
		{
			nPlayerInCookie = document.cookie.split('nPlayerEq=');

			if( nPlayerInCookie.length > 1 )
			{
				nEqCookieData = nPlayerInCookie[1].split(';');
				nEqCookieData = nEqCookieData+'|';
				nEqSavedData  = nEqCookieData.split('#');
				for( geq = 0; geq < 10; geq++ )
				{
					nSrCvSet((3+geq), nEqSavedData[geq]);
				}
			} else
			  {
				alert("Es sind keine Einstellungen gespeichert!");
			  }
		} else
		  {
			alert("Es sind keine Einstellungen gespeichert!");
		  }
	}

	function oszLedAus()
	{
		document.getElementById('oszLed').src = 'src/led_aus.gif';

		if( nPlayerInFrame == 1 )
		{
			top.document.getElementById('nMpLed_LeftClip').src  = 'src/led_aus.gif';
		}
		if( nPlayerInFrame == 2 )
		{
			top.document.getElementById('nMpLed_RightClip').src = 'src/led_aus.gif';
		}
	}

	function oszLedAn()
	{
		document.getElementById('oszLed').src = 'src/led_rot.gif';

		if( nPlayerInFrame == 1 )
		{
			top.document.getElementById('nMpLed_LeftClip').src  = 'src/led_rot.gif';
		}
		if( nPlayerInFrame == 2 )
		{
			top.document.getElementById('nMpLed_RightClip').src = 'src/led_rot.gif';
		}

		window.setTimeout('oszLedAus()', 750);
	}


	document.onload = window.setTimeout("nFreqInit()", 250);


	/* Umrechnungen ================================================================================================================================================== */


	function nRadialToGrad(bogen)
	{
		grad  = bogen * 360 / ( 2 * Math.PI );
		return grad;
	}

	function nGradToRadial(grad)
	{
		bogen = grad * 2 * Math.PI / 360;
		return bogen;
	}

	function nProzentToRadial(drcvID, drcvPROZ)
	{
		if( drcvPROZ <   0 ) { drcvPROZ =   0; }
		if( drcvPROZ > 100 ) { drcvPROZ = 100; }
		bogenWinkel  = 135 + nDrCv[drcvID]['min'] + ( ( nDrCv[drcvID]['max'] - nDrCv[drcvID]['min'] ) * ( drcvPROZ / 100 ) );
		return nGradToRadial(bogenWinkel);
	}

	function nRadialToSinus(radial, range)
	{
		useRadius = nDrCvRadius * range;
		return ( Math.sin(radial) * useRadius );
	}

	function nRadialToCosinus(radial, range)
	{
		useRadius = nDrCvRadius * range;
		return ( Math.cos(radial) * useRadius );
	}


	function nRadPxToSinus(radial, radius)
	{
		return ( Math.sin(radial) * radius );
	}

	function nRadPxToCosinus(radial, radius)
	{
		return ( Math.cos(radial) * radius );
	}

