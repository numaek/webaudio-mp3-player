

	// ##### BPM Funktionen #####
	// =============================================================================================================================================================================

	// Aus PCM-Daten auslesen
	// ======================


	// Detektor parametrieren
	// ----------------------
	var bmpDetection                     = [];
	    bmpDetection['config']           = [];
	    bmpDetection['config']['min']    = 50;	// BPM Min-Wert
	    bmpDetection['config']['max']    = 250;	// BPM Max-Wert
	    bmpDetection['config']['start']  = 25;	// Suche ab  % der Laufzeit
	    bmpDetection['config']['end']    = 75;	// Suche bis % der Laufzeit
	    bmpDetection['config']['level']  = 0.6;	// Min. Musikpegel zur Beat-Erfassung
	    bmpDetection['config']['freq']   = 100;	// Grenzfrequenz für vorgeschalteten Tiefpassfilter

	    bmpDetection['data']             = [];


	function bpmRenderBuffer(renderBuffer, headerLength)
	{
		// Meta-Daten bereitstellen
		saveFS = Math.round( ( headerLength / 1024 / 1024 ) * 100 ) / 100;
		saveSR = Math.round( ( renderBuffer.sampleRate / 100 ) / 10 );

		// Daten aus php-ID3 holen, sofern vorhanden
		// -----------------------------------------
		mdSamplerate = ( ID3_SR      != 0 && nLocalActive == 0 ) ? ID3_SR      : saveSR;
		mdFilesize   = ( ID3_FS      != 0 && nLocalActive == 0 ) ? ID3_FS      : saveFS;
		mdChannels   = ( ID3_CN      != 0 && nLocalActive == 0 ) ? ID3_CN      : renderBuffer.numberOfChannels;
		mdLength     = ( ID3_Samples != 0 && nLocalActive == 0 ) ? ID3_Samples : renderBuffer.length;

		bmpDetection['data']['meta'] = mdLength+'|'+mdFilesize+'|'+mdSamplerate+'|'+mdChannels;
	     // bmpDetection['data']['meta'] = renderBuffer.length+'|'+saveFS+'|'+saveSR+'|'+renderBuffer.numberOfChannels;	// Daten aus AudioBuffer

		var bpmCtx           = new OfflineAudioContext(1, renderBuffer.length, renderBuffer.sampleRate);
		var bpmSource        = bpmCtx.createBufferSource();
		    bpmSource.buffer = renderBuffer;

		var bpmFilter        = bpmCtx.createBiquadFilter();
		    bpmFilter.type   = "lowpass";
		    bpmFilter.frequency.setValueAtTime(bmpDetection['config']['freq'], bpmCtx.currentTime);

		bpmSource.connect(bpmFilter);
		bpmFilter.connect(bpmCtx.destination);
		bpmSource.start(0);
		   bpmCtx.startRendering();
		   bpmCtx.oncomplete = function(e)
		{
			bpmGetBeats(e.renderedBuffer);
		};
	}


	function bpmGetBeats(beatBuffer)
	{
		bmpDetection['data']['times']    = [];
		bmpDetection['data']['beats']    = [];
		bmpDetection['data']['first']    = [];
		bmpDetection['data']['value']    = 0;
		bmpDetection['data']['objTime']  = 0;
		bmpDetection['data']['objCount'] = 0;

		bpmChannel =             beatBuffer.getChannelData(0);
		prePuffer  = Math.round( beatBuffer.length * 0.2 );

		minStep    = 1 / ( bmpDetection['config']['min'] / 60 );
		minStep    = Math.round( minStep * 100 ) / 100;

		maxStep    = 1 / ( bmpDetection['config']['max'] / 60 );
		maxStep    = Math.round( maxStep * 100 ) / 100;

		counterMax = bmpDetection['config']['max'] / 60 * beatBuffer.duration;
		counter    = 0;
		total      = 0;
		average    = 0;
		bpmCalc    = 0;

		for( i = Math.round( beatBuffer.length * ( bmpDetection['config']['start'] / 100 ) ); i < Math.round( beatBuffer.length * ( bmpDetection['config']['end'] / 100 ) ); i++ )
		{
			if( bpmChannel[i] > bmpDetection['config']['level'] && counter < counterMax )
			{
				    intervalTime = Math.round( ( i - prePuffer ) / beatBuffer.sampleRate * 100 ) / 100;
				if( intervalTime > maxStep && intervalTime < minStep )
				{
					bpmCalc = 60 / intervalTime;

					bmpDetection['data']['times'].push(intervalTime);
					bmpDetection['data']['first'].push( { 'time' : i, 'beat' : Math.round(bpmCalc) } );

					// console.log( i+' ('+intervalTime+' Sek.) ['+Math.round(bpmCalc)+' BPM] = '+bpmChannel[i] );

					prePuffer = i;
					i        += Math.round( beatBuffer.sampleRate / 4.5 );
					total    += bpmCalc;
					counter++;
				} else
				  {
					if( intervalTime > minStep )
					{
						// Nur Puffer nachziehen wenn der Abstand zu groß ist
						prePuffer = i;
					}
				  }
			}
		}

		average = total / counter;

		bpmPushInObject();
	}


	function bpmPushInObject()
	{
		for( t = 0; t < bmpDetection['data']['times'].length; t++ )
		{
			inTimes = 0;
			for( key in bmpDetection['data']['beats'] )
			{
				if( bmpDetection['data']['beats'].hasOwnProperty(key) )
				{
					if( bmpDetection['data']['beats'][key].time == bmpDetection['data']['times'][t] )
					{
						inTimes = 1;
						bmpDetection['data']['beats'][key].count += 1;
					}
				}
			}
			if( inTimes == 0 )
			{
				bmpDetection['data']['beats'].push( { 'time' : bmpDetection['data']['times'][t], 'count' : 1 } );
			}
		}

		bpmCalcFromObject();
	}


	function bpmCalcFromObject()
	{
		// BPM mit den meisten Vorkommen suchen
		// ------------------------------------
		for( key in bmpDetection['data']['beats'] )
		{
			if( bmpDetection['data']['beats'].hasOwnProperty(key) )
			{
				if( bmpDetection['data']['beats'][key].count > bmpDetection['data']['objCount'] )
				{
					bmpDetection['data']['objTime']  = bmpDetection['data']['beats'][key].time;
					bmpDetection['data']['objCount'] = bmpDetection['data']['beats'][key].count;
				}
			}
		}

		bmpDetection['data']['value'] = ( bmpDetection['data']['objCount'] == 0 ) ? -1 : Math.round( ( 60 / bmpDetection['data']['objTime'] ) * 100 ) / 100;

		// Ersten Takt der passenden BPM suchen
		// ------------------------------------
		startBeat = 0;
		for( key in bmpDetection['data']['first'] )
		{
			if( bmpDetection['data']['first'].hasOwnProperty(key) )
			{
				if( bmpDetection['data']['first'][key].beat == Math.round( bmpDetection['data']['value'] ) )
				{
					startBeat = bmpDetection['data']['first'][key].time;
					break;
				}
			}
		}

		bmpDetection['data']['meta']                 += '|'+startBeat;

		document.getElementById('bpmValue').innerHTML = ( bmpDetection['data']['value'] == -1 ) ? '- - -' : Math.round(bmpDetection['data']['value']);

		// Wert in Playlist speichern
		// --------------------------
		if( nLocalActive == 0 )
		{
			nMusicPL[currentNumber]['bpm']  = Math.round(bmpDetection['data']['value']);
			nMusicPL[currentNumber]['meta'] =            bmpDetection['data']['meta'];

			var xhttp = new XMLHttpRequest();
			if( xhttp )
			{
				xhttpContent = 'mode=bpm&plID='+plActive+'&trackID='+currentNumber+'&bpm='+Math.round(bmpDetection['data']['value'])+'&meta='+bmpDetection['data']['meta'];
				xhttp.onload = function(e)
				{
					if( xhttp.readyState == 4 && xhttp.status == 200 )
					{
						if( tempFileLoad == 1 )
						{
							nMusicFileDraw(tempFileBuffer);
						}
					}
				};
				xhttp.open('POST', 'ajax.php', true);
				xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
				xhttp.send(xhttpContent);
			}
		}
	}


	// BPM Ertippen
	// ============
	var bpmReset     = 0;
	var nBpm         = 0;
	var nBpmAvg      = 0;
	var nBpmCounter  = 0;
	var nBpmLastTime = 0;
	var nBpmArray    = new Array();

	function bpm()
	{
		    nowTime  = Date.now();
		    timeDiff = nowTime - nBpmLastTime;
		if( timeDiff < 1200 )
		{
			// genauer berechnen
			nBpmArray.push(timeDiff);
			nBpmCounter = 0;
			for( b = 0; b < nBpmArray.length; b++ )
			{
				nBpmCounter += nBpmArray[b];
			}
			if( nBpmArray.length > 2 )
			{
				nBpmAvg  = nBpmCounter / nBpmArray.length;
				nBpm     = Math.round( 60000 / nBpmAvg );
				bpmReset = nowTime;
				bpmColor = ( nSsCv[0]['stellung'] == 1 ) ? '#00FF00' : 'orange';

				document.getElementById('bpmValue').innerHTML = '<span style=\"color: '+bpmColor+';\">'+nBpm+'</span>';
			}
			bpmLedAn();
		} else
		  {
			// Neue Berechnung
			nBpm        = 0;
			nBpmAvg     = 0;
			nBpmCounter = 0;
			nBpmArray   = new Array();

			if( typeof(bmpDetection['data']['value']) !== 'undefined' )
			{
				document.getElementById('bpmValue').innerHTML = ( bmpDetection['data']['value'] == -1 ) ? '- - -' : Math.round(bmpDetection['data']['value']);
			} else
			  {
				document.getElementById('bpmValue').innerHTML = '- - -';
			  }
		  }

		nBpmLastTime = nowTime;
	}


	function bpmTap()
	{
		if( nSsCv[0]['stellung'] == 0 )
		{
			bpm();
		}
	}


	function bpmLedAus()
	{
		document.getElementById('bpmLed').src = 'src/led_aus.gif';
	}


	function bpmLedAn()
	{
		document.getElementById('bpmLed').src = ( nSsCv[0]['stellung'] == 0 ) ? 'src/led_rot.gif' : 'src/led_gruen.gif';
		window.setTimeout('bpmLedAus()', 220);
	}

