
	<!-- EQUALIZER -->
	<tr class="trLine" id="nLineEq" style="display: none; visibility: hidden;">
		<td class="blockMain blockLeft">
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=EQ&dir=up');"   title="Baustein nach oben verschieben">&uArr;</a><br>
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=EQ&dir=down');" title="Baustein nach unten verschieben">&dArr;</a>
		</td>
		<td class="blockEq" style="height: 140px; padding-left: 15px;">
			<table border="0" style="border-spacing: 0px;">
				<tr>
					<td colspan="2" style="font-size: 6pt;">32&nbsp;&nbsp;&nbsp;64&nbsp;&nbsp;125&nbsp;250&nbsp;&nbsp;500&nbsp;&nbsp;1K&nbsp;&nbsp;&nbsp;2K&nbsp;&nbsp;&nbsp;4K&nbsp;&nbsp;&nbsp;8K&nbsp;&nbsp;16K&nbsp;<span style="color: #FF0000;">PRE</span></td>
				</tr>
				<tr>
					<td>
						<canvas id="nSrCv3"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv4"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv5"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv6"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv7"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv8"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv9"  width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv10" width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv11" width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv12" width="12" height="90" style="border: 0px solid #808080; margin-right: 3px;"></canvas>
						<canvas id="nSrCv13" width="12" height="90" style="border: 0px solid #808080; margin-right: 0px;"></canvas>
					</td>
					<td style="padding-left: 5px;">
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_eqUser" style="width: 40px;" value="USER" onmousedown="this.blur(); nMusic_eqUser(1);" onmouseup="this.blur(); nMusic_eqUser(0);" title="User-Einstellungen:&#10;---------------------&#10;Tippen = Laden&#10; 3 Sekunden halten = Speichern">
						<br><br>
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_eqFlat" style="width: 40px;" value="FLAT" onclick="this.blur(); nMusic_eqFlat();" title="Alle Regler auf 0">
						<br><br>
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_eqPre"  style="width: 40px;" value="PRE"  onclick="this.blur(); nMusic_eqPre();"  title="Vorgefertigte Kurven">
					</td>
				</tr>
			</table>
			<table border="0" style="width: 250px; padding-top: 5px; border-spacing: 0px;">
				<tr>
					<td><span style="color: #FFFFFF; font-size: 10px; line-height: 20px; float: left;">10-BAND-EQUALIZER</span></td>
					<td id="nEqPreDisplay" style="width: 120px; border: 2px solid #303030; border-radius: 5px; font-weight: bold; background-color: #000000;"></td>
				</tr>
			</table>
		</td>
		<td class="blockEq" style="text-align: center; vertical-align: top;">
			<canvas id="nDrCv2" width="90" height="90" style="border-bottom: 1px solid #FFFFFF;"></canvas><br>
			<canvas id="nSrCv2" width="90" height="20" style="border: 0px solid #808080; padding-top: 5px; padding-bottom: 1px;"></canvas><br>
			<span style="font-size: 7pt;">DISPLAY-COLOR</span><br><br>
		</td>
		<td class="blockEq"
		<td class="blockPl" style="text-align: right; padding-right: 10px;">
			<canvas id="nFreqCanvas" width="250" height="100" onclick="javascript:anaDisplaySwitch('freq');" title="Display Ein- und ausschalten" style="overflow: hidden; background-color: #000000; border: 2px solid #303030; border-radius: 5px; cursor: pointer"></canvas><br>
			<table border="0" align="right" style="padding-top: 4px; border-spacing: 0px;">
				<tr>
					<td><span style="padding-right: 90px; color: #FFFFFF; font-size: 10px; line-height: 20px; float: left;">FREQUENZ SPEKTRUM</span></td>
					<td       style="padding-right:  5px; text-align: right"><input type="button" class="nMusicButtonBlank" id="nMusicButton_eqLine" style="width: 40px;" value="LINE" onclick="this.blur(); nFreqEQLine();" title="Stellungen im Display anzeigen"></td>
				</tr>
			</table>
		</td>
	</tr>
	<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
