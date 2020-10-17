
	<!-- PLAYLIST -->
	<tr class="trLine" id="nLinePl" style="display: none; visibility: hidden;">
		<td class="blockMain blockLeft">
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=PL&dir=up');"   title="Baustein nach oben verschieben">&uArr;</a><br>
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=PL&dir=down');" title="Baustein nach unten verschieben">&dArr;</a>
		</td>
		<td class="blockPl" style="text-align: left; height: 140px;">
			<div id="nPlVdiv" style="border: 0px solid #000000; background: linear-gradient(#404040, #151515); position: absolute; width: 643px; height: 135px; z-index: 75; display: none; visibility: hidden;">
				<table border="0" style="width: 100%;">
					<tr>
						<td style="width: 25%; text-align: left; padding-left: 0px;">
							<input type="button" class="nMusicButtonBlank"  value="Verwalten" style="width: 70px; font-weight: bold;" onclick="self.location.href='admin.php';" title="Playlisten verwalten">
						</td>
						<td style="width: 50%; text-align: center;">
							<div style="width: 220px; margin: 0px auto; text-align: center; padding: 3px; border: 2px solid #303030; border-radius: 10px; background-color: #000000;"><span style="font-weight: bold; text-decoration: none; color: gold;">.:: Playlisten wechseln ::.</span></div>
						</td>
						<td style="width: 25%; text-align: right;">
							<input type="button" class="nMusicButtonBlank"  value="X"         style="width: 30px; font-weight: bold;" onclick="this.blur(); nMusic_plOpen();" title="Playlisten beenden">
						</td>
					</tr>
					<tr>
						<td colspan="3" style="vertical-align: top;">
							<table border="0" style="border-spacing: 1px; background-color: #000000; width: 100%; border: 0px solid #808080;">
								<tr>
									<td class="plvHead" style="text-align: center; width: 30px;">ID</td>
									<td class="plvHead" style="text-align: center; width: 80px;">Laufzeiten</td>
									<td class="plvHead" style="text-align: center; width: 70px;">Erstellt</td>
									<td class="plvHead" style="text-align: center; width: 50px;">Tracks</td>
									<td class="plvHead">Name</td>
								</tr>
							</table>
							<div class="tlDiv" style="border: 0px solid red; width: 100%; height: 80px; overflow: auto; scoll: yes;">
								<div id="nPLVtable"></div>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<table class="nMusicDisplay" align="center" style="background-color: #000000; width: 264px; height: 96px; border: 2px solid #303030; border-radius: 5px;">
				<tr>
					<td style="width: 100%; height: 96px; vertical-align: top;">
						<div class="tlDiv" style="border: 0px solid red; width: 100%; height: 96px; overflow: auto; scoll: auto;">
							<div id="nPlaylistTable"></div>
						</div>
					</td>
				</tr>
			</table>
			<table border="0" style="padding-left: 5px; padding-top: 5px; border-spacing: 0px;">
				<tr>
					<td>
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_plopen" style="width: 20px; font-size: 8pt;"     value="&#9167;" onclick="this.blur(); nMusic_plOpen();" title="Playlisten">
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_scan"   style="width: 40px;"                     value="SCAN"    onclick="this.blur(); nMusic_scan();"   title="Titel anspielen">
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_prg"    style="width: 40px; margin-right: 15px;" value="PRG"     onclick="this.blur(); nMusic_prg();"    title="Abspielfolge programmieren">
					</td>
					<td id="nPlLengthDisplay" style="width: 110px; text-align: right; padding-left: 4px; padding-right: 16px; border: 2px solid #303030; border-radius: 5px; font-weight: bold; background-color: #000000; color: #00FFFF;"></td>
				</tr>
			</table>
		</td>
		<td class="blockPl" style="text-align: center;">
			<table border="0" style="padding-bottom: 5px; padding-left: 0px; border-bottom: 1px solid #FFFFFF;">
				<tr>
					<td style="width: 50%; text-align: center;">
						<div id="bpmFrame"    style="width: 50px; height: 50px; margin: 0 auto; border-radius: 50%; border: 1px solid black; cursor: pointer;" onclick="bpmTap();" title="Klicken zur BPM-Bestimmung">
							<div id="bpm" style="width: 40px; height: 40px; background-color: #303030; margin-top: 4px; margin-left: 4px; text-align: center; border-radius: 50%; border: 1px solid black;">
								<span style="line-height: 22px; text-decoration: underline; font-weight: bold;">BPM</span><br><div><div id="bpmValue">- - -</div></div>
							</div>
						</div>
					</td>
					<td style="width: 50%; text-align: center; vertical-align: bottom;">
						<table border="0" align="center" stzle="border-spacing: 0px;"><tr><td style="padding-bottom: 5px;">&Pi;</td>
						<td><img id="bpmLed" src="src/led_aus.gif" border="0" width="12" height="12"></td></tr></table>
						<canvas id="nSsCv0" width="50" height="22" style="margin-top: 3px; border: 0px solid red;" onclick="javascript:nSsCvSet(0, -1);"></canvas>
					</td>
				</tr>
			</table>
			<table border="0" style="width: 100%; padding-top: 2px;">
				<tr>
					<td style="width: 50%; text-align: center;">
						<canvas id="nDrCv3" width="45" height="41" style="border: 0px solid #808080;"></canvas>
						<br><span style="font-size: 7pt; cursor: Help;" title="Echo">ECHO</span>
					</td>
					<td style="width: 50%; text-align: center;">
						<canvas id="nDrCv9"  width="45" height="41" style="border: 0px solid #808080;"></canvas>
						<br><span style="font-size: 7pt; cursor: Help;" title="Stereo Delay">ST. DEL</span>
					</td>
				</tr>
			</table>
		</td>
		<td class="blockPl" style="text-align: right; padding-right: 10px;">
			<div id="nPlRadio" style="border: 0px solid #000000; background: linear-gradient(#404040, #151515); position: absolute; width: 255px; height: 104px; margin-left: 2px; z-index: 74; display: none; visibility: hidden;">
				<div style="width: 140px; margin: 0px auto; text-align: center; padding: 1px; border: 2px solid #303030; border-radius: 10px; background-color: #000000;"><span style="font-weight: bold; text-decoration: none; color: gold;">.:: WEB-RADIO ::.</span></div>
				<div style=" border: 2px solid #303030; border-radius: 5px; background-color: #000000; width: 99%; height: 84px; overflow: hidden; scoll: no;">
					<div id="nPlRadioTable" class="tlDiv" style="background-color: #000000; width: 98%; height: 80px; margin-top: 2px; border: 0px; overflow: auto; scoll: yes;"></div>
				</div>
			</div>
			<canvas id="nOszCanvas" width="250" height="100" onclick="javascript:anaDisplaySwitch('osz');" title="Display Ein- und ausschalten" style="overflow: hidden; background-color: #000000; border: 2px solid #303030; border-radius: 5px; cursor: pointer"></canvas><br>
			<table border="0" align="right" style=" padding-top: 4px; border-spacing: 0px;">
				<tr>
					<td><span style="padding-right: 11px; color: #FFFFFF; font-size: 10px; line-height: 20px;">WELLENFORM</span></td>
					<td       style="text-align: right">
						<input type="file"   id="nLocalFileSource"   accept="audio/mpeg" multiple style="display: none;" onchange="nLocalFileSelect(this.files);">
						<input type="button" id="nMusicButton_local" class="nMusicButtonBlank"    style="width: 50px; margin-right: 5px;" value="LOCAL" onclick="this.blur();" title="Musikdatei von der Festplatte abspielen">
						<input type="button" id="nMusicButton_radio" class="nMusicButtonBlank"    style="width: 50px; margin-right: 8px;" value="RADIO" onclick="this.blur(); nMusic_radio();" title="Radio-Quellen ansehen">
						<table align="right" border="0" align="center" style="border: 1px solid #505050; border-spacing: 2px;" title="Signal &uuml;bersteuert"><tr><td style="padding-bottom: 2px; font-size: 7pt;">CLIP</td>
						<td><img id="oszLed" src="src/led_aus.gif" border="0" width="12" height="12" hspace="2"></td></tr></table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
