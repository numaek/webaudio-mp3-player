

	var nSrCv    = [];


	    nSrCv[0] = [];
	    nSrCv[0]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[0]['quer']          = 1;
	    nSrCv[0]['mitte']         = 1;			// Mittelstellung
	    nSrCv[0]['start']         = 50;			// Startstellung in %
	    nSrCv[0]['schritte']      = 2;			// Schrittweite in % bei Drehung
	    nSrCv[0]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[0]['str_leucht']    = 1;
	    nSrCv[0]['str_laenge']    = 144;
	    nSrCv[0]['str_breite']    = 4;
	    nSrCv[0]['str_hinter']    = '#606060';
	    nSrCv[0]['str_farbe']     = '#00FFFF';
	    nSrCv[0]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[0]['Knopf_radius']  = 10;			// Radius des Knopfes
	    nSrCv[0]['Knopf_laenge']  = 14;
	    nSrCv[0]['Knopf_breite']  = 34;
	    nSrCv[0]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[0]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[0]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[0]['skala']         = 1;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[0]['skala_farbe']   = '#FFFFFF';		// Schriftfarbe der Skala
	    nSrCv[0]['stufen']        = [];			// Stufenstellungen in %


	    nSrCv[1] = [];
	    nSrCv[1]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[1]['quer']          = 0;
	    nSrCv[1]['mitte']         = 0;			// Mittelstellung
	    nSrCv[1]['start']         = 100;			// Startstellung in %
	    nSrCv[1]['schritte']      = 2;			// Schrittweite in % bei Drehung
	    nSrCv[1]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[1]['str_leucht']    = 1;
	    nSrCv[1]['str_laenge']    = 135;
	    nSrCv[1]['str_breite']    = 4;
	    nSrCv[1]['str_hinter']    = '#606060';
	    nSrCv[1]['str_farbe']     = '#00FFFF';
	    nSrCv[1]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[1]['Knopf_radius']  = 10;			// Radius des Knopfes
	    nSrCv[1]['Knopf_laenge']  = 14;
	    nSrCv[1]['Knopf_breite']  = 34;
	    nSrCv[1]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[1]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[1]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[1]['skala']         = 1;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[1]['skala_farbe']   = '#BBBBBB';		// Schriftfarbe der Skala
	    nSrCv[1]['stufen']        = [];			// Stufenstellungen in %


	    nSrCv[2] = [];
	    nSrCv[2]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[2]['quer']          = 0;
	    nSrCv[2]['mitte']         = 0;			// Mittelstellung
	    nSrCv[2]['start']         = 100;			// Startstellung in %
	    nSrCv[2]['schritte']      = 2;			// Schrittweite in % bei Drehung
	    nSrCv[2]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[2]['str_leucht']    = 1;
	    nSrCv[2]['str_laenge']    = 135;
	    nSrCv[2]['str_breite']    = 4;
	    nSrCv[2]['str_hinter']    = '#606060';
	    nSrCv[2]['str_farbe']     = '#00FFFF';
	    nSrCv[2]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[2]['Knopf_radius']  = 10;			// Radius des Knopfes
	    nSrCv[2]['Knopf_laenge']  = 14;
	    nSrCv[2]['Knopf_breite']  = 34;
	    nSrCv[2]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[2]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[2]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[2]['skala']         = 1;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[2]['skala_farbe']   = '#BBBBBB';		// Schriftfarbe der Skala
	    nSrCv[2]['stufen']        = [];			// Stufenstellungen in %


	// #####################################################################################################################################


	var nSrCvDrag     = -1;
	var nSrCvDragX    = 0;
	var nSrCvDragY    = 0;
	var nSrCvRadius   = 0;
	var useSrcvPROZ   = 0;


	function nSrCvSet(drcvID, srcvPROZ)
	{
		useDr       = 'nSrCv'+drcvID;
		if( canvas  = document.getElementById(useDr) )
		{
			srcvPROZrounded = srcvPROZ * 100;
			srcvPROZrounded = Math.round(srcvPROZrounded);
			srcvPROZrounded = srcvPROZrounded / 100;
			canvas.title    = srcvPROZrounded + '%';

			ctx = canvas.getContext('2d');

			nSrCv[drcvID]['width']  = canvas.width;
			nSrCv[drcvID]['height'] = canvas.height;

			// Prozente
			// ========
			if( srcvPROZ <   0 ) { srcvPROZ =   0; }
			if( srcvPROZ > 100 ) { srcvPROZ = 100; }
			nSrCv[drcvID]['prozente'] = srcvPROZ;

			// Hintergrund
			// ===========
			ctx.clearRect(0, 0, nSrCv[drcvID]['width'], nSrCv[drcvID]['height']);
			if( nSrCv[drcvID]['farbe_hinter'] != '' )
			{
				ctx.fillStyle   = nSrCv[drcvID]['farbe_hinter'];
				ctx.fillRect(0, 0, nSrCv[drcvID]['width'], nSrCv[drcvID]['height']);
			}


			// Streifen berechnen
			// ==================
			if( nSrCv[drcvID]['quer'] == 1 )
			{
				streifenLinks   = ( nSrCv[drcvID]['width']  - nSrCv[drcvID]['str_laenge'] ) / 2;
				streifenOben    = ( nSrCv[drcvID]['height'] - nSrCv[drcvID]['str_breite'] ) / 2;
				streifenLaenge  = nSrCv[drcvID]['str_breite'];
				streifenBreite  = nSrCv[drcvID]['str_laenge'];
			} else
			  {
				streifenLinks   = ( nSrCv[drcvID]['width']  - nSrCv[drcvID]['str_breite'] ) / 2;
				streifenOben    = ( nSrCv[drcvID]['height'] - nSrCv[drcvID]['str_laenge'] ) / 2;
				streifenLaenge  = nSrCv[drcvID]['str_laenge'];
				streifenBreite  = nSrCv[drcvID]['str_breite'];
			  }


			// Skala
			// =====
			if( nSrCv[drcvID]['skala'] > 0 )
			{
				ctx.strokeStyle = nSrCv[drcvID]['skala_farbe'];

				if( nSrCv[drcvID]['stufen'].length > 0 )
				{
					// Stufen-Regler
					// =============
					ctx.lineWidth = 3;

					for( stufe = 0; stufe < nSrCv[drcvID]['stufen'].length; stufe++ )
					{
						ctx.beginPath();

						if( nSrCv[drcvID]['quer'] == 1 )
						{
							// Quer
							// ====
							skalaOben  = streifenOben - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
							skalaUnten = skalaOben + nSrCv[drcvID]['Knopf_breite'];
							skalaLinks = ( nSrCv[drcvID]['Knopf_laenge'] / 2 ) + streifenLinks + ( ( streifenBreite - nSrCv[drcvID]['Knopf_laenge'] ) * ( nSrCv[drcvID]['stufen'][stufe] / 100 ) );
							ctx.moveTo(skalaLinks, skalaOben);
							ctx.lineTo(skalaLinks, skalaUnten);
						} else
						  {
							// Hochkant
							// ========
							skalaLinks  = streifenLinks - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
							skalaRechts = skalaLinks + nSrCv[drcvID]['Knopf_breite'];
							skalaOben   = ( nSrCv[drcvID]['Knopf_laenge'] / 2 ) + streifenOben + ( ( streifenLaenge - nSrCv[drcvID]['Knopf_laenge'] ) * ( ( 100 - nSrCv[drcvID]['stufen'][stufe] ) / 100 ) );
							ctx.moveTo(skalaLinks,  skalaOben);
							ctx.lineTo(skalaRechts, skalaOben);
						  }
						ctx.stroke();
						ctx.closePath();
					}
				} else
				  {
					// Linear-Regler
					// =============
					for( st = 0; st < 11; st++ )
					{
						if( nSrCv[drcvID]['skala'] == 2 )
						{
							freigabe = ( st == 0 || st == 5 || st == 10 ) ? 1 : 0;
						} else
						  {
							freigabe = 1;
						  }
						if( freigabe == 1 )
						{
							ctx.lineWidth = ( st == 0 || st == 5 || st == 10 ) ? 3 : 1;
							ctx.beginPath();
							if( nSrCv[drcvID]['quer'] == 1 )
							{
								// Quer
								// ====
								skalaOben  = streifenOben - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
								skalaUnten = skalaOben + nSrCv[drcvID]['Knopf_breite'];
								skalaLinks = ( nSrCv[drcvID]['Knopf_laenge'] / 2 ) + streifenLinks + ( st * ( ( streifenBreite - nSrCv[drcvID]['Knopf_laenge'] ) / 10 ) );
								ctx.moveTo(skalaLinks, skalaOben);
								ctx.lineTo(skalaLinks, skalaUnten);
							} else
							  {
								// Hochkant
								// ========
								skalaLinks  = streifenLinks - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
								skalaRechts = skalaLinks + nSrCv[drcvID]['Knopf_breite'];
								skalaOben   = ( nSrCv[drcvID]['Knopf_laenge'] / 2 ) + streifenOben + ( st * ( ( streifenLaenge - nSrCv[drcvID]['Knopf_laenge'] ) / 10 ) );
								ctx.moveTo(skalaLinks,  skalaOben);
								ctx.lineTo(skalaRechts, skalaOben);
							  }
							ctx.stroke();
							ctx.closePath();
						}
					}
				  }
			}


			// Streifen zeichnen
			// =================
			ctx.beginPath();
			ctx.lineWidth   = 1;
			ctx.strokeStyle = '#000000';
			ctx.fillStyle   = nSrCv[drcvID]['str_hinter'];
			ctx.rect(streifenLinks, streifenOben, streifenBreite, streifenLaenge);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();


			// Prozente bei Stufenreglern
			// ==========================
			if( nSrCv[drcvID]['stufen'].length > 0 )
			{
				// Stufen-Regler
				// =============
				stellungGefunden = 0;
				for( stufe = 0; stufe < nSrCv[drcvID]['stufen'].length; stufe++ )
				{
					if( stufe < ( nSrCv[drcvID]['stufen'].length - 1) )
					{
						// Es folgt noch eine weiter Stufe
						if( srcvPROZ >= parseInt(nSrCv[drcvID]['stufen'][stufe]) && srcvPROZ < parseInt(nSrCv[drcvID]['stufen'][(stufe+1)]) )
						{
							// % zwischen dieser und der nächsten Stufe
							useSrcvPROZ      = parseInt(nSrCv[drcvID]['stufen'][stufe]);
							stellungGefunden = 1;
						} else
						  {
							if( stellungGefunden = 0 )
							{
								useSrcvPROZ = parseInt(nSrCv[drcvID]['stufen'][(stufe+1)]);
							}
						  }
					} else
					  {
						// Letzte Stufe
						if( srcvPROZ == parseInt(nSrCv[drcvID]['stufen'][stufe]) )
						{
							useSrcvPROZ = parseInt(nSrCv[drcvID]['stufen'][stufe]);
						}
					  }
				}
			} else
			  {
				// Linear-Regler
				// =============
				useSrcvPROZ = srcvPROZ;
			  }


			// Knopf
			// =====
			if( nSrCv[drcvID]['Knopf_rund'] == 1 )
			{
				// Rund
				// ====
				if( nSrCv[drcvID]['quer'] == 1 )
				{
					// Quer
					// ====
					streifenRange = ( ( nSrCv[drcvID]['str_laenge'] - nSrCv[drcvID]['Knopf_laenge'] ) * ( useSrcvPROZ / 100 ) );
					knopfLinks    = streifenLinks + streifenRange;
					knopfOben     = streifenOben - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
					knopfBreite   = nSrCv[drcvID]['Knopf_laenge'];
					knopfLaenge   = nSrCv[drcvID]['Knopf_breite'];
				} else
				  {
					// Hochkant
					// ========
					streifenRange = ( ( nSrCv[drcvID]['str_laenge'] - nSrCv[drcvID]['Knopf_laenge'] ) * ( ( 100 - useSrcvPROZ ) / 100 ) );
					knopfLinks    = streifenLinks - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
					knopfOben     = streifenOben + streifenRange;
					knopfBreite   = nSrCv[drcvID]['Knopf_breite'];
					knopfLaenge   = nSrCv[drcvID]['Knopf_laenge'];
				  }
			} else
			  {
				// Eckig
				// =====
				if( nSrCv[drcvID]['quer'] == 1 )
				{
					// Quer
					// ====
					streifenRange = ( ( nSrCv[drcvID]['str_laenge'] - nSrCv[drcvID]['Knopf_laenge'] ) * ( useSrcvPROZ / 100 ) );
					knopfLinks    = streifenLinks + streifenRange;
					knopfOben     = streifenOben - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
					knopfBreite   = nSrCv[drcvID]['Knopf_laenge'];
					knopfLaenge   = nSrCv[drcvID]['Knopf_breite'];
				} else
				  {
					// Hochkant
					// ========
					streifenRange = ( ( nSrCv[drcvID]['str_laenge'] - nSrCv[drcvID]['Knopf_laenge'] ) * ( ( 100 - useSrcvPROZ ) / 100 ) );
					knopfLinks    = streifenLinks - ( ( nSrCv[drcvID]['Knopf_breite'] - nSrCv[drcvID]['str_breite'] ) / 2 );
					knopfOben     = streifenOben + streifenRange;
					knopfBreite   = nSrCv[drcvID]['Knopf_breite'];
					knopfLaenge   = nSrCv[drcvID]['Knopf_laenge'];
				  }
			  }
			nSrCv[drcvID]['Knopf_x'] = knopfLinks;
			nSrCv[drcvID]['Knopf_y'] = knopfOben;
			nSrCv[drcvID]['Knopf_b'] = knopfBreite;
			nSrCv[drcvID]['Knopf_l'] = knopfLaenge;


			// Streifen-Beleuchtung
			// ====================
			if( nSrCv[drcvID]['str_leucht'] == 1 )
			{
				if( nSrCv[drcvID]['mitte'] == 1 )
				{
					// Für Mittelstellung
					// ==================
					if( nSrCv[drcvID]['quer'] == 1 )
					{
						// Quer
						// ====
						leuchtOben   = streifenOben;
						leuchtLaenge = nSrCv[drcvID]['str_breite'];
						if( useSrcvPROZ > 50 )
						{
							leuchtLinks  = nSrCv[drcvID]['width'] / 2;
							leuchtBreite = ( knopfLinks + nSrCv[drcvID]['Knopf_laenge'] ) - ( nSrCv[drcvID]['width'] / 2 ) - 1;
						} else
						if( useSrcvPROZ < 50 )
						{
							leuchtLinks  = knopfLinks + 1;
							leuchtBreite = ( 0.5 * nSrCv[drcvID]['str_laenge'] ) - streifenRange;
						} else
						  {
							leuchtLinks  = knopfLinks + 1;
							leuchtBreite = 0;
						  }
					} else
					  {
						// Hochkant
						// ========
						leuchtLinks  = streifenLinks;
						leuchtBreite = nSrCv[drcvID]['str_breite'];
						if( useSrcvPROZ > 50 )
						{
							leuchtOben   = knopfOben + 1;
							leuchtLaenge = ( nSrCv[drcvID]['str_laenge'] - streifenRange ) - ( 0.5 * nSrCv[drcvID]['str_laenge'] );
						} else
						if( useSrcvPROZ < 50 )
						{
							leuchtOben   = streifenOben + ( 0.5 * nSrCv[drcvID]['str_laenge'] );
							leuchtLaenge = -1 * ( ( ( nSrCv[drcvID]['str_laenge'] - nSrCv[drcvID]['Knopf_laenge'] ) - streifenRange ) - ( 0.5 * nSrCv[drcvID]['str_laenge'] ) ) - 1;
						} else
						  {
							leuchtOben   = streifenOben + ( 0.5 * nSrCv[drcvID]['str_laenge'] );
							leuchtLaenge = 0;
						  }
					  }
				} else
				  {
					// Für Normalstellung
					// ==================
					if( nSrCv[drcvID]['quer'] == 1 )
					{
						// Quer
						// ====
						leuchtLinks  = streifenLinks;
						leuchtOben   = streifenOben;
						leuchtBreite = nSrCv[drcvID]['str_laenge'] - ( nSrCv[drcvID]['str_laenge'] - streifenRange );
						leuchtLaenge = nSrCv[drcvID]['str_breite'];
					} else
					  {
						// Hochkant
						// ========
						leuchtLinks  = streifenLinks;
						leuchtOben   = knopfOben + nSrCv[drcvID]['Knopf_laenge'];
						leuchtBreite = nSrCv[drcvID]['str_breite'];
						leuchtLaenge = ( nSrCv[drcvID]['str_laenge'] - nSrCv[drcvID]['Knopf_laenge'] ) - streifenRange;
					  }
				  }

				ctx.fillStyle = nSrCv[drcvID]['str_farbe'];
				ctx.fillRect(leuchtLinks, leuchtOben, leuchtBreite, leuchtLaenge);
			}


			// Knopf erst über Leuchtstreifen zeichnen
			// =======================================
			if( nSrCv[drcvID]['Knopf_rund'] == 1 )
			{
				if( nSrCv[drcvID]['quer'] == 1 )
				{
					nDrGradient = ctx.createLinearGradient(knopfLinks, knopfOben, knopfLinks, knopfOben+nSrCv[drcvID]['Knopf_breite']);
				} else
				  {
					nDrGradient = ctx.createLinearGradient(knopfLinks, knopfOben, knopfLinks, knopfOben+nSrCv[drcvID]['Knopf_laenge']);
				  }

				nDrGradient.addColorStop(0, nSrCv[drcvID]['Knopf_farbe_1']);
				nDrGradient.addColorStop(1, nSrCv[drcvID]['Knopf_farbe_2']);
				ctx.fillStyle   = nDrGradient;
				ctx.beginPath();
				ctx.lineWidth   = 1;
				ctx.strokeStyle = 'transparent';
				ctx.arc(knopfLinks+(knopfBreite/2), knopfOben+(knopfLaenge/2), nSrCv[drcvID]['Knopf_radius'], 0, 2*Math.PI, false);
				ctx.stroke();
				ctx.fill();
				ctx.closePath();

				// Punkt
				ctx.beginPath();
				ctx.lineWidth   = 1;
				ctx.fillStyle   = ( nSrCvDrag != -1 ) ? nSrCv[drcvID]['Knopf_aktiv'] : nSrCv[drcvID]['skala_farbe'];
				ctx.strokeStyle = ( nSrCvDrag != -1 ) ? nSrCv[drcvID]['Knopf_aktiv'] : nSrCv[drcvID]['skala_farbe'];
				ctx.arc(knopfLinks+(knopfBreite/2), knopfOben+(knopfLaenge/2), 3, 0, 2*Math.PI, false);
				ctx.stroke();
				ctx.fill();
				ctx.closePath();
			} else
			  {
				ctx.fillStyle   = nSrCv[drcvID]['Knopf_farbe_2'];
				ctx.fillRect(knopfLinks,knopfOben, knopfBreite, knopfLaenge);

				// Strich
				ctx.beginPath();
				ctx.lineWidth   = 2;
				ctx.strokeStyle = ( nSrCvDrag != -1 ) ? nSrCv[drcvID]['Knopf_aktiv'] : nSrCv[drcvID]['skala_farbe'];

				if( nSrCv[drcvID]['quer'] == 1 )
				{
					ctx.moveTo(knopfLinks+(nSrCv[drcvID]['Knopf_laenge']/2), knopfOben+2);
					ctx.lineTo(knopfLinks+(nSrCv[drcvID]['Knopf_laenge']/2), knopfOben+nSrCv[drcvID]['Knopf_breite']-2);
				} else
				  {
					ctx.moveTo(knopfLinks+2,                                 knopfOben+(nSrCv[drcvID]['Knopf_laenge']/2));
					ctx.lineTo(knopfLinks+nSrCv[drcvID]['Knopf_breite']-2,   knopfOben+(nSrCv[drcvID]['Knopf_laenge']/2));
				  }
				ctx.stroke();
				ctx.closePath();
			  }


			// Wert weiter verarbeiten
			// +++++++++++++++++++++++

			// document.getElementById('MEIN-BEREICH').innerHTML = nSrCv[drcvID]['prozente'];


			// Kanal-Pegel & Fader
			// -------------------

			if( typeof(deckLinks) !== 'undefined' )
			{
				nProzLeftPegel  =   nSrCv[1]['prozente'];
				nProzLeftFader  = ( nSrCv[0]['prozente'] > 50 ) ? ( ( 100 - nSrCv[0]['prozente'] ) * 2 ) : 100;
				deckLinks.document.getElementById('audio1').volume  = ( nProzLeftPegel   / 100 ) * ( nProzLeftFader  / 100 );
			}

			if( typeof(deckRechts) !== 'undefined' )
			{
				nProzRightPegel =   nSrCv[2]['prozente'];
				nProzRightFader = ( nSrCv[0]['prozente'] < 50 ) ? ( nSrCv[0]['prozente'] * 2 ) : 100;
				deckRechts.document.getElementById('audio1').volume = ( nProzRightPegel  / 100 ) * ( nProzRightFader / 100 );
			}
		}
	}

	function nSrCvInit()
	{
		for( cvdr = 0; cvdr < nSrCv.length; cvdr++ )
		{
			useDr         = 'nSrCv'+cvdr;
			if( nSrCanvas = document.getElementById(useDr) )
			{
				nSrCanvas.style.cursor = ( nSrCv[cvdr]['quer'] == 1 ) ? 'w-resize' : 'n-resize';

				if( nSrCv[cvdr]['stufen'].length > 0 && nSrCv[cvdr]['mitte'] == 1 )
				{
					nSrCv[cvdr]['mitte'] = 0;
				}

				nSrCv[cvdr]['Knopf_x'] = 0;
				nSrCv[cvdr]['Knopf_y'] = 0;
				nSrCv[cvdr]['Knopf_b'] = 0;
				nSrCv[cvdr]['Knopf_l'] = 0;

				nSrCvSet(cvdr, nSrCv[cvdr]['start']);
			}
		}
	}

	function nSrCvReset(event)
	{
		if( event.target.id.substring(0, 5) == 'nSrCv' )
		{
			drcvID = event.target.id.substring(5, event.target.id.length);
			nSrCvSet(drcvID, nSrCv[drcvID]['start']);
		}
	}

	function nSrCvMouseDown(event)
	{
		if( event.target.id.substring(0, 5) == 'nSrCv' )
		{
			getID = event.target.id.substring(5, event.target.id.length);

			if( event.button == 1 || event.button == 2 )
			{
				nSrCvSet(getID, nSrCv[getID]['start']);
			} else
			  {
				// Klick auf Button oder Regler
				// ============================
				clickButton = 0;
				if( event.offsetX >= nSrCv[getID]['Knopf_x'] && event.offsetX <= ( nSrCv[getID]['Knopf_x'] + nSrCv[getID]['Knopf_b'] ) )
				{
					if( event.offsetY >= nSrCv[getID]['Knopf_y'] && event.offsetY <= ( nSrCv[getID]['Knopf_y'] + nSrCv[getID]['Knopf_l'] ) )
					{
						clickButton = 1;
					}
				}
				if( clickButton == 1 )
				{
					// Regler ziehen
					// =============
					nSrCvDrag  = getID;
					nSrCvDragX = -1;
					nSrCvDragY = -1;
				} else
				  {
					// Angeklickte Prozente ermitteln
					// ==============================
					if( nSrCv[getID]['quer'] == 1 )
					{
						clickPx0     = ( nSrCv[getID]['width'] - nSrCv[getID]['str_laenge'] ) / 2;
						clickPx100   = clickPx0 + nSrCv[getID]['str_laenge'];
						clickPx      = event.offsetX - clickPx0;
						clickProz    = clickPx / nSrCv[getID]['str_laenge'] * 100;
						clickProz    = ( clickProz < 0   ) ?   0 : clickProz;
						clickProz    = ( clickProz > 100 ) ? 100 : clickProz;
					} else
					  {
						clickPx0     = ( nSrCv[getID]['height'] - nSrCv[getID]['str_laenge'] ) / 2;
						clickPx100   = clickPx0 + nSrCv[getID]['str_laenge'];
						clickPx      = event.offsetY - clickPx0;
						clickProz    = clickPx / nSrCv[getID]['str_laenge'] * 100;
						clickProz    = ( clickProz < 0   ) ?   0 : clickProz;
						clickProz    = ( clickProz > 100 ) ? 100 : clickProz;
						clickProz    = 100 - clickProz;
					  }

					// Stufen-Regler
					// =============
					if( nSrCv[getID]['stufen'].length > 0 )
					{
						stellungGefunden = 0;
						for( stufe = 0; stufe < nSrCv[getID]['stufen'].length; stufe++ )
						{
							if( stufe < ( nSrCv[getID]['stufen'].length - 1) )
							{
								// Es folgt noch eine weiter Stufe
								if( clickProz >= parseInt(nSrCv[getID]['stufen'][stufe]) && clickProz < parseInt(nSrCv[getID]['stufen'][(stufe+1)]) )
								{
									// % zwischen dieser und der nächsten Stufe
									neueProz         = parseInt(nSrCv[getID]['stufen'][stufe]);
									stellungGefunden = 1;
								} else
								  {
									if( stellungGefunden = 0 )
									{
										neueProz = parseInt(nSrCv[getID]['stufen'][(stufe+1)]);
									}
								  }
							} else
							  {
								// Letzte Stufe
								if( clickProz == parseInt(nSrCv[getID]['stufen'][stufe]) )
								{
									neueProz = parseInt(nSrCv[getID]['stufen'][stufe]);
								}
							  }
						}
						clickProz = neueProz;
					}

					clickProz = Math.round(clickProz);
					nSrCvSet(getID, clickProz);
				  }
			  }
		}
	}

	function nSrCvMouseUp(event)
	{
		if( nSrCvDrag != -1 )
		{
			buttonLedOff = nSrCvDrag;

			if( ( nSrCv[nSrCvDrag]['stufen'].length > 0 ) )
			{
				nSrCv[nSrCvDrag]['prozente']            = useSrcvPROZ;
				strTitle                                = 'nSrCv'+nSrCvDrag;
				document.getElementById(strTitle).title = useSrcvPROZ + '%';
			}

			nSrCvDrag = -1;
			nSrCvSet(buttonLedOff, useSrcvPROZ);
		}
	}

	function nSrCvMouseMove(event)
	{
		x = event.clientX + window.pageXOffset;
		y = event.clientY + window.pageYOffset;

		if( nSrCvDrag != -1 )
		{
			nSrCvDragX = ( nSrCvDragX == -1 ) ? x : nSrCvDragX;
			nSrCvDragY = ( nSrCvDragY == -1 ) ? y : nSrCvDragY;

			if( nSrCv[nSrCvDrag]['quer'] == 1 )
			{
				if( x < nSrCvDragX )
				{
					nSrCv[nSrCvDrag]['prozente'] -=   nSrCv[nSrCvDrag]['schritte'];
					nSrCv[nSrCvDrag]['prozente']  = ( nSrCv[nSrCvDrag]['prozente'] <=   0 ) ?   0 : nSrCv[nSrCvDrag]['prozente'];
				} else
				if( x > nSrCvDragX )
				{
					nSrCv[nSrCvDrag]['prozente'] +=   nSrCv[nSrCvDrag]['schritte'];
					nSrCv[nSrCvDrag]['prozente']  = ( nSrCv[nSrCvDrag]['prozente'] >= 100 ) ? 100 : nSrCv[nSrCvDrag]['prozente'];
				}
			} else
			  {
				if( y > nSrCvDragY )
				{
					nSrCv[nSrCvDrag]['prozente'] -=   nSrCv[nSrCvDrag]['schritte'];
					nSrCv[nSrCvDrag]['prozente']  = ( nSrCv[nSrCvDrag]['prozente'] <=   0 ) ?   0 : nSrCv[nSrCvDrag]['prozente'];
				} else
				if( y < nSrCvDragY )
				{
					nSrCv[nSrCvDrag]['prozente'] +=   nSrCv[nSrCvDrag]['schritte'];
					nSrCv[nSrCvDrag]['prozente']  = ( nSrCv[nSrCvDrag]['prozente'] >= 100 ) ? 100 : nSrCv[nSrCvDrag]['prozente'];
				}
			  }

			nSrCvDragX = x;
			nSrCvDragY = y;

			nSrCvSet(nSrCvDrag, nSrCv[nSrCvDrag]['prozente']);
		}
	}


	document.addEventListener("dblclick",  nSrCvReset,     true);
	document.addEventListener("mouseup",   nSrCvMouseUp,   true);
	document.addEventListener("mousemove", nSrCvMouseMove, true);
	document.addEventListener("mousedown", nSrCvMouseDown, true);


	document.onload = window.setTimeout("nSrCvInit()", 1500);

