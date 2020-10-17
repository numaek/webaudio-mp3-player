

	/* 
	 * Seiten-Speicher (localStorage)
	 * ------------------------------
	 * 
	 * Script:        nSiteCache
	 * 
	 * Version:       1.1
	 * Release:       01.05.2020
	 * 
	 * Author:        numaek   
	 * Copyright (c): 2004-2020 by www.numaek.de
	 * 
	 * *************************************************************************************************************************************************************************************
	 */


	function nSiteCache(prefix)
	{
		/*
		 * 
		 * Im Javascript - den Speicher initialisieren:
		 * ============================================
		 * myCache = new nSiteCache('MyPrefix_');		// Neuen Speicherbereich mittels Präfix im Key-Namen erstellen
		 * 
		 * 
		 * Im Javascript - verfügbare Methoden:
		 * ------------------------------------
		 * myCache.save(key, value);				// Einen Wert speichern
		 * myCache.read(key, default, dataType);		// Einen Wert auslesen, mit Datentyp-Umwandlung und Defaultwert
		 * myCache.delete(key);					// Einen Wert entfernen
		 * 
		 * myCache.getLength();					// Gibt die Anzahl der eigenen Werte an
		 * myCache.getLengthAll();				// Gibt die Anzahl aller Werte im localStorage an
		 * myCache.getArray();					// Gibt ein sortiertes assoziatives Array mit den eigenen Werten zurück
		 * 
		 * myCache.log();					// Loggt das eigene Objekt in der Konsole
		 * myCache.logValues();					// Loggt die eigenen Speicherwerte in der Konsole
		 * myCache.logValuesAll();				// Loggt alle Speicherwerte des localStorage in der Konsole
		 * 
		 */


		this.prefix = prefix;
		this.init   = 0;
		this.run    = 0;


		// =============================================================================================================================================================================
		// Hauptfunktionen

		this.delete = function(lsKey)
		{
			// Entfernt einen Wert
			// ===================
			if( this.run == 0 ) { return false; }

			try
			{
				localStorage.removeItem(this.prefix+lsKey);
				return true;
			} catch(e)
			  {
				console.log('Fehler beim Entfernen!\n'+e);
				return false;
			  }
		}

		this.read = function(lsKey, defaultValue, dataType)
		{
			// Liest einen Wert aus
			// ====================
			if( this.run == 0 ) { return false; }

			if( dataType === 'undefined' ) { dataType = '' }

			try
			{
				    dataValue  = localStorage.getItem(this.prefix+lsKey);
				if( dataValue != null )
				{
					if( dataType == 'int' )
					{
						dataValue = parseInt(dataValue);
					} else
					if( dataType == 'float' )
					{
						dataValue = parseFloat(dataValue);
					}
					return dataValue;
				} else
				  {
					return defaultValue;
				  }
			} catch(e)
			  {
				console.log('Fehler beim Lesen!\n'+e);
				return false;
			  }
		}

		this.save = function(lsKey, lsValue)
		{
			// Speichert einen Wert
			// ====================
			if( this.run == 0 ) { return false; }

			try
			{
				localStorage.setItem(this.prefix+lsKey, lsValue);
				return true;
			} catch(e)
			  {
				console.log('Fehler beim Speichern!\n'+e);
				return false;
			  }
		}

		// =============================================================================================================================================================================
		// Hilfsfunktionen

		this.getLength = function()
		{
			// Gibt die Anzahl der eigenen Werte an
			// ====================================
			if( this.run == 0 ) { return false; }

			retVal = 0;
			for( lsKey in localStorage )
			{
				if( lsKey.substring(0, (prefix.length)) == prefix )
				{
					retVal++;
				}
			}
			return retVal;
		}

		this.getLengthAll = function()
		{
			// Gibt die Anzahl aller Werte an
			// ==============================
			if( this.run == 0 ) { return false; }
			return localStorage.length;
		}

		this.getArray = function()
		{
			// Gibt ein sortiertes assoziatives Array mit den eigenen Werten zurück
			// ====================================================================
			if( this.run == 0 ) { return false; }

			lsSortArray = [];
			returnArray = [];
			for( lsKey in localStorage )
			{
				if( lsKey.substring(0, (prefix.length)) == prefix )
				{
					lsSortArray.push(lsKey);
				}
			}
			lsSortArray.sort();

			for( sa = 0; sa < lsSortArray.length; sa++ )
			{
				sortedKey              = lsSortArray[sa];
				returnArray[sortedKey] = localStorage[sortedKey];
			}
			return returnArray;
		}

		// =============================================================================================================================================================================
		// Log-Funktionen

		this.log = function()
		{
			// Loggt das eigene Objekt
			// =======================
			console.log( this );
		}

		this.logValues = function()
		{
			// Loggt die eigenen Speicherwerte
			// ===============================
			if( this.run == 0 ) { return false; }
			console.log( this.getArray() );
		}

		this.logValuesAll = function()
		{
			// Loggt alle Speicherwerte
			// ========================
			if( this.run == 0 ) { return false; }
			console.log( localStorage );
		}

		// ##########################################################################################################################################################################

		if( this.init == 0 )
		{
			if( typeof(localStorage) !== "undefined")
			{
				this.run = 1;
			} else
			  {
				console.log('Kein localStorage vorhanden!');
			  }

			this.init = 1;
		}
	}

