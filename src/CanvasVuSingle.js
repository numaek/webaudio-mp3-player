

	var nVuSingleConfig    = new Array();


	    nVuSingleConfig[0] = new Array();
	    nVuSingleConfig[0]['myCvId']       = 'nVuSingleLeft';
	    nVuSingleConfig[0]['lage']         = 'v';
	    nVuSingleConfig[0]['balkenWidth']  = 10;
	    nVuSingleConfig[0]['balkenHeight'] = 4;
	    nVuSingleConfig[0]['balkenSpace']  = 3;
	    nVuSingleConfig[0]['randLinks']    = 5;
	    nVuSingleConfig[0]['randUnten']    = 5;
	    nVuSingleConfig[0]['rndRange']     = 40;
	    nVuSingleConfig[0]['ausFrame']     = 1;
	    nVuSingleConfig[0]['volBasis']     = 100;
	    nVuSingleConfig[0]['init']         = 0;


	    nVuSingleConfig[1] = new Array();
	    nVuSingleConfig[1]['myCvId']       = 'nVuSingleRight';
	    nVuSingleConfig[1]['lage']         = 'v';
	    nVuSingleConfig[1]['balkenWidth']  = 10;
	    nVuSingleConfig[1]['balkenHeight'] = 4;
	    nVuSingleConfig[1]['balkenSpace']  = 3;
	    nVuSingleConfig[1]['randLinks']    = 5;
	    nVuSingleConfig[1]['randUnten']    = 5;
	    nVuSingleConfig[1]['rndRange']     = 40;
	    nVuSingleConfig[1]['ausFrame']     = 1;
	    nVuSingleConfig[1]['volBasis']     = 100;
	    nVuSingleConfig[1]['init']         = 0;


	function nVuCvLedSingle(nr)
	{
		if( nVuSingleConfig[nr]['init'] == 0 )
		{
			myCanvas = document.getElementById(nVuSingleConfig[nr]['myCvId']);

			nVuSingleConfig[nr]['width']  = myCanvas.width;
			nVuSingleConfig[nr]['height'] = myCanvas.height;
	  		nVuSingleConfig[nr]['init']   = 1;

			if( nVuSingleConfig[nr]['lage'] == 'v' )
			{
				nVuSingleConfig[nr]['randLinks'] = Math.round( ( nVuSingleConfig[nr]['width']  - nVuSingleConfig[nr]['balkenWidth'] ) / 2 );
			} else
			  {
				nVuSingleConfig[nr]['randUnten'] = Math.round( ( nVuSingleConfig[nr]['height'] - nVuSingleConfig[nr]['balkenHeight'] ) / 2 );
			  }
		}

		if( nVuSingleConfig[nr]['volBasis'] == -1 )
		{
			// Sonderfall: Daten aus Lautstärkeregler Player links auslesen -> wird aber schon in Analyser verrechnet!
			if( 1 == 2 )
			{
				nVuBasis = document.getElementById('audio1').volume * 100;
			}
		} else
		  {
			nVuBasis = nVuSingleConfig[nr]['volBasis'];
		  }

		if( nVuSingleConfig[nr]['ausFrame'] == 1 )
		{
			// Aus Frame
			// ---------
			if( nr == 0 )
			{
				if( typeof(deckLinks) !== 'undefined' )
				{
					if( deckLinks.document.getElementById('audio1').paused == false || deckLinks.nOsc == 1 )
					{
						daten = ( typeof(deckLinks.nVuAvgCommon)  === 'undefined' ) ? 0 : deckLinks.nVuAvgCommon;
					} else
					  {
						daten = 0;
					  }
				} else
				  {
					daten = 0;
				  }
			}

			if( nr == 1 )
			{
				if( typeof(deckRechts) !== 'undefined' )
				{
					if( deckRechts.document.getElementById('audio1').paused == false || deckRechts.nOsc == 1 )
					{
						daten = ( typeof(deckRechts.nVuAvgCommon) === 'undefined' ) ? 0 : deckRechts.nVuAvgCommon;
					} else
					  {
						daten = 0;
					  }
				} else
				  {
					daten = 0;
				  }
			}
		} else
		  {
			// Zufall
			// ------
			daten = nVuBasis   - ( nVuSingleConfig[nr]['rndRange'] / 2 ) + Math.floor( ( Math.random() * nVuSingleConfig[nr]['rndRange'] ) + 1 ) - 25;
			daten = ( daten  <   0 ) ?   0 : daten;
			daten = ( daten  > 100 ) ? 100 : daten;
		  }

		// Zeichnen
		// --------
		var nVuCvLedS = document.getElementById(nVuSingleConfig[nr]['myCvId']);
		if( nVuCvLedS.getContext )
		{
			nVuCvLedS           = nVuCvLedS.getContext('2d');
			nVuCvLedS.fillStyle = '#000000';
			nVuCvLedS.clearRect(0, 0, nVuSingleConfig[nr]['width'], nVuSingleConfig[nr]['height']);
			nVuCvLedS.fillRect( 0, 0, nVuSingleConfig[nr]['width'], nVuSingleConfig[nr]['height']);

			for( h = 0; h < 16; h++ )
			{
				myValue = 6.25 * h;	// Alle 16 LED's
				myValue = 7.50 * h;	// Nur bis zur ersten roten

				if( daten > myValue )
				{
					if( daten > ( 6.25 * 13 ) && h > 12 )
					{
						nVuCvLedS.fillStyle = '#FF0000';
					} else
					if( daten > ( 6.25 * 10 ) && h > 9 )
					{
						nVuCvLedS.fillStyle = '#FFFF00';
					} else
					  {
						nVuCvLedS.fillStyle = '#00FF00';
					  }
				} else
				  {
					//	nVuCvLedS.fillStyle = '#303030';
					if( h > 12 )
					{
						nVuCvLedS.fillStyle = '#300000';
					} else
					if( h > 9 )
					{
						nVuCvLedS.fillStyle = '#303000';
					} else
					  {
						nVuCvLedS.fillStyle = '#003000';
					  }
				  }

				if( nVuSingleConfig[nr]['lage'] == 'v' )
				{
					nVuCvLedS.fillRect( nVuSingleConfig[nr]['randLinks'], ( nVuSingleConfig[nr]['height'] - nVuSingleConfig[nr]['randUnten'] - nVuSingleConfig[nr]['balkenHeight'] - 0 ) - ( h * ( nVuSingleConfig[nr]['balkenHeight'] + nVuSingleConfig[nr]['balkenSpace'] ) ), nVuSingleConfig[nr]['balkenWidth'], nVuSingleConfig[nr]['balkenHeight']);
				} else
				  {
					nVuCvLedS.fillRect( nVuSingleConfig[nr]['randLinks'] + ( h * ( nVuSingleConfig[nr]['balkenWidth'] + nVuSingleConfig[nr]['balkenSpace'] ) ), ( nVuSingleConfig[nr]['height'] - nVuSingleConfig[nr]['randUnten'] - nVuSingleConfig[nr]['balkenHeight'] ), nVuSingleConfig[nr]['balkenWidth'], nVuSingleConfig[nr]['balkenHeight']);
				  }
			}
		}
	}

