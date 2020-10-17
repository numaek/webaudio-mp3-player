

	// ##### Hauptdisplay-Umschaltung #####
	// =============================================================================================================================================================================


	var nDisplayLayer  = 0;
	var nDisplaySource = '';

	function nDisplaySwitch()
	{
		// Normal(0) -> Coverbild(1) -> Oszilloskop(2) -> Freqenzband(3) -> VU-Meter(4) -> Uhr(5) -> Willkommen(6)

		nApicBigSwitch(0);
		  nClockSwitch(0);
		nWelcomeSwitch(0);
		nCopySwitch(0);

		nDisplayLayer++;

		if( nDisplayLayer == 1 )
		{
			// Coverbild
			nApicBigSwitch(1);
		} else
		if( nDisplayLayer == 2 )
		{
			// Oszilloskop
			nDisplaySource = 'osz';
			nCopySwitch(1);

			document.getElementById('canvasCopy').getContext('2d').drawImage(document.getElementById('nOszCanvas'),  0, 0, 250, 100, 0, 0, 380, 180);
		} else
		if( nDisplayLayer == 3 )
		{
			// Freqenzband
			nDisplaySource = 'freq';
			nCopySwitch(1);

			document.getElementById('canvasCopy').getContext('2d').drawImage(document.getElementById('nFreqCanvas'), 0, 0, 250, 100, 0, 0, 380, 180);
		} else
		if( nDisplayLayer == 4 )
		{
			// VU-Meter
			nDisplaySource = 'vu';
			nCopySwitch(1);
		} else
		if( nDisplayLayer == 5 )
		{
			// Uhr
			nClockSwitch(1);
		} else
		if( nDisplayLayer == 6 )
		{
			// Willkommen
			nWelcomeSwitch(1);
		} else
		  {
			// Normal
			nDisplayLayer = 0;
		  }
	}


	var nCopyStatus = 0;
	function nCopySwitch(mode)
	{
		// Canvas leeren
		copyCanvasID   = document.getElementById('canvasCopy');
		copyCanvasData = copyCanvasID.getContext('2d');
		copyCanvasData.clearRect(0, 0, copyCanvasID.width, copyCanvasID.height);

		if( mode == -1 )
		{
			if( document.getElementById('mainDisplayAnimation').style.display == 'block' )
			{
				mode = 0;
			} else
			  {
				mode = 1;
			  }
		}

		if( mode == 1 )
		{
			document.getElementById('mainDisplayWelcome').style.display      = 'none';
			document.getElementById('mainDisplayWelcome').style.visibility   = 'hidden';

			document.getElementById('mainDisplayClock').style.display        = 'none';
			document.getElementById('mainDisplayClock').style.visibility     = 'hidden';

			document.getElementById('mainDisplayCover').style.display        = 'none';
			document.getElementById('mainDisplayCover').style.visibility     = 'hidden';

			document.getElementById('mainDisplayAnimation').style.display    = 'block';
			document.getElementById('mainDisplayAnimation').style.visibility = 'visible';

			nCopyStatus    = 1;
			nApicBigStatus = 0;
			nClockStatus   = 0;
			nWelcomeStatus = 0;
		} else
		  {
			document.getElementById('mainDisplayAnimation').style.display    = 'none';
			document.getElementById('mainDisplayAnimation').style.visibility = 'hidden';

			nCopyStatus    = 0;
		  }
	}


	var nApicBigStatus = 0;
	function nApicBigSwitch(mode)
	{
		if( mode == -1 )
		{
			if( document.getElementById('mainDisplayCover').style.display == 'block' )
			{
				mode = 0;
			} else
			  {
				mode = 1;
			  }
		}

		if( mode == 1 )
		{
			document.getElementById('nApicBig').src                          = document.getElementById('nApic').src;

			document.getElementById('mainDisplayWelcome').style.display      = 'none';
			document.getElementById('mainDisplayWelcome').style.visibility   = 'hidden';

			document.getElementById('mainDisplayClock').style.display        = 'none';
			document.getElementById('mainDisplayClock').style.visibility     = 'hidden';

			document.getElementById('mainDisplayAnimation').style.display    = 'none';
			document.getElementById('mainDisplayAnimation').style.visibility = 'hidden';

			document.getElementById('mainDisplayCover').style.display        = 'block';
			document.getElementById('mainDisplayCover').style.visibility     = 'visible';

			nApicBigStatus = 1;
			nClockStatus   = 0;
			nWelcomeStatus = 0;
			nCopyStatus    = 0;

			nDisplayLayer  = 1;
		} else
		  {
			document.getElementById('mainDisplayCover').style.display        = 'none';
			document.getElementById('mainDisplayCover').style.visibility     = 'hidden';

			nApicBigStatus = 0;
		  }
	}


	var nClockStatus = 0;
	function nClockSwitch(mode)
	{
		if( mode == -1 )
		{
			if( document.getElementById('mainDisplayClock').style.display == 'block' )
			{
				mode = 0;
			} else
			  {
				mode = 1;
			  }
		}

		if( mode == 1 )
		{
			document.getElementById('mainDisplayWelcome').style.display      = 'none';
			document.getElementById('mainDisplayWelcome').style.visibility   = 'hidden';

			document.getElementById('mainDisplayCover').style.display        = 'none';
			document.getElementById('mainDisplayCover').style.visibility     = 'hidden';

			document.getElementById('mainDisplayAnimation').style.display    = 'none';
			document.getElementById('mainDisplayAnimation').style.visibility = 'hidden';

			document.getElementById('mainDisplayClock').style.display        = 'block';
			document.getElementById('mainDisplayClock').style.visibility     = 'visible';

			nClockStatus   = 1;
			nApicBigStatus = 0;
			nWelcomeStatus = 0;
			nCopyStatus    = 0;

			nDisplayLayer  = 5;

			nMusic_displayTime();
		} else
		  {
			document.getElementById('mainDisplayClock').style.display        = 'none';
			document.getElementById('mainDisplayClock').style.visibility     = 'hidden';

			nClockStatus   = 0;
		  }
	}


	var nWelcomeStatus = 0;
	function nWelcomeSwitch(mode)
	{
		if( mode == -1 )
		{
			if( document.getElementById('mainDisplayWelcome').style.display == 'block' )
			{
				mode = 0;
			} else
			  {
				mode = 1;
			  }
		}

		if( mode == 1 )
		{
			document.getElementById('mainDisplayClock').style.display        = 'none';
			document.getElementById('mainDisplayClock').style.visibility     = 'hidden';

			document.getElementById('mainDisplayCover').style.display        = 'none';
			document.getElementById('mainDisplayCover').style.visibility     = 'hidden';

			document.getElementById('mainDisplayAnimation').style.display    = 'none';
			document.getElementById('mainDisplayAnimation').style.visibility = 'hidden';

			document.getElementById('mainDisplayWelcome').style.display      = 'block';
			document.getElementById('mainDisplayWelcome').style.visibility   = 'visible';

			nWelcomeCtx('+');

			nWelcomeStatus = 1;
			nApicBigStatus = 0;
			nClockStatus   = 0;
			nCopyStatus    = 0;

			nDisplayLayer  = 6;
		} else
		  {
			document.getElementById('mainDisplayWelcome').style.display      = 'none';
			document.getElementById('mainDisplayWelcome').style.visibility   = 'hidden';

			nWelcomeStatus = 0;
		  }
	}


	function nWelcomeCtx(mode)
	{
		numCtx   = document.getElementsByClassName('nWelcomeTxtCtx').length;
		switchTo = nWelcomeCtxID;

		if( mode == '+' )
		{
			if( nWelcomeCtxID >= numCtx )
			{
				switchTo = 1;
			} else
			  {
				switchTo = nWelcomeCtxID + 1;
			  }
		} else
		if( mode == '-' )
		{
			if( nWelcomeCtxID <= 1 )
			{
				switchTo = numCtx;
			} else
			  {
				switchTo = nWelcomeCtxID - 1;
			  }
		} else
		  {
			switchTo = mode;
		  }

		nWelcomeCtxID = switchTo;

		for( sd = 1; sd <= numCtx; sd++ )
		{
			switchBlockID = 'nWelcomeTxtCtx_'+sd;
			if( sd == switchTo )
			{
				document.getElementById(switchBlockID).style.display     = 'block';
				document.getElementById(switchBlockID).style.visibility  = 'visible';
			} else
			  {
				document.getElementById(switchBlockID).style.display     = 'none';
				document.getElementById(switchBlockID).style.visibility  = 'hidden';
			  }
		}
	}


	function nMusic_info()
	{
		if( nInfo == 0 )
		{
			document.getElementById('nMusicButton_Info').style.color         = nPlayerColor;
			document.getElementById('nPlayerHelp').style.display             = 'block';
			document.getElementById('nPlayerHelp').style.visibility          = 'visible';
			nInfo = 1;

			if( nPlayerCache.read('apic', 0) == 1 )
			{
				document.getElementById('nApicImage').style.display      = 'none';
				document.getElementById('nApicImage').style.visibility   = 'hidden';
			}

			nSpeak('willkommen');
		} else
		  {
			document.getElementById('nMusicButton_Info').style.color         = '#FFFFFF';
			document.getElementById('nPlayerHelp').style.display             = 'none';
			document.getElementById('nPlayerHelp').style.visibility          = 'hidden';
			nInfo = 0;

			if( nPlayerCache.read('apic', 0) == 1 )
			{
				document.getElementById('nApicImage').style.display      = 'block';
				document.getElementById('nApicImage').style.visibility   = 'visible';
			}
		  }
	}


	var nTachoConf = [];

	    nTachoConf['color_bg']     = '#000000';
	    nTachoConf['color_scale']  = '#00FFFF';
	    nTachoConf['color_needle'] = '#00FFFF';
	    nTachoConf['color_center'] = '#00FFFF';
	    nTachoConf['color_text']   = '#00FFFF';
	    nTachoConf['width_line']   = 3;
	    nTachoConf['width_needle'] = 2;
	    nTachoConf['font_size']    = 7.5;
	    nTachoConf['striche']      = [0, 0.25, 0.5, 0.75, 1];

	function nTachoRun()
	{
		nTachoProz   = Math.round(currProzbalken);

		var nTachoEl = document.getElementById('nMusicTacho');
		if( nTacho   = nTachoEl.getContext('2d') )
		{
			nTacho.width       = nTachoEl.width;
			nTacho.height      = nTachoEl.height;

			nTacho.mpX         = nTachoEl.width  / 2;
			nTacho.mpY         = nTachoEl.height / 2;

	  		nTacho.radius      = ( nTacho.width >= nTacho.height ) ? ( 0.85 * nTacho.mpY ) : ( 0.85 * nTacho.mpX );

			nTacho.font        = 'normal '+nTachoConf['font_size']+'pt Arial,sans-serif';
			nTacho.fillStyle   = nTachoConf['color_bg'];
			nTacho.clearRect(0, 0, nTacho.width, nTacho.height);
			nTacho.fillRect( 0, 0, nTacho.width, nTacho.height);

			// Winklel
			startwinkel        = 3 / 8 * 2   * Math.PI;
			bereichswinkel     =         1.5 * Math.PI;
			endwinkel          = startwinkel + bereichswinkel;
			winkelProzent      = nTachoProz / 100 * 1.5 * Math.PI;
			winkelZeiger       = startwinkel;
			winkelZeiger      += winkelProzent;

			// Skala
			nTacho.strokeStyle = ( restZeitRot == 1 ) ? '#FF0000' : nTachoConf['color_scale'];
			nTacho.lineWidth   = nTachoConf['width_line'];
			nTacho.beginPath();
			nTacho.arc(nTacho.mpX, nTacho.mpY, nTacho.radius, startwinkel, endwinkel, false);
			nTacho.stroke(); nTacho.closePath();

			// Striche
			for( s = 0; s < nTachoConf['striche'].length; s++ )
			{
				xStart = nTacho.mpX + ( Math.cos( ( startwinkel + ( bereichswinkel * nTachoConf['striche'][s] ) ) ) *   nTacho.radius );
				yStart = nTacho.mpY + ( Math.sin( ( startwinkel + ( bereichswinkel * nTachoConf['striche'][s] ) ) ) *   nTacho.radius );
				xEnde  = nTacho.mpX + ( Math.cos( ( startwinkel + ( bereichswinkel * nTachoConf['striche'][s] ) ) ) * ( nTacho.radius - 5 ) );
				yEnde  = nTacho.mpY + ( Math.sin( ( startwinkel + ( bereichswinkel * nTachoConf['striche'][s] ) ) ) * ( nTacho.radius - 5 ) );

				nTacho.beginPath();
				nTacho.moveTo(xStart, yStart);
				nTacho.lineTo(xEnde,  yEnde);
				nTacho.stroke();
				nTacho.closePath();
			}

			// Zeiger
			nTacho.strokeStyle = nTachoConf['color_needle'];
			nTacho.lineWidth   = nTachoConf['width_needle'];
			xStart = nTacho.mpX;
			yStart = nTacho.mpY;
			xEnde  = nTacho.mpX + ( Math.cos( winkelZeiger ) * nTacho.radius );
			yEnde  = nTacho.mpY + ( Math.sin( winkelZeiger ) * nTacho.radius );
			nTacho.beginPath(); nTacho.moveTo(xStart, yStart); nTacho.lineTo(xEnde,  yEnde); nTacho.stroke(); nTacho.closePath();

			// Mittelpunkt
			nTacho.fillStyle   = nTachoConf['color_center'];
			nTacho.beginPath();
			nTacho.arc(nTacho.mpX, nTacho.mpY, 3, 0, 2 * Math.PI, true);
			nTacho.fill(); nTacho.closePath();

			// Text
			nTacho.fillStyle   = nTachoConf['color_text'];
			nTachoText         = nTachoProz+'%';
			wText              = nTacho.measureText(nTachoText).width;
			xText              = nTacho.mpX - ( wText / 2 ) ;
			yText              = nTacho.mpY + nTacho.radius;
			nTacho.fillText(nTachoText, xText, yText);
		}
	}
