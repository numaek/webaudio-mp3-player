

	var avData        = [];

	    avData['set'] = [];

	    avData['set']['waves'] = [];
	    avData['set']['waves']['maxTimes']    = 100;
	    avData['set']['waves']['waves']       = 40;
	    avData['set']['waves']['amplitude']   = 40;
	    avData['set']['waves']['ampWave']     = 75;

	    avData['set']['ellipse'] = [];
	    avData['set']['ellipse']['maxTimes']  = 55;
	    avData['set']['ellipse']['waves']     = 26;
	    avData['set']['ellipse']['amplitude'] = 60;
	    avData['set']['ellipse']['ampWave']   = 15;

	    avData['set']['circle'] = [];
	    avData['set']['circle']['maxTimes']   = 1;
	    avData['set']['circle']['waves']      = 200;
	    avData['set']['circle']['amplitude']  = 135;
	    avData['set']['circle']['ampWave']    = 10;

	    avData['set']['flower'] = [];
	    avData['set']['flower']['maxTimes']   = 1;
	    avData['set']['flower']['waves']      = 50;
	    avData['set']['flower']['amplitude']  = 500;
	    avData['set']['flower']['ampWave']    = 10;

	    avData['set']['flash'] = [];
	    avData['set']['flash']['maxTimes']    = 8;
	    avData['set']['flash']['waves']       = 1;
	    avData['set']['flash']['amplitude']   = 100;
	    avData['set']['flash']['ampWave']     = 20;

	    avData['set']['disc'] = [];
	    avData['set']['disc']['maxTimes']     = 100;
	    avData['set']['disc']['waves']        = 25;
	    avData['set']['disc']['amplitude']    = 100;
	    avData['set']['disc']['ampWave']      = 150;

	    avData['delay']       = 20;
	    avData['run']         = 0;
	    avData['auto']        = 0;

	    avData['programme']   = ['flower', 'circle', 'disc', 'ellipse', 'waves', 'flash'];
	    avData['prg']         = 'circle';

	    avData['x_step']      = 5;
	    avData['y_step']      = 10;

	    avData['x_rand']      = -1;
	    avData['y_rand']      = 60;

	    avData['3d_diff']     = 250;

	    avData['radius_x']    = 75;
	    avData['radius_y']    = 30;
	    avData['radius_step'] =  4;

	    avData['x']           = avData['x_start'];
	    avData['y']           = avData['y_start'];
	    avData['x_pre']       = avData['x'];
	    avData['y_pre']       = [];
	    avData['y_pre'][0]    = avData['y'];
	    avData['y_ziel']      = 0;

	    avData['flat']        = 0;
	    avData['nFreqIsAPI']  = 0;
	    avData['canvasOK']    = 0;

	    avData['timeRange']   = 0;
	    avData['timeCounter'] = 0;
	    avData['timeStamp']   = Date.now();

	    avData['array']       = [];
	    avData['puffer']      = [];
	    avData['rainbow']     = new Array(360);

	    avData['rotDir']      = 'r';
	    avData['rotSpeed']    = 2;
	    avData['rotSpeedMax'] = 8;
	    avData['rotOffset']   = 0;
	    avData['rotTimer'];

	    avData['alphaPoint']  = -90;
	    avData['loopCounter'] = 0;
	    avData['fadeOsc']     = [];

	    avData['init']        = 1;

	    avData['canvas'];
	    avData['audioCtx'];
	    avData['nFreqAnalyser'];
	    avData['nFreqSource'];
	    avData['nFreqBufferLength'];
	    avData['nFreqDataArray'];
	    avData['nPeakDataArray'];

	    avData['drawTimer'];


	document.onload = window.setTimeout("nAvInit();", 1000);


	function nAvInit()
	{
		try
		{
			avData['nFreqAnalyser'] = audioCtx.createAnalyser();
			nFreqSource.connect(avData['nFreqAnalyser']);

		} catch(e)
		  {
			console.log(e);
		  }
	}


	function nAvInit2()
	{
		avData['prgIndex']  = avData['programme'].indexOf(avData['prg']);

		avData['maxTimes']  = avData['set'][avData['prg']]['maxTimes'];
		avData['waves']     = avData['set'][avData['prg']]['waves'];
		avData['amplitude'] = avData['set'][avData['prg']]['amplitude'];
		avData['ampWave']   = avData['set'][avData['prg']]['ampWave'];

		if( nFreqIsAPI == 1 )
		{
			avData['nFreqAnalyser'].fftSize = 512;
			avData['nFreqBufferLength']     = avData['nFreqAnalyser'].frequencyBinCount;
			avData['nFreqDataArray']        = new Uint8Array(avData['nFreqBufferLength']);
			avData['nPeakDataArray']        = new Uint8Array(avData['nFreqBufferLength']);
		} else
		  {
			avData['nPeakDataArray']        = new Uint8Array(1024);
		  }

		avData['array']      = [];
		avData['puffer']     = [];
		avData['alphaPoint'] = -90;
		avData['faktor']     = avData['radius_y'] / avData['radius_x'];

		for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
		{
			avData['array'][freqIndex]  = [];
			avData['puffer'][freqIndex] = [];
		}

		if( avData['canvas'] = document.getElementById('cvVisu') )
		{
			avData['canvasOK'] = 1;

			if( avData['x_rand'] == -1 )
			{
				avData['x_start'] = ( ( avData['canvas'].width - ( avData['maxTimes'] * avData['x_step'] ) ) / 2 ) - 5;
			} else
			  {
				avData['x_start'] = avData['x_rand'];
			  }

			if( avData['y_rand'] == -1 )
			{
				avData['y_start'] = avData['canvas'].height - ( ( avData['canvas'].height - ( ( avData['waves'] - 1 ) * avData['y_step'] ) ) / 2 );
			} else
			  {
				avData['y_start'] = avData['canvas'].height - avData['y_rand'];
			  }

			avData['mp_x'] = avData['canvas'].width  / 2;
			avData['mp_y'] = avData['canvas'].height / 2;

			// Ellipse nach oben verschieben
			if( avData['prg'] == 'ellipse' )
			{
				avData['mp_y'] -= 40;
			}
		} else
		  {
			avData['canvasOK'] = 0;
		  }

		if( avData['prg'] == 'flower' )
		{
			nAvSwitchRotation();
		} else
		  {
			clearTimeout( avData['rotTimer'] );
		  }

		builtRainbow();
		nAvdraw();
	}


	function nAvdraw()
	{
		if( avData['array'][0].length >= avData['maxTimes'] )
		{
			// Erste Array-Stelle puffern und löschen
			// --------------------------------------
			for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
			{
				avData['puffer'][freqIndex] = avData['array'][freqIndex][0];
				avData['array'][freqIndex].shift();
			}

			// Zeitmessung
			// -----------
			if( avData['timeCounter'] >= avData['maxTimes'] )
			{
				avData['timeRange']   = Date.now() - avData['timeStamp'];
				avData['timeStamp']   = Date.now();
				avData['timeCounter'] = 0;
			} else
			  {
				avData['timeCounter']++;
			  }
		}

		if( nFreqIsAPI == 1 )
		{
			avData['nFreqAnalyser'].getByteFrequencyData(avData['nFreqDataArray']);

			if( avData['prg'] == 'flash' )
			{
				if( avData['loopCounter'] >= 3 )
				{
					// Nur bei jedem 3. Durchlauf neue Daten holen (Trägheit)
					// ------------------------------------------------------
					avData['nFreqAnalyser'].getByteTimeDomainData(avData['nPeakDataArray']);

	 				if( avData['fadeOsc'].length >= avData['maxTimes'] )
					{
						avData['fadeOsc'].shift();
					}
					avData['fadeOsc'].push( avData['nPeakDataArray'].join() );
					avData['loopCounter'] = 0;
				}

				avData['loopCounter']++;
			} else
			  {
				// Bei jedem Durchlauf neue Daten holen
				// ------------------------------------
				avData['nFreqAnalyser'].getByteTimeDomainData(avData['nPeakDataArray']);

				    avg  = Math.avg( avData['nPeakDataArray'] );
				if( avg >= 128 )
				{
					freqPeak  = Math.max.apply(null, avData['nPeakDataArray']);
					valuePeak = freqPeak - 128;
					prozPeak  = ( valuePeak > 0 ) ? ( valuePeak / 128 *  1 ) : 0;
				} else
				  {
					freqPeak  = Math.min.apply(null, avData['nPeakDataArray']);
					valuePeak = 128 - freqPeak;
					prozPeak  = ( valuePeak > 0 ) ? ( valuePeak / 128 * -1 ) : 0;
				  }

				// Werte in Automatik-Schleife gleichmäßig verteilen
				// -------------------------------------------------
				stepIndex = ( avData['nFreqAnalyser'].fftSize / 2 ) / avData['waves'];

				for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
				{
					byteIndex = Math.floor( ( 1 + freqIndex ) * stepIndex );
					byteIndex = ( byteIndex > ( ( avData['nFreqAnalyser'].fftSize / 2 ) - 1 ) ) ? ( ( avData['nFreqAnalyser'].fftSize / 2 ) - 1 ) : byteIndex;

					value     =   avData['nFreqDataArray'][byteIndex];		// 0 bis 255
					value     =   value + ( prozPeak * avData['ampWave'] );		// Verstärkung in beide Richtungen
					value     = ( value          > 255 ) ?   255 : value;
					value     = ( value          <   0 ) ?     0 : value;
					value     = ( avData['flat'] !=  0 ) ?     0 : value;

					avData['array'][freqIndex].push(value);
				}
			  }
		} else
		  {
			// Zufallswerte in die letzte Array-Stelle schreiben
			// -------------------------------------------------
			for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
			{
				value = ( avData['flat'] == 0 ) ? Math.floor( ( Math.random() * 255 ) + 1 ) : 0;

				avData['array'][freqIndex].push(value);
			}

			nOszRndRange = 20 * Math.floor( ( Math.random() * 10 ) + 1 );
			for( z = 0; z < 1024; z++ )
			{
				avData['nPeakDataArray'][z] = 128 - ( nOszRndRange / 2 ) + Math.floor( ( Math.random() * nOszRndRange ) + 1 );
			}
		  }

		if( avData['canvasOK'] == 1 )
		{
			ctx              = avData['canvas'].getContext('2d');

			ctx.lineWidth    = 1;
			ctx.fillStyle    = '#000000';
			ctx.clearRect(0, 0, avData['canvas'].width, avData['canvas'].height);
			ctx.fillRect( 0, 0, avData['canvas'].width, avData['canvas'].height);
			ctx.strokeStyle  = '#00FFFF';
			ctx.fillStyle    = '#00FFFF';

			if( avData['prg'] == 'waves' )
			{
				// Wellen - Zeit Diagramm
				// ####################################################################################################################################################################

				// Y-Position neu reseten
				// ----------------------
				for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
				{
					y_base = ( 0 + freqIndex ) * avData['y_step'];
					if( avData['array'][0].length < avData['maxTimes'] )
					{
						// Solange die Welle noch steht
						y_reset = avData['y_start'] - y_base;
					} else
					  {
						// Wenn die Welle wandert, 
						y_reset = avData['y_start'] - y_base - ( avData['puffer'][freqIndex] / 255 * avData['amplitude'] );
					  }
					avData['y_pre'][freqIndex] = y_reset;
				}

				lastLineLength = ( avData['maxTimes'] * avData['x_step'] ) - avData['3d_diff'];
				stepPerFreq    = ( ( avData['x_step'] - ( lastLineLength / avData['maxTimes'] ) ) / ( avData['waves'] - 1 ) );
				offsetWave     = ( avData['3d_diff'] / 2 ) / ( avData['waves'] - 1 );

				// Grundzeichnungen
				// ++++++++++++++++
				ctx.strokeStyle = '#00FFFF';
				ctx.fillStyle   = '#00FFFF';

				// X-Achse
				// -------
				ctx.beginPath();
				ctx.moveTo( avData['x_start'] + ( avData['x_step'] / 2 ),                          avData['y_start'] + ( 2 * avData['y_step'] ) );
				ctx.lineTo( avData['x_start'] + ( ( 1 + avData['maxTimes'] ) * avData['x_step'] ), avData['y_start'] + ( 2 * avData['y_step'] ) ); ctx.stroke(); ctx.closePath();

				maxSkale = Math.floor( avData['maxTimes'] / 50 ) + 1;
				for( zl = 0; zl < maxSkale; zl++ )
				{
					ctx.beginPath();
					ctx.moveTo( avData['x_start'] + ( avData['x_step'] / 2 ) + ( zl * 50 * avData['x_step'] ), avData['y_start'] + ( 2 * avData['y_step'] ) - 4 );
					ctx.lineTo( avData['x_start'] + ( avData['x_step'] / 2 ) + ( zl * 50 * avData['x_step'] ), avData['y_start'] + ( 2 * avData['y_step'] ) + 4 );
					ctx.stroke(); ctx.closePath();

					ctx.font      = '10px Verdana';
					ctx.fillText( (50*zl), avData['x_start'] + ( avData['x_step'] / 2 ) + ( zl * 50 * avData['x_step'] ) - 10, avData['y_start'] + ( 2 * avData['y_step'] ) + 15 );
				}

				ctx.beginPath();
				ctx.moveTo( avData['x_start'] + ( avData['x_step'] / 2 ) + ( avData['maxTimes'] * avData['x_step'] ), avData['y_start'] + ( 2 * avData['y_step'] ) - 3 );
				ctx.lineTo( avData['x_start'] + ( avData['x_step'] / 2 ) + ( avData['maxTimes'] * avData['x_step'] ), avData['y_start'] + ( 2 * avData['y_step'] ) + 3 );
				ctx.stroke(); ctx.closePath();

				ctx.font      = '10px Verdana';
				ctx.fillText( avData['maxTimes'], avData['x_start'] + ( avData['x_step'] / 2 ) + ( avData['maxTimes'] * avData['x_step'] ) - 10, avData['y_start'] + ( 2 * avData['y_step'] ) + 15 );
				ctx.fillText( 'Values', avData['x_start'] + ( avData['x_step'] / 2 ) + ( avData['maxTimes'] * avData['x_step'] ) - 10 + 20, avData['y_start'] + ( 2 * avData['y_step'] ) + 15 - 12 );

				// Y-Achse
				// -------
				endOffset = offsetWave * ( avData['waves'] - 1 );

				ctx.beginPath();
				ctx.moveTo( avData['x_start'] - ( 2 * avData['y_step'] ) + avData['x_step'],             avData['y_start'] );
				ctx.lineTo( avData['x_start'] - ( 2 * avData['y_step'] ) + avData['x_step'] + endOffset, avData['y_start'] - ( avData['y_step'] * ( avData['waves'] - 1 ) ) ); ctx.stroke(); ctx.closePath();

				for( zl = 0; zl < 6; zl++ )
				{
					subOffset = zl * ( endOffset / 5 );

					ctx.beginPath();
					ctx.moveTo( avData['x_start'] - ( 2 * avData['y_step'] ) + avData['x_step'] + subOffset - 4, avData['y_start'] - ( zl * ( ( ( avData['waves'] - 1 ) * avData['y_step'] ) / 5 ) ) );
					ctx.lineTo( avData['x_start'] - ( 2 * avData['y_step'] ) + avData['x_step'] + subOffset + 4, avData['y_start'] - ( zl * ( ( ( avData['waves'] - 1 ) * avData['y_step'] ) / 5 ) ) );
					ctx.stroke(); ctx.closePath();

					ctx.font      = '10px Verdana';
					ctx.fillText( (4*zl), avData['x_start'] - ( 2 * avData['y_step'] ) + avData['x_step'] + subOffset - 22, avData['y_start'] - ( zl * ( ( ( avData['waves'] - 1 ) * avData['y_step'] ) / 5 ) ) + 3 );
				}

				ctx.fillText( 'Khz', avData['x_start'] - ( 2 * avData['y_step'] ) + avData['x_step'] + subOffset - 15, avData['y_start'] - ( 5 * ( ( ( avData['waves'] - 1 ) * avData['y_step'] ) / 5 ) ) + 3 - 20 );

				avData['x']     = avData['x_start'];
				avData['x_pre'] = avData['x_start'];

				// Rote Punkte
				// -----------
				for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
				{
					stepShort = avData['x_step'] - ( stepPerFreq * ( 0 + ( freqIndex ) ) );
					stepDiff  = avData['x_step'] - stepShort;
					startWave = offsetWave * ( 1 + freqIndex );

					moveToX   = avData['x_start'] + startWave - 5;
					moveToY   = avData['y_start'] - ( avData['y_step'] * freqIndex );

					lineToX   = moveToX + 5;
					lineToY   = moveToY;

					ctx.lineWidth   = 2;
					ctx.strokeStyle = '#FF0000';
					ctx.beginPath();
					ctx.moveTo( moveToX, moveToY );
					ctx.lineTo( lineToX, lineToY );
					ctx.lineTo( lineToX, lineToY - ( avData['array'][freqIndex][0] / 255 * avData['amplitude'] ) );
					ctx.stroke();
					ctx.closePath();

					moveToX   = avData['x_start'] + startWave + ( avData['maxTimes'] * stepShort ) + 5;
					moveToY   = avData['y_start'] - ( avData['y_step'] * freqIndex );

					lineToX   = moveToX - 5;
					lineToY   = moveToY;

					ctx.lineWidth   = 2;
					ctx.strokeStyle = '#FF0000';
					ctx.beginPath();
					ctx.moveTo( moveToX, moveToY );
					ctx.lineTo( lineToX, lineToY );
					ctx.lineTo( lineToX, lineToY - ( avData['array'][freqIndex][(avData['maxTimes']-1)] / 255 * avData['amplitude'] ) );
					ctx.stroke();
					ctx.closePath();
				}

				if( avData['init'] == 0 )
				{
					saveRreX = 0;
					savePreY = 0;

					for( timeIndex = 0; timeIndex < avData['array'][0].length; timeIndex++ )
					{
						avData['x'] = avData['x'] + avData['x_step'];
				   		avData['y'] = avData['y_start'];

						for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
						{
							avData['y_ziel'] = avData['y'] - ( avData['array'][freqIndex][timeIndex] / 255 * avData['amplitude'] );

							stepShort = avData['x_step'] - ( stepPerFreq * ( 0 + ( freqIndex ) ) );
							stepDiff  = avData['x_step'] - stepShort;
							startWave = offsetWave * ( 1 + freqIndex );

							moveToX   = avData['x_pre'] + startWave - ( ( 1 + timeIndex ) * stepDiff );
							moveToY   = avData['y_pre'][freqIndex];

							lineToX   = moveToX + stepShort;
							lineToY   = avData['y_ziel'];

							ctx.lineWidth   = 1;
							ctx.strokeStyle = '#00FFFF';
							ctx.beginPath();
							ctx.moveTo( moveToX, moveToY );
							ctx.lineTo( lineToX, lineToY );

							// Gitter, senkrechte Linien
							if( saveRreX != 0 && Number.isInteger(timeIndex/3) )
							{
								// dünner zeichnen als Wellen
								if( 1 == 1 )
								{
									ctx.stroke();
									ctx.closePath();

									ctx.lineWidth = 0.3;

									ctx.beginPath();
									ctx.moveTo( lineToX, lineToY );
								}

								ctx.lineTo( saveRreX, savePreY );
							}

							saveRreX = lineToX;
							savePreY = lineToY;

							ctx.stroke();
							ctx.closePath();

							avData['y_pre'][freqIndex] = avData['y_ziel'];
				   			avData['y']                = avData['y'] - avData['y_step'];
						}

						avData['x_pre'] = avData['x'];
					}
				}
			} else
			if( avData['prg'] == 'disc' )
			{
				// Disc
				// ####################################################################################################################################################################

				ctx.strokeStyle       = '#00FFFF';
				ctx.fillStyle         = '#00FFFF';

				useRadiusStep         = avData['radius_step'] * 2;

				gradPerStep           = 360 / avData['maxTimes'];
				avData['alphaPoint'] -= gradPerStep;
				avData['alphaPoint']  = ( avData['alphaPoint'] < 0 ) ? ( avData['alphaPoint'] + 360 ) : avData['alphaPoint'];
				alphaPointBogen       = nGradToRadial( avData['alphaPoint'] );

				ctx.beginPath();
				ctx.ellipse(avData['mp_x'], avData['mp_y'], avData['radius_x'], avData['radius_y'], 0, 0, 2*Math.PI, false);
				ctx.stroke(); ctx.closePath();

				ctx.beginPath();
				ctx.ellipse(avData['mp_x'], avData['mp_y'], avData['radius_x']/4, avData['radius_y']/4, 0, 0, 2*Math.PI, false);
				ctx.stroke(); ctx.fill(); ctx.closePath();

				radXOut = avData['radius_x'] + 25 + ( avData['waves'] * useRadiusStep );
				radYOut = radXOut * avData['faktor'];

				ctx.beginPath();
				ctx.ellipse(avData['mp_x'], avData['mp_y'], radXOut , radYOut , 0, 0, 2*Math.PI, false);
				ctx.stroke(); ctx.closePath();

				if( avData['init'] == 0 )
				{
					// Diagramm-Infos
					// --------------
					sumBaseX        = 215;
					sumBaseY        = 30;

					ctx.lineWidth   = 1;
					ctx.font        = '10px Verdana';
					ctx.strokeStyle = '#00FFFF';

					ctx.fillText('TimeRange: '+avData['timeRange']+' ms', sumBaseX + 50, avData['canvas'].height - sumBaseY - 45 );
					ctx.fillText('       Values: '+avData['maxTimes'],    sumBaseX + 48, avData['canvas'].height - sumBaseY - 25 );
					ctx.fillText('       Waves: '+avData['waves'],        sumBaseX + 48, avData['canvas'].height - sumBaseY -  5 );

					for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
					{
						ctx.lineWidth  = 1;

						for( timeIndex = 0; timeIndex < avData['array'][0].length; timeIndex++ )
						{
							ctx.beginPath();
							ctx.strokeStyle = 'rgb('+avData['rainbow'][freqIndex][0]+','+avData['rainbow'][freqIndex][1]+','+avData['rainbow'][freqIndex][2]+')';

							if( 1 == 2 )
							{
								// Von innen nach aussen
								radius_x       = avData['radius_x'] + 20 + ( freqIndex * useRadiusStep );
								radius_y       = avData['radius_y'] + 20 + ( freqIndex * useRadiusStep );
							} else
							  {
								// Von aussen nach innen
								radius_x       = avData['radius_x'] + 20 + ( avData['waves'] * useRadiusStep ) - ( freqIndex * useRadiusStep );
								radius_y       = avData['radius_y'] + 20 + ( avData['waves'] * useRadiusStep ) - ( freqIndex * useRadiusStep );
							  }

							rangeStart     = ( avData['array'][freqIndex][timeIndex] / 255 * avData['amplitude'] );
							rangeStart     = ( rangeStart == 0 ) ? 2 : rangeStart;

							if( timeIndex < ( avData['array'][0].length - 1 ) )
							{
								rangeEnd = avData['array'][freqIndex][(timeIndex+1)] / 255 * avData['amplitude'];
							} else
							  {
								rangeEnd = avData['array'][freqIndex][0]             / 255 * avData['amplitude'];
							  }

							gradStart      = ( timeIndex * gradPerStep );
							gradStart     -= 90;
							gradBogenStart = nGradToRadial( gradStart );

							gradEnd        = ( timeIndex * gradPerStep ) + gradPerStep;
							gradEnd       -= 90;
							gradBogenEnd   = nGradToRadial( gradEnd );

							xStart         = Math.cos(gradBogenStart) * radius_x;
							yStart         = Math.sin(gradBogenStart) * radius_x;

							xEnd           = Math.cos(gradBogenEnd)   * radius_x;
							yEnd           = Math.sin(gradBogenEnd)   * radius_x;

							moveToX        = avData['mp_x'] + xStart;
							moveToY        = avData['mp_y'] + ( yStart - rangeStart ) * avData['faktor'];

							lineToX        = avData['mp_x'] + xEnd;
							lineToY        = avData['mp_y'] + ( yEnd   - rangeEnd   ) * avData['faktor'];

							ctx.moveTo( moveToX, moveToY );
							ctx.lineTo( lineToX, lineToY );

							ctx.stroke();
							ctx.closePath();
						}
					}
				}

				// Grundzeichnungen
				// ++++++++++++++++
				ctx.strokeStyle = '#FF0000';
				ctx.fillStyle   = '#FF0000';

				apX             = avData['mp_x'] + ( Math.cos(alphaPointBogen) * avData['radius_x'] );
				apY             = avData['mp_y'] + ( Math.sin(alphaPointBogen) * avData['radius_x'] * avData['faktor'] );

				ctx.beginPath();
				ctx.arc(apX, apY, 3, 0, 2*Math.PI, false);
				ctx.stroke(); ctx.fill(); ctx.closePath();

				ctx.strokeStyle = '#00FFFF';
				ctx.fillStyle   = '#00FFFF';

				ctx.beginPath();

				x1Start         = Math.cos( nGradToRadial(268) ) * ( avData['radius_x'] );
				y1Start         = Math.sin( nGradToRadial(268) ) * ( avData['radius_x'] );

				x1End           = Math.cos( nGradToRadial(268) ) * ( avData['radius_x'] + 60 + avData['amplitude'] + ( avData['waves'] * useRadiusStep ) );
				y1End           = Math.sin( nGradToRadial(268) ) * ( avData['radius_x'] + 60 + avData['amplitude'] + ( avData['waves'] * useRadiusStep ) );

				x2End           = Math.cos( nGradToRadial(272) ) * ( avData['radius_x'] + 60 + avData['amplitude'] + ( avData['waves'] * useRadiusStep ) );
				y2End           = Math.sin( nGradToRadial(272) ) * ( avData['radius_x'] + 60 + avData['amplitude'] + ( avData['waves'] * useRadiusStep ) );

				x3Start         = Math.cos( nGradToRadial(272) ) * ( avData['radius_x'] );
				y3Start         = Math.sin( nGradToRadial(272) ) * ( avData['radius_x'] );

				ctx.moveTo( avData['mp_x'] + x1Start, avData['mp_y'] + ( y1Start * avData['faktor'] ) );
				ctx.lineTo( avData['mp_x'] + x1End,   avData['mp_y'] + ( y1End   * avData['faktor'] ) );
				ctx.lineTo( avData['mp_x'] + x2End,   avData['mp_y'] + ( y2End   * avData['faktor'] ) );
				ctx.lineTo( avData['mp_x'] + x3Start, avData['mp_y'] + ( y3Start * avData['faktor'] ) );

				ctx.stroke();  ctx.fill(); ctx.closePath();

				ctx.strokeStyle = '#FF0000';
				ctx.fillStyle   = '#FF0000';

				xRlStart        = Math.cos( nGradToRadial(270) ) * ( avData['radius_x'] + 10 );
				yRlStart        = Math.sin( nGradToRadial(270) ) * ( avData['radius_x'] + 10 );

				xRlEnd          = Math.cos( nGradToRadial(270) ) * ( avData['radius_x'] + 50 + avData['amplitude'] + ( avData['waves'] * useRadiusStep ) );
				yRlEnd          = Math.sin( nGradToRadial(270) ) * ( avData['radius_x'] + 50 + avData['amplitude'] + ( avData['waves'] * useRadiusStep ) );

				ctx.beginPath();
				ctx.moveTo( avData['mp_x'] + xRlStart, avData['mp_y'] + ( yRlStart * avData['faktor'] ) );
				ctx.lineTo( avData['mp_x'] + xRlEnd,   avData['mp_y'] + ( yRlEnd   * avData['faktor'] ) );
				ctx.stroke(); ctx.closePath();

				for( rls = 0; rls < avData['waves']; rls++ )
				{
					ctx.beginPath();
					ctx.moveTo( avData['mp_x'] - 3, avData['mp_y'] - avData['radius_y'] - 20 - ( rls * 4 ) );
					ctx.lineTo( avData['mp_x'] + 3, avData['mp_y'] - avData['radius_y'] - 20 - ( rls * 4 ) );
					ctx.stroke(); ctx.closePath();
				}
			} else
			if( avData['prg'] == 'ellipse' )
			{
				// Ellipse
				// ####################################################################################################################################################################

				ctx.beginPath();
				ctx.ellipse(avData['mp_x'], avData['mp_y'], avData['radius_x'], avData['radius_y'], 0, 0, 2*Math.PI, false);
				ctx.stroke(); ctx.closePath();

				if( avData['init'] == 0 )
				{
					// Summendiagramm
					// --------------
					sumBaseX        = 50;
					sumBaseY        = 30;

					ctx.lineWidth   = 1;
					ctx.font        = '10px Verdana';
					ctx.strokeStyle = '#00FFFF';

					ctx.fillText('20/0 Khz', avData['mp_x'] - 20,                      avData['mp_y'] - avData['radius_y'] + 15 );
					ctx.fillText(   '5 Khz', avData['mp_x'] + avData['radius_x'] - 37, avData['mp_y'] + 3 );
					ctx.fillText(  '10 Khz', avData['mp_x'] - 18,                      avData['mp_y'] + avData['radius_y'] - 10 );
					ctx.fillText(  '15 Khz', avData['mp_x'] - avData['radius_x'] + 8,  avData['mp_y'] + 3 );

					ctx.beginPath();
					ctx.moveTo( sumBaseX,                              avData['canvas'].height - sumBaseY - ( avData['amplitude'] + avData['ampWave'] ) - 10 );
					ctx.lineTo( sumBaseX,                              avData['canvas'].height - sumBaseY );
					ctx.lineTo( sumBaseX + ( avData['maxTimes'] * 3 ), avData['canvas'].height - sumBaseY );
					ctx.stroke(); ctx.closePath();

					ctx.fillText('TimeRange: '+avData['timeRange']+' ms', sumBaseX + ( avData['maxTimes'] * 3 ) + 50, avData['canvas'].height - sumBaseY - 45 );
					ctx.fillText('       Values: '+avData['maxTimes'],    sumBaseX + ( avData['maxTimes'] * 3 ) + 48, avData['canvas'].height - sumBaseY - 25 );
					ctx.fillText('       Waves: '+avData['waves'],        sumBaseX + ( avData['maxTimes'] * 3 ) + 48, avData['canvas'].height - sumBaseY -  5 );

					// Track & Playlist
					// ----------------
					avDurStart = sumBaseX + ( avData['maxTimes'] * 3 ) + 220;
					avDurEnd   = sumBaseX + ( avData['maxTimes'] * 3 ) + 220 + 160;

					avDurPos   = sumBaseX + ( avData['maxTimes'] * 3 ) + 220 + ( currProzbalken / 100 * 160 );
					nvShowTime = ( audio.duration ) ? nMusic_calcTime(audio.currentTime) : '00:00';

					ctx.beginPath();
					ctx.moveTo(avDurStart, avData['canvas'].height - sumBaseY );
					ctx.lineTo(avDurEnd,   avData['canvas'].height - sumBaseY );
					ctx.stroke(); ctx.closePath();

					ctx.beginPath();
					ctx.moveTo(avDurStart, avData['canvas'].height - sumBaseY - 5 );
					ctx.lineTo(avDurStart, avData['canvas'].height - sumBaseY + 5 );
					ctx.stroke(); ctx.closePath();

					ctx.beginPath();
					ctx.moveTo(avDurEnd,   avData['canvas'].height - sumBaseY - 5 );
					ctx.lineTo(avDurEnd,   avData['canvas'].height - sumBaseY + 5 );
					ctx.stroke(); ctx.closePath();

					ctx.beginPath();
					ctx.arc(avDurPos, avData['canvas'].height - sumBaseY, 3, 0, 2*Math.PI, false);
					ctx.stroke(); ctx.fill(); ctx.closePath();

					ctx.fillText('Track: '+(currentNumber+1)+'/'+nMusicPL.length+' - Time: '+nvShowTime, avDurStart + 12, avData['canvas'].height - sumBaseY - 25 );

					gradPerStep = 360 / avData['waves'];

					for( timeIndex = 0; timeIndex < avData['array'][0].length; timeIndex++ )
					{
						radius_x = avData['radius_x'] + ( avData['array'][0].length * avData['radius_step'] ) - ( timeIndex * avData['radius_step'] );
						radius_y = avData['radius_y'] + ( avData['array'][0].length * avData['radius_step'] ) - ( timeIndex * avData['radius_step'] );

						ctx.lineWidth  = 1;
						ctx.moveTo( avData['mp_x'] + radius_x, avData['mp_y'] );

						for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
						{
							ctx.beginPath();
							ctx.strokeStyle = 'rgb('+avData['rainbow'][freqIndex][0]+','+avData['rainbow'][freqIndex][1]+','+avData['rainbow'][freqIndex][2]+')';

							range     = ( avData['array'][freqIndex][timeIndex] / 255 * avData['amplitude'] );
							range     = ( range == 0 ) ? 2 : range;

							grad      = ( freqIndex * gradPerStep ) + ( gradPerStep / 2 );
							grad     -= 90;
							gradBogen = nGradToRadial( grad );

							xStart    = Math.cos(gradBogen) * radius_x;
							yStart    = Math.sin(gradBogen) * radius_x;

							xEnd      = Math.cos(gradBogen) * ( radius_x + range );
							yEnd      = Math.sin(gradBogen) * ( radius_x + range );

							moveToX   = avData['mp_x'] + xStart;
							moveToY   = avData['mp_y'] + ( yStart * avData['faktor'] );

							lineToX   = moveToX;
							lineToY   = moveToY - range;

							ctx.moveTo( moveToX, moveToY );
							ctx.lineTo( lineToX, lineToY );
							ctx.stroke();
							ctx.closePath();

							// Summendiagramm
							// --------------
							if( timeIndex == ( avData['array'][0].length - 1 ) && freqIndex < ( avData['waves'] - 1 ) )
							{
								rangeNext       = ( avData['array'][(freqIndex+1)][timeIndex] / 255 * avData['amplitude'] );
								ctx.strokeStyle = '#00FFFF';
								ctx.beginPath();
								ctx.moveTo( sumBaseX + (   freqIndex       * 3 ), avData['canvas'].height - sumBaseY - ( range     * 1 ) );
								ctx.lineTo( sumBaseX + ( ( freqIndex + 1 ) * 3 ), avData['canvas'].height - sumBaseY - ( rangeNext * 1 ) );
								ctx.stroke();
								ctx.closePath();

								pP = ( valuePeak > 0 ) ? ( valuePeak / 128 *  1 ) : 0;
								pH = avData['canvas'].height - sumBaseY - ( avData['amplitude'] + avData['ampWave'] ) - 10;
								pW = ( avData['amplitude'] + avData['ampWave'] + 10 ) * pP;

								ctx.fillStyle = '#303030';
								ctx.fillRect( sumBaseX - 15, pH, 5, ( avData['amplitude'] + avData['ampWave'] + 10 ) );
								ctx.fillStyle = '#00FFFF';
								ctx.fillRect( sumBaseX - 15, pH + ( avData['amplitude'] + avData['ampWave'] + 10 ) - pW, 5, pW );
							}
						}
					}
				}
			} else
			if( avData['prg'] == 'circle' )
			{
				// Kreis
				// ####################################################################################################################################################################

				ringe   = 15;
				for( se = 1; se <= ringe; se++ )
				{
					seRadius = se * ( avData['radius_x'] / ringe );
					if( se > 10 )
					{
						ctx.beginPath();
						ctx.arc(avData['mp_x'], avData['mp_y'], seRadius, 0, 2*Math.PI, false);
						ctx.stroke(); ctx.closePath();
					}
				}

				if( avData['init'] == 0 )
				{
					// Beschriftungen
					// --------------
					ctx.fillText('20/0 Khz', avData['mp_x'] - 20, 15 );
					ctx.fillText(   '5 Khz', avData['canvas'].width - 85,   avData['mp_y'] + 3 );
					ctx.fillText(  '10 Khz', avData['mp_x'] - 18, avData['canvas'].height - 10 );
					ctx.fillText(  '15 Khz', 55,                   avData['mp_y'] + 3 );

					oscWidth        = 100;
					oscHeight       =  80;
					oscX            = ( avData['canvas'].width / 2 ) - 50;

					ctx.strokeStyle = '#FF0000';
					ctx.fillStyle   = '#FF0000';

					ctx.beginPath();
					ctx.arc( ( avData['canvas'].width / 2 ) - 50, ( avData['canvas'].height / 2 ), 3, 0, 2*Math.PI, false);
					ctx.stroke(); ctx.fill(); ctx.closePath();

					ctx.beginPath();
					ctx.arc( ( avData['canvas'].width / 2 ) + 50, ( avData['canvas'].height / 2 ), 3, 0, 2*Math.PI, false);
					ctx.stroke(); ctx.fill(); ctx.closePath();

					ctx.strokeStyle = '#00FFFF';
					ctx.fillStyle   = '#006666';

					if( 1 == 2 )
					{
						nvShowTime    = ( audio.duration ) ? nMusic_calcTime(audio.currentTime) : '00:00';
						ctx.font      = '20px Verdana';
						ctx.fillText(nvShowTime, ( avData['canvas'].width / 2 ) - 29, ( avData['canvas'].height / 2 ) + 8 );
						ctx.font      = '10px Verdana';
						ctx.fillStyle = '#00FFFF';
					}

					oscGrad    = ( currProzbalken / 100 * 360 ) - 90;
					oscBogen   = nGradToRadial( oscGrad );

					ctx.lineWidth   = 5;
					ctx.beginPath();
					ctx.arc( ( avData['canvas'].width / 2 ), ( avData['canvas'].height / 2 ), 225, -0.5 * Math.PI, oscBogen, false);
					ctx.stroke(); ctx.closePath();

					ctx.lineWidth   = 1;
					ctx.beginPath();
					ctx.moveTo(oscX, ( avData['canvas'].height / 2 ) );

					for( i = 0; i < avData['nPeakDataArray'].length; i++ )
					{
						oscV = ( avData['flat'] == 0 ) ? ( avData['nPeakDataArray'][i] / 128.0 ) : 1;
						oscY = ( avData['canvas'].height / 2 ) - ( oscHeight / 2 ) + ( oscV * oscHeight / 2 );

						ctx.lineTo(oscX, oscY);

						oscX += oscWidth * 1.0 / avData['nPeakDataArray'].length;
					}

					ctx.lineTo( ( avData['canvas'].width / 2 ) + 50, ( avData['canvas'].height / 2 ) );
					ctx.stroke(); ctx.closePath();

					gradPerStep    = 360 / avData['waves'];

					for( timeIndex = ( avData['array'][0].length - 1 ); timeIndex < avData['array'][0].length; timeIndex++ )
					{
						radius_x = avData['radius_x'];
						radius_y = avData['radius_y'];

						ctx.lineWidth   = 1;
						ctx.strokeStyle = '#00FFFF';
						ctx.moveTo( avData['mp_x'] + radius_x, avData['mp_y'] );

						for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
						{
							ctx.beginPath();
							ctx.strokeStyle = 'rgb('+avData['rainbow'][freqIndex][0]+','+avData['rainbow'][freqIndex][1]+','+avData['rainbow'][freqIndex][2]+')';

							range     = ( avData['array'][freqIndex][timeIndex] / 255 * avData['amplitude'] );

							grad      = freqIndex * gradPerStep;
							grad     -= 90;
							gradBogen = nGradToRadial( grad );

							xStart    = Math.cos(gradBogen) * radius_x;
							yStart    = Math.sin(gradBogen) * radius_x;

							xEnd      = Math.cos(gradBogen) * ( radius_x + range );
							yEnd      = Math.sin(gradBogen) * ( radius_x + range );

							moveToX = avData['mp_x'] + xStart;
							moveToY = avData['mp_y'] + yStart;

							lineToX = avData['mp_x'] + xEnd;
							lineToY = avData['mp_y'] + yEnd;

							ctx.moveTo( moveToX, moveToY );
							ctx.lineTo( lineToX, lineToY );
							ctx.stroke();
							ctx.closePath();
						}
					}
				}
			} else
			if( avData['prg'] == 'flower' )
			{
				// MoonFlower
				// ####################################################################################################################################################################

				ctx.beginPath();
				ctx.arc(avData['mp_x'], avData['mp_y'], 1, 0, 2*Math.PI, false);
				ctx.stroke(); ctx.closePath();

				if( avData['init'] == 0 )
				{
					if( avData['rotDir'] == 'r' ) 
					{
						avData['rotOffset'] += avData['rotSpeed'];
					} else
					  {
						avData['rotOffset'] -= avData['rotSpeed'];
					  }

					gradPerStep    = 360 / avData['waves'];

					for( timeIndex = ( avData['array'][0].length - 1 ); timeIndex < avData['array'][0].length; timeIndex++ )
					{
						radius_x        = 1;
						radius_y        = 1;

						ctx.lineWidth   = 1.5;
						ctx.strokeStyle = '#00FFFF';
						ctx.moveTo( avData['mp_x'] + radius_x, avData['mp_y'] );

						for( freqIndex = 0; freqIndex < avData['waves']; freqIndex++ )
						{
							ctx.beginPath();
							ctx.strokeStyle = 'rgb('+avData['rainbow'][freqIndex][0]+','+avData['rainbow'][freqIndex][1]+','+avData['rainbow'][freqIndex][2]+')';

							range     = ( avData['array'][freqIndex][timeIndex] / 255 * avData['amplitude'] );

							grad      = freqIndex * gradPerStep;
							grad     += avData['rotOffset'];

							gradBogen = nGradToRadial( grad );

							xStart    = Math.cos(gradBogen) * radius_x;
							yStart    = Math.sin(gradBogen) * radius_x;

							xEnd      = Math.cos(gradBogen) * ( radius_x + range );
							yEnd      = Math.sin(gradBogen) * ( radius_x + range );

							moveToX = avData['mp_x'] + xStart;
							moveToY = avData['mp_y'] + yStart;

							lineToX = avData['mp_x'] + xEnd;
							lineToY = avData['mp_y'] + yEnd;

							ctx.moveTo( moveToX, moveToY );
							ctx.lineTo( lineToX, lineToY );
							ctx.stroke();
							ctx.closePath();
						}
					}
				}
			} else
			if( avData['prg'] == 'flash' )
			{
				// Oszilloskop
				// #####################################################################################################################################################################################

				oscXstart = 30;
				oscYdiff  = 50;
				oscWidth  = avData['canvas'].width  - ( 2 * oscXstart );
				oscHeight = avData['canvas'].height - ( 2 * oscYdiff  );

				ctx.lineWidth   = 1;
				ctx.strokeStyle = '#FF0000';

				ctx.beginPath();
				ctx.moveTo( ( oscXstart - 1 ), oscYdiff );
				ctx.lineTo( ( oscXstart - 1 ), oscYdiff + oscHeight );
				ctx.stroke(); ctx.closePath();

				ctx.beginPath();
				ctx.moveTo( oscXstart + oscWidth, oscYdiff );
				ctx.lineTo( oscXstart + oscWidth, oscYdiff + oscHeight );
				ctx.stroke(); ctx.closePath();

				for( timeIndex = 0; timeIndex < avData['fadeOsc'].length; timeIndex++ )
				{
					valuesFromStr   = avData['fadeOsc'][timeIndex].split(',');
					fade_r_gb       = 255 / avData['maxTimes'] * ( timeIndex + 1 );
					oscX            = oscXstart;

					ctx.strokeStyle = 'rgb(0,'+fade_r_gb+','+fade_r_gb+')';
					ctx.beginPath();

					for( i = 0; i < valuesFromStr.length; i++ )
					{
						valuePart = parseInt(valuesFromStr[i], 10 );
						oscV      = ( avData['flat'] == 0 ) ? ( valuePart / 128.0 ) : 1;
						oscY      = oscYdiff + ( oscV * oscHeight / 2 );

						if( i == 0 )
						{
							ctx.moveTo(oscX, oscY);
						} else
						  {
							ctx.lineTo(oscX, oscY);
						  }
						oscX +=  oscWidth * 1.0 / valuesFromStr.length;
					}

					ctx.stroke(); ctx.closePath();
				}
			}

			avData['init'] = 0;
		}

		if( avData['run'] == 1 )
		{
			avData['drawTimer'] = window.setTimeout("nAvdraw()", avData['delay']);
		}
	}


	function nAvSwitchRotation()
	{
		rotDirRnd       = Math.round( Math.random() * 10 );
		if( rotDirRnd   > 3  )
		{
			avData['rotDir'] = ( avData['rotDir'] == 'r' ) ? 'l' : 'r';
		}

		avData['rotSpeed'] = 0.5 + Math.floor( Math.random() * avData['rotSpeedMax'] );
		srDelay            = 250 + Math.floor( Math.random() * 2000 );

		avData['rotTimer'] = window.setTimeout("nAvSwitchRotation()", srDelay);
	}


	/* ######################################################################################################################################################################################### */


	function nAvSwitchRun()
	{
		if( avData['run'] == 1 )
		{
			document.getElementById('nVisuButton_run').style.color = '#FF0000';
			avData['run'] = 0;
		} else
		  {
			document.getElementById('nVisuButton_run').style.color = '#00FF00';
			avData['run'] = 1;
			nAvdraw();
		  }
	}


	function nAvSwitchFlat()
	{
		if( avData['flat'] == 1 )
		{
			document.getElementById('nVisuButton_flat').style.color = nButtonColorOff;
			avData['flat'] = 0;
		} else
		  {
			document.getElementById('nVisuButton_flat').style.color = '#FF0000';
			avData['flat'] = 1;
		  }
	}


	function nAvSwitchPrg(dir)
	{
		clearTimeout( avData['drawTimer'] );

		prgPos = avData['programme'].indexOf(avData['prg']);

		if( dir == '+' )
		{
			avData['prg'] = ( prgPos >= ( avData['programme'].length - 1 ) ) ? avData['programme'][0] : avData['programme'][(prgPos+1)];
		} else
		  {
			avData['prg'] = ( prgPos > 0 ) ? avData['programme'][(prgPos-1)] : avData['programme'][(avData['programme'].length-1)];
		  }

		document.getElementById('nVisuButton_prgVAlue').value = avData['prg'].charAt(0).toUpperCase() + avData['prg'].slice(1);

		nAvInit2();
	}


	function nAvSwitchAuto()
	{
		if( avData['auto'] == 1 )
		{
			document.getElementById('nVisuButton_prgAuto').style.color = nButtonColorOff;
			avData['auto'] = 0;
		} else
		  {
			document.getElementById('nVisuButton_prgAuto').style.color = '#00FF00';
			avData['auto'] = 1;
		  }
	}


	function nAvAmplitude(dir)
	{
		ampStep = avData['set'][avData['prg']]['amplitude'] / 20;

		if( dir == '+' )
		{
			avData['amplitude'] += ( avData['amplitude'] < ( avData['set'][avData['prg']]['amplitude'] + ( 10 * ampStep ) ) ) ? ampStep : 0;
		} else
		  {
			avData['amplitude'] -= ( avData['amplitude'] > ( avData['set'][avData['prg']]['amplitude'] - ( 10 * ampStep ) ) ) ? ampStep : 0;
		  }

		if( avData['amplitude'] > avData['set'][avData['prg']]['amplitude'] )
		{
			ampGainProz = Math.round( ( ( avData['amplitude'] - avData['set'][avData['prg']]['amplitude'] ) / avData['set'][avData['prg']]['amplitude'] ) * 100 );
			document.getElementById('nVisuButton_ampVAlue').value = '+'+ampGainProz+'%';
		} else
		if( avData['amplitude'] < avData['set'][avData['prg']]['amplitude'] )
		{
			ampGainProz = Math.round( ( ( avData['set'][avData['prg']]['amplitude'] - avData['amplitude'] ) / avData['set'][avData['prg']]['amplitude'] ) * 100 );
			document.getElementById('nVisuButton_ampVAlue').value = '-'+ampGainProz+'%';
		} else
		  {
			document.getElementById('nVisuButton_ampVAlue').value = '0%';
		  }
	}


	/* ######################################################################################################################################################################################### */


	function nGradToRadial(grad)
	{
		bogen = grad * 2 * Math.PI / 360;
		return bogen;
	}


	Math.avg = function()
	{
		retVal = 0;

		if( arguments.length == 1 )
		{
			if( typeof(arguments[0]) == 'array' || typeof(arguments[0]) == 'object' )
			{
				if( arguments[0].length > 0 )
				{
					for( a = 0; a < arguments[0].length; a++ )
					{
						retVal += parseInt( arguments[0][a], 10 );
					}

					retVal = retVal / arguments[0].length;
				}
			}
		}

		return retVal;
	}


	Math.sum = function()
	{
		retVal = 0;

		if( arguments.length == 1 )
		{
			if( typeof(arguments[0]) == 'array' || typeof(arguments[0]) == 'object' )
			{
				if( arguments[0].length > 0 )
				{
					for( a = 0; a < arguments[0].length; a++ )
					{
						retVal += parseInt( arguments[0][a], 10 );
					}
				}
			}
		}

		return retVal;
	}


	function builtRainbow()
	{
		fc       = 0;
		subCount = avData['waves'] / 6;

		for( fc1 = 0; fc1 < 6; fc1++ )
		{
			for( fc2 = 0; fc2 < subCount; fc2++ )
			{
				valueDESC = 255 - ( fc2 * ( 255 / subCount ) );
				valueASC  =   0 + ( fc2 * ( 255 / subCount ) );

				if( fc1 == 0 || fc1 == 5 ) { valueR = 255; } else if( fc1 == 2 || fc1 == 3 ) { valueR = 0; } else if( fc1 == 1 ) { valueR = valueDESC; } else { valueR = valueASC; }
				if( fc1 == 1 || fc1 == 2 ) { valueG = 255; } else if( fc1 == 4 || fc1 == 5 ) { valueG = 0; } else if( fc1 == 3 ) { valueG = valueDESC; } else { valueG = valueASC; }
				if( fc1 == 3 || fc1 == 4 ) { valueB = 255; } else if( fc1 == 0 || fc1 == 1 ) { valueB = 0; } else if( fc1 == 5 ) { valueB = valueDESC; } else { valueB = valueASC; }

				avData['rainbow'][fc] = new Array(valueR, valueG, valueB);
				fc++;
			}
		}
	}

