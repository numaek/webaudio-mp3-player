

	var nSsCv    = [];


	    nSsCv[0] = [];
	    nSsCv[0]['start']         = 0;			// Startstellung 1 oder 0
	    nSsCv[0]['richtung']      = 'r';			// Stellung bei an - l oder r
	    nSsCv[0]['text']          = 'A';			// Schrift auf Fläche bei Stellung an
	    nSsCv[0]['text_farbe']    = '#000000';		// Farbe der Schrift bei Stellung an
	    nSsCv[0]['breite_basis']  = 20;			// Basis + ( 2 * Radius ) = Gesamtbreite
	    nSsCv[0]['hoehe_basis']   = 7;			// Basis                  = Gesamthöhe
	    nSsCv[0]['Knopf_radius']  = 7;			// Radius des Knopfes
	    nSsCv[0]['Knopf_farbe']   = '#808080';		// Farbe  des Knopfes
	    nSsCv[0]['Knopf_rahmen']  = '#808080';		// Farbe  des Knopfrahmens
	    nSsCv[0]['farbe_flaeche'] = '#000000';		// Hintergrundfarbe Fläche Schalter aus
	    nSsCv[0]['farbe_aktiv']   = '#00FFFF';		// Hintergrundfarbe Fläche Schalter an
	    nSsCv[0]['farbe_hinter']  = '';			// Hintergrundfarbe des Canvas, keine = transparent
	    nSsCv[0]['rahmen_farbe']  = '#808080';		// Farbe des Aussenrahmens
	    nSsCv[0]['stellung']      = 0;			// READONLY - Speicher für den aktuellen Stellwert


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
					sscvStellung     = 0;
					 nSrCanvas.title = 'BPM Auto-detect ausschalten';
				} else
				  {
					sscvStellung     = 1;
					 nSrCanvas.title = 'BPM Auto-detect einschalten';
				  }
				 nSrCanvas.title = ( sscvStellung == 1 ) ? 'BPM Aktualwert Auto-detect ausschalten' : 'BPM Aktualwert Auto-detect einschalten';
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
				nSrCanvas.title         = ( nSsCv[cvss]['start'] == 1 ) ? 'BPM Aktualwert Auto-detect ausschalten' : 'BPM Aktualwert Auto-detect einschalten';

				nSsCvSet(cvss, nSsCv[cvss]['start']);
			}
		}
	}

	document.onload = window.setTimeout("nSrSsInit()", 250);


 /*
  *****************************************************************************************************************************************************************************************************


	<script type="text/javascript" src="javascript/nSchalter/CanvasSchalter.js"></script>


	<canvas id="nSsCv0" width="50" height="22" style="border: 0px;" onclick="javascript:nSsCvSet(0, -1);"></canvas>


  *****************************************************************************************************************************************************************************************************
  */
