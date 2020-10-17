
	<!-- PLAYER -->
	<tr class="trLine" id="nLineMain" style="display: table-row; visibility: visible;">
		<td class="blockMain blockLeft">
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=MAIN&dir=up');"   title="Baustein nach oben verschieben">&uArr;</a><br>
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=MAIN&dir=down');" title="Baustein nach unten verschieben">&dArr;</a>
		</td>
		<td class="blockMain" colspan="3" style="vertical-align: top; height: 230px;">
			<div id="nPlayerHelp" style="border: 0px solid #000000; background: linear-gradient(#404040, #151515); position: absolute; width: 645px; height: 230px; z-index: 95; display: none; visibility: hidden;">
				<table border="0" style="width: 100%;">
					<tr>
						<td style="width: 25%; padding-left: 10px;">
							<span onMouseover="nSpeak('besuch');" style="color: #00FFFF; font-weight: bold; cursor: pointer;" onclick="window.open('http://www.numaek.de');">www.numaek.de</span>
						</td>
						<td style="width: 50%; text-align: center;">
							<div style="width: 230px; margin: 0px auto; text-align: center; padding: 3px; border: 2px solid #303030; border-radius: 10px; background-color: #000000;"><a href="http://www.numaek.de" target="_blank" title="www.numaek.de" style="font-weight: bold; text-decoration: underline; color: gold;">.:: numaek WebAudio Player 2.0 ::.</a></div>
						</td>
						<td style="width: 25%; text-align: right;">
							<input type="button" class="nMusicButtonBlank"  value="X"   style="width: 30px; font-weight: bold;" onclick="this.blur(); nMusic_info();" title="Infos & Hilfe beenden">
						</td>
					</tr>
					<tr>
						<td colspan="3" style="height: 190px;">
							<div style="width: 100%;">
								<div style="width: 5px; height: 5px; margin: 0px; padding: 0px; float: left;"></div>
								<div id="nRegisterButton_1_1"  class="nRegisterButton" onclick="nRegisterSet(1, 1, 0);" onMouseOver="nRegisterOver('1_1', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_1', 0); nRegisterHinweis(1, '');">Entstehung</div>
								<div id="nRegisterButton_1_2"  class="nRegisterButton" onclick="nRegisterSet(1, 2, 0);" onMouseOver="nRegisterOver('1_2', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_2', 0); nRegisterHinweis(1, '');">Funktionen</div>
								<div id="nRegisterButton_1_3"  class="nRegisterButton" onclick="nRegisterSet(1, 3, 0);" onMouseOver="nRegisterOver('1_3', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_3', 0); nRegisterHinweis(1, '');">Steuerung</div>
								<div id="nRegisterButton_1_4"  class="nRegisterButton" onclick="nRegisterSet(1, 4, 0);" onMouseOver="nRegisterOver('1_4', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_4', 0); nRegisterHinweis(1, '');">Mischpult</div>
								<div id="nRegisterButton_1_5"  class="nRegisterButton" onclick="nRegisterSet(1, 5, 0);" onMouseOver="nRegisterOver('1_5', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_5', 0); nRegisterHinweis(1, '');">Browser</div>
								<div id="nRegisterButton_1_6"  class="nRegisterButton" onclick="nRegisterSet(1, 6, 0);" onMouseOver="nRegisterOver('1_6', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_6', 0); nRegisterHinweis(1, '');">DSP</div>
								<div id="nRegisterButton_1_7"  class="nRegisterButton" onclick="nRegisterSet(1, 7, 0);" onMouseOver="nRegisterOver('1_7', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_7', 0); nRegisterHinweis(1, '');">Cookies</div>
								<div id="nRegisterButton_1_8"  class="nRegisterButton" onclick="nRegisterSet(1, 8, 0);" onMouseOver="nRegisterOver('1_8', 1); nRegisterHinweis(1, '');" onMouseOut="nRegisterOver('1_8', 0); nRegisterHinweis(1, '');">Lizenz & Copyright</div>
								<div id="nRegisterHinweis_1"   class="nRegisterHinweis"></div>
								<div id="nRegisterContent_1_1" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Dieser Music-Player demonstriert, was mit der WebAudio-API so alles m&ouml;glich ist.
									Es sind nicht alle Funktionen abgedeckt, aber wohl die wichtigsten.
									Er ist dazu gedacht, dass ihr euren Besuchern Musik auf der eigenen Homepage anbieten k&ouml;nnt.
									Sei es die selbst komponierte oder einfach nur zur Unterhaltung.
									<br><br>
									Playlist-Verwaltung und Dateiupload sind passwortgesch&uuml;tzte Bestandteile des Players.
									Playlist-Dateien liegen f&uuml;r den Player im eigenen internen Format vor, k&ouml;nnen aber im .m3u-Format im- und exportiert werden.
									Freigegebene Listen erscheinen dann als Auswahl. Eine wird als Vorwahl markiert.
									Sofern erlaubt, k&ouml;nnen Besucher auch ihre eingenen .mp3-Dateien von ihrer Festplatte abspielen.
								</div></div>
								<div id="nRegisterContent_1_2" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Da etwas Spielerei nicht fehlen darf, verf&uuml;gt der Player noch &uuml;ber einen 10-Band Equalizer mit vorgefertigten Kurven 
									und einem individuellen Speicherplatz, sowie diverse Anzeigemodi und -Farben f&uuml;r die Frequenz-Spektrum Anzeige.
									Dazu noch Regler f&uuml;r Echo- und Panoramaeffekte.
									Das Oszilloskop zeigt den aktuellen kurvenverlauf.
									<br><br>
									Die Wellenformanalyse liest die kompletten PCM-Daten ein und stellt diese mit einer direkten Sprungfunktion dar.
									Der aktuelle sichtbare Ausschnitt der ganzen Grafik l&auml;uft durch einen begrenzten Bereich.
									Dabei werden die BPM ermittelt und die ID3-Tags ausgelesen.
									Die Loudness-Funktion arbeitet bis zur halben Lautst&auml;rke, indem die tiefen T&ouml;ne angehoben werden.
									Die Lautst&auml;rkeanpassung ist ein vollautomatisches Modul der API.
									<br><br>
									Der DSP Baustein produziert diverse Raumklang- und Verz&ouml;gerungseffekte.
									Der Tongenerator erf&uuml;llt keinen besonderen Zweck.
									Die restlichen Funktionen sollten von andern Playern her bekannt und selbsterkl&auml;rend sein.
								</div></div>
								<div id="nRegisterContent_1_3" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									F&uumlr die Bedienung ist eine Maus optimal, wobei es auch mit dem Finger funktionert.<br>
									Einige Funktionen lassen sich auch mit Tasten verwenden. Hier ist eine Funktions&uuml;bersicht:<br>
									<br>
									<table border="0">
										<tr>
											<td style="text-align: center;">Y</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Play</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">&lt; / &gt;</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Suchlauf (halten)</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">V</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Visualisierungs-Ansicht</td>
										</tr>
										<tr>
											<td style="text-align: center;">P</td>
											<td style="text-align: center;">=</td>
											<td>Pause</td>
											<td></td>
											<td style="text-align: center;">Bild auf / Bild ab</td>
											<td style="text-align: center;">=</td>
											<td>Track-Sprung</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">H</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Diese Hilfe hier</td>
										</tr>
										<tr>
											<td style="text-align: center;">S</td>
											<td style="text-align: center;">=</td>
											<td>Stop</td>
											<td></td>
											<td style="text-align: center;">Pos1 / Ende</td>
											<td style="text-align: center;">=</td>
											<td>PL-Start / PL-Ende</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">W</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Willkommens-Texte</td>
										</tr>
										<tr>
											<td style="text-align: center;">M</td>
											<td style="text-align: center;">=</td>
											<td>Mute</td>
											<td></td>
											<td style="text-align: center;">+ / -</td>
											<td style="text-align: center;">=</td>
											<td>Volume</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">C</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Cover-Bild & ID3-Daten</td>
										</tr>
										<tr>
											<td style="text-align: center;">Z</td>
											<td style="text-align: center;">=</td>
											<td>Random</td>
											<td></td>
											<td style="text-align: center;">l / r</td>
											<td style="text-align: center;">=</td>
											<td>Balance</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">U</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Uhr & Kalender</td>
										</tr>
										<tr>
											<td style="text-align: center;">A</td>
											<td style="text-align: center;">=</td>
											<td>AmbiLight</td>
											<td></td>
											<td style="text-align: center;">&and; / &or;</td>
											<td style="text-align: center;">=</td>
											<td>Pitch</td>
											<td style="width: 40px;"></td>
											<td style="text-align: center;">D</td>
											<td style="text-align: center; width: 20px;">=</td>
											<td>Player-Demo starten</td>
										</tr>
									</table>
								</div></div>
								<div id="nRegisterContent_1_4" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Durch einen Klick auf den "DJ"-Button werden 2 identische Player in ein kleines Mischpult geladen.<br>
									Je Seite kann eine andere Playlist geladen werden. Wird dieselbe auf beiden Seiten verwendet, erkennt das der Player und
									&uuml;berspringt im Automix-Modus jeden zweiten Titel bei den automatischen &Uuml;berg&auml;ngen.
									Alternativ k&ouml;nnen auch unterschiedliche Abspielreihenfolgen programmiert werden.
									<br><br>
									In dieser Ansicht ist die Anordnung der Bausteine festgelegt und der VOL-Regler deaktiviert, da diese Funktionen hier die
									Kanal-Schieberegler und der Fader &uuml;bernehmen.
									<br><br>
									Die animierten Anzeigen k&ouml;nnen den Rechner stark belasten, daher lassen sie sich bei Bedarf mit den unteren Schaltern 
									einzeln deaktivieren. Sofern die Bilder noch nicht gecached sind, kann die Wellenformanalyse einige Sekunden dauern.
								</div></div>
								<div id="nRegisterContent_1_5" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Der Player ist f&uuml;r den Google-Chrome Browser optiomiert. Das Laden und Abspielen der .mp3-Dateien basiert auf dem &lt;audio&gt;-Object, 
									so dass ein Besucher mit einem alten Browser der nicht &uuml;ber die WebAudio-API verf&uuml;gt die Musik trotzdem noch h&ouml;ren kann.
									F&uuml;r diesen Fall werden auch die Werte der animierten Anzeigen mittels Zufallsgenerator simuliert.
									Diese Anzeigen werden in echtzeit mit Canvas realisiert und lesen die Frequenz- und Pegelwerte der Datei aus.
									<br><br>
									Auf Leistungsschwachen Endger&auml;ten kann es zu Verz&ouml;gerungen kommen, da doch einiges an Rechenleistung abverlangt wird.
									Das gilt besonders f&uuml;r das Mischpult mit 2 Playern gleichzeitig.
								</div></div>
								<div id="nRegisterContent_1_6" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Im linken Bereich des DSP-Bausteins (Digitaler Sound Prozessor) befinden sich 4 vorgefertigte Raumklangsimulationen
									sowie 4 akkustische Effekte.
									<br><br>
									Im mittleren Bereich kann ein Mikrofon eingebunden werden.<br>
									Wer sich dazu berufen f&uuml;hlt kann ja Karaoke singen, ansonten l&auml;sst es sich alternativ als Diktierger&auml;t verwenden.<br>
									Der Puffer wird als .webm-Datei (WebMedia) heruntergeladen und nimmt max. 999 Sekunden lang auf.
									<br><br>
									Der Tongenerator ist nur zum Erzeugen der 4 Wellenformen gedacht. Nur ein Spielzeug...
								</div></div>
								<div id="nRegisterContent_1_7" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Dieser Player verwendet Cookies f&uuml;r die pers&ouml;nlichen Einstellungen.<br>
									- So gibt es einen, der die Reihenfolge der Bausteine speichert.<br>
									- Ein weiterer merkt sich die USER-Stellungen des Equalizers.<br>
									- Noch einer, der sich die Konfiguration (normal oder DJ) merkt.<br>
									<br>
									Einige Einstellungen benutzen auch den lokalen Speicher des Browsers (localStorage).
								</div></div>
								<div id="nRegisterContent_1_8" class="nRegisterContent" style="height: 160px; text-align: justify;"><div class="nRegisterInner">
									Das Script ist Freeware und darf nach eigenen W&uuml;nschen angepasst und erweitert werden.
									Dennoch d&uuml;rfen das Copyright und sonstige Vermerke nicht entfernt werden!
									Die Weiterverbreitung des Scriptes <span style="text-decoration: underline;">im Orginalzustand</span> ist nicht verboten, sondern erw&uuml;nscht.
									Weitere Informationen sind den [<a href="http://www.numaek.de/Allgemeine-Geschaeftsbedingungen" target="_blank">AGB auf numaek.de</a>] zu entnehmen.
									<br><br>
									Auf die Lizenzrechte der angebotenen Titel ist nat&uuml;rlich gesondert zu achten!
								</div></div>
							</div>
							<script language="javascript"> document.onload = nRegisterSet(1, 1, 8); </script>
						</td>
					</tr>
				</table>
			</div>

			<audio id="audio1" preload src=""></audio>

			<table class="mainMainTable" border="0" align="center" style="width: 100%; border-spacing: 0px;">
				<tr>
					<td style="vertical-align: top; width: 125px; height: 190px;">
						<div id="nDisplayWAP" style="float: left; width: 112px; height: 14px; padding: 3px; border: 2px solid #303030; border-radius: 10px; background-color: #000000; font-size: 7.5pt; font-weight: bold; color: gold;">&nbsp;<a href="http://www.numaek.de" target="_blank" title="www.numaek.de" style="color: gold;">numaek Player 2.0</a></div>
						<br><br>
						<table border="0" style="border-spacing: 3px; padding-top: 7px;">
							<tr>
								<td><input type="button" class="nMusicButtonFrame" id="nMusicButton_wave"     style="width: 26px;"                                       value="WV"        onclick="this.blur(); nMusic_showWAVE(-1);"  title="Ein-Ausblenden: Wellenform"></td>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_mute"     style="width: 50px; margin-left: 3px; margin-right: 3px;"  value="MUTE"      onclick="this.blur(); nMusic_mute();"        title="Stummschaltung"></td>
								<td rowspan="4" style="text-align: center; vertical-align: bottom;">Pitch<br><canvas id="nSrCv1" width="24" height="73" style="border: 0px solid #808080; padding-top: 3px; padding-bottom: 0px;"></canvas></td>
							</tr>
							<tr>
								<td><input type="button" class="nMusicButtonFrame" id="nMusicButton_pl"       style="width: 26px;"                                       value="PL"        onclick="this.blur(); nMusic_showPL(-1);"    title="Ein-Ausblenden: Playlist"></td>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_loop"     style="width: 50px; margin-left: 3px; margin-right: 3px;"  value="LOOP"      onclick="this.blur(); nMusic_loop();"        title="Titel wiederholen"></td>
							</tr>
							<tr>
								<td><input type="button" class="nMusicButtonFrame" id="nMusicButton_eq"       style="width: 26px;"                                       value="EQ"        onclick="this.blur(); nMusic_showEQ(-1);"    title="Ein-Ausblenden: Equalizer"></td>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_random"   style="width: 50px; margin-left: 3px; margin-right: 3px;"  value="RAND"      onclick="this.blur(); nMusic_random();"      title="Zufallswiedergabe"></td>
							</tr>
							<tr>
								<td><input type="button" class="nMusicButtonFrame" id="nMusicButton_dsp"      style="width: 26px;"                                       value="DSP"       onclick="this.blur(); nMusic_showDSP(-1);"   title="Ein-Ausblenden: Digital Sound Processor"></td>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_repeat"   style="width: 50px; margin-left: 3px; margin-right: 3px;"  value="REPEAT"    onclick="this.blur(); nMusic_repeat();"      title="A B Repeat"></td>
							</tr>
							<tr>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_Info"     style="width: 26px;"                                       value="?"         onclick="this.blur(); nMusic_info();"        title="Infos & Hilfe zum Player"></td>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_loud"     style="width: 50px; margin-left: 3px; margin-right: 3px;"  value="LOUD"      onclick="this.blur(); nMusic_loud();"        title="Loudness"></td>
								<td><div class="nMusicDisplayStatus" id="nSrPitch" style="width: 24px; background-color: #000000; border-radius: 3px; cursor: Help;" title="Geschwindigkeits-Faktor">1</div></td>
							</tr>
							<tr>
								<td><input type="button" class="nMusicButtonVisu"  id="nMusicButton_Av"       style="width: 26px;"                                       value="AV"        onclick="this.blur(); nMusic_visu();"        title="Audio-Visualisierung"></td>
								<td><input type="button" class="nMusicButtonBlank" id="nMusicButton_demo"     style="width: 50px; margin-left: 3px; margin-right: 3px;"  value="DEMO"      onclick="this.blur(); nDemoSwitch();"        title="Player-Demo (ca. 2 Minuten)"></td>
								<td><input type="button" class="nMusicButtonDj"    id="nMusicButton_Dj"       style="width: 26px;"                                       value="DJ"        onclick="this.blur(); nMusic_dj();"          title="Umschalten auf DJ-Modus"></td>
							</tr>
						</table>
					</td>
					<td style="vertical-align: top; width: 400px;">
						<div id="mainDisplayWelcome" style="position: absolute; display: none; visiblity: hidden; z-index: 90; width: 396px; height: 188px; margin-left: 0px; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
							<div id="nWelcomeTxtCtx_1" class="nWelcomeTxtCtx">
								<span style="font-weight: bold; text-decoration: underline;">Willkommen im WebAudio-Player 2.0!</span><br><br>
								<p style="text-align: justify; font-size: 9pt;">
									Teste den Player auch mit Deiner eigenen Musik.
									Ziehe dazu einfach Deine .mp3-Dateien per Drag & Drop auf den Player oder klicke unterhalb auf "LOCAL" und w&auml;hle welche aus.
									<br><br>
									Dr&uuml;cke D zum Starten der Demo.
								</p>
							</div>
							<div id="nWelcomeTxtCtx_2" class="nWelcomeTxtCtx">
								<p style="text-align: justify; font-size: 9pt;">
									F&uuml;r weitere Infos klicke links auf das ? oder dr&uuml;cke die Taste H.
									&Ouml;ffne diese Hinweise sp&auml;ter wieder mit der Taste W.
									<br><br>
									&Auml;ndere die Reihenfolge der Bausteine mit den Up-Down Pfeilen am linken Rand oder blende welche aus mit den linken gr&uuml;nen Tasten.
								</p>
							</div>
							<div id="nWelcomeTxtCtx_3" class="nWelcomeTxtCtx">
								<p style="text-align: justify; font-size: 9pt;">
									Zum DJ-Spielen klicke auf die DJ-Taste. Der Player wird verdoppelt und in ein Mischpult geladen. Hier ist allerdings etwas Rechenleistung n&ouml;tig.
									<br><br>
									Zum Entspannen klicke auf die AV- oder V-Taste f&uuml;r diverse Visualisierungen...
								</p>
							</div>
							<br>
							<table style="position: absolute; bottom: 5px; left: 135px; border-spacing: 5px;" align="center"><tr>
								<td style="padding: 3px; font-weight: bold; border: 1px solid #00FFFF;"><a href="javascript:nWelcomeCtx('-');">&lt;</a></td>
								<td style="padding: 3px; font-weight: bold; border: 1px solid #00FFFF;"><a href="javascript:nWelcomeSwitch(0);">Schlie&szlig;en</a></td>
								<td style="padding: 3px; font-weight: bold; border: 1px solid #00FFFF;"><a href="javascript:nWelcomeCtx('+');">&gt;</a></td>
							</tr></table>
						</div>
						<div id="mainDisplayClock" style="vertical-align: bottom; position: absolute; display: none; visiblity: hidden; z-index: 90; width: 396px; height: 188px; margin-left: 0px; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
							<table border="0" style="position: absolute; bottom: 0px; width: 100%; height: 185px; border-spacing: 1px;">
								<tr>
									<td rowspan="2" style="padding: 5px; width: 128px; vertical-align: bottom;">
										<div id="nClockDispTime" style="margin: 0px auto; margin-bottom: 5px; width: 120px; height: 20px; text-align: center; line-height: 20px; font-weight: normal; font-size: 8pt; border: 1px solid #00FFFF; color: #00FFFF; background-color: #000000;">00:00:00</div>
										<div id="nClockDispUnix" style="margin: 0px auto; margin-bottom: 5px; width: 120px; height: 20px; text-align: center; line-height: 20px; font-weight: normal; font-size: 8pt; border: 1px solid #00FFFF; color: #00FFFF; background-color: #000000;"></div>
										<canvas id="nPlayerClock" width="120" height="120" style="padding-left: 5px; border: 0px solid red;"></canvas>
									</td>
									<td style="width: 70px; text-align: center; vertical-align: bottom; padding-bottom: 1px;">
										<div class="nMusicDisplayStatus" id="nClockDispAPm" style="width: 45px; height: 20px; line-height: 20px; color: #00FFFF; border:	1px solid #00FFFF;"><?php echo date('A'); ?></div>
										<div class="nMusicDisplayStatus" id="nClockDispGmt" style="width: 45px; height: 20px; line-height: 20px; color: #00FFFF; border:	1px solid #00FFFF;"><?php $gmt = explode(':', date('P')); echo "GMT".$gmt[0]; ?></div>
									</td>
									<td rowspan="2" style="padding: 5px; vertical-align: bottom;">
										<div id="nClockDispDate"  style="float: right; margin-bottom: 5px; width: 168px; height: 20px; line-height: 20px; text-align: center; font-weight: normal; font-size: 8pt; border: 1px solid #00FFFF; color: #00FFFF; background-color: #000000;"></div>
										<div id="nClockDispMonat" style="float: right; margin-bottom: 5px; width: 168px; height: 20px; line-height: 20px; text-align: center; font-weight: normal; font-size: 8pt; border: 1px solid #00FFFF; color: #00FFFF; background-color: #000000;"></div>
										<?php echo nPlayerKalender(date('n'), date('Y')); ?>
									</td>
								</tr>
								<tr>
									<td style="height: 124px; text-align: center; vertical-align: top;">
										<div class="nMusicDisplayArea" id="nClockDispSommer" style="margin: 0 auto; margin-bottom: 0px; font-size: 6pt; background-color: <?php echo (date('I') == 1 ) ? '#00FFFF' : '#303030'; ?>; border: 0px; width: 45px;">SOMMER</div>
										<canvas id="nMusicTacho" width="45" height="45" style="margin-top: 22px; margin-bottom: 0px; border: 0px solid #00FFFF;"></canvas>
										<div class="nMusicDisplayArea" id="" style="margin: 0 auto; margin-top: 0px; font-size: 6pt; background-color: #00FFFF; border: 0px; width: 45px;">TRACK</div>
									</td>
								</tr>
							</table>
						</div>
						<div id="mainDisplayCover" style="vertical-align: bottom; position: absolute; display: none; visiblity: hidden; z-index: 90; width: 396px; height: 188px; margin-left: 0px; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
							<table border="0" style="border-spacing: 4px; padding-left: 3px;">
								<tr>
									<td style="vertical-align: top;"><img id="nApicBig" src="" border="0" style="max-width: 176px; max-height: 176px;"></td>
									<td style="vertical-align: top; padding-left: 1px;">
										<table border="0" style="border-spacing: 2px;">
											<tr>
												<td style="vertical-align: top; text-align: right; padding-right: 5px;">Titel:</td>
												<td style="vertical-align: top;" id="id3_tag_title"></td>
											</tr>
											<tr>
												<td style="vertical-align: top; text-align: right; padding-right: 5px;">Interpret:</td>
												<td style="vertical-align: top;" id="id3_tag_artist"></td>
											</tr>
											<tr>
												<td style="vertical-align: top; text-align: right; padding-right: 5px;">Album:</td>
												<td style="vertical-align: top;" id="id3_tag_album"></td>
											</tr>
											<tr>
												<td style="vertical-align: top; text-align: right; padding-right: 5px;">Genre:</td>
												<td style="vertical-align: top;" id="id3_tag_genre"></td>
											</tr>
											<tr>
												<td style="vertical-align: top; text-align: right; padding-right: 5px;">Jahr:</td>
												<td style="vertical-align: top;" id="id3_tag_year"></td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</div>
						<div id="mainDisplayAnimation" style="text-align: center; position: absolute; display: none; visiblity: hidden; z-index: 90; width: 396px; height: 188px; margin-left: 0px; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
							<canvas id="canvasCopy" width="380" height="180" style="padding-top: 3px; border: 0px solid #808080;"></canvas>
						</div>
						<table id="mainDisplayTable" class="nMusicDisplay" border="0" align="center" style="width: 100%; border-spacing: 1px; background-color: #000000; border: 2px solid #303030; border-radius: 5px;">
							<tr>
								<td id="nDisplayTrackFrame" colspan="5" style="vertical-align: top; height: 16px; text-align: left; padding-left: 3px; padding-right: 0px; cursor: Help;"
								 onMouseover="nMusicDisplayStop(1);" onMouseout="nMusicDisplayStop(0);">
									<div style="width: 380px; white-space: nowrap; overflow: hidden;"><div id="nDisplayTrack" style="border: 0px solid red;">&#9835; -</div></div>
								</td>
							</tr>
							<tr>
								<td colspan="2" rowspan="2" style="width: 120px;">
									<div id="nApicImage" style="width: 120px; height: 100px; text-align: center; padding-top: 3px; border: 0px solid red; display: block; visibility: hidden;">
										<img id="nApic" src="nID3class.php" width="100" height="100" style="border: 1px solid #00FFFF; border-radius: 50%; cursor: pointer;" onMouseover="javascript:nApicSet(0);" onMouseout="javascript:nApicSet(1);" onClick="javascript:nApicSet(-1);" title="Bild ausrichten">
									</div>
								</td>
								<td rowspan="2" style="vertical-align: top;">
									<table border="0" style="padding-left: 3px; padding-top: 4px;">
										<tr>
											<td><canvas id="nCV3D" width="125" height="78" style="border: 0px solid #808080;"></canvas></td>
										</tr>
										<tr>
											<td style="text-align: left;">
												<table border="0" style="border-spacing: 0px; padding-top: 0px;">
													<tr>
														<td style="width: 52px;"><div class="nMusicDisplayArea" id="displayRepeat" style="margin: 0 auto; text-align: center; margin-bottom: 0px; background-color: #303030; border: 0px; width: 45px;">REPEAT</div></td>
														<td><div class="nMusicDisplayRepeat" id="displayRepeatA" style="width: 15px;">A</div></td>
														<td style="width: 27px; text-align: center;">&hArr;</td>
														<td><div class="nMusicDisplayRepeat" id="displayRepeatB" style="width: 15px;">B</div></td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
								<td style="width: 55px; height: 28px; text-align: center; vertical-align: bottom;"><div class="nMusicDisplayArea"                    style="margin-bottom: 0px; width: 45px;">TRACK</div></td>
								<td style="width: 55px;               text-align: center; vertical-align: bottom;"><div class="nMusicDisplayTime" id="displayTracks" style="margin-bottom: 0px; width: 45px; height: 16px; line-height: 16px; font-size: 8pt;">0 / 0</div></td>
							</tr>
							<tr>
								<td style="text-align: right;">
									<div class="nMusicDisplayTime"   id="nMtext_zeitGes"  style="margin-bottom: 6px; margin-right: 6px;">&nbsp;00:00</div>
									<div class="nMusicDisplayTime"   id="nMtext_zeitAkt"  style="margin-bottom: 6px; margin-right: 6px;">&nbsp;00:00</div>
									<div class="nMusicDisplayTime"   id="nMtext_zeitRest" style="                    margin-right: 6px;">-00:00</div>
									<div class="nMusicDisplayStatus" id="displayScan"     style="width: 45px;">SCAN</div>
								</td>
								<td style="vertical-align: top; padding-left: 2px;">
									<div class="nMusicDisplayArea" id="displayStereo" style="margin: 0 auto; margin-bottom: 5px; background-color: #303030; border: 0px; width: 45px;">STEREO</div>
									<div class="nMusicDisplayArea" id="displayLoad"   style="margin: 0 auto; margin-bottom: 5px; background-color: #303030; border: 0px; width: 45px;">LOAD</div>
									<div class="nMusicDisplayArea" id="displaySeek"   style="margin: 0 auto; margin-bottom: 5px; background-color: #303030; border: 0px; width: 45px;">SEEK</div>
									<div class="nMusicDisplayArea" id="displayPrg"    style="margin: 0 auto; margin-bottom: 5px; background-color: #303030; border: 0px; width: 45px;">PRG</div>
								</td>
							</tr>
							<tr>
								<td style="width: 55px;" style="cursor: Help;" title="Bitrate in KBits / Sekunde">
									<div class="nMusicDisplayStatus" id="displayKbps" style="width: 45px;">000 K/s</div>
								</td>
								<td colspan="3" rowspan="2" style="text-align: center;">
									<canvas id="nVUCanvas" width="224" height="38" onclick="javascript:anaDisplaySwitch('vu');" title="Peak Hold / Display Ein- und ausschalten" style="border: 0px solid #808080; cursor: pointer"></canvas>
								</td>
								<td><div class="nMusicDisplayStatus" id="displayLoop" style="width: 45px;">LOOP</div></td>
							</tr>
							<tr>
								<td style="cursor: Help;" title="Samplerate in Kilohertz">
									<div class="nMusicDisplayStatus" id="displayKhz" style="width: 45px;">00 Khz</div>
								</td>
								<td><div class="nMusicDisplayStatus" id="displayRnd"  style="width: 45px;">RAND</div></td>
							</tr>
						</table>
					</td>
					<td style="text-align: center; vertical-align: top; width: 115px;">
						<div style="width: 105px; padding-top: 3px; border: 0px solid #808080; margin: 0 auto;">
							<img id="ledApi"   src="src/led_aus.gif" border="0" width="12" height="12" style="cursor: Help; float: right; margin-right: 4px;" title="Web Audio API Status">
							<img id="ledError" src="src/led_aus.gif" border="0" width="12" height="12" style="cursor: Help; float:  left; margin-left:  4px;" title="Audio Fehler">
						</div>
						<canvas id="nDrCv0" width="105" height="100" style="border: 0px solid #808080;"></canvas><br>
						<table border="0" style="width: 100%; padding-top: 1px;">
							<tr>
								<td style="width: 50%; text-align: center;">
									<canvas id="nDrCv1" width="50" height="65" style="border: 0px solid #808080;"></canvas>
								</td>
								<td style="width: 50%; text-align: center;">
									<canvas id="nDrCv4" width="50" height="65" style="border: 0px solid #808080;"></canvas>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style="border-top: 2px solid #010101; padding-top: 4px;">
						<table border="0"><tr>
							<td style="padding-left: 2px;"><input type="button" class="nMusicButtonBlank" id="nMusicButton_light" style="width: 26px;" value="&#128161;" onclick="this.blur(); nMusic_light();" title="AmbiLight Lichtorgel"></td>
							<td style="padding-left: 7px; padding-top: 4px;"><canvas id="nSrCv14" width="80" height="14" style="border: 0px solid #202020;"></canvas></td>
						</tr></table>
					</td>
					<td style="border-top: 2px solid #010101; padding-top: 5px; padding-right: 5px; text-align: right;">
						<input type="button" class="nMusicButtonBlank" id="nMusicDispSwitch" style="width: 48px; margin-right:  6px; color: #00FF00;" value="DISP"      onclick="this.blur(); nDisplaySwitch();"     title="Display umschalten">
						<input type="button" class="nMusicButton" id="nMusicButton_stop"     style="width: 46px; margin-right:  0px;"                 value="Stop"      onclick="this.blur(); nMusic_stop();"        title="Stop">
						<input type="button" class="nMusicButton" id="nMusicButton_pause"    style="width: 46px; margin-right:  0px;"                 value="Pause"     onclick="this.blur(); nMusic_pause();"       title="Pause">
						<input type="button" class="nMusicButton" id="nMusicButton_play"     style="width: 46px; margin-right:  3px;"                 value="Play"      onclick="this.blur(); nMusic_play();"        title="Play">
						<input type="button" class="nMusicButton" id="nMusicButton_jStart"   style="width: 26px; margin-left:   3px;"                 value="|&lt;&lt;" onclick="this.blur(); nMusic_jumpStart();"   title="Zum ersten Titel springen">
						<input type="button" class="nMusicButton" id="nMusicButton_jEnd"     style="width: 26px;"                                     value="&gt;&gt;|" onclick="this.blur(); nMusic_jumpEnd();"     title="Zum letzten Titel springen">
						<input type="button" class="nMusicButton" id="nMusicButton_jBack"    style="width: 26px; margin-left:   3px;"                 value="&lt;&lt;"  onclick="this.blur(); nMusic_jumpBack();"    title="Zum vorherigen Titel springen">
						<input type="button" class="nMusicButton" id="nMusicButton_jForward" style="width: 26px;"                                     value="&gt;&gt;"  onclick="this.blur(); nMusic_jumpForward();" title="Zum n&auml;chsten Titel springen">
						<input type="button" class="nMusicButton" id="nMusicButton_sBack"    style="width: 24px; margin-left:   3px;"                 value="&lt;"      onMouseDown="this.blur(); nMusic_searchBack(1);"    onMouseUp="nMusic_searchBack(0);"    onMouseOut="nMusic_searchBack(0);"    title="Suchlauf r&uuml;ckw&auml;rts">
						<input type="button" class="nMusicButton" id="nMusicButton_sForward" style="width: 24px;"                                     value="&gt;"      onMouseDown="this.blur(); nMusic_searchForward(1);" onMouseUp="nMusic_searchForward(0);" onMouseOut="nMusic_searchForward(0);" title="Suchlauf vorw&auml;rts">
					</td>
					<td style="border-top: 2px solid #010101; padding-top: 7px;"><canvas id="nSrCv0" width="110" height="20" style="border: 0px solid #808080;" onmouseup="nMusic_jump();"></canvas></td>
				</tr>
			</table>
		</td>
	</tr>
	<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
