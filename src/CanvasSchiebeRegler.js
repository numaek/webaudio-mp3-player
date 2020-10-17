

	var nSrCv    = [];


	    nSrCv[0] = [];
	    nSrCv[0]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[0]['quer']          = 1;
	    nSrCv[0]['mitte']         = 0;			// Mittelstellung
	    nSrCv[0]['start']         = 0;			// Startstellung in %
	    nSrCv[0]['schritte']      = 2;			// Schrittweite in % bei Drehung
	    nSrCv[0]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[0]['str_leucht']    = 1;
	    nSrCv[0]['str_laenge']    = 100;
	    nSrCv[0]['str_breite']    = 4;
	    nSrCv[0]['str_hinter']    = '#606060';
	    nSrCv[0]['str_farbe']     = '#00FFFF';
	    nSrCv[0]['Knopf_rund']    = 1;			// 1 = rund, 0 = eckig
	    nSrCv[0]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[0]['Knopf_laenge']  = 14;
	    nSrCv[0]['Knopf_breite']  = 20;
	    nSrCv[0]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[0]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[0]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[0]['skala']         = 0;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[0]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[0]['stufen']        = [];			// Stufenstellungen in %


	    nSrCv[1] = [];
	    nSrCv[1]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[1]['quer']          = 0;
	    nSrCv[1]['mitte']         = 1;			// Mittelstellung
	    nSrCv[1]['start']         = 50;			// Startstellung in %
	    nSrCv[1]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[1]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[1]['str_leucht']    = 1;
	    nSrCv[1]['str_laenge']    = 73;
	    nSrCv[1]['str_breite']    = 4;
	    nSrCv[1]['str_hinter']    = '#606060';
	    nSrCv[1]['str_farbe']     = '#00FFFF';
	    nSrCv[1]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[1]['Knopf_radius']  = 10;			// Radius des Knopfes
	    nSrCv[1]['Knopf_laenge']  = 14;
	    nSrCv[1]['Knopf_breite']  = 20;
	    nSrCv[1]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[1]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[1]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[1]['skala']         = 1;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[1]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[1]['stufen']        = [];			// Stufenstellungen in %


	    nSrCv[2] = [];
	    nSrCv[2]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[2]['quer']          = 1;
	    nSrCv[2]['mitte']         = 0;			// Mittelstellung
	    nSrCv[2]['start']         = 0;			// Startstellung in %
	    nSrCv[2]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[2]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[2]['str_leucht']    = 1;
	    nSrCv[2]['str_laenge']    = 80;
	    nSrCv[2]['str_breite']    = 4;
	    nSrCv[2]['str_hinter']    = '#606060';
	    nSrCv[2]['str_farbe']     = '#00FFFF';
	    nSrCv[2]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[2]['Knopf_radius']  = 10;			// Radius des Knopfes
	    nSrCv[2]['Knopf_laenge']  = 10;
	    nSrCv[2]['Knopf_breite']  = 20;
	    nSrCv[2]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[2]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[2]['Knopf_aktiv']   = '#FF0000';		// Farbe wenn Knopf gedrückt
	    nSrCv[2]['skala']         = 1;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[2]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[2]['stufen']        = [];			// Stufenstellungen in %
	    nSrCv[2]['stufen'][0]     = 0;
	    nSrCv[2]['stufen'][1]     = 15;
	    nSrCv[2]['stufen'][2]     = 30;
	    nSrCv[2]['stufen'][3]     = 45;
	    nSrCv[2]['stufen'][4]     = 60;
	    nSrCv[2]['stufen'][5]     = 75;
	    nSrCv[2]['stufen'][6]     = 88;
	    nSrCv[2]['stufen'][7]     = 100;


	    // 10-Band-EQ
	    // ==========
	    nSrCv[3] = [];
	    nSrCv[3]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[3]['quer']          = 0;
	    nSrCv[3]['mitte']         = 1;			// Mittelstellung
	    nSrCv[3]['start']         = 50;			// Startstellung in %
	    nSrCv[3]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[3]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[3]['str_leucht']    = 1;
	    nSrCv[3]['str_laenge']    = 90;
	    nSrCv[3]['str_breite']    = 4;
	    nSrCv[3]['str_hinter']    = '#606060';
	    nSrCv[3]['str_farbe']     = '#00FFFF';
	    nSrCv[3]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[3]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[3]['Knopf_laenge']  = 14;
	    nSrCv[3]['Knopf_breite']  = 24;
	    nSrCv[3]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[3]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[3]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[3]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[3]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[3]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[4] = [];
	    nSrCv[4]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[4]['quer']          = 0;
	    nSrCv[4]['mitte']         = 1;			// Mittelstellung
	    nSrCv[4]['start']         = 50;			// Startstellung in %
	    nSrCv[4]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[4]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[4]['str_leucht']    = 1;
	    nSrCv[4]['str_laenge']    = 90;
	    nSrCv[4]['str_breite']    = 4;
	    nSrCv[4]['str_hinter']    = '#606060';
	    nSrCv[4]['str_farbe']     = '#00FFFF';
	    nSrCv[4]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[4]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[4]['Knopf_laenge']  = 14;
	    nSrCv[4]['Knopf_breite']  = 24;
	    nSrCv[4]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[4]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[4]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[4]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[4]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[4]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[5] = [];
	    nSrCv[5]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[5]['quer']          = 0;
	    nSrCv[5]['mitte']         = 1;			// Mittelstellung
	    nSrCv[5]['start']         = 50;			// Startstellung in %
	    nSrCv[5]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[5]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[5]['str_leucht']    = 1;
	    nSrCv[5]['str_laenge']    = 90;
	    nSrCv[5]['str_breite']    = 4;
	    nSrCv[5]['str_hinter']    = '#606060';
	    nSrCv[5]['str_farbe']     = '#00FFFF';
	    nSrCv[5]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[5]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[5]['Knopf_laenge']  = 14;
	    nSrCv[5]['Knopf_breite']  = 24;
	    nSrCv[5]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[5]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[5]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[5]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[5]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[5]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[6] = [];
	    nSrCv[6]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[6]['quer']          = 0;
	    nSrCv[6]['mitte']         = 1;			// Mittelstellung
	    nSrCv[6]['start']         = 50;			// Startstellung in %
	    nSrCv[6]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[6]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[6]['str_leucht']    = 1;
	    nSrCv[6]['str_laenge']    = 90;
	    nSrCv[6]['str_breite']    = 4;
	    nSrCv[6]['str_hinter']    = '#606060';
	    nSrCv[6]['str_farbe']     = '#00FFFF';
	    nSrCv[6]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[6]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[6]['Knopf_laenge']  = 14;
	    nSrCv[6]['Knopf_breite']  = 24;
	    nSrCv[6]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[6]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[6]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[6]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[6]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[6]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[7] = [];
	    nSrCv[7]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[7]['quer']          = 0;
	    nSrCv[7]['mitte']         = 1;			// Mittelstellung
	    nSrCv[7]['start']         = 50;			// Startstellung in %
	    nSrCv[7]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[7]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[7]['str_leucht']    = 1;
	    nSrCv[7]['str_laenge']    = 90;
	    nSrCv[7]['str_breite']    = 4;
	    nSrCv[7]['str_hinter']    = '#606060';
	    nSrCv[7]['str_farbe']     = '#00FFFF';
	    nSrCv[7]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[7]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[7]['Knopf_laenge']  = 14;
	    nSrCv[7]['Knopf_breite']  = 24;
	    nSrCv[7]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[7]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[7]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[7]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[7]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[7]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[8] = [];
	    nSrCv[8]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[8]['quer']          = 0;
	    nSrCv[8]['mitte']         = 1;			// Mittelstellung
	    nSrCv[8]['start']         = 50;			// Startstellung in %
	    nSrCv[8]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[8]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[8]['str_leucht']    = 1;
	    nSrCv[8]['str_laenge']    = 90;
	    nSrCv[8]['str_breite']    = 4;
	    nSrCv[8]['str_hinter']    = '#606060';
	    nSrCv[8]['str_farbe']     = '#00FFFF';
	    nSrCv[8]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[8]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[8]['Knopf_laenge']  = 14;
	    nSrCv[8]['Knopf_breite']  = 24;
	    nSrCv[8]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[8]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[8]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[8]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[8]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[8]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[9] = [];
	    nSrCv[9]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[9]['quer']          = 0;
	    nSrCv[9]['mitte']         = 1;			// Mittelstellung
	    nSrCv[9]['start']         = 50;			// Startstellung in %
	    nSrCv[9]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[9]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[9]['str_leucht']    = 1;
	    nSrCv[9]['str_laenge']    = 90;
	    nSrCv[9]['str_breite']    = 4;
	    nSrCv[9]['str_hinter']    = '#606060';
	    nSrCv[9]['str_farbe']     = '#00FFFF';
	    nSrCv[9]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[9]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[9]['Knopf_laenge']  = 14;
	    nSrCv[9]['Knopf_breite']  = 24;
	    nSrCv[9]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[9]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[9]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[9]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[9]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[9]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[10] = [];
	    nSrCv[10]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[10]['quer']          = 0;
	    nSrCv[10]['mitte']         = 1;			// Mittelstellung
	    nSrCv[10]['start']         = 50;			// Startstellung in %
	    nSrCv[10]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[10]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[10]['str_leucht']    = 1;
	    nSrCv[10]['str_laenge']    = 90;
	    nSrCv[10]['str_breite']    = 4;
	    nSrCv[10]['str_hinter']    = '#606060';
	    nSrCv[10]['str_farbe']     = '#00FFFF';
	    nSrCv[10]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[10]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[10]['Knopf_laenge']  = 14;
	    nSrCv[10]['Knopf_breite']  = 24;
	    nSrCv[10]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[10]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[10]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[10]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[10]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[10]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[11] = [];
	    nSrCv[11]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[11]['quer']          = 0;
	    nSrCv[11]['mitte']         = 1;			// Mittelstellung
	    nSrCv[11]['start']         = 50;			// Startstellung in %
	    nSrCv[11]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[11]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[11]['str_leucht']    = 1;
	    nSrCv[11]['str_laenge']    = 90;
	    nSrCv[11]['str_breite']    = 4;
	    nSrCv[11]['str_hinter']    = '#606060';
	    nSrCv[11]['str_farbe']     = '#00FFFF';
	    nSrCv[11]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[11]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[11]['Knopf_laenge']  = 14;
	    nSrCv[11]['Knopf_breite']  = 24;
	    nSrCv[11]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[11]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[11]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[11]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[11]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[11]['stufen']        = [];			// Stufenstellungen in %

	    nSrCv[12] = [];
	    nSrCv[12]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[12]['quer']          = 0;
	    nSrCv[12]['mitte']         = 1;			// Mittelstellung
	    nSrCv[12]['start']         = 50;			// Startstellung in %
	    nSrCv[12]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[12]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[12]['str_leucht']    = 1;
	    nSrCv[12]['str_laenge']    = 90;
	    nSrCv[12]['str_breite']    = 4;
	    nSrCv[12]['str_hinter']    = '#606060';
	    nSrCv[12]['str_farbe']     = '#00FFFF';
	    nSrCv[12]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[12]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[12]['Knopf_laenge']  = 14;
	    nSrCv[12]['Knopf_breite']  = 24;
	    nSrCv[12]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[12]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[12]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[12]['skala']         = 2;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[12]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[12]['stufen']        = [];			// Stufenstellungen in %


	    nSrCv[13] = [];
	    nSrCv[13]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[13]['quer']          = 0;
	    nSrCv[13]['mitte']         = 0;			// Mittelstellung
	    nSrCv[13]['start']         = 100;			// Startstellung in %
	    nSrCv[13]['schritte']      = 3;			// Schrittweite in % bei Drehung
	    nSrCv[13]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[13]['str_leucht']    = 1;
	    nSrCv[13]['str_laenge']    = 90;
	    nSrCv[13]['str_breite']    = 4;
	    nSrCv[13]['str_hinter']    = '#606060';
	    nSrCv[13]['str_farbe']     = '#FF0000';
	    nSrCv[13]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[13]['Knopf_radius']  = 8;			// Radius des Knopfes
	    nSrCv[13]['Knopf_laenge']  = 14;
	    nSrCv[13]['Knopf_breite']  = 24;
	    nSrCv[13]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[13]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[13]['Knopf_aktiv']   = '#00FF00';		// Farbe wenn Knopf gedrückt
	    nSrCv[13]['skala']         = 3;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10, 3 = nur 1, 10
	    nSrCv[13]['skala_farbe']   = '#FF0000';		// SChriftfarbe der Skala
	    nSrCv[13]['stufen']        = [];			// Stufenstellungen in %


	    nSrCv[14] = [];
	    nSrCv[14]['prozente']      = 0;			// READONLY - Speicher für den aktuellen Prozentwert
	    nSrCv[14]['quer']          = 1;
	    nSrCv[14]['mitte']         = 0;			// Mittelstellung
	    nSrCv[14]['start']         = 52;			// Startstellung in %
	    nSrCv[14]['schritte']      = 4;			// Schrittweite in % bei Drehung
	    nSrCv[14]['farbe_hinter']  = '';			// Hintergrundfarbe, 0 = keine
	    nSrCv[14]['str_leucht']    = 1;
	    nSrCv[14]['str_laenge']    = 80;
	    nSrCv[14]['str_breite']    = 4;
	    nSrCv[14]['str_hinter']    = '#606060';
	    nSrCv[14]['str_farbe']     = '#00FFFF';
	    nSrCv[14]['Knopf_rund']    = 0;			// 1 = rund, 0 = eckig
	    nSrCv[14]['Knopf_radius']  = 10;			// Radius des Knopfes
	    nSrCv[14]['Knopf_laenge']  = 10;
	    nSrCv[14]['Knopf_breite']  = 14;
	    nSrCv[14]['Knopf_farbe_1'] = '#AAAAAA';		// Farbe unten vom Farbverlauf
	    nSrCv[14]['Knopf_farbe_2'] = '#707070';		// Farbe oben  vom Farbverlauf
	    nSrCv[14]['Knopf_aktiv']   = '#FF0000';		// Farbe wenn Knopf gedrückt
	    nSrCv[14]['skala']         = 0;			// 0 = nein, 1 = ja, 2 = nur 1, 5, 10
	    nSrCv[14]['skala_farbe']   = '#FFFFFF';		// SChriftfarbe der Skala
	    nSrCv[14]['stufen']        = [];			// Stufenstellungen in %


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
						if( nSrCv[drcvID]['skala'] == 3 )
						{
							freigabe = ( st == 0 ||            st == 10 ) ? 1 : 0;
						} else
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

				// AmbiLight Ausnahme
				if( drcvID == 14 )
				{
					if( nLightColor[0] == 0 && nLightColor[1] == 0 && nLightColor[2] == 0 )
					{
						ctx.fillStyle = '#00FFFF';
					} else
					  {
						ctx.fillStyle = 'rgb('+nLightColor[0]+','+nLightColor[1]+','+nLightColor[2]+',1)';
					  }
				} else
				  {
					ctx.fillStyle = nSrCv[drcvID]['str_farbe'];
				  }
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


			if( drcvID == 1 )
			{
				// Pitch-Regler
				// ------------
				if( nSrCv[drcvID]['prozente'] == 50 )
				{
					nSrSpeed = 1;
					document.getElementById('nSrPitch').style.borderColor  = '#808080';
				} else
				  {
					document.getElementById('nSrPitch').style.borderColor  = 'orange';

					if( nSrCv[drcvID]['prozente'] < 50 )
					{
						nSrSpeed = 0.5 + (   nSrCv[drcvID]['prozente']        * 0.01 );
					} else
					  {
						nSrSpeed = 1   + ( ( nSrCv[drcvID]['prozente'] - 50 ) * 0.02 );
					  }
				  }

				nSrSpeed = Math.round((nSrSpeed*10)) / 10;
				document.getElementById('nSrPitch').innerHTML  = nSrSpeed;
				document.getElementById('audio1').playbackRate = nSrSpeed;
			}

			if( drcvID == 2 )
			{
				// Color-Regler
				// ------------
				nSrCvSetCM(nSrCv[drcvID]['prozente']);
			}

			if( nFreqIsAPI == 1 )
			{
				// 10-Band-EQ
				// ----------
				if( drcvID == 13 ) { nEqPreGain.gain.setValueAtTime((nSrCv[13]['prozente']/100), audioCtx.currentTime); }

				nEqFactor  = 5;    // 2 = 25, 5 = 10

				if( drcvID ==  3 ) {    nEQ_32.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID ==  4 ) {    nEQ_64.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID ==  5 ) {   nEQ_125.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID ==  6 ) {   nEQ_250.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID ==  7 ) {   nEQ_500.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID ==  8 ) {  nEQ_1000.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID ==  9 ) {  nEQ_2000.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID == 10 ) {  nEQ_4000.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID == 11 ) {  nEQ_8000.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
				if( drcvID == 12 ) { nEQ_16000.gain.setValueAtTime(((nSrCv[drcvID]['prozente']-50)/nEqFactor), audioCtx.currentTime); }
			} else
			  {
				AudioApiError();
			  }

			if( drcvID >= 3 && drcvID <= 12 )
			{
				// 10-Band-EQ
				// ----------
				document.getElementById('nEqPreDisplay').innerHTML        = 'USER'; 
				document.getElementById('nMusicButton_eqPre').style.color = nButtonColorOff;
			}

			if( drcvID == 14 )
			{
				// AmbiLight
				// ---------
				aPro = nSrCv[drcvID]['prozente'];

				if( aPro <  4 )
				{
					chR = 255;
					chG = 255;
					chB = 255;
				}
				if( aPro >=  4 && aPro < 20 )
				{
					step = Math.ceil( 255 * ( ( aPro - 4 ) / 16 ) );
					chR  = 255;
					chG  = step;
					chB  = 0;
				}
				if( aPro >= 20 && aPro < 36 )
				{
					step = Math.ceil( 255 * ( ( aPro - 20 ) / 16 ) );
					chR  = 255 - step;
					chG  = 255;
					chB  = 0;
				}
				if( aPro >= 36 && aPro < 52 )
				{
					step = Math.ceil( 255 * ( ( aPro - 36 ) / 16 ) );
					chR  = 0;
					chG  = 255;
					chB  = step;
				}
				if( aPro >= 52 && aPro < 68 )
				{
					step = Math.ceil( 255 * ( ( aPro - 52 ) / 16 ) );
					chR  = 0;
					chG  = 255 - step;
					chB  = 255;
				}
				if( aPro >= 68 && aPro < 84 )
				{
					step = Math.ceil( 255 * ( ( aPro - 68 ) / 16 ) );
					chR  = step;
					chG  = 0;
					chB  = 255;
				}
				if( aPro >= 84 )
				{
					step = Math.ceil( 255 * ( ( aPro - 84 ) / 16 ) );
					chR  = 255;
					chG  = 0;
					chB  = 255 - step;
				}

				chR = ( chR <   0 ) ?   0 : chR;
				chG = ( chG <   0 ) ?   0 : chG;
				chB = ( chB <   0 ) ?   0 : chB;

				chR = ( chR > 255 ) ? 255 : chR;
				chG = ( chG > 255 ) ? 255 : chG;
				chB = ( chB > 255 ) ? 255 : chB;

				nLightColor = [chR,chG,chB];

				if( nLight > 0 && audio.paused == true )
				{
					document.getElementById('nMusicTable').style.boxShadow = '0px 0px '+nAmbiLightUse+'px rgb('+nLightColor[0]+','+nLightColor[1]+','+nLightColor[2]+',1)';
				}
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
				if( nSrCv[getID]['mitte'] == 1 )
				{
					nSrCvSet(getID, 50);
				} else
				  {
					nSrCvSet(getID, 0);
				  }
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

				// Color-Regler
				// ------------
				if( nSrCvDrag == 2 )
				{
					nSrCvSetCM(nSrCv[nSrCvDrag]['prozente']);
				}
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


	document.onload = window.setTimeout("nSrCvInit()", 100);


	function nSrCvSetCM(proz)
	{
		// Color-Regler
		// ------------
		// ('#00FFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#FFFFFF', '#000000');

		switch( proz )
		{
			case 15:
				nFreqColor = nFreqColors[1];
				break;
			case 30:
				nFreqColor = nFreqColors[2];
				break;
			case 45:
				nFreqColor = nFreqColors[3];
				break;
			case 60:
				nFreqColor = nFreqColors[4];
				break;
			case 75:
				nFreqColor = nFreqColors[5];
				break;
			case 88:
				nFreqColor = nFreqColors[6];
				break;
			case 100:
				nFreqColor = nFreqColors[7];
				break;
			default:
				nFreqColor = nFreqColors[0];
		}
	}

