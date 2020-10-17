

	var nSsCv    = [];


	    nSsCv[0] = [];
	    nSsCv[0]['start']         = ( nDjConfig['dispVu'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[0]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[0]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[0]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[0]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[0]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[0]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[0]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[0]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[0]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[0]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[0]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[0]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[0]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[1] = [];
	    nSsCv[1]['start']         = ( nDjConfig['dispVu'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[1]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[1]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[1]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[1]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[1]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[1]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[1]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[1]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[1]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[1]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[1]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[1]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[1]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[2] = [];
	    nSsCv[2]['start']         = ( nDjConfig['dispOsz'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[2]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[2]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[2]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[2]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[2]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[2]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[2]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[2]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[2]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[2]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[2]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[2]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[2]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[3] = [];
	    nSsCv[3]['start']         = ( nDjConfig['dispOsz'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[3]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[3]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[3]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[3]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[3]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[3]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[3]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[3]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[3]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[3]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[3]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[3]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[3]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[4] = [];
	    nSsCv[4]['start']         = ( nDjConfig['dispFreq'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[4]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[4]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[4]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[4]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[4]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[4]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[4]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[4]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[4]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[4]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[4]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[4]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[4]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[5] = [];
	    nSsCv[5]['start']         = ( nDjConfig['dispFreq'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[5]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[5]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[5]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[5]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[5]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[5]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[5]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[5]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[5]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[5]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[5]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[5]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[5]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[6] = [];
	    nSsCv[6]['start']         = ( nDjConfig['dispWave'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[6]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[6]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[6]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[6]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[6]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[6]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[6]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[6]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[6]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[6]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[6]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[6]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[6]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	    nSsCv[7] = [];
	    nSsCv[7]['start']         = ( nDjConfig['dispWave'] == 1 ) ? 1 : 0;	// Startstellung 1 oder 0
	    nSsCv[7]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[7]['text']          = 'On';			// Schrift auf Fläche bei Stellung an
	    nSsCv[7]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[7]['breite_basis']  = 24;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[7]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[7]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[7]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[7]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[7]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[7]['farbe_aktiv']   = '#DAA520';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[7]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[7]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[7]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


	function nSsCvSet(sscvID, sscvStellung)
	{
		/*
		 * sscvStellung
		 * ============
		 * 
		 *  0 = ausschalten
		 *  1 = einschalten
		 * -1 = Stellungswechsel
		 * 
		 */

		useSs          = 'nSsCv'+sscvID;
		if(  nSrCanvas = document.getElementById(useSs) )
		{
			ctx =  nSrCanvas.getContext('2d');

			if( sscvStellung == -1 )
			{
				if( nSsCv[sscvID]['stellung'] == 1 )
				{
					sscvStellung    = 0;
					nSrCanvas.title = 'ausschalten';
				} else
				  {
					sscvStellung    = 1;
					nSrCanvas.title = 'einschalten';
				  }
				 nSrCanvas.title = ( sscvStellung == 1 ) ? 'ausschalten' : 'einschalten';
			}

			nSsCv[sscvID]['width']  =  nSrCanvas.width;
			nSsCv[sscvID]['height'] =  nSrCanvas.height;

			// Hintergrund
			// ===========
			ctx.clearRect(0, 0, nSsCv[sscvID]['width'], nSsCv[sscvID]['height']);
			if( nSsCv[sscvID]['farbe_hinter'] != '' )
			{
				ctx.fillStyle    = nSsCv[sscvID]['farbe_hinter'];
				ctx.fillRect(0, 0, nSsCv[sscvID]['width'], nSsCv[sscvID]['height']);
			}


			// Rahmen zeichnen
			// ===============
			ctx.beginPath();
			ctx.lineWidth   = 1;
			ctx.strokeStyle = ( sscvStellung == 1 ) ? nSsCv[sscvID]['farbe_aktiv'] : nSsCv[sscvID]['rahmen_farbe'];
			ctx.fillStyle   = ( sscvStellung == 1 ) ? nSsCv[sscvID]['farbe_aktiv'] : nSsCv[sscvID]['farbe_flaeche'];

			x = ( nSsCv[sscvID]['width']  / 2 ) - ( nSsCv[sscvID]['breite_basis'] / 2 );
			y = ( nSsCv[sscvID]['height'] / 2 ) ;

			ctx.arc(    x, y,  nSsCv[sscvID]['hoehe_basis'], -(Math.PI/2), (Math.PI/2), true);
			ctx.moveTo( x, y - nSsCv[sscvID]['hoehe_basis'] );
			ctx.lineTo( x + nSsCv[sscvID]['breite_basis'], y - nSsCv[sscvID]['hoehe_basis']);
			ctx.arc(    x + nSsCv[sscvID]['breite_basis'], y,  nSsCv[sscvID]['hoehe_basis'], -(Math.PI/2), (Math.PI/2), false);
			ctx.lineTo( x, y + nSsCv[sscvID]['hoehe_basis'] );

			ctx.stroke();
			ctx.fill();
			ctx.closePath();


			// Knopf
			// =====
			if( ( sscvStellung == 0 && nSsCv[sscvID]['richtung'] == 'l' ) || ( sscvStellung == 1 && nSsCv[sscvID]['richtung'] == 'r' ) )
			{
				// Knopf rechts
				x_k = x + nSsCv[sscvID]['breite_basis'];
			} else
			  {
				// Knopf links
				x_k = x;
			  }

			ctx.beginPath();
			ctx.strokeStyle = nSsCv[sscvID]['Knopf_rahmen'];
			ctx.fillStyle   = nSsCv[sscvID]['Knopf_farbe'];
			ctx.arc( x_k, y,  nSsCv[sscvID]['Knopf_radius'], 0, (2*Math.PI), true);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();


			// Beschriftung
			// ============
			if( nSsCv[sscvID]['text'] != "" )
			{
				if( sscvStellung == 1 )
				{
					ctx.fillStyle = nSsCv[sscvID]['text_farbe'];
					ctx.font      = "normal 10px Arial,sans-serif";
					if( nSsCv[sscvID]['richtung'] == 'l' )
					{
						ctx.fillText(nSsCv[sscvID]['text'], x + 3 + nSsCv[sscvID]['Knopf_radius'], y + 3);
					} else
					  {
						ctx.fillText(nSsCv[sscvID]['text'], x - 2, y + 3);
					  }
				}
			}


			// Aktuelle Stellung speichern
			// ===========================
			nSsCv[sscvID]['stellung'] = sscvStellung;


			// Wert weiter verarbeiten
			// +++++++++++++++++++++++

			if( typeof(deckLinks) !== 'undefined' )
			{
				if( sscvID == 6 && sscvStellung == 1 &&  deckLinks.nWaveFormLoaded == 0 )	//  &&  deckLinks.nWaveFirstLoad > 0
				{
					deckLinks.nMusicFileWvClear();
					deckLinks.nMusicFileLoad(deckLinks.audio.src);
				}
			}

			if( typeof(deckRechts) !== 'undefined' )
			{
				if( sscvID == 7 && sscvStellung == 1 && deckRechts.nWaveFormLoaded == 0 )	//  && deckRechts.nWaveFirstLoad > 0
				{
					deckRechts.nMusicFileWvClear();
					deckRechts.nMusicFileLoad(deckRechts.audio.src);
				}
			}
		}
	}

	function nSrSsInit()
	{
		for( cvss = 0; cvss < nSsCv.length; cvss++ )
		{
			useSs         = 'nSsCv'+cvss;
			if( nSrCanvas = document.getElementById(useSs) )
			{
				nSrCanvas.style.cursor  =  'pointer';
				nSsCv[cvss]['stellung'] =   nSsCv[cvss]['start'];
				nSrCanvas.title         = ( nSsCv[cvss]['start'] == 1 ) ? 'ausschalten' : 'einschalten';

				nSsCvSet(cvss, nSsCv[cvss]['start']);
			}
		}
	}

	document.onload = window.setTimeout("nSrSsInit()", 2000);


 /*
  *****************************************************************************************************************************************************************************************************


	<script type="text/javascript" src="javascript/nSchalter/CanvasSchalter.js"></script>


	<canvas id="nSsCv0" width="50" height="22" style="border: 0px;" onclick="javascript:nSsCvSet(0, -1);"></canvas>


  *****************************************************************************************************************************************************************************************************
  */
