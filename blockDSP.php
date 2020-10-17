
	<!-- DSP -->
	<tr class="trLine" id="nLineDsp" style="display: none; visibility: hidden;">
		<td class="blockMain blockLeft">
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=DSP&dir=up');"   title="Baustein nach oben verschieben">&uArr;</a><br>
			<a href="javascript:nMusic_blockSwitch('playerSwitch.php?block=DSP&dir=down');" title="Baustein nach unten verschieben">&dArr;</a>
		</td>
		<td class="blockDsp" style="height: 105px; padding-left: 10px;">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_dspHall"    style="width: 60px;" value="Hall"     onclick="this.blur(); nMusic_dsp(0);" title="Raumklang: Echo">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_dspChurch"  style="width: 60px;" value="Church"   onclick="this.blur(); nMusic_dsp(2);" title="Raumklang: Kirche">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_dspStudio"  style="width: 60px;" value="Studio"   onclick="this.blur(); nMusic_dsp(1);" title="Raumklang: Tonstudio">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_dspTheatre" style="width: 60px;" value="Theatre"  onclick="this.blur(); nMusic_dsp(3);" title="Raumklang: Theater">
			<br>
			<table border="0" style="width: 250px; border-spacing: 0px; margin-top: 10px; margin-bottom: 12px;">
				<tr>
					<td style="width: 25px; font-size: 6pt;">DSP</td>
					<td style="border-left: 1px solid; border-bottom: 1px solid;"></td>
					<td style="width: 25px; font-size: 6pt; text-align: right;"></td>
				</tr>
				<tr>
					<td style="font-size: 6pt;"></td>
					<td style="border-right: 1px solid;"></td>
					<td style="font-size: 6pt; text-align: right;">FX</td>
				</tr>
			</table>
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_FxSlapback" style="width: 60px;" value="SlapBack" onclick="this.blur(); nMusic_FxSlapback();" title="Effekt: Slap Back">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_FxPingPong" style="width: 60px;" value="PinpPong" onclick="this.blur(); nMusic_FxPingpong();" title="Effekt: Ping Pong Delay">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_FxChorus"   style="width: 60px;" value="Chorus"   onclick="this.blur(); nMusic_FxChorus();"   title="Effekt: Chorus">
			<input type="button" class="nMusicButtonBlank" id="nMusicButton_FxTremolo"  style="width: 60px;" value="Tremolo"  onclick="this.blur(); nMusic_FxTremolo();"  title="Effekt: Tremolo">
		</td>
		<td class="blockDsp" style="text-align: center;">
			<table align="center" border="0" style="background: linear-gradient(#151515, #404040); padding-top: 4px; padding-left: 0px; border-left: 0px solid #DCDCDC; border-right: 0px solid #DCDCDC;">
				<tr>
					<td style="text-align: center;"><input type="button" class="nMusicButtonBlank" id="nMusicButton_mrRec"  style="width: 35px;" value="REC" onclick="this.blur(); mrRun(-1);"      title="Aufnahme starten & stoppen"></td>
					<td style="text-align: center;"><input type="button" class="nMusicButtonBlank" id="nMusicButton_micro"  style="width: 35px;" value="MIC" onclick="this.blur(); nMusic_micro();" title="Microfon-Eingang schalten"></td>
					<td style="text-align: center;"><img id="ledMicro" src="src/led_aus.gif" border="0" width="12" height="12"></td>
				</tr>
				<tr>
					<td style="text-align: center; vertical-align: top; padding-top: 10px;">
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_mrSave"  style="width: 35px;"                   value="SAVE" onclick="this.blur(); mrSave();"  title="Download der aktuellen Aufnahme"><br>
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_mrReset" style="width: 35px; margin-top: 13px;" value="RES"  onclick="this.blur(); mrReset();" title="Aufnahme verwerfen">
					</td>
					<td style="text-align: center; vertical-align: top;">
						<canvas id="nDrCv8" width="45" height="42" style="border: 0px solid #808080; margin-top: 7px;"></canvas><br>
						<span style="font-size: 7pt;">GAIN</span>
					</td>
					<td style="vertical-align: bottom;"><canvas id="nMicroVU" width="12" height="50" style="border: 1px solid #808080;"></canvas></td>
				</tr>
			</table>
		</td>
		<td class="blockDsp" style="padding-left: 10px;">
			<table border="0" style="padding-top: 4px; padding-left: 2px; border-left: 0px solid #DCDCDC;">
				<tr>
					<td style="width: 105px; text-align: center; vertical-align: bottom;" rowspan="2">
						<canvas id="nDrCv5" width="96" height="70" style="border: 0px solid #FFFFFF;"></canvas>
						<br><span style="font-size: 7pt;">WELLENFORM</span>
					</td>
					<td id="nDspFreqDisplay" style="height: 18px; border: 2px solid #303030; border-radius: 5px; text-align: right; font-weight: bold; color: #00FFFF; background-color: #000000; padding-right: 5px;">1000</td>
					<td style="text-align: center; vertical-align: top; padding-left: 18px;">
						<input type="button" class="nMusicButtonBlank" id="nMusicButton_dspOsc"  style="width: 35px;" value="OSZ"  onclick="this.blur(); nMusic_osc();" title="Oszillator">
						&nbsp;<sub><img id="ledOsc" src="src/led_aus.gif" border="0" width="12" height="12"></sub>
					</td>
				</tr>
				<tr>
					<td style="text-align: center; vertical-align: bottom;">
						&nbsp;<canvas id="nDrCv6" width="45" height="42" style="border: 0px solid #808080;"></canvas>
						<br><span style="font-size: 7pt;">FREQUENZ</span>
					</td>
					<td style="text-align: center; vertical-align: bottom; padding-left: 0px;">
						&nbsp;<canvas id="nDrCv7" width="45" height="42" style="border: 0px solid #808080;"></canvas>
						<br><span style="font-size: 7pt;">GAIN</span>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
