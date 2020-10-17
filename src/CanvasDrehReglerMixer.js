

	var nDrCv    = [];


	    // Fade-Speed
	    nDrCv[0] = [];
	    nDrCv[0]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[0]['min']           = 0;			//   0 = SSW
	    nDrCv[0]['max']           = 270;			// 270 = SSO
	    nDrCv[0]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[0]['mitte']         = 0;			// Mittelstellung
	    nDrCv[0]['start']         = 50;			// Startwinkel in %
	    nDrCv[0]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[0]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[0]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[0]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[0]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[0]['punkt_farbe']   = 'gold';			// 
	    nDrCv[0]['skala']         = 1;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[0]['skala_alle']    = 2;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende, 2 = nur Start & Ende
	    nDrCv[0]['skala_farbe']   = '#FFFFFF';		// Schriftfarbe der Skala
	    nDrCv[0]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[0]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[0]['ring_farbe']    = 'gold';			// Farbe des Rings
	    nDrCv[0]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[0]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[0]['stufen']        = [];			// Stufenstellungen in %


	    // Gain
	    nDrCv[1] = [];
	    nDrCv[1]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[1]['min']           = 0;			//   0 = SSW
	    nDrCv[1]['max']           = 270;			// 270 = SSO
	    nDrCv[1]['radius']        = 12;			// Radius des Knopfes
	    nDrCv[1]['mitte']         = 0;			// Mittelstellung
	    nDrCv[1]['start']         = 100;			// Startwinkel in %
	    nDrCv[1]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[1]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[1]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[1]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[1]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[1]['punkt_farbe']   = 'gold';			// 
	    nDrCv[1]['skala']         = 1;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[1]['skala_alle']    = 2;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende, 2 = nur Start & Ende
	    nDrCv[1]['skala_farbe']   = '#FFFFFF';		// Schriftfarbe der Skala
	    nDrCv[1]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[1]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[1]['ring_farbe']    = 'gold';			// Farbe des Rings
	    nDrCv[1]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[1]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[1]['stufen']        = [];			// Stufenstellungen in %


	    // Pitch
	    nDrCv[2] = [];
	    nDrCv[2]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[2]['min']           = 0;			//   0 = SSW
	    nDrCv[2]['max']           = 270;			// 270 = SSO
	    nDrCv[2]['radius']        = 12;			// Radius des Knopfes
	    nDrCv[2]['mitte']         = 0;			// Mittelstellung
	    nDrCv[2]['start']         = 50;			// Startwinkel in %
	    nDrCv[2]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[2]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[2]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[2]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[2]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[2]['punkt_farbe']   = 'gold';			// 
	    nDrCv[2]['skala']         = 4;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0), 4(Pitch-Sonderfall)
	    nDrCv[2]['skala_alle']    = 2;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende, 2 = nur Start & Ende
	    nDrCv[2]['skala_farbe']   = '#FFFFFF';		// Schriftfarbe der Skala
	    nDrCv[2]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[2]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[2]['ring_farbe']    = 'gold';			// Farbe des Rings
	    nDrCv[2]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[2]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[2]['stufen']        = [];			// Stufenstellungen in %


	// #####################################################################################################################################


	var nDrCvDrag     = -1;
	var nDrCvDragX    = 0;
	var nDrCvDragY    = 0;
	var nDrCvPosX     = 0;
	var nDrCvPosY     = 0;
	var nDrCvRadius   = 0;
	var useDrcvPROZ   = 0;


	function nDrCvSet(drcvID, drcvPROZ)
	{
		useDr       = 'nDrCv'+drcvID;
		if( canvas  = document.getElementById(useDr) )
		{
			roundedProz  = Math.round( ( drcvPROZ * 100 ) ) / 100;
			canvas.title = roundedProz + '%';

			ctx = canvas.getContext('2d');

			nDrCv[drcvID]['width']  = canvas.width;
			nDrCv[drcvID]['height'] = canvas.height;

			nCpX                    = nDrCv[drcvID]['width']  / 2;
			nCpY                    = nDrCv[drcvID]['height'] / 2;

			// Radius den anderen Funktionen zur Verfügung stellen
			// ===================================================
			nDrCvRadius             = nDrCv[drcvID]['radius'];

			// Prozent in Winkel umrechnen
			// ===========================
			if( drcvPROZ <   0 ) { drcvPROZ =   0; }
			if( drcvPROZ > 100 ) { drcvPROZ = 100; }
			nDrCv[drcvID]['prozente'] = drcvPROZ;
			nDrCv[drcvID]['winkel']   = nDrCv[drcvID]['min'] + ( ( nDrCv[drcvID]['max'] - nDrCv[drcvID]['min'] ) * ( drcvPROZ / 100 ) );

			// Hintergrund
			// ===========
			ctx.clearRect(0, 0, nDrCv[drcvID]['width'], nDrCv[drcvID]['height']);
			if( nDrCv[drcvID]['farbe_hinter'] != '' )
			{
				ctx.fillStyle   = nDrCv[drcvID]['farbe_hinter'];
				ctx.fillRect(0, 0, nDrCv[drcvID]['width'], nDrCv[drcvID]['height']);
			}

			// Knopf
			// =====
			nDrGradient = ctx.createLinearGradient(0, (nCpY+(nDrCv[drcvID]['radius']/2)), 0, 0);
			nDrGradient.addColorStop(0, nDrCv[drcvID]['Knopf_farbe_2']);
			nDrGradient.addColorStop(1, nDrCv[drcvID]['Knopf_farbe_1']);
			ctx.beginPath();
			ctx.lineWidth   = 1;
			ctx.strokeStyle = nDrCv[drcvID]['Knopf_farbe_2'];
			ctx.fillStyle   = nDrGradient;
			ctx.arc(nCpX, nCpY, nDrCv[drcvID]['radius'], 0, 2*Math.PI, false);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();

			// Skala
			// =====
			if( nDrCv[drcvID]['skala'] > 0 )
			{
				ctx.lineWidth   = 2;
				ctx.fillStyle   = nDrCv[drcvID]['skala_farbe'];
				ctx.strokeStyle = nDrCv[drcvID]['skala_farbe'];
				alphaStart      = 135 + nDrCv[drcvID]['min'];
				alphaEnde       = 135 + nDrCv[drcvID]['max'];

				if( nDrCv[drcvID]['stufen'].length > 0 )
				{
					// Stufen-Regler
					// =============
					for( stufe = 0; stufe < nDrCv[drcvID]['stufen'].length; stufe++ )
					{
						stufenDaten = nDrCv[drcvID]['stufen'][stufe].split('|');
						text        = stufenDaten[1];

						ctx.beginPath();
						StartPunktX = nRadialToCosinus(nProzentToRadial(drcvID, stufenDaten[0]), 1.6);
						StartPunktY = nRadialToSinus(nProzentToRadial(drcvID,   stufenDaten[0]), 1.6);
						EndPunktX   = nRadialToCosinus(nProzentToRadial(drcvID, stufenDaten[0]), 1.2);
						EndPunktY   = nRadialToSinus(nProzentToRadial(drcvID,   stufenDaten[0]), 1.2);
						ctx.moveTo((nCpX+StartPunktX),(nCpY+StartPunktY));
						ctx.lineTo((nCpX+EndPunktX),  (nCpY+EndPunktY));
						ctx.stroke();
						ctx.closePath();

						textX = nRadialToCosinus(nProzentToRadial(drcvID, stufenDaten[0]), 2.2);
						textY = nRadialToSinus(nProzentToRadial(drcvID,   stufenDaten[0]), 2.2);
						tl    = ctx.measureText(text).width;
						ctx.fillText(text, (nCpX+(textX-(0.5*tl))), (nCpY+textY+3));
					}
				} else
				  {
					// Linear-Regler
					// =============
					for( st = 0; st < 11; st++ )
					{
						if( nDrCv[drcvID]['skala_alle'] == 1 || ( nDrCv[drcvID]['skala_alle'] == 2 && ( st == 0 || st == 10 ) ) || ( nDrCv[drcvID]['skala_alle'] == 0 && ( st == 0 || st == 5 || st == 10 ) ) || ( nDrCv[drcvID]['skala_alle'] == 4 && ( st == 0 || st == 10 ) ) )
						{
							// Skalenradius an Größe anpassen
							if( nDrCvRadius > 50 )
							{
								radiusRange = 1.3;
							} else
							if( nDrCvRadius > 30 )
							{
								radiusRange = 1.4;
							} else
							if( nDrCvRadius > 15 )
							{
								radiusRange = 1.6;
							} else
							  {
								radiusRange = 1.8;
							  }

							if( nDrCv[drcvID]['skala'] == 1 )
							{
								text  = st;
								textX = nRadialToCosinus(nProzentToRadial(drcvID, (st*10)), radiusRange);
								textY = nRadialToSinus(nProzentToRadial(drcvID,   (st*10)), radiusRange);
								tl    = ctx.measureText(text).width;
								ctx.fillText(text, (nCpX+(textX-(0.5*tl))), (nCpY+textY+3));
							} else
							if( nDrCv[drcvID]['skala'] == 2 )
							{
								text  = st - 5;
								textX = nRadialToCosinus(nProzentToRadial(drcvID, (st*10)), radiusRange);
								textY = nRadialToSinus(nProzentToRadial(drcvID,   (st*10)), radiusRange);
								tl    = ctx.measureText(text).width;
								ctx.fillText(text, (nCpX+(textX-(0.5*tl))), (nCpY+textY+3));
							} else
							if( nDrCv[drcvID]['skala'] == 3 )
							{
								text  = st - 10;
								textX = nRadialToCosinus(nProzentToRadial(drcvID, (st*10)), radiusRange);
								textY = nRadialToSinus(nProzentToRadial(drcvID,   (st*10)), radiusRange);
								tl    = ctx.measureText(text).width;
								ctx.fillText(text, (nCpX+(textX-(0.5*tl))), (nCpY+textY+3));
							} else
							  {
								text  = ( st == 0 ) ? '0.5' : '2';
								textX = nRadialToCosinus(nProzentToRadial(drcvID, (st*10)), radiusRange);
								textY = nRadialToSinus(nProzentToRadial(drcvID,   (st*10)), radiusRange);
								tl    = ctx.measureText(text).width;
								ctx.fillText(text, (nCpX+(textX-(0.5*tl))), (nCpY+textY+3));
							  }
						}
					}
				  }
			}

			// Punkt oder Strich
			// =================
			ctx.beginPath();
			ctx.lineWidth   = 3;
			ctx.strokeStyle = nDrCv[drcvID]['punkt_farbe'];
			ctx.fillStyle   = nDrCv[drcvID]['punkt_farbe'];

			if( nDrCv[drcvID]['stufen'].length > 0 )
			{
				// Stufen-Regler
				// =============
				stellungGefunden = 0;
				for( stufe = 0; stufe < nDrCv[drcvID]['stufen'].length; stufe++ )
				{
					stufenDaten = nDrCv[drcvID]['stufen'][stufe].split('|');
					if( stufe < ( nDrCv[drcvID]['stufen'].length - 1) )
					{
						// Es folgt noch eine weiter Stufe
						stufeWeiter = nDrCv[drcvID]['stufen'][(stufe+1)].split('|');

						if( drcvPROZ >= parseInt(stufenDaten[0]) && drcvPROZ < parseInt(stufeWeiter[0]) )
						{
							// % zwischen dieser und der nächsten Stufe
							useDrcvPROZ      = parseInt(stufenDaten[0]);
							stellungGefunden = 1;
						} else
						  {
							if( stellungGefunden = 0 )
							{
								useDrcvPROZ = parseInt(stufeWeiter[0]);
							}
						  }
					} else
					  {
						// Letzte Stufe
						if( drcvPROZ == parseInt(stufenDaten[0]) )
						{
							useDrcvPROZ = parseInt(stufenDaten[0]);
						}
					  }
				}
			} else
			  {
				// Linear-Regler
				// =============
				useDrcvPROZ = drcvPROZ;
			  }

			if( nDrCv[drcvID]['punkt'] == 'strich' )
			{
				StartPunktX = nRadialToCosinus(nProzentToRadial(drcvID, useDrcvPROZ), 1.0);
				StartPunktY = nRadialToSinus(nProzentToRadial(drcvID,   useDrcvPROZ), 1.0);

				EndPunktX   = nRadialToCosinus(nProzentToRadial(drcvID, useDrcvPROZ), 0.4);
				EndPunktY   = nRadialToSinus(nProzentToRadial(drcvID,   useDrcvPROZ), 0.4);

				ctx.moveTo((nCpX+StartPunktX),(nCpY+StartPunktY));
				ctx.lineTo((nCpX+EndPunktX),  (nCpY+EndPunktY));
			} else
			  {
				StartPunktX = nRadialToCosinus(nProzentToRadial(drcvID, useDrcvPROZ), 0.7);
				StartPunktY = nRadialToSinus(nProzentToRadial(drcvID,   useDrcvPROZ), 0.7);

				ctx.arc(nCpX+StartPunktX, nCpY+StartPunktY, 2, 0, 2*Math.PI);
				ctx.fill();
			  }

			ctx.stroke();
			ctx.closePath();

			// Ring
			// ====
			if( nDrCv[drcvID]['ring'] > 0 )
			{
				// Hintergrund
				// ===========
				if( nDrCv[drcvID]['ring_hinter'] > 0 )
				{
					ctx.beginPath();
					ctx.lineWidth   = nDrCv[drcvID]['ring_breite'];
					ctx.strokeStyle = nDrCv[drcvID]['ring_hinter_f'];

					if( nDrCv[drcvID]['ring_hinter'] == 1 )
					{
						alphaStart = 135 + nDrCv[drcvID]['min'];
						alphaEnde  = 135 + nDrCv[drcvID]['max'];
					} else
					  {
						alphaStart = 0;
						alphaEnde  = 360;
					  }

					ctx.arc(nCpX, nCpY, nDrCv[drcvID]['radius']+(ctx.lineWidth/2), nGradToRadial(alphaStart), nGradToRadial(alphaEnde));
					ctx.stroke();
					ctx.closePath();
				}

				// Vordergrund
				// ===========
				ctx.beginPath();
				ctx.lineWidth   = nDrCv[drcvID]['ring_breite'];
				ctx.strokeStyle = nDrCv[drcvID]['ring_farbe'];

				if( nDrCv[drcvID]['ring'] == 1 )
				{
					if( nDrCv[drcvID]['mitte'] == 1 )
					{
						// Für Mittelstellung
						// ==================
						if( nDrCv[drcvID]['winkel'] > 135 )
						{
							alphaStart = 135 + 135;
							alphaEnde  = 135 + nDrCv[drcvID]['min'] + ( ( nDrCv[drcvID]['max'] - nDrCv[drcvID]['min'] ) * ( drcvPROZ / 100 ) );
						} else
						if( nDrCv[drcvID]['winkel'] < 135 )
						{
							alphaStart = 135 + nDrCv[drcvID]['min'] + ( ( nDrCv[drcvID]['max'] - nDrCv[drcvID]['min'] ) * ( drcvPROZ / 100 ) );
							alphaEnde  = 135 + 135;
						} else
						  {
							// Mittelstellung => kleiner Punkt
							alphaStart = 135 + 135 - 5;
							alphaEnde  = 135 + 135 + 5;
						  }
					} else
					  {
						// Für Normalstellung
						// ==================
						ringProzente = ( nDrCv[drcvID]['stufen'].length > 0 ) ? useDrcvPROZ : drcvPROZ;

						if( nDrCv[drcvID]['winkel'] == nDrCv[drcvID]['min'] )
						{
							// Mittelstellung => kleiner Punkt
							alphaStart = 135 + nDrCv[drcvID]['min'] - 5;
							alphaEnde  = 135 + nDrCv[drcvID]['min'] + ( ( nDrCv[drcvID]['max'] - nDrCv[drcvID]['min'] ) * ( ringProzente / 100 ) ) + 5;
						} else
						  {
							alphaStart = 135 + nDrCv[drcvID]['min'];
							alphaEnde  = 135 + nDrCv[drcvID]['min'] + ( ( nDrCv[drcvID]['max'] - nDrCv[drcvID]['min'] ) * ( ringProzente / 100 ) );
						  }
					  }
				} else
					if( nDrCv[drcvID]['ring'] == 2 )
					{
						alphaStart = 135 + nDrCv[drcvID]['min'];
						alphaEnde  = 135 + nDrCv[drcvID]['max'];
					} else
					  {
						alphaStart = 0;
						alphaEnde  = 360;
					  }

				ctx.arc(nCpX, nCpY, nDrCv[drcvID]['radius']+(ctx.lineWidth/2), nGradToRadial(alphaStart), nGradToRadial(alphaEnde));
				ctx.stroke();
				ctx.closePath();
			}

			// Wert weiter verarbeiten
			// +++++++++++++++++++++++

			// document.getElementById('MEIN-BEREICH').innerHTML = nDrCv[drcvID]['prozente'];


			if( drcvID == 0 )
			{
				// FADE-SPEED
				// ----------
			}

			if( drcvID == 1 )
			{
				// Sound Gain
				// ----------
				document.getElementById('djSound1').volume = nDrCv[drcvID]['prozente'] / 100;
				document.getElementById('djSound2').volume = nDrCv[drcvID]['prozente'] / 100;
				document.getElementById('djSound3').volume = nDrCv[drcvID]['prozente'] / 100;
				document.getElementById('djSound4').volume = nDrCv[drcvID]['prozente'] / 100;
			}

			if( drcvID == 2 )
			{
				// Sound Pitch
				// -----------
				if( nDrCv[drcvID]['prozente'] == 50 )
				{
					nSaSpeed = 1;
				} else
				  {
					if( nDrCv[drcvID]['prozente'] < 50 )
					{
						nSaSpeed = 0.5 + (   nDrCv[drcvID]['prozente'] * 0.01 );
					} else
					  {
						nSaSpeed = 1   + ( ( nDrCv[drcvID]['prozente'] - 50 ) * 0.02 );
					  }
				  }

				nSrSpeed = Math.round((nSaSpeed*10)) / 10;

				document.getElementById('djSound1').playbackRate = nSaSpeed;
				document.getElementById('djSound2').playbackRate = nSaSpeed;
				document.getElementById('djSound3').playbackRate = nSaSpeed;
				document.getElementById('djSound4').playbackRate = nSaSpeed;
			}
		}
	}

	function nDrCvInit()
	{
		for( cvdr = 0; cvdr < nDrCv.length; cvdr++ )
		{
			useDr         = 'nDrCv'+cvdr;
			if( nDrCanvas = document.getElementById(useDr) )
			{
				nDrCanvas.style.cursor = 'n-resize';
				nDrCanvas.style.cursor = 'pointer';
				nDrCanvas.style.cursor = 'grab';

				if( nDrCv[cvdr]['stufen'].length > 0 && nDrCv[cvdr]['mitte'] == 1 )
				{
					nDrCv[cvdr]['mitte'] = 0;
				}

				nDrCvSet(cvdr, nDrCv[cvdr]['start']);
			}
		}
	}

	function nDrCvReset(event)
	{
		if( event.target.id.substring(0, 5) == 'nDrCv' )
		{
			drcvID = event.target.id.substring(5, event.target.id.length);
			nDrCvSet(drcvID, nDrCv[drcvID]['start']);
		}
	}

	function nDrCvMouseDown(event)
	{
		if( event.target.id.substring(0, 5) == 'nDrCv' )
		{
			nDrCvDrag  = event.target.id.substring(5, event.target.id.length);
			nDrCvDragX = -1;
			nDrCvDragY = -1;

			absPos     = nDrCvPosAbs(document.getElementById(event.target.id));
			nDrCvPosX  = absPos.left + ( nDrCv[nDrCvDrag]['width']  / 2 );
			nDrCvPosY  = absPos.top  + ( nDrCv[nDrCvDrag]['height'] / 2 );
		}
	}

	function nDrCvMouseUp(event)
	{
		if( nDrCvDrag != -1 )
		{
			if( ( nDrCv[nDrCvDrag]['stufen'].length > 0 ) )
			{
				nDrCv[nDrCvDrag]['prozente']            = useDrcvPROZ;
				strTitle                                = 'nDrCv'+nDrCvDrag;
				document.getElementById(strTitle).title = useDrcvPROZ + '%';
			}

			nDrCvDrag = -1;
		}
	}

	function nDrCvMouseMove(event)
	{
		x = event.clientX + window.pageXOffset;
		y = event.clientY + window.pageYOffset;

		if( nDrCvDrag != -1 )
		{
			if( 1 == 1 )
			{
				// Mausverfolgung
				if( ( x - nDrCvPosX ) >= 0 && ( y - nDrCvPosY ) <  0 )
				{
					// Quadrant 1
					nDrQu = 1;
					nDrAb = Math.atan( (nDrCvPosY-y) / (x-nDrCvPosX) );
				} else
				if( ( x - nDrCvPosX ) <  0 && ( y - nDrCvPosY ) <  0 )
				{
					// Quadrant 2
					nDrQu = 2;
					nDrAb = Math.atan( (nDrCvPosX-x) / (nDrCvPosY-y) );
				} else
				if( ( x - nDrCvPosX ) <  0 && ( y - nDrCvPosY ) >= 0 )
				{
					// Quadrant 3
					nDrQu = 3;
					nDrAb = Math.atan( (y-nDrCvPosY) / (nDrCvPosX-x) );
				} else
				  {
					// Quadrant 4
					nDrQu = 4;
					nDrAb = Math.atan( (x-nDrCvPosX) / (y-nDrCvPosY) );
				  }

				nDrAb      += ( nDrQu - 1 ) * ( Math.PI / 2 );
				nDrAg       = nRadialToGrad(nDrAb);

				nDrAs       = ( 360 - nDrAg ) - 135;
				nDrAs       = ( nDrAs < 0 ) ? ( nDrAs + 360 ) : nDrAs;

				nDrRange    = nDrCv[nDrCvDrag]['max'] - nDrCv[nDrCvDrag]['min'];

				    nDrProz = ( ( nDrAs - nDrCv[nDrCvDrag]['min'] ) / nDrRange ) * 100;
				if( nDrProz <   0 ) { nDrProz =   0; }
				if( nDrProz > 100 ) { nDrProz = 100; }

				nDrCv[nDrCvDrag]['prozente'] = nDrProz;
			} else
			  {
				// Up-Down Steuerung
				nDrCvDragX = ( nDrCvDragX == -1 ) ? x : nDrCvDragX;
				nDrCvDragY = ( nDrCvDragY == -1 ) ? y : nDrCvDragY;

				if( y > nDrCvDragY )
				{
					nDrCv[nDrCvDrag]['prozente'] -= nDrCv[nDrCvDrag]['schritte'];
					nDrCv[nDrCvDrag]['prozente']  = ( nDrCv[nDrCvDrag]['prozente'] <=   0 ) ?   0 : nDrCv[nDrCvDrag]['prozente'];
				} else
				if( y < nDrCvDragY )
				{
					nDrCv[nDrCvDrag]['prozente'] += nDrCv[nDrCvDrag]['schritte'];
					nDrCv[nDrCvDrag]['prozente']  = ( nDrCv[nDrCvDrag]['prozente'] >= 100 ) ? 100 : nDrCv[nDrCvDrag]['prozente'];
				}

				nDrCvDragX = x;
				nDrCvDragY = y;
			  }

			nDrCvSet(nDrCvDrag, nDrCv[nDrCvDrag]['prozente']);
		}
	}

	function nDrCvPosAbs(element)
	{
		var top  = 0
		var left = 0;

		while(element)
		{
			top    += element.offsetTop  || 0;
			left   += element.offsetLeft || 0;
			element = element.offsetParent;
		}

		return {
			top:  top,
			left: left
		};
	}


	document.addEventListener("dblclick",  nDrCvReset,     true);
	document.addEventListener("mouseup",   nDrCvMouseUp,   true);
	document.addEventListener("mousemove", nDrCvMouseMove, true);
	document.addEventListener("mousedown", nDrCvMouseDown, true);


	document.onload = window.setTimeout("nDrCvInit()", 250);


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

