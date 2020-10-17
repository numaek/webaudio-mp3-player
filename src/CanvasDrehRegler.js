

	var nDrCv    = [];


	    nDrCv[0] = [];
	    nDrCv[0]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[0]['min']           = 0;			//   0 = SSW
	    nDrCv[0]['max']           = 270;			// 270 = SSO
	    nDrCv[0]['radius']        = 46;			// Radius des Knopfes
	    nDrCv[0]['mitte']         = 0;			// Mittelstellung
	    nDrCv[0]['start']         = (100*nMusicVolStart);	// Startwinkel in %
	    nDrCv[0]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[0]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[0]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[0]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[0]['punkt']         = 'punkt';		// "punkt" oder "strich"
	    nDrCv[0]['punkt_farbe']   = '#00FFFF';		// 
	    nDrCv[0]['skala']         = 0;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[0]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[0]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[0]['ring']          = 3;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[0]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[0]['ring_farbe']    = '#202020';		// Farbe des Rings
	    nDrCv[0]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[0]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[0]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[1] = [];
	    nDrCv[1]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[1]['min']           = 0;			//   0 = SSW
	    nDrCv[1]['max']           = 270;			// 270 = SSO
	    nDrCv[1]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[1]['mitte']         = 1;			// Mittelstellung
	    nDrCv[1]['start']         = 50;			// Startwinkel in %
	    nDrCv[1]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[1]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[1]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[1]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[1]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[1]['punkt_farbe']   = '#00FFFF';		// 
	    nDrCv[1]['skala']         = 5;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[1]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[1]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[1]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[1]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[1]['ring_farbe']    = '#00FFFF';		// Farbe des Rings
	    nDrCv[1]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[1]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[1]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[2] = [];
	    nDrCv[2]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[2]['min']           = 0;			//   0 = SSW
	    nDrCv[2]['max']           = 270;			// 270 = SSO
	    nDrCv[2]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[2]['mitte']         = 0;			// Mittelstellung
	    nDrCv[2]['start']         = 12;			// Startwinkel in %
	    nDrCv[2]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[2]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[2]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[2]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[2]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[2]['punkt_farbe']   = '#00FF00';		// 
	    nDrCv[2]['skala']         = 1;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[2]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[2]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[2]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[2]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[2]['ring_farbe']    = '#00FF00';		// Farbe des Rings
	    nDrCv[2]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[2]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[2]['stufen']        = [];			// Stufenstellungen in %
	    nDrCv[2]['stufen'][0]     = '0|Regular';
	    nDrCv[2]['stufen'][1]     = '12|Peak';
	    nDrCv[2]['stufen'][2]     = '24|Points';
	    nDrCv[2]['stufen'][3]     = '34|Upside';
	    nDrCv[2]['stufen'][4]     = '50|Rain';
	    nDrCv[2]['stufen'][5]     = '66|Mirror';
	    nDrCv[2]['stufen'][6]     = '76|Gap';
	    nDrCv[2]['stufen'][7]     = '88|Horiz.';
	    nDrCv[2]['stufen'][8]     = '100|Bright';


	    nDrCv[3] = [];
	    nDrCv[3]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[3]['min']           = 0;			//   0 = SSW
	    nDrCv[3]['max']           = 270;			// 270 = SSO
	    nDrCv[3]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[3]['mitte']         = 0;			// Mittelstellung
	    nDrCv[3]['start']         = 0;			// Startwinkel in %
	    nDrCv[3]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[3]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[3]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[3]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[3]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[3]['punkt_farbe']   = '#FFFF00';		// 
	    nDrCv[3]['skala']         = 0;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[3]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[3]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[3]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[3]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[3]['ring_farbe']    = '#FFFF00';		// Farbe des Rings
	    nDrCv[3]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[3]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[3]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[4] = [];
	    nDrCv[4]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[4]['min']           = 0;			//   0 = SSW
	    nDrCv[4]['max']           = 270;			// 270 = SSO
	    nDrCv[4]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[4]['mitte']         = 1;			// Mittelstellung
	    nDrCv[4]['start']         = 50;			// Startwinkel in %
	    nDrCv[4]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[4]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[4]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[4]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[4]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[4]['punkt_farbe']   = '#FFFF00';		// 
	    nDrCv[4]['skala']         = 5;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[4]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[4]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[4]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[4]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[4]['ring_farbe']    = '#FFFF00';		// Farbe des Rings
	    nDrCv[4]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[4]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[4]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[5] = [];
	    nDrCv[5]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[5]['min']           = 0;			//   0 = SSW
	    nDrCv[5]['max']           = 270;			// 270 = SSO
	    nDrCv[5]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[5]['mitte']         = 0;			// Mittelstellung
	    nDrCv[5]['start']         = 0;			// Startwinkel in %
	    nDrCv[5]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[5]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[5]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[5]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[5]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[5]['punkt_farbe']   = 'orange';		// 
	    nDrCv[5]['skala']         = 1;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[5]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[5]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[5]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[5]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[5]['ring_farbe']    = 'orange';		// Farbe des Rings
	    nDrCv[5]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[5]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[5]['stufen']        = [];			// Stufenstellungen in %
	    nDrCv[5]['stufen'][0]     = '0|Sinus';
	    nDrCv[5]['stufen'][1]     = '33|Rechteck';
	    nDrCv[5]['stufen'][2]     = '67|Dreieck';
	    nDrCv[5]['stufen'][3]     = '100|Saegezahn';


	    nDrCv[6] = [];
	    nDrCv[6]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[6]['min']           = 0;			//   0 = SSW
	    nDrCv[6]['max']           = 270;			// 270 = SSO
	    nDrCv[6]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[6]['mitte']         = 0;			// Mittelstellung
	    nDrCv[6]['start']         = 5;			// Startwinkel in %
	    nDrCv[6]['schritte']      = 1;			// Schrittweite in % bei Drehung
	    nDrCv[6]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[6]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[6]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[6]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[6]['punkt_farbe']   = 'orange';		// 
	    nDrCv[6]['skala']         = 0;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[6]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[6]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[6]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[6]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[6]['ring_farbe']    = 'orange';		// Farbe des Rings
	    nDrCv[6]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[6]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[6]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[7] = [];
	    nDrCv[7]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[7]['min']           = 0;			//   0 = SSW
	    nDrCv[7]['max']           = 270;			// 270 = SSO
	    nDrCv[7]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[7]['mitte']         = 0;			// Mittelstellung
	    nDrCv[7]['start']         = 50;			// Startwinkel in %
	    nDrCv[7]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[7]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[7]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[7]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[7]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[7]['punkt_farbe']   = 'orange';		// 
	    nDrCv[7]['skala']         = 0;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[7]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[7]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[7]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[7]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[7]['ring_farbe']    = 'orange';		// Farbe des Rings
	    nDrCv[7]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[7]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[7]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[8] = [];
	    nDrCv[8]['prozente']      = 50;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[8]['min']           = 0;			//   0 = SSW
	    nDrCv[8]['max']           = 270;			// 270 = SSO
	    nDrCv[8]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[8]['mitte']         = 0;			// Mittelstellung
	    nDrCv[8]['start']         = 50;			// Startwinkel in %
	    nDrCv[8]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nDrCv[8]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[8]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[8]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[8]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[8]['punkt_farbe']   = '#00FFFF';		// 
	    nDrCv[8]['skala']         = 0;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[8]['skala_alle']    = 1;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[8]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[8]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[8]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[8]['ring_farbe']    = '#00FFFF';		// Farbe des Rings
	    nDrCv[8]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[8]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[8]['stufen']        = [];			// Stufenstellungen in %


	    nDrCv[9] = [];
	    nDrCv[9]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nDrCv[9]['min']           = 0;			//   0 = SSW
	    nDrCv[9]['max']           = 270;			// 270 = SSO
	    nDrCv[9]['radius']        = 15;			// Radius des Knopfes
	    nDrCv[9]['mitte']         = 1;			// Mittelstellung
	    nDrCv[9]['start']         = 50;			// Startwinkel in %
	    nDrCv[9]['schritte']      = 1;			// Schrittweite in % bei Drehung
	    nDrCv[9]['farbe_hinter']  = '';			// Hintergrundfarbe, leer = keine
	    nDrCv[9]['Knopf_farbe_1'] = '#DCDCDC';		// Farbe oben  vom Farbverlauf
	    nDrCv[9]['Knopf_farbe_2'] = '#505050';		// Farbe unten vom Farbverlauf
	    nDrCv[9]['punkt']         = 'strich';		// "punkt" oder "strich"
	    nDrCv[9]['punkt_farbe']   = '#FFFF00';		// 
	    nDrCv[9]['skala']         = 0;			// 0(keine), 1(1 bis 10), 2(-5 bis +5), 3(-10 bis 0)
	    nDrCv[9]['skala_alle']    = 0;			// 1 = alle 11 Werte, 0 = nur Start, Mitte & Ende
	    nDrCv[9]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nDrCv[9]['ring']          = 1;			// 0(keiner), 1(aktiv), 2(dauer-an), 3(dauer-an Vollkreis)
	    nDrCv[9]['ring_breite']   = 4;			// Strichstärke
	    nDrCv[9]['ring_farbe']    = '#FFFF00';		// Farbe des Rings
	    nDrCv[9]['ring_hinter']   = 1;			// 0(keiner), 1(wie Vordergrund), 2(dauer-an Vollkreis)
	    nDrCv[9]['ring_hinter_f'] = '#505050';		// Farbe des Hintergrund-Rings
	    nDrCv[9]['stufen']        = [];			// Stufenstellungen in %


	// #####################################################################################################################################


	var nDrCvDrag     = -1;
	var nDrCvDragX    = 0;
	var nDrCvDragY    = 0;
	var nDrCvPosX     = 0;
	var nDrCvPosY     = 0;
	var nDrCvRadius   = 0;
	var useDrcvPROZ   = 0;
	var useDrcvTitle  = '';


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
			if( drcvID == 0 )
			{
				// Lautstärke-REgler in Metalloptik
				// ================================

					// Hintergrund
					ctx.beginPath();
					ctx.lineWidth   = 1;
					ctx.strokeStyle = '#505050';
					ctx.fillStyle   = '#DCDCDC';
					ctx.arc(nCpX, nCpY, nDrCv[drcvID]['radius'], 0, 2*Math.PI, false);
					ctx.fill();
					ctx.stroke();
					ctx.closePath();

					// Farbverläufe Metalleffekt
					for( a = 0; a < 4; a++ )
					{
						for( l = (a*90); l < ((a*90)+90); l++ )
						{
							farbWinkel   = Math.PI * 2 / 360 * (l-135);
							farbSchritte = 100 / 90 * (l-(a*90));

							if( a % 2 == 0 )
							{
								cd = 155 - farbSchritte;
							} else
							  {
								cd = 55 + farbSchritte;
							  }

							ctx.beginPath();
							ctx.strokeStyle = 'rgb('+cd+','+cd+','+cd+')'
							EndPunktX       = nDrCv[drcvID]['radius'] * Math.cos(farbWinkel);
							EndPunktY       = nDrCv[drcvID]['radius'] * Math.sin(farbWinkel);
							ctx.moveTo(nCpX, nCpY);
							ctx.lineTo(nCpX + EndPunktX, nCpY + EndPunktY);
							ctx.stroke();
							ctx.closePath();
						}
					}

					// Aussenphase
					rKreis          = Math.round( nDrCv[drcvID]['radius'] / 10 );
					ctx.lineWidth   = rKreis;
					ctx.strokeStyle = '#505050';
					ctx.beginPath();
					ctx.arc(nCpX, nCpY, nDrCv[drcvID]['radius']-(rKreis/2), 0, 2*Math.PI, false);
					ctx.stroke();
					ctx.closePath();
			} else
			  {
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
			  }

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
						if( nDrCv[drcvID]['skala_alle'] == 1 || ( nDrCv[drcvID]['skala_alle'] == 0 && ( st == 0 || st == 5 || st == 10 ) ) )
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
							if( nDrCv[drcvID]['skala'] == 5 )
							{
								if( st == 0 || st == 5 || st == 10 )
								{
									text  = st - 5;
									textX = nRadialToCosinus(nProzentToRadial(drcvID, (st*10)), radiusRange);
									textY = nRadialToSinus(nProzentToRadial(drcvID,   (st*10)), radiusRange);
								} else
								  {
									text  = '.';
									textX = nRadialToCosinus(nProzentToRadial(drcvID, (st*10)), radiusRange*0.9);
									textY = nRadialToSinus(nProzentToRadial(drcvID,   (st*10)), radiusRange*0.9) - 2;
								  }
								tl    = ctx.measureText(text).width;
								ctx.fillText(text, (nCpX+(textX-(0.5*tl))), (nCpY+textY+3));
							} else
							  {
								text  = st - 10;
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
						stufeWeiter   = nDrCv[drcvID]['stufen'][(stufe+1)].split('|');

						if( drcvPROZ >= parseInt(stufenDaten[0]) && drcvPROZ < parseInt(stufeWeiter[0]) )
						{
							// % zwischen dieser und der nächsten Stufe
							useDrcvPROZ      = parseInt(stufenDaten[0]);
							useDrcvTitle     = stufenDaten[1];
							stellungGefunden = 1;
						} else
						  {
							if( stellungGefunden = 0 )
							{
								useDrcvPROZ  = parseInt(stufeWeiter[0]);
								useDrcvTitle =          stufeWeiter[1];
							}
						  }
					} else
					  {
						// Letzte Stufe
						if( drcvPROZ == parseInt(stufenDaten[0]) )
						{
							useDrcvPROZ  = parseInt(stufenDaten[0]);
							useDrcvTitle =          stufenDaten[1];
						}
					  }
				}
			} else
			  {
				// Linear-Regler
				// =============
				useDrcvPROZ  = drcvPROZ;
				useDrcvTitle = '';
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
				// Volume-Regler
				// -------------
				if( nPlayerInFrame != 0 )
				{
					if( 1 == 2 )
					{
						if( nPlayerInFrame == 1 )
						{
							mixerVol = top.nSrCv[1]['prozente'];
						}

						if( nPlayerInFrame == 2 )
						{
							mixerVol = top.nSrCv[2]['prozente'];
						}

						document.getElementById('audio1').volume = ( mixerVol / 100 ) * ( nDrCv[drcvID]['prozente'] / 100 );	// * Fader-Prozente
					}
				} else
				  {
					document.getElementById('audio1').volume = nDrCv[drcvID]['prozente'] / 100;
				  }

				// Loudness
				// --------
				if( nFreqIsAPI == 1 )
				{
					nLoudSetTo = 10 - ( ( nDrCv[drcvID]['prozente'] / 100 ) * 20 );
					nLoudSetTo = ( nLoudSetTo < 0 ) ? 0 : nLoudSetTo;
					 nLoudLow.gain.setValueAtTime(nLoudSetTo, audioCtx.currentTime);
					nLoudHigh.gain.setValueAtTime(nLoudSetTo, audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }

				// Beschriftung
				// -------------
				/*
				text          = 'VOL';
				tl            = ctx.measureText(text).width;
				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText(text, (nDrCv[drcvID]['width']/2)-(0.5*tl), (nDrCv[drcvID]['height']-0));
				*/

				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText('-', 6,                           (nDrCv[drcvID]['height']-6));
				ctx.fillText('+', (nDrCv[drcvID]['width']-12), (nDrCv[drcvID]['height']-4));

				nMusic_displayVolume();
			}

			if( drcvID == 1 )
			{
				// Balance-Regler
				// --------------
				xProzL          = ( nDrCv[drcvID]['prozente'] >  50 ) ? ( ( 100 - nDrCv[drcvID]['prozente'] ) * 2 ) : 100;
				nBalSetGainL    = ( xProzL / 100 );

				xProzR          = ( nDrCv[drcvID]['prozente'] <  50 ) ? ( nDrCv[drcvID]['prozente'] * 2 ) : 100;
				nBalSetGainR    = ( xProzR / 100 );

				if( nFreqIsAPI == 1 )
				{
					 nBalGainLeft.gain.setValueAtTime(nBalSetGainL, audioCtx.currentTime);
					nBalGainRight.gain.setValueAtTime(nBalSetGainR, audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }

				// Beschriftung
				// -------------
				text          = 'BAL';
				tl            = ctx.measureText(text).width;
				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText(text, (nDrCv[drcvID]['width']/2)-(0.5*tl), (nDrCv[drcvID]['height']-0));

				nMusic_displayVolume();
			}

			if( drcvID == 2 )
			{
				// VisuMode-Regler
				// ---------------
				nDrCvSetVM(nDrCv[drcvID]['prozente']);

				// Beschriftung
				// -------------
				text          = 'DISPLAY-MODE';
				tl            = ctx.measureText(text).width;
				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText(text, (nDrCv[drcvID]['width']/2)-(0.5*tl), (nDrCv[drcvID]['height']-5));
			}

			if( drcvID == 3 )
			{
				// ECHO-Regler
				// -----------
				if( nFreqIsAPI == 1 )
				{
					xProz = nDrCv[drcvID]['prozente'] * 0.5 / 100;
					nDelay.delayTime.setValueAtTime(xProz, audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }

				// Beschriftung
				// -------------
				/*
				text          = 'ECHO';
				tl            = ctx.measureText(text).width;
				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText(text, (nDrCv[drcvID]['width']/2)-(0.5*tl), (nDrCv[drcvID]['height']-0));
				*/
			}

			if( drcvID == 4 )
			{
				// PAN-Regler
				// ----------
				if( nFreqIsAPI == 1 )
				{
					xProz = -1 + ( nDrCv[drcvID]['prozente'] * 2 / 100 );
					nPanner.pan.setValueAtTime(xProz, audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }

				// Beschriftung
				// -------------
				text          = 'PAN';
				tl            = ctx.measureText(text).width;
				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText(text, (nDrCv[drcvID]['width']/2)-(0.5*tl), (nDrCv[drcvID]['height']-0));

				nMusic_displayVolume();
			}

			if( drcvID == 5 )
			{
				// OSC Wellenform-Regler
				// ---------------------
				nDrCvSetOscType(nDrCv[drcvID]['prozente'], 0);
			}

			if( drcvID == 6 )
			{
				// OSC Frequenz-Regler
				// -------------------
				if( nFreqIsAPI == 1 )
				{
					xOscFreq = Math.round( nDrCv[drcvID]['prozente'] ) * 100;

					    nOsc_Sine.frequency.setValueAtTime(xOscFreq, audioCtx.currentTime);
					  nOsc_Square.frequency.setValueAtTime(xOscFreq, audioCtx.currentTime);
					nOsc_Triangle.frequency.setValueAtTime(xOscFreq, audioCtx.currentTime);
					nOsc_Sawtooth.frequency.setValueAtTime(xOscFreq, audioCtx.currentTime);

					document.getElementById('nDspFreqDisplay').innerHTML = xOscFreq;
				} else
				  {
					AudioApiError();
				  }
			}

			if( drcvID == 7 )
			{
				// OSC Gain-Regler
				// ---------------
				if( nFreqIsAPI == 1 )
				{
					nOscGain.gain.setValueAtTime((nDrCv[drcvID]['prozente']/100), audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }
			}

			if( drcvID == 8 )
			{
				// Micro Gain-Regler
				// -----------------
				if( nFreqIsAPI == 1 && nMicro_first == 1 )
				{
					nMicroGain.gain.setValueAtTime((nDrCv[drcvID]['prozente']/100), audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }
			}

			if( drcvID == 9 )
			{
				// Stereo-Delay-Regler
				// -------------------
				nDelayMsMax     = 0.15;	// Sekunden

				xProzL          = ( nDrCv[drcvID]['prozente'] >  50 ) ? ( ( 100 - nDrCv[drcvID]['prozente'] ) * 2 ) : 100;
				nDelaySetGainR  = nDelayMsMax - ( xProzL / 100 * nDelayMsMax );

				xProzR          = ( nDrCv[drcvID]['prozente'] <  50 ) ? ( nDrCv[drcvID]['prozente'] * 2 ) : 100;
				nDelaySetGainL  = nDelayMsMax - ( xProzR / 100 * nDelayMsMax );

				if( nFreqIsAPI == 1 )
				{
					 nMsDelayLeft.delayTime.setValueAtTime(nDelaySetGainL, audioCtx.currentTime);
					nMsDelayRight.delayTime.setValueAtTime(nDelaySetGainR, audioCtx.currentTime);
				} else
				  {
					AudioApiError();
				  }

				// Beschriftung
				// -------------
				/*
				text          = 'ST. DEL';
				tl            = ctx.measureText(text).width;
				ctx.fillStyle = nDrCv[drcvID]['skala_farbe'];
				ctx.fillText(text, (nDrCv[drcvID]['width']/2)-(0.5*tl), (nDrCv[drcvID]['height']-0));
				*/

				nMusic_displayVolume();
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

				// VisuMode-Regler
				// ---------------
				if( nDrCvDrag == 2 )
				{
					nDrCvSetVM(nDrCv[nDrCvDrag]['prozente']);
				}

				// OSC Wellenform-Regler
				// ---------------------
				if( nDrCvDrag == 5 )
				{
					nDrCvSetOscType(nDrCv[nDrCvDrag]['prozente'], 1);
				}

				// Title mit Stufentext überschreiben
				document.getElementById(strTitle).title = ( useDrcvTitle != '' ) ? useDrcvTitle : useDrcvPROZ + '%';
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


	document.onload = window.setTimeout("nDrCvInit()", 100);


	function nDrCvSetVM(proz)
	{
		// VisuMode-Regler
		// ---------------
		// ('normal', 'peak', 'points', 'upside', 'rain', 'mirror', 'gap', 'horizont', 'bright');

		switch( proz )
		{
			case 12:
				nFreqAnzeige = nFreqAnzeigen[1];
				break;
			case 24:
				nFreqAnzeige = nFreqAnzeigen[2];
				break;
			case 34:
				nFreqAnzeige = nFreqAnzeigen[3];
				break;
			case 50:
				nFreqAnzeige = nFreqAnzeigen[4];
				break;
			case 66:
				nFreqAnzeige = nFreqAnzeigen[5];
				break;
			case 76:
				nFreqAnzeige = nFreqAnzeigen[6];
				break;
			case 88:
				nFreqAnzeige = nFreqAnzeigen[7];
				break;
			case 100:
				nFreqAnzeige = nFreqAnzeigen[8];
				break;
			default:
				nFreqAnzeige = nFreqAnzeigen[0];
		}
	}


	function nDrCvSetOscType(proz, change)
	{
		switch( proz )
		{
			case 33:
				nOscToWave = 'square';
				break;
			case 67:
				nOscToWave = 'triangle';
				break;
			case 100:
				nOscToWave = 'sawtooth';
				break;
			default:
				nOscToWave = 'sine';
		}

		if( change == 1 )
		{
			if( nOscToWave != nOscWave )
			{
				if(   nOscWave == 'sine'     ) {     nOsc_Sine.disconnect(nOscGain); }
				if(   nOscWave == 'square'   ) {   nOsc_Square.disconnect(nOscGain); }
				if(   nOscWave == 'triangle' ) { nOsc_Triangle.disconnect(nOscGain); }
				if(   nOscWave == 'sawtooth' ) { nOsc_Sawtooth.disconnect(nOscGain); }

				if( nOscToWave == 'sine'     ) {     nOsc_Sine.connect(nOscGain);    }
				if( nOscToWave == 'square'   ) {   nOsc_Square.connect(nOscGain);    }
				if( nOscToWave == 'triangle' ) { nOsc_Triangle.connect(nOscGain);    }
				if( nOscToWave == 'sawtooth' ) { nOsc_Sawtooth.connect(nOscGain);    }
			}

			nOscWave = nOscToWave;
		}
	}
