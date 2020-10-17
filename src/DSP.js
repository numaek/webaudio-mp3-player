

	// ##### DSP #####
	// =============================================================================================================================================================================

	var nIrEffects = [];

	    nIrEffects[0]           = [];
	    nIrEffects[0]['file']   = 'IR_Hall.wav';
	    nIrEffects[0]['titel']  = 'Echo';
	    nIrEffects[0]['button'] = 'nMusicButton_dspHall';
	    nIrEffects[0]['loaded'] = 0;

	    nIrEffects[1]           = [];
	    nIrEffects[1]['file']   = 'IR_Studio.wav';
	    nIrEffects[1]['titel']  = 'Tonstudio';
	    nIrEffects[1]['button'] = 'nMusicButton_dspStudio';
	    nIrEffects[1]['loaded'] = 0;

	    nIrEffects[2]           = [];
	    nIrEffects[2]['file']   = 'IR_Church.wav';
	    nIrEffects[2]['titel']  = 'Kirche';
	    nIrEffects[2]['button'] = 'nMusicButton_dspChurch';
	    nIrEffects[2]['loaded'] = 0;

	    nIrEffects[3]           = [];
	    nIrEffects[3]['file']   = 'IR_Theatre.wav';
	    nIrEffects[3]['titel']  = 'Theater';
	    nIrEffects[3]['button'] = 'nMusicButton_dspTheatre';
	    nIrEffects[3]['loaded'] = 0;

	var nIrBuffer    = [];
	var nIrConvolver = [];
	var nIrgetSound  = [];

	var nIrNumber    = -1;


	function nMusic_IrLoad(nc)
	{
		try
		{
			nIrConvolver[nc]              = audioCtx.createConvolver();
			 nIrgetSound[nc]              = new XMLHttpRequest();
			 nIrgetSound[nc].open('GET', 'src/'+nIrEffects[nc]['file'], true);
			 nIrgetSound[nc].responseType = 'arraybuffer';
			 nIrgetSound[nc].onload       = function()
			 {
				audioCtx.decodeAudioData(nIrgetSound[nc].response, function(buffer)
				{
					nIrBuffer[nc] = buffer;
					nMusic_IrTransfer(nIrBuffer[nc], nc);
		  			nVuMerger.connect(nIrConvolver[nc]);

				}, onDecodeError);
			 }
			 nIrgetSound[nc].send();
		} catch(e)
		  {
			 console.log(e);
		  }
	}


	function nMusic_IrTransfer(data, nr)
	{
		nIrConvolver[nr].buffer  = data;
		nIrEffects[nr]['loaded'] = 1;
		document.getElementById(nIrEffects[nr]['button']).style.color = 'orange';
	}


	function nMusic_dsp(number)
	{
		if( nIrEffects[number]['loaded'] == 1 )
		{
			for( na = 0; na < nIrEffects.length; na++ )
			{
				document.getElementById(nIrEffects[na]['button']).style.color = ( nIrEffects[na]['loaded'] == 1 ) ? 'orange' : nButtonColorOff;
			}

			if( nIrNumber != -1 )
			{
				// Aktiven Pfad lösen
				nIrConvolver[nIrNumber].disconnect(nIrGain);
			}

			if( number != nIrNumber )
			{
				// Anderen Effekt einschalten
				nIrNumber    = number;
				document.getElementById(nIrEffects[number]['button']).style.color = nPlayerColor;
				nIrConvolver[nIrNumber].connect(nIrGain);
			} else
			  {
				// Aktiven Effekt wieder ausschalten, ist bereits getrennt worden
				nIrNumber    = -1;
				document.getElementById(nIrEffects[number]['button']).style.color = ( nIrEffects[number]['loaded'] == 1 ) ? 'orange' : nButtonColorOff;
			  }
		} else
		  {
			if( nPlayerInFrame != 0 && nDjConfig['dsp'] == 0 )
			{
				alert('Diese Funktion ist in der DJ-konfiguration gesperrt!');
			}
		  }
	}


	var nOsc = -1;

	function nMusic_osc()
	{
		if( nOsc == -1 || nOsc == 0 )
		{
			if( nOsc == -1 )
			{
				    nOsc_Sine.start();
				  nOsc_Square.start();
				nOsc_Triangle.start();
				nOsc_Sawtooth.start();
			}

			document.getElementById('nMusicButton_dspOsc').style.color = nPlayerColor;
			document.getElementById('ledOsc').src                      = 'src/led_gruen.gif';
			nOscGain.connect(nEqPreGain);
			nOsc = 1;
			nFreqRun();
		} else
		  {
			document.getElementById('nMusicButton_dspOsc').style.color = nButtonColorOff;
			document.getElementById('ledOsc').src                      = 'src/led_aus.gif';
			nOscGain.disconnect(nEqPreGain);
			nOsc = 0;
		  }
	}


	var nFx_Slapback = -1;
	function nMusic_FxSlapback()
	{
		if( nFx_Slapback == 1 )
		{
			nSBGain.disconnect(nEqPreGain);
			document.getElementById('nMusicButton_FxSlapback').style.color = nButtonColorOff;
			nFx_Slapback = 0;
		} else
		  {
			nSBGain.connect(nEqPreGain);
			document.getElementById('nMusicButton_FxSlapback').style.color = nPlayerColor;
			nFx_Slapback = 1;
		  }
	}


	var nFx_Pingpong = -1;
	function nMusic_FxPingpong()
	{
		if( nFx_Pingpong == 1 )
		{
			nVuMerger.disconnect(nPPSplitter);
			nPPMerger.disconnect(nFreqAnalyser);
			document.getElementById('nMusicButton_FxPingPong').style.color = nButtonColorOff;
			nFx_Pingpong = 0;
		} else
		  {
			nVuMerger.connect(nPPSplitter);
			nPPMerger.connect(nFreqAnalyser);
			document.getElementById('nMusicButton_FxPingPong').style.color = nPlayerColor;
			nFx_Pingpong = 1;
		  }
	}


	var nFx_Chorus = -1;
	function nMusic_FxChorus()
	{
		if( nFx_Chorus == 1 )
		{
			nChorusDelay.disconnect(audioCtx.destination);
			document.getElementById('nMusicButton_FxChorus').style.color = nButtonColorOff;
			nFx_Chorus = 0;
		} else
		  {
			nChorusDelay.connect(audioCtx.destination);
			document.getElementById('nMusicButton_FxChorus').style.color = nPlayerColor;
			nFx_Chorus = 1;
		  }
	}


	var nFx_Tremolo = -1;
	function nMusic_FxTremolo()
	{
		if( nFx_Tremolo == 1 )
		{
			nTrGain.disconnect(nTrSumGain);
			document.getElementById('nMusicButton_FxTremolo').style.color = nButtonColorOff;
			nFx_Tremolo = 0;
		} else
		  {
			if( nFx_Tremolo == -1 )
			{
				nTrLFO.start(0);
			}
			nTrGain.connect(nTrSumGain);
			document.getElementById('nMusicButton_FxTremolo').style.color = nPlayerColor;
			nFx_Tremolo = 1;
		  }
	}


	// ##### Micro #####
	// =================

	var nMicro_on    = 0;
	var nMicro_first = 0;

	var mrRecorder;
	var mrChunks     = [];
	var mrReady      = 0;
	var mrActive     = 0;
	var mrSeconds    = 0;
	var mrTimeBuffer = 0;

	function mrRun(mode)
	{
		if( mode == -1 )
		{
			mode = ( mrActive == 1 ) ? 0 : 1;
		}

		if( mode == 0 )
		{
			mrRecorder.stop();
			mrSeconds += Math.floor( ( Date.now() - mrTimeBuffer ) / 1000 );
			document.getElementById('nMusicButton_mrRec').style.color       = '#FFFFFF';
			document.getElementById('nMusicButton_mrRec').style.borderColor = nPlayerColor;
			mrActive = 0;
		} else
		  {
			if( nMicro_on == 1 && mrReady == 1 )
			{
				mrRecorder.start();
				mrTimeBuffer = Date.now();
				document.getElementById('nMusicButton_mrRec').style.color       = '#00FFFF';
				document.getElementById('nMusicButton_mrRec').style.borderColor = '#FF0000';
				mrActive = 1;
			} else
			  {
				if( nMicro_on == 0 )
				{
					alert('Der Microfon-Eingang ist deaktiviert!');
				} else
				  {
					alert('Der Microfon-Eingang ist noch nicht bereit!');
				  }
			  }
		  }
	}

	function mrReset()
	{
		if( mrActive == 1 )
		{
			mrRun(0);
			window.setTimeout('mrReset()', 500);
		} else
		  {
			var Checkdelete = confirm('Es sind derzeit '+mrSeconds+' Sekunden gespeichert!\nSoll die Aufnahme jetzt verworfen werden?');
			if( Checkdelete != false )
			{
				mrChunks     = [];
				mrSeconds    = 0;
				mrTimeBuffer = 0;
			}
		  }
	}

	function mrSave()
	{
		if( mrActive == 1 )
		{
			mrRun(0);
			window.setTimeout('mrSave()', 500);
		} else
		  {
			if( mrChunks.length > 0 )
			{
				// console.log( mrRecorder.mimeType + MediaRecorder.isTypeSupported("audio/webm\;codecs=opus") );

				mrStoptime          = Math.floor( Date.now() / 1000 );
				var blob            = new Blob(mrChunks, { 'type' : 'audio/webm; codecs=opus' });
				mrAudioURL          = window.URL.createObjectURL(blob);

				alert('Der Download wird als .webm Datei (Web-Media) erzeugt.\nDiese kann z.B. direkt im Web-Browser abgespielt werden.');

				mrDownload          = document.createElement('a');
				document.body.appendChild(mrDownload);
				mrDownload.style    = 'display: none';
				mrDownload.href     = mrAudioURL;
				mrDownload.download = 'nwapDownload_'+mrStoptime+'.webm';
				mrDownload.click();

				mrChunks            = [];
				mrSeconds           = 0;
				mrTimeBuffer        = 0;
				window.URL.revokeObjectURL(mrAudioURL);
			} else
			  {
				alert('Der Speicher ist derzeit leer!');
			  }
		  }
	}

	function nMusic_micro()
	{
		if( nFreqIsAPI == 1 )
		{
			if( nMicro_on == 0 )
			{
				if( nMicro_first == 0 )
				{
					document.getElementById('nMusicButton_micro').style.color = '#FFFF00';
					document.getElementById('ledMicro').src                   = 'src/led_gelb.gif';

					nMicro_first        = 1;

					nVuAnaMicro         = audioCtx.createAnalyser();
					nVuAnaMicro.fftSize = 256;

					nVuBufferLenMicro   = nVuAnaMicro.frequencyBinCount;
					nVuDataArrMicro     = new Uint8Array(nVuBufferLenMicro);

					nMicroGain          = audioCtx.createGain();
					nMicroGain.gain.setValueAtTime(0.5, audioCtx.currentTime);

					if( navigator.mediaDevices )
					{
						navigator.mediaDevices.getUserMedia ({audio: true}).then(function(stream)
						{
							var microSource = audioCtx.createMediaStreamSource(stream);
							    microSource.connect(nVuAnaMicro);
							    microSource.connect(nMicroGain);

							document.getElementById('nMusicButton_micro').style.color = '#00FF00';
							document.getElementById('ledMicro').src                   = 'src/led_gruen.gif';

							// Aufnahme
							mrReady = 1;
							mrRecorder                 = new MediaRecorder(stream);
							mrRecorder.ondataavailable = function(event) { mrChunks.push(event.data); }
							mrRecorder.onerror         = function(errEv) { alert('Aufnahmefehler: '+errEv.error); }

						}).catch(function(err)
						{
							microMsg  = 'Micorfon-Fehler!';
							microMsg += ( typeof(err) !== 'undefined' ) ? ' '+err : '';
						});
					} else
					  {
						console.log('Das Microfon wird in diesem Browser nicht unterstützt!');
					  }
				} else
				  {
					document.getElementById('nMusicButton_micro').style.color = '#00FF00';
					document.getElementById('ledMicro').src                   = 'src/led_gruen.gif';
				  }

				audioCtx.resume();
				nMicroGain.connect(nEqPreGain);
				nMicro_on = 1;
				nFreqRun();
			} else
			  {
				nMicroGain.disconnect(nEqPreGain);
				document.getElementById('nMusicButton_micro').style.color = '#FFFFFF';
				document.getElementById('ledMicro').src                   = 'src/led_aus.gif';
				nMicro_on = 0;

				// VU-Balken leeren
				var nCVMicro = document.getElementById('nMicroVU');
				if( nCVMicro.getContext )
				{
					nCVMicro           = nCVMicro.getContext('2d');
					nCVMicro.fillStyle = '#000000';
					nCVMicro.clearRect(0, 0, 12, 50);
					nCVMicro.fillRect( 0, 0, 12, 50);
				}

				// Aufnahme ggf. beenden
				if( mrActive == 1 )
				{
					mrRun(0);
				}
			  }
		}
	}

