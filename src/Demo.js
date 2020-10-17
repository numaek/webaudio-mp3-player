

    var nDemoSteps = [];

	nDemoSteps.push( { 'text' : 'Demo startet... &#9833; &#9835; &#9834; &#9835; &#9836;',	'delay' :  3,	'todo' : '' } );

	nDemoSteps.push( { 'text' : 'Panorama verschieben',		'delay' :  0,	'todo' : 'nDemoPan();' } );
	nDemoSteps.push( { 'text' : 'Stereo-Delay verschieben',		'delay' :  0,	'todo' : 'nDemoStereo();' } );

	nDemoSteps.push( { 'text' : 'ID3 Cover-Bild auslesen',		'delay' :  3,	'todo' : 'nApicSwitch(1, 0);' } );

	nDemoSteps.push( { 'text' : 'Echo-Effekt',			'delay' :  0,	'todo' : 'nDemoEcho();' } );
	nDemoSteps.push( { 'text' : 'Pitch-Regelung',			'delay' :  0,	'todo' : 'nDemoPitch();' } );

	nDemoSteps.push( { 'text' : 'Frequenz-Spektrum: Rain',		'delay' :  5,	'todo' : 'nDrCvSet(2,  50);' } );
	nDemoSteps.push( { 'text' : 'Frequenz-Spektrum: Gap',		'delay' :  5,	'todo' : 'nDrCvSet(2,  76);' } );
	nDemoSteps.push( { 'text' : 'Frequenz-Spektrum: Bright',	'delay' :  5,	'todo' : 'nDrCvSet(2, 100);' } );

	nDemoSteps.push( { 'text' : 'Folge programmieren',		'delay' :  5,	'todo' : 'nMusic_prg(); nDrCvSet(2, 12);' } );
	nDemoSteps.push( { 'text' : 'Web-Radio streamen',		'delay' :  5,	'todo' : 'nMusic_prg(); nMusic_radio();' } );

	nDemoSteps.push( { 'text' : 'Lautst&auml;rke-Anpassung',	'delay' :  3,	'todo' : 'nMusic_radio(); nMusic_drc();' } );
	nDemoSteps.push( { 'text' : 'Loudness',				'delay' :  3,	'todo' : 'nMusic_loud();' } );

	nDemoSteps.push( { 'text' : 'AmbiLight Dauerlicht',		'delay' :  5,	'todo' : 'nMusic_light();' } );
	nDemoSteps.push( { 'text' : 'AmbiLight Lichtorgel',		'delay' :  5,	'todo' : 'nMusic_light(); nMusic_drc();' } );

	nDemoSteps.push( { 'text' : 'Equalizer Beispiel 1',		'delay' :  5,	'todo' : 'nMusic_eqPre();' } );
	nDemoSteps.push( { 'text' : 'Equalizer Beispiel 2',		'delay' :  5,	'todo' : 'nMusic_eqPre();' } );
	nDemoSteps.push( { 'text' : 'Equalizer Beispiel 3',		'delay' :  3,	'todo' : 'nMusic_eqPre();' } );
	nDemoSteps.push( { 'text' : 'Equalizer Flat',			'delay' :  1,	'todo' : 'nMusic_eqFlat();' } );

	nDemoSteps.push( { 'text' : 'Baustein ausblenden',		'delay' :  3,	'todo' : 'nMusic_showDSP(0);' } );
	nDemoSteps.push( { 'text' : 'Baustein einblenden',		'delay' :  1,	'todo' : 'nMusic_showDSP(1);' } );

	nDemoSteps.push( { 'text' : 'DSP Raumklang: Kirche',		'delay' :  5,	'todo' : 'nMusic_dsp(2);' } );
	nDemoSteps.push( { 'text' : 'DSP Raumklang: Theater',		'delay' :  5,	'todo' : 'nMusic_dsp(3);' } );

	nDemoSteps.push( { 'text' : 'Delay-Effekt: SlapBack',		'delay' :  5,	'todo' : 'nMusic_dsp(3); nMusic_FxSlapback();' } );
	nDemoSteps.push( { 'text' : 'Delay-Effekt: Chorus',		'delay' :  5,	'todo' : 'nMusic_FxSlapback(); nMusic_FxChorus();' } );

	nDemoSteps.push( { 'text' : 'Visualisierung...',		'delay' :  3,	'todo' : 'nMusic_FxChorus();' } );
	nDemoSteps.push( { 'text' : 'Visualisierung: Circle',		'delay' :  7,	'todo' : 'nMusic_visu();' } );
	nDemoSteps.push( { 'text' : 'Visualisierung: Disc',		'delay' :  7,	'todo' : 'nAvSwitchPrg("+");' } );
	nDemoSteps.push( { 'text' : 'Visualisierung: Ellipse',		'delay' :  7,	'todo' : 'nAvSwitchPrg("+");' } );

	nDemoSteps.push( { 'text' : 'Demo beendet!',			'delay' :  0,	'todo' : 'nMusic_visu();' } );

	var nDemoActive   = 0;
	var nDemoNr       = 0;
	var nDemoLength   = 0;
	var nDemoDuration = 0;
	var nDemoCurrent  = 0;
	var nDemoBuffer   = '';
	var nDemoDisplay  = '';
	var nDemoTimer;


	function nDemoSwitch()
	{
		if( nDemoActive == 0 )
		{
			document.getElementById('nDisplayTrack').style.marginLeft = 0 + 'px';
			nDemoDisplay  = document.getElementById('nDisplayTrack').innerHTML;
			nDispTRKcount = 0;
			nDispTRKrun   = 0;
			clearTimeout(nDispTRKtimer);

			nDemoActive = 1;

			nDemoBuffer = document.getElementById('nDisplayWAP').innerHTML;
			document.getElementById('nDisplayWAP').style.borderColor = 'gold';
			document.getElementById('nMusicButton_demo').style.color = nPlayerColor;
			nMusic_play();
			nDemoRun();
		} else
		  {
			document.getElementById('nDisplayTrack').innerHTML       = nDemoDisplay;

			nDemoActive = 0;

			document.getElementById('nDisplayWAP').innerHTML         = nDemoBuffer;
			document.getElementById('nDisplayWAP').style.borderColor = '#303030';
			document.getElementById('nMusicButton_demo').style.color = '#FFFFFF';
			clearTimeout(nDemoTimer);
		  }
	}


	function nDemoRun()
	{
		if( nDemoActive == 1 )
		{
			nDemoCurrent  = 0;
			nDemoDuration = 0;
			nDemoLength   = nDemoSteps.length;

			for( dd = 0; dd < nDemoLength; dd++ )
			{
				if( dd < nDemoNr )
				{
					nDemoCurrent += nDemoSteps[dd].delay;
				}

				nDemoDuration += nDemoSteps[dd].delay;
			}

			nDemoProgress = 380 * ( nDemoCurrent / nDemoDuration );		// Alt: 180

			if( nDemoNr > 0 )
			{
				innerContent = '&nbsp;&nbsp;- '+nDemoSteps[nDemoNr].text;
			} else
			  {
				innerContent = '&nbsp;&nbsp;'+nDemoSteps[nDemoNr].text;
			  }

			nDemoTitle = nDemoCurrent+' von '+nDemoDuration+' Sekunden';

		//	document.getElementById('nDisplayWAP').innerHTML   = '<div style="width: '+nDemoProgress+'px; height: 14px; position: absolute; background-color: #008080; border-radius: 10px;"></div><div style="position: absolute; cursor: Help;" title="'+nDemoTitle+'">'+innerContent+'</div>';
			document.getElementById('nDisplayTrack').innerHTML = '<div style="width: '+nDemoProgress+'px; height: 14px; position: absolute; background-color: #008080; border-radius: 10px;"></div><div style="position: absolute; cursor: Help;" title="'+nDemoTitle+'">'+innerContent+'</div>';

			eval( nDemoSteps[nDemoNr].todo );

			if( nDemoNr < ( nDemoSteps.length - 1 ) )
			{
				if( nDemoSteps[nDemoNr].delay > 0 )
				{
					nDemoTimer = window.setTimeout('nDemoRun()', (nDemoSteps[nDemoNr].delay*1000));
				}
				nDemoNr++;
			} else
			  {
				nDemoNr = 0;
				window.setTimeout('nDemoSwitch()', 4000);
			  }
		} else
		  {
			clearTimeout(nDemoTimer);
		  }
	}


	// -----------------------------------------------------------------------------------------------------------------------------------


	// Panorama
	var      nDemoPanVar = 0;
	function nDemoPan()
	{
		nDrCvSet(4, nDemoPanVar);
		    nDemoPanVar += 2;
		    nDemoPanVar  = ( nDemoPanVar > 100 ) ? 100 : nDemoPanVar;
		if( nDemoPanVar  < 100 )
		{
			window.setTimeout('nDemoPan()', 100);
		} else
		  {
			nDrCvSet(4, 50);
			nDemoRun();
		  }
	}


	// Stereo-Delay
	var      nDemoStereoVar = 0;
	function nDemoStereo()
	{
		nDrCvSet(9, nDemoStereoVar);
		    nDemoStereoVar += 2;
		    nDemoStereoVar  = ( nDemoStereoVar > 100 ) ? 100 : nDemoStereoVar;
		if( nDemoStereoVar  < 100 )
		{
			window.setTimeout('nDemoStereo()', 100);
		} else
		  {
			nDrCvSet(9, 50);
			nDemoRun();
		  }
	}


	// Echo-Effekt
	var      nDemoEchoVar = 0;
	function nDemoEcho()
	{
		nDrCvSet(3, nDemoEchoVar);
		    nDemoEchoVar += 2;
		    nDemoEchoVar  = ( nDemoEchoVar > 100 ) ? 100 : nDemoEchoVar;
		if( nDemoEchoVar  < 100 )
		{
			window.setTimeout('nDemoEcho()', 100);
		} else
		  {
			nDrCvSet(3, 0);
			nDemoRun();
		  }
	}


	// Pitch-Regelung
	var      nDemoPitchVar = 0;
	function nDemoPitch()
	{
		nSrCvSet(1, nDemoPitchVar);
		    nDemoPitchVar += 2;
		    nDemoPitchVar  = ( nDemoPitchVar > 100 ) ? 100 : nDemoPitchVar;
		if( nDemoPitchVar  < 100 )
		{
			window.setTimeout('nDemoPitch()', 100);
		} else
		  {
			nSrCvSet(1, 50);
			nDemoRun();
		  }
	}

